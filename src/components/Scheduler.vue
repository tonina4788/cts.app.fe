<template>
    <ejs-schedule ref='scheduleObj' id='Schedule' height='100vh' width='100%' 
        :selectedDate='selectedDate'
        :currentView='currentView'
        :views='views'
        :eventSettings='eventSettings'
        :actionBegin='onActionBegin'
        startHour='07:00'
        endHour='23:59'
        :editorTemplate='editorTemplate'
        :popupOpen='onPopupOpen'
        :timeScale='timeScale'>
        <e-resources>
            <e-resource field='AppointmentCategory' title='AppointmentCategory' name='AppointmentCategories' :dataSource='AppointmentCategory' textField='text' idField='id' colorField='color'>
            </e-resource>
        </e-resources>
    </ejs-schedule>
</template>

<script>
import { Day, Week, Month } from '@syncfusion/ej2-vue-schedule';
import { Timezone } from '@syncfusion/ej2-schedule';
import { mapActions, mapState } from "vuex"
import { L10n } from '@syncfusion/ej2-base';
import editorTemplate from "@/components/editorTemplate"
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList, AutoComplete } from '@syncfusion/ej2-dropdowns';
import { FormValidator } from '@syncfusion/ej2-inputs';

L10n.load({
    'en-US': {
        'schedule': {
            'saveButton': 'Add',
            'cancelButton': 'Close',
            'deleteButton': 'Remove',
            'newEvent': 'Add Appointment',
        },
    }
});

export default {
    name: 'Scheduler',
    data() {
        return {
            selectedDate: new Date(),
            currentView: 'Week',
            views: ['Day', 'Week', 'Month'],
            eventSettings: {
                dataSource: this.appointmentsList,
            },
            fields: {
                id: 'Id',
                subject: { name: 'Subject', validation: { required: true } }
            },
            AppointmentCategory: [
                { text: 'Surgery', id: "Surgery", color: '#1aaa55' },
                { text: 'Hospital Appointment', id: "Hospital Appointment", color: '#7fa900' },
                { text: 'Office Appointment', id: 'Office Appointment', color: '#357cd2' }
            ],
            editorTemplate: function(e) {
                return {
                    template: editorTemplate
                }; 
            },
            timeScale: {
                enable: true,
                interval: 60,
                slotCount: 4
            }
        }
    },
    provide: {
        schedule: [Day, Month, Week]
    },
    methods: {
        ...mapActions("appointment", ["getAllAppointments", "createAppointment", "editAppointment", "removeAppointment"]),
        onActionBegin(args) {
            console.log(args)
            if(args.requestType == "eventCreate") {
                this.$emit('create-appointment', args.addedRecords[0]);
            }
            if(args.requestType == "eventChange") {
                this.$emit('edit-appointment', args.changedRecords[0]);
            }
            if(args.requestType == "eventRemove") {
                this.$emit('delete-appointment', args.deletedRecords[0].Id);
            }
        },
        onPopupOpen: function(args) {
            if (args.type === 'Editor') {
                let startElement = args.element.querySelector('#StartTime');
                if (!startElement.classList.contains('e-datetimepicker')) {
                    new DateTimePicker(
                        { value: new Date(startElement.value) || new Date() },
                        startElement
                    );
                }
                let endElement = args.element.querySelector('#EndTime');
                if (!endElement.classList.contains('e-datetimepicker')) {
                    new DateTimePicker(
                        { value: new Date(endElement.value) || new Date() },
                        endElement
                    );
                }
                //APPOINTMENT TYPE
                let processElement = args.element.querySelector('#AppointmentCategory');
                let multiSelectObject = new DropDownList ({
                    placeholder: 'Choose appointment type...',
                    dataSource: this.AppointmentCategory,
                    // fields: { text: 'text', value: 'id', colorField: 'color' }
                });
                multiSelectObject.appendTo(processElement);

                //PATIENT LIST
                let processPatientElement = args.element.querySelector('#PatientData');
                let multiPatientSelectObject = new AutoComplete({
                    placeholder: 'Choose Patient...',
                    dataSource: this.patientList,
                    highlight: true,
                    fields: { text: 'Text'}
                });
                multiPatientSelectObject.appendTo(processPatientElement);
                processPatientElement.setAttribute('name', 'PatientData');

                //VALIDATIONS
                 let formElement = args.element.querySelector('.e-schedule-form');
                 let validator = formElement.ej2_instances[0];
                //  validator.addRules('PatientData', { required: true });
                 validator.addRules('AppointmentCategory', { required: true });
                 validator.rules.Subject = {required: true}
                //  console.log(validator)
            }
        }
    },
    props: ['appointmentsList', 'patientList'], 
    components:{
        editorTemplate
    }
}
</script>
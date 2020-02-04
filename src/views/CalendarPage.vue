<template>
    <div>
       <Scheduler 
        v-if="appointmentsList.length > 0 && patientsForAutocomplete.length> 0"
        :appointmentsList="appointmentsList" 
        :patientList="patientsForAutocomplete"
        @create-appointment="addAppointment"
        @edit-appointment="changeAppointment"
        @delete-appointment="deleteAppointment"/>
        <Loader v-else/>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Scheduler from "@/components/Scheduler"
import Loader from "@/components/common/Loader"

export default {
    name: 'CalendarPage',
    components: {
        Scheduler,
        Loader
    },
    methods: {
        ...mapActions("appointment", ["getAllAppointments", "createAppointment", "editAppointment", "removeAppointment"]),
        ...mapActions("patients", ["getPatientsForAutocomplete"]),
        addAppointment(appointmentData){
            this.createAppointment(appointmentData)
            this.getAllAppointments()
        },
        changeAppointment(appointmentData){
            this.editAppointment(appointmentData)
        },
        deleteAppointment(appointmentId){
            this.removeAppointment(appointmentId)
        }
    },
    computed:{
        ...mapState("appointment", ["appointmentsList"]),
        ...mapState("patients", ["patientsForAutocomplete"])
    },
    created(){
        this.getAllAppointments();
        this.getPatientsForAutocomplete();
    }
}
</script>
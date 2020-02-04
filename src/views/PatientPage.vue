<template>
    <div class="patient-info">
        <div class="patient-info__header">
            <h2 class="patient-info__header__title">{{currentPatient.Name}} {{currentPatient.Surname}}</h2>
            <div class="patient-info__header__tools">
                <div class="patient-info__header__tools__tool">
                    <div class="patient-info__header__tools__tool__text">PRINT RECEIPT</div>
                    <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/printer.svg`)"
                        class="patient-info__header__tools__tool__icon"
                    ></i>
                </div>
                <div class="patient-info__header__tools__tool">
                    <div class="patient-info__header__tools__tool__text">ADD DATE</div>
                    <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/add.svg`)"
                        class="patient-info__header__tools__tool__icon"
                    ></i>
                </div>
            </div>
        </div>
        <div class="patient-info__body">
            <div class="patient-info__body__personal-details">
                 <i v-if="!editableField" v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/edit.svg`)"
                    class="patient-info__body__personal-details__edit-btn"
                    @click="editPatient"
                ></i>
                <i v-else v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/save.svg`)"
                    class="patient-info__body__personal-details__edit-btn"
                    @click="savePatient"
                ></i>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        FIRST NAME
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Name"
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        LAST NAME
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Surname"
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        FATHER'S NAME
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.FathersName" 
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        EMAIL
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Email" 
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        PHONE
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Telephone" 
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        ADDRESS
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Address" 
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        JOB TITLE
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.JobTitle" 
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        AMKA
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Amka" 
                        :readonly="editableField? false : true"
                    />
                </div>
                <div class="patient-info__body__personal-details__field"> 
                    <div class="patient-info__body__personal-details__field__text">
                        RECOMMENDED BY
                    </div>
                    <input class="patient-info__body__personal-details__field__value input-form" 
                        :value="currentPatient.Recommendation" 
                        :readonly="editableField? false : true"
                    />
                </div>
            </div>
            <div class="patient-info__body__appointments">
                <template v-if="currentPatient.Appointment.length > 0">
                    <div class="patient-info__body__appointments__row"
                        v-for="(appointment, appointIndex ) in currentPatient.Appointment"
                        :key="appointIndex"
                        @click="routeToAppointment(appointment.Id)"
                    >
                        <div class="patient-info__body__appointments__row__cell">
                            {{appointment.HistoryDate}}
                        </div>
                        <div class="patient-info__body__appointments__row__cell">
                            {{appointment.AppointmentCategory}}
                        </div>
                        <div class="patient-info__body__appointments__row__cell --edit-row">
                            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Edit.svg`)"
                                class="patients__list__row__cell__icon"
                            ></i>
                        </div>
                    </div>
                </template>
                <div v-else class="patient-info__body__appointments__no-appointments">
                    NO APPOINTMENTS
                      <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/unamused.svg`)"
                        class="patient-info__body__appointments__no-appointments__icon"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name: 'PatientPage',
    data() {
        return {
            editableField: false
        };
    },
    methods: {
        ...mapActions("patients", ["getPatient", "addPatient"]),
        routeToAppointment(appointmentID) {
            this.$router.push({
                name: "AppointmentPage",
                params: {
                    id: appointmentID
                }
            })
        },
        editPatient() {
            this.editableField = true
        },
        savePatient() {
            this.editableField = false
            this.addPatient();
        }
    },
    computed: {
        ...mapState("patients", ["currentPatient"])
    },
    created() {
        this.getPatient(this.$route.params.id)
    },
    watch: {
        '$route.params.id': function () {
           this.getPatient(this.$route.params.id)
        }
    }
};
</script>
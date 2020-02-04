<template>
    <div class="patients">
        <AddPatient v-if="addPatientEnable" 
            @close-add-patient-cicked="closeAddPatient"
            @add-patient-cicked="addNewPatient"
        />
        <div class="patients__header">
            <div class="patients__header__title">PATIENTS LIST</div>
            <SearchInput @search-input="checkForPatients($event)"/>
            <div class="patients__header__tools">
                <div class="patients__header__tools__tool" @click="openAddPatient">
                    <div class="patients__header__tools__tool__text">ADD PATIENT</div>
                    <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/add.svg`)"
                        class="patients__header__tools__tool__icon"
                    ></i>
                </div>
            </div>
        </div>
        <PatientList :patientList="patients" @patient-clicked="routeToPatient"/>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import SearchInput from "@/components/SearchInput"
import AddPatient from "@/components/modals/AddPatient"
import PatientList from "@/components/PatientList"
import _ from "lodash";

export default {
    name: 'Patients',
    components: {
        SearchInput,
        AddPatient,
        PatientList
    },
    data() {
        return {
            addPatientEnable: false
        }
    },
    methods: {
        ...mapActions("patients", ["getPatients", "addPatient"]),
        checkForPatients: _.debounce(function(searchTerm) {
            this.getPatients(searchTerm);
        }, 300),
        routeToPatient(patientID){
            this.$router.push({
                name: "PatientPage",
                params: {
                    id: patientID
                }
            })
        },
        openAddPatient(){
            this.addPatientEnable =  true;
            document.documentElement.classList.add("--no-scroll");
        },
        closeAddPatient(){
            this.addPatientEnable =  false;
            document.documentElement.classList.remove("--no-scroll");
        },
        addNewPatient(patientData) {
            if(patientData){
                this.addPatient(patientData)
                this.getPatients("");
                this.closeAddPatient();
            } else this.closeAddPatient();
        }
    },
    computed: {
        ...mapState("patients", ["patients"])
    },
    created() {
        this.getPatients("");
    }
};
</script>
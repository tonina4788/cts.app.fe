import PatientService from '@/api/services/patientService';

const state = {
    patients: [],
    currentPatient: {},
    patientsForAutocomplete: []
};

const actions = {
    async getPatients ({ commit }, searchTerm) {
        try {
            const { data: patientsList } = await PatientService.getPatients(searchTerm);
            commit('SET_PATIENS', patientsList.Items);
        // eslint-disable-next-line
        } catch (e) {}
    },
    async getPatient ({ commit }, patientID) {
        try {
            const { data: patientData } = await PatientService.getPatient(patientID);
            commit('SET_PATIENT_DATA', patientData);
        // eslint-disable-next-line
        } catch (e) {}
    },
    async addPatient ({ commit }, patientData){
        try {
            await PatientService.addPatient(patientData).PatientService
                .then(response => {
                    console.log(response);
                }); 
        // eslint-disable-next-line
        } catch (e) {}
    },
    async getPatientsForAutocomplete ({ commit }){
        try {
            const { data: patientsForAutocomplete } = await PatientService.getPatientsAutocomplete();
            commit('SET_PATIENS_AUTOCOMPLETE', patientsForAutocomplete);
            console.log(patientsForAutocomplete)
        // eslint-disable-next-line
        } catch (e) {}
    }
};
    
const mutations = {
    SET_PATIENS (state, patients) {
        state.patients = patients;
    },
    SET_PATIENT_DATA (state, patientData) {
        state.currentPatient = patientData;
    },
    SET_PATIENS_AUTOCOMPLETE (state, patientsForAutocomplete) {
        state.patientsForAutocomplete = patientsForAutocomplete;
    }
};
    
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
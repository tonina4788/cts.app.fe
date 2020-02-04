import { apiClient } from '@/api/helpers/axiosHelper';

//HELPER FUNCTIONS
function getTokenValue (){
    const userToken = localStorage.getItem('userToken')? JSON.parse(localStorage.getItem('userToken')) : '';
    return 'Bearer ' + userToken;
}

const getPatients = searchTerm => {
    return apiClient.get('/patients?Term=' + searchTerm + '&limit=30&page=1', { headers: { 'Authorization': getTokenValue() } });
};

const getPatient = patientID => {
    return apiClient.get('/patients/' + patientID, { headers: { 'Authorization': getTokenValue() } });
};

const addPatient = patientData => {
    return apiClient.post('/patients', patientData, { headers: { 'Authorization': getTokenValue() } });
};

const getPatientsAutocomplete = () => {
    return apiClient.get('/patients/autocomplete', { headers: { 'Authorization': getTokenValue() } });
};

export default {
    getPatients,
    getPatient,
    addPatient,
    getPatientsAutocomplete
};
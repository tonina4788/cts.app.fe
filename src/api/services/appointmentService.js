import { apiClient } from '@/api/helpers/axiosHelper';

//HELPER FUNCTIONS
function getTokenValue (){
    const userToken = localStorage.getItem('userToken')? JSON.parse(localStorage.getItem('userToken')) : '';
    return 'Bearer ' + userToken;
}

const getAppointment = appointmentID => {
    return apiClient.get('/appointments/' + appointmentID, { headers: { 'Authorization': getTokenValue() } });
};

const getAllAppointments = () => {
    return apiClient.get('/appointments/', { headers: { 'Authorization': getTokenValue() } });
};

const createAppointment = appointmentData => {
    return apiClient.post('/appointments', appointmentData, { headers: { 'Authorization': getTokenValue() } });
};

const editAppointment = appointmentData => {
    return apiClient.put('/appointments/' + appointmentData.Id, appointmentData, { headers: { 'Authorization': getTokenValue() } });
};

const removeAppointment = appointmentId => {
    return apiClient.delete('/appointments/' + appointmentId, { headers: { 'Authorization': getTokenValue() } });
};

export default {
    getAppointment,
    getAllAppointments,
    createAppointment,
    editAppointment,
    removeAppointment
};
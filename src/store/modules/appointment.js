import AppointmentService from '@/api/services/appointmentService';

const state = {
    appointmentInfo: [],
    appointmentsList: []
};

const actions = {
    async getAppointment ({ commit }, appointmentID) {
        try {
            const { data: appointmentData } = await AppointmentService.getAppointment(appointmentID);
            commit('SET_APPOINTMENT_DATA', appointmentData);
        // eslint-disable-next-line
        } catch (e) {}
    },
    async getAllAppointments ({ commit }) {
        try {
            const { data: appointmentsList } = await AppointmentService.getAllAppointments();
            commit('SET_APPOINTMENTS', appointmentsList);
        // eslint-disable-next-line
        } catch (e) {}
    },
    async createAppointment ({ commit }, appointmentData) {
        try {
            await AppointmentService.createAppointment(appointmentData).AppointmentService
                .then(response => {
                    console.log(response);
                }); 
        // eslint-disable-next-line
        } catch (e) {}
    },
    async editAppointment ({ commit }, appointmentData) {
        try {
            await AppointmentService.editAppointment(appointmentData).AppointmentService
                .then(response => {
                    console.log(response);
                }); 
        // eslint-disable-next-line
        } catch (e) {}
    },
    async removeAppointment ({ commit }, appointmentId) {
        try {
            await AppointmentService.removeAppointment(appointmentId).AppointmentService
                .then(response => {
                    console.log(response);
                }); 
        // eslint-disable-next-line
        } catch (e) {}
    }
};
    
const mutations = {
    SET_APPOINTMENT_DATA (state, appointmentData) {
        state.appointmentInfo = appointmentData;
    },
    SET_APPOINTMENTS (state, appointmentsList) {
        state.appointmentsList = appointmentsList;
    }
};
    
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
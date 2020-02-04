import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import auth from '@/store/modules/auth.js';
import patients from '@/store/modules/patients.js';
import search from '@/store/modules/search.js';
import appointment from '@/store/modules/appointment.js';

export default new Vuex.Store({
    modules: {
        auth,
        patients,
        search,
        appointment
    }
});
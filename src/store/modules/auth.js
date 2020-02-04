import AuthService from '@/api/services/authService';
//import axios from 'axios';

//const localUserData = localStorage.getItem('user');

const state = {
    userData: {},
    isLoggedIn: localStorage.getItem('userToken')? true : false,
    wrongCred: false
};

const actions = {
    async getUserData ({ commit }, userCred) {
        try {
            await AuthService.getUserData(userCred)
                .then(response => {
                    if (response.status == 200){
                        commit('SET_USER_DATA', response.data);
                        commit('SET_USER_STATUS', true);
                        localStorage.setItem('userToken', JSON.stringify(response.data.Token));
                        //TODOs
                        //axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJuYmYiOjE1NzM0OTM0NDUsImV4cCI6MTU3NDM1NzQ0NSwiaWF0IjoxNTczNDkzNDQ1fQ.Y4lhIjfMY1xik8f5TGTpVr2P9dWMaJDqvSI8u5R3psc';
                    }
                });            
        } catch (e) {
            commit('SET_WRONG_CRED'); 
        }
    },
    logoutUser ({ commit }) {
        commit('SET_USER_STATUS', false);
        commit('SET_USER_DATA', {});
        localStorage.removeItem('userToken');
    },
    async getCurrentUser ({ commit }){
        try {
            const userData = await AuthService.getCurrentUserData(); 
            commit('SET_USER_DATA', userData.data);          
        } catch (e) {}
    }
};
    
const mutations = {
    SET_USER_DATA (state, userData) {
        state.userData = userData;
    },
    SET_USER_STATUS (state, userStatus){
        state.isLoggedIn = userStatus;
    },
    SET_WRONG_CRED (state){
        state.wrongCred = true;
    }
};
    
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
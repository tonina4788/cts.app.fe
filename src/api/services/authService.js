import { apiClient } from '@/api/helpers/axiosHelper';

function getTokenValue (){
    const userToken = localStorage.getItem('userToken')? JSON.parse(localStorage.getItem('userToken')) : '';
    return 'Bearer ' + userToken;
}

const getUserData = userCred => {   
    return apiClient.post('/users/login', userCred);
};

const getCurrentUserData = () => {    
    return apiClient.get('/users/currentuser', { headers: { 'Authorization':  getTokenValue() } });
};

export default {
    getUserData,
    getCurrentUserData
};


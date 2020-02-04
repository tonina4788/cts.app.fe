import { apiClient } from '@/api/helpers/axiosHelper';

//HELPER FUNCTIONS
function getTokenValue (){
    const userToken = localStorage.getItem('userToken')? JSON.parse(localStorage.getItem('userToken')) : '';
    return 'Bearer ' + userToken;
}

const getSearchPatients = (searchTerm, searchPage) => {
    return apiClient.get('/patients?Term=' + searchTerm + '&limit=30&page=' + searchPage, { headers: { 'Authorization': getTokenValue() } });
};

export default {
    getSearchPatients
};
import SearchService from '@/api/services/searchService';

const state = {
    searchPatientsResults: []
};

const actions = {
    async getSearchPatients ({ commit }, searchData) {
        if (searchData.searchTerm.length > 0 && searchData.searchTerm.length != ' '){
            try {
                const { data: patientsSearchList } = await SearchService.getSearchPatients(searchData.searchTerm, searchData.searchPage);
                commit('SET_PATIENS_SEARCH_RESULTS', patientsSearchList.Items);
            // eslint-disable-next-line
            } catch (e) {}
        } else if (searchData.searchTerm.length == 0){
            commit('SET_PATIENS_SEARCH_RESULTS', []);
        }
    }
};
    
const mutations = {
    SET_PATIENS_SEARCH_RESULTS (state, patients) {
        //state.searchPatientsResults.push(patients);
        state.searchPatientsResults = patients;
        //state.searchPatientsResults = state.searchPatientsResults[1];
    }
};
    
export default {
    namespaced: true,
    state,
    actions,
    mutations
};
<template>
   <div class="search">
       <div class="search__header">
            <SearchInput @search-input="checkForPatients($event, '1')"/>
            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/close.svg`)"
                class="search__header__close-icon"
                @click="$emit('close-search')"
            ></i>
       </div>
       <div class="search__results">
            <PatientList :patientList="searchPatientsResults" 
            @load-more="checkForPatients(searchInput, $event)"
            @patient-clicked="routeToPatient"/>
       </div>
      
   </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
import SearchInput from "@/components/SearchInput"
import PatientList from "@/components/PatientList"
import _ from "lodash"

export default {
    name: 'SearchPatient',
    components: {
        SearchInput,
        PatientList
    },
    data(){
        return {
            searchInput: ""
        }
    },
    computed:{
         ...mapState("search", ["searchPatientsResults"])
    },
    methods: {
        ...mapActions("search", ["getSearchPatients"]), 
        checkForPatients: _.debounce(function(searchTerm, searchPage) {
            this.searchInput = searchTerm
            this.getSearchPatients({"searchTerm": this.searchInput, "searchPage": searchPage});
        }, 300),
        onEscapeKeyUp(event){
            if (event.keyCode==27 || event.key==='Escape') {
                this.$emit('close-search');
            }
        },
        routeToPatient(patientID){
            this.$emit('close-search');
            this.$router.push({
                name: "PatientPage",
                params: {
                    id: patientID
                }
            })
        }
    },
    created() {
        document.addEventListener('keyup', this.onEscapeKeyUp);
        this.getSearchPatients({"searchTerm": "", "searchPage": "1"});
    },
    beforeDestroy(){
        document.removeEventListener('keyup', this.onEscapeKeyUp);
    }
};
</script>
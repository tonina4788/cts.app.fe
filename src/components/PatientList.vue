<template>
    <div class="patients__list">
        <div class="patients__list__row --header">
            <div class="patients__list__row__cell">
                NAME
            </div>
            <div class="patients__list__row__cell sm-hide">
                EMAIL
            </div>
            <div class="patients__list__row__cell">
                PHONE
            </div>
            <div class="patients__list__row__cell sm-hide">
                AMKA
            </div>
        </div>
        <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="limit"> -->
            <div class="patients__list__row" 
                v-for="(patient, patientIndex ) in patientList"
                :key=patientIndex
                @click="$emit('patient-clicked', patient.Id)"
            >
                <div class="patients__list__row__cell">
                    {{patient.Name}} {{patient.Surname}}
                </div>
                <div class="patients__list__row__cell sm-hide">
                    <a :href="`mailto:${patient.Email}`">{{patient.Email}}</a>
                </div>
                <div class="patients__list__row__cell">
                    <a :href="`tel:${patient.Telephone}`">{{patient.Telephone}}</a>
                </div>
                <div class="patients__list__row__cell sm-hide">
                    {{patient.Amka}}
                </div>
            </div>
            <!-- TODO -->
            <div class="patients__list__page-nav" v-if="patientList.length > 29">
                <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/change-page.svg`)"
                    class="patients__list__page-nav__next-page"
                    @click="$emit('load-more', patientPage++)"
                ></i>
            </div>
        <!-- </div> -->
    </div>
</template>

<script>
import infiniteScroll from 'vue-infinite-scroll'

export default {
    name: 'PatientList',
    props: {
        patientList: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data(){
        return {
            patientPage: 2
        }
    },
    directives: {
        infiniteScroll
    }
};
</script>
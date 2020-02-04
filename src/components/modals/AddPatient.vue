<template>
    <div class="patients__add-patient fade-in"> 
        <div class="patients__add-patient__form">
            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/close.svg`)"
                class="patients__add-patient__form__close-icon"
                @click="$emit('close-add-patient-cicked')"
            ></i>
            <div class="patients__add-patient__form__inputs">
                <div class="patients__add-patient__form__inputs__text">
                    FIRST NAME
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.name"/> 
                <div class="patients__add-patient__form__inputs__text">
                    LAST NAME
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.surname"/> 
                <div class="patients__add-patient__form__inputs__text">
                    FATHER'S NAME
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.fathersname"/> 
                <div class="patients__add-patient__form__inputs__text">
                    EMAIL
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.email"/> 
                <div class="patients__add-patient__form__inputs__text">
                   PHONE
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.telephone"/>
                 <div class="patients__add-patient__form__inputs__text">
                    ADDRESS
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.address"/>
                <div class="patients__add-patient__form__inputs__text">
                    JOB TITLE
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.jobtitle"/>  
                <div class="patients__add-patient__form__inputs__text">
                    AMKA
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.amka"/> 
                <div class="patients__add-patient__form__inputs__text">
                    RECOMMENDED BY
                </div>
                <input class="patients__add-patient__form__inputs__value input-form" v-model="patientData.recommendation"/> 
            </div>
            <div class="patients__add-patient__form__ctas">
                <button class="primary-btn" type="submit" @click="$emit('add-patient-cicked', patientData)">Add patient</button>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'AddPatient',
    data(){
        return {
            patientData: {
                "name": "",
                "surname": "",
                "fathersname": "",
                "jobtitle": "",
                "email": "",
                "telephone": "",
                "mobileTelephone": "",
                "address": "",
                "amka": "",
                "recommendation":""
            }
        }
    },
    methods:{
        onEscapeKeyUp(event){
            if (event.keyCode==27 || event.key==='Escape') {
                this.$emit('close-add-patient-cicked');
            }
        }
    },
    created() {
        document.addEventListener('keyup', this.onEscapeKeyUp);
    },
    beforeDestroy(){
        document.removeEventListener('keyup', this.onEscapeKeyUp);
    }
};
</script>
<template>
    <div class="header">
        <div class="header__logo">
            <router-link to="/">
                <img src="~@/assets/images/logos/short-log.png">
            </router-link> 
        </div>
        <!-- <div class="header__navigation">
            <router-link to="/patients">
                PATIENTS
            </router-link>
            <a href="https://www.e-prescription.gr/" target="_blank">
                E-SYNTAGOGRAFISI
            </a>
        </div> -->
        <Navigation v-if="!isMobileDevice"/>
        <div class="header__date">
            {{date.toDateString()}}            
        </div>
        <div class="header__user-tools" @click="$emit('logout-clicked', false)">
            <div class="header__user-tools__img"></div>
            <div class="header__user-tools__username sm-hide">{{userData.Name}} {{userData.Surname}}</div>
        </div>
        <BurgerMenu v-if="isMobileDevice" />
    </div>
</template>

<script>
import { mapActions } from "vuex"
import Navigation from "@/components/Navigation"
import BurgerMenu from "@/components/BurgerMenu"
import { isMobileDevice } from "@/utils/deviceDetection";

export default {
    name: 'Header',
    props: ['userData'],
    components: {
        Navigation,
        BurgerMenu
    },
    data() {
        return {
            date: new Date(),
            isMobileDevice: isMobileDevice()
        }
    }
};
</script>
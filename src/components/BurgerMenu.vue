<template>
    <div class="burger-menu">
        <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/menu.svg`)"
            class="burger-menu__cta"
            @click="burgerMenuOpen = true"
        ></i>
        <div v-if="burgerMenuOpen" class="burger-menu__list slide-down">
            <router-link to="/patients">
                PATIENTS
            </router-link>
            <a href="https://www.e-prescription.gr/" target="_blank">
                E-SYNTAGOGRAFISI
            </a>
            <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/close.svg`)"
                class="burger-menu__close-cta"
                @click="burgerMenuOpen = false"
            ></i>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BurgerMenu',
    data(){
        return {
            burgerMenuOpen: false
        }
    }
};
// @click="$emit('close-add-patient-cicked')"
</script>


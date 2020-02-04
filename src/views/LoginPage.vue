<template>
    <transition name="fade">
        <div class="login">
            <div class="login__graphic-section">
                <img src="https://www.arthroscopycenter.gr/templates/corporate_response/images/s5_logo.png" />
            </div>
            <form class="login__input-section">
                <div 
                    v-if="wrongCred"
                    class="login__input-section__error-msg"
                >
                    Wrong Username or Password!
                </div>
                <h3 class="login__input-section__title">LOGIN</h3>
                <div class="login__input-section__form">
                    <div class="login__input-section__form__input">
                        <input type="text" v-model="usernameInput" name="username" placeholder="USERNAME" />
                        <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/User.svg`)"
                            class="login__input-section__form__input__icon"
                        ></i>
                    </div>
                     <div class="login__input-section__form__input">
                        <input type="password" v-model="passwordInput" name="password" placeholder="PASSWORD" />
                        <i v-html="require(`!svg-inline-loader?idPrefix&classPrefix!@/assets/icons/Lock.svg`)"
                            class="login__input-section__form__input__icon"
                        ></i>
                    </div>
                </div>
                <button class="primary-btn" type="button" @click="loginUser()">Login</button>
            </form>
        </div>
    </transition>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    name: 'Login',
    data() {
        return{
            usernameInput: "",
            passwordInput: ""
        }
    },
    computed:{
        ...mapState("auth", ["wrongCred"]),
    },
    methods: {
        ...mapActions("auth", ["getUserData"]),
        loginUser(){
          this.getUserData({username: this.usernameInput, password: this.passwordInput});
          this.$router.replace({ name: 'Home' });
        },
        onEnterKeyUp(event){
            if (event.keyCode==13 || event.key==='Enter') {
                this.loginUser();
            }
        }
    },
    created() {
        document.addEventListener('keyup', this.onEnterKeyUp);
    },
    beforeDestroy(){
        document.removeEventListener('keyup', this.onEnterKeyUp);
    }
};
</script>


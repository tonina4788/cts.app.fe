<template>
  <div v-if="isLoggedIn">
    <SideMenu @search-clicked="openSearch"/>
    <Search v-if="searchModalEnable" @close-search="closeSearch"/>
    <Header @logout-clicked="logout()" :userData="userData"/>
    <div class="main-content">
      <router-view />
    </div>
  </div>
  <div v-else >
     <Login />
  </div>
</template>
<script>
  import { mapActions, mapState } from "vuex"

  import Header from "@/components/Header"
  import SideMenu from "@/components/SideMenu"
  import Login from "@/views/LoginPage"
  import Search from "@/views/SearchPage"
  import { isMobileDevice } from "@/utils/deviceDetection";

  export default {
    name: 'App',
    components: {
      Header,
      SideMenu,
      Login,
      Search
    },
    data() {
      return {
        searchModalEnable: false,
      }
    },
    computed: {
      ...mapState("auth", ["isLoggedIn", "userData"]),
    },
    mounted(){
      if(!this.isLoggedIn) {
        this.$router.replace({ name: "Login" });
      }
    },
    methods: {
      ...mapActions("auth", ["logoutUser", "getCurrentUser"]),
      logout(){
        this.logoutUser();
        this.$router.replace({ name: 'Login' });
      },
      openSearch(){
        document.documentElement.classList.add("--no-scroll");
        this.searchModalEnable = true;
      },
      closeSearch(){
        document.documentElement.classList.remove("--no-scroll");
        this.searchModalEnable = false;
      }
    },
    created() {
      if(localStorage.getItem('userToken')){
        this.getCurrentUser();
      }
    },
  };
</script>
<style lang="scss">
   @import './assets/scss/all';
</style>

// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';
import store from './store/store';

Vue.use(VueRouter);

//Import Scheduler
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule';
Vue.use(SchedulePlugin);

// Configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
});

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
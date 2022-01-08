import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2'
import VCalendar from 'v-calendar';
import axios from '@/axios';
import vSelect from 'vue-select';



// Set base URL
// axios.defaults.baseURL = 'https://fms-backend-v1.herokuapp.com/api/v1'

// axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; //TODO: append the trailing slash

// Add modified axios instance to Vue prototype so that to be available globally via Vue instance
Vue.prototype.$axios = axios;
 
Vue.use(VCalendar, {
  popoverAlign: 'bottom',
})
Vue.component('v-select', vSelect)
Vue.use(BootstrapVueIcons)

Vue.use(BootstrapVue)
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

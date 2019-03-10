import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Home from './TaskHome.vue'
import VueRouter from 'vue-router'
import {routes} from './route'

export const eventBus = new Vue();
export const editEventBus = new Vue();

Vue.use(VueRouter);
const router = new VueRouter({
  routes
});
Vue.component('app-task-home' , Home);
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
import adviser from "./components/adviser"
import home from "./components/home.vue";
import about from "./components/about.vue";

Vue.use(VueRouter);
const routes = [
  { path: '/home', component: home },
  { path: '/adviser', component: adviser },
  { path: '/about', component: about }
]

const router =new VueRouter({
  routes
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')

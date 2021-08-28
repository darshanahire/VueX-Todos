import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueRouter from 'vue-router'
import adviser from "./components/adviser"
import home from "./components/home.vue";
import about from "./components/about.vue";
import { store } from './store'

Vue.use(VueRouter);
const routes = [
  { path: '/', component: home },
  { path: '/adviser', component: adviser },
  { path: '/about', component: about }
]

const router =new VueRouter({
  routes
})
new Vue({
  router:router,
  store,
  render: h => h(App),
}).$mount('#app')

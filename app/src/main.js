import Vue from 'vue'
import App from './App.vue'
import router from './route/index.js'
import VueResource from 'vue-resource'
import {ValidationProvider,ValidationObserver} from 'vee-validate'

import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

Vue.component("app-head",Header)
Vue.component("app-cont",Content)
Vue.component("app-foot",Footer)
Vue.component("app-modal",Modal)
Vue.component("app-card",Card)
Vue.component("ValidationProvider",ValidationProvider)
Vue.component("ValidationObserver",ValidationObserver)
Vue.use(VueResource);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

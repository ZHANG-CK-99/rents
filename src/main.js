import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerPlugins from './plugins/index'
import 'amfe-flexible'
Vue.use(registerPlugins)
Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')

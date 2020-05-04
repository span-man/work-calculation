import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// axios.defaults.baseURL = "http://derlol.top:7723";
axios.defaults.baseURL = "http://localhost:7723";
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

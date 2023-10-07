import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueTypedJs from 'vue-typed-js'
import VueGoogleApi from 'vue-google-api'
const config = {
  apiKey: 'AIzaSyDebhV-F6hdANLnt5L0pQ3aRbKDL8SYnfg',
  clientId: '116778821663-al880ou52iqfaau32th6lv9q64nagaer.apps.googleusercontent.com',
  scope: 'space_separated_scopes'
}
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  VueTypedJs
}).$mount("#app");


Vue.use(VueGoogleApi, config)

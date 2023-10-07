import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "a87ffb",
        secondary: colors.red.lighten4,
        info: "8c52ff",
      },
      dark: {
        primary: "a87ffb",
        info: "8c52ff",
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
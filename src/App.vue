<template>
  <VuePerfectScrollbar v-once :settings="settings" @ps-scroll-y="scrollHandle">
    <v-app dark class="application ma-0 pa-0">
      <nav-bar />
      <v-main dark class="main-container">
        <router-view />
      </v-main>
      <bottom-sheet />
    </v-app>
  </VuePerfectScrollbar>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import BottomSheet from "./components/BottomSheet.vue";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  name: "App",

  data: () => ({
    snackbar: true,
    settings: {
      maxScrollbarLength: 200
    }
  }),
  components: {
    NavBar,
    BottomSheet,
    VuePerfectScrollbar
  },
  methods: {
    Heyy() {
      console.log("Clicked");
    },
    scrollHandle(evt) {
      console.log(evt)
    }
  }
};
</script>

<style>
body {
  background-color: #10151d;
}

.application {
  background-color: #10151d;
}

.main-container {
  background-color: #10151d;
  z-index: 0;
}

::v-deep .v-application--wrap {
  max-width: default !important;
}
</style>

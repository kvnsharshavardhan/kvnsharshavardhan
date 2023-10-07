<template>
  <div dark class="py-8 px-14 d-flex flex-row justify-space-between align-center nav-bar-container"
    :class="{ 'justify-end': $vuetify.breakpoint.mdAndUp, 'justify-center': $vuetify.breakpoint.smAndDown }">
    <img src="../assets/Images/H.png" alt="" width="40px">
    <!-- <h3>Hi! <span class="wave">👋</span></h3> -->
    <h2 class="name">K V N S Harshavardhan <span class="wave">👋</span></h2>
    <v-btn outlined color="primary" class="mx-4 px-6" @click="downloadResume">
      <v-icon small class="pr-2">mdi-download</v-icon>
      Resume
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeURL: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Resume%2FK%20V%20N%20S%20HARSHAVARDHAN.pdf?alt=media&token=082d2a6b-79f1-4fcc-8e2e-f95eb9672be3&_gl=1*1r1a97g*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjY4NjIzNC4xMi4xLjE2OTY2ODYyNjcuMjcuMC4w"
    }
  },
  methods: {
    downloadResume() {
      window.open(this.resumeURL, '_blank');
    }
  }
};
</script>

<style scoped>
.nav-bar-container {
  background-color: #10151d;
  z-index: 0;
}

.name {
  font-family: 'Courier New', Courier, monospace;
  color: #8B98A9;
}

.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}


@keyframes wave-animation {
  0% {
    transform: rotate(0.0deg)
  }

  10% {
    transform: rotate(14.0deg)
  }

  20% {
    transform: rotate(-8.0deg)
  }

  30% {
    transform: rotate(14.0deg)
  }

  40% {
    transform: rotate(-4.0deg)
  }

  50% {
    transform: rotate(10.0deg)
  }

  60% {
    transform: rotate(0.0deg)
  }

  100% {
    transform: rotate(0.0deg)
  }
}
</style>

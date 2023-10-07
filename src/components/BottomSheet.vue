<template>
  <div class="d-flex align-content-end bottom-sheet-container justify-center align-end"
    :class="{ 'bottom-sheet-container-open': isOpenBottomSheet }" @click.self="closeBottomSheet">
    <div class="d-flex bottom-sheet justify-center align-center flex-column " :class="{
      'bottom-sheet-open': isOpenBottomSheet,
      'bottom-sheet-width-mobile': $vuetify.breakpoint.smAndDown,
      'bottom-sheet-width-desktop': $vuetify.breakpoint.mdAndUp
    }">
      <div class="d-flex align-row justify-space-between flex-column" style="width: 100%;">
        <div class="pa-4 d-flex flex-row justify-space-between bottom-sheet-header" @click="toggleBottomSheet">
          <div>
            Get In Touch with me!
          </div>
          <v-icon dark small right>
            {{ isOpenBottomSheet ? "mdi-close" : "mdi-menu-down" }}
          </v-icon>
        </div>
        <div v-show="isOpenBottomSheet">
          <div class="bottom-sheet-content bottom-sheet-borders d-flex justify-center align-center flex-column pa-4">
            <v-row class="form">
              <v-col cols="9">
                <v-row class="my-1">
                  <v-col class="px-0 py-2 d-flex justify-start align-start form-labels" cols="4">
                    Name..................
                  </v-col>
                  <v-col class="pa-2" cols="8">
                    <input ref="name" dark v-model="connect.name" required placeholder="{Enter}" class="text-white" />
                  </v-col>
                </v-row>
                <v-row class="my-1">
                  <v-col class="px-0 d-flex justify-start align-center form-labels" cols="4">
                    Email................
                  </v-col>
                  <v-col class="pa-2" cols="8">
                    <input dark v-model="connect.email" required placeholder="{Enter}" class="text-white" />
                  </v-col>
                </v-row>
                <v-row class="my-1">
                  <v-col class="pa-0 py-2 d-flex justify-start align-start form-labels" cols="4">
                    Message.....................
                  </v-col>
                  <v-col class="pa-2" cols="8">
                    <textarea dark v-model="connect.message" maxlength="250" required placeholder="{Enter}" class="text-white" />
                  </v-col>
                </v-row>
              </v-col>
              <v-col class="d-flex justify-center align-center" cols="3">
                <v-btn rounded color="#a87ffb">
                  Submit
                  <v-icon small>
                    mdi-arrow-right-thin
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <div class="mt-3">
              <p>
                If you have a cool project idea or just want to connect / collaborate, feel free to reach out to me on
                any
                of
                the platforms mentioned below.
              </p>
            </div>
          </div>
        </div>
        <div class="pa-4 d-flex justify-center bottom-sheet-footer bottom-sheet-borders">
          <div v-for="profile in profiles" :key="profile.name" class="px-3">
            <a :href="profile.link" target="_blank">
              <v-icon color="#a87ffb">
                {{ profile.icon }}
              </v-icon>
            </a>
          </div>
        </div>
        <!-- <div class="pa-4 d-flex justify-center bottom-sheet-footer bottom-sheet-borders">
          This app is made of Vue.js ❤️
        </div> -->
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data: () => ({
    show: false,
    isOpenBottomSheet: false,
    connect: {
      name: "",
      // email: "",
      message: ""
    },
    profiles: [
      {
        name: "Gmail",
        icon: "mdi-gmail",
        link: "mailto:saiharshavardhan468@gmail.com"
      },
      {
        name: "Github",
        icon: "mdi-github",
        link: "https://github.com/kvnsharshavardhan"
      },
      {
        name: "Linkedin",
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/kvnsharshavardhan/"
      },
      {
        name: "Instagram",
        icon: "mdi-instagram",
        link: "https://www.instagram.com/___harsha_vardhan/"
      },
      {
        name: "WhatsApp",
        icon: "mdi-whatsapp",
        link: "https://wa.me/918501872530"
      },
      {
        name: "Twitter",
        icon: "mdi-twitter",
        link: "https://twitter.com/HarshaV93421895"
      }
    ]
  }),
  methods: {
    toggleBottomSheet() {
      this.isOpenBottomSheet = !this.isOpenBottomSheet;
      console.log(this.isOpenBottomSheet)
      if (this.isOpenBottomSheet) {
        this.$nextTick(this.$refs.name.focus());
      }
    },
    closeBottomSheet() {
      if (this.isOpenBottomSheet) this.isOpenBottomSheet = false;
    }
  },
  mounted() {
    this.$refs.name.focus();
  }
}
</script>
  
<style scoped>
.bottom-sheet-container {
  bottom: 0px;
  position: absolute;
  width: 100%;
  position: fixed;
}

.bottom-sheet-container-open {
  z-index: 2000;
  background-color: #0000007d;
  height: 100%;
  cursor: pointer;
}

.bottom-sheet-width-mobile {
  width: 100%;
}

.bottom-sheet-width-desktop {
  width: 35%;
}

.bottom-sheet {
  background-color: #161e29;
  color: aliceblue;
  border-radius: 10px 10px 0px 0px;
  border: 0.5px solid #a87ffb4b;
  border-bottom: none;
  box-shadow: #a87ffb8f 0px -20px 200px -20px;
}

.bottom-sheet-header {
  width: 100%;
  cursor: pointer;
  color: #BFC7D2;
}

.bottom-sheet-content {
  width: 100%;
  color: #8B98A9;
  cursor: default;
}

.bottom-sheet-footer {
  cursor: default;
}

.bottom-sheet-borders {
  border-top: 0.5px solid #a87ffb4b;
}

.bottom-sheet-open {
  box-shadow: none;
}

.form {
  width: 100%;
  font-family: JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
}

textarea:focus,
input:focus {
  outline: none;
}

input,
textarea {
  color: white;
  caret-color: #a87ffb;
  width: 100%;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #8B98A9;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  color: #8B98A9;
}

.form-labels {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
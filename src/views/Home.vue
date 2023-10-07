<template>
  <div>
    <v-container dark class="main-container d-flex flex-column" :class="{
      'section-container-mobile justify-center align-center': $vuetify.breakpoint.smAndDown,
      'section-container-desktop justify-start align-start': $vuetify.breakpoint.mdAndUp
    }">
      <div class="section mb-5">
        <div>
          <Cover />
        </div>
      </div>

      <div class="section mb-5" id="education">
        <div class="title my-5">
          Education 📋 <span class="color-primary"><a href="#education">#</a></span>
        </div>
        <div>
          <Education />
        </div>
      </div>

      <div class="section mb-5" id="experience">
        <div class="title my-5">
          Experience 💼 <span class="color-primary"><a href="#experience">#</a></span>
        </div>
        <Experience />
      </div>

      <div class="section mb-5" id="skills">
        <div class="title my-5">
          Skills 🧠 <span class="color-primary"><a href="#skills">#</a></span>
        </div>
        <Skills />
      </div>

      <div class="section mb-5" id="achievements">
        <div class="title my-5">
          Achievements 🏆 <span class="color-primary"><a href="#achievements">#</a></span>
        </div>
        <Achievements />
      </div>

      <div class="section mb-5" id="testimonials">
        <div class="title my-5">
          Testimonials ⭐ <span class="color-primary"><a href="#testimonials">#</a></span>
        </div>
        <Testimonials />
      </div>

      <div class="section mb-5" id="projects">
        <div class="title my-5">
          Projects 👩🏻‍💻 <span class="color-primary"><a href="#projects">#</a></span>
        </div>
        <Projects />
      </div>

      <!-- <div class="section mb-5">
        <div class="title">
          Blog
        </div>
        <Blog />
      </div> -->
    </v-container>
  </div>
</template>

<script>
import Projects from '../components/Projects.vue';
// import Blog from '../components/Blog.vue'
import Experience from '../components/Experience.vue';
import Education from '../components/Education.vue';
import Achievements from '../components/Achievements.vue';
import Cover from '../components/Cover.vue';
import Skills from '../components/Skills.vue';
import Testimonials from '../components/Testimonials.vue';
export default {
  components: {
    Projects,
    // Blog,
    Experience,
    Achievements,
    Education,
    Cover,
    Skills,
    Testimonials
  }
}
</script>

<style>
.section {
  color: #8B98A9;
  width: 100%;
}

.hash-link {
  cursor: pointer;
}

a {
  text-decoration: none;
}

.section-container-mobile {
  width: 100%;
}

.section-container-desktop {
  width: 70%;
}

.main-container {
  padding-bottom: 150px;
}

.color-primary {
  color: #a87ffb;
}

html {
  scroll-behavior: smooth;
}

.title {
  cursor: pointer;
}
</style>

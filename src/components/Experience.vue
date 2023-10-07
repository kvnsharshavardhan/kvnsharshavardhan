<template>
  <div>
    <div class="mx-5">
      <div class="title white--text mt-5 d-flex justify-start">
        <span class="mr-2">
          Associate Product Engineer
          <span v-if="$vuetify.breakpoint.mdAndUp">
            @
          </span>
        </span>
        <div class="d-flex justify-center align-center" :class="{ 'ml-3': $vuetify.breakpoint.smAndDown }">
          <a href="https://deltax.com/" target="_blank">
            <img src="../assets/logos/Experience/dx-logo-white-green-raw.webp" alt="" height="30px">
          </a>
        </div>
      </div>
      <div>
        October, 2021 - Present
      </div>
      <pre>
    ● Worked as a core member of the Tracking Team.
    ● Worked on Various DB and microservices optimizations to reduce the run time and increase efficiency.
    ● Implemented .NET Core microservices, and wrote database migrations for different functionalities.
    ● Monitored existing services and worked on code optimizations for the same
    ● Reduced downtime and increased production capacity with strong maintenance plans.
    ● Implemented RESTful CRUD API endpoints on the platform using ASP.NET MVC and BDD approach (Specflow & Gherkin).
    ● Used Transact-SQL for database queries and stored procedures
    ● Worked on various features and optimizations for various clients including <a :href="byBitCaseStudyURL" target="_blank">ByBit<v-icon color="primary" small>mdi-open-in-new</v-icon></a>, <a :href="sephoraCaseStudyURL" target="_blank">Sephora<v-icon color="primary" small>mdi-open-in-new</v-icon></a>, and <a :href="clearTripCaseStudyURL" target="_blank">ClearTrip<v-icon color="primary" small>mdi-open-in-new</v-icon></a>.
    ● Frameworks/Tools: VueJs, Vuex, Javascript, C#, ASP.NET MVC, .NET Core, Transact-SQL.</pre>
    </div>
    <div class="mx-5">
      <div class="title white--text mt-5 d-flex justify-start">
        <span class="mr-2">
          Full Stack Developer Intern
          <span v-if="$vuetify.breakpoint.mdAndUp">
            @
          </span>
        </span>
        <div class="d-flex justify-center align-center" :class="{ 'ml-3': $vuetify.breakpoint.smAndDown }">
          <a href="https://deltax.com/" target="_blank">
            <img src="../assets/logos/Experience/dx-logo-white-green-raw.webp" alt="" height="30px">
          </a>
        </div>
      </div>
      <div class="subtitle-1">
        April, 2021 - October, 2021
      </div>
      <pre>
    ● Implemented a Movie Store Website similar to IMDB using Technologies like C#, .Net Core, RESTful API, MVC, Sql Server, Javascript, JQuery, Vuejs, Vuex.
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      byBitCaseStudyURL: "https://deltax.com/success-stories/boosting-bybits-roi-by-32-and-media-mix-optimization/",
      sephoraCaseStudyURL: "https://deltax.com/success-stories/achieving-80-roi-increase-how-sephora-boosted-digital-revenues-with-deltaxs-u-shaped-attribution-model/",
      clearTripCaseStudyURL: "https://deltax.com/success-stories/skyrocketing-cleartrips-engagement-with-a-2-8-pts-brand-lift-using-hyperlocal-campaign/"
    }
  }
}
</script>

<style scoped>
pre {
  text-wrap: unset;
}

a {
  text-decoration: none;
}
</style>

<template>
  <div>
    <div class="mx-5">
      <div class="title white--text mt-5 d-flex justify-start">
        <span class="mr-2">
          Software Engineer L2 - Platform Engineering
          <span v-if="$vuetify.breakpoint.mdAndUp">
            @
          </span>
        </span>
        <div class="d-flex justify-center align-center" :class="{ 'ml-3': $vuetify.breakpoint.smAndDown }">
          <a href="https://zenoti.com/"  target="_blank">
            <img src="../assets/logos/Experience/zenoti_logo.jpeg" alt="" height="30px">
          </a>
          <span class="ml-2">ZENOTI</span>
        </div>
      </div>
      <div>
        July, 2024 - Present
      </div>
      <pre>
    ● Migrated from a deprecated third-party Notifications Provider to a new provider, ensuring 100% uninterrupted delivery and migrating 3000+ customer templates.
    ● Integrated RCS (Rich Communication Services) as a messaging channel into the Notification Infrastructure, and Launched in beta with 10 customers in India and the USA.
    ● Maintain the Event Management System, powered by Apache Kafka, processing 10,000+ records per second with latency less than 0.1 seconds. enabling event-driven communication across Zenoti’s product and Webhook integration offering for customers.
    ● Automated the migration of 18,000+ secrets from across 350 groups from AWS Secrets Manager to Azure Key Vault, reducing manual effort and human error.
    ● Built an Infrastructure Connectivity Check Tool with 200+ scheduled tests for services, databases and caches, generating detailed health reports to improve system observability.</pre>
    </div>
    <div class="mx-5">
      <div class="title white--text mt-5 d-flex justify-start">
        <span class="mr-2">
          Product Engineer
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
        October, 2023 - July, 2024
      </div>
      <pre>
    ● Actively participating in product planning sessions, providing valuable insights into emerging trends in tracking technology and contributing to the strategic roadmap for the DeltaX tracking team.
    ● Spearheaded the specification and development of key features within the DeltaX tracking team, focusing on Shopify web pixel app functionalities for precise measurement and analysis of user interactions.
    ● Led the design and implementation of tracking solutions to capture and analyze user engagement metrics, including click-through rates, conversions, and other relevant data points on Shopify websites.
    ● Mentored and provided guidance to junior engineers within the DeltaX tracking team, fostering a collaborative and supportive learning environment.</pre>
    </div>
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

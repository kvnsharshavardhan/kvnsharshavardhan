<template>
  <span>
    <v-row>
      <v-col class="testimonial pa-5 ma-5" v-for="testimonial in testimonials" :key="testimonial.name">
        <div class="testimonial-div d-flex justify-space-between flex-column">
          <div>
            <v-icon color="primary" large>mdi-format-quote-open</v-icon>
            <p>{{ testimonial.recommendation }}</p>
          </div>
          <div class="d-flex flex-row justify-center align-center">
            <v-avatar v-if="testimonial.imageURL.length > 0" size="50">
              <img :src="testimonial.imageURL">
            </v-avatar>
            <v-avatar color="primary" v-else size="50">
              <span class="white--text text-h5">
                {{ testimonial.name.split("")[0].charAt(0) }}{{ testimonial.name.split(" ")[1].charAt(0) }}
              </span>
            </v-avatar>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="testimonial-details-name">{{ testimonial.name }}</v-list-item-title>
                <v-list-item-subtitle class="testimonial-details">{{ testimonial.roleAndCompany }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </v-col>
    </v-row>
  </span>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          name: "Akshay Kumbhar",
          imageURL: "",
          roleAndCompany: "Associate Product Engineer at DeltaX",
          recommendation: "I had the pleasure of working with Harsha at DeltaX. Harsha is an incredibly talented full-stack developer with a strong command over C#, Vue js, and .NET frameworks. I have been consistently impressed by Hasha's ability to deliver high-quality code and solutions that meet and exceed client expectations. He is a good team member with a positive attitude towards other team members by offering guidance, sharing knowledge, and providing support whenever needed."
        },
        {
          name: "Naga Sai Rohith Devarasetty",
          imageURL: "https://media.licdn.com/dms/image/D4D03AQF53PCkDVxHdg/profile-displayphoto-shrink_200_200/0/1691477032951?e=1701907200&v=beta&t=nBEuaCbdxAETv6GRZU_AIPlWMW5sjOIitMlS8xTNqhk",
          roleAndCompany: "Associate Product Engineer at DeltaX",
          recommendation: "I wholeheartedly recommend my colleague for their unwavering dedication to work, consistently prioritizing an optimized approach even when it demands extra effort. Additionally, their ability to effectively mentor juniors is truly commendable, creating a positive impact on our team's growth and success."
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonial {
  border: 1px dotted #a87ffb;
  border-radius: 10px;
}

.testimonial-div {
  height: 100%;
}

.testimonial-details {
  color: #8B98A9;
}

::v-deep .v-list-item__title {
  color: #a87ffb;
}

::v-deep .v-list-item__subtitle {
  color: #8B98A9 !important;
}
</style>
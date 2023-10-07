<template>
	<span>
		<v-row class="project mb-10 ma-5 pa-5" v-for="(project, index) in  projects " :key="project.name"
			style="border: '1px solid white';">
			<v-col class="d-flex flex-column justify-space-around"
				:order="checkIsEven(index) && $vuetify.breakpoint.mdAndUp ? 2 : 1" md="8" cols="12">
				<div>
					<div class="project-title title">
						{{ project.name }}
					</div>
					<div class="project-content">
						{{ project.description }}
					</div>
					<v-row class="d-flex justify-start project-action mt-5"
						:class="{ 'justify-start': $vuetify.breakpoint.mdAndUp, 'justify-center': $vuetify.breakpoint.smAndDown }">
						<!-- <a :href="project.RepositoryURL" target="_blank" class="ml-5">
							<v-btn class="action-button" outlined rounded color="primary"
								:class="{ 'pa-5': $vuetify.breakpoint.smAndDown }">
								<span v-if="$vuetify.breakpoint.mdAndUp">
									Open App
								</span>
								<v-icon class="ml-1" color="primary">
									mdi-open-in-new
								</v-icon>
							</v-btn>
						</a> -->
						<a :href="project.RepositoryURL" target="_blank" class="mx-5">
							<v-btn class="action-button" outlined rounded color="primary"
								:class="{ 'pa-5': $vuetify.breakpoint.smAndDown }">
								<span v-if="$vuetify.breakpoint.mdAndUp">
									Repository
								</span>
								<v-icon class="ml-1" color="primary">
									mdi-github
								</v-icon>
							</v-btn>
						</a>
					</v-row>
				</div>
			</v-col>
			<v-col class="d-flex align-center"
				:class="{ 'justify-end': checkIsEven(index) && $vuetify.breakpoint.mdAndUp, 'justify-start': !checkIsEven(index) && $vuetify.breakpoint.mdAndUp, 'justify-center align-center': $vuetify.breakpoint.smAndDown }"
				md="4" xs="12" :order="checkIsEven(index) && $vuetify.breakpoint.mdAndUp ? 1 : 2">
				<Carousel :media="project.media" />
			</v-col>
		</v-row>
	</span>
</template>
  
<script>
import Carousel from '../components/Carousel.vue'
export default {
	data() {
		return {
			projects: [
				{
					name: "IMDB Clone",
					description: "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives).",
					RepositoryURL: "https://github.com/kvnsharshavardhan/IMDB-Clone",
					AppLink: "",
					Technologies: [
						"vue-js", "ms-sql", "dot-net", "c-starp", "html", "css"
					],
					media: [
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FIMDB%20clone%2FIMDB%20-%201.png?alt=media&token=8db6571f-c5f7-4d07-983d-0dc241c57b9d&_gl=1*uxnier*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzE0NTYuNjAuMC4w",
							type: "Image"
						},
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FIMDB%20clone%2FIMDB%20-%202.png?alt=media&token=0b3106df-8b6a-4bae-be36-24a52196acae&_gl=1*n1a7wp*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzE0NjcuNDkuMC4w",
							type: "Image"
						},
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FIMDB%20clone%2FIMDB%20CLone%20Demo%20.mp4?alt=media&token=2a29d1f0-afc1-4aed-be67-d02aad00a184&_gl=1*11vmpjt*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzE3OTcuMzYuMC4w",
							type: "Video"
						}
					],
				},
				{
					name: "Interative Ads",
					description: "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives).",
					RepositoryURL: "https://github.com/kvnsharshavardhan/Interative-Ads",
					AppLink: "",
					Technologies: [
						"vue-js", "ms-sql", "dot-net", "c-starp", "html", "css"
					],
					media: [
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FInterativeAds%2FInteractiveAds-2.png?alt=media&token=f8e37d23-2e24-4dba-a261-b8fb88aeb90c&_gl=1*13tp1ec*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzM2MDEuNTkuMC4w",
							type: "Image"
						},
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FInterativeAds%2FInterativeAds-1.png?alt=media&token=a1e020cb-f09f-4479-9993-7dd834300cd7&_gl=1*gqzh2k*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzM1MjIuMzcuMC4w",
							type: "Image"
						},
					],
				},
				{
					name: "Bouncing Ball",
					description: "The morning air was crisp and sharp as Sean walked down the road. The pavement was slippery and cold beneath his feet, like a slimy, wet fish. For more information about words that help describe people, places and things, look at the topic on describing words (Adjectives).",
					RepositoryURL: "https://github.com/kvnsharshavardhan/Bouncing-Ball",
					AppLink: "",
					Technologies: [
						"vue-js", "ms-sql", "dot-net", "c-starp", "html", "css"
					],
					media: [
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FBouncing%20Ball%2FBouncing%20Ball.png?alt=media&token=29a6e946-5289-490d-80e7-26717de83536&_gl=1*xrw237*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzIyNzcuNTYuMC4w",
							type: "Image"
						},
						{
							url: "https://firebasestorage.googleapis.com/v0/b/kvnsharshavardhan.appspot.com/o/Projects%2FBouncing%20Ball%2FBouncing%20Ball%20Demo.mp4?alt=media&token=4bf30f11-5676-45f0-a857-40dc3b0c3753&_gl=1*1hfklrn*_ga*Mzg2MjU5NzUxLjE2OTM5OTg3NTc.*_ga_CW55HF8NVT*MTY5NjIzMTE0My4xMC4xLjE2OTYyMzI1NTIuMjUuMC4w",
							type: "Video"
						}
					],
				}
			]
		}
	},
	components: {
		Carousel
	},
	methods: {
		checkIsEven(number) {
			return number % 2 == 0;
		}
	},
	computed: {
		isMobile() {
			return this.$vuetify.breakpoint.smAndDown;
		}
	}
}
</script>
  
<style scoped>
.project-title {
	color: white;
}

.action-button {
	color: #a87ffb;
}

.project-action {
	color: #a87ffb;
}

.project-image {
	max-width: 100%;
}

.project {
	border: 1px dotted #a87ffb;
	border-radius: 10px;
}</style>

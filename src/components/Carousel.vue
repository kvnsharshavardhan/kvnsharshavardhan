<template>
	<div class="d-flex justify-center align-center flex-column">
		<img :src="selectedMedia.url" width="100%" v-if="selectedMedia.type == 'Image'" />
		<video width="100%" controls v-if="selectedMedia.type == 'Video'">
			<source :src="selectedMedia.url">
		</video>
		<div class="d-flex justify-center align-center flex-row">
			<div v-for="m in media" :key="m.url" class="ma-1">
				<div class="chip" :class="{ 'chip-active': isChipActive(m), 'chip-deactive': !isChipActive(m) }"
					@click="selectMedia(m)">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['media'],
	data() {
		return {
			selectedMedia: "",
		}
	},
	methods: {
		selectMedia(media) {
			console.log(1)
			this.selectedMedia = media;
		},
		isChipActive(media) {
			if (media.url == this.selectedMedia.url) {
				return true;
			}
			else {
				return false;
			}
		},
	},
	created() {
		this.selectedMedia = this.media[0];
	}
}
</script>

<style scoped>
.chip {
	width: 30px;
	height: 10px;
	background-color: #a87ffb;
	border-radius: 5px;
	margin: 10px 5px;
	cursor: pointer;
}

.chip-active {
	background-color: #a87ffb;
}

.chip-deactive {
	background-color: grey;
}

img {
	display: block;
	width: 100%;
}

</style>
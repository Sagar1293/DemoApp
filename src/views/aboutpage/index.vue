<template>
	<!-- Banner -->
	<banner />

	<!-- About information -->
	<about-information />

	<!-- find job banner -->
	<find-job-banner />
</template>

<script>
import Banner from '@/views/aboutpage/components/Banner.vue';
import AboutInformation from '@/views/aboutpage/components/AboutInformation.vue';
import FindJobBanner from '@/views/homepage/components/FindJobBanner.vue';

export default {
	name: 'Aboutpage',

	components: {
		Banner,
		AboutInformation,
		FindJobBanner,
	},
};
</script>

<style lang="scss" scoped>
</style>
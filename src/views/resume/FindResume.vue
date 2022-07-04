<template>
	<!-- Banner -->
	<banner />

	<!-- About information -->
	<resume-list />
</template>

<script>
import Banner from '@/views/resume/components/FindResumeBanner.vue';
import ResumeList from '@/views/resume/components/FindResumeList.vue';

export default {
	name: 'ResumeFind',

	components: {
		Banner,
		ResumeList,
	},
};
</script>

<style lang="scss" scoped>
</style>
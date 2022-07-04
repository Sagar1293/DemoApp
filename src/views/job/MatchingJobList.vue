<template>
	<!-- Banner -->
	<!-- <find-job-banner /> -->

	<!-- matching job list -->
	<!-- <find-job-list-old /> -->
	<find-job-list />
</template>

<script>
// import FindJobBanner from '@/views/job/components/FindJobBanner';
// import FindJobListOld from '@/views/job/components/FindJobListOLd';
import FindJobList from '@/views/job/components/FindJobList';

export default {
	name: 'FindJob',

	components: {
		// FindJobBanner,
		// FindJobListOld,
		FindJobList,
	},
	setup(){
		document.title = 'Job Matching - Way2Work'
	}
};
</script>


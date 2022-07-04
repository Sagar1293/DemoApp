<template>
	<section>
		<div>
			<top-navbar />
			<!-- projectMarket page Start-->
			<project-Market />
			<!-- projectMarket page nd-->
		</div>
	</section>
</template>
<script>
import TopNavbar from '@/layouts/homeLayout/components/TopNavbar.vue';
import ProjectMarket from '@/views/projectMarket/components/ProjectMarket.vue';
// import Market from '@/views/projectMarket/components/Market.vue';
export default {
	name: 'Project Market',
	components: {
		TopNavbar,
		ProjectMarket,
		// Market,
	},
};
</script>

<style lang="scss" scoped></style>

<template>
	<div class="gigworkhour__list card-space">
		<!-- gig-work-hour-list -->
		<gig-work-hour />
	</div>
</template>

<script>
import GigWorkHour from '@/views/gigworkhour/components/GigWorkHour.vue';

export default {
	
	name: 'GigWorkHourList',

	components: {				
		GigWorkHour,
	},	
	setup(){
		document.title = 'All Gigs worked Hours - Way2Work'
	}
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

// .gigworkhour__list {
// 	width: 100%;
// 	display: block;
// 	background-color: #fff;
// 	border-radius: 20px;
// 	padding: 50px 70px;
// }

// @media (max-width: 576px) {
// 	.gigworkhour__list {
// 		padding: 15px 0px;
// 	}
// }
</style>
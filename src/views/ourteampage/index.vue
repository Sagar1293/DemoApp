<template>
	<!-- Banner -->
	<banner />

	<!-- contact form -->
	<team-cards />
</template>

<script>
import Banner from '@/views/ourteampage/components/Banner.vue';
import TeamCards from '@/views/ourteampage/components/TeamCards.vue';

export default {
	name: 'OurTeam',

	components: {
		Banner,
		TeamCards,
	},
};
</script>

<style lang="scss" scoped>
</style>
<template>
	<!-- Banner -->
	<banner />

	<!-- contact form -->
	<contact-form />
</template>

<script>
import Banner from '@/views/contactpage/components/Banner.vue';
import ContactForm from '@/views/contactpage/components/ContactForm.vue';

export default {
	name: 'ContactPage',

	components: {
		Banner,
		ContactForm,
	},
};
</script>

<style lang="scss" scoped>
</style>
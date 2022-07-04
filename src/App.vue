<template>
	<!-- loader -->
	<loader />
	<router-view />
</template>

<script>
import Loader from '@/components/loader/Loader.vue'; // Loader
import { provideToast } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

export default {
	name: 'App',

	components: {
		Loader,
	},

	setup() {
		provideToast({ maxToasts: 200 });

	},
};
</script>


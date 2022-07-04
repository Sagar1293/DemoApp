<template>
	<div>
		<!-- top navbar -->
		<!-- <top-navbar /> -->

		<!-- router -->
		<router-view />

		<!-- subscribe footer -->
		<!-- <footer-subscriber /> -->

		<!-- footer -->
		<Footer />

		<!-- footer copyright -->
		<!-- <footer-copyright /> -->
	</div>
	<!-- <default-loader /> -->
	<!-- <template>
		
	</template> -->
</template>

<script>
import Footer from '@/layouts/homeLayout/components/Footer.vue';
import { onMounted } from '@vue/runtime-core';
// import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
// import { isUserAuthenticated } from '@/helpers/functions';
// import DefaultLoader from '@/components/loader/DefaultLoader.vue';

export default {
	name: 'MainHomePage',
	components: {
		// TopNavbar,
		// FooterSubscriber,
		Footer,
		// FooterCopyright,
		// DefaultLoader,
	},
	setup() {
		// global store
		// const store = useStore();
		// global router
		// const router = useRouter();
		const route = useRoute();
		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// if (!store.state.isSiteStatusChecked) {
			// 	// check user validated
			// 	const authState = await isUserAuthenticated();
			// 	const urlState = localStorage.getItem('urlStatusAccess');
			// 	if (!urlState) {
			// 		if (authState) {
			// 			router.push('/new-dashboard');
			// 		} else {
			// 			router.push('/');
			// 		}
			// 	}
			// }
		});
		return {
			route,
		};
	},
};
</script>

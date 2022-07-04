<template>
	<!-- Banner -->
	<banner />

	<!-- featuresVoxed -->

	<!-- <features-voxed /> -->

	<!-- workin-Hyodyt -->

	<workin-Hyodyt />

	<!-- team-Boxed -->
	<team-Boxed />
	
	<!-- Brands -->
	<brands />

	<!-- footer -->
	<Footer />

	<!-- start job banner -->
	<!-- <start-job-banner /> -->

	<!-- find job banner -->
	<!-- <find-job-banner /> -->

	<!-- get app banner -->
	<!-- <get-app-banner /> -->
</template>

<script>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Tab } from 'bootstrap';
import Banner from '@/views/homepage/components/Banner.vue';
// import StartJobBanner from '@/views/homepage/components/StartJobBanner.vue';
// import FindJobBanner from '@/views/homepage/components/FindJobBanner.vue';
// import GetAppBanner from '@/views/homepage/components/GetAppBanner.vue';
// import FeaturesVoxed from '@/views/homepage/components/FeaturesVoxed.vue';
import WorkinHyodyt from '@/views/homepage/components/WorkinHyodyt.vue';
import TeamBoxed from '@/views/homepage/components/TeamBoxed.vue';
import Brands from '@/views/homepage/components/Brands.vue';
import Footer from '@/views/homepage/components/Footer.vue';

export default {
	name: 'Homepage',

	components: {
		Banner,
		// StartJobBanner,
		// FindJobBanner,
		// GetAppBanner,
		// FeaturesVoxed,
		WorkinHyodyt,
		TeamBoxed,
		Brands,
		Footer,
	},

	setup() {
		// global router
		const router = useRouter();
		const route = useRoute();

		// store
		const store = useStore();

		onMounted(() => {
			const token = route.params.token;
			if (token) {
				localStorage.removeItem('expiredTime');
				store.dispatch('auth/verifyEmailToken', token).then(() => {
					store.commit('auth/SET_STATE', {
						action: 'isRegisterModelOpen',
						data: true,
					});

					setTimeout(() => {
						const triggerTab = document.querySelector(
							'#pills-tab #pills-mobileVerification-tab',
						);

						new Tab(triggerTab).show();
					}, 500);
				});
			}

			const accToken = route.query.accToken;
			if (accToken) {
				store.commit('auth/SET_BEARER_TOKEN', accToken);
				localStorage.setItem('accessToken', accToken);
				store.dispatch('auth/verifyToken').then(data => {
					if (data.data.data.user_type == 'jobseeker') {
						router.push({ name: 'Dashboard' });
					} else {
						router.push({ name: 'Company Profile' });
					}
				});
			}
		});

		return {
			// ref
			router,
			route,
		};
	},
};
</script>

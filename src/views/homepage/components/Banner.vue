<template>
	<!-- banner-sec -->

	<BannerSection />

	<!-- splide sec-->
	<section class="splide-sec">
		<div class="container-lg px-xl-0">
			<Splide :options="options">
				<SplideSlide>
					<div class="row ">
						<div class="col-xxl-5 col-xl-4 col-lg-6 col-md-6 col-12">
							<div class="splide-box">
								<span class="bg-puzzle">
									<img src="~@/assets/images/slider-red-puzzle.png" alt="" class="bg-puzzle-inset" />
								</span>
								<h1 class="splide-content lh-base">
									<span class="text-gray">Way2Work </span>is a
									<span class="fst-italic">comprehensive</span>
									and easy billing service provider.
								</h1>
								<div class="mt-4">
									<button class="btn-bordered">READ MORE</button>
								</div>
							</div>
						</div>
						<div class="col-xxl-7 col-xl-8 col-lg-6 col-md-6 col-12">
							<div class="splide-img" @click="showBannerModal = true">
								<img src="~@/assets/images/slider-grey.png" alt="Sample 2" />
								<span class="d-block video-icon">
									<img src="~@/assets/images/play.png" alt="" />
								</span>
							</div>
						</div>
					</div>
				</SplideSlide>

				<SplideSlide>
					<div class="row ">
						<div class="col-xxl-5 col-xl-4 col-lg-6 col-md-6 col-12">
							<div class="splide-box">
								<span class="bg-puzzle">
									<img src="~@/assets/images/slider-red-puzzle.png" alt="" class="bg-puzzle-inset" />
								</span>
								<h1 class="splide-content lh-base">
									<span class="text-gray">Way2Work </span>is a
									<span class="fst-italic">comprehensive</span>
									and easy billing service provider.
								</h1>
								<div class="mt-4">
									<button class="btn-bordered">READ MORE</button>
								</div>
							</div>
						</div>
						<div class="col-xxl-7 col-xl-8 col-lg-6 col-md-6 pe-2 col-12">
							<div class="splide-img" @click="showBannerModal = true">
								<img src="~@/assets/images/slider-grey.png" alt="Sample 2" />
								<span class="d-block video-icon">
									<img src="~@/assets/images/play.png" alt="" class="img-fluid" />
								</span>
							</div>
						</div>
					</div>
				</SplideSlide>
			</Splide>
		</div>

		<!-- <button @click="enabled = !enabled">
				{{ enabled ? 'Hide Slider' : 'Show Slider' }}
			</button> -->
	</section>

	<!-- Banner Modal -->
	<Suspense v-if="showBannerModal.value">
		<template #default>
			<banner-modal :isModalShow="showBannerModal" />
		</template>
	</Suspense>

	<!-- login LE form -->
	<Suspense v-if="showLoginForm">
		<template #default>
			<login-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
	<!-- login company form -->
	<!-- <Suspense v-if="empLoginForm">
		<template #default>
			<emp-login-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense> -->

	<!-- register form -->
	<Suspense v-if="showRegisterForm">
		<template #default>
			<register-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { useStore } from 'vuex';
import { loadMessagesJson } from '@/helpers/I18n.js';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
import BannerSection from '@/views/homepage/components/BannerSection.vue';
import { faUser, faUserPlus, faMinusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'vue-router';

const BannerModal = defineAsyncComponent(async () => {
	return import('@/views/homepage/components/BannerModal.vue' /* webpackChunkName:"ForgotPasswordForm" */);
});

const LoginForm = defineAsyncComponent(async () => {
	return import('@/views/authentication/NewLogin.vue' /* webpackChunkName:"LoginForm" */);
});

// const EmpLoginForm = defineAsyncComponent(async () => {
// 	return import(
// 		'@/views/authentication/EmpLoginForm.vue' /* webpackChunkName:"EmpLoginForm" */
// 	);
// });

const RegisterForm = defineAsyncComponent(async () => {
	return import('@/views/authentication/RegisterForm.vue' /* webpackChunkName:"RegisterForm" */);
});

export default defineComponent({
	name: 'Banner',

	// components
	components: {
		// FontAwesomeIcon,
		Splide,
		SplideSlide,
		BannerModal,
		BannerSection,

		LoginForm,
		// EmpLoginForm,
		RegisterForm,
		DefaultLoader,
	},

	setup() {
		// icons
		const userIcon = faUser;
		const addUserIcon = faUserPlus;
		const searchIcon = faSearch;
		const dashboardIcon = faMinusSquare;

		const cityDropDown = ref(null); // language dropdown ref

		const isMenu = ref(false);

		const isBannerImgModal = ref(false);

		// sweetalert
		const Swal = useSwal();

		// global store
		const store = useStore(); // use state

		// global router
		const router = useRouter();

		//slider option
		const options = {
			type: 'loop',
			// padding: '5rem',
			perPage: 1,
			rewind: true,
			// gap: '1rem',
			pauseOnHover: false,
			arrows: false,
			// autoplay:true,
			breakpoints: {
				1440: {
					padding: '5rem',
				},
				1024: {
					padding: '2rem',
				},
				768: {
					padding: '1rem',
				},
				576: {
					padding: '0.2rem',
				},
			},
		};

		// slider option
		const banner = {
			type: 'loop',
			// padding: '5rem',
			perPage: 1,
			rewind: true,
			// gap: '1rem',
			pauseOnHover: false,
			// isNavigation: false,
			// autoplay:true,
			arrows: false,
			pagination: false,
			// breakpoints: {
			// 	1440: {
			// 		padding: '5rem',
			// 	},
			// 	1024: {
			// 		padding: '2rem',
			// 	},
			// 	768: {
			// 		padding: '1rem',
			// 	},
			// 	576: {
			// 		padding: '0.2rem',
			// 	},
			// },
		};

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		// toggle dropdown
		const toggleCityDropdown = async () => {
			cityDropDown.value.classList.toggle('hidden');
		};

		// i18n instance
		const { locale, setLocaleMessage, availableLocales, t } = useI18n({
			useScope: 'global',
		}); //  use i18n

		// user is looged in ?
		const isUserLogedIn = computed(() => store.state.auth.userLogged);

		const isEmpUserLogedIn = computed(() => store.state.auth.empLogged);

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		onMounted(() => {
			// fetch languages
			store.dispatch('language/getLanguages');

			window.addEventListener('scroll', () => {
				if (window.pageYOffset >= 100) {
					document.querySelector('#header').classList.add('fixed');
				} else {
					document.querySelector('#header').classList.remove('fixed');
				}
			});
		});

		/**
		 * Method
		 * *******************************************************************
		 */

		// show register
		const showRegister = async () => {
			router.push({ name: 'registration-page' });
		};

		// show login
		const showLogin = async () => {
			router.push({ name: 'login-le' });
		};

		const showPartner = async () => {
			router.push({ name: 'login-client' });
		};

		// update local language
		const updateLocaleLanguage = async e => {
			const messageJson = await loadMessagesJson(e.target.value); // load locale message json
			const htmlBody = document.getElementsByTagName('html');
			htmlBody[0].setAttribute('lang', e.target.value);
			locale.value = e.target.value; // change locale!

			if (!availableLocales.includes(e.target.value)) {
				setLocaleMessage(e.target.value, messageJson); // set loaded json in locale
			}

			store.dispatch('language/updateLocalLanguage', e.target.value); // update local value in localhost
		};

		// user logout
		const userLogout = () => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want logout ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Logout',
			}).then(async result => {
				if (result.isConfirmed) {
					store.dispatch('auth/logout');
					Swal.fire('Logout!', 'Your account is logged out.', 'success').then(() => {
						// router.go();
						window.location.href = '/';
					});
				}
			});
		};

		/**
		 * Computed Properties
		 * *******************************************************************
		 */

		// get current local language
		const localLang = computed(() => store.state.language.localLang); // local languages

		// get language list
		const languageList = computed(() => store.state.language.languages);

		// show forgot password form
		const showBannerModal = computed({
			get() {
				return isBannerImgModal;
			},

			set(val) {
				isBannerImgModal.value = val;
			},
		});

		// show login form
		const showLoginForm = computed({
			get() {
				return store.state.auth.isLoginModelOpen;
			},

			set(val) {
				store.commit('auth/SET_STATE', {
					action: 'isLoginModelOpen',
					data: val,
				});
			},
		});

		// const empLoginForm = computed({
		// 	get() {
		// 		return store.state.auth.isEmpLoginModelOpen;
		// 	},

		// 	set(val) {
		// 		store.commit('auth/SET_STATE', {
		// 			action: 'isEmpLoginModelOpen',
		// 			data: val,
		// 		});
		// 	},
		// });
		// show register form
		const showRegisterForm = computed({
			get() {
				return store.state.auth.isRegisterModelOpen;
			},

			set(val) {
				store.commit('auth/SET_STATE', {
					action: 'isRegisterModelOpen',
					data: val,
				});
			},
		});
		return {
			t,
			toggleCityDropdown,
			cityDropDown,
			userIcon,
			addUserIcon,
			dashboardIcon,
			options,
			banner,
			isMenu,
			searchIcon,
			localLang,
			languageList,
			showLoginForm,

			// empLoginForm,

			// method
			updateLocaleLanguage,
			userLogout,
			showRegister,
			showPartner,
			// computed
			showBannerModal,
			isUserLogedIn,
			isEmpUserLogedIn,
			userTypeInfo,
			showRegisterForm,
			showLogin,
		};
	},
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/bannerLayout.scss';

// @import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// @import '@splidejs/splide/dist/css/splide.min.css';

// splide sec
.splide-sec {
	.splide-box {
		background-color: transparent;
		padding: 100px;
		border-radius: 30px;
		height: 500px;
		position: relative;
		max-width: 500px;
		margin: 0 auto;

		@media (max-width: 1440px) {
			height: 27.6vw;
			padding: 50px 60px 40px 60px;
		}

		@media (max-width: 1200px) {
			height: 350px;
			padding: 70px 110px;
		}

		@media (max-width: 992px) {
			height: 350px;
			padding: 50px;
		}

		@media (max-width: 768px) {
			height: 353px;
			padding: 60px;
			max-width: 353px;
			margin: 0 auto;
		}

		@media (max-width: 576px) {
			height: 330px;
			// padding: 90px 150px 40px 170px;
			border-radius: 20px;
			margin-bottom: 120px 0 10px 0;
		}

		@media (max-width: 425px) {
			padding: 90px;
		}

		@media (max-width: 375px) {
			padding: 60px;
		}

		.bg-puzzle {
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			position: absolute;

			img {
				width: 100%;
				height: 100%;
				position: relative;
				object-fit: contain;
			}
		}
		.splide-content {
			max-width: 300px;
			font-size: 28px;
			color: $colorWhite;

			@media (max-width: 1500px) {
				font-size: 23px;
			}
			@media (max-width: 1024px) {
				font-size: 20px;
			}
			@media (max-width: 768px) {
				font-size: 16px;
			}
			@media (max-width: 576px) {
				font-size: 14px;
			}

			.text-gray {
				color: $colorDarkGrey;
				font-weight: 900;
			}
		}

		.btn-bordered {
			box-shadow: 0 1px 40px #686868;

			@media (max-width: 1450px) {
				font-size: 13px;
				padding: 15 px 15px;
			}

			@media (max-width: 1024px) {
				font-size: 13px;
				padding: 10px 15px;
			}
		}
	}
	.splide-img {
		padding: 0;
		width: 100%;
		height: 100%;
		border-radius: 30px;
		position: relative;

		@media (max-width: 1440px) {
			height: 27.6vw;
		}

		@media (max-width: 1024px) {
			height: 350px;
		}

		@media (max-width: 768px) {
			height: 300px;
		}

		@media (max-width: 576px) {
			height: 280px;
		}

		img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0;
		}

		&::after {
			content: '';
			background-color: rgba(0, 0, 0, 0.6);
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0px;
			left: 0px;
			right: 0;
		}
	}
	.btn-bordered {
		background-color: #3a4151;
		padding: 20px 35px;
		border-radius: 50px;
		color: $colorWhite;
		font-weight: 600;
		font-size: 13px;
		box-shadow: 0px 2px 1px #535864;
		letter-spacing: 3px;
		max-width: 200px;
		width: 100%;

		@media (max-width: 1400px) {
			padding: 15px 30px;
		}

		span {
			display: inline-block;
			margin-right: 10px;
			color: $colorWhite;

			svg {
				color: #fff;
			}
		}

		@media (max-width: 1024px) {
			padding: 15px 30px;
		}

		@media (max-width: 768px) {
			padding: 15px 30px;
		}

		@media (max-width: 576px) {
			padding: 10px 25px;
			font-size: 11px;
			letter-spacing: 2px;
		}
	}
	.container-lg {
		@media (max-width: 2560px) {
			max-width: 100%;
		}
	}
}

.video-icon {
	top: 50%;
	left: 50%;
	width: 230px;
	height: 230px;
	position: absolute;
	transform: translate(-50%, -50%);
	z-index: 999;

	@media (max-width: 1440px) {
		height: 265px;
	}

	@media (max-width: 768px) {
		width: 50px;
		height: 50px;
	}

	@media (max-width: 576px) {
		width: 50px;
		height: 50px;
	}
}
</style>
<style>
.splide__pagination {
	bottom: -50px !important;
	z-index: 99 !important;

	@media (max-width: 576px) {
		bottom: -20px !important;
	}
}

.splide__pagination__page {
	height: 15px;
	width: 15px;
	background: #454648;
}

.splide__pagination__page.is-active {
	height: 13px;
	width: 13px;
	background: #454648;
	border: 2px solid #fff;
}

.splide__pagination__page:hover {
	background: #454648;
}
</style>

<template>
	<section class="banner-section d-flex flex-column justify-content-center align-items-center">
		<div class="position-relative">
			<Splide :options="banner">
				<SplideSlide>
					<div>
						<img src="~@/assets/images/slider-1.svg" class="img-fluid w-100" />
					</div>
				</SplideSlide>

				<SplideSlide>
					<div>
						<img src="~@/assets/images/slider-2.svg" class="img-fluid w-100" />
					</div>
				</SplideSlide>

				<SplideSlide>
					<div>
						<img src="~@/assets/images/slider-3.svg" class="img-fluid w-100" />
					</div>
				</SplideSlide>
			</Splide>
		</div>
		<div class="banner-img position-absolute top-0 left-0 w-100">
			<header class="header w-100" id="header">
				<div class="container-fluid">
					<!-- navbar -->
					<nav class="navbar navbar-expand-lg">
						<div class="d-sm-flex align-items-center d-block w-100">
							<!-- navbar logo -->
							<div class="navbar-brand">
								<img src="@/assets/images/logo-white.svg" class="img-fluid" alt="error" />
							</div>
							<div class="d-flex align-items-center ms-sm-2 sm-0">
								<clock />
								<p class="font-semibold ms-2 text-white watch-text">{{ currentTimeZone }}</p>
							</div>
							<div class="align-items-center navbar-nav navbar-collapse" :class="{ 'open-menu': isMenu }">
								<div @click="isMenu = !isMenu" class="close-menu-icon d-xl-none">
									<img src="@/assets/images/close.png" alt="" />
								</div>

								<!-- nav links -->
								<ul class="d-xl-flex me-auto align-items-center navbar-list">
									<!-- <li class="nav-item">
										<router-link to="/project-market" class="nav-link">
											{{ t('common.projectMarket') }}
										</router-link>
									</li> -->
									<!-- <li class="nav-item">
										<router-link to="/about" class="nav-link">
											{{ t('common.aboutUs') }}
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/contactus" class="nav-link">
											{{ t('common.contactUs') }}
										</router-link>
									</li>
									<li class="nav-item">
										<router-link to="/our-team" class="nav-link">
											{{ t('common.ourTeam') }}
										</router-link>
									</li> -->
								</ul>

								<!-- navbar btns-->

								<div class="navbar-btn">
									<!-- change language dropdown -->
									<div class="dropdown">
										<button
											class="dropdown-toggle d-flex align-items-center justify-content-space-between m-auto"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											<!-- <div class="flag-img-wrap mr-2">
                                                    <img src="@/assets/images/us.svg" alt="" class="w-100 h-100">
                                                </div> -->
											{{ localLang }}
										</button>

										<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
											<li v-for="language in languageList" :key="language.language_code">
												<div class="d-flex">
													<div class="flag-img-wrap" v-if="language.file_path">
														<img :src="language.file_path" alt="" class="w-100 h-100" />
													</div>

													<button class="dropdown-item ml-2" @click="updateLocaleLanguage" :value="language.language_code">
														{{ language.language_name }}
													</button>
												</div>
											</li>
										</ul>
										<div>
											<!-- <button class="btn-bordered" @click="showLoginForm = true" v-if="!isUserLogedIn">
												<span class="ml-2">
													<FontAwesomeIcon :icon="userIcon" />
												</span>
												Light Entrepreneur
											</button> -->

											<button class="btn-bordered signup__btn" @click="showRegister" v-if="!isUserLogedIn">
												<span>
													<FontAwesomeIcon :icon="addUserIcon" />
												</span>
												{{ t('common.signUp') }}
											</button>

											<button class="btn-bordered signup__btn" @click="showSignIn" v-if="!isUserLogedIn">
												<span>
													<FontAwesomeIcon :icon="addUserIcon" />
												</span>
												Sign In
											</button>

											<!-- <button
												class="btn-bordered"
												@click="showLogin"
												v-if="!isUserLogedIn"
											>
												<span class="ml-2">
													<FontAwesomeIcon
														:icon="userIcon"
													/>
												</span>
												Light Entrepreneur
											</button> -->
										</div>

										<!-- <div>
											<button @click="showPartner" class="btn-bordered btn-red" v-if="!isEmpUserLogedIn">
												<span><img src="@/assets/images/push-pin.png" alt="img" /> </span>
												Post A Gig
											</button>
										</div> -->
										<!-- <div>
                                                <button	
                                                    class="btn-common btn-bordered signup__btn"
                                                    @click="showRegister"
                                                    v-if="!isUserLogedIn"
                                                >
                                                    <span>
                                                        <FontAwesomeIcon
                                                            :icon="addUserIcon"
                                                        />
                                                    </span>
                                                    Join today
                                                </button>
                                            </div> -->
									</div>

									<div v-if="userTypeInfo == 'jobseeker'">
										<router-link to="/dashboard" class="header-right-dash" v-if="isUserLogedIn">
											<div class="hrd-box">
												<FontAwesomeIcon :icon="dashboardIcon" />
											</div>
											<span>Dashboard</span>
										</router-link>
									</div>

									<div v-else>
										<router-link to="/profile/company" class="header-right-dash" v-if="isUserLogedIn">
											<div class="hrd-box">
												<FontAwesomeIcon :icon="dashboardIcon" />
											</div>
											<span>Dashboard</span>
										</router-link>
									</div>
									<!-- 
									<button
										class="btn-bordered signup__btn mr-3"
										@click="showRegister"
										v-if="isUserLogedIn"
									>
										<span>
											<FontAwesomeIcon
												:icon="addUserIcon"
											/>
										</span>
										{{ t('common.signUp') }}
									</button> -->

									<button class="btn-common btn-black" v-if="isUserLogedIn" @click="userLogout">
										{{ t('common.logout') }}
										<span class="ml-2">
											<FontAwesomeIcon :icon="userIcon" />
										</span>
									</button>
								</div>
							</div>

							<button type="button" :class="{ 'open-menu': isMenu }" class="navbar-toggler-banner" @click="isMenu = !isMenu">
								<img src="@/assets/images/menu-icon.svg" alt="menu-icon" />
							</button>
						</div>
					</nav>
				</div>
			</header>
		</div>

		<div class="container-fluid position-absolute w-100">
			<div class="row">
				<div class="col-xl-6 col-lg-5">
					<div class="banner-side">
						<img src="@/assets/images/banner-side-hand.svg" class="img-fluid" alt="err" />
					</div>
				</div>

				<div class="col-xl-6 col-lg-7">
					<div class="banner-sec ml-auto">
						<h1>
							<span class="invoice-text"
								>{{ t('leadingPage.bannerPage.invoice') }}<span class="text-red fst-italic"> {{ t('leadingPage.bannerPage.without') }}</span>
							</span>
							{{ t('leadingPage.bannerPage.havingCompany') }}
						</h1>
						<p>
							{{ t('leadingPage.bannerPage.focusSkills') }}
						</p>
						<div class="d-md-flex align-items-md-center">
							<button class="d-flex align-items-center download-btn">
								<div class="download-icon">
									<img src="@/assets/images/apple-icon.png" class="img-fluid" alt="apple err" />
								</div>
								<span class="ml-2">{{ t('leadingPage.bannerPage.downloadApp') }}</span>
							</button>

							<button class="d-flex align-items-center download-btn ml-md-4 mt-md-0 mt-3">
								<div class="download-icon">
									<img src="@/assets/images/playstore-icon.svg" class="img-fluid" alt="google err" />
								</div>
								<span class="ml-2">{{ t('leadingPage.bannerPage.downloadApp') }}</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- register form -->
	<Suspense v-if="showRegisterForm">
		<template #default>
			<register-form />
		</template>
		<template #fallback>
			<default-loader />
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
</template>

<script>
import { computed, defineAsyncComponent, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { useStore } from 'vuex';
import { loadMessagesJson } from '@/helpers/I18n.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
import { faUser, faUserPlus, faMinusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import Clock from '@/views/homepage/components/clock/Clock.vue';

import { useRouter } from 'vue-router';

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
import moment from 'moment';

export default defineComponent({
	name: 'BannerSection',

	// components
	components: {
		FontAwesomeIcon,
		Splide,
		SplideSlide,

		LoginForm,
		// EmpLoginForm,
		RegisterForm,
		DefaultLoader,
		Clock,
	},

	created() {
		setInterval(this.getInfoTimeDate, 1000);
	},

	setup() {
		// icons
		const userIcon = faUser;
		const addUserIcon = faUserPlus;
		const searchIcon = faSearch;
		const dashboardIcon = faMinusSquare;
		const currentTimeZone = ref(null);

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
			autoplay: true,
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

		const getTimeInfo = () => {
			return currentTimeZone.value;
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

		// show register
		const showSignIn = async () => {
			router.push({ name: 'signin-page' });
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
						localStorage.clear();
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

		const getInfoTimeDate = () => {
			currentTimeZone.value = moment().format('DD.MM.YYYY HH:mm:s');
		};
		return {
			t,
			toggleCityDropdown,
			cityDropDown,
			userIcon,
			addUserIcon,
			dashboardIcon,
			currentTimeZone,
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
			showSignIn,
			showPartner,
			// computed
			showBannerModal,
			isUserLogedIn,
			isEmpUserLogedIn,
			userTypeInfo,
			showRegisterForm,
			showLogin,
			getTimeInfo,
			getInfoTimeDate,
		};
	},
});
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/bannerLayout.scss';

.splide-sec {
	background-color: $colorDark;
}

.watch-text {
	font-size: 16px;

	@media (max-width: 575px) {
		font-size: 13px;
	}
}
</style>

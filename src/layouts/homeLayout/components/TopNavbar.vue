<template>
	<!-- --header start-- -->
	<header class="header w-100" id="header">
		<!-- navbar -->
		<nav class="navbar navbar-expand-lg">
			<div class="container">
				<div class="d-sm-flex align-items-center d-block">
					<!-- navbar logo -->
					<div class="navbar-brand">
						<img src="@/assets/images/icons/logo.png" class="img-fluid" alt="" />
					</div>
					<div class="d-flex align-items-center ms-sm-2 sm-0">
						<clock />
						<p class="font-semibold ms-2 watch-text">{{ currentTimeZone }}</p>
					</div>
				</div>
				<!-- navbar collapse -->
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<div class="header-left">
						<!-- nav links -->
						<ul class="navbar-nav me-auto">
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
					</div>

					<!-- header - right -->
					<div class="header-right">
						<div class="d-flex align-items-center header__right__btns">
							<div v-if="userTypeInfo == 'jobseeker'">
								<label for="switch" class="switch d-flex align-items-center m-0"
									>{{ t('updateProfile.seek_for_gigs') }}

									<input type="checkbox" v-model="selected" @change="check($event)" class="checkbox" id="switch" />

									<p>
										<span class="on"></span>
										<span class="off"></span>
									</p>
								</label>
							</div>

							<div class="dropdown">
								<button class="dropdown-toggle d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
											<button class="dropdown-item" @click="updateLocaleLanguage" :value="language.language_code">
												{{ language.language_name }}
											</button>
										</div>
									</li>
								</ul>
							</div>

							<button class="btn-common btn-red" @click="showLogin" v-if="!isUserLogedIn">
								<!-- {{ t('common.login') }} -->
								{{ t('common.signIn') }}
								<!-- <span class="ml-2">
									<FontAwesomeIcon :icon="userIcon" />
								</span> -->
							</button>

							<!-- search bar -->
							<!-- <div
								class="header-right-search"
								v-if="isUserLogedIn"
							>
								<input
									type="text"
									class="form-control"
									placeholder="Search Gig here..."
								/>
								<button class="search-icon">
									<FontAwesomeIcon :icon="searchIcon" />
								</button>
							</div> -->

							<!-- dashboard btn -->
							<div v-if="userTypeInfo == 'jobseeker'">
								<router-link to="/new-dashboard" class="header-right-dash" v-if="isUserLogedIn">
									<div class="hrd-box">
										<FontAwesomeIcon :icon="dashboardIcon" />
									</div>
									<span>{{ t('sidebar.dashboard') }}</span>
								</router-link>
							</div>
							<div v-else>
								<router-link to="/new-dashboard" class="header-right-dash" v-if="isUserLogedIn">
									<div class="hrd-box">
										<FontAwesomeIcon :icon="dashboardIcon" />
									</div>
									<span>{{ t('sidebar.dashboard') }}</span>
								</router-link>
							</div>

							<button class="btn-common btn-black" v-if="isUserLogedIn" @click="userLogout">
								{{ t('common.logout') }}
								<span class="ml-2">
									<FontAwesomeIcon :icon="userIcon" />
								</span>
							</button>
						</div>
					</div>
				</div>

				<div class="d-flex align-items-center">
					<div class="dropdown language-dropdown">
						<button class="dropdown-toggle d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
									<button class="dropdown-item" @click="updateLocaleLanguage" :value="language.language_code">
										{{ language.language_name }}
									</button>
								</div>
							</li>
						</ul>
					</div>

					<!-- navbar expand btn -->
					<button class="navbar-toggler bar-button ml-2" type="button" aria-expanded="false" aria-label="Toggle navigation" @click="expandSideMenu">
						<svg xmlns="http://www.w3.org/2000/svg" width="384.969" height="192.484" viewBox="0 0 384.969 192.484">
							<g id="menu" transform="translate(0 -96.243)">
								<g id="Menu_1_">
									<path id="Path_87" data-name="Path 87" d="M12.03,120.3H372.939a12.03,12.03,0,0,0,0-24.06H12.03a12.03,12.03,0,1,0,0,24.06Z" fill="#ff4b57" />
									<path id="Path_88" data-name="Path 88" d="M372.939,180.455H12.03a12.03,12.03,0,1,0,0,24.06H372.939a12.03,12.03,0,1,0,0-24.06Z" fill="#ff4b57" />
									<path id="Path_89" data-name="Path 89" d="M372.939,264.667H132.333a12.03,12.03,0,1,0,0,24.06H372.939a12.03,12.03,0,0,0,0-24.06Z" fill="#ff4b57" />
								</g>
							</g>
						</svg>
					</button>
				</div>
			</div>
		</nav>
	</header>
	<!-- --header end-- -->

	<!-- login form -->
	<Suspense v-if="showLoginForm">
		<template #default>
			<login-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>

	<!-- register form -->
	<Suspense v-if="showRegisterForm">
		<template #default>
			<register-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>

	<!-- forgot password form -->
	<Suspense v-if="showForgotPasswordForm">
		<template #default>
			<forgot-password-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
	<Suspense v-if="showJobSeekerForm">
		<template #default>
			<job-seeker-form :toggleCheck="toggleCheck" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { computed, ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { loadMessagesJson } from '@/helpers/I18n.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faUserPlus, faMinusSquare, faSearch } from '@fortawesome/free-solid-svg-icons';

import DefaultLoader from '@/components/loader/DefaultLoader.vue';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import Clock from '@/layouts/homeLayout/components/clock/Clock.vue';
import moment from 'moment';

// const LoginForm = defineAsyncComponent(async () => {
// 	return import(
// 		'@/views/authentication/LoginForm.vue' /* webpackChunkName:"LoginForm" */
// 	);
// });

const LoginForm = defineAsyncComponent(async () => {
	return import('@/views/authentication/NewLogin.vue' /* webpackChunkName:"LoginForm" */);
});

const RegisterForm = defineAsyncComponent(async () => {
	return import('@/views/authentication/RegisterForm.vue' /* webpackChunkName:"RegisterForm" */);
});

const ForgotPasswordForm = defineAsyncComponent(async () => {
	return import('@/views/authentication/ForgotPasswordForm.vue' /* webpackChunkName:"ForgotPasswordForm" */);
});

const JobSeekerForm = defineAsyncComponent(async () => {
	return import('@/views/authentication/JobseekerForm.vue' /* webpackChunkName:"ForgotPasswordForm" */);
});

export default {
	name: 'TopNavbar',

	// components
	components: {
		FontAwesomeIcon,
		LoginForm,
		RegisterForm,
		ForgotPasswordForm,
		DefaultLoader,
		JobSeekerForm,
		Clock,
	},
	created() {
		setInterval(this.getInfoTimeDate, 1000);
	},

	// composition api
	setup() {
		const languageDropDown = ref(null); // language dropdown ref
		// const selected = ref(false);

		// icons
		const userIcon = faUser;
		const addUserIcon = faUserPlus;
		const dashboardIcon = faMinusSquare;
		const searchIcon = faSearch;
		const currentTimeZone = ref(null);

		// global router
		const router = useRouter();

		// global store
		const store = useStore(); // use state

		// i18n instance
		const { locale, setLocaleMessage, availableLocales, t } = useI18n({
			useScope: 'global',
		}); //  use i18n

		// sweetalert
		const Swal = useSwal();

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			window.addEventListener('scroll', () => {
				if (window.pageYOffset >= 100) {
					document.querySelector('#header').classList.add('fixed');
				} else {
					document.querySelector('#header').classList.remove('fixed');
				}
			});

			// fetch languages
			store.dispatch('language/getLanguages');
			// fetchUserDetail()
			// setInterval(getInfoTimeDate(), 1000);
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */

		// get current local language
		const localLang = computed(() => store.state.language.localLang); // local languages

		// get language list
		const languageList = computed(() => store.state.language.languages);

		// user is looged in ?
		const isUserLogedIn = computed(() => store.state.auth.userLogged);

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

		// show forgot password form
		const showForgotPasswordForm = computed({
			get() {
				return store.state.auth.isForgotPasswordModelOpen;
			},

			set(val) {
				store.commit('auth/SET_STATE', {
					action: 'isForgotPasswordModelOpen',
					data: val,
				});
			},
		});

		const showJobSeekerForm = computed({
			get() {
				return store.state.auth.isJobSeekerModelOpen;
			},

			set(val) {
				store.commit('auth/SET_STATE', {
					action: 'isJobSeekerModelOpen',
					data: val,
				});
			},
		});
		// toggle login modal
		const selected = computed({
			get() {
				return store.state.auth.seekForGig;
			},

			set(val) {
				store.commit('auth/SET_STATE', {
					action: 'seekForGig',
					data: val,
				});
			},
		});

		const getTimeInfo = () => {
			return currentTimeZone.value;
		};

		/**
		 * Methods
		 * *******************************************************************
		 */

		// show register
		const showRegister = async () => {
			router.push({ name: 'registration-page' });
		};

		// show login
		const showLogin = async () => {
			router.push({ name: 'signin-page' });
		};

		// toggle dropdown
		const toggleLanguageDropdown = async () => {
			languageDropDown.value.classList.toggle('hidden');
		};

		const check = event => {
			updateStatusForSeeker(event.target.checked);
			// selected.value = event.target.checked;
			// showJobSeekerForm.value = event.target.checked;
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
			router.go();
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
						localStorage.removeItem('workDetails');
						localStorage.removeItem('invoiceWorkDetails');
						localStorage.clear();
						// router.go();
						window.location.href = '/';
					});
				}
			});
		};

		// update seeker status
		const updateStatusForSeeker = async val => {
			const payload = {
				job_alert: val,
			};
			store.commit('auth/SET_STATE', {
				action: 'seekForGig',
				data: val,
			});
			// const messageJson = await loadMessagesJson(e.target.value); // load locale message json
			// const htmlBody = document.getElementsByTagName('html');
			// htmlBody[0].setAttribute('lang', e.target.value);
			// locale.value = e.target.value; // change locale!

			// if (!availableLocales.includes(e.target.value)) {
			// 	setLocaleMessage(e.target.value, messageJson); // set loaded json in locale
			// }

			store.dispatch('language/updateSeekerStatus', payload); // update local value in localhost
		};

		// fetch logged users invoices
		// const fetchUserDetail = () => {
		// 	store.dispatch('dashboard/fetchJobseeker');
		// };

		const expandSideMenu = () => {
			console.log(window.innerWidth, 'width');
			if (window.innerWidth < 1025) {
				let isMobileVersion = document.getElementsByClassName('hide-nav');
				if (isMobileVersion.length > 0) {
					document.getElementById('i_am_sidebar').classList.remove('hide-nav');
					document.getElementById('i_am_sidebar').classList.remove('dash-nav-responsive');
					document.querySelector('.sidebar-overlay').style.display = 'block';
				} else {
					document.getElementById('i_am_sidebar').classList.add('hide-nav');
					document.getElementById('i_am_sidebar').classList.add('dash-nav-responsive');
					document.querySelector('.sidebar-overlay').style.display = 'none';
				}
			}
			// document.getElementById('i_am_sidebar').classList.toggle('dash-nav-responsive')
		};
		const getInfoTimeDate = () => {
			currentTimeZone.value = moment().format('DD.MM.YYYY HH:mm:s');
		};

		return {
			updateStatusForSeeker,
			selected,
			userIcon,
			addUserIcon,
			dashboardIcon,
			searchIcon,
			currentTimeZone,
			t,
			languageDropDown,
			toggleLanguageDropdown,
			localLang,
			languageList,
			updateLocaleLanguage,
			isUserLogedIn,
			showRegister,
			showRegisterForm,
			showForgotPasswordForm,
			showJobSeekerForm,
			showLoginForm,
			userLogout,
			userTypeInfo,
			showLogin,
			check,
			expandSideMenu,
			getTimeInfo,
			getInfoTimeDate,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

// header
.header {
	padding: 10px 0px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: #fff;
	transition: $transition;

	@media (max-width: 576px) {
		padding: 0;
	}

	&.fixed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
		transition: $transition;
	}

	.navbar {
		background-color: transparent;

		.language-dropdown {
			display: none;

			@media (max-width: 992px) {
				display: block;
			}
		}

		.navbar-collapse {
			justify-content: space-between;
		}

		.navbar-toggler {
			color: black;

			svg {
				width: 25px;
				height: 25px;
			}

			&:focus {
				box-shadow: none;
			}

			&.bar-button {
				display: none;

				@media (max-width: 1024px) {
					display: block;
				}
			}
		}

		.navbar-brand {
			font-weight: 600;
			margin-right: 40px;

			img {
				width: 150px;
				height: auto;
				object-fit: contain;
			}
		}

		.navbar-nav {
			.nav-item {
				padding: 5px 10px;

				.nav-link {
					color: $colorGray;
					font-weight: 600;
					font-size: 13px;

					&:hover {
						color: $coloRed;
					}
				}
			}
		}
	}

	.header-right {
		.header-right-search {
			position: relative;
			margin-right: 10px;

			.form-control {
				position: relative;
				border: transparent;
				border-radius: 30px;
				padding: 12px 15px;
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
				height: unset;
			}

			.search-icon {
				position: absolute;
				top: 50%;
				right: 10px;
				transform: translate(-50%, -50%);

				svg {
					color: $colorGray;
				}
			}
		}

		.header-right-profile {
			display: block;

			.hrp-box {
				width: 50px;
				height: 50px;
				overflow: hidden;
				position: relative;
				display: block;
				border-radius: 100%;
				margin-right: 10px;
			}

			span {
				color: $colorGray;
				font-weight: 600;
				display: none;
			}
		}

		.header-right-dash {
			display: block;

			.hrd-box {
				width: 50px;
				height: 50px;
				line-height: 54px;
				text-align: center;
				overflow: hidden;
				position: relative;
				display: block;
				border-radius: 100%;
				margin-right: 10px;
				background-color: $coloRed;

				svg {
					color: #fff;
					font-size: 20px;
				}
			}

			span {
				color: $colorGray;
				font-weight: 600;
				display: none;
			}
		}
	}

	.dropdown {
		margin: 0px 20px;

		.dropdown-toggle {
			text-transform: uppercase;
			color: $colorGray;
			font-weight: 600;
		}
	}

	.btn-bordered {
		span {
			display: inline-block;
			margin-right: 10px;
		}
	}

	.btn-red {
		span {
			display: inline-block;
			margin-left: 10px;
		}
	}
}

[lang='es'] {
	@media (max-width: 1240px) {
		.header .navbar .navbar-nav .nav-item .nav-link {
			font-size: 12px;
		}

		.btn-common {
			padding: 8px 10px;
			font-size: 14px;
		}

		.header .navbar .navbar-brand img {
			width: 120px;
		}

		.header .dropdown .dropdown-toggle {
			font-size: 14px;
		}

		.header .btn-bordered span {
			margin-right: 4px;
		}
	}
}

@media (max-width: 1200px) {
	.header {
		.navbar {
			.navbar-brand {
				margin-right: 10px;
			}

			.navbar-nav {
				.nav-item {
					padding: 0px;
				}
			}
		}

		.header-right {
			.signup__btn {
				margin-right: 10px;
			}
		}

		.dropdown {
			margin: 0px 10px 0px 0px;
		}
	}
}

@media (max-width: 992px) {
	.header {
		.navbar {
			.navbar-collapse {
				padding: 20px;
				background-color: #fff;
				box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
				margin-top: 10px;
			}

			.navbar-nav {
				.nav-item {
					padding: 0px;
					margin: 0 !important;
				}
			}

			.header__right__btns {
				display: block !important;

				.btn-bordered {
					border: none;
					padding: 8px 0px;
					color: $colorGray;
					font-weight: 600;

					span {
						margin: 0;
						display: none;
					}
				}

				.dropdown {
					margin: 0px;
					padding: 8px 0px;
				}

				.btn-common {
					padding: 8px 0px;
					background-color: transparent;
					color: $colorGray !important;
					font-weight: 600;
				}

				.btn-red {
					padding: 8px 0px;
					background-color: transparent;
					color: $colorGray !important;
					font-weight: 600;

					&:hover {
						border: transparent !important;
					}

					span {
						margin: 0;
						display: none;
					}
				}
			}
		}

		.header-right {
			.header-right-search {
				width: 60%;
				padding: 8px 0px;

				.form-control {
					border: 1px solid $colorExLightGray;
				}
			}

			.header-right-profile {
				padding: 8px 0px;

				.hrp-box {
					display: none;
				}

				span {
					display: block;
				}
			}

			.header-right-dash {
				padding: 8px 0px;

				.hrd-box {
					display: none;
				}

				span {
					display: block;
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.header {
		.navbar {
			.navbar-nav {
				.nav-item {
					.nav-link {
						font-size: 14px;
					}
				}
			}

			.header__right__btns {
				.btn-bordered,
				.btn-red {
					font-size: 14px;
				}

				.dropdown {
					.dropdown-toggle {
						font-size: 14px;
					}
				}
			}
		}

		.header-right {
			.header-right-search {
				width: 100%;

				.form-control {
					padding: 10px 15px;
					font-size: 14px;
				}
			}

			.header-right-profile {
				span {
					font-size: 14px;
				}
			}

			.header-right-dash {
				span {
					font-size: 14px;
				}
			}
		}
	}
}

.switch {
	display: inline-block;
	position: relative;
}

.switch input {
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
}

.switch p {
	width: 40px;
	display: block;
	height: 17px;
	display: flex;
	position: relative;
	border-radius: 20px;
	border: 2px solid #000;
	margin: 0 20px;
}

.switch p::after {
	content: '';
	position: absolute;
	top: 50%;
	left: 0;
	width: 22px;
	border-radius: 100%;
	height: 22px;
	transform: translate(-7px, -50%);
	background-color: #000;
	transition: all 0.5s;
	box-shadow: 1px 15px 9px #e6d9d9;
}

.switch input:checked + p::after {
	background-color: #ff4b57;
	transform: translate(21px, -50%);
}

.switch p span {
	color: #fff;
	width: 50px;
	min-width: 50px;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	padding: 0 6px;
	display: flex;
	align-items: center;
	font-weight: 500;
	transition: all 0.5s;
}

.font-semibold {
	font-weight: 600;
}

.watch-text {
	font-size: 16px;

	@media (max-width: 575px) {
		font-size: 13px;
	}
}
</style>

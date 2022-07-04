<template>
	<!-- Banner -->
	<section class="banner-image banner-section d-flex flex-column justify-content-center align-items-center">
		<div class="banner-img">
			<header class="header w-100" id="header">
				<div class="container-fluid">
					<!-- navbar -->
					<nav class="navbar navbar-expand-lg">
						<div class="d-md-flex align-items-center w-100">
							<!-- navbar logo -->
							<div class="navbar-brand">
								<img src="@/assets/images/logo-white.png" class="img-fluid" alt="error" />
							</div>

							<div class="align-items-center navbar-nav navbar-collapse" :class="{ 'open-menu': isMenu }">
								<div @click="isMenu = !isMenu" class="close-menu-icon d-xl-none">
									<img src="@/assets/images/close.png" alt="" />
								</div>

								<!-- nav links -->
								<ul class="d-xl-flex me-auto align-items-center navbar-list">
									<!-- <li class="nav-item">
										<router-link
											to="/project-market"
											class="nav-link"
										>
											{{ t('common.projectMarket') }}
										</router-link>
									</li> -->
									<!-- <li class="nav-item">
										<router-link
											to="/about"
											class="nav-link"
										>
											{{ t('common.aboutUs') }}
										</router-link>
									</li>
									<li class="nav-item">
										<router-link
											to="/contactus"
											class="nav-link"
										>
											{{ t('common.contactUs') }}
										</router-link>
									</li>
									<li class="nav-item">
										<router-link
											to="/our-team"
											class="nav-link"
										>
											{{ t('common.ourTeam') }}
										</router-link>
									</li> -->
								</ul>

								<!-- navbar btns-->

								<div class="navbar-btn">
									<!-- change language dropdown -->
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
													<button class="dropdown-item ml-2" @click="updateLocaleLanguage" :value="language.language_code">
														{{ language.language_name }}
													</button>
												</div>
											</li>
										</ul>
										<div>
											<button class="btn-bordered" @click="showLogin" v-if="!isUserLogedIn">
												<span class="ml-2">
													<FontAwesomeIcon :icon="userIcon" />
												</span>
												{{ t('common.lightEnterpreneur') }}
											</button>
										</div>

										<div>
											<button class="btn-bordered btn-red" @click="empLoginForm = true" v-if="!isEmpUserLogedIn">
												<span><img src="@/assets/images/push-pin.png" alt="img" /> </span>
												{{ t('footer.postGig') }}
											</button>
										</div>
									</div>

									<div v-if="userTypeInfo == 'jobseeker'">
										<router-link to="/dashboard" class="header-right-dash" v-if="isUserLogedIn">
											<div class="hrd-box">
												<FontAwesomeIcon :icon="dashboardIcon" />
											</div>
											<span>{{ t('sidebar.dashboard') }}</span>
										</router-link>
									</div>

									<div v-else>
										<router-link to="/profile/company" class="header-right-dash" v-if="isUserLogedIn">
											<div class="hrd-box">
												<FontAwesomeIcon :icon="dashboardIcon" />
											</div>
											<span>{{ t('sidebar.dashboard') }}</span>
										</router-link>
									</div>

									<button class="btn-bordered signup__btn" @click="showRegister">
										<span>
											<FontAwesomeIcon :icon="addUserIcon" />
										</span>
										{{ t('common.signUp') }}
									</button>

									<button class="btn-common btn-black" v-if="isUserLogedIn" @click="userLogout">
										{{ t('common.logout') }}
										<span class="ml-2">
											<FontAwesomeIcon :icon="userIcon" />
										</span>
									</button>
								</div>
							</div>

							<!-- <button
								type="button"
								:class="{ 'open-menu': isMenu }"
								class="navbar-toggler-banner"
								@click="isMenu = !isMenu"
							>
								<img
									src="@/assets/images/menu-icon.svg"
									alt="menu-icon"
								/>
							</button> -->
						</div>
					</nav>
				</div>
			</header>
		</div>

		<div class="illustration" style="background: url('assets/img/logo-navbar.png') center / contain no-repeat;color: rgb(255,255,255);height: 80px;margin-bottom: 29px;"></div>
		<p class="text-center" style="font-size:20px;color: rgb(45,45,45);">
			{{ t('footer.Login') }}
		</p>
		<div class="login-box">
			<div class="logo-wrap">
				<img src="@/assets/images/icons/logo.png" class="img-fluid" alt="" />
			</div>

			<a class="forgot d-flex align-items-center justify-content-center my-4" href="./forgot-password.php">{{ t('footer.Login') }}</a>

			<div class="form-group">
				<!-- <a
					class="btn-common btn-red btn-block"
					role="button"
					@click="showLoginFormLe"
					>As a Light Entrepreneur</a
				> -->
				<a class="btn-common btn-red btn-block text-center" role="button" @click="showLoginFormClient">{{ t('signupForm.as_a_partner') }}</a>
			</div>
			<a class="forgot-email d-flex align-items-center justify-content-center" @click="showEmail">
				{{ t('companyDashboard.forgot_your') }} <a href="#" class="mx-1 forgot-email"> {{ t('fieldList.email') }} </a> {{ t('common.or') }}
				<a href="#" class="mx-1 forgot-email"> {{ t('fieldList.password') }}?</a>
			</a>
			<!-- <a
				class="forgot-email d-flex align-items-center justify-content-center"
				href="./forgot-password.php"
				>Forgot your email or password?</a
			> -->
		</div>
	</section>
	<!-- <hr /> -->
	<!-- footer -->
	<Footer />
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
// import { Tab } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import { loadMessagesJson } from '@/helpers/I18n.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Footer from '@/views/homepage/components/Footer.vue';
import { faUser, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'CompanyDashboard',

	components: {
		// Banner,
		// StartJobBanner,
		// FindJobBanner,
		// GetAppBanner,
		// FeaturesVoxed,
		// WorkinHyodyt,
		// TeamBoxed,
		// Brands,
		FontAwesomeIcon,
		Footer,
	},

	setup() {
		//ref
		const isMenu = ref(false);
		// global router
		const router = useRouter();
		const route = useRoute();

		// icons
		const userIcon = faUser;
		const dashboardIcon = faMinusSquare;
		// store
		const store = useStore();

		// i18n instance
		const { locale, setLocaleMessage, availableLocales, t } = useI18n({
			useScope: 'global',
		}); //  use i18n

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		onMounted(() => {
			// fetch languages
			store.dispatch('language/getLanguages');
		});

		/**
		 * Method
		 * *******************************************************************
		 */
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

		//shoe login form Light Entrepreneur
		const showLoginFormLe = async () => {
			router.push({ name: 'login-le' });
		};

		//shoe login form partner
		const showLoginFormClient = async () => {
			router.push({ name: 'login-client' });
		};

		// show email for otp
		const showEmail = async () => {
			router.push({ name: 'email-otp-page' });
		};

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

		const isEmpUserLogedIn = computed(() => store.state.auth.empLogged);

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		return {
			// ref
			t,
			router,
			route,
			isMenu,
			//icon
			userIcon,
			dashboardIcon,
			// computed
			isUserLogedIn,
			isEmpUserLogedIn,
			userTypeInfo,

			//method
			updateLocaleLanguage,
			localLang,
			languageList,
			showLoginFormLe,
			showLoginFormClient,
			showEmail,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/bannerLayout.scss';

.forgot {
	font-size: 22px;
}

.forgot-email {
	font-size: 14px;
	color: #6f7a85;
}

// login-box
.login-box {
	background: rgb(245, 245, 245);
	border-radius: 30px;
	padding: 40px;
}
</style>

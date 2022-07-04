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
											<!-- <button
												class="btn-bordered"
												@click="showLoginForm = true"
												v-if="!isUserLogedIn"
											>
												<span class="ml-2">
													<FontAwesomeIcon
														:icon="userIcon"
													/>
												</span>
												Light Entrepreneur
											</button> -->

											<button class="btn-bordered signup__btn" @click="showRegister" v-if="!isUserLogedIn">
												<span>
													<FontAwesomeIcon :icon="addUserIcon" />
												</span>
												{{ t('common.signUp') }}
											</button>

											<button class="btn-bordered" @click="showLogin" v-if="!isUserLogedIn">
												<span class="ml-2">
													<FontAwesomeIcon :icon="userIcon" />
												</span>
												{{ t('common.lightEnterpreneur') }}
											</button>
										</div>

										<div>
											<button class="btn-bordered btn-red" @click="showPartner" v-if="!isEmpUserLogedIn">
												<span><img src="@/assets/images/push-pin.png" alt="img" /> </span>
												{{ t('footer.postGig') }}
											</button>
											<!-- <button
												class="btn-bordered btn-red"
												v-if="!isEmpUserLogedIn"
											>
												<span
													><img
														src="@/assets/images/push-pin.png"
														alt="img"
													/>
												</span>
												Post A Gig
											</button> -->
										</div>
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

									<button class="btn-bordered signup__btn mr-3" @click="showRegister" v-if="isUserLogedIn">
										<span>
											<FontAwesomeIcon :icon="addUserIcon" />
										</span>
										{{ t('common.signUp') }}
									</button>

									<button class="btn-common btn-black" v-if="isUserLogedIn" @click="userLogout">
										{{ t('common.logout') }}
										<span class="ml-2"><FontAwesomeIcon :icon="userIcon"/></span>
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

		<div class="illustration" style="background: url('assets/img/logo-navbar.png') center / contain no-repeat;color: rgb(255,255,255);height: 80px;margin-bottom: 29px;"></div>
		<p class="text-center" style="font-size:20px;color: rgb(45,45,45);">
			Sign In
		</p>
		<div class="login-box">
			<div class="logo-wrap">
				<img src="@/assets/images/icons/logo.png" class="img-fluid" alt="" />
			</div>

			<span class="forgot d-flex align-items-center justify-content-center my-4">{{ t('common.sign_in_as_a_light_entrepreneur') }}</span>
			<form>
				<div class="form-group">
					<input
						type="email"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.email',
							})
						"
						@input="emailField.handleChange"
						@blur="emailField.handleBlur"
						:value="emailField.value"
					/>

					<p class="text-danger">
						{{ emailField.errorMessage }}
					</p>
				</div>

				<div class="form-group">
					<input
						type="password"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.password',
							})
						"
						@input="passwordField.handleChange"
						@blur="passwordField.handleBlur"
						:value="passwordField.value"
					/>

					<p class="text-danger">
						{{ passwordField.errorMessage }}
					</p>
				</div>

				<div class="form-group forgot-btn">
					<button type="submit" class="btn-common btn-red btn-block" @click="submitForm" :disabled="!formMeta.valid || isSubmitting">
						{{ t('common.signIn') }}
					</button>
				</div>

				<span class="forgot-email d-flex align-items-center justify-content-center cursor-pointers" @click="showEmail">{{ t('common.forgot_your_email_or_password') }}</span>
			</form>
		</div>
	</section>

	<!-- register form -->
	<!-- <Suspense v-if="showRegisterForm">
		<template #default>
			<register-form />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense> -->
	<!-- <hr /> -->

	<!-- footer -->
	<Footer />
</template>

<script>
import { ref, computed, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
// import { Tab } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import { loadMessagesJson } from '@/helpers/I18n.js';
import Footer from '@/views/homepage/components/Footer.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { faUser, faMinusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'LoginFormLe',

	components: {
		FontAwesomeIcon,
		Footer,
	},

	setup() {
		// user type status
		const userType = ref('jobseeker');

		const isMenu = ref(false);

		//icon
		const userIcon = faUser;
		const addUserIcon = faUserPlus;
		const dashboardIcon = faMinusSquare;

		// global router
		const router = useRouter();
		const route = useRoute();

		// store
		const store = useStore();

		// i18n instance
		const { locale, setLocaleMessage, availableLocales, t } = useI18n({
			useScope: 'global',
		}); //  use i18n

		// form schema validation
		const loginSchema = yup.object({
			email: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.email',
					}),
				)
				.email(t('validation.validEmail')),
			password: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.password',
					}),
				)
				.min(8, t('validation.minPasswordLen', { minLen: 8 })),
			isPasswodRemember: yup.boolean().oneOf([true, false]),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: loginSchema,
		});

		// form fields
		const emailField = reactive(useField('email', undefined, { initialValue: null }));
		const passwordField = reactive(useField('password', undefined, { initialValue: null }));
		const isPasswordRememberField = reactive(useField('isPasswodRemember', undefined, { initialValue: false }));

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		onMounted(() => {
			// fetch languages
			store.dispatch('language/getLanguages');
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */

		// get current local language
		const localLang = computed(() => store.state.language.localLang); // local languages

		// get language list
		const languageList = computed(() => store.state.language.languages);

		const userTypeInfo = computed(() => store.state.auth.userType);
		// user is looged in ?
		const isUserLogedIn = computed(() => store.state.auth.userLogged);

		const isEmpUserLogedIn = computed(() => store.state.auth.empLogged);

		/**
		 * Method
		 * *******************************************************************
		 */

		// show login
		const showLogin = async () => {
			router.push({ name: 'login-le' });
		};

		// show register
		const showRegister = async () => {
			router.push({ name: 'registration-page' });
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

		// submit form - change tab - step - 2
		const submitForm = handleSubmit(values => {
			// login;
			store
				.dispatch('auth/login', {
					...values,
					// user_type: userType.value,
					user_type: 'jobseeker',
				})
				.then(() => {
					localStorage.removeItem('expiredTime');
					localStorage.removeItem('workDetails');
					localStorage.removeItem('invoiceWorkDetails');
					if (userType.value == 'jobseeker') {
						// router.push({ name: 'New DashBoard' });
						router.push('/new-dashboard');
					} else {
						router.push({ name: 'Company Profile' });
					}
				});
		});

		// show email for otp
		const showEmail = async () => {
			localStorage.setItem('changePassUserTyep', 'jobseeker');
			router.push({ name: 'email-otp-page' });
		};

		// show partner form
		const showPartner = async () => {
			router.push({ name: 'login-client' });
		};

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
			// ref
			t,
			router,
			route,
			userType,
			isMenu,
			isSubmitting,
			formMeta,
			emailField,
			passwordField,
			isPasswordRememberField,
			//icon
			userIcon,
			dashboardIcon,
			addUserIcon,
			// computed
			userTypeInfo,
			isUserLogedIn,
			isEmpUserLogedIn,
			//method
			updateLocaleLanguage,
			localLang,
			languageList,
			submitForm,
			showLogin,
			showEmail,
			showPartner,
			showRegister,
			showRegisterForm,
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

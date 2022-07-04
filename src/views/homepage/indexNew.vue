<template>
	<div class="sign-up-body">
		<div class="container-md">
			<div class="form-height d-flex justify-content-center align-items-center flex-column py-3">
				<div class="registration_form">
					<div class="h-100 d-flex flex-column align-items-center justify-content-center">
						<div class="row m-0 align-items-center h-100 w-100 form-border">
							<!--sign-up-img :start-->
							<div class="col-lg-5 col-md-12 pr-lg-5 d-flex flex-column align-items-center justify-content-center p-0 h-100">
								<div class="sign-up-img">
									<img src="@/assets/images/sign-up.png" class="img-fluid" alt="err" />
								</div>
							</div>
							<!--sign-up-img :end-->
							<div class="col-lg-7 col-12 p-0 d-flex flex-column align-items-center justify-content-center sign-up-form h-100">
								<div v-if="maintanceModeCheck" class="alert dashboard-alert text-center position-relative">
									<p class="mb-0">Site is under maintenance.</p>
								</div>
								<div class="navigation-content">
									<!-- step form :start-->
									<form>
										<div>
											<div class="row justify-content-xl-start justify-content-center">
												<div class="col-xl-4 col-lg-6 col-sm-6 col-12 p-0 le-spacing" :class="maintanceModeCheck ? 'blur-overlay' : 'no-blur-overlay'">
													<a class="header-right-dash" href="/signin">
														<div
															class="danger-box profession-box-common p-h justify-content-lg-start justify-content-center"
															:class="{ userStatusActive: userFlagJobseeker }"
															@click="userTypeName('jobseeker')"
														>
															<span class="prof-bg-puzzle">
																<img src="~@/assets/images/red-1-puzzle.png" alt="err" class="" />
															</span>
															<div class="text-content d-flex flex-column align-items-center justify-content-center w-100 h-100 mx-lg-0 mx-2">
																<div class="d-flex">
																	<p class="fw-bold text-sm mt-auto text-disable">
																		{{ t('common.signIn') }}
																	</p>
																</div>
															</div>
														</div>
													</a>
												</div>

												<div class="col-xl-4 col-lg-6 col-sm-6 col-12 p-0" :class="maintanceModeCheck ? 'blur-overlay' : 'no-blur-overlay'">
													<a class="header-right-dash" href="/registration">
														<div
															class="danger-box profession-box-common p-h justify-content-lg-start justify-content-center"
															:class="{ userStatusActive: userFlagCompany }"
															@click="userTypeName('company')"
														>
															<span class="prof-bg-puzzle">
																<img src="~@/assets/images/red-1-puzzle.png" alt="err" class="" />
															</span>
															<div class="text-content d-flex flex-column justify-content-center align-items-center h-100 w-100">
																<div class="d-flex">
																	<p class="fw-bold text-sm mt-auto text-disable">
																		{{ t('common.signUp') }}
																	</p>
																</div>
															</div>
														</div>
													</a>
												</div>
											</div>
										</div>
									</form>
									<!-- step form :end -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted, computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useField, useForm } from 'vee-validate';
import { router } from '../../main';
import * as yup from 'yup';
export default {
	name: 'RegisterForm',

	// components
	components: {},

	setup() {
		// user type status
		const userType = ref(null);
		const userStatus = ref(false);
		const jobSeekerPuzzle = ref(false);
		const companyPuzzle = ref(false);
		const userFlag = ref(false);
		const userFlagJobseeker = ref(false);
		const userFlagCompany = ref(false);
		const currentRegistrationData = ref(null);

		const maintanceModeCheck = ref(false);

		// icon
		const backIcon = faArrowCircleLeft;
		const leftArrowIcon = faArrowLeft;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// data file
		const filedt = ref(null);

		// global store
		const store = useStore(); // use state

		// global router
		// const route = useRoute();

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

		// form schema validation

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		onMounted(() => {
			// fetch languages
			// store.dispatch('language/getLanguages');
			store
				.dispatch('auth/urlStatusAccessMode')
				.then(res => {
					// console.log(res.data.data.url_access_mode, 'fsdhfdsfdssdfsdf');
					maintanceModeCheck.value = res.data.data.maintence_mode;
				})
				.catch(err => {
					maintanceModeCheck.value = (err && err.err && err.err.response && err.err.response.data.data.maintence_mode) || false;
					// console.log(maintanceModeCheck.value, 'maintanceModeCheck.valuemaintanceModeCheck.valuemaintanceModeCheck.valuemaintanceModeCheck.value');
				});
		});

		/**
		 * Computed Props
		 * *******************************************************************
		 */

		const userTypeInfo = computed(() => store.state.auth.userType);
		// user is looged in ?
		const isUserLogedIn = computed(() => store.state.auth.userLogged);

		const isEmpUserLogedIn = computed(() => store.state.auth.empLogged);

		// toggle login modal
		const modalShow = computed({
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

		/**
		 * Methods
		 * *******************************************************************
		 */
		// data file change
		const atfileChange = file => {
			filedt.value = file;
		};

		//user type
		const userTypeName = val => {
			userType.value = val ?? null;

			if (userType.value === 'jobseeker') {
				jobSeekerPuzzle.value = true;
				companyPuzzle.value = false;
				userFlagJobseeker.value = true;
				userFlagCompany.value = false;
			} else {
				jobSeekerPuzzle.value = false;
				companyPuzzle.value = true;
				userFlagCompany.value = true;
				userFlagJobseeker.value = false;
			}
		};

		// submit form - change tab - step - 2
		const submitForm = handleSubmit(values => {
			// console.log(values);
			// console.log(userType.value,'tetdsfbasdfasjkdfhjkasdhf');
			// login;
			store
				.dispatch('auth/login', {
					...values,
					user_type: userType.value ?? null,
				})
				.then(() => {
					localStorage.removeItem('expiredTime');
					localStorage.removeItem('workDetails');
					localStorage.removeItem('invoiceWorkDetails');
					router.push('/new-dashboard');
				});
		});

		// show email for otp
		const showEmail = async () => {
			localStorage.setItem('changePassUserTyep', 'jobseeker');
			router.push({ name: 'email-otp-page' });
		};

		return {
			// icon
			maintanceModeCheck,
			leftArrowIcon,
			emailField,
			passwordField,
			isPasswordRememberField,
			modalShow,
			userType,
			userStatus,
			companyPuzzle,
			jobSeekerPuzzle,
			userTypeName,
			userFlag,
			userFlagCompany,
			userFlagJobseeker,
			currentRegistrationData,
			t,
			filedt,
			atfileChange,
			backIcon,
			submitForm,
			formMeta,
			showEmail,
			isSubmitting,
			userTypeInfo,
			isUserLogedIn,
			isEmpUserLogedIn,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';
@import '@/assets/scss/style.scss';

.sign-up-body {
	background-image: url('~@/assets/images/Vector.svg');
	height: 100vh;
	background-size: 570px;

	.text-sm {
		font-size: 18px;
	}
	.forgot {
		font-size: 22px;
	}
	.registration_form {
		border-radius: 50px;
		height: calc(100% - 350px);
		background-color: #fff;
		.nav-tabs .nav-item.show .nav-link,
		.nav-tabs .nav-link.active {
			border: none;
		}

		.navigation-content {
			width: 100%;
			padding: 30px;
			border-radius: 30px;

			@media (max-width: 576px) {
				padding: 0;
			}

			.forgot-btn {
				.btn-common {
					@media (max-width: 575px) {
						padding: 5px 15px;
						font-size: 13px;
					}
				}
			}
			.forgot-email {
				@media (max-width: 575px) {
					font-size: 13px;
				}
			}
		}

		.bg-col {
			background-color: #f5f5f5;
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

		.appoint-img {
			height: calc(100% - 50px);
		}
		.back__icon {
			font-size: 30px;
			color: #ff4b57;
		}
		.sign-up-img-wrap {
			max-width: 40px;
			width: 100%;
		}

		.nav-tabs {
			border: none;
			.nav-item {
				position: relative;
				.nav-link {
					width: 50px;
					height: 50px;
					background-color: #f5f5f5;
					color: #000;
					text-align: center;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					margin-right: 20px;
					&:focus-visible {
						border: none;
					}
				}
			}
		}

		.nav-tabs .nav-item.show .nav-link,
		.nav-tabs .nav-link.active {
			background-color: #f5f5f5;
			color: #ff4b57;
		}
		.form-control {
			height: unset !important;
		}
		.sign-up-form {
			min-height: 500px;
			@media (max-width: 768px) {
				min-height: 0;
			}
		}
	}
	.sign-up-img {
		@media (max-width: 992px) {
			max-width: 300px;
			margin: 40px auto 0 auto;
		}
	}
	.form-border {
		border-radius: 50px;
		padding: 0 50px;
		overflow: hidden;
		box-shadow: 0px 0px 4px 0px #ff4b57;

		@media (max-width: 768px) {
			padding: 0 30px;
		}
	}

	.form-height {
		min-height: calc(100vh - 50px);

		.head-text {
			@media (max-width: 575px) {
				font-size: 33px;
			}
		}
	}

	.profession-box-common {
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 45px 30px;
		transition: all 0.5s;
		height: 200px;

		@media (max-width: 1024px) {
			height: 230px;
			width: 230px;
			margin: 0 auto;
		}

		.prof-bg-puzzle {
			top: 0;
			height: 100%;
			position: absolute;
			display: block;

			@media (min-width: 1024px) {
				left: 0;
			}

			img {
				width: 100%;
				height: 100%;
				position: relative;
				object-fit: contain;
			}
		}

		.text-content {
			z-index: 1;

			.content-icon {
				max-width: 80px;
				margin: 0 auto;
				width: 100%;
				img {
					width: 80px;
					height: 80px;
					object-fit: contain;
				}
			}
		}
		.text-disable {
			color: #ffb8bc;

			&.text-line-clamp {
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}
	}

	.userStatusActive {
		transform: scale(1.1);
		p {
			color: #fff !important;
		}
	}
}
.blur-overlay {
	filter: blur(3px);
	cursor: not-allowed;
	pointer-events: none;
	user-select: none;
}

.no-blur-overlay {
	// cursor: not-allowed;
	filter: blur(0px);
}

.le-spacing {
	@media (max-width: 425px) {
		margin-bottom: 13px;
	}
}
.dashboard-alert {
	font-weight: 500;
	color: #fff;
	background-color: #ea2129;
	border-radius: 18px;
	width: 100%;
	a,
	p {
		font-size: 20px;
		color: #fff;
		// margin-right: 0.5rem;
		@media (max-width: 2560px) {
			font-size: 20px;
		}
		@media (max-width: 1600px) {
			font-size: 16px;
		}
	}
	// .alert-close-icon {
	// 	font-size: 16px;
	// 	right: 20px;
	// 	color: #000;
	// }

	&.alert {
		padding: 0.75rem 2.25rem 0.75rem 1.2rem;
	}
}
</style>

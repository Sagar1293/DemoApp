<template>
	<div class="sign-up-body">
		<div class="container-md">
			<div class="form-height d-flex justify-content-center align-items-center flex-column">
				<div class="d-flex align-items-center">
					<!-- <div class="go__back">
					<div class="banner-back">
						<span class="pe-3">
							<div class="back-text">
								<router-link to="/invoices/add" class="d-flex align-items-center">
									<div class="back-icon">
										<FontAwesomeIcon
											:icon="leftArrowIcon"
										/>
									</div>
									Back 
								</router-link>
							</div>
						</span>
					</div>
				</div> -->
					<h1 class="text-center my-5 text-lg">{{ t('loginForm.login_form') }}</h1>
				</div>

				<div class="registration_form">
					<div class="h-100 d-flex flex-column align-items-center justify-content-center">
						<div class="row m-0 align-items-center h-100 w-100 form-border">
							<div class="col-12 p-0 d-flex flex-column align-items-center justify-content-center sign-up-form h-100 ">
								<div class="navigation-content">
									<!-- step form -->
									<form>
										<div class="tab-content" id="myTabContent">
											<div class="text-lg-center text-center mb-4">
												<h4 class="fw-bold">
													{{ t('loginForm.welcome') }}
												</h4>

												<p class="fw-bold text-red mt-2">
													{{ t('loginForm.please_select_your_account_type') }}
												</p>
											</div>

											<div class="row align-items-center justify-content-center">
												<div class="col-xl-5 col-lg-4 col-sm-6 col-12 p-0">
													<a class="header-right-dash">
														<div class="danger-box profession-box-common p-h" :class="{ userStatusActive: userFlagJobseeker }" @click="userTypeName('jobseeker')">
															<span class="prof-bg-puzzle">
																<img src="~@/assets/images/red-1-puzzle.png" alt="err" class="" />
															</span>
															<div class="text-content d-flex flex-column justify-content-between h-100">
																<div class="d-flex">
																	<p class="fw-bold text-sm mt-auto text-disable">
																		{{ t('common.lightEnterpreneur') }}
																	</p>

																	<div class="sign-up-img-wrap ml-auto">
																		<img src="~@/assets/images/magnifying_glass_front.png" alt="" class="img-fluid" />
																	</div>
																</div>
															</div>
														</div>
													</a>
												</div>

												<div class="col-xl-5 col-lg-4 col-sm-6 col-12 p-0">
													<a class="header-right-dash">
														<div class="danger-box profession-box-common p-h" :class="{ userStatusActive: userFlagCompany }" @click="userTypeName('company')">
															<span class="prof-bg-puzzle">
																<img src="~@/assets/images/red-1-puzzle.png" alt="err" class="" />
															</span>
															<div class="text-content d-flex flex-column justify-content-between h-100">
																<!-- <p
																	class="fw-bold text-disable"
																>
																	I need workers
																</p> -->
																<div class="d-flex">
																	<p class="fw-bold text-sm mt-auto text-disable">
																		{{ t('common.company') }}
																	</p>

																	<div class="sign-up-img-wrap ml-auto">
																		<img src="~@/assets/images/megaphone_front.png" alt="" class="img-fluid" />
																	</div>
																</div>
															</div>
														</div>
													</a>
												</div>
											</div>

											<div class="row justify-content-center align-items-center">
												<div class="tab-form theme-input mb-4 col-lg-10 col-12">
													<div class="tab-header">
														<label for="email" class="text-big">
															{{ t('fieldList.email') }}
															<span>*</span>
														</label>

														<!-- <input type="email" class="form-control w-100" placeholder="dcd" /> -->
														<input
															type="email"
															class="form-control w-100"
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
												</div>

												<div class="tab-form theme-input mb-4 col-lg-10 col-12">
													<div class="tab-header">
														<label for="password" class="text-big">
															{{ t('fieldList.password') }}
															<span>*</span>
														</label>
														<!-- <input type="password" class="form-control w-100" placeholder="dcd" /> -->
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
												</div>
											</div>

											<div class="d-flex align-items-center justify-content-center">
												<div class="d-flex justify-content-center mr-2">
													<button class="btn-common btn-red" @click="submitForm" :disabled="!formMeta.valid || isSubmitting">{{ t('common.login') }}</button>
												</div>

												<router-link to="/registration" class="d-flex align-items-center">
													<div class="d-flex justify-content-center">
														<button class="btn-common btn-red">{{ t('common.signUp') }}</button>
													</div>
												</router-link>
											</div>
										</div>
									</form>
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
import { ref, onMounted, reactive } from 'vue'; // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
// import { Tab } from 'bootstrap';
// import { useRoute } from 'vue-router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import * as yup from 'yup';
import { faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useField, useForm } from 'vee-validate';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
	name: 'AuthLoginForm',

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
		const router = useRouter();

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
		onMounted(() => {});

		// submit form - change tab - step - 2
		const submitForm = handleSubmit(values => {
			values.user_type = userType.value ?? null;
			// login;
			store
				.dispatch('auth/login', {
					...values,
				})
				.then(() => {
					router.push({ name: 'New DashBoard' });
					// if (userType.value == 'jobseeker') {
					// } else {
					// 	router.push({ name: 'Company Profile' });
					// }
				});
		});

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

		return {
			// icon
			leftArrowIcon,
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
			// atfileChange,
			backIcon,

			//field
			emailField,
			passwordField,
			isPasswordRememberField,

			formMeta,
			handleSubmit,
			isSubmitting,

			//method
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';
@import '@/assets/scss/style.scss';

.sign-up-body {
	// background:	linear-gradient(40deg, #ff4b57 25%, #ee959b 46%, #d3525b 60%, #ff4b57 100%);
	background-image: url('~@/assets/images/Vector.svg');
	height: 100vh;
	background-size: 570px;

	.text-sm {
		font-size: 13px;
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
			max-width: 570px;
			padding: 40px 0;
			border-radius: 30px;
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
		overflow: hidden;
		box-shadow: 0px 0px 4px 0px #ff4b57;

		@media (max-width: 768px) {
			padding: 0 30px;
		}
	}
	.form-height {
		min-height: calc(100vh - 50px);
	}

	.profession-box-common {
		border-radius: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 45px 30px;
		transition: all 0.5s;
		height: 200px;
		width: 200px;
		margin: 0 auto;

		@media (max-width: 1024px) {
			height: 230px;
		}

		.prof-bg-puzzle {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			position: absolute;
			display: block;

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
		}
	}

	.userStatusActive {
		transform: scale(1.1);
		p {
			color: #fff !important;
		}
	}
}
</style>

<template>
	<div class="sign-up-body">
		<div class="container-md">
			<div class="form-height d-flex justify-content-center align-items-center flex-column">
				<div class="d-md-flex align-items-center">
					<div class="go__back">
						<div class="banner-back">
							<span class="pe-3">
								<div class="back-text">
									<router-link to="/" class="d-flex align-items-center">
										<div class="back-icon">
											<FontAwesomeIcon :icon="leftArrowIcon" />
										</div>
										{{ t('common.back') }}
									</router-link>
								</div>
							</span>
						</div>
					</div>
					<h1 class="text-center my-xl-5 my-3 text-lg">{{ t('signupForm.sign_up_form') }}</h1>
				</div>

				<div class="registration_form">
					<div class="h-100 d-flex flex-column align-items-center justify-content-center">
						<div class="row m-0 align-items-center h-100 w-100 form-border">
							<div class="col-lg-5 col-md-12 pr-lg-5 d-flex flex-column align-items-center justify-content-center p-0 h-100">
								<div>
									<div class="sign-up-img">
										<img src="@/assets/images/sign-up.png" class="img-fluid" alt="err" />
									</div>
								</div>
							</div>

							<div class="col-lg-7 col-12 p-0 d-flex flex-column align-items-center justify-content-center sign-up-form h-100 ">
								<div class="navigation-content">
									<!-- step form -->
									<form>
										<div class="tab-content" id="myTabContent">
											<div class="text-lg-left text-center mb-xl-1 mb-4 mt-sm-0 mt-3">
												<h4 class="fw-bold">
													{{ t('loginForm.welcome') }}
												</h4>

												<p class="fw-bold text-red mt-2">
													{{ t('loginForm.please_select_your_account_type') }}
												</p>
											</div>
											<div class="row justify-content-xl-start justify-content-center spacing-puzzle ">
												<div class="col-xl-4 col-lg-6 col-sm-6 col-12 p-0 le-spacing">
													<a class="header-right-dash">
														<div
															class="danger-box profession-box-common p-h justify-content-lg-start justify-content-center"
															:class="{ userStatusActive: userFlagJobseeker }"
															@click="userTypeName('jobseeker')"
														>
															<span class="prof-bg-puzzle">
																<img src="~@/assets/images/red-1-puzzle.png" alt="err" class="" />
															</span>
															<div class="text-content d-flex flex-column justify-content-between h-100 mx-lg-0 mx-2">
																<p class="fw-bold text-disable text-line-clamp">
																	{{ t('signupForm.i_want_to_work') }}
																</p>
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

												<div class="col-xl-4 col-lg-6 col-sm-6 col-12 p-0">
													<a class="header-right-dash">
														<div
															class="danger-box profession-box-common p-h justify-content-lg-start justify-content-center"
															:class="{ userStatusActive: userFlagCompany }"
															@click="userTypeName('company')"
														>
															<span class="prof-bg-puzzle">
																<img src="~@/assets/images/red-1-puzzle.png" alt="err" class="" />
															</span>
															<div class="text-content d-flex flex-column justify-content-between h-100">
																<p class="fw-bold text-disable text-line-clamp">
																	{{ t('signupForm.i_need_workers') }}
																</p>
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

											<!-- step - 1 -->
											<div class="tab-pane fade show active mt-2" id="pills-emailVerification" role="tabpanel" aria-labelledby="pills-emailVerification-tab">
												<EmailVerification :userType="userType" :userFlagCompany="userFlagCompany" :userFlagJobseeker="userFlagJobseeker" class="" />
											</div>

											<!-- step - 2 -->
											<div class="tab-pane fade" id="pills-mobileVerification" role="tabpanel" aria-labelledby="pills-mobileVerification-tab">
												<MobileVerification v-model:userType="userType" />
											</div>
										</div>
									</form>
									<ul class="nav nav-tabs mt-3" id="pills-tab" role="tablist">
										<!-- tab - 1 -->
										<li class="nav-item" role="presentation">
											<button
												class="nav-link active"
												id="pills-emailVerification-tab"
												data-bs-target="#pills-emailVerification"
												role="tab"
												aria-controls="pills-emailVerification"
												aria-selected="true"
											>
												<span>1</span>
											</button>
										</li>

										<!-- tab - 2 -->
										<li class="nav-item" role="presentation">
											<a
												class="nav-link"
												id="pills-mobileVerification-tab"
												data-bs-target="#pills-mobileVerification"
												role="tab"
												aria-controls="pills-mobileVerification"
												aria-selected="false"
											>
												<span>2</span>
											</a>
										</li>
									</ul>
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
import { ref, onMounted, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { Tab } from 'bootstrap';
import { useRoute } from 'vue-router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowCircleLeft, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import EmailVerification from '@/views/authentication/components/EmailVerification.vue';
import MobileVerification from '@/views/authentication/components/MobileVerification';
// import UserInformation from '@/views/authentication/components/UserInformation';
// import PasswordVerification from '@/views/authentication/components/PasswordVerification';

export default {
	name: 'RegisterForm',

	// components
	components: {
		FontAwesomeIcon,
		EmailVerification,
		MobileVerification,
		// UserInformation,
		// PasswordVerification,
	},

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
		const route = useRoute();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			const token = route.params.token;
			if (token) {
				let payload = {
					token: token,
				};
				store.dispatch('auth/verifyEmailToken', payload).then(() => {
					store.commit('auth/SET_STATE', {
						action: 'isRegisterModelOpen',
						data: true,
					});

					setTimeout(() => {
						const triggerTab = document.querySelector('#pills-tab #pills-mobileVerification-tab');

						new Tab(triggerTab).show();
					}, 0);
				});
			}

			// // fetch country options
			// store.dispatch('country/getCountries');

			// // fetch city options
			// store.dispatch('country/getCities');

			// fetch industry options
			store.dispatch('industry/getIndustries');
			userTypeName('jobseeker');
			currentRegistrationData.value = JSON.parse(localStorage.getItem('current_registration'));
			if (currentRegistrationData.value) {
				userType.value = currentRegistrationData.value.user_type;
				userFlagJobseeker.value = currentRegistrationData.value.userJobFlag;
				userFlagCompany.value = currentRegistrationData.value.userJComFlag;
			}
		});

		/**
		 * Computed Props
		 * *******************************************************************
		 */
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

		return {
			// icon
			leftArrowIcon,
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
			padding: 30px;
			border-radius: 30px;

			@media (max-width: 576px) {
				padding: 0;
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
		// @media (max-width:576px) {
		// 	padding: 60px 178px;
		// }
		// @media (max-width:425px) {
		// 	padding: 60px 70px;
		// }

		.prof-bg-puzzle {
			top: 0;
			// left: 0;
			// width: 100%;
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

.spacing-puzzle {
	@media (max-width: 1024px) {
		margin-bottom: 22px;
	}
}

.le-spacing {
	@media (max-width: 425px) {
		margin-bottom: 13px;
	}
}
</style>

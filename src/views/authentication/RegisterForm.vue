<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container signup__modal"
		content-class="modal-content px-0 pb-0"
		:lock-scroll="true"
		:clickToClose="false"
	>
		<!-- close btn -->
		<button
			type="button"
			class="close"
			data-dismiss="modal"
			aria-label="Close"
			@click="modalShow = false"
		>
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="closeIcon" />
			</span>
		</button>

		<!-- modal content -->
		<div class="modal__content">
			<!-- modal header -->
			<div class="modal-header">
				<!-- modal title -->
				<div class="header-left">
					<h5 class="title-lg">{{ t('common.signUp') }}</h5>
				</div>

				<!-- toggle user type -->
				<div class="header-right">
					<!-- light enterpreneur user -->
					<div class="header-toggle">
						<p>{{ t('userType.lightEnterpreneur') }}</p>
						<div class="toggle">
							<div class="material-switch pull-right">
								<input
									id="lightEnterpreneur"
									name="user_type"
									type="radio"
									value="jobseeker"
									v-model="userType"
									checked
								/>
								<label
									for="lightEnterpreneur"
									class="label-default"
								></label>
							</div>
						</div>
					</div>

					<!-- employer user -->
					<div class="header-toggle">
						<p>{{ t('userType.employer') }}</p>
						<div class="toggle">
							<div class="material-switch pull-right">
								<input
									id="employer"
									name="user_type"
									type="radio"
									value="company"
									v-model="userType"
								/>
								<label
									for="employer"
									class="label-default"
								></label>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="row m-0">
					<div class="col-12">
						<!-- step form -->
						<form>
							<div class="navigation-content">
								<div class="tab-content" id="pills-tabContent">
									<!-- step - 1 -->
									<div
										class="tab-pane fade show active"
										id="pills-emailVerification"
										role="tabpanel"
										aria-labelledby="pills-emailVerification-tab"
									>
										<EmailVerification
											:userType="userType"
										/>
									</div>

									<!-- step - 2 -->
									<div
										class="tab-pane fade"
										id="pills-mobileVerification"
										role="tabpanel"
										aria-labelledby="pills-mobileVerification-tab"
									>
										<MobileVerification
											v-model:userType="userType"
										/>
									</div>

									<!-- step - 3 -->
									<div
										class="tab-pane fade"
										id="pills-userInformation"
										role="tabpanel"
										aria-labelledby="pills-userInformation-tab"
									>
										<UserInformation />
									</div>

									<!-- step - 4 -->
									<div
										class="tab-pane fade"
										id="pills-passwordVerification"
										role="tabpanel"
										aria-labelledby="pills-passwordVerification-tab"
									>
										<PasswordVerification />
									</div>

									<!-- step - 5 -->
									<div
										class="tab-pane fade"
										id="pills-accountInformation"
										role="tabpanel"
										aria-labelledby="pills-accountInformation-tab"
									>
										<!-- register light enterpreneur -->
										<RegisterLightEnterpreneur
											v-if="userType === 'jobseeker'"
											:onDataFileChange="atfileChange"
										/>

										<!-- register company -->
										<RegisterEmployer
											v-if="userType === 'company'"
											:onDataFileChange="atfileChange"
										/>
									</div>
								</div>
							</div>
						</form>
					</div>

					<!-- bottom navigation tab list -->
					<div class="col-12 px-0">
						<div class="navigation-tab">
							<ul
								class="nav nav-pills"
								id="pills-tab"
								role="tablist"
							>
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
										<div class="tab__name">
											{{
												t(
													'registerForm.emailVerification',
												)
											}}
										</div>
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
										<div class="tab__name">
											{{
												t(
													'registerForm.mobileVerification',
												)
											}}
										</div>
									</a>
								</li>

								<!-- tab - 3 -->
								<li class="nav-item" role="presentation">
									<a
										class="nav-link"
										id="pills-userInformation-tab"
										data-bs-target="#pills-userInformation"
										role="tab"
										aria-controls="pills-userInformation"
										aria-selected="false"
									>
										<span>3</span>
										<div class="tab__name">
											{{
												t(
													'registerForm.userInformation',
												)
											}}
										</div>
									</a>
								</li>

								<!-- tab - 4 -->
								<li class="nav-item" role="presentation">
									<a
										class="nav-link"
										id="pills-passwordVerification-tab"
										data-bs-target="#pills-passwordVerification"
										role="tab"
										aria-controls="pills-passwordVerification"
										aria-selected="false"
									>
										<span>4</span>
										<div class="tab__name">
											{{
												t(
													'registerForm.passwordVerification',
												)
											}}
										</div>
									</a>
								</li>

								<!-- tab - 5 -->
								<li class="nav-item" role="presentation">
									<a
										class="nav-link"
										id="pills-accountInformation-tab"
										data-bs-target="#pills-accountInformation"
										role="tab"
										aria-controls="pills-accountInformation"
										aria-selected="false"
									>
										<span>5</span>
										<div class="tab__name">
											{{ t('registerForm.accountInfo') }}
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';

import EmailVerification from '@/views/authentication/components/EmailVerification.vue';
import MobileVerification from '@/views/authentication/components/MobileVerification';
import UserInformation from '@/views/authentication/components/UserInformation';
import PasswordVerification from '@/views/authentication/components/PasswordVerification';
import RegisterLightEnterpreneur from '@/views/authentication/components/RegisterLightEnterpreneur.vue';
import RegisterEmployer from '@/views/authentication/components/RegisterEmployer.vue';

export default {
	name: 'RegisterForm',

	// components
	components: {
		FontAwesomeIcon,
		EmailVerification,
		MobileVerification,
		UserInformation,
		PasswordVerification,
		RegisterLightEnterpreneur,
		RegisterEmployer,
	},

	setup() {
		// icons
		const closeIcon = faTimes;

		// user type status
		const userType = ref('jobseeker');

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// data file
		const filedt = ref(null);

		// global store
		const store = useStore(); // use state

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch country options
			store.dispatch('country/getCountries');

			// fetch city options
			store.dispatch('country/getCities');

			// fetch industry options
			store.dispatch('industry/getIndustries');

			const currentRegistrationData = JSON.parse(
				localStorage.getItem('current_registration'),
			);

			if (currentRegistrationData) {
				userType.value = currentRegistrationData.user_type;
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
		const atfileChange = (file) => {
			filedt.value = file;
		};

		return {
			closeIcon,
			modalShow,
			userType,
			t,
			filedt,
			atfileChange,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.signup__modal {
	padding: 0;

	.modal__content {
		padding: 0;
		overflow: hidden;

		.modal-header {
			padding: 30px;

			.header-right {
				display: flex;
				align-items: center;

				.header-toggle {
					display: flex;
					align-items: center;
					margin-left: 20px;

					.toggle {
						margin-left: 20px;
					}
				}
			}
		}

		.modal-body {
			padding: 0;
			overflow: auto;

			.navigation-content {
				padding: 30px;
				overflow: scroll;
				margin-bottom: 20px;

				&::-webkit-scrollbar {
					display: none;
				}
			}

			.navigation-tab {
				.nav {
					// justify-content: space-between;
					background-color: $colorExLightGray;

					.nav-item {
						padding: 0;
						cursor: pointer;

						.nav-link {
							padding: 40px 30px;
							text-align: center;
							position: relative;
							border-radius: 0;

							&.active {
								background-color: #fff;
								color: #000;

								span {
									color: $coloRed;
								}
							}

							span {
								display: block;
								position: absolute;
								width: 50px;
								height: 50px;
								line-height: 50px;
								text-align: center;
								border-radius: 100%;
								background-color: $bg-color;
								top: 0;
								left: 50%;
								transform: translate(-50%, -50%);
							}
						}
					}
				}
			}
		}
	}
	.nav-pills {
		flex-wrap: nowrap;

		.nav-item {
			flex-basis: 16.66%;
			// max-width: 16.66%;
			flex-grow: 1;

			.nav-link {
				height: 100%;
			}
		}
	}

	@media (max-width: 920px) {
		.modal__content {
			.modal-body {
				.navigation-tab {
					.nav {
						justify-content: space-around;
						.nav-item {
							margin-bottom: 30px;

							.nav-link {
								padding: 10px;

								.tab__name {
									display: none;
								}
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: 576px) {
		.modal__content {
			.modal-header {
				display: block;
				padding: 20px;
				.header-left {
					text-align: center;
				}
				.header-right {
					justify-content: center;
					margin-top: 20px;
					p {
						font-size: 14px;
					}
				}
			}
			.modal-body {
				.navigation-content {
					padding: 20px;
				}
			}
		}
	}

	@media (max-width: 468px) {
		.modal__content {
			.modal-header {
				.header-right {
					display: block;
					.header-toggle {
						justify-content: center;
					}
				}
			}
		}
	}
}
</style>
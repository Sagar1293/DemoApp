<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container login__modal"
		content-class="modal-content"
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
				<h5 class="modal-title">
					{{ t('loginForm.title') }}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="welcome-div">
					<div class="welcome-text">
						<h5>{{ t('common.welcome') }}<span>*</span></h5>
					</div>

					<!-- login type -->
					<!-- light enterpreneur -->
					<div class="welcome-toggle">
						<p>{{ t('userType.lightEnterpreneur') }}</p>
					</div>
				</div>

				<!-- login form -->
				<div class="modal-body-form">
					<form>
						<div class="form-row">
							<!-- email -->
							<div class="form-group col-md-6">
								<label for="inputEmail4"
									>{{ t('fieldList.email')
									}}<span>*</span></label
								>
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
							<!-- password -->
							<div class="form-group col-md-6">
								<label for="inputLoginPassword4"
									>{{ t('fieldList.password')
									}}<span>*</span></label
								>
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

						<!-- remember password -->
						<div class="form-row checkbox-div">
							<div class="round">
								<input
									type="checkbox"
									id="checkbox"
									@change="
										isPasswordRememberField.handleChange
									"
									:value="isPasswordRememberField.value"
									v-model="isPasswordRememberField.value"
								/>
								<label for="checkbox"></label>
							</div>
							<p>{{ t('loginForm.rememberPassword') }}</p>
						</div>
						<p class="text-left mt-2 text-danger">
							{{ isPasswordRememberField.errorMessage }}
						</p>

						<div class="form-row forgot-pass-link">
							<!-- forgot password -->
							<div class="forgot-link">
								<p>
									{{ t('loginForm.forgotPassowrd') }}
									{{ t('common.click') }}
									<button
										type="button"
										@click="toggleForgotPasswordModal"
									>
										{{ t('common.here') }}
									</button>
									{{ t('common.or') }}

									<button
										type="button"
										@click="toggleRegisterModal"
									>
										{{ t('common.signUp') }}
									</button>
								</p>
							</div>

							<!-- login btn -->
							<div class="forgot-btn">
								<button
									type="submit"
									class="btn-common btn-red"
									@click="submitForm"
									:disabled="!formMeta.valid || isSubmitting"
								>
									{{ t('common.signIn') }}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref, reactive, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useField, useForm } from 'vee-validate';

import * as yup from 'yup';
import { useRouter } from 'vue-router';

export default {
	name: 'LoginForm',

	// components
	components: {
		FontAwesomeIcon,
	},

	setup() {
		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		//global router
		const router = useRouter()

		// user type status
		const userType = ref('jobseeker');

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
		const emailField = reactive(			
			useField('email', undefined, { initialValue: null }),
		);
		

		const passwordField = reactive(
			useField('password', undefined, { initialValue: null }),
		);
		const isPasswordRememberField = reactive(
			useField('isPasswodRemember', undefined, { initialValue: false }),
		);

		/**
		 * computed props
		 * *******************************************************************
		 */
		// toggle login modal
		const modalShow = computed({
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

		/**
		 * Methods
		 * *******************************************************************
		 */
		// toggle register modal
		const toggleRegisterModal = () => {
			modalShow.value = false;

			// toggle register modal
			store.commit('auth/SET_STATE', {
				action: 'isRegisterModelOpen',
				data: true,
			});
		};

		// toggle forgot password modal
		const toggleForgotPasswordModal = () => {
			modalShow.value = false;

			// toggle forgot password modal
			store.commit('auth/SET_STATE', {
				action: 'isForgotPasswordModelOpen',
				data: true,
			});
		};

		// submit form - change tab - step - 2
		const submitForm = handleSubmit((values) => {
			// login;
			store.dispatch('auth/login', {
				...values,
				// user_type: userType.value,
				user_type: 'jobseeker',
			}).then(()=>{
				localStorage.removeItem('expiredTime');
				if (userType.value == 'jobseeker') {					
					router.push({name:'Dashboard'})
				}else{
					router.push({name:'Company Profile'})
				}
				
			});
		});

		return {
			t,
			closeIcon,
			modalShow,
			userType,
			formMeta,
			isSubmitting,
			emailField,
			passwordField,
			isPasswordRememberField,
			toggleRegisterModal,
			toggleForgotPasswordModal,
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.login__modal {
	.modal__content {
		.modal-header {
			.modal-title {
				font-size: 26px;
				font-weight: 600;
			}
		}

		.modal-body {
			.welcome-div {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 40px;

				.welcome-text {
					h5 {
						font-weight: 600;

						span {
							color: $coloRed;
						}
					}
				}

				.welcome-toggle {
					display: flex;
					align-items: center;

					p {
						margin-right: 20px;
					}
				}
			}

			.modal-body-form {
				form {
					label {
						span {
							color: $coloRed;
						}
					}

					.form-group {
						.form-control {
							padding: 12px 15px;
							border-radius: 30px;

							&:focus {
								border-color: $coloRed;
							}
						}
					}

					.checkbox-div {
						margin-top: 20px;
						align-items: center;

						p {
							margin-left: 30px;
						}

						.round {
							position: relative;

							label {
								background-color: #fff;
								border: 1px solid #ccc;
								border-radius: 50%;
								cursor: pointer;
								height: 28px;
								width: 28px;
								left: 0;
								position: absolute;
								top: 0;
								margin: 0;

								&::after {
									border: 2px solid $coloRed;
									border-top: none;
									border-right: none;
									content: '';
									height: 6px;
									left: 7px;
									opacity: 0;
									position: absolute;
									top: 8px;
									transform: rotate(-45deg);
									width: 12px;
								}
							}

							input[type='checkbox'] {
								visibility: hidden;
							}

							input[type='checkbox']:checked + label {
								background-color: $colorLightRed;
								border-color: transparent;
							}

							input[type='checkbox']:checked + label:after {
								opacity: 1;
							}
						}
					}

					.forgot-pass-link {
						justify-content: space-between;
						align-items: center;
						margin-top: 50px;

						.forgot-link {
							p {
								button {
									color: $coloRed;
								}
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: 767px) {
		.modal__content {
			.modal-header {
				.modal-title {
					font-size: 24px;
				}
			}

			.modal-body {
				.modal-body-form {
					form {
						.checkbox-div {
							.round {
								label {
									width: 26px;
									height: 26px;
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
			padding: 15px;

			.modal-header {
				padding: 15px 0px;

				.modal-title {
					font-size: 22px;
					text-align: center;
					width: 100%;
				}
			}

			.modal-body {
				padding: 15px 0px;

				.welcome-div {
					display: block;
					margin-bottom: 20px;

					.welcome-text {
						text-align: center;
						margin-bottom: 10px;
					}

					.welcome-toggle {
						justify-content: center;
						margin-bottom: 5px;

						p {
							font-size: 14px;
						}
					}
				}

				.modal-body-form {
					form {
						.checkbox-div {
							margin-top: 5px;

							.round {
								label {
									width: 22px;
									height: 22px;
								}
							}

							p {
								margin-left: 20px;
								font-size: 14px;
							}
						}

						.form-group {
							label {
								font-size: 14px;
							}

							.form-control {
								padding: 8px 15px;
								font-size: 14px;
							}
						}

						.forgot-pass-link {
							margin-top: 20px;
							display: block;
							text-align: center;

							.forgot-link {
								margin-bottom: 8px;

								p {
									font-size: 14px;
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
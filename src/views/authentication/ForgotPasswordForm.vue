<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container forgot_password__modal"
		content-class="modal-content"
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
				<h5 class="modal-title">{{ t('forgotPasswordForm.title') }}</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<!-- user toggle checkbox -->
				<div class="welcome-div">
					<div class="welcome-text">
						<h5>{{ t('common.welcome') }}<span>*</span></h5>
					</div>

					<!-- user type -->
					<!-- light enterpreneur -->
					<div class="welcome-toggle">
						<p>{{ t('userType.lightEnterpreneur') }}</p>
						<div class="toggle">
							<div class="material-switch pull-right">
								<input
									id="lightEnterpreneur"
									name="user_type"
									type="radio"
									value="jobseeker"
									v-model="userType"
								/>
								<label
									for="lightEnterpreneur"
									class="label-default"
								></label>
							</div>
						</div>
					</div>

					<!-- employer -->
					<div class="welcome-toggle">
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

				<!-- forgot password form -->
				<div class="modal-body-form">
					<form>
						<div class="form-row">
							<p class="text-center w-100 mb-3">
								{{ t('forgotPasswordForm.subNote') }}
							</p>

							<!-- email -->
							<div class="form-group col-md-6">
								<label for="email"
									>{{ t('fieldList.email')
									}}<span>*</span></label
								>
								<input
									id="email"
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
						</div>

						<div class="form-row forgot-pass-link">
							<!-- login btn -->
							<div class="forgot-btn">
								<button
									type="submit"
									class="btn-common btn-red"
									@click="submitForm"
									:disabled="!formMeta.valid || isSubmitting"
								>
									{{ t('forgotPasswordForm.resetPassword') }}
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
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: loginSchema,
		});

		// form fields
		const emailField = reactive(
			useField('email', undefined, { initialValue: null }),
		);

		/**
		 * computed props
		 * *******************************************************************
		 */
		// toggle login modal
		const modalShow = computed({
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

		/**
		 * Methods
		 * *******************************************************************
		 */
		// submit form - forgot password
		const submitForm = handleSubmit((values) => {
			// login;
			store.dispatch('auth/forgotPassword', {
				...values,
				user_type: userType.value,
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
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.forgot_password__modal {
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

					.forgot-pass-link {
						justify-content: flex-end;
						align-items: center;
						margin-top: 20px;
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
						}
					}
				}
			}
		}
	}
}
</style>
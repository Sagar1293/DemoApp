<template>
	<div class="mobileVerification">
		<!-- step - 2 -- title -->
		<div class="tab-header">
			<h5 class="text-big">{{ t('registerForm.accountInfo') }}</h5>
		</div>

		<!-- <div class="theme-input my-2">
			<div>
				<div class="">
					<label for="mobile">{{ t('fieldList.mobile') }}<span>*</span></label>
					<input
						id="mobile"
						type="email"
						class="form-control w-100"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.mobile',
							})
						"
						@input="mobileField.handleChange"
						@blur="mobileField.handleBlur"
						:value="mobileField.value"
					/>
					<p class="text-danger">
						{{ mobileField.errorMessage }}
					</p>
				</div>
			</div>
		</div> -->

		<!-- step - 3 -- form content -->
		<div class="theme-input my-2">
			<div>
				<!-- first name -->
				<div>
					<label for="firstName"> {{ t('fieldList.fullName') }}<span>*</span> </label>
					<input
						id="firstName"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.fullName',
							})
						"
						@input="firstNameField.handleChange"
						@blur="firstNameField.handleBlur"
						:value="firstNameField.value"
					/>

					<p class="text-danger">
						{{ firstNameField.errorMessage }}
					</p>
				</div>
			</div>
		</div>

		<div class="theme-input my-2">
			<label for="languageId"> {{ t('fieldList.preferredLanguage') }}<span>*</span> </label>
			<Multiselect
				class="form-group"
				label="language_name"
				@input="languageField.handleChange"
				@blur="languageField.handleBlur"
				v-model="languageField.value"
				:placeholder="
					t('validation.selectField', {
						field: 'fieldList.language',
					})
				"
				:options="languageList"
				mode="single"
				:canDeselect="true"
			/>

			<p class="text-danger">
				{{ languageField.errorMessage }}
			</p>
		</div>
		<!-- <div class="col-lg-4 col-md-6">
			<label for="fromRegions" class="company-titel">From Regions </label>
			<div class="form-group dropdown select-employee">
				<div>
					<Multiselect id="fromRegions" class="dropdown-menu show p-1 w-100" :options="cityOptions" mode="single" label="city_name" />
				</div>
			</div>
		</div> -->

		<!-- step - 4 -- form content -->
		<div class="theme-input">
			<div>
				<!-- password -->
				<div class="">
					<label for="inputMobilePassword4">
						{{ t('fieldList.password') }}
						<span>*</span>
					</label>
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

				<!-- confirm password -->
				<div class="mt-2">
					<label for="inputMobileVerifyPassword4">
						{{ t('fieldList.cpassword') }}
						<span>*</span>
					</label>
					<input
						type="password"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.cpassword',
							})
						"
						@input="confirmPasswordField.handleChange"
						@blur="confirmPasswordField.handleBlur"
						:value="confirmPasswordField.value"
					/>
					<p class="text-danger">
						{{ confirmPasswordField.errorMessage }}
					</p>
				</div>
			</div>
		</div>

		<!-- prev tab and next tab btn -->
		<div class="form-btns justify-content-end mt-2">
			<div class="">
				<button type="button" class="btn-common btn-red" @click="submitUserInfoForm" :disabled="isSubmitting">
					{{ t('common.next') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
import { Tab } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { router } from '../../../main';
import { boolean } from 'yup/lib/locale';
import Multiselect from '@vueform/multiselect';

export default {
	name: 'MobileVerification',

	// components
	components: {
		Multiselect,
	},

	props: {
		userType: String,
		userFalse: boolean,
	},

	// eslint-disable-next-line no-unused-vars
	setup(props) {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		//regx
		// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
		const alphaNumberRegExp = /^[a-zA-Z0-9 ]*$/;

		// form schema validation
		const AccountSchema = yup.object({
			// mobile: yup
			// 	.number()
			// 	.typeError(
			// 		t('validation.mustBe', {
			// 			field: 'fieldList.mobile',
			// 			type: 'datatype.number',
			// 		}),
			// 	)
			// 	.nullable()
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.mobile',
			// 		}),
			// 	),
			full_name: yup
				.string()
				.nullable()
				.matches(alphaNumberRegExp, 'Full name is not valid')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.fullName',
					}),
				)
				.max(25,'Full name most be at least 25 characters'),
			password: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.password',
					}),
				)
				.min(8, t('validation.minPasswordLen', { minLen: 8 })),
			confirmPassword: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.cpassword',
					}),
				)
				.oneOf([yup.ref('password'), null], t('validation.cPasswordMustMatch')),
			languageId: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.language',
					}),
				),
			// terms_and_condition: yup
			// 	.bool()
			// 	.oneOf([true],'Terms and condition is a required field.')
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.termsAndCon',
			// 		}),
			// 	),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: AccountSchema,
		});

		// form fields
		// const mobileField = reactive(useField('mobile', undefined, { initialValue: null }));
		const firstNameField = reactive(useField('full_name', undefined, { initialValue: null }));
		// form fields
		const passwordField = reactive(useField('password', undefined, { initialValue: null }));
		const confirmPasswordField = reactive(useField('confirmPassword', undefined, { initialValue: null }));
		const languageField = reactive(useField('languageId', undefined, { initialValue: null }));
		// const termsAndConditionField = reactive(useField('terms_and_condition', undefined, { initialValue: false }));
		onMounted(() => {
			// localStorage.removeItem('current_registration');
			const currentRegistrationData = JSON.parse(localStorage.getItem('current_registration'));
			console.log(currentRegistrationData, 'currentRegistrationData');

			store.dispatch('language/getLanguages');
			// if (currentRegistrationData) {
			// 	setValues({
			// 		email: currentRegistrationData.email,
			// 	});

			// 	userType.value = currentRegistrationData.user_type;
			// 	// userFlag.value currentRegistrationData.user_flag
			// }
		});
		/**
		 * computed
		 * *******************************************************************
		 */

		// get language list
		const languageList = computed(() => {
			return store.state.language.languages.map(x => ({ language_name: x.language_name, value: x.id }));
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// change form step
		const changeTab = tab => {
			const triggerTab = document.querySelector(`#pills-tab #${tab}`);
			new Tab(triggerTab).show();
		};

		// submit form - change tab - step - 2
		const submitUserInfoForm = handleSubmit(values => {
			const tempCurrentRegistrationData = JSON.parse(localStorage.getItem('current_registration'));

			// form data
			const formData = new FormData();
			formData.append('email', tempCurrentRegistrationData.email);
			formData.append('password', values.password);
			formData.append('mobile', null);
			formData.append('full_name', values.full_name);
			formData.append('languageId', values.languageId);

			store.dispatch(tempCurrentRegistrationData.user_type === 'jobseeker' ? 'auth/registerJobSeeker' : 'auth/registerEmployer', formData).then(() => {
				localStorage.removeItem('jobseekerpuzzle');
				localStorage.removeItem('current_registration');
				localStorage.removeItem('cmppuzzLE');
				router.push({ name: 'Home' });
			});
		});

		return {
			t,
			store,
			// mobileField,
			firstNameField,
			passwordField,
			confirmPasswordField,
			languageField,
			formMeta,
			isSubmitting,
			languageList,
			// termsAndConditionField,
			changeTab,
			// submitForm,
			submitUserInfoForm,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.mobileVerification {
	.tab-form {
		margin: 30px 0px 10px 0px;
	}

	@media (max-width: 576px) {
		.tab-header {
			text-align: center;
		}
		.tab-form {
			margin: 20px 0px;
		}
	}
}

.form-checkbox {
	margin-bottom: 10px;

	.form-checkbox-width {
		width: 1.4em;
		height: 1.4em;
		margin: 0 0 0 -30px;

		&:focus {
			box-shadow: none;
		}
	}
}
.form-check-input {
	background-color: transparent;
	margin-left: -6px;
	border: 1px solid #ea2029;

	input {
		margin-left: -6px;
	}

	&:checked {
		background-color: #fff;
		border-color: #fff;
	}

	&:focus {
		box-shadow: none;
	}
}
.form-check-input:checked {
	background-color: #ea2029;
	border-color: #ea2029;
}

.form-check-input:focus {
	border-color: #ea2029;
}
.multiselect-input {
	border: 1px solid #ced4da !important;
}
// .form-group {
// 	.multiselect-input {
// 		border: none !important;
// 	}
// }
// .form-group {
// 	.multiselect-options {
// 		top: 40px !important;
// 	}
// }
// .multiselect-options {
// 	overflow: auto;
// 	border-radius: 12px;
// }
// .multiselect-option {
// 	background-color: #ffffff;
// }
// .multiselect-option.is-selected.is-pointed {
// 	color: #000;
// 	background: #ffff;
// }
// .multiselect-option.is-selected {
// 	color: #ff4b57;
// 	background-color: #ffff;
// }
</style>

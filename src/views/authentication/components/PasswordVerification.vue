	<template>
	<div class="passwordInformation">
		<!-- step - 4 -- title -->
		<div class="tab-header">
			<h5 class="text-big">
				{{ t('registerForm.passwordVerification') }}
			</h5>
		</div>

		<!-- step - 4 -- form content -->
		<div class="tab-form theme-input">
			<div>
				<!-- password -->
				<div class="">
					<label for="inputPassVeriPassword4">
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
					<label for="inputPassVeri1Password4">
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
		<div class="d-flex align-items-center">
			<div>
				<button
					type="button"
					class="btn-common btn-lightGray mr-3"
					@click="changeTab('pills-userInformation-tab')"
					:disabled="isSubmitting"
				>
					{{ t('common.back') }}
				</button>
			</div>
			<div>
				<button
					type="button"
					class="btn-common btn-red"
					@click="submitForm"
				>
					{{ t('common.next') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';
import { Tab } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';

export default {
	name: 'PasswordInformation',

	// eslint-disable-next-line no-unused-vars
	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		const router = useRouter(); // use global router

		// form schema validation
		const AccountSchema = yup.object({
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
				.oneOf(
					[yup.ref('password'), null],
					t('validation.cPasswordMustMatch'),
				),
		});

		// form validation intialize
		const {
			meta: formMeta,
			handleSubmit,
			isSubmitting,
		} = useForm({
			validationSchema: AccountSchema,
		});

		// form fields
		const passwordField = reactive(
			useField('password', undefined, { initialValue: null }),
		);
		const confirmPasswordField = reactive(
			useField('confirmPassword', undefined, { initialValue: null }),
		);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// change form step
		const changeTab = (tab) => {
			const triggerTab = document.querySelector(`#pills-tab #${tab}`);
			new Tab(triggerTab).show();
		};

		// submit form - change tab - step - 2
		const submitForm = handleSubmit((values) => {
			// register job seeker
			const tempformData = store.getters['auth/getSeekerRegistrationFormData'];
			const tempCurrentRegistrationData = JSON.parse(
				localStorage.getItem('current_registration'),
			);

			// form data
			const formData = new FormData();
			formData.append('email', tempCurrentRegistrationData.email);
			formData.append('password', values.password);
			formData.append('mobile', tempformData.mobile);
			formData.append('full_name', tempformData.full_name);
			// formData.append('first_name', tempformData.firstName);
			// formData.append('last_name', tempformData.lastName);

			store
				.dispatch(
					tempCurrentRegistrationData.user_type === 'jobseeker'
						? 'auth/registerJobSeeker'
						: 'auth/registerEmployer',
					formData,
				)
				.then(() => {
					router.push({ name: 'Home' });
				});
		});

		return {
			t,
			store,
			passwordField,
			confirmPasswordField,
			formMeta,
			changeTab,
			isSubmitting,
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.passwordInformation {
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
</style>

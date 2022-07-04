<template>
	<!-- change password -->
	<div class="change__password w-100 d-block mt-3">
		<!-- header -->
		<div class="payment-pill-header mb-4">
			<div class="pph-left">
				<h5 class="title-lg">{{ t('profile.changePassword') }}</h5>
			</div>
		</div>

		<!-- change password form -->
		<div class="change_password__form">
			<form class="theme-input">
				<div class="row">
					<!-- old password -->
					<div class="form-group col-lg-6 col-12">
						<label for="oldPassword"> {{ t('fieldList.oldPassword') }}<span>*</span> </label>

						<input
							id="oldPassword"
							type="password"
							class="form-control"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.oldPassword',
								})
							"
							@input="oldPasswordField.handleChange"
							@blur="oldPasswordField.handleBlur"
							:value="oldPasswordField.value"
						/>

						<p class="text-danger">
							{{ oldPasswordField.errorMessage }}
						</p>
					</div>

					<!-- new password -->
					<div class="form-group col-lg-6 col-12">
						<label for="newPassword"> {{ t('fieldList.newPassword') }}<span>*</span> </label>

						<input
							id="newPassword"
							type="password"
							class="form-control"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.newPassword',
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
					<div class="form-group col-lg-6 col-12">
						<label for="confirmPassword"> {{ t('fieldList.confirmPassword') }}<span>*</span> </label>

						<input
							id="confirmPassword"
							type="password"
							class="form-control"
							:placeholder="
								t('validation.enterField', {
									field: 'fieldList.confirmPassword',
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

				<!-- change password btn -->
				<div class="form-row text-right">
					<ToolTip :title="t('toolTip.updatePassword')">
						<button type="submit" class="btn-common btn-red mt-2" @click="submitForm" :disabled="isSubmitting">
							{{ t('profile.changePassword') }}
						</button>
					</ToolTip>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';

export default {
	name: 'ChangePasswordSeeker',

	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// change password form schema validation
		const changePasswordSchema = yup.object({
			old_password: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.oldPassword',
					}),
				),
			password: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.newPassword',
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
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting, resetForm } = useForm({
			validationSchema: changePasswordSchema,
		});

		// form fields
		const oldPasswordField = reactive(useField('old_password', undefined, { initialValue: null }));
		const passwordField = reactive(useField('password', undefined, { initialValue: null }));
		const confirmPasswordField = reactive(useField('confirmPassword', undefined, { initialValue: null }));

		/**
		 * Methods
		 * *******************************************************************
		 */
		// submit form - change tab - step - 2
		const submitForm = handleSubmit(async values => {
			// save the work details
			await store.dispatch('auth/changePassword', values).then(() => resetForm());

			return true;
		});

		return {
			// translate function
			t,

			// form related
			formMeta,
			submitForm,
			isSubmitting,

			// fields
			oldPasswordField,
			passwordField,
			confirmPasswordField,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.change__password {
	background-color: #fff;
	border-radius: 20px;
	padding: 50px 30px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>

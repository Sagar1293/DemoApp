<template>
	<div class="accountInformation">
		<!-- step - 1 -- title -->
		<div class="tab-header">
			<h5 class="text-big">{{ t('registerForm.accountInfo') }}</h5>
		</div>

		<!-- step - 1 -- form content -->
		<div class="tab-form theme-input">
			<div class="form-row">
				<!-- email -->
				<div class="form-group col-md-4">
					<label for="inputAccPassword4"
						>{{ t('fieldList.email') }}<span>*</span></label
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
				<div class="form-group col-md-4">
					<label for="inputAcc1Password4">
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
				<div class="form-group col-md-4">
					<label for="inputAcc2Password4">
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

		<!-- next step btn -->
		<div class="form-row form-btns justify-content-end">
			<div class="form-group">
				<button
					type="submit"
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

export default {
	name: 'AccountInformation',

	// eslint-disable-next-line no-unused-vars
	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const AccountSchema = yup.object({
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
		const { meta: formMeta, handleSubmit } = useForm({
			validationSchema: AccountSchema,
		});

		// form fields
		const emailField = reactive(
			useField('email', undefined, { initialValue: null }),
		);
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
			// store data in vuex
			store.commit('auth/SET_STATE', {
				action: 'accountInformation',
				data: values,
			});

			// go to next tab
			changeTab('pills-personalInformation-tab');
		});

		return {
			t,
			store,
			emailField,
			passwordField,
			confirmPasswordField,
			formMeta,
			changeTab,
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.accountInformation {
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

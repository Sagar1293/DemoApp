<template>
	<div class="emailVerification">
		<!-- step - 1 -- title -->
		<div class="tab-header">
			<h5 class="text-big">{{ t('registerForm.emailVerification') }}</h5>
		</div>

		<!-- step - 1 -- form content -->
		<div class="tab-form theme-input my-4">
			<div>
				<!-- email -->
				<div>
					<label for="inputEmailPassword4">{{ t('fieldList.email') }}<span>*</span></label>
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
				<div class="form-row checkbox-div mt-3">
					<div class="round">
						<div class="col-md-12">
							<!-- <input
								class="form-check-input form-checkbox-width"
								type="checkbox"
								id="transportedHeavyLoad"
								:checked="displayAllW2WTotoal"
								:value="displayAllW2WTotoal.value"
								:v-model="displayAllW2WTotoal.value"
								@click="onTransported($event)"
							/> -->
							<div class="form-check form-checkbox">
								<input class="form-check-input form-checkbox-width" type="checkbox" id="transportedHeavyLoad" @change="termsAndConditionField.handleChange" :value="true" />
								<label class="form-check-label extras-font checkbox" for="termsAndCondition"> {{ t('loginForm.termsAndCondition') }} </label>
							</div>
						</div>
						<!-- <label for=""></label> -->
						<p class="text-left text-danger mt-2 ml-1">
							{{ termsAndConditionField.errorMessage }}
						</p>
					</div>
					<!-- <p>{{ t('loginForm.termsAndCondition') }}</p> -->
				</div>
			</div>
		</div>
		<!-- next step btn -->
		<div class="form-btns justify-content-end">
			<div class="">
				<button type="button" class="btn-common btn-red" @click="submitForm">
					{{ t('common.next') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, reactive, ref, watch } from 'vue';
import { Tab } from 'bootstrap';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { useRoute } from 'vue-router';

export default {
	name: 'EmailVerification',

	props: {
		userType: String,
		userFlagCompany: Boolean,
		userFlagJobseeker: Boolean,
	},

	// eslint-disable-next-line no-unused-vars
	setup(props) {
		// refs
		const userType = ref(props.userType);
		const userFlags = ref(props.userFlag);
		console.log(userFlags, '=====================');

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		const route = useRoute();

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
			terms_and_condition: yup
				.bool()
				.oneOf([true], 'Terms and condition is a required field.')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.termsAndCon',
					}),
				),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, setValues } = useForm({
			validationSchema: AccountSchema,
		});

		// form fields
		const emailField = reactive(useField('email', undefined, { initialValue: null }));
		const termsAndConditionField = reactive(useField('terms_and_condition', undefined, { initialValue: false }));
		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(() => {
			// localStorage.removeItem('current_registration');
			const currentRegistrationData = JSON.parse(localStorage.getItem('current_registration'));

			if (currentRegistrationData) {
				setValues({
					email: currentRegistrationData.email,
				});

				userType.value = currentRegistrationData.user_type;
				// userFlag.value currentRegistrationData.user_flag
			}
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
		const submitForm = handleSubmit(values => {
			// verify email
			const reqObj = {
				...values,
				user_type: userType.value,
				referer: route.query.referer || null,
				userJobFlag: props.userFlagJobseeker,
				userJComFlag: props.userFlagCompany,
			};
			store.dispatch('auth/verifyEmail', reqObj).then(() => {
				// set the current registration
				localStorage.setItem('current_registration', JSON.stringify(reqObj));

				// store data in vuex
				store.commit('auth/SET_STATE', {
					action: 'emailVerification',
					data: values,
				});
			});
		});

		/**
		 * Watch
		 * *******************************************************************
		 */
		watch(
			() => props.userType,
			() => {
				userType.value = props.userType;
			},
		);

		return {
			t,
			store,
			emailField,
			termsAndConditionField,
			formMeta,
			changeTab,
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';
@import '@/assets/scss/modal.scss';

.emailVerification {
	@media (max-width: 576px) {
		.tab-header {
			text-align: center;
		}
		.tab-form {
			margin: 20px 0px;
		}
	}
}

.form-check-input {
	position: relative;
}
.form-check-input:checked {
	background-color: #565e64;
	border-color: #565e64;
}

.form-check-input:focus {
	border-color: #565e64;
}

.form-checkbox {
	margin-bottom: 10px;
	display: flex;
	justify-content: flex-end;

	.form-checkbox-width {
		width: 1.4em;
		height: 1.4em;
		margin: 0 10px 0 -30px;

		&:focus {
			box-shadow: none;
		}
	}
}
</style>

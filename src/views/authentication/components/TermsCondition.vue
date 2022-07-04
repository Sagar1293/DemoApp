<template>
	<div class="termsCondition">
		<!-- step - 4 -- title -->
		<div class="tab-header">
			<h5 class="text-big">{{ t('registerForm.termCondition') }}</h5>
		</div>

		<!-- step - 4 -- form content -->
		<div class="tab-form theme-input">
			<div class="form-row">
				<div class="form-group col-12">
					<p class="terms-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nulla praesentium impedit suscipit tenetur quia, dolores
						magni magnam iure officiis eum mollitia necessitatibus
						nemo quos modi labore nisi odit doloremque enim?
					</p>
				</div>
			</div>
			<div class="form-row checkbox-div">
				<div class="round">
					<input
						type="checkbox"
						id="checkbox1"
						@change="termsConditionField.handleChange"
						:value="termsConditionField.value"
						v-model="termsConditionField.value"
					/>
					<label for="checkbox1"></label>
				</div>
				<p>{{ t('registerForm.agreeTerms') }}</p>
			</div>
			<p class="text-left mt-2 text-danger">
				{{ termsConditionField.errorMessage }}
			</p>
		</div>

		<div class="form-row form-btns justify-content-end">
			<div class="form-group">
				<button
					type="button"
					class="btn-common btn-lightGray mr-3"
					@click="changeTab('pills-uploadResume-tab')"
				>
					{{ t('common.back') }}
				</button>
			</div>
			<div class="form-group">
				<button
					type="submit"
					class="btn-common btn-red"
					:disabled="!formMeta.valid || isSubmitting"
					@click="submitForm"
				>
					{{ t('common.finish') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';
import { Tab } from 'bootstrap';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
	name: 'TermsCondition',

	props: {
		userType: String, // user registration type
		filedt: Object, // data file
	},

	setup(props) {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const termsConditionSchema = yup.object({
			termsCondition: yup.boolean().oneOf(
				[true],
				t('validation.requiredField', {
					field: 'fieldList.termsCondition',
				}),
			),
		});

		const dataFile = computed(() => {
			return props.filedt;
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: termsConditionSchema,
		});

		// form fields
		const termsConditionField = reactive(
			useField('termsCondition', undefined, { initialValue: null }),
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
		const submitForm = handleSubmit(() => {
			if (props.userType === 'employer') {
				// register company
				const tempformData =
					store.getters['auth/getEmployerRegisterFormData'];

				// form data
				const formData = new FormData();

				formData.append('email', tempformData.email);
				formData.append('password', tempformData.password);
				formData.append('full_name', tempformData.fullName);
				formData.append('company_name', tempformData.companyName);
				formData.append('company_email', tempformData.companyEmail);
				formData.append('address', tempformData.address);
				formData.append('countryId', tempformData.country);
				formData.append('cityId', tempformData.city);
				formData.append('zip_code', tempformData.zipCode);
				formData.append('industryId', tempformData.industry);
				formData.append('owner_ship_type', tempformData.organization);
				formData.append('no_of_employees', tempformData.noOfEmployees);
				formData.append('mobile', tempformData.mobile);
				formData.append('phone_number', tempformData.phone);
				formData.append('website', tempformData.companyWebsite);
				formData.append('reg_number', tempformData.yTunnus);
				formData.append('ssn', tempformData.ssn);
				formData.append('tax_number', tempformData.taxNumber);
				formData.append('description', formData.companyDescription);
				formData.append('logo', dataFile.value); // company logo

				store.dispatch('auth/registerEmployer', formData);
			} else {
				// register job seeker
				const tempformData =
					store.getters['auth/getSeekerRegistrationFormData'];

				// form data
				const formData = new FormData();

				formData.append('email', tempformData.email);
				formData.append('password', tempformData.password);
				formData.append('full_name', tempformData.fullName);
				formData.append('gender', tempformData.gender);
				formData.append('dob', tempformData.dob);
				formData.append('address', tempformData.address);
				formData.append('countryId', tempformData.country);
				formData.append('cityId', tempformData.city);
				formData.append('zip_code', tempformData.zipCode);
				formData.append('nationalityId', tempformData.nationalityId);
				formData.append('mobile', tempformData.mobile);
				formData.append('phone_number', tempformData.homePhone);
				formData.append('ssn', tempformData.ssn);
				formData.append('tax_number', tempformData.taxNumber);
				formData.append('resume_file', dataFile.value); // job seeker resume

				store.dispatch('auth/registerJobSeeker', formData);
			}
		});

		return {
			t,
			formMeta,
			isSubmitting,
			termsConditionField,
			changeTab,
			submitForm,
			store,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.termsCondition .tab-form {
	margin: 30px 0px 10px 0px;

	.checkbox-div {
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

	@media (max-width: 576px) {
		.tab-header {
			text-align: center;
		}
		.tab-form {
			margin: 20px 0px;
			.terms-text {
				font-size: 14px;
				text-align: center;
			}
			.checkbox-div {
				p {
					font-size: 14px;
				}
			}
		}
	}
}
</style>
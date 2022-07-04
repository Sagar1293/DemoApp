<template>
	<div class="registerEmployer">
		<!-- step - 2 -- title -->
		<div class="tab-header">
			<h5 class="text-big">{{ t('registerForm.personalInfo') }}</h5>
		</div>

		<!-- step - 2 -- form content -->
		<div class="tab-form theme-input">
			<div class="form-row">
				<!-- company name -->
				<div class="form-group col-md-4">
					<label for="companyName">{{ t('fieldList.companyName') }}<span>*</span></label>
					<input
						id="companyName"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.companyName',
							})
						"
						@input="companyNameField.handleChange"
						@blur="companyNameField.handleBlur"
						:value="companyNameField.value"
					/>

					<p class="text-danger">
						{{ companyNameField.errorMessage }}
					</p>
				</div>

				<!-- einvoice address -->
				<div class="form-group col-md-4">
					<label for="companyEmail"> {{ t('fieldList.companyEmail') }}<span>*</span> </label>
					<input
						id="companyEmail"
						type="email"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.companyEmail',
							})
						"
						@input="companyEmailField.handleChange"
						@blur="companyEmailField.handleBlur"
						:value="companyEmailField.value"
					/>

					<p class="text-danger">
						{{ companyEmailField.errorMessage }}
					</p>
				</div>

				<!-- address -->
				<div class="form-group col-12">
					<label for="address">
						{{ t('fieldList.address') }}
						<span>*</span>
					</label>
					<input
						id="address"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.address',
							})
						"
						@input="addressField.handleChange"
						@blur="addressField.handleBlur"
						:value="addressField.value"
					/>

					<p class="text-danger">
						{{ addressField.errorMessage }}
					</p>
				</div>

				<!-- Country -->
				<div class="form-group col-md-4">
					<label for="country">
						{{ t('fieldList.country') }}
						<span>*</span>
					</label>

					<Multiselect
						class="form-group"
						label="country_name"
						trackBy="id"
						@input="countryField.handleChange"
						@blur="countryField.handleBlur"
						v-model="countryField.value"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.country',
							})
						"
						:options="countryOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ countryField.errorMessage }}
					</p>
				</div>

				<!-- city -->
				<div class="form-group col-md-4">
					<label for="city">
						{{ t('fieldList.city') }}
						<span>*</span>
					</label>

					<Multiselect
						class="form-group"
						label="city_name"
						trackBy="id"
						@input="cityField.handleChange"
						@blur="cityField.handleBlur"
						v-model="cityField.value"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.city',
							})
						"
						:options="cityOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ cityField.errorMessage }}
					</p>
				</div>

				<!-- Zip code -->
				<div class="form-group col-md-4">
					<label for="zipCode">
						{{ t('fieldList.zipCode') }}
						<span>*</span>
					</label>
					<input
						id="zipCode"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.zipCode',
							})
						"
						@input="zipCodeField.handleChange"
						@blur="zipCodeField.handleBlur"
						:value="zipCodeField.value"
					/>

					<p class="text-danger">
						{{ zipCodeField.errorMessage }}
					</p>
				</div>

				<!-- Industry -->
				<div class="form-group col-md-4">
					<label for="industry">
						{{ t('fieldList.industry') }}
						<span>*</span>
					</label>

					<Multiselect
						class="form-group"
						label="industry_name"
						trackBy="id"
						@input="industryField.handleChange"
						@blur="industryField.handleBlur"
						v-model="industryField.value"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.industry',
							})
						"
						:options="industryOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ industryField.errorMessage }}
					</p>
				</div>

				<!-- Organization Type -->
				<div class="form-group col-md-4">
					<label for="organization">
						{{ t('fieldList.organization') }}
						<span>*</span>
					</label>

					<Multiselect
						class="form-group"
						@input="organizationField.handleChange"
						@blur="organizationField.handleBlur"
						v-model="organizationField.value"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.organization',
							})
						"
						:options="organizationOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ organizationField.errorMessage }}
					</p>
				</div>

				<!-- No of Employees -->
				<div class="form-group col-md-4">
					<label for="noEmployees">
						{{ t('fieldList.noOfEmployees') }}
						<span>*</span>
					</label>

					<Multiselect
						class="form-group"
						@input="noOfEmployeesField.handleChange"
						@blur="noOfEmployeesField.handleBlur"
						v-model="noOfEmployeesField.value"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.noOfEmployees',
							})
						"
						:options="noOfEmployeesOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ noOfEmployeesField.errorMessage }}
					</p>
				</div>

				<!-- Phone -->
				<div class="form-group col-md-4">
					<label for="phone">
						{{ t('fieldList.phone') }}
					</label>
					<input
						id="phone"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.phone',
							})
						"
						@input="phoneField.handleChange"
						@blur="phoneField.handleBlur"
						:value="phoneField.value"
					/>

					<p class="text-danger">
						{{ phoneField.errorMessage }}
					</p>
				</div>

				<!-- company website -->
				<div class="form-group col-md-4">
					<label for="website">
						{{ t('fieldList.companyWebsite') }}
						<span>*</span>
					</label>
					<input
						id="website"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.companyWebsite',
							})
						"
						@input="companyWebsiteField.handleChange"
						@blur="companyWebsiteField.handleBlur"
						:value="companyWebsiteField.value"
					/>

					<p class="text-danger">
						{{ companyWebsiteField.errorMessage }}
					</p>
				</div>

				<!-- Company register number -->
				<div class="form-group col-md-4">
					<label for="companyRegister">
						{{ t('fieldList.yTunnus') }}
						<span>*</span>
					</label>
					<input
						id="companyRegister"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.companyRegNum',
							})
						"
						@input="yTunnusField.handleChange"
						@blur="yTunnusField.handleBlur"
						:value="yTunnusField.value"
					/>

					<p class="text-danger">
						{{ yTunnusField.errorMessage }}
					</p>
				</div>

				<!-- Company SSN -->
				<div class="form-group col-md-4">
					<label for="ssn">
						SSN
						<span>*</span>
					</label>
					<input
						id="ssn"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'SSN',
							})
						"
						@input="ssnField.handleChange"
						@blur="ssnField.handleBlur"
						:value="ssnField.value"
					/>

					<p class="text-danger">
						{{ ssnField.errorMessage }}
					</p>
				</div>

				<!-- Company Tax Number -->
				<div class="form-group col-md-4">
					<label for="taxNumber">
						{{ t('fieldList.taxNumber') }}
						<span>*</span>
					</label>
					<input
						id="taxNumber"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.taxNumber',
							})
						"
						@input="taxNumberField.handleChange"
						@blur="taxNumberField.handleBlur"
						:value="taxNumberField.value"
					/>

					<p class="text-danger">
						{{ taxNumberField.errorMessage }}
					</p>
				</div>

				<!-- Company description -->
				<div class="form-group col-md-12">
					<label for="description">
						{{ t('fieldList.companyDescription') }}
						<span>*</span>
					</label>
					<textarea
						class="form-control"
						id="description"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.companyDescription',
							})
						"
						@input="companyDescriptionField.handleChange"
						@blur="companyDescriptionField.handleBlur"
						:value="companyDescriptionField.value"
					></textarea>

					<p class="text-danger">
						{{ companyDescriptionField.errorMessage }}
					</p>
				</div>

				<!-- company logo -->
				<div class="form-group col-12">
					<!-- dropzone - upload file -->
					<label>{{ t('registerForm.uploadCompanyLogo') }}</label>
					<div class="drop-container">
						<div class="dropzone" id="dropImage" v-bind="getRootProps()">
							<div class="dropzone-text">
								<div class="dropzone-icon">
									<FontAwesomeIcon :icon="cloudUploadIcon" />
								</div>
								<div class="dropzone-info">
									<p>
										{{ t('registerForm.uploadCompanyLogo') }}
									</p>
									<span>{{ t('common.pdf_doc_ppt_jpg_png') }}</span>
								</div>
							</div>
							<div class="fallback">
								<input name="contentFile" v-bind="getInputProps()" />
							</div>
						</div>

						<!-- uploaded file preview -->
						<div class="preview" v-if="contentFile">
							<button type="button" class="drop-close" @click="removeFile">
								<FontAwesomeIcon :icon="closeIcon" />
							</button>
							<div id="preview">
								<div
									class="
										dz-preview
										dz-error
										dz-complete
										dz-image-preview
									"
								>
									<div class="dz-image">
										<img data-dz-thumbnail="" alt="Content file image" :src="contentFilePreview" />
									</div>
									<div class="dz-details">
										<div class="dz-size">
											<span data-dz-size=""
												><strong>{{ calculateFileSize }}</strong> {{ t('document.mb') }}</span
											>
										</div>
										<div class="dz-filename">
											<span data-dz-name="">{{ contentFile.name }}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- prev tab and next tab btn -->
		<div class="form-row form-btns justify-content-end">
			<div class="form-group">
				<button type="button" class="btn-common btn-lightGray mr-3" @click="changeTab('pills-passwordVerification-tab')" :disabled="isSubmitting">
					{{ t('common.back') }}
				</button>
			</div>
			<div class="form-group">
				<button type="button" class="btn-common btn-lightGray mr-3" @click="createRequest">
					{{ t('common.skip') }}
				</button>
			</div>
			<div class="form-group">
				<button type="submit" class="btn-common btn-red" @click="submitForm" :disabled="isSubmitting">
					{{ t('common.next') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { reactive, computed, ref } from 'vue';
import { Tab } from 'bootstrap';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useForm, useField } from 'vee-validate';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';
import * as yup from 'yup';
import { useToast } from 'vue-toastification';
import { useDropzone } from 'vue3-dropzone';

import { genderOptions, organizationOptions, noOfEmployeesOptions } from '@/utils/enums.js'; // gender options

export default {
	name: 'RegiterEmployer',

	components: {
		Multiselect,
		FontAwesomeIcon,
	},

	props: {
		onDataFileChange: Function,
	},

	setup(props) {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// toast
		const toast = useToast();

		// file var
		const contentFile = ref(null);
		const contentFilePreview = ref('');

		// icons
		const closeIcon = faTimes;
		const cloudUploadIcon = faCloudUploadAlt;

		// form schema validation
		const employerSchema = yup.object({
			companyName: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyName',
					}),
				),
			companyEmail: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyEmail',
					}),
				)
				.email(t('validation.validEmail')),
			address: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.address',
					}),
				),
			country: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.country',
					}),
				),
			city: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.city',
					}),
				),
			zipCode: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.zipCode',
					}),
				),
			industry: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.industry',
					}),
				),
			organization: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.organization',
					}),
				),
			noOfEmployees: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.noOfEmployees',
					}),
				),

			phone: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.phone',
					}),
				),
			companyWebsite: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyWebsite',
					}),
				)
				.url(),
			yTunnus: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.yTunnus',
					}),
				),
			ssn: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.ssn',
					}),
				),
			taxNumber: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.taxNumber',
					}),
				),
			companyDescription: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyDescription',
					}),
				),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: employerSchema,
		});

		// form fields
		const companyNameField = reactive(useField('companyName', undefined, { initialValue: null }));
		const companyEmailField = reactive(useField('companyEmail', undefined, { initialValue: null }));
		const addressField = reactive(useField('address', undefined, { initialValue: null }));
		const countryField = reactive(useField('country', undefined, { initialValue: null }));
		const cityField = reactive(useField('city', undefined, { initialValue: null }));
		const zipCodeField = reactive(useField('zipCode', undefined, { initialValue: null }));
		const industryField = reactive(useField('industry', undefined, { initialValue: null }));
		const organizationField = reactive(useField('organization', undefined, { initialValue: null }));
		const noOfEmployeesField = reactive(useField('noOfEmployees', undefined, { initialValue: null }));
		const phoneField = reactive(useField('phone', undefined, { initialValue: null }));
		const companyWebsiteField = reactive(useField('companyWebsite', undefined, { initialValue: null }));
		const yTunnusField = reactive(useField('yTunnus', undefined, { initialValue: null }));
		const ssnField = reactive(useField('ssn', undefined, { initialValue: null }));
		const taxNumberField = reactive(useField('taxNumber', undefined, { initialValue: null }));
		const companyDescriptionField = reactive(useField('companyDescription', undefined, { initialValue: null }));

		/**
		 * Computed props
		 * *******************************************************************
		 */
		// get country options
		const countryOptions = computed(() => store.getters['country/getCountryOptions']);

		// get city options
		const cityOptions = computed(() => store.getters['country/getCitiesOptions']);

		// get industry options
		const industryOptions = computed(() => store.getters['industry/getIndustryOptions']);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// change form step
		const changeTab = tab => {
			const triggerTab = document.querySelector(`#pills-tab #${tab}`);
			new Tab(triggerTab).show();
		};

		// on file upload
		const onDrop = (acceptFiles, rejectReasons) => {
			if (rejectReasons.length) {
				toast.error(rejectReasons[0].errors[0].message);
				return false;
			}

			contentFile.value = acceptFiles[0]; // store file

			props.onDataFileChange(acceptFiles[0]); // handle data file change

			// file preview
			contentFilePreview.value = ['image/png'].includes(acceptFiles[0].type) ? URL.createObjectURL(acceptFiles[0]) : require('@/assets/images/iconWomanDraw.png');
		};

		// remove file
		const removeFile = () => {
			contentFile.value = null;
		};

		// dropzone
		const { getRootProps, getInputProps, ...rest } = useDropzone({
			multiple: false,
			onDrop,
			maxSize: 5242880, // 5 MB
			accept: ['.png', '.pdf', '.jpg', '.jpeg', '.docx'],
		});

		// submit form - change tab - step - 2
		const submitForm = handleSubmit(values => {
			// register job seeker
			const tempformData = store.getters['auth/getSeekerRegistrationFormData'];
			const tempCurrentRegistrationData = JSON.parse(localStorage.getItem('current_registration'));

			// form data
			const formData = new FormData();

			formData.append('email', tempCurrentRegistrationData.email);
			formData.append('password', tempformData.password);
			formData.append('mobile', tempformData.mobile);
			formData.append('first_name', tempformData.firstName);
			formData.append('last_name', tempformData.lastName);
			formData.append('company_name', values.companyName);
			formData.append('company_email', values.companyEmail);
			formData.append('address', values.address);
			formData.append('countryId', values.country);
			formData.append('cityId', values.city);
			formData.append('zip_code', values.zipCode);
			formData.append('industryId', values.industry);
			formData.append('owner_ship_type', values.organization);
			formData.append('no_of_employees', values.noOfEmployees);
			formData.append('phone_number', values.phone);
			formData.append('website', values.companyWebsite);
			formData.append('reg_number', values.yTunnus);
			formData.append('ssn', values.ssn);
			formData.append('tax_number', values.taxNumber);
			formData.append('description', values.companyDescription);
			formData.append('logo', contentFile.value); // company logo

			store.dispatch('auth/registerEmployer', formData);
		});

		// create request - submit form
		const createRequest = () => {
			// register job seeker
			const tempformData = store.getters['auth/getSeekerRegistrationFormData'];
			const tempCurrentRegistrationData = JSON.parse(localStorage.getItem('current_registration'));

			// form data
			const formData = new FormData();
			formData.append('email', tempCurrentRegistrationData.email);
			formData.append('password', tempformData.password);
			formData.append('mobile', tempformData.mobile);
			formData.append('first_name', tempformData.firstName);
			formData.append('last_name', tempformData.lastName);

			store.dispatch('auth/registerEmployer', formData);
		};

		return {
			// translate function
			t,

			// refs
			genderOptions,
			organizationOptions,
			noOfEmployeesOptions,
			countryOptions,
			cityOptions,
			industryOptions,
			closeIcon,
			cloudUploadIcon,
			contentFile,
			contentFilePreview,

			// form related
			formMeta,
			isSubmitting,

			// fields
			companyNameField,
			companyEmailField,
			addressField,
			countryField,
			cityField,
			zipCodeField,
			industryField,
			organizationField,
			noOfEmployeesField,
			phoneField,
			companyWebsiteField,
			yTunnusField,
			ssnField,
			taxNumberField,
			companyDescriptionField,

			// methods
			submitForm,
			changeTab,
			removeFile,
			getRootProps,
			getInputProps,
			rest,
			createRequest,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.registerEmployer {
	max-height: 55vh;

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

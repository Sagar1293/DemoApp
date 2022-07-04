<template>
	<div class="registerLightEnterpreneur">
		<!-- step - 2 -- title -->
		<div class="tab-header">
			<h5 class="text-big">{{ t('registerForm.personalInfo') }}</h5>
		</div>

		<!-- step - 2 -- form content -->
		<div class="tab-form theme-input">
			<div class="form-row">
				<!-- gender -->
				<div class="form-group col-md-4">
					<label for="gender"> {{ t('fieldList.gender') }}<span>*</span> </label>

					<Multiselect
						class="form-group"
						@input="genderField.handleChange"
						@blur="genderField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.gender',
							})
						"
						v-model="genderField.value"
						:options="genderOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ genderField.errorMessage }}
					</p>
				</div>

				<!-- date of birth -->
				<div class="form-group col-md-4">
					<label for="dob">
						{{ t('fieldList.dob') }}
						<span>*</span>
					</label>

					<v-date-picker @input="dobField.handleChange" @blur="dobField.handleBlur" v-model="dobField.value" :masks="{ input: 'YYYY/MM/DD' }">
						<template v-slot="{ inputValue, inputEvents }">
							<input
								class="form-control"
								:value="inputValue"
								v-on="inputEvents"
								:placeholder="
									t('validation.enterField', {
										field: 'fieldList.dob',
									})
								"
							/>
						</template>
					</v-date-picker>

					<p class="text-danger">
						{{ dobField.errorMessage }}
					</p>
				</div>

				<!-- Home Phone -->
				<div class="form-group col-md-4">
					<label for="homePhone">
						{{ t('fieldList.homePhone') }}
					</label>
					<input
						id="homePhone"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.homePhone',
							})
						"
						@input="homePhoneField.handleChange"
						@blur="homePhoneField.handleBlur"
						:value="homePhoneField.value"
					/>

					<p class="text-danger">
						{{ homePhoneField.errorMessage }}
					</p>
				</div>

				<!-- current address -->
				<div class="form-group col-12">
					<label for="address">
						{{ t('fieldList.cAddress') }}
						<span>*</span>
					</label>
					<input
						id="address"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.cAddress',
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

				<!-- residence -->
				<div class="form-group col-md-4">
					<label for="residence">
						{{ t('fieldList.residence') }}
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

				<!-- Nationality -->
				<div class="form-group col-md-4">
					<label for="nationality">
						{{ t('fieldList.nationality') }}
						<span>*</span>
					</label>

					<Multiselect
						class="form-group"
						label="country_citizen"
						trackBy="id"
						@input="nationalityField.handleChange"
						@blur="nationalityField.handleBlur"
						v-model="nationalityField.value"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.nationality',
							})
						"
						:options="countryOptions"
						mode="single"
						:canDeselect="true"
					/>

					<p class="text-danger">
						{{ nationalityField.errorMessage }}
					</p>
				</div>

				<!-- SSN -->
				<div class="form-group col-md-4">
					<label for="ssn">
						{{ t('fieldList.ssn') }}
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

				<!-- Tax Number -->
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

				<!-- resume -->
				<div class="form-group col-12">
					<!-- dropzone - upload file -->
					<label>{{ t('fieldList.uploadResume') }}</label>
					<div class="drop-container">
						<div class="dropzone" id="dropImage" v-bind="getRootProps()">
							<div class="dropzone-text">
								<div class="dropzone-icon">
									<FontAwesomeIcon :icon="cloudUploadIcon" />
								</div>
								<div class="dropzone-info">
									<p>
										{{ t('fieldList.uploadResume') }}
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
				<button type="button" class="btn-common btn-lightGray mr-3" @click="changeTab('pills-passwordVerification-tab')">
					{{ t('common.back') }}
				</button>
			</div>
			<div class="form-group">
				<button type="button" class="btn-common btn-lightGray mr-3" @click="createRequest">
					{{ t('common.skip') }}
				</button>
			</div>
			<div class="form-group">
				<button type="submit" class="btn-common btn-red" @click="submitForm">
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
import Multiselect from '@vueform/multiselect';
import * as yup from 'yup';
import moment from 'moment';
import { useDropzone } from 'vue3-dropzone';
import { useToast } from 'vue-toastification';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

import { genderOptions } from '@/utils/enums.js'; // gender options

export default {
	name: 'RegiterLightEnterpreneur',

	components: {
		Multiselect,
		FontAwesomeIcon,
	},

	setup() {
		// file var
		const contentFile = ref(null);
		const contentFilePreview = ref('');

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// toast
		const toast = useToast();

		// icons
		const closeIcon = faTimes;
		const cloudUploadIcon = faCloudUploadAlt;

		// form schema validation
		const LightEnterpreneurSchema = yup.object({
			gender: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.gender',
					}),
				),
			dob: yup
				.date()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.dob',
					}),
				),
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
						field: 'fieldList.residence',
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
			nationalityId: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.nationality',
					}),
				),
			homePhone: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.homePhone',
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
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit } = useForm({
			validationSchema: LightEnterpreneurSchema,
		});

		// form fields
		const genderField = reactive(useField('gender', undefined, { initialValue: null }));
		const dobField = reactive(useField('dob', undefined, { initialValue: null }));
		const addressField = reactive(useField('address', undefined, { initialValue: null }));
		const countryField = reactive(useField('country', undefined, { initialValue: null }));
		const cityField = reactive(useField('city', undefined, { initialValue: null }));
		const zipCodeField = reactive(useField('zipCode', undefined, { initialValue: null }));
		const nationalityField = reactive(useField('nationalityId', undefined, { initialValue: null }));
		const homePhoneField = reactive(useField('homePhone', undefined, { initialValue: null }));
		const ssnField = reactive(useField('ssn', undefined, { initialValue: null }));
		const taxNumberField = reactive(useField('taxNumber', undefined, { initialValue: null }));

		/**
		 * Computed props
		 * *******************************************************************
		 */
		// get country options
		const countryOptions = computed(() => store.getters['country/getCountryOptions']);

		// get city options
		const cityOptions = computed(() => store.getters['country/getCitiesOptions']);

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
			// set date format
			values.dob = moment(values.dob).format('YYYY/MM/DD');

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
			formData.append('gender', values.gender);
			formData.append('dob', values.dob);
			formData.append('address', values.address);
			formData.append('countryId', values.country);
			formData.append('cityId', values.city);
			formData.append('zip_code', values.zipCode);
			formData.append('nationalityId', values.nationalityId);
			formData.append('phone_number', values.homePhone);
			formData.append('ssn', values.ssn);
			formData.append('tax_number', values.taxNumber);
			formData.append('resume_file', contentFile.value);

			store.dispatch('auth/registerJobSeeker', formData);
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

			store.dispatch('auth/registerJobSeeker', formData);
		};

		return {
			// translate function
			t,

			// refs
			genderOptions,
			countryOptions,
			cityOptions,
			closeIcon,
			cloudUploadIcon,
			contentFile,
			contentFilePreview,

			// form fields
			genderField,
			dobField,
			addressField,
			countryField,
			cityField,
			zipCodeField,
			nationalityField,
			homePhoneField,
			ssnField,
			taxNumberField,

			// form related
			formMeta,

			// methods
			changeTab,
			submitForm,
			removeFile,
			getRootProps,
			getInputProps,
			rest,
			createRequest,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.registerLightEnterpreneur {
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

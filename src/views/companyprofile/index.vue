<template>
	<!--Company Profile List-->
	<div class="company-user-wrap card-space">
		<!-- header -->
		<div class="payment-pill-header mb-sm-4">
			<div class="pph-left">
				<h5 class="title-lg mb-md-0 mb-2">
					{{ t('commanDashboard.companyProfile') }}
				</h5>
			</div>
		</div>
		<form class="tab-form">
			<div class="d-sm-flex align-items-center justify-content-sm-between justify-content-center mb-4">
				<div class="position-relative user-wrap-input">
					<!-- <input id="viewTeamName" type="text" class="form-control form-icon pr-4" placeholder="Matti Meikäläinen" /> -->

					<input
						id="company_name"
						type="text"
						class="form-control user-input"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.companyName',
							})
						"
						@input="companyNameField.handleChange"
						@blur="companyNameField.handleBlur"
						:value="companyNameField.value"
						disabled
					/>

					<span class="position-absolute view-edit-danger" @click="showUserName(fullNameField.value)">
						<ToolTip :title="t('toolTip.editUserName')" position="top">
							<FontAwesomeIcon :icon="editIcon" />
						</ToolTip>
					</span>
				</div>
				<div class="mt-md-0 mt-3 d-flex justify-content-center">
					<button class="btn-common btn-red py-2 mb-md-0 mb-2 ms-sm-3 ms-0" type="button" @click="viewChangePasswordModal()">{{ t('profile.changePassword') }}</button>
				</div>
			</div>

			<div class="update-profile-card p-sm-4 p-2 mt-1 mb-3">
				<div class="form-group mb-0 d-lg-flex main-profile-card justify-content-xl-between">
					<div class="dash-user-profile-img rounded-circle position-relative">
						<div class="h-100">
							<!-- profile -->

							<img :src="profilePic" class="img-fluid" alt="err" />
							<!-- openImageSelector -->
							<div class="tbl-action grey-edit grey-btn-position" @click="imageCropperModal">
								<FontAwesomeIcon :icon="editIcon" class="text-sm" />
							</div>
						</div>
					</div>

					<div>
						<!-- company logo -->
						<div class="form-group col-12 p-0" v-show="false">
							<!-- dropzone - upload file -->
							<label>{{ t('registerForm.uploadCompanyLogo') }}</label>
							<div class="drop-container">
								<div class="dropzone" id="dropImage" v-bind="getRootProps()">
									<div class="dropzone-text">
										<div class="dropzone-icon">
											<FontAwesomeIcon :icon="cloudUploadIcon" class=" text-sm" />
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
							</div>
						</div>
					</div>
					<div class="card-space mb-0 ms-lg-3 px-sm-4 px-3 py-4 z-1 bg-img relative">
						<h2 class="title-md">{{ t('updateProfile.details') }}</h2>
						<div class="form_part form-row mt-3">
							<!-- <div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
									<label for="company_name">
										Company Name:
									</label>
									<input id="company_name" type="text" class="form-control" :placeholder="
										t('validation.enterField', {
											field: 'fieldList.companyName',
										})
									" @input="companyNameField.handleChange" @blur="companyNameField.handleBlur"
										:value="companyNameField.value" />
									<p class="text-danger">
										{{ companyNameField.errorMessage }}
									</p>
								</div> -->

							<div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
								<label for="company-user_mail">
									{{ t('companyDashboard.email') }}
								</label>
								<input
									id="company-user_mail"
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
									disabled
								/>
								<p class="text-danger">
									{{ emailField.errorMessage }}
								</p>
							</div>

							<div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
								<label for="detail_adress">
									{{ t('fieldList.address') }}
								</label>
								<input
									name=""
									id="detail_adress"
									class="form-control h-50 py-2"
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

							<div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
								<label for="teamName">
									{{ t('fieldList.country') }}
								</label>
								<div class="dropdown">
									<Multiselect
										class="form-group px-remove"
										label="country_name"
										trackBy="country_name"
										@input="companyCountryField.handleChange"
										@blur="companyCountryField.handleBlur"
										v-model="companyCountryField.value"
										:placeholder="
											t('validation.selectField', {
												field: 'fieldList.country',
											})
										"
										:searchable="true"
										valueProp="referenceId"
										:options="countryOptions"
										mode="single"
										:canDeselect="true"
										@change="selectCompanyCountry"
									/>
									<!-- @click="removeCountry" -->
									<p class="text-danger">
										{{ companyCountryField.errorMessage }}
									</p>
								</div>
							</div>

							<div class="form-group col-xl-6 col-lg-6 col-12 theme-input">
								<label for="teamName">
									{{ t('fieldList.industry') }}
								</label>
								<Multiselect
									class="form-group px-remove"
									label="industry_name"
									trackBy="industry_name"
									@input="industryField.handleChange"
									@blur="industryField.handleBlur"
									v-model="industryField.value"
									:placeholder="
										t('validation.selectField', {
											field: 'fieldList.industry',
										})
									"
									:searchable="true"
									valueProp="referenceId"
									:options="industryOptions"
									mode="single"
									:canDeselect="true"
								/>
								<!-- @click="removeIndustry" -->

								<p class="text-danger">
									{{ industryField.errorMessage }}
								</p>
							</div>

							<div class="form-group col-xl-3 col-lg-6 col-12 theme-input">
								<label for="teamName">
									{{ t('fieldList.city') }}
								</label>
								<div class="dropdown">
									<Multiselect
										class="form-group px-remove"
										label="city_name"
										trackBy="city_name"
										@input="companyCityField.handleChange"
										@blur="companyCityField.handleBlur"
										v-model="companyCityField.value"
										:placeholder="
											t('validation.selectField', {
												field: 'fieldList.city',
											})
										"
										:searchable="true"
										valueProp="referenceId"
										:options="companyCityOptions"
										mode="single"
										:canDeselect="true"
									/>
									<!-- @click="removeCompanyCity" -->
									<p class="text-danger">
										{{ companyCityField.errorMessage }}
									</p>
								</div>
							</div>

							<div class="form-group col-xl-3 col-lg-6 col-12 theme-input">
								<label for="detail_city">
									{{ t('companyDashboard.yTunnus') }}
								</label>
								<input
									id="detail_city"
									type="text"
									class="form-control"
									:placeholder="
										t('validation.enterField', {
											field: 'fieldList.yTunnus',
										})
									"
									@input="employerYTunnusField.handleChange"
									@blur="employerYTunnusField.handleBlur"
									:value="employerYTunnusField.value"
								/>
								<p class="text-danger">
									{{ employerYTunnusField.errorMessage }}
								</p>
							</div>

							<div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
								<label for="noEmployees">
									{{ t('fieldList.noOfEmployees') }}
									<span>*</span>
								</label>
								<div class="dropdown">
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
									<!-- @click="removeEmployeeNo" -->

									<p class="text-danger">
										{{ noOfEmployeesField.errorMessage }}
									</p>
								</div>
							</div>

							<!-- Organization Type -->
							<div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
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
								<!-- @click="removeOrganization" -->

								<p class="text-danger">
									{{ organizationField.errorMessage }}
								</p>
							</div>

							<div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
								<label for="Company_website">
									{{ t('fieldList.companyWebsite') }}
								</label>
								<input
									id="Company_website"
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

							<!-- <div class="form-group col-xl-3 col-lg-6 col-12 theme-input">
									<label for="empLanguageId"> {{ t('fieldList.preferredLanguage') }}<span>*</span>
									</label>
									<Multiselect class="form-group" label="language_name"
										@input="languageField.handleChange" @blur="languageField.handleBlur"
										v-model="languageField.value" :placeholder="
											t('validation.selectField', {
												field: 'fieldList.language',
											})
										" :options="languageList" mode="single" :canDeselect="true" @click="removeLanguage" />

									<p class="text-danger">
										{{ languageField.errorMessage }}
									</p>
								</div> -->
						</div>
					</div>
					<!-- <div class="col-lg-10 col-sm-9">

					</div> -->
				</div>
			</div>

			<div class="card-space px-md-5 px-4 py-lg-4 lg-2 mb-2 mb-4">
				<!-- form field -->
				<!-- <h2 class="title-md my-3 border-bottom py-3">Contact info</h2> -->
				<div class="form_part form-row">
					<!-- title - bank information -->
					<div class="form-group col-12 p-0 mb-0" @click="bankAccountExpland = !bankAccountExpland">
						<div class="d-flex align-items-center justify-content-between">
							<h5 class="text-big mb-0">{{ t('companyDashboard.contactInfo') }}</h5>

							<div>
								<a v-if="!bankAccountExpland">
									<FontAwesomeIcon :icon="arrowDown" class="arrowIcon" />
								</a>
								<a v-else>
									<FontAwesomeIcon :icon="arrowUp" class="arrowIcon" />
								</a>
							</div>
						</div>
					</div>
					<div class="accordion-collapse collapse show" v-if="bankAccountExpland">
						<div>
							<div class="form_part form-row pt-2">
								<div class="form-group col-xl-3 col-lg-6 col-12 theme-input mb-0">
									<label for="company_user_name">
										{{ t('fieldList.contractName') }}
									</label>
									<input
										id="company_user_name"
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.contractName',
											})
										"
										@input="fullNameField.handleChange"
										@blur="fullNameField.handleBlur"
										:value="fullNameField.value"
									/>
									<p class="text-danger">
										{{ fullNameField.errorMessage }}
									</p>
								</div>

								<div class="form-group col-xl-3 col-lg-6 col-12 theme-input mb-0">
									<label for="company_mobile">
										{{ t('companyDashboard.mobilePhone') }}
									</label>
									<div class="hideappearance">
										<input
											id="company_mobile"
											type="text"
											class="form-control"
											:placeholder="
												t('validation.enterField', {
													field: 'fieldList.mobile',
												})
											"
											@input="mobileField.handleChange"
											@blur="mobileField.handleBlur"
											:value="mobileField.value"
										/>
									</div>
									<p class="text-danger">
										{{ mobileField.errorMessage }}
									</p>
								</div>

								<div class="form-group col-xl-3 col-lg-6 col-12 theme-input mb-0">
									<label for="teamName">
										{{ t('companyDashboard.residence') }}
									</label>
									<div class="dropdown">
										<Multiselect
											class="form-group px-remove"
											label="country_name"
											trackBy="country_name"
											@input="countryField.handleChange"
											@blur="countryField.handleBlur"
											v-model="countryField.value"
											:placeholder="
												t('validation.selectField', {
													field: 'fieldList.country',
												})
											"
											:searchable="true"
											valueProp="referenceId"
											:options="countryOptions"
											mode="single"
											@change="getCountrWiseCity"
											:canDeselect="true"
										/>
										<!-- @click="removeResidence" -->
										<p class="text-danger">
											{{ countryField.errorMessage }}
										</p>
									</div>
								</div>

								<div class="form-group col-xl-3 col-lg-6 col-12 theme-input mb-0">
									<label for="company_zip_code">
										{{ t('fieldList.zipCode') }}
									</label>
									<input
										id="company_zip_code"
										type="number"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.zipcode',
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

								<div class="form-group col-xl-3 col-lg-6 col-12 theme-input mb-0">
									<label for="teamName">
										{{ t('fieldList.city') }}
									</label>
									<Multiselect
										class="form-group px-remove"
										label="city_name"
										trackBy="city_name"
										@input="cityField.handleChange"
										@blur="cityField.handleBlur"
										v-model="cityField.value"
										:placeholder="
											t('validation.selectField', {
												field: 'fieldList.city',
											})
										"
										:searchable="true"
										valueProp="referenceId"
										:options="cityOptions"
										mode="single"
										:canDeselect="true"
									/>
									<!-- @click="removeCity" -->
									<p class="text-danger">
										{{ cityField.errorMessage }}
									</p>
								</div>

								<!-- <div class="form-group col-xl-4 col-lg-6 col-12 theme-input">
			<label for="detail_city">
				SSN:
			</label>
			<input
				id="detail_city"
				type="text"
				class="form-control"
				:placeholder="
					t('validation.enterField', {
						field: 'SSN',
					})
				"
				@input="ssnNumberField.handleChange"
				@blur="ssnNumberField.handleBlur"
				:value="ssnNumberField.value"
			/>
			<p class="text-danger">
				{{ ssnNumberField.errorMessage }}
			</p>
		</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- update btn -->
			<button class="btn-common btn-red mt-2 mb-2" @click="submitForm" :disabled="isSubmitting">
				<ToolTip :title="t('toolTip.updateProfile')">
					{{ t('common.update') }}
				</ToolTip>
			</button>
		</form>
		<!-- <ChangePassword /> -->
		<CompanySeekarRating />
	</div>
	<!-- update company name popup -->
	<Suspense v-if="showUserNameModal.value">
		<template #default>
			<company-name-information v-model:isModalShow="showUserNameModal" v-model:editUserDetails="editUserDetails" @fetchUserDetails="fetchCompanyProfile" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>

	<!-- change pass word modal -->
	<Suspense v-if="showChangePasswordModal.value">
		<template #default>
			<user-change-password v-model:isModalShow="showChangePasswordModal" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>

	<!-- image cropper modale -->
	<Suspense v-if="imageCropperdModal.value">
		<template #default>
			<cropper-image v-model:isModalShow="imageCropperdModal" @imageUpdated="imageUpdated" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { reactive, computed, ref, onMounted, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useForm, useField } from 'vee-validate';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes, faCloudUploadAlt, faEdit, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';
import * as yup from 'yup';
import { useToast } from 'vue-toastification';
import { useDropzone } from 'vue3-dropzone';
// import ChangePassword from '@/views/companyprofile/components/ChangePassword.vue';
import CompanySeekarRating from '@/views/companyprofile/components/CompanySeekarRating.vue';
import { noOfEmployeesOptions, organizationOptions } from '@/utils/enums.js'; // gender options
const CompanyNameInformation = defineAsyncComponent(async () => {
	return import('@/views/companyprofile/components/CompanyNameUpdate.vue' /* webpackChunkName:"TaxCardInformation" */);
});

const UserChangePassword = defineAsyncComponent(async () => {
	return import('@/views/profile/components/ChangePasswordModale.vue' /* webpackChunkName:"TaxCardInformation" */);
});

const CropperImage = defineAsyncComponent(async () => {
	return import('@/views/companyprofile/components/CropperImageCompany.vue' /* webpackChunkName:"TaxCardInformation" */);
});

import DefaultLoader from '@/components/loader/DefaultLoader.vue';
export default {
	name: 'companyUserprofile',

	components: {
		Multiselect,
		FontAwesomeIcon,
		// ChangePassword,
		CompanySeekarRating,
		CompanyNameInformation,
		DefaultLoader,
		UserChangePassword,
		CropperImage,
	},
	setup() {
		document.title = 'Company Profile - Way2Work';
		//ref
		const contentFile = ref(null);
		const contentFilePreview = ref('');
		const profilePic = ref(null);
		const isUserNameModalShow = ref(false);
		const isImageCropperModalShow = ref(false);
		// icon
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;

		const bankAccountExpland = ref(false);
		const editUserDetails = ref({});

		const isChangePasswordModalShow = ref(false);

		// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
		// const phoneRegExp = /\d{3}([- ]*)\d{3}/;
		// const phoneRegExp = /^([+]?\d{2})?\d{8}$/;
		const phoneRegExp = /^([+])?(\d{10,16}$)/;
		// const fullName = /^[a-zA-Z0-9 ]*$/;
		const fullName = /^([A-Za-zÀ-ÖØ-öø-ÿ]+\s){1,2}([A-Za-zÀ-ÖØ-öø-ÿ]+)$/;
		// const alphaNumberRegExp = /^[a-zA-Z0-9 ]*$/;
		// const alphaNumberRegExp = /[^A-Za-z0-9]+/;
		const zipCodeRegExp = /^[0-9]{5}/;
		// const ssnRegExp = /[^A-Za-z0-9]+/;
		// const ssnRegExp = /^[a-zA-Z0-9 ]*$/;
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// toast
		const toast = useToast();

		// icons
		const closeIcon = faTimes;
		const cloudUploadIcon = faCloudUploadAlt;
		const editIcon = faEdit;

		// form schema validation
		const employerSchema = yup.object({
			full_name: yup
				.string()
				.typeError('Contact name is required.')
				.matches(fullName, 'Contact name is not valid')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.contractName',
					}),
				)
				.max(60),
			phone_number: yup
				.string()
				.typeError('Phone Number name is required.')
				.matches(phoneRegExp, 'Phone number is not valid')
				.max(15, 'Phone Number must be at most 16 characters'),
			zip_code: yup
				.string()
				.typeError('Zip code is required.')
				.matches(zipCodeRegExp, 'Zip code is not valid')
				.min(5, 'Zip code must be at least 5 characters'),
			company_name: yup.string().nullable(),
			countryId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.country',
					}),
				),
			cityId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.city',
					}),
				),

			industryId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.industry',
					}),
				),
			email: yup
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
						field: 'fieldList.companyAddrdess',
					}),
				)
				.max(60),
			reg_number: yup
				.string()
				.nullable()
				.typeError('YTunnus code is required.')
				// .matches(alphaNumberRegExp, 'Y Tunnus is not valid')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.yTunnus',
					}),
				),
			website: yup
				.string()
				.nullable()
				.optional(),
			// companyDescription: yup
			// 	.string()
			// 	.nullable()
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.companyDescription',
			// 		}),
			// 	)
			// 	.max(255),
			companyCountryId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.country',
					}),
				),
			companyCityId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.city',
					}),
				),
			// ssn: yup
			// 	.string()
			// 	.typeError('Ssn code is required.')
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.ssn',
			// 		}),
			// 	)
			// 	.max(60, 'Bank name more then at least 60 characters'),
			// .matches(ssnRegExp, 'ssn number is not valid')
			// ssn: yup
			// 	.string()
			// 	.nullable()
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.ssn',
			// 		}),
			// 	),
			no_of_employees: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.noOfEmployees',
					}),
				),
			owner_ship_type: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.organization',
					}),
				),
			// languageId: yup
			// 	.number()
			// 	.nullable()
			// 	.required(
			// 		t('validation.requiredField', {
			// 			field: 'fieldList.language',
			// 		}),
			// 	),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting, setValues } = useForm({
			validationSchema: employerSchema,
		});

		// form fields
		const fullNameField = reactive(useField('full_name', undefined, { initialValue: null }));
		const mobileField = reactive(useField('phone_number', undefined, { initialValue: null }));
		const zipCodeField = reactive(useField('zip_code', undefined, { initialValue: null, validateOnValueUpdate: false }));
		const companyNameField = reactive(useField('company_name', undefined, { initialValue: null }));
		const countryField = reactive(useField('countryId', undefined, { initialValue: null }));
		const cityField = reactive(useField('cityId', undefined, { initialValue: null }));
		const industryField = reactive(useField('industryId', undefined, { initialValue: null }));
		const emailField = reactive(useField('email', undefined, { initialValue: null }));
		const addressField = reactive(useField('address', undefined, { initialValue: null }));
		const employerYTunnusField = reactive(useField('reg_number', undefined, { initialValue: null }));
		const companyWebsiteField = reactive(useField('website', undefined, { initialValue: null }));
		// const companyDescriptionField = reactive(useField('companyDescription', undefined, { initialValue: null }));
		const companyCountryField = reactive(useField('companyCountryId', undefined, { initialValue: null }));
		const companyCityField = reactive(useField('companyCityId', undefined, { initialValue: null }));
		// const ssnNumberField = reactive(useField('ssn', undefined, { initialValue: null, validateOnValueUpdate: false }));
		// const taxNumberField = reactive(useField('tax_number', undefined, { initialValue: null }));
		const noOfEmployeesField = reactive(useField('no_of_employees', undefined, { initialValue: null }));
		const organizationField = reactive(useField('owner_ship_type', undefined, { initialValue: null }));
		// const languageField = reactive(useField('languageId', undefined, { initialValue: null }));

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch country options
			store.dispatch('country/getCountries');
			// get preferd language
			store.dispatch('language/getLanguages');
			// fetch company detail
			fetchCompanyProfile();
			// fetch city options
			// store.dispatch('country/getCities');
			// fetch industry options
			store.dispatch('industry/getIndustries');
			// // // fetch user details
			// store.dispatch('auth/verifyToken').then(res => {
			// 	let data = res.data.data;
			// 	console.log(data, '<><><><><>');
			// 	if (res.data.data.countryReferenceId) {
			// 		//fetch city
			// 		fetchCityCountryWise(res.data.data.countryReferenceId);
			// 		//fetch city company
			// 		selectCompanyCountry(res.data.data.company.countryReferenceId);
			// 	}

			// 	profilePic.value = data.file_path ?? null;
			// 	setValues({
			// 		full_name: data.full_name,
			// 		phone_number: data.company?.mobile,
			// 		zip_code: data.company?.zip_code,
			// 		company_name: data.company?.company_name,
			// 		address: data.company?.address,
			// 		countryId: data.countryReferenceId,
			// 		cityId: data?.cityReferenceId,
			// 		companyCountryId: data.company?.countryReferenceId,
			// 		companyCityId: data.company?.cityReferenceId,
			// 		industryId: data.company?.industryReferenceId,
			// 		email: data.email,
			// 		reg_number: data.company?.reg_number,
			// 		website: data.company?.website,
			// 		companyDescription: data.company?.description,
			// 		// ssn: data.company?.ssn,
			// 		// tax_number: data.company?.tax_number,
			// 		no_of_employees: data.company?.no_of_employees,
			// 		owner_ship_type: data.company?.owner_ship_type,
			// 		// profile_image: data?.file_path,
			// 		// languageId: data?.languageId,
			// 	});
			// });
		});

		/**
		 * Computed props
		 * *******************************************************************
		 */

		const showUserNameModal = computed({
			get() {
				return isUserNameModalShow;
			},
			set(val) {
				isUserNameModalShow.value = val;
			},
		});

		// get language list
		const languageList = computed(() => {
			return store.state.language.languages.map(x => ({ language_name: x.language_name, value: x.id }));
		});

		// get country options
		const countryOptions = computed(() => store.getters['country/getCountryOptions']);
		// get city options
		const cityOptions = computed(() => store.getters['country/getCitiesOptions']);

		// get company city options
		const companyCityOptions = computed(() => store.getters['country/getCompanyCitiesOptions']);

		// get industry options
		const industryOptions = computed(() => store.getters['industry/getIndustryOptions']);

		// calculate file size
		const calculateFileSize = computed(() => {
			const bytes = (contentFile.value && contentFile.value.size) || 0;

			// convert file size to MB from kb
			if (bytes === 0) {
				return 0;
			}

			return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2));
		});

		// show change pass modale
		const showChangePasswordModal = computed({
			get() {
				return isChangePasswordModalShow;
			},

			set(val) {
				isChangePasswordModalShow.value = val;
			},
		});
		// show Image cropper modale
		const imageCropperdModal = computed({
			get() {
				return isImageCropperModalShow;
			},

			set(val) {
				isImageCropperModalShow.value = val;
			},
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// change form step

		// on file upload
		const onDrop = (acceptFiles, rejectReasons) => {
			if (rejectReasons.length) {
				toast.error(rejectReasons[0].errors[0].message);
				return false;
			}

			contentFile.value = acceptFiles[0]; // store file

			// props.onDataFileChange(acceptFiles[0]); // handle data file change

			// file preview
			profilePic.value = ['image/png', 'image/jpg', 'image/jpeg'].includes(acceptFiles[0].type) ? URL.createObjectURL(acceptFiles[0]) : require('@/assets/images/iconWomanDraw.png');
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
			// form data
			const formData = new FormData();

			formData.append('full_name', values.full_name);
			formData.append('email', values.email);
			formData.append('company_name', values.company_name);
			// formData.append('company_email', values.companyEmail);
			formData.append('address', values.address);
			formData.append('countryId', values.countryId);
			formData.append('cityId', values.cityId);
			formData.append('zip_code', values.zip_code);
			formData.append('industryId', values.industryId);
			formData.append('phone_number', values.phone_number);
			formData.append('website', values.website);
			formData.append('reg_number', values.reg_number);
			formData.append('description', values.companyDescription);
			formData.append('profile_image', contentFile.value); // company logo
			// formData.append('logo', contentFile.value); // company logo
			formData.append('mobile', values.phone_number);
			formData.append('owner_ship_type', 'private');
			formData.append('no_of_employees', values.no_of_employees);
			// formData.append('ssn', values.ssn);
			// formData.append('tax_number', values.tax_number);
			formData.append('companyCountryId', values.companyCountryId);
			formData.append('companyCityId', values.companyCityId);

			// formData.append('languageId', values.languageId);

			store.dispatch('dashboard/updateCompanyProfile', formData).then(() => {
				// fetch user details
				store.dispatch('auth/verifyToken');
			});
			return true;
		});

		const openImageSelector = () => {
			document.querySelector('#dropImage').click();
		};

		//get country wise city
		const getCountrWiseCity = id => {
			if (id) {
				cityOptions.value = null;
				cityField.value = null;
				fetchCityCountryWise(id);
			} else {
				cityOptions.value = null;
				cityField.value = null;
			}
		};

		// get city
		const fetchCityCountryWise = id => {
			store.dispatch('country/getCities', id);
		};

		//company detail select country and city
		const selectCompanyCountry = id => {
			if (id) {
				companyCityOptions.value = null;
				companyCityField.value = null;
				store.dispatch('country/getCompanyCities', id);
			} else {
				companyCityOptions.value = null;
				companyCityField.value = null;
			}
		};

		//remove value - Residence
		// const removeResidence = event => {
		// 	if (event) {
		// 		countryField.value = null;
		// 	}
		// };

		//remove value - Client City
		// const removeCity = event => {
		// 	if (event) {
		// 		cityField.value = null;
		// 	}
		// };

		//remove value - Industry
		// const removeIndustry = event => {
		// 	if (event) {
		// 		industryField.value = null;
		// 	}
		// };

		//remove value - Country
		// const removeCountry = event => {
		// 	if (event) {
		// 		companyCountryField.value = null;
		// 	}
		// };

		//remove value - Company City
		// const removeCompanyCity = event => {
		// 	if (event) {
		// 		companyCityField.value = null;
		// 	}
		// };

		//remove value - No of Employee
		// const removeEmployeeNo = event => {
		// 	if (event) {
		// 		noOfEmployeesField.value = null;
		// 	}
		// };

		//remove value - Organization
		// const removeOrganization = event => {
		// 	if (event) {
		// 		organizationField.value = null;
		// 	}
		// };

		// remove value - Preferred Language
		// const removeLanguage = event => {
		// 	if (event) {
		// 		languageField.value = null;
		// 	}
		// }

		const showUserName = val => {
			showUserNameModal.value = true;
			editUserDetails.value = {
				editUserName: val,
			};
		};
		// fetchcompany details
		const fetchCompanyProfile = () => {
			// // fetch user details
			store.dispatch('auth/verifyToken').then(res => {
				let data = res.data.data;
				if (res.data.data.countryReferenceId) {
					//fetch city
					fetchCityCountryWise(res.data.data.countryReferenceId);
					//fetch city company
					selectCompanyCountry(res.data.data.company.countryReferenceId);
				}
				profilePic.value = data.file_path ?? null;
				setValues({
					full_name: data.full_name,
					phone_number: data.company?.mobile,
					zip_code: data.company?.zip_code,
					company_name: data.company?.company_name,
					address: data.company?.address,
					countryId: data.countryReferenceId,
					cityId: data?.cityReferenceId,
					companyCountryId: data.company?.countryReferenceId,
					companyCityId: data.company?.cityReferenceId,
					industryId: data.company?.industryReferenceId,
					email: data.email,
					reg_number: data.company?.reg_number,
					website: data.company?.website,
					companyDescription: data.company?.description,
					// ssn: data.company?.ssn,
					// tax_number: data.company?.tax_number,
					no_of_employees: data.company?.no_of_employees,
					owner_ship_type: data.company?.owner_ship_type,
					// profile_image: data?.file_path,
					// languageId: data?.languageId,
				});
			});
		};

		const viewChangePasswordModal = () => {
			showChangePasswordModal.value = true;
			isChangePasswordModalShow.value = true;
		};
		// view image cropper modal
		const imageCropperModal = () => {
			imageCropperdModal.value = true;
			isImageCropperModalShow.value = true;
		};
		const imageUpdated = (dada, type) => {
			profilePic.value = dada;
			// convertDataURIToBinary(dada);
			const base64Image = dada.replace(`data:${type};base64,`, '');
			const contentType = 'image/png';
			contentFile.value = b64toBlob(base64Image, contentType);
		};
		const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
			const byteCharacters = window.atob(b64Data);
			const byteArrays = [];

			for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
				const slice = byteCharacters.slice(offset, offset + sliceSize);

				const byteNumbers = new Array(slice.length);
				for (let i = 0; i < slice.length; i++) {
					byteNumbers[i] = slice.charCodeAt(i);
				}

				const byteArray = new Uint8Array(byteNumbers);
				byteArrays.push(byteArray);
			}

			const blob = new File(byteArrays, 'image.jpg', {
				type: contentType,
			});
			return blob;
		};

		return {
			//ref
			contentFile,
			contentFilePreview,
			t,
			closeIcon,
			cloudUploadIcon,
			editIcon,
			profilePic,
			noOfEmployeesOptions,
			organizationOptions,
			bankAccountExpland,
			editUserDetails,

			//icon
			arrowDown,
			arrowUp,

			//field
			fullNameField,
			mobileField,
			zipCodeField,
			companyNameField,
			countryField,
			cityField,
			industryField,
			emailField,
			addressField,
			employerYTunnusField,
			companyWebsiteField,
			// companyDescriptionField,
			companyCityField,
			companyCountryField,
			// ssnNumberField,
			// taxNumberField,
			noOfEmployeesField,
			organizationField,

			// form related
			formMeta,
			isSubmitting,

			//computed
			countryOptions,
			cityOptions,
			industryOptions,
			calculateFileSize,
			companyCityOptions,
			imageCropperdModal,
			// languageField,
			languageList,
			showUserNameModal,
			showChangePasswordModal,

			//method
			submitForm,
			removeFile,
			getRootProps,
			getInputProps,
			rest,
			openImageSelector,
			getCountrWiseCity,
			selectCompanyCountry,
			imageCropperModal,

			//remove value from dropdown
			// removeResidence,
			// removeCity,
			// removeIndustry,
			// removeCountry,
			// removeCompanyCity,
			// removeEmployeeNo,
			// removeOrganization,
			// removeLanguage,
			showUserName,
			fetchCompanyProfile,

			// ChangePassword,
			UserChangePassword,

			viewChangePasswordModal,
			imageUpdated,
			b64toBlob,
		};
	},
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.company-user-wrap {
	padding: 40px 30px;

	@media (max-width: 768px) {
		padding: 30px;
	}

	@media (max-width: 425px) {
		padding: 20px 10px;
	}

	.theme-input {
		.form-control {
			padding: 8px 12px;
		}
	}

	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		border: 3px dashed #dde0e2;
		width: 100%;
		font-weight: 600;
		font-size: 14px;
		background-color: #f6f6f6;
	}

	.company-user-profile {
		max-width: 100px;
		width: 100%;
		height: 100px;
		border-radius: 100%;
		background-color: #eaeaea;

		@media (max-width: 576px) {
			margin: 0 auto;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 50%;
		}
	}

	.grey-edit {
		width: 30px;
		height: 30px;

		svg {
			width: 10px;
			height: 10px;
		}
	}

	.grey-btn-position {
		position: absolute;
		bottom: 0;
		right: 0;
		transform: translateX(10px);
	}

	#company-textarea {
		border: 2px solid #bbbbbb;
		border-radius: 1rem;
		background-origin: border-box;
		background-clip: content-box, border-box;

		.form-control {
			border-radius: 1rem;
			border: 0;
		}
	}
}

.payment-pill-header {
	text-align: start !important;

	.title-lg {
		color: #a0a4a9;
	}
}

.dash-user-profile-img {
	max-width: 100px;
	width: 100%;
	height: 100px;
	border-radius: 100%;
	background-color: #eaeaea;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
}

.update-profile-card {
	background-color: #e9e9e9;
	border-radius: 20px;

	.main-profile-card {
		align-items: flex-start;

		@media (min-width: 1650px) {
			align-items: center;
		}

		.dash-user-profile-img {
			max-width: 170px;
			height: 170px;

			@media (max-width: 1024px) {
				max-width: 150px;
				height: 150px;
			}

			@media (max-width: 992px) {
				margin: 0 auto 1rem auto;
			}

			@media (max-width: 992px) {
				max-width: 130px;
				height: 130px;
			}

			@media (max-width: 425px) {
				max-width: 110px;
				height: 110px;
			}

			img {
				box-shadow: 0px 4px 16px 6px rgba(0, 0, 0, 0.1);
			}

			.grey-btn-position {
				right: 17px;
				background-color: #000;
				background-image: none;

				@media (max-width: 425px) {
					right: 10px;
				}

				svg {
					width: 15px;
					height: 15px;
					color: #fff;

					@media (max-width: 425px) {
						width: 13px;
						height: 13px;
					}
				}

				&.grey-edit {
					height: 45px;
					width: 45px;

					@media (max-width: 1024px) {
						height: 40px;
						width: 40px;
						min-width: 40px;
					}

					@media (max-width: 425px) {
						height: 30px;
						width: 30px;
						min-width: 30px;
					}
				}
			}
		}

		.card-space {
			box-shadow: 0px, 0px, 17px, 0px rgba(0, 0, 0, 0.22);

			@media (max-width: 576px) {
				padding: 15px 10px;
			}

			&.bg-img {
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					right: 30px;
					height: 280px;
					width: 190px;
					background-image: url('~@/assets/images/jobseeker.png');
					background-repeat: no-repeat;
					background-size: cover;
					z-index: -1;
					filter: blur(50px) brightness(120%) grayscale(60%);

					@media (max-width: 1024px) {
						display: none;
					}
				}
			}

			.col-xxl-9 {
				@media (min-width: 1650px) {
					width: 75%;
					padding-top: 1.5rem !important;
					padding-bottom: 1.5rem !important;
				}
			}

			.col-xxl-3 {
				@media (min-width: 1650px) {
					width: 25%;
					padding-top: 1.5rem !important;
					padding-bottom: 1.5rem !important;
				}
			}

			@media (max-width: 1650px) {
				.col-xxl-9 {
					width: 100%;
					padding-top: 1rem !important;
					padding-bottom: 1rem !important;
				}

				.col-xxl-3 {
					width: 100%;
					padding-top: 1rem !important;
					padding-bottom: 1rem !important;
				}
			}

			@media (max-width: 425px) {
				.col-xxl-9 {
					padding-top: 0.5 !important;
					padding-bottom: 0.5 !important;
				}

				.col-xxl-3 {
					padding-top: 0.5 !important;
					padding-bottom: 0.5 !important;
				}
			}
		}

		.update-profile-info {
			.tax-title {
				max-width: 170px;
				width: 100%;
				font-weight: 600;
				font-size: 17px;

				@media (max-width: 1440px) {
					font-size: 15px;
				}

				@media (max-width: 425px) {
					font-size: 14px;
				}
			}

			.tax-value {
				min-width: 80px;
				font-weight: 600;
				font-size: 17px;
				text-align: end;

				@media (max-width: 425px) {
					font-size: 14px;
				}
			}
		}

		.text-gray {
			color: #919191;
			font-weight: 600;

			@media (max-width: 1440px) {
				font-size: 13px;
			}
		}
	}
}

.z-1 {
	z-index: 1;
}

.relative {
	position: relative;
}

.view-edit-danger {
	top: 0px;
	right: 10px;
	transform: translate(-50%, 20%);
	color: #ff4b57;
}

.user-wrap-input {
	.user-input {
		font-size: 23px;
		font-weight: 600;
		color: #3c3c3c;
		padding: 8px 48px 8px 15px !important;

		@media (max-width: 1650px) {
			font-size: 22px;
		}

		@media (max-width: 992px) {
			max-width: 300px;
		}

		@media (max-width: 575px) {
			max-width: 100%;
		}
	}

	.view-edit-danger {
		top: 2px;
		right: 15px;
	}
}

.text-big {
	font-size: 20px;
}

.tab-form {
	.btn-common {
		@media (max-width: 1024px) {
			font-size: 15px;
		}

		@media (max-width: 768px) {
			font-size: 13px;
		}
	}
}
</style>
<style>
textarea.form-control {
	min-height: calc(5.5em + 0.75rem + 2px) !important;
}

.hideappearance input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	appearance: none;
}
</style>

<style lang="scss">
.px-remove {
	.multiselect-input {
		padding: 0 !important;
	}
}
</style>

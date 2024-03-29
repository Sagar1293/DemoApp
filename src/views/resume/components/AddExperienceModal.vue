<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container add_experience_modal" content-class="modal-content px-0 pb-0">
		<!-- close btn -->
		<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="modalShow = false">
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="closeIcon" />
			</span>
		</button>

		<!-- modal content -->
		<div class="modal__content">
			<!-- modal header -->
			<div class="modal-header">
				<h5 class="title-lg">
					{{ t('resume.experienceTitle') }}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body overflow-visible">
				<div class="row m-0">
					<div class="col-12">
						<!-- form -->
						<form class="theme-input tab-form">
							<div class="form-row">
								<!-- job title type -->
								<div class="form-group col-xl-4 col-lg-6">
									<label for="jobTitle">
										{{ t('fieldList.jobTitle') }}
									</label>

									<input
										id="jobTitle"
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.jobTitle',
											})
										"
										@input="jobTitleField.handleChange"
										@blur="jobTitleField.handleBlur"
										:value="jobTitleField.value"
									/>

									<p class="text-danger">
										{{ jobTitleField.errorMessage }}
									</p>
								</div>

								<!-- company name -->
								<div class="form-group col-xl-4 col-lg-6">
									<label for="companyName">
										{{ t('fieldList.companyName') }}
									</label>

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

								<!-- country -->
								<div class="form-group col-xl-4 col-lg-6">
									<label for="country">
										{{ t('fieldList.country') }}
									</label>

									<Multiselect
										id="country"
										class="form-group px-remove"
										trackBy="country_name"
										@input="countryField.handleChange"
										@blur="countryField.handleBlur"
										:placeholder="
											t('validation.selectField', {
												field: 'fieldList.country',
											})
										"
										:searchable="true"
										valueProp="referenceId"
										v-model="countryField.value"
										:options="countryOptions"
										label="country_name"
										mode="single"
										@change="selectCompanyCountry"
										:canDeselect="true"
									/>
									<!-- @click="removeCountry" -->

									<p class="text-danger">
										{{ countryField.errorMessage }}
									</p>
								</div>

								<!-- city -->
								<div class="form-group col-xl-4 col-lg-6">
									<label for="city">
										{{ t('fieldList.city') }}
									</label>

									<Multiselect
										id="city"
										class="form-group px-remove"
										trackBy="city_name"
										@input="cityField.handleChange"
										@blur="cityField.handleBlur"
										:placeholder="
											t('validation.selectField', {
												field: 'fieldList.city',
											})
										"
										:searchable="true"
										valueProp="referenceId"
										v-model="cityField.value"
										:options="cityOptions"
										label="city_name"
										mode="single"
										:canDeselect="true"
									/>
									<!-- @click="removeCity" -->

									<p class="text-danger">
										{{ cityField.errorMessage }}
									</p>
								</div>

								<!-- job start date -->
								<div class="form-group col-xl-4 col-lg-6">
									<label for="jobStartDate">
										{{ t('fieldList.startDate') }}
									</label>

									<v-date-picker
										id="jobStartDate"
										@input="startDateField.handleChange"
										@blur="startDateField.handleBlur"
										v-model="startDateField.value"
										:masks="{ input: 'DD.MM.YYYY' }"
									>
										<template v-slot="{ inputValue, inputEvents }">
											<input
												class="form-control"
												:value="inputValue"
												v-on="inputEvents"
												:placeholder="
													t('validation.selectField', {
														field: 'fieldList.startDate',
													})
												"
											/>
										</template>
									</v-date-picker>

									<p class="text-danger">
										{{ startDateField.errorMessage }}
									</p>
								</div>

								<!-- job end date -->
								<div class="form-group col-xl-4 col-lg-6">
									<label for="jobEndDate">
										{{ t('fieldList.endDate') }}
										({{ t('resume.keepBlankStillWorking') }})
									</label>

									<v-date-picker
										id="keepBlankStillWorking"
										@input="endDateField.handleChange"
										@blur="endDateField.handleBlur"
										v-model="endDateField.value"
										:masks="{ input: 'DD/MM/YYYY' }"
									>
										<template v-slot="{ inputValue, inputEvents }">
											<input
												class="form-control"
												:value="inputValue"
												v-on="inputEvents"
												:placeholder="
													t('validation.selectField', {
														field: 'fieldList.endDate',
													})
												"
											/>
										</template>
									</v-date-picker>

									<p class="text-danger">
										{{ endDateField.errorMessage }}
									</p>
								</div>
							</div>

							<!-- submit btn -->
							<button type="button" class="btn-common btn-red mt-2" @click="submitForm">
								{{ t('common.submit') }}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import moment from 'moment';
import Multiselect from '@vueform/multiselect';

export default {
	name: 'AddEmployerModal',

	props: {
		// modal status
		isModalShow: Object,

		// work detail id
		workDetailId: {
			default: null,
			type: Number,
		},
	},

	//components
	components: {
		FontAwesomeIcon,
		Multiselect,
	},

	setup(props, { emit }) {
		// ref vars
		const modalShow = ref(props.isModalShow);

		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const experienceSchema = yup.object({
			job_title: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.jobTitle',
					}),
				)
				.max(50),
			company_name: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyName',
					}),
				)
				.max(50),
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
			start_date: yup
				.date()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.startDate',
					}),
				),
			end_date: yup.date().nullable(),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: experienceSchema,
		});

		// form fields
		const jobTitleField = reactive(useField('job_title', undefined, { initialValue: null }));
		const companyNameField = reactive(useField('company_name', undefined, { initialValue: null }));
		const countryField = reactive(useField('countryId', undefined, { initialValue: null }));
		const cityField = reactive(useField('cityId', undefined, { initialValue: null }));
		const startDateField = reactive(useField('start_date', undefined, { initialValue: null }));
		const endDateField = reactive(useField('end_date', undefined, { initialValue: null }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch country options
			store.dispatch('country/getCountries');

			// fetch city options
			// store.dispatch('country/getCities');
		});

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
		// submit form - add work hour
		const submitForm = handleSubmit(async values => {
			// set date format
			values.start_date = moment(values.start_date).format('YYYY/MM/DD');
			values.end_date = values.end_date ? moment(values.end_date).format('YYYY/MM/DD') : null;

			// save the work details
			await store.dispatch('resume/addExperience', values).then(() => {
				modalShow.value = false;
			});

			emit('newExperience');

			return true;
		});

		//company detail select country and city
		const selectCompanyCountry = id => {
			if (id) {
				cityOptions.value = null;
				cityField.value = null;
				store.dispatch('country/getCities', id);
			} else {
				cityOptions.value = null;
				cityField.value = null;
			}
		};

		//remove value - Country
		// const removeCountry = event => {
		// 	if (event) {
		// 		countryField.value = null;
		// 	}
		// };

		//remove value - Company City
		// const removeCity = event => {
		// 	if(event){
		// 		cityField.value = null;
		// 	}
		// }

		return {
			// translate function
			t,

			// refs
			modalShow,

			// icons
			closeIcon,

			// form related
			formMeta,
			isSubmitting,
			submitForm,

			// fields
			jobTitleField,
			companyNameField,
			countryField,
			cityField,
			startDateField,
			endDateField,

			// computed
			countryOptions,
			cityOptions,
			selectCompanyCountry,

			//remove value from dropdown
			// removeCountry,
			// removeCity,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.add_experience_modal {
	padding: 0;

	.modal__content {
		padding: 0;
		max-height: calc(100vh - 4em);
		overflow: unset;

		.modal-header {
			padding: 15px 30px;
		}

		.modal-body {
			padding: 30px;
			overflow: scroll;
			margin-bottom: 20px;

			&::-webkit-scrollbar {
				display: none;
			}

			form {
				max-height: 60vh;

				.time__selector {
					padding: 9px 15px;
				}
			}
		}
	}

	@media (max-width: 576px) {
		.modal__content {
			.modal-header {
				display: block;
				padding: 20px;
			}
			.modal-body {
				padding: 20px;
			}
		}
	}
}
</style>
<style lang="scss">
.px-remove {
	.multiselect-input {
		padding: 0 !important;
	}
}
</style>

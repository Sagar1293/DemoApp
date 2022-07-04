<template>
	<!-- add job form -->
	<div class="add_job__form">
		<form class="tab-form">
			<!-- form fields -->
			<div class="form_part form-row">
				<!-- form title -->
				<div class="form-group col-12 p-0">
					<h5 class="title-lg">
						{{ t('job.postGig') }}
					</h5>
				</div>

				<!-- category -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="category"> {{ t('fieldList.category') }}<span>*</span> </label>

					<Multiselect
						id="category"
						class="form-group px-remove"
						trackBy="industry_name"
						@input="categoryField.handleChange"
						@blur="categoryField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.category',
							})
						"
						:searchable="true"
						valueProp="referenceId"
						v-model="categoryField.value"
						:options="industryOptions"
						mode="single"
						label="industry_name"
						:canDeselect="true"
					/>
					<!-- @click="removeCategoryField" -->

					<p class="text-danger">
						{{ categoryField.errorMessage }}
					</p>
				</div>

				<!-- gig title -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="gigTitle"> {{ t('fieldList.gigTitle') }}<span>*</span> </label>

					<input
						id="gigTitle"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.gigTitle',
							})
						"
						@input="gigTitleField.handleChange"
						@blur="gigTitleField.handleBlur"
						:value="gigTitleField.value"
					/>

					<p class="text-danger">
						{{ gigTitleField.errorMessage }}
					</p>
				</div>

				<!-- no of vacancies -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="noOfVacancy"> {{ t('fieldList.noOfVacancy') }}<span>*</span> </label>

					<input
						id="noOfVacancy"
						type="number"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.noOfVacancy',
							})
						"
						@input="vacancyField.handleChange"
						@blur="vacancyField.handleBlur"
						:value="vacancyField.value"
					/>

					<p class="text-danger">
						{{ vacancyField.errorMessage }}
					</p>
				</div>

				<!-- experience required -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="experienceRequired"> {{ t('fieldList.experienceRequired') }} ({{ t('common.years') }})<span>*</span> </label>

					<input
						id="experienceRequired"
						type="number"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.experienceRequired',
							})
						"
						@input="experienceField.handleChange"
						@blur="experienceField.handleBlur"
						:value="experienceField.value"
					/>

					<p class="text-danger">
						{{ experienceField.errorMessage }}
					</p>
				</div>

				<!-- gig mode -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="gigMode"> {{ t('fieldList.gigMode') }}<span>*</span> </label>

					<Multiselect
						id="gigMode"
						class="form-group"
						@input="gigModeField.handleChange"
						@blur="gigModeField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.gigMode',
							})
						"
						v-model="gigModeField.value"
						:options="gigModeOptions"
						mode="single"
						:canDeselect="true"
					/>
					<!-- @click="removeGigMode" -->

					<p class="text-danger">
						{{ gigModeField.errorMessage }}
					</p>
				</div>

				<!-- gig duration -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="gigDuration"> {{ t('fieldList.gigDuration') }}<span>*</span> </label>

					<input
						id="gigDuration"
						type="text"
						class="form-control"
						:placeholder="
							t('validation.enterField', {
								field: 'fieldList.gigDuration',
							})
						"
						@input="gigDurationField.handleChange"
						@blur="gigDurationField.handleBlur"
						:value="gigDurationField.value"
					/>

					<p class="text-danger">
						{{ gigDurationField.errorMessage }}
					</p>
				</div>

				<!-- salary offer -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="salaryOffer"> {{ t('fieldList.salaryOffer') }} ({{ t('common.inThousands') }}) </label>

					<Multiselect
						id="salaryOffer"
						class="form-group"
						@input="salaryOfferField.handleChange"
						@blur="salaryOfferField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.salaryOffer',
							})
						"
						v-model="salaryOfferField.value"
						:options="contractTypeOptions"
						mode="single"
						:canDeselect="true"
					/>
					<!-- @click="removeSalaryOffer" -->

					<p class="text-danger">
						{{ salaryOfferField.errorMessage }}
					</p>
				</div>

				<!-- apply before -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="applyBefore">
						{{ t('fieldList.applyBefore') }}
					</label>

					<v-date-picker
						id="applyBefore"
						@input="applyBeforeField.handleChange"
						@blur="applyBeforeField.handleBlur"
						v-model="applyBeforeField.value"
						:masks="{ input: 'DD.MM.YYYY' }"
						:min-date="new Date()"
					>
						<template v-slot="{ inputValue, inputEvents }">
							<input
								class="form-control"
								:value="inputValue"
								v-on="inputEvents"
								:placeholder="
									t('validation.selectField', {
										field: 'fieldList.date',
									})
								"
							/>
						</template>
					</v-date-picker>

					<p class="text-danger">
						{{ applyBeforeField.errorMessage }}
					</p>
				</div>

				<!-- qualification -->
				<!-- <div class="form-group col-xl-4 col-lg-6">
					<label for="permis">
						{{ t('fieldList.permit') }}
					</label>

					<Multiselect
						id="permit"
						class="form-group px-remove"
						trackBy="description"
						@input="permitField.handleChange"
						@blur="permitField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.permit',
							})
						"
						:searchable="true"
						valueProp="referenceId"
						v-model="permitField.value"
						:options="permitOptions"
						label="description"
						mode="tags"
						:hideSelected="false"
					/>
				</div> -->

				<!-- address -->
				<div class="form-group col-lg-6">
					<label for="address">
						{{ t('fieldList.address') }}
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

				<!-- location -->
				<div class="form-group col-xl-2 col-lg-6">
					<label for="location">
						{{ t('fieldList.location') }}
					</label>

					<Multiselect
						id="location"
						class="form-group px-remove"
						trackBy="country_name"
						@input="locationField.handleChange"
						@blur="locationField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.location',
							})
						"
						:searchable="true"
						valueProp="referenceId"
						v-model="locationField.value"
						:options="countryOptions"
						mode="single"
						label="country_name"
						:canDeselect="true"
						@change="changeCountry"
					/>
					<!-- @click="removeeLocation" -->

					<p class="text-danger">
						{{ locationField.errorMessage }}
					</p>
				</div>

				<!-- city -->
				<div class="form-group col-xl-2 col-lg-6">
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
						mode="single"
						label="city_name"
						:canDeselect="true"
					/>
					<!-- @click="removeCity" -->

					<p class="text-danger">
						{{ cityField.errorMessage }}
					</p>
				</div>

				<!-- zip code -->
				<div class="form-group col-xl-2 col-lg-6">
					<label for="zipCode">
						{{ t('fieldList.zipCode') }}
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

				<!-- job description -->
				<div class="form-group col-12">
					<label for="jobDescription">
						{{ t('fieldList.jobDescription') }}
					</label>

					<textarea
						class="form-control"
						name="job_description"
						id="jobDescription"
						cols="30"
						rows="5"
						@input="jobDesriptionField.handleChange"
						@blur="jobDesriptionField.handleBlur"
						:value="jobDesriptionField.value"
					></textarea>

					<p class="text-danger">
						{{ jobDesriptionField.errorMessage }}
					</p>
				</div>

				<div class="form-group col-12">
					<div class="form-row">
						<!-- skills -->
						<!-- <div class="form-group col-xl-8 col-lg-6">
							<div class="job_skills">
								<span v-for="(permit, index) in permitName" :key="index" class="job_skill">
									<span>{{ permit }}</span>
									<button type="button" @click="deletePermit(permit)">
										<FontAwesomeIcon :icon="deleteIcon" />
									</button>
								</span>
							</div>
						</div> -->
						<!-- add skill -->

						<div class="form-group col-lg-6 col-12">
							<label for="Permit"> {{ t('fieldList.permit') }} </label>
							<Multiselect
								id="permit"
								class="form-group px-remove multiselect-height"
								trackBy="description"
								@input="permitField.handleChange"
								@blur="permitField.handleBlur"
								:placeholder="
									t('validation.selectField', {
										field: 'fieldList.permit',
									})
								"
								:searchable="true"
								valueProp="referenceId"
								v-model="permitField.value"
								:options="permitOptions"
								label="description"
								mode="tags"
								:hideSelected="false"
							/>
							<!-- <Multiselect
								id="permit"
								class="form-group px-remove"
								:placeholder="
									t('validation.selectField', {
										field: 'fieldList.permit',
									})
								"
								v-model="tempPermit"
								:options="permitOptions"
								mode="single"
								valueProp="description"
								label="description"
								trackBy="description"
								:searchable="true"
								:canDeselect="false"
								:createTag="true"
								@change="tempPermitFunction"
								@click="removePermit"
							/> -->

							<!-- <button type="button" class="btn-common btn-lightred float-btn" @click="addSkill">+ {{ t('common.add') }}</button> -->
						</div>

						<!-- add skill -->
						<div class="form-group col-lg-6 col-12">
							<label for="skill"> {{ t('common.add') }} {{ t('fieldList.skill') }} </label>
							<Multiselect
								id="skill"
								class="form-group px-remove multiselect-height"
								trackBy="skill"
								@input="jobSkillsField.handleChange"
								@blur="jobSkillsField.handleBlur"
								:placeholder="
									t('validation.selectField', {
										field: 'fieldList.skill',
									})
								"
								:searchable="true"
								valueProp="referenceId"
								v-model="jobSkillsField.value"
								:options="skillOptions"
								label="skill"
								mode="tags"
								:hideSelected="false"
							/>
							<p class="text-danger">
								{{ jobSkillsField.errorMessage }}
							</p>

							<!-- <button type="button" class="btn-common btn-lightred float-btn" @click="addSkill">+ {{ t('common.add') }}</button> -->
						</div>
					</div>
				</div>

				<!-- <div class="col-xl-7 pe-3">
					<div class="pgp-title mb-3">
						<h5 class="title-md">Create Gig Advertisement</h5>
					</div>

					<div class="gig_advertise">
						<div class="d-flex justify-content-between align-items-center border-dash mb-3">
							<input type="text" placeholder="Set custom top row text" class="form-control border-0" />
							<div>
								<img src="@/assets/images/edit.png" />
							</div>
						</div>

						<div class="d-flex justify-content-between align-items-center border-dash mb-3">
							<input type="text" placeholder="Write gig title" class="form-control border-0" />

							<div>
								<img src="@/assets/images/edit.png" />
							</div>
						</div>

						<div class="d-flex justify-content-between align-items-center border-dash mb-3">
							<input type="text" placeholder="Select industry" class="form-control border-0" />
							<div>
								<img src="@/assets/images/edit.png" />
							</div>
						</div>

						<div class="d-flex justify-content-between align-items-center border-dash mb-3">
							<input type="text" placeholder="Set custom bottom row text" class="form-control border-0" />
							<div>
								<img src="@/assets/images/edit.png" />
							</div>
						</div>
					</div>
				</div> -->

				<!-- <div class="col-xl-5 ps-3">
					<div class="gig-box">
						<div class="d-flex flex-column justify-content-between h-100 p-3">
							<div class="d-flex justify-content-between">
								<div class="d-flex">
									<div class="mr-2"><img src="@/assets/images/pin-icon.png" alt="" />djgfsjh+</div>
									<div>
										<p class="text-xs fw-bold">
											Keikka avoinna 16.09.2021
										</p>
										<p class="text-dark fw-bolder lh-sm">
											Gig Title...
										</p>
										<p class="text-small fw-bold border-r-bottom text-dark">
											Industry
										</p>
										<p class="text-xs fw-bold">Region</p>
									</div>
								</div>
								<div>
									<div class="cursor-pointer gig-logo">
										<img src="/img/logo.e18302e1.png" class="img-fluid" alt="" />
									</div>
								</div>
							</div>

							<div class="d-flex justify-content-between align-items-center">
								<p class="text-light text-small fw-bolder">
									Toopakkumine Tyotarjous
								</p>
								<button class="cursor-pointer btn-common btn-red gig-box-btn">
									apply.way2work.fi
								</button>
							</div>
						</div>
					</div>
				</div> -->

				<!-- title -->
				<!-- <div class="form-row">
					<div class="form-group col-12">
						<div class="pgp-title mb-2">
							<h5 class="title-md">
								{{ t('job.addSkillTitle') }}
							</h5>
						</div>
					</div>
				</div> -->

				<div class="form-row align-items-end w-100">
					<!-- skills -->
					<!-- <div class="form-group col-xl-8 col-lg-6 mt-auto">
						<div class="job_skills">
							<span v-for="(skill, index) in skillName" :key="index" class="job_skill">
								<span>{{ skill }}</span>
								<button type="button" @click="deleteSkill(skill)">
									<FontAwesomeIcon :icon="deleteIcon" />
								</button>
							</span>

							<p class="text-danger">
								{{ jobSkillsField.errorMessage }}
							</p>
						</div>
					</div> -->
				</div>

				<div class="d-flex align-items-center justify-content-between">
					<div>
						<button type="button" @click="submitForm" class="btn-common btn-red mt-2">
							{{ t('job.postGig') }}
						</button>
					</div>
				</div>
			</div>

			<!-- add job skill -->
			<!-- <div class="form_part form-row mt-5 pt-4">
			</div> -->
		</form>
	</div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import { gigModeOptions, contractTypeOptions } from '@/utils/enums.js';

export default {
	name: 'UpdateProfile',

	components: {
		Multiselect,
		// FontAwesomeIcon,
	},

	setup() {
		document.title = 'Post New Gig - Way2Work';
		// ref
		const tempSkill = ref(null);
		const tempPermit = ref(null);

		// icons
		const deleteIcon = faTimes;
		const editIcon = faEdit;
		// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
		const stringRegExp = /^[a-zA-Z ]*$/;
		const alphaNumberRegExp = /^[0-9]{5}/;

		const skillName = ref([]);
		const permitName = ref([]);

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore();

		const cityOptions = ref([]);

		// global router
		const router = useRouter();

		// post gig schema validation
		const PostGigSchema = yup.object({
			industryId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.category',
					}),
				),
			job_title: yup
				.string()
				.nullable()
				.matches(stringRegExp, 'Job title is not valid.')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.gigTitle',
					}),
				)
				.max(50),
			vacancies: yup
				.number()
				.typeError('No. of Vacancies Add a Number')
				.optional()
				.notRequired()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.noOfVacancy',
					}),
				),
			experience: yup
				.number()
				.nullable()
				.typeError('experience must be a number type'),
			// .required(
			// 	t('validation.requiredField', {
			// 		field: 'fieldList.experience',
			// 	}),
			// ),
			job_mode: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.gigMode',
					}),
				),
			job_duration: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.gigDuration',
					}),
				)
				.max(50),
			salary_offer: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.salaryOffer',
					}),
				),
			apply_before: yup
				.date()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.applyBefore',
					}),
				),
			// qualificationId: yup
			// 	.number()
			// 	.nullable()
			// 	.notRequired()
			// 	.optional(),

			job_permits: yup
				.array()
				.nullable()
				.optional(),
			// .required(
			// 	t('validation.requiredField', {
			// 		field: 'fieldList.qualification',
			// 	}),
			// ),
			address: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.address',
					}),
				)
				.max(60),
			countryId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.location',
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
			zip_code: yup
				.string()
				.nullable()
				.matches(alphaNumberRegExp, 'Zip code is not valid')
				.min(5, 'Zip code must be at least 5 characters')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.zipCode',
					}),
				),
			job_description: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.jobDescription',
					}),
				)
				.max(255),
			job_skills: yup
				.array()
				.min(
					1,
					t('validation.minValue', {
						field: 'fieldList.skill',
						minLen: 1,
					}),
				)
				.required(
					t('validation.requiredField', {
						field: 'fieldList.skill',
					}),
				),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: PostGigSchema,
		});

		// form fields
		const categoryField = reactive(useField('industryId', undefined, { initialValue: null }));
		const gigTitleField = reactive(useField('job_title', undefined, { initialValue: null }));
		const vacancyField = reactive(useField('vacancies', undefined, { initialValue: null }));
		const experienceField = reactive(useField('experience', undefined, { initialValue: null }));
		const gigModeField = reactive(useField('job_mode', undefined, { initialValue: null }));
		const gigDurationField = reactive(useField('job_duration', undefined, { initialValue: null }));
		const salaryOfferField = reactive(useField('salary_offer', undefined, { initialValue: null }));
		const applyBeforeField = reactive(useField('apply_before', undefined, { initialValue: null }));
		// const qualificationField = reactive(useField('qualificationId', undefined, { initialValue: null }));
		const permitField = reactive(useField('job_permits', undefined, { initialValue: [] }));
		const addressField = reactive(useField('address', undefined, { initialValue: null }));
		const locationField = reactive(useField('countryId', undefined, { initialValue: null }));
		const cityField = reactive(useField('cityId', undefined, { initialValue: null }));
		const zipCodeField = reactive(useField('zip_code', undefined, { initialValue: null }));
		const jobDesriptionField = reactive(useField('job_description', undefined, { initialValue: null }));
		const jobSkillsField = reactive(useField('job_skills', undefined, { initialValue: [] }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch industry list
			store.dispatch('industry/getIndustries');

			// fetch country list
			store.dispatch('country/getCountries');

			// fetch city list
			// store.dispatch('country/getCities');

			// fetch qualifications
			// store.dispatch('qualification/getDefaultQualifications');
			//fetch get All Permit
			store.dispatch('qualification/getAllPermit');

			// fetch skill list
			store.dispatch('skill/getDefaultSkills');
		});

		/**
		 * Computed
		 * *******************************************************************
		 */
		// industry options
		const industryOptions = computed(() => store.getters['industry/getIndustryOptions']);

		// country options
		const countryOptions = computed(() => store.getters['country/getCountryOptions']);

		// city options
		// const cityOptions = computed(() => store.getters['country/getCitiesOptions']);
		// console.log(cityOptions.value, '====');
		// qualification Options
		// const qualificationOptions = computed(() => store.getters['qualification/getQualificationOptions']);
		const permitOptions = computed(() => store.getters['qualification/getPermitOptions']);

		// skill options
		// const skillOptions = computed(() => store.getters['skill/getSkillOptions']);
		const skillOptions = computed(() => store.getters['skill/getJobSkillOptions']);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// add skill
		const addSkill = () => {
			if (tempSkill.value !== null) {
				jobSkillsField.value.push(tempSkill.value);
			}
			tempSkill.value = null;
		};

		// delete skill
		const deleteSkill = skill => {
			let skillId = (skillOptions.value.find(x => x.skill === skill) || {}).referenceId;
			skillName.value = skillName.value.filter(x => x !== skill);
			jobSkillsField.value = jobSkillsField.value.filter(x => x !== skillId);
		};

		// delete permit
		const deletePermit = description => {
			let permitId = (permitOptions.value.find(x => x.description === description) || {}).referenceId;
			permitName.value = permitName.value.filter(x => x !== description);
			permitField.value = permitField.value.filter(x => x !== permitId);
		};

		// submit form - job post
		const submitForm = handleSubmit(async values => {
			values.apply_before = moment(values.apply_before).format('YYYY/MM/DD');
			console.log(values, '?????????');
			await store.dispatch('job/addNewJob', values).then(() => router.push({ name: 'ManageGig' }));
		});

		const changeCountry = event => {
			if (event) {
				cityOptions.value = null;
				cityField.value = null;
				fetchCityByCounrtyId(event);
			} else {
				cityOptions.value = null;
				cityField.value = null;
			}
		};

		//GET country wise city
		const fetchCityByCounrtyId = id => {
			store.dispatch('country/getCities', id).then(res => {
				cityOptions.value = res.data.reduce((acc, item) => {
					acc.push({ ...item, value: item.referenceId });

					return acc;
				}, []);
			});
		};

		const tempFunction = async e => {
			if (e !== null && !skillName.value.includes(e)) {
				let skillId = (skillOptions.value.find(x => x.skill === e) || {}).referenceId;
				skillName.value.push(e);
				jobSkillsField.value.push(skillId);
				tempSkill.value = null;
			}
			tempSkill.value = null;
		};

		const tempPermitFunction = async e => {
			if (e !== null && !permitName.value.includes(e)) {
				let permitId = (permitOptions.value.find(x => x.description === e) || {}).referenceId;
				permitName.value.push(e);
				permitField.value.push(permitId);
				tempPermit.value = null;
			}
			tempPermit.value = null;
		};

		//remove value - Category Field
		// const removeCategoryField = event => {
		// 	if (event) {
		// 		categoryField.value = null;
		// 	}
		// };

		//remove value - Gig Mode
		// const removeGigMode = event => {
		// 	if (event) {
		// 		gigModeField.value = null;
		// 	}
		// };

		//remove value - Salary Offer
		// const removeSalaryOffer = event => {
		// 	if (event) {
		// 		salaryOfferField.value = null;
		// 	}
		// };

		//remove value - Location
		// const removeeLocation = event => {
		// 	if (event) {
		// 		locationField.value = null;
		// 	}
		// };

		//remove value - City
		// const removeCity = event => {
		// 	if (event) {
		// 		cityField.value = null;
		// 	}
		// };

		//remove value - Permit
		// const removePermit = event => {
		// 	if (event) {
		// 		tempPermit.value = null;
		// 	}
		// };

		//remove value - Skill
		// const removeSkill = event => {
		// 	if (event) {
		// 		tempSkill.value = null;
		// 	}
		// };

		return {
			// translate function
			t,

			// refs
			gigModeOptions,
			contractTypeOptions,
			tempSkill,
			skillName,
			tempPermit,
			permitName,

			// icons
			deleteIcon,
			editIcon,

			// form related
			formMeta,
			isSubmitting,

			// field
			categoryField,
			gigTitleField,
			vacancyField,
			experienceField,
			gigModeField,
			gigDurationField,
			salaryOfferField,
			applyBeforeField,
			// qualificationField,
			permitField,
			addressField,
			locationField,
			cityField,
			zipCodeField,
			jobDesriptionField,
			jobSkillsField,

			// computed
			industryOptions,
			countryOptions,
			cityOptions,
			// qualificationOptions,
			permitOptions,
			skillOptions,

			// methods
			addSkill,
			deleteSkill,
			submitForm,
			fetchCityByCounrtyId,
			changeCountry,
			tempPermitFunction,
			deletePermit,
			tempFunction,

			//remove value from dropdown
			// removeCategoryField,
			// removeGigMode,
			// removeSalaryOffer,
			// removeeLocation,
			// removeCity,
			// removePermit,
			// removeSkill,
		};
	},
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.add_job__form {
	form {
		.form_part {
			width: 100%;
			padding: 50px 30px;
			background-color: #fff;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			border-radius: 20px;

			.border-dash {
				border: 1px dotted #a3a2a2;
				padding: 5px 15px;
				border-radius: 10px;

				input {
					font-weight: 600;
					color: #a3a2a2;
				}

				svg {
					color: #a3a2a2;
				}
			}

			.gig-box {
				background-image: url('~@/assets/images/gig-bg-img.jpg');
				background-color: #fff;
				background-repeat: no-repeat;
				box-shadow: 0px -4px 15px #ccc;
				height: 100%;
				border-radius: 20px;
				background-position: bottom;
				background-size: cover;

				@media (max-width: 1024px) {
					height: 290px;
					background-size: cover;
				}

				.gig-logo {
					max-width: 100px;
					width: 100%;
				}

				.border-r-bottom {
					border-bottom: 4px solid #e1001d;
					display: inline-block;
				}

				.gig-box-btn {
					padding: 8px;
					font-size: 12px;

					&:hover {
						background-color: #ff4b57;
						color: #fff !important;
					}
				}
			}

			.form-group {
				.text-big {
					font-size: 20px;
					margin-bottom: 20px;
				}

				label {
					font-weight: 500;
					font-size: 14px;

					span {
						color: $coloRed;

						&.black-icon {
							color: #000;
						}
					}
				}

				.form-control {
					// padding: 12px 15px;
					background-color: #fbfbfb;
					border: 1px solid $colorExLightGray;
					height: unset;
					// border-radius: 25px;
					position: relative;
					box-sizing: border-box;

					&:focus {
						border-color: $coloRed;
					}
				}

				.btn-lightred {
					position: absolute;
					top: 30px;
					right: 0;
					padding: 14px 20px;
					font-size: 14px;
				}

				.job_skills {
					width: 100%;
					padding: 12px 15px;
					background-color: #fbfbfb;
					border: 1px solid #eaeaea;
					border-radius: 25px;
					min-height: 50px;
					height: auto;
					display: flex;
					flex-wrap: wrap;

					.job_skill {
						background: $coloRed;
						color: #fff;
						padding: 5px 10px;
						padding-right: 20px;
						border-radius: 25px;
						display: flex;
						align-items: center;
						width: max-content;
						float: left;
						margin: 5px 5px;

						span {
							margin-right: 10px;
						}

						button {
							font-size: 10px;
							color: #fff;
						}
					}
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.account__form {
		padding: 20px 15px;

		form {
			.form-group {
				label {
					font-size: 12px;
				}

				.form-control {
					padding: 10px 15px;
					font-size: 14px;
				}

				.btn-lightred {
					padding: 13px 15px;
					font-size: 10px;
				}
			}
		}
	}
}

.job-img {
	max-width: 30px;
	height: 30px;
}

/* .multiselect-input {
	border-radius: 50px !important;
} */
</style>
<style>
.tab-form .is-open .multiselect-input,
.tab-form .multiselect-input {
	max-height: 1070px !important;
}
</style>
<style lang="scss">
.multiselect-tag {
	background-color: #ff4b57 !important;
	border-radius: 25px;
	padding: 10px;
}

.multiselect-tag i:before {
	color: #fff;
}

.px-remove {
	.multiselect-input {
		padding: 0 !important;
	}
}

// .multiselect-height {
// 	.multiselect-input {
// 		height: 70px !important;
// 	}
// }
</style>

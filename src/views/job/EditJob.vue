<template>
	<!-- add job form -->
	<div class="add_job__form">
		<form class="tab-form">
			<!-- form fields -->
			<div class="form_part form-row">
				<!-- form title -->
				<div class="form-group col-12 p-0">
					<h5 class="title-md">
						{{ t('job.editGig') }}
					</h5>
				</div>

				<!-- category -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="category"> {{ t('fieldList.category') }}<span>*</span> </label>

					<Multiselect
						id="editCategory"
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
					<!-- @click="removeCategory" -->

					<p class="text-danger">
						{{ categoryField.errorMessage }}
					</p>
				</div>

				<!-- gig title -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="gigTitle"> {{ t('fieldList.gigTitle') }}<span>*</span> </label>

					<input
						id="editGigTitle"
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
						id="editnoOfVacancy"
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
						id="editExperienceRequired"
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

					<!-- <p class="text-danger">
						{{ experienceField.errorMessage }}
					</p> -->
				</div>

				<!-- gig mode -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="gigMode"> {{ t('fieldList.gigMode') }}<span>*</span> </label>

					<Multiselect
						id="editGigMode"
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
						id="editGigDuration"
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
						id="editSalaryOffer"
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
						id="editApplyBefore"
						@input="applyBeforeField.handleChange"
						@blur="applyBeforeField.handleBlur"
						v-model="applyBeforeField.value"
						:masks="{ input: 'DD.MM.YYYY' }"
						:min-date="new Date()"
					>
						<template v-slot="{ inputValue, inputEvents }">
							<input class="form-control" :value="inputValue" v-on="inputEvents" />
						</template>
					</v-date-picker>

					<p class="text-danger">
						{{ applyBeforeField.errorMessage }}
					</p>
				</div>

				<!-- city -->
				<div class="form-group col-xl-4 col-lg-6">
					<label for="city">
						{{ t('fieldList.jobPostStatus') }}
					</label>

					<Multiselect
						id="editPostStatus"
						class="form-group"
						@input="statusField.handleChange"
						@blur="statusField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.jobPostStatus',
							})
						"
						v-model="statusField.value"
						:options="jobPostStatus"
						mode="single"
						:canDeselect="true"
					/>
					<!-- @click="removeEditPostStatus" -->

					<p class="text-danger">
						{{ statusField.errorMessage }}
					</p>
				</div>

				<!-- qualification -->
				<!-- <div class="form-group col-xl-4 col-lg-6">
					<label for="editpermit">
						{{ t('fieldList.permit') }}
					</label>

					<Multiselect
						id="editpermit"
						class="form-group"
						trackBy="description"
						@input="permitField.handleChange"
						@blur="permitField.handleBlur"
						:placeholder="
							t('validation.selectField', {
								field: 'fieldList.qualification',
							})
						"
						:searchable="true"
						valueProp="referenceId"
						v-model="permitField.value"
						:options="permitOptions"
						mode="tags"
						label="description"
						:canDeselect="true"
					/>
				</div> -->

				<!-- address -->
				<div class="form-group col-lg-6">
					<label for="address">
						{{ t('fieldList.address') }}
					</label>

					<input
						id="editAddress"
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
					<!-- @click="removeItem" -->

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
						id="editCity"
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
						id="editZipCode"
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
						id="editJobDescription"
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
							<label for="Permit"> Permit </label>
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
								id="editpermit"
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

							<!-- <Multiselect
								id="editpermit"
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
								id="editSkill"
								class="form-group px-remove"
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
							<!-- <Multiselect
							id="editSkill"
							class="form-group px-remove"
							:placeholder="
								t('validation.selectField', {
									field: 'fieldList.skill',
								})
							"
							v-model="tempSkill"
							:options="skillOptions"
							trackBy="skill"
							mode="single"
							label="skill"
							valueProp="skill"
							:searchable="true"
							:canDeselect="false"
							:createTag="true"
							@change="tempFunction"
							@click="removeSkill"
						/> -->
							<p class="text-danger">
								{{ jobSkillsField.errorMessage }}
							</p>

							<!-- <button type="button" class="btn-common btn-lightred float-btn" @click="addSkill">+ {{ t('common.add') }}</button> -->
						</div>
					</div>
				</div>

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
								<span>
									{{ skill }}
								</span>
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

				<!-- post job btn -->
				<button type="button" @click="submitForm" class="btn-common btn-red mt-2">
					{{ t('job.editGig') }}
				</button>
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
import { useRoute, useRouter } from 'vue-router';
import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import { gigModeOptions, contractTypeOptions, jobPostStatus } from '@/utils/enums.js';

export default {
	name: 'UpdateProfile',

	components: {
		Multiselect,
		// FontAwesomeIcon,
	},

	setup() {
		document.title = 'Edit Gig - Way2Work';
		// ref
		const tempSkill = ref(null);
		const tempPermit = ref(null);
		//regx
		// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
		const stringRegExp = /^[a-zA-Z ]*$/;
		const alphaNumberRegExp = /^[0-9]{5}/;
		// icons
		const deleteIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore();

		const cityOptions = ref([]);

		const skillName = ref([]);
		const permitName = ref([]);

		// global router
		const router = useRouter();

		// current route
		const route = useRoute();

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
			job_status: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.jobPostStatus',
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
		const { meta: formMeta, handleSubmit, isSubmitting, setValues } = useForm({
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
		const statusField = reactive(useField('job_status', undefined, { initialValue: null }));
		const zipCodeField = reactive(useField('zip_code', undefined, { initialValue: null }));
		const jobDesriptionField = reactive(useField('job_description', undefined, { initialValue: null }));
		const jobSkillsField = reactive(useField('job_skills', undefined, { initialValue: [] }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch current job detail
			fetchJobDetail();

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

		// qualification Options
		// const qualificationOptions = computed(() => store.getters['qualification/getQualificationOptions']);

		//permits computed
		const permitOptions = computed(() => store.getters['qualification/getPermitOptions']);

		// skill options
		// const skillOptions = computed(() => store.getters['skill/getSkillOptions']);
		const skillOptions = computed(() => store.getters['skill/getJobSkillOptions']);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch job details
		const fetchJobDetail = async () => {
			await store.dispatch('job/getJobById', route.params.id).then(res => {
				const data = res.data;
				fetchCityByCounrtyId(data.countryReferenceId);
				skillName.value = data.skills.reduce((acc, item) => {
					acc.push(item.reference && item.reference.skill);
					return acc;
				}, []);

				permitName.value = data.permits.reduce((acc, item) => {
					acc.push(item.reference && item.reference.description);
					return acc;
				}, []);

				setValues({
					industryId: data.industryReferenceId,
					job_title: data.job_title,
					vacancies: data.vacancies,
					experience: data.experience,
					job_mode: data.job_mode,
					job_duration: data.job_duration,
					salary_offer: data.salary_offer,
					apply_before: data.apply_before,
					// qualificationId: data.qualificationId,
					address: data.address,
					countryId: data.countryReferenceId,
					cityId: data.cityReferenceId,
					zip_code: data.zip_code,
					job_description: data.job_description,
					job_status: data.job_status,
					job_permits: data.permits.reduce((acc, item) => {
						console.log(item.reference.description, '<><><><><><><><>');
						acc.push(item.reference.referenceId);
						return acc;
					}, []),
					job_skills: data.skills.reduce((acc, item) => {
						acc.push(item.reference.referenceId);
						return acc;
					}, []),
				});
			});
		};

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

		const changeCountry = event => {
			if (event) {
				console.log(event, 'dsfdfsdfsd');
				cityOptions.value = null;
				cityField.value = null;
				fetchCityByCounrtyId(event);
			} else {
				cityOptions.value = null;
				cityField.value = null;
			}
			// cityOptions.value = null;
			// cityField.value = null;
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

		// submit form - job post
		const submitForm = handleSubmit(async values => {
			values.apply_before = moment(values.apply_before).format('YYYY/MM/DD');
			await store
				.dispatch('job/updateJob', {
					payload: values,
					id: route.params.id,
				})
				.then(() => {
					router.push({ name: 'ManageGig' });
				});
		});

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

		//remove value - Category
		// const removeCategory = event => {
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

		//remove value - Edit Post Status
		// const removeEditPostStatus = event => {
		// 	if (event) {
		// 		statusField.value = null;
		// 	}
		// };

		//remove value - Location
		// const removeItem = event => {
		// 	if (event) {
		// 		locationField.value = null;
		// 	}
		// };

		// remove value - City
		// const removeCity = event => {
		// 	if (event) {
		// 		cityField.value = null;
		// 	}
		// };

		//remove Value - Permit
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
			jobPostStatus,
			tempSkill,
			skillName,
			tempPermit,
			permitName,

			// icons
			deleteIcon,

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
			statusField,
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
			tempFunction,
			fetchCityByCounrtyId,
			changeCountry,
			deletePermit,
			tempPermitFunction,

			//remove value from dropdown
			// removeCategory,
			// removeGigMode,
			// removeSalaryOffer,
			// removeEditPostStatus,
			// removeItem,
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

.add_job__form {
	form {
		.form_part {
			width: 100%;
			padding: 50px 30px;
			background-color: #fff;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			border-radius: 20px;

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
					padding: 8px 15px;
					background-color: #fbfbfb;
					border: 1px solid $colorExLightGray;
					height: unset;
					border-radius: 10px;
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
	padding: 9px;
}

.multiselect-tag i:before {
	color: #fff;
}

.px-remove {
	.multiselect-input {
		padding: 0 !important;
	}
}
</style>

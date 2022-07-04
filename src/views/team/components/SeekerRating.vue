<template>
	<div class="invoice__list card-space">
		<div class="seeker-rating">
			<!-- viewing profile heading -->
			<div class="pph-left d-sm-flex justify-content-sm-between flex-xl-nowrap flex-wrap mb-lg-4 mb-sm-3">
				<h5 class="title-lg text-black-50 mb-md-0 mb-3">{{ t('seekerRating.viewing_profile') }}</h5>
				<span v-if="seekerRatingDetails.send_job_alert">
					<h5 class="fn15">
						<!-- {{ seekerRatingDetails.user && seekerRatingDetails.user.full_name }} is currently seeking for gigs, -->
						{{ displayUserNameExtract }} {{ t('seekerRating.is_currently_seeking_for_gigs') }},
						<a href="#" class="text-red">{{ t('seekerRating.click_here_to_offer') }}</a>
						.
					</h5>
				</span>
			</div>

			<div class="row mb-3">
				<div class="col-lg-3 col-sm-6 col-12">
					<div class="user-wrap-input">
						<span class="pofile-inputs border py-1 px-3 rounded-md d-block user-input">{{ displayUserNameExtract }}</span>
					</div>
				</div>
			</div>

			<div class="d-flex align-items-center mb-4">
				<span v-for="(item, index) in 5" :key="index">
					<div class="ml-lg-2">
						<a>
							<FontAwesomeIcon :icon="startIcon" :class="ratingAvg > index ? 'fill-star' : 'fill-star-dark'" />
						</a>
					</div>
				</span>
			</div>

			<div class="update-profile-card p-sm-4 p-2 mt-1 mb-3">
				<div class="form-group mb-0 d-lg-flex main-profile-card">
					<div class="dash-user-profile-img rounded-circle position-relative">
						<div class="h-100">
							<img :src="profilePic" class="img-fluid" alt="err" />
						</div>
					</div>

					<div class="card-space mb-0 ms-lg-3 px-4 py-0 z-1 overflow-hidden">
						<div class="row">
							<div class="col-xxl-9 py-4">
								<h5 class="text-big">{{ t('seekerRating.profile_details') }}</h5>
								<div class="row">
									<!-- gender -->
									<div class="form-group col-xl-3 col-lg-6">
										<label for="gender" class="d-block"> {{ t('fieldList.gender') }} </label>
										<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displaygenderField }}</span>
									</div>

									<!-- date of birth -->
									<div class="form-group col-xl-3 col-lg-6 px-xl-2">
										<label for="dob" class="d-block"> {{ t('fieldList.dob') }} </label>
										<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displaydobField }}</span>
									</div>

									<!-- bank name -->
									<div class="form-group col-xl-3 col-lg-6 px-xl-2">
										<label for="ssn" class="d-block">
											{{ t('fieldList.ssn') }}
										</label>
										<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displayssnField }}</span>
									</div>

									<!-- mobile number -->
									<div class="form-group col-xl-3 col-lg-6">
										<label for="mobilePhone" class="d-block"> {{ t('fieldList.mobile') }} </label>
										<div class="hideappearance">
											<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displaymobileField }}</span>
										</div>
									</div>

									<!-- current address -->
									<div class="form-group col-xl-6 col-lg-6 pe-xl-2">
										<label for="address" class="d-block"> {{ t('fieldList.cAddress') }} </label>
										<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displayaddressField }}</span>
									</div>

									<!-- residence - country -->
									<div class="form-group col-xl-3 col-lg-6 px-xl-2">
										<label for="residence" class="d-block"> {{ t('fieldList.residence') }} </label>
										<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displaycountryField }}</span>
									</div>

									<!-- nationality -->
									<div class="form-group col-xl-3 col-lg-6">
										<label for="nationality" class="d-block"> {{ t('fieldList.city') }} </label>
										<span class="pofile-inputs border py-2 px-3 rounded-md d-block">{{ displaynationalityField }}</span>
									</div>
								</div>
							</div>
							<div class="col-xxl-3 relative">
								<div class="d-flex flex-column justify-content-end h-100 bg-img">
									<div v-if="seekerRatingDetails.user && seekerRatingDetails.user.verified">
										<!-- <p class="text-gray text-end mb-1 fn15">Tax card updated on 01.06.2022</p> -->
										<p class="text-gray text-end uppercase fn16">{{ t('leProfile.leAccount.verifiedUser') }}</p>
									</div>
									<div v-else>
										<p class="text-gray text-end uppercase fn16">{{ t('seekerRating.not_verified_user') }}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- verified user  -->
			<div class="row justify-content-center">
				<div class="col-xl-12">
					<div class="my-lg-5 my-3 rating-box">
						<div class="row">
							<div class="col-lg-3 col-md-6 col-12">
								<div class="d-md-block d-flex">
									<span v-if="displayRecommendExtract == '*****'">
										<h2>{{ displayRecommendExtract }}</h2>
									</span>
									<span v-else>
										<h2>{{ displayRecommendExtract }}%</h2>
									</span>
									<p class="ml-md-0 ml-2 title-xl-base">{{ t('seekerRating.recommend_this_light_entrepreneur') }}</p>
								</div>
							</div>

							<div class="col-lg-3 col-md-6 col-12">
								<div v-if="displayratingAvgExtract == '*****'">
									<h2>{{ displayRecommendExtract }}</h2>
								</div>
								<div class="my-md-0 my-3" v-else>
									<span v-if="ratingAvg <= 33" class="d-md-block d-flex">
										<h2>{{ seekerRatingDetails.rating_avg.toFixed(2) || 0 }}%</h2>
										<p class="ml-md-0 ml-2 title-xl-base">{{ t('seekerRating.neutral') }}</p>
									</span>
									<span v-else-if="ratingAvg <= 66">
										<h2>{{ seekerRatingDetails.rating_avg || 0 }}%</h2>
										<p class="ml-md-0 ml-2 title-xl-base">{{ t('seekerRating.good') }}</p>
									</span>
									<span v-else>
										<h2>{{ seekerRatingDetails.rating_avg || 0 }}%</h2>
										<p class="ml-md-0 ml-2 title-xl-base">{{ t('seekerRating.very_good') }}</p>
									</span>
								</div>
							</div>

							<div class="col-lg-6 col-12">
								<div>
									<!-- {{ processFlag }} -->
									<span v-if="seekerRatingDetails.completed_jobs === 0 || !processFlag">
										<p>{{ t('seekerRating.you_can_leave_a_review_after_this_light_entrepreneur_has_finished_one_of_your_gigs') }}</p>
										<button class="btn-common grey-edit-bg mt-2 mb-2" disabled>
											{{ t('seekerRating.leave_a_review') }}
										</button>
									</span>
									<span v-else-if="seekerRatingDetails.remainingRating == 0">
										<p>{{ t('seekerRating.this_light_entrepreneur_has_done') }} {{ seekerRatingDetails.completed_jobs }} {{ t('seekerRating.of_your_gigs') }}</p>
										<button class="btn-common grey-edit-bg mt-2 mb-2" disabled>
											{{ t('seekerRating.leave_a_review') }}
										</button>
									</span>
									<span v-else>
										<p>{{ t('seekerRating.this_light_entrepreneur_has_done') }} {{ seekerRatingDetails.completed_jobs }} {{ t('seekerRating.of_your_gigs') }}</p>
										<!-- <p class="fw-bold my-2">Click on star to write a review.</p> -->
										<div>
											<!-- <span @click="ratingReviewModalShow(seekerRatingDetails.id)">
												<a>
													<FontAwesomeIcon :icon="fillStarIcon" class="fill-star" />
												</a>
											</span> -->
											<button class="btn-common btn-red mt-2 mb-2" @click="ratingReviewModalShow(seekerRatingDetails.id)">
												{{ t('seekerRating.leave_a_review') }}
											</button>
										</div>
									</span>
									<!-- <span v-if="displayStarDoneExtract">
										<span v-for="(item, index) in 5" :key="index">
											<a>
												<FontAwesomeIcon :icon="fillStarIcon" :class="seekerRatingDetails.rating_avg > index ? 'fill-star' : 'fill-star-dark'" />
											</a>
											
										</span>
									</span>
									<span v-else>
										*****
									</span> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- reviews accordion -->
			<div>
				<p class="fw-bold title-sm mb-4 mt-lg-0 mt-2">{{ t('seekerRating.latestReviews') }}</p>
				<!-- <div v-if="!displayLatestReviewsExtract">
					<h5 class="text-center">In order to view this information LE needs to accept your request</h5>
				</div>
				<div v-else> -->
				<div v-if="seekerRatingDetails.seeker_rating && seekerRatingDetails.seeker_rating.length > 0">
					<div :key="i" v-for="(item, i) in seekerRatingDetails.seeker_rating">
						<div>
							<h2>
								<div @click="openTable(i, item)">
									<div class="review-accordion flex-sm-nowrap flex-wrap">
										<div class="d-flex review-width">
											<div class="d-flex align-items-center path-width">
												<span v-if="item.job?.company?.user?.file_path">
													<div class="review-user">
														<img :src="item.job && item.job.company && item.job.company.user && item.job.company.user.file_path" alt="" class="img-fluid h-100" />
													</div>
												</span>
												<span v-else>
													<div class="review-user">
														<img src="@/assets/images/icon_png.png" alt="" class="img-fluid h-100" />
													</div>
												</span>
												<div class="ms-sm-4 ms-1">
													<p class="mt-sm-0 my-sm-0 my-1 title-base">
														{{ (item.job && item.job.company && item.job.company.company_name) || 'Unnamed user' }} {{ t('seekerRating.leftReview') }}
													</p>
													<p class="mt-sm-0 my-sm-0 my-1 title-base">{{ dateFormat(item.created_at) }}</p>
												</div>
												<!-- {{ (item.job && item.job.company && item.job.company.user &&
																item.job.company.user.full_name) || 'Unnamed user' -->
											</div>

											<div class="d-flex align-items-center mx-xl-0 mx-sm-2">
												<span v-for="(items, index) in 5" :key="index" class="me-1">
													<a>
														<FontAwesomeIcon :icon="fillStarIcon" class="star-wrap" :class="item.rate > index ? 'fill-star' : 'fill-star-dark'" />
													</a>
												</span>
											</div>
										</div>
										<!-- <p class="ml-xl-4 title-xl-base	seeker-text-elipsis">{{ item.comment }}</p> -->
										<span v-if="processFlag">
											<div class="ml-auto arrow-icon">
												<a>
													<FontAwesomeIcon :icon="arrowDown" v-if="tableIndex !== i" class="arrowIcon" />
												</a>
												<a>
													<FontAwesomeIcon :icon="arrowUp" v-if="tableIndex === i" class="arrowIcon" />
												</a>
											</div>
										</span>
										<span v-else>
											<p class="review-text ms-2 mt-sm-0 mt-2">{{ t('seekerRating.request_access_and_wait_for_approval_to_read_the_full_review') }}</p>
										</span>
									</div>
								</div>
							</h2>
							<span v-if="processFlag">
								<div v-if="i === tableIndex" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
									<div class="accordion-body">
										{{ item.comment }}
									</div>
								</div>
							</span>
						</div>
					</div>
				</div>
				<div v-else>
					<div class="text-center p-4">{{ t('seekerRating.noReviewsAvailable') }}</div>
				</div>
				<!-- </div> -->
			</div>
		</div>
	</div>
	<!-- Upload my document -->
	<Suspense v-if="ratingReviewModal.value">
		<template #default>
			<company-rating-modal v-model:isModalShow="ratingReviewModal" @newDocumentUploaded="fetchJobSeekerRating" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronRight, faChevronUp, faStar, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
// import { useRouter } from 'vue-router';
import { computed, onMounted, ref, watch, reactive, defineAsyncComponent } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { dateFormat } from '@/utils/mixins';
import { genderOptions } from '@/utils/enums.js';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
const CompanyRatingModal = defineAsyncComponent(async () => {
	return import('@/views/team/components/CompanyRatingModal.vue' /* webpackChunkName:"UploadMyDocument" */);
});
// import Multiselect from '@vueform/multiselect';

export default {
	name: 'SeekerRating',

	// components
	components: {
		FontAwesomeIcon,
		// Multiselect,
		DefaultLoader,
		CompanyRatingModal,
	},

	setup() {
		// icon
		const fillStarIcon = faStar;
		const startIcon = faStar;
		const editIcon = faEdit;
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const rightIcon = faChevronRight;
		const userAge = ref(null);
		const tableIndex = ref(null);
		const ratingAvg = ref(null);
		const profilePic = ref(null);
		const docFilePic = ref(null);
		const isRatingReviewModal = ref(false);
		// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
		// const phoneRegExp = /([+ ]*)\d{3}([- ]*)\d{3}/;
		// const phoneRegExp = /^([+]?\d{2})?\d{8}$/;
		const phoneRegExp = /^([+])?(\d{10,16}$)/;
		// const stringRegExp = /^[a-zA-Z ]*$/;
		const stringRegExp = /^([A-Za-zÀ-ÖØ-öø-ÿ]+\s){2}([A-Za-zÀ-ÖØ-öø-ÿ]+)$/;
		const alphaNumberRegExp = /^[a-zA-Z0-9]*$/;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore();

		// // global router
		// const router = useRouter();
		// global route
		const route = useRoute();

		// form schema validation
		const profileSchema = yup.object({
			full_name: yup
				.string()
				.matches(/^([A-Za-zÀ-ÖØ-öø-ÿ]+\s){1,2}([A-Za-zÀ-ÖØ-öø-ÿ]+)$/, 'Full Name is not valid')
				.min(2, 'Full name must be at least 2 characters')
				.max(60),

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
				.typeError('Dob field is required.')
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
			countryId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.country',
					}),
				),
			nationalityId: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.city',
					}),
				),
			mobile: yup
				.string()
				.typeError('Mobile number is required.')
				.matches(phoneRegExp, 'Mobile number is not valid')
				.max(15, 'Mobile number must be at most 16 characters'),
			// phone_number: yup
			// 	.string()
			// 	.typeError('Home number is required.')
			// 	.matches(phoneRegExp, 'Home number is not valid')
			// 	.max(15, 'Home Number must be at most 16 characters'),
			ssn: yup
				.string()
				.typeError('SSN number is required.')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.ssn',
					}),
				)
				// .matches(stringRegExp, 'ssn number is not valid')
				.max(60),
			other_earnings: yup
				.number()
				.nullable()
				.typeError('Other earnings is required.')
				.typeError('Other earnings number must be a number')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.otherEarnings',
					}),
				),
			bank_name: yup
				.string()
				.typeError('Bank name is required.')
				.typeError('Bank name must be at least 2 characters')
				.required(
					t('validation.requiredField', {
						field: 'fieldList.bankName',
					}),
				)
				// .matches(stringRegExp, 'Bank Name is not valid')
				.min(2, 'Bank name must be at least 2 characters')
				.max(60, 'Bank name more then at least 60 characters'),

			account_number: yup
				.string()
				.typeError('Account number is reqiured.')
				.matches(alphaNumberRegExp, 'Account number is not valid')
				.max(31),
			bic_number: yup
				.string()
				.typeError('Bic number is reqiured.')
				.matches(alphaNumberRegExp, 'Bic number is not valid')
				.max(31),
			profile_image: yup.mixed().notRequired(),
			// doc_image: yup.mixed().notRequired(),
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
		const { meta: formMeta, isSubmitting, setValues } = useForm({
			validationSchema: profileSchema,
		});

		// form fields
		const fullNameField = reactive(useField('full_name', undefined, { initialValue: null }));
		const genderField = reactive(useField('gender', undefined, { initialValue: null }));
		const dobField = reactive(useField('dob', undefined, { initialValue: '' }));
		const addressField = reactive(useField('address', undefined, { initialValue: null }));
		const countryField = reactive(useField('countryId', undefined, { initialValue: null }));
		const nationalityField = reactive(useField('nationalityId', undefined, { initialValue: null }));
		const mobileField = reactive(useField('mobile', undefined, { initialValue: null }));
		// const homePhoneField = reactive(useField('phone_number', undefined, { initialValue: null, validateOnValueUpdate: false }));
		const ssnField = reactive(useField('ssn', undefined, { initialValue: null, validateOnValueUpdate: false }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch current users educations
			fetchJobSeekerRating();
			// fetch country options
			store.dispatch('country/getCountries');
		});

		/**
		 * Computed
		 * *******************************************************************
		 */
		// show upload my document model
		const ratingReviewModal = computed({
			get() {
				return isRatingReviewModal;
			},

			set(val) {
				isRatingReviewModal.value = val;
			},
		});

		//get seeker rating details
		const seekerRatingDetails = computed(() => store.state.job.getSeekerRatingDetails);
		// user name extract
		const displayUserNameExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && seekerRatingDetails.value.user.full_name;
			} else {
				return `${seekerRatingDetails.value.user && seekerRatingDetails.value.user.full_name.substr(0, 3)} *****`;
			}
		});

		// gender name
		const displaygenderField = computed(() => {
			return seekerRatingDetails.value?.user && seekerRatingDetails.value?.user?.gender;
			// if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
			// } else {
			// 	return '*****';
			// }
		});
		//dob extraxt
		const displayDOBExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && dateFormat(seekerRatingDetails.value.user.dob);
			} else {
				return '*****';
			}
		});

		//dob extraxt
		const displayEmailExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && seekerRatingDetails.value.user.email;
			} else {
				return `${seekerRatingDetails.value.user && seekerRatingDetails.value.user.full_name.substr(0, 3)} *****`;
			}
		});

		//Age extraxt
		const displayAgeExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return userAge;
			} else {
				return '*****';
			}
		});

		//Gender extraxt
		const displayGenderExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.user && seekerRatingDetails.user.gender;
			} else {
				return '*****';
			}
		});

		// dob filed
		const displaydobField = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && dateFormat(seekerRatingDetails.value.user.dob);
			} else {
				return '*****';
			}
		});
		// ssn field
		const displayssnField = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && seekerRatingDetails.value.ssn;
			} else {
				return '*****';
			}
		});

		// mobileField
		const displaymobileField = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.mobile;
			} else {
				return '*****';
			}
		});

		// addressField
		const displayaddressField = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.address;
			} else {
				return '*****';
			}
		});

		const displaycountryField = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && seekerRatingDetails.value.user.countryReference && seekerRatingDetails.value.user.countryReference.country_name;
			} else {
				// return `${seekerRatingDetails.value.user && seekerRatingDetails.value.user.countryReference && seekerRatingDetails.value.user.countryReference.country_name}`;

				if (seekerRatingDetails.value?.user?.countryReference) {
					return `${seekerRatingDetails.value.user && seekerRatingDetails.value.user.countryReference && seekerRatingDetails.value.user.countryReference.country_name}`;
				} else {
					return '';
				}
			}
		});

		const displaynationalityField = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.user && seekerRatingDetails.value.user.cityReference && seekerRatingDetails.value.user.cityReference.city_name;
			} else {
				// return `${seekerRatingDetails.value.user && seekerRatingDetails.value.user.cityReference && seekerRatingDetails.value.user.cityReference.city_name}`;

				if (seekerRatingDetails.value?.user?.cityReference) {
					return `${seekerRatingDetails.value.user && seekerRatingDetails.value.user.cityReference && seekerRatingDetails.value.user.cityReference.city_name}`;
				} else {
					return '';
				}
			}
		});

		//gig done extraxt
		const displayGigDoneExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.completed_jobs;
			} else {
				return '*****';
			}
		});

		//MemberSince done extraxt
		const displayMemberSinceExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return dateFormat(seekerRatingDetails.created_at);
			} else {
				return '*****';
			}
		});

		//Reviews done extraxt
		const displayReviewsExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.seeker_rating && seekerRatingDetails.seeker_rating.length;
			} else {
				return '*****';
			}
		});
		// recommend extraxct
		const displayRecommendExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return seekerRatingDetails.value.recommend;
			} else {
				return '*****';
			}
		});
		// ratingAvg extraxct
		const displayratingAvgExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return ratingAvg;
			} else {
				return '*****';
			}
		});
		// Latest Reviews
		const displayLatestReviewsExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return ratingAvg;
			} else {
				return false;
			}
		});
		//star hide
		const displayStarExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return true;
			} else {
				return false;
			}
		});

		//star hide
		const displayStarDoneExtract = computed(() => {
			if (store.state.job.getSeekerRatingDetails.profile_access_flag) {
				return true;
			} else {
				return false;
			}
		});

		// get country options
		const countryOptions = computed(() => store.getters['country/getCountryOptions']);

		// get city options
		const cityOptions = computed(() => store.getters['country/getCitiesOptions']);

		const processFlag = computed(() => store.state.job.getSeekerRatingDetails.profile_access_flag);
		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch job seeker proposals
		const fetchJobSeekerRating = async () => {
			console.log('sdjfbasdjfajdsfasdfasdfa');
			store.dispatch('job/getComapnyJobSeekerRating', route.params.id).then(res => {
				const data = res.data;
				profilePic.value = data?.user?.file_path ?? null;
				docFilePic.value = data.taxCard_file_path ?? null;
				ratingAvg.value = data.rating_avg ?? 0;
				// ratingAvg.value = 5
				if (data?.user?.countryReferenceId) {
					fetchCityCountryWise(data?.user?.countryReferenceId);
				}
				setValues({
					full_name: data?.user?.full_name,
					gender: data?.user?.gender,
					dob: data?.user?.dob,
					address: data?.address,
					countryId: data?.user?.countryReferenceId,
					nationalityId: data?.user?.cityReferenceId,
					mobile: data?.mobile,
					ssn: data?.ssn,
					// // phone_number: data.phone_number ?? null,
					// bank_name: data.jobSeeker?.bank_name,
					// account_number: data.jobSeeker?.account_number,
					// bic_number: data.jobSeeker?.bic_number,
					// other_earnings: data.jobSeeker?.other_earnings,
					// profile_image: data?.file_path,
					// doc_image: data?.taxCard_file_path,
					// // languageId: data?.languageId,
				});
			});
		};

		//get country wise city
		const getCountrWiseCity = id => {
			if (id) {
				cityOptions.value = null;
				nationalityField.value = null;
				fetchCityCountryWise(id);
			} else {
				cityOptions.value = null;
				nationalityField.value = null;
			}
		};

		// get city
		const fetchCityCountryWise = id => {
			store.dispatch('country/getCities', id);
		};
		// table open
		const openTable = index => {
			// showTable.value = !showTable.value
			if (tableIndex.value === index) {
				tableIndex.value = null;
				return;
			}
			tableIndex.value = index;
		};

		// view document
		const ratingReviewModalShow = seekerId => {
			console.log(seekerId, 'sdgahsdhjgasjhdgahjs');
			isRatingReviewModal.value = true;
			// window.open(link);
			// store.commit('job/SET_STATE', {
			// 	action: 'jobsId',
			// 	data: jobId,
			// });

			// store.commit('job/SET_STATE', {
			// 	action: 'seekerId',
			// 	data: seekerId,
			// });
		};
		// watch
		watch(seekerRatingDetails, () => {
			ratingAvg.value = seekerRatingDetails.value.rating_avg == 0 ? 0 : (seekerRatingDetails.value.rating_avg / 5) * 100;
			if (seekerRatingDetails.value.user.dob) {
				var today = new Date();
				var birthDate = new Date(seekerRatingDetails.value.user.dob);
				var age = today.getFullYear() - birthDate.getFullYear();
				var m = today.getMonth() - birthDate.getMonth();
				if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
					age--;
				}
				userAge.value = age ?? 0;
			} else {
				userAge.value = '-';
			}
		});

		return {
			//ref
			t,
			tableIndex,
			ratingAvg,
			// options
			genderOptions,
			phoneRegExp,
			stringRegExp,
			profilePic,
			docFilePic,
			// icon
			fillStarIcon,
			startIcon,
			editIcon,
			rightIcon,
			arrowDown,
			arrowUp,
			dateFormat,
			userAge,
			// field
			fullNameField,
			genderField,
			dobField,
			addressField,
			countryField,
			nationalityField,
			mobileField,
			ssnField,

			countryOptions,
			cityOptions,

			ratingReviewModal,

			// form related
			formMeta,
			isSubmitting,
			//computed
			seekerRatingDetails,
			openTable,
			displayUserNameExtract,
			displayDOBExtract,
			displayEmailExtract,
			displayAgeExtract,
			displayGenderExtract,
			displayGigDoneExtract,
			displayMemberSinceExtract,
			displayReviewsExtract,
			displayRecommendExtract,
			displayratingAvgExtract,
			displayLatestReviewsExtract,
			displayStarExtract,
			displayStarDoneExtract,
			displaynationalityField,
			processFlag,

			displaygenderField,
			displaydobField,
			displayssnField,
			displaymobileField,
			displayaddressField,
			displaycountryField,
			//Method
			fetchJobSeekerRating,
			getCountrWiseCity,
			fetchCityCountryWise,
			ratingReviewModalShow,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.invoice__list {
	@media (max-width: 768px) {
		padding: 30px;
	}

	@media (max-width: 425px) {
		padding: 20px;
	}

	.seeker-rating {
		.text-red {
			color: #ff4b57;
			text-decoration: underline;
		}
	}

	.sec-title {
		font-size: 32px;
		font-weight: 600;
	}

	.fill-star {
		color: #e4aa18;
		font-size: 20px;

		@media (max-width: 576px) {
			font-size: 15px;
		}
	}

	.fill-star-dark {
		color: #9e9e9e;
		font-size: 20px;

		@media (max-width: 576px) {
			font-size: 15px;
		}
	}

	// .title-xs {
	// 	font-size: 14px;
	// }

	.title-xl-base {
		font-size: 1rem;

		@media (max-width: 1040px) {
			font-size: 14px;
		}
	}

	.user-rotate-puzzle {
		background-color: transparent;
		position: relative;
		z-index: 1;
		padding: 90px;
		max-width: 220px;

		@media (max-width: 320px) {
			max-width: 170px;
		}

		.user-info-box-right {
			top: 0;
			left: 0;
			z-index: -1;
			position: absolute;
		}

		.user-rotate-img {
			overflow: hidden;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			transform: translate(-50%, -50%);
			left: 50%;
			max-width: 200px;
			width: 100%;
			height: 200px;
			margin: 0 auto;

			@media (max-width: 320px) {
				max-width: 170px;
				height: 170px;
				width: 100%;
			}
		}

		.puzzle-fluid {
			width: 100%;
			height: 100%;
			position: relative;
			object-fit: contain;
		}
	}

	.verify-user {
		border-radius: 50%;
		background-color: #000;
		width: 70px;
		height: 70px;
		color: #fff;
		transform: translate(0%, -50%) !important;

		p {
			font-size: 11px;
			font-weight: 600;
		}
	}

	.red-box {
		background-color: #ea2630;
		border-radius: 20px;
		color: #fff;
		padding: 40px;
		box-shadow: 0px 2px 18px 10px #bdb6b6;
		max-width: 100%;
		margin: 0 auto;

		@media (max-width: 992px) {
			max-width: 380px;
		}

		@media (max-width: 320px) {
			padding: 20px;
			font-size: 15px;
		}

		.red-box-input {
			border: none;
			width: 30%;
			color: #fdefef;

			@media (max-width: 320px) {
				width: 100%;
			}
		}

		::placeholder {
			color: #fdefef;
		}
	}

	.dash-user-info-box {
		background-color: transparent;
		position: relative;
		z-index: 1;
		min-height: 280px;
		max-width: 300px;
		padding: 50px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		transition: all 0.5s;

		.user-info-box-right {
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			position: absolute;

			.puzzle-fluid {
				width: 100%;
				height: 100%;
				position: relative;
				object-fit: contain;
			}
		}
	}

	.rating-box {
		background-color: #fff;
		box-shadow: 2px 10px 39px #ccc;
		padding: 40px;
		border-radius: 20px;

		@media (max-width: 1040px) {
			padding: 30px;
			font-size: 14px;
		}

		@media (max-width: 768px) {
			padding: 20px;
		}

		@media (max-width: 320px) {
			padding: 20px;
			font-size: 14px;
		}

		h2 {
			@media (max-width: 576px) {
				min-width: 50px;
				font-size: 19px;
			}
		}
	}

	.review-accordion {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 1rem 2.35rem 1rem 1.25rem;
		font-size: 1rem;
		color: #212529;
		text-align: left;
		background-color: #fff;
		border: 0;
		box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.19);
		border-radius: 12px;
		margin-bottom: 0.8rem;

		@media (max-width: 575px) {
			padding: 0.7rem 2.35rem 0.7rem 0.65rem;
		}

		.review-width {
			width: 100%;
			// max-width: 500px;
		}

		.path-width {
			width: 100%;
			max-width: 500px;

			@media (max-width: 768px) {
				max-width: 372px;
			}
		}
	}

	.accordion-button {
		&::after {
			background-image: url('~@/assets/images/down-grey-arrow.svg');
		}

		padding: 0;

		@media (max-width: 1040px) {
			display: block;
		}
	}

	.accordion-button:not(.collapsed) {
		background-color: transparent;
		color: #000;
		box-shadow: none;

		&::after {
			background-image: url('~@/assets/images/down-pink-arrow.svg');
		}
	}

	.accordion-header {
		box-shadow: 0px 3px 25px #e5e5e5;
		border-radius: 20px;
		padding: 20px;

		@media (max-width: 576px) {
			padding: 15px;
		}
	}

	.accordion-button {
		&:focus {
			box-shadow: none;
			border-color: none;
			padding: 0;
		}
	}

	.accordion-body {
		background-color: #fff;
		margin: 10px 0;
		box-shadow: 0px 3px 25px #e5e5e5;
		border-radius: 20px;

		@media (max-width: 576px) {
			font-size: 12px;
		}
	}

	.review-user {
		min-width: 50px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;

		@media (max-width: 575px) {
			min-width: 40px;
			width: 40px;
			height: 40px;
		}

		img {
			object-fit: cover;
		}
	}

	.seeker-text-elipsis {
		max-width: 540px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.puzzle-wrap {
		background-image: url('~@/assets/images/123.png');
		width: 380px;
		height: 380px;
		background-size: contain;
		background-repeat: no-repeat;
		box-shadow: 0px 2px 18px 10px #e5dede;
		margin: 0 auto;

		@media (max-width: 1440px) {
			width: 290px;
			height: 290px;

			h2 {
				@media (max-width: 1440px) {
					font-size: 18px;
				}
			}
		}

		@media (max-width: 1040px) {
			width: 380px;
			height: 380px;
		}

		@media (max-width: 576px) {
			max-width: 300px;
			height: 300px;
			margin: 0 auto;
			width: 320px;
		}

		@media (max-width: 320px) {
			max-width: 226px;
			height: 226px;
			margin: 0 auto;
			width: 226px;
		}

		h5 {
			@media (max-width: 576px) {
				font-size: 15px;
			}
		}

		h2,
		h4 {
			@media (max-width: 320px) {
				font-size: 19px;
			}
		}
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

.z-1 {
	z-index: 1;
}

.fn15 {
	font-size: 15px;
}

.fn16 {
	font-size: 16px;
}

.relative {
	position: relative;
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

				svg {
					width: 15px;
					height: 15px;
					color: #fff;
				}

				&.grey-edit {
					height: 45px;
					width: 45px;
				}
			}
		}

		.card-space {
			box-shadow: 0px, 0px, 17px, 0px rgba(0, 0, 0, 0.22);

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

			.text-big {
				font-size: 20px;
				margin-bottom: 20px;

				@media (max-width: 1440px) {
					font-size: 18px;
				}

				@media (max-width: 425px) {
					font-size: 17px;
					margin-bottom: 10px;
				}
			}

			.bg-img {
				&::after {
					content: '';
					position: absolute;
					bottom: 0;
					right: 0;
					height: 280px;
					width: 190px;
					// background-image: url('~@assets/images/jobseeker.png');
					background-image: url('~@/assets/images/jobseeker.png');
					background-repeat: no-repeat;
					background-size: cover;
					z-index: -1;
					filter: blur(50px) brightness(140%) grayscale(60%);

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
			}

			.tax-value {
				min-width: 80px;
				font-weight: 600;
				font-size: 17px;
				text-align: end;
			}
		}

		.text-gray {
			color: #919191;
			font-weight: 600;
		}
	}
}

.gender-input {
	.multiselect-input {
		outline: none;
	}
}

.user-wrap-input {
	.user-input {
		font-size: 23px;
		font-weight: 600;
		color: #3c3c3c;

		@media (max-width: 1650px) {
			font-size: 22px;
		}
	}
}

.pofile-inputs {
	height: 42px;
}

.title-base {
	font-size: 16px;

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (max-width: 575px) {
		font-size: 12px;
	}
}

.arrow-icon {
	position: absolute;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);

	@media (max-width: 575px) {
		right: 10px;
	}
}

.card-space {
	@media (max-width: 1024px) {
		padding: 35px 30px;
	}

	@media (max-width: 576px) {
		padding: 20px;
	}
}

.star-wrap {
	font-size: 20px !important;

	@media (max-width: 575px) {
		font-size: 12px !important;
	}
}

.review-text {
	font-weight: 600;
	color: #d8d8d8;
	font-size: 16px;

	@media (max-width: 768px) {
		font-size: 14px;
	}

	@media (max-width: 575px) {
		font-size: 12px;
	}
}

.grey-edit-bg {
	padding: 12px 28px;

	@media (max-width: 1024px) {
		max-width: 100%;
	}

	&:hover {
		color: #000 !important;
	}
}
</style>

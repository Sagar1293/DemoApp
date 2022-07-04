<template>
	<!-- view job detail` -->
	<div class="job__detail">
		<div class="manage-gig-detail-pill">
			<!-- job detail header - info -->
			<div class="gig-detail-top flex-md-nowrap flex-wrap">
				<div class="gdp-profile mb-md-0 mb-2">
					<!-- company logo -->
					<div class="profile-img">
						<img :src="postJobDetail.company && postJobDetail.company.user && postJobDetail.company.user.file_path" class="img-fluid" alt="" />
					</div>

					<!-- job detail - title, created date -->
					<div class="profile-name">
						<!-- job title -->
						<h5 class="title-lg">{{ postJobDetail.job_title }}</h5>

						<!-- job created date -->
						<span>{{ dateNewFormat(postJobDetail.created_at) }}</span>
					</div>
				</div>

				<!-- company detail -->
				<div class="gdp-information d-sm-flex align-items-center">
					<!-- company location -->
					<div class="info-box mb-sm-0 mb-2">
						<a class="info-box-left">
							<FontAwesomeIcon :icon="mapIcon" />
						</a>
						<div class="info-box-right">
							<a href="https://goo.gl/maps/scqr63duVQVXn2Tm7" class="d-block"
								>{{ postJobDetail.countryReference && postJobDetail.countryReference.country_name }}, {{ postJobDetail.cityReference && postJobDetail.cityReference.city_name }}</a
							>
							<span class="text-small">{{ t('fieldList.location') }}</span>
						</div>
					</div>

					<!-- no of employer -->
					<div class="info-box mb-sm-0 mb-2">
						<a class="info-box-left">
							<FontAwesomeIcon :icon="userIcon" />
						</a>
						<div class="info-box-right">
							<p class="d-block">{{ postJobDetail.company && postJobDetail.company.no_of_employees }}</p>
							<span class="text-small">{{ t('job.employee') }}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- job detail -->
			<div class="gig-detail row">
				<div class="detail-left col-xl-6 px-sm-3 px-0">
					<div class="detail-title">
						<h5 class="title-lg">{{ t('job.gigDetails') }}</h5>
					</div>
					<div class="detail-list mb-xl-0 mb-2">
						<ul>
							<!-- job industry -->
							<li>
								<span class="font-dark">{{ t('fieldList.industry') }}</span>
								<span>{{ postJobDetail.industryReference && postJobDetail.industryReference.industry_name }}</span>
							</li>

							<!-- total vacancy -->
							<li>
								<span class="font-dark">{{ t('job.totalPosition') }}</span>
								<span>{{ postJobDetail.vacancies || '-' }}</span>
							</li>

							<!-- job type -->
							<li>
								<span class="font-dark">{{ t('fieldList.gigType') }}</span>
								<span>{{ postJobDetail.job_mode || '-' }}</span>
							</li>

							<!-- salary -->
							<li>
								<span class="font-dark">{{ t('job.salaryType') }}</span>
								<span>{{ postJobDetail.salary_offer || '-' }}</span>
							</li>
							<!-- job education -->
							<li>
								<span class="font-dark">{{ t('job.minimumEducation') }}</span>
								<span>{{ postJobDetail.qualification && postJobDetail.qualification.qualification }}</span>
							</li>

							<!-- job experience -->
							<li>
								<span class="font-dark">{{ t('job.minimumExperience') }}</span>
								<span>{{ postJobDetail.experience || '-' }}</span>
							</li>

							<!-- apply by -->
							<li>
								<span class="font-dark">{{ t('job.applyBy') }}</span>
								<span>{{ dateNewFormat(postJobDetail.apply_before) || '-' }}</span>
							</li>
						</ul>
					</div>
				</div>

				<div class="detail-right col-xl-6 px-sm-3 px-0">
					<!-- map - location - job -->
					<div class="cards-section">
						<GMapMap
							:center="{
								lat: postJobDetail.lat,
								lng: postJobDetail.lng,
							}"
							:zoom="10"
							map-type-id="terrain"
							style="height: 200px"
							class="img-fluid w-100"
						>
							<GMapMarker
								:position="{
									lat: postJobDetail.lat,
									lng: postJobDetail.lng,
								}"
								:clickable="true"
								:draggable="true"
							/>
						</GMapMap>
					</div>

					<!-- job - skill required -->
					<div class="detail-skill">
						<div class="skill-title">
							<h5 class="title-lg">{{ t('job.skillRequired') }}</h5>
						</div>
						<div class="skill-box">
							<span v-for="(row, index) in postJobDetail.skills" :key="index" class="job_skill d-inline-flex mb-2">
								<span class="inner-skill">
									{{ row.reference.skill }}
								</span>
							</span>
						</div>
					</div>
				</div>
			</div>

			<!-- job description -->
			<div class="gig-description">
				<div class="desc-title">
					<h5 class="title-lg">{{ t('job.gigDescription') }}</h5>
				</div>
				<div class="desc-text">
					<p>
						{{ postJobDetail.job_description || '-' }}
					</p>
				</div>
			</div>

			<!-- job description -->
			<div class="gig-description mt-3">
				<!-- <div class="desc-title">
					<h5 class="title-lg">Worker</h5>
				</div> -->
				<div class="desc-text">
					<div class="job__seekers_application">
						<!-- header -->
						<div class="payment-pill-header mb-2">
							<!-- title -->
							<div class="pph-left">
								<h5 class="title-lg">
									{{ t('job.worker') }}
								</h5>
							</div>
						</div>

						<div class="header__right">
							<div class="form-control mb-3">
								<input type="text" class="border-0 w-100" v-model="search" :placeholder="t('common.search')" />
								<span class="text-light">
									<FontAwesomeIcon icon="search" />
								</span>
							</div>
						</div>

						<div class="spacing-table large-table">
							<div class="table-width">
								<div class="spacing-table-head">
									<span class="w-100">{{ t('jobProposal.lightEnterpreneurName') }} </span>
									<span class="w-100 text-center">{{ t('fieldList.gigTitle') }}</span>
									<span class="w-100 text-center">{{ t('jobProposal.applicationDate') }}</span>
									<span class="w-100 text-center">{{ t('job.jobStatus') }}</span>
									<span class="w-100 text-center">{{ t('toolTip.jobVerify') }}</span>
									<span class="w-100 text-center">{{ t('common.actions') }}</span>
								</div>
							</div>
							<div v-if="jobSeekerProposalList.length > 0">
								<div :class="`invoice__row ${proposalStatus(item)}`" :key="i" v-for="(item, i) in jobSeekerProposalList">
									<div class="font border-right w-100 me-2 d-flex align-items-center">
										<span v-if="item?.seeker?.user?.file_path">
											<div class="review-user">
												<img :src="item.seeker && item.seeker.user && item.seeker.user.file_path" alt="" class="img-fluid h-100" />
											</div>
										</span>
										<span v-else>
											<div class="review-user">
												<img src="@/assets/images/icon_png.png" alt="" class="img-fluid h-100" />
											</div>
										</span>
										<!-- <img :src="item.seeker && item.seeker.user && item.seeker.user.profile_image" alt="" class="img-fluid icon-ing" /> -->

										<p class="mx-2 cursor-pointer" @click="viewSeekerProfileDetail(item.seeker?.id)">
											{{ item.seeker?.user?.full_name }}
										</p>
									</div>

									<span class="font border-right w-100 me-2 d-flex align-items-center justify-content-center">
										{{ item.job?.job_title }}
									</span>

									<span class="font border-right w-100 me-2 d-flex align-items-center justify-content-center">
										{{ dateFormat(item.created_at) }}
									</span>

									<!-- <span class="font border-right w-100 me-2 d-flex align-items-center justify-content-center">
										{{ item.le_work_status }}
									</span> -->
									<span class="w-100 d-flex align-items-center justify-content-center border-right">
										<div class="tbl-status w-100 d-flex align-items-center justify-content-center" v-if="item.le_work_status == 'pending'">
											<span class="sts-wait">
												{{ t('jobSeekerTeam.pending') }}
											</span>
										</div>
										<div class="tbl-status d-flex align-items-center justify-content-center" v-else-if="item.le_work_status == 'active'">
											<span class="sts-reject">
												{{ t('common.active') }}
											</span>
										</div>
										<div class="tbl-status" v-else>
											<span class="sts-reject">
												{{ t('common.completed') }}
											</span>
										</div>
									</span>

									<span class="w-100 d-flex align-items-center justify-content-center border-right">
										<div class="small-grey-edit" v-if="item.le_work_status == 'completed'">
											<ToolTip :title="t('toolTip.jobVerify')">
												<div
													class="ml-lg-1 m-auto grey-edit yellow-star"
													v-if="item.le_work_status == 'completed' && item.company_verify == false"
													@click="ratingReviewModalShow(item.job.id, item.seeker.id)"
												>
													<button>
														<FontAwesomeIcon :icon="startIcon" />
													</button>
												</div>
												<div class="ml-lg-1 m-auto grey-edit-grey" v-else>
													<button>
														<FontAwesomeIcon :icon="startIcon" />
													</button>
												</div>
											</ToolTip>
										</div>
										<div class="small-grey-edit" v-else>
											<div class="ml-lg-1 m-auto grey-edit-grey">
												<button>
													<FontAwesomeIcon :icon="startIcon" />
												</button>
											</div>
										</div>

										<!-- <FontAwesomeIcon :icon="editIcon" /> -->
										<!-- <div class="tbl-status w-100 d-flex align-items-center justify-content-center" v-if="item.company_verify == false">
											<button :class="`assign__status yellow_class`" @click="updateCmpVerifyStatus(item.id, item.seeker.id, true)">												
												<span class="sts-wait">
													<FontAwesomeIcon :icon="clockIcon" />
													False
												</span>
											</button>
										</div>
										<div class="tbl-status" v-else>
											<button :class="`assign__status green_class`">
												<span class="sts-reject">
													True
												</span>
											</button>
										</div> -->
									</span>

									<span class="w-100 d-flex align-items-center justify-content-center pl-2">
										<span v-if="item.status == 'not_assigned'" class="d-flex align-items-center justify-content-center">
											<ToolTip :title="t('toolTip.rejectJob')" class="red-close">
												<button class="tbl-action" @click="updateProposalStatus(item.id, 'rejected')">
													<FontAwesomeIcon :icon="thumbsDown" style="text-align: 'center'" />
												</button>
											</ToolTip>
											<ToolTip :title="t('toolTip.assignedJob')">
												<button class="tbl-action approve-icon ml-2" @click="updateProposalStatus(item.id, 'assigned')">
													<FontAwesomeIcon :icon="thumbsUp" style="text-align: 'center'" />
												</button>
											</ToolTip>
										</span>
										<span v-else class=" d-flex align-items-center justify-content-center">
											<ToolTip :title="t('toolTip.rejectJob')" class="red-close">
												<button class="tbl-action" @click="updateProposalStatus(item.id, 'rejected')">
													<FontAwesomeIcon :icon="thumbsDown" style="text-align: 'center'" />
												</button>
											</ToolTip>

											<button class="tbl-action grey-edit-grey ml-2">
												<FontAwesomeIcon :icon="thumbsUp" style="text-align: 'center'" />
											</button>
										</span>
										<!-- <div class="tbl-status w-100 d-flex align-items-center justify-content-center" v-if="item.status == 'not_assigned'">
											<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'assigned')">
											
												<span class="sts-wait">
													<FontAwesomeIcon :icon="clockIcon" />
													NOT ASSIGNED
												</span>
											</button>
										</div>
										<div class="tbl-status d-flex align-items-center justify-content-center" v-else-if="item.status == 'assigned'">
											<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'rejected')">
												<span class="sts-approve">
													<FontAwesomeIcon :icon="approveIcon" />
													Assigned
												</span>
											</button>
										</div>
										<div class="tbl-status" v-else>
											<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'not_assigned')">
												<span class="sts-reject">
													<FontAwesomeIcon :icon="deleteIcon" />
													Rejected
												</span>
											</button>
										</div> -->
									</span>
								</div>
								<pagination @changePage="handlePageChange" v-model:value="page" :total="TotalPages" :max="9" />
							</div>
							<div v-else>
								<div class="text-center p-4">{{ t('common.noDataAvailable') }}</div>
							</div>
						</div>

						<div class="spacing-table responsive-table">
							<div v-if="jobSeekerProposalList.length > 0">
								<div :class="`invoice__row ${proposalStatus(item)} mb-3`" :key="i" v-for="(item, i) in jobSeekerProposalList">
									<div class="collapse-div" @click="openTable(i, item)">
										<div class="d-flex justify-content-between align-items-center">
											<div class="w-100 me-2">
												<span class="invoice__data ">
													{{ dateFormat(item.created_at) }}
												</span>
											</div>
											<div class="w-100 me-2">
												<span class="invoice__data ">
													{{ item.job?.job_title }}
												</span>
											</div>
											<div class="w-100 me-2">
												<span class="w-100">
													<div class="tbl-status w-100" v-if="item.le_work_status == 'pending'">
														<span class="assign__status sts-wait bg-warning">
															<FontAwesomeIcon :icon="clockIcon" />
															{{ t('jobSeekerTeam.pending') }}
														</span>
													</div>

													<div class="tbl-status w-100" v-else-if="item.le_work_status == 'active'">
														<span class="sts-approve">
															<FontAwesomeIcon :icon="approveIcon" class="me-1" />
															{{ t('common.active') }}
														</span>
													</div>

													<div class="tbl-status w-100" v-else>
														<span class="sts-reject">
															{{ t('common.completed') }}
														</span>
													</div>
												</span>
											</div>

											<div>
												<a>
													<FontAwesomeIcon :icon="arrowDown" v-if="tableIndex !== i" class="arrowIcon" />
												</a>

												<a>
													<FontAwesomeIcon :icon="arrowUp" v-if="tableIndex === i" class="arrowIcon" />
												</a>
											</div>
										</div>

										<div class="border-padding px-sm-3 px-2">
											<div v-if="i == tableIndex" class="table-border">
												<div class="d-flex align-items-center px-4 py-3 border-bottom bg-white">
													<span class="w-100">{{ t('jobProposal.lightEnterpreneurName') }}</span>
													<div class="w-100 me-2 d-flex align-items-center">
														<span class="font w-100 me-2 d-flex align-items-center">
															<img src="@/assets/images/member-img.png" alt="img" class="img-fluid icon-ing" />
															<p class="ms-2">
																{{ item.seeker?.user?.full_name }}
															</p>
														</span>
													</div>
												</div>

												<div class="d-flex align-items-center px-4 py-3 border-bottom bg-white">
													<span class="w-100">{{ t('fieldList.gigTitle') }}</span>
													<span class="font w-100 me-2 d-flex align-items-center">{{ item.job?.job_title }}</span>
												</div>

												<div class="d-flex align-items-center px-4 py-3 bg-white">
													<span class="w-100">{{ t('jobProposal.applicationDate') }}</span>
													<span class="font w-100 me-2 d-flex align-items-center">{{ dateFormat(item.created_at) }}</span>
												</div>
												<div class="d-flex align-items-center px-4 py-3 bg-white">
													<span class="w-100">{{ t('job.jobStatus') }}</span>
													<span class="w-100">
														<div class="tbl-status w-100" v-if="item.le_work_status == 'pending'">
															<!-- <button :class="`assign__status bg-warning`">
																<span class="sts-wait">
																	<FontAwesomeIcon :icon="clockIcon" />
																	Request
																</span>
															</button> -->
															<span class="assign__status sts-wait bg-warning">
																<FontAwesomeIcon :icon="clockIcon" />
																{{ t('jobSeekerTeam.pending') }}
															</span>
														</div>

														<div class="tbl-status w-100" v-else-if="item.le_work_status == 'active'">
															<span class="assign__status sts-reject">
																<FontAwesomeIcon :icon="approveIcon" class="me-1" />
																{{ t('common.active') }}
															</span>
														</div>

														<div class="tbl-status w-100" v-else>
															<span class="assign__status sts-reject">
																{{ t('common.completed') }}
															</span>
														</div>
													</span>
												</div>

												<div class="d-flex align-items-center px-4 py-3 bg-white">
													<span class="w-100">{{ t('toolTip.jobVerify') }}</span>
													<div class="small-grey-edit w-100" v-if="item.le_work_status == 'completed'">
														<ToolTip :title="t('toolTip.jobVerify')">
															<div
																class="ml-lg-1 m-auto grey-edit yellow-star"
																v-if="item.le_work_status == 'completed'"
																@click="ratingReviewModalShow(item.job.id, item.seeker.id)"
															>
																<button>
																	<FontAwesomeIcon :icon="startIcon" />
																</button>
															</div>
														</ToolTip>
													</div>
													<div class="small-grey-edit w-100" v-else>
														<div class="ml-lg-1 m-auto grey-edit-grey">
															<button>
																<FontAwesomeIcon :icon="startIcon" />
															</button>
														</div>
													</div>
												</div>

												<div class="d-flex align-items-center px-4 py-3 bg-white">
													<span class="w-100">{{ t('common.actions') }}</span>
													<span class="w-100">
														<div class="tbl-status w-100" v-if="item.status == 'not_assigned'">
															<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'assigned')">
																<!-- <FontAwesomeIcon :icon="editIcon" /> -->
																<span class="sts-wait">
																	<FontAwesomeIcon :icon="clockIcon" />
																	{{ t('leJobApplication.notAssigned') }}
																</span>
															</button>
														</div>

														<div class="tbl-status w-100" v-else-if="item.status == 'assigned'">
															<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'rejected')">
																<span class="sts-approve">
																	<FontAwesomeIcon :icon="approveIcon" class="me-1" />
																	{{ t('leJobApplication.assigned_1') }}
																</span>
															</button>
														</div>

														<div class="tbl-status w-100" v-else>
															<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'not_assigned')">
																<span class="sts-reject">
																	<FontAwesomeIcon :icon="deleteIcon" class="me-1" />
																	{{ t('jobSeekerTeam.rejected') }}
																</span>
															</button>
														</div>
													</span>
												</div>
												<!-- <ToolTip :title="t('toolTip.jobVerify')">
													<div class="ml-3 grey-edit ml-2" v-if="item.company_verify == true" @click="ratingReviewModalShow(item.job.id, item.seeker.id)">
														<button>
															<FontAwesomeIcon :icon="startIcon" />
														</button>
													</div>
												</ToolTip> -->
											</div>
										</div>
									</div>
								</div>
								<pagination @changePage="handlePageChange" v-model:value="page" :total="TotalPages" :max="9" />
							</div>
							<div v-else>
								<div class="text-center p-4">{{ t('common.noDataAvailable') }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Upload my document -->
	<Suspense v-if="ratingReviewModal.value">
		<template #default>
			<rating-review-modal v-model:isModalShow="ratingReviewModal" @newDocumentUploaded="fetchJobSeekerProposals" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { defineAsyncComponent, onMounted, ref, watch } from '@vue/runtime-core';
import { dateFormat, currencyConverture, dateNewFormat } from '@/utils/mixins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faChevronDown, faChevronUp, faEdit, faInfo, faLongArrowAltLeft, faLongArrowAltRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { useRoute, useRouter } from 'vue-router';
import { faMap, faUser, faChevronDown, faChevronUp, faClock, faEye, faThumbsUp, faTimes, faStar, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
import { useI18n } from 'vue-i18n';
const RatingReviewModal = defineAsyncComponent(async () => {
	return import('@/views/job/components/RatingReviewModal.vue' /* webpackChunkName:"UploadMyDocument" */);
});
// import moment from 'moment';
export default {
	name: 'JobDetail',
	components: {
		FontAwesomeIcon,
		RatingReviewModal,
		DefaultLoader,
	},
	setup() {
		//ref
		const page = ref(1);
		const maxItemsPerPage = ref(5);
		const value = true;
		const tableIndex = ref(0);
		const search = ref('');
		const isRatingReviewModal = ref(false);
		// gloal store
		const store = useStore();
		// global route
		const route = useRoute();

		// icon
		const mapIcon = faMap;
		const userIcon = faUser;
		// icons
		const eyeIcon = faEye;
		const approveIcon = faThumbsUp;
		const clockIcon = faClock;
		const deleteIcon = faTimes;
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const startIcon = faStar;
		const thumbsUp = faThumbsUp;
		const thumbsDown = faThumbsDown;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global router
		const router = useRouter();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			fetchJobSeekerProposals();
			store.dispatch('job/viewPostJobDetails', route.params.id);
			// fetchSeekerInvoiceDetail();
		});

		// const fetchSeekerInvoiceDetail = () => {
		// 	seekerInvoiceDetail.value = store.state.invoice.invoiceSeekerDetail;
		// };

		/**
		 * computed Properties
		 * *******************************************************************
		 */

		// const seekerInvoiceDetail = computed(()=>store.state.invoice.invoiceSeekerDetail)
		const postJobDetail = computed(() => store.state.job.getJobPostViewDetails);

		// job seeker proposal list
		const jobSeekerProposalList = computed(() => store.getters['application/getJobSeekerProposalList']);

		const jobSeekerTotalProposalsCompany = computed(() => store.state.application.jobSeekerTotalProposalsCompany);

		const TotalPages = computed(() => {
			return Math.ceil(jobSeekerTotalProposalsCompany.value / maxItemsPerPage.value);
		});

		// application btn
		const proposalStatus = computed(() => {
			return item => {
				if (item.status === 'rejected') {
					return 'red__class';
				} else if (item.status === 'not_assigned') {
					return 'yellow_class';
				} else {
					return 'green_class';
				}
			};
		});

		// show upload my document model
		const ratingReviewModal = computed({
			get() {
				return isRatingReviewModal;
			},

			set(val) {
				isRatingReviewModal.value = val;
			},
		});

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
		// const viewSeekerDocument = link => {
		// 	window.open(link);
		// };

		/**
		 * Watch
		 * *******************************************************************
		 */
		watch(search, () => {
			fetchJobSeekerProposals();
		});

		/**
		 * Methods
		 * *******************************************************************
		 */

		// view document
		const ratingReviewModalShow = (jobId, seekerId) => {
			console.log(seekerId, 'sdgahsdhjgasjhdgahjs');
			isRatingReviewModal.value = true;
			// window.open(link);
			store.commit('job/SET_STATE', {
				action: 'jobsId',
				data: jobId,
			});

			store.commit('job/SET_STATE', {
				action: 'seekerId',
				data: seekerId,
			});
		};
		// handle page change
		const handlePageChange = val => {
			page.value = val;
			fetchJobSeekerProposals();
		};

		// handle search
		const updateSearchQuery = searchKey => {
			search.value = searchKey;
			fetchJobSeekerProposals();
		};

		const fetchJobSeekerProposals = async () => {
			const jobID = route.params.id;
			console.log(jobID, '<><><><><><><>');
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
				jobID: jobID,
			};
			console.log(payload, '<><><><><><><><>');
			store.dispatch('application/getJobSeekerProposals', payload);
		};

		const updateProposalStatus = (id, status) => {
			const payload = {
				id: id,
				status: status,
			};
			store.dispatch('application/updateJobProposalStatus', payload).then(() => {
				fetchJobSeekerProposals();
			});
		};

		const updateCmpVerifyStatus = (jobId, seekerId, status) => {
			const payload = {
				jobId: jobId,
				seekerId: seekerId,
				status: status,
			};
			console.log(payload);
			store.dispatch('job/updateCmpVerifyStatus', payload).then(() => {
				fetchJobSeekerProposals();
			});
		};

		//view seeker invoice details
		const viewSeekerProfileDetail = id => {
			router.push({
				name: 'ViewSeekerRatingDetail',
				params: { id: id },
			});
		};

		// table open

		return {
			//ref
			t,
			dateFormat,
			currencyConverture,
			dateNewFormat,

			page,
			maxItemsPerPage,
			tableIndex,
			search,

			// icons
			eyeIcon,
			approveIcon,
			clockIcon,
			deleteIcon,
			arrowDown,
			arrowUp,
			value,
			startIcon,
			ratingReviewModal,
			thumbsUp,
			thumbsDown,
			//computed
			postJobDetail,
			jobSeekerProposalList,
			TotalPages,
			proposalStatus,
			// icons/
			mapIcon,
			userIcon,

			// methods
			handlePageChange,
			updateSearchQuery,
			updateProposalStatus,
			ratingReviewModalShow,
			fetchJobSeekerProposals,
			updateCmpVerifyStatus,
			openTable,
			viewSeekerProfileDetail,
		};
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.job__detail {
	width: 100%;
	display: block;
	background-color: #fff;
	border-radius: 20px;
	padding: 30px 15px;

	@media (max-width: 575px) {
		padding: 30px 5px;
	}

	.manage-gig-detail-pill {
		.gig-detail-top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.gdp-profile {
				display: flex;
				align-items: center;

				.profile-img {
					width: 100px;
					height: 100px;
					border-radius: 100%;
					overflow: hidden;
					margin-right: 20px;

					img {
						width: 100px;
						height: 100px;
						object-fit: cover;
					}
				}

				.profile-name {
					span {
						margin-top: 10px;
						display: inline-block;
						color: $colorGray;
					}
				}
			}

			.gdp-information {
				.info-box {
					display: flex;
					align-items: center;
					margin-right: 20px;

					.info-box-left {
						width: 40px;
						height: 40px;
						min-width: 40px;
						text-align: center;
						background-color: $colorExLightGray;
						border-radius: 10px;
						margin-right: 15px;
						display: flex;
						align-items: center;
						justify-content: center;

						@media (max-width: 575px) {
							margin-right: 10px;
						}

						svg {
							color: $colorLightGray;
						}
					}

					.info-box-right {
						a,
						p {
							font-weight: 500;
							font-size: 16px;

							@media (max-width: 575px) {
								font-size: 13px;
								line-height: 1.3;
							}
						}
					}
				}
			}
		}

		.gig-detail {
			background-color: #fff;
			padding: 20px;
			border-radius: 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
			margin: 30px 0px;
			justify-content: space-between;

			.detail-left {
				width: 100%;

				.detail-list {
					margin-top: 30px;

					@media (max-width: 768px) {
						margin-top: 20px;
					}

					@media (max-width: 575px) {
						margin-top: 13px;
						font-size: 13px;
						text-align: end;
					}

					ul {
						li {
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 5px 0px;

							span {
								&.font-dark {
									font-weight: 600;
								}
							}
						}
					}
				}
			}

			.detail-right {
				.detail-map {
					height: 200px;
					width: auto;
					overflow: hidden;
					border-radius: 20px;
				}

				.detail-skill {
					margin-top: 30px;

					.skill-title {
						margin-bottom: 20px;
					}

					.skill-box {
						padding: 10px;
						background-color: $bg-color;
						border: 2px dashed $colorExLightGray;
						border-radius: 10px;
						display: inline-block;
						width: 100%;

						.inner-skill {
							padding: 10px;
							background-color: $coloRed;
							color: #fff;
							display: inline-block;
							border-radius: 10px;
							font-size: 14px;
							margin-right: 8px;
						}
					}
				}
			}
		}

		.gig-description {
			background-color: #fff;
			padding: 20px;
			border-radius: 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

			.desc-title {
				margin-bottom: 20px;
			}

			.desc-text {
				p {
					color: $colorGray;
					// margin-bottom: 10px;
					display: block;
				}
			}
		}
	}
}

.job__seekers_application {
	::v-deep(table) {
		min-width: max-content;
	}

	table {
		tr {
			.font-line {
				font-weight: 600;
				text-decoration: underline;
			}

			.view-doc {
				width: 50px;
				height: 50px;
				line-height: 50px;
				background-color: $colorLightRed;
				border-radius: 100%;
				display: inline-block;
				vertical-align: middle;

				svg {
					color: $coloRed;
					vertical-align: middle;
				}
			}

			.btn-common {
				font-size: 14px;
				display: block;
				margin-bottom: 8px;
			}
		}
	}

	.yellow-star {
		svg {
			color: #e4aa18;
		}
	}

	.grey-edit-grey {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-image: linear-gradient(#e1e4e9, #c8cbd1);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: none;
		pointer-events: none;

		svg {
			color: grey;
		}
	}
}

@media (max-width: 576px) {
	.job__seekers_application {
		padding: 15px 0px;

		.payment-pill-header {
			display: block;
			text-align: center;

			.pph-right {
				margin-top: 10px;
			}
		}
	}
}

.bg-disabed {
	background-color: rgb(184, 182, 182);
	color: #fff;
	padding: 5px 10px;
	border-radius: 50px;
}

.bg-disabed:hover {
	border: 1px solid rgb(184, 182, 182);
	background-color: #fff;
	color: rgb(184, 182, 182);
}

.bg-success {
	background-color: green;
	color: #fff;
	padding: 5px 10px;
	border-radius: 50px;
}

.bg-success:hover {
	border: 1px solid green;
	background-color: #000;
	color: #000;
}

.bg-danger {
	color: #fff;
	background-color: red;
	padding: 5px 10px;
	border-radius: 50px;
}

.bg-danger:hover {
	border: 1px solid red;
	background-color: #fff;
	color: #000;
}

.spacing-table {
	width: 100%;
	display: block;
	background-color: #fff;
	border-radius: 20px;
	padding: 0 15px;

	@media (max-width: 768px) {
		padding: 0;
	}

	.spacing-table-head {
		display: flex;
		align-items: center;
		// justify-content: space-between;
		background-color: #000;
		color: #fff;
		padding: 0.75rem 1.5rem;
		border-radius: 50px;
	}

	.invoice__row {
		display: flex;
		justify-content: space-between;
		border: 2px solid #f22d37;
		padding: 0.75rem;
		margin: 20px 0;
		border-radius: 20px;
	}

	.table-width {
		min-width: 915px;
	}

	.assign__status {
		padding: 8px 15px;
		width: auto;
		max-width: max-content;
		color: #fff;
		text-transform: uppercase;
		font-size: 12px;
		border-radius: 20px;
		display: flex;
		align-items: center;

		&.yellow_class {
			background-color: $colorWait;
		}

		&.red__class {
			background-color: $colorRed;
		}

		&.green_class {
			background-color: $colorApprove;
		}
	}
}

.table-responsive .table-auto {
	min-width: 915px;
}

.invoice__row.yellow_class {
	border-color: $colorWait;
	box-shadow: 1px 1px 5px rgb(207, 204, 204);
}

.invoice__row.red__class {
	border-color: $coloRed;
	box-shadow: 1px 1px 5px rgb(207, 204, 204);
}

.invoice__row.green_class {
	border-color: $colorApprove;
	box-shadow: 0px 0px 5px rgb(207, 204, 204);
}

.large-table {
	display: block;

	@media (max-width: 1024px) {
		display: none;
	}
}

.header__right {
	.form-control {
		padding: 12px 15px;
		background-color: #fff;
		height: 50px;
		border: 1px solid #e7e7e7;
		border-radius: 25px;
		width: 30%;
		color: $colorPurple;
		position: relative;
		margin-left: auto;

		@media (max-width: 768px) {
			width: 100%;
		}

		@media (max-width: 576px) {
			height: 50px;
			line-height: 27px;
		}

		input {
			background-color: transparent;
		}

		span {
			width: 50px;
			height: 50px;
			background-color: #ff4b57;
			border-radius: 50%;
			position: absolute;
			top: 0;
			right: 0;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		::placeholder {
			color: #ff4b57;
			opacity: 1;
		}
	}
}

.responsive-table {
	display: none;

	.invoice__row {
		display: block;
		padding: 0px;
		margin: 0;
		border: none;
	}

	@media (max-width: 1024px) {
		display: block;
	}

	.table-border {
		border: 1px solid #ccc;
		border-radius: 10px;
		overflow: hidden;
		margin-top: 15px;
	}

	.collapse-div {
		border-radius: 10px !important;
		padding: 20px 20px 20px 20px;
		background-color: #f5f5f5;
		border: 2px solid #f22d37;

		@media (max-width: 575px) {
			padding: 10px;
		}
	}

	.min-width {
		max-width: 190px;
	}
}

.border-padding {
	border-bottom-left-radius: 10px;
	background-color: #f5f5f5;
	border-bottom-right-radius: 10px;
	padding: 0;
}

.small-grey-edit {
	.grey-edit {
		width: 42px;
		height: 42px;
		min-width: 42px;
	}
}

.bg-success {
	background-color: green;
	color: #fff;
	padding: 5px 10px;
	border-radius: 50px;
}

.bg-success:hover {
	border: 1px solid green;
	background-color: #000;
	color: #000;
}

.sts-wait {
	background-color: $colorWait;
	color: #fff;
	padding: 10px 20px;
	border-radius: 50px;
}

.sts-reject {
	background-color: $colorApprove;
	color: #fff;
	padding: 10px 20px;
	border-radius: 50px;
	@media (max-width: 575px) {
		padding: 5px 10px;
		font-size: 12px;
	}
}

.review-user {
	max-width: 50px;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;

	@media (max-width: 768px) {
		min-width: 50px;
	}

	img {
		object-fit: cover;
	}
}
</style>

<template>
	<!-- matching - job - list -->
	<div class="find__job__list">
		<section class="dream-gig d-inline-block position-relative w-100 mt-3">
			<div class="container">
				<!-- header -->
				<div class="row mb-5">

					<div class="col-sm-1">
						<div
							class="go__back "
							v-if="route.meta.breadcrumb.length"
						>
							<router-link
								:to="
									route.meta.breadcrumb[
										route.meta.breadcrumb.length - 2
									].url
								"
							>
								<a class="banner-back d-inline-block">
									
										<div
											class="back-icon d-flex align-items-center justify-content-center text-light"
										>
											<FontAwesomeIcon
												:icon="leftArrowIcon"
											/>
										</div>
										<!-- <div class="back-text">
											<span class="ml-2 mr-5">
												back
											</span>
										</div> -->
									
								</a>
							</router-link>
						</div>
					</div>

					<!-- total job count -->
					<div class="col-sm-4 p-0">
						<h5 class="title-lg">
							{{ t('common.showing') }}
							{{ matchingJobList.length }} {{ t('common.of') }}
							{{ totalMatchingJob }}
						</h5>
					</div>

					<!-- job list filter -->
					<div class="col-sm-3">
						<div class="gig-dropdown theme-input">
							<div class="dropdown form-control">
								<button
									class="dropdown-toggle"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{{ t(`common.${sortOrder}`) }}
								</button>

								<ul
									class="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<li>
										<button
											class="dropdown-item"
											@click="updateListSortOrder"
											value="latest"
										>
											{{ t('common.latest') }}
										</button>
									</li>
									<li>
										<button
											class="dropdown-item"
											@click="updateListSortOrder"
											value="trading"
										>
											{{ t('common.trading') }}
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<!-- job search-->
					<div class="col-sm-4">
						<!-- search -->
						<div class="d-flex banner-form align-items-center">
							<div class="form-input flex-grow-1">
								<input
									class="form-control"
									type="text"
									v-model="search"
									placeholder="Search here..."
								/>
							</div>
							<FontAwesomeIcon :icon="searchIcon" />

							<!-- search btn -->
							<!-- <button
								type="button"
								class="btn-common btn-red"
							>
								{{ t('common.search') }}
								<span>
								</span>
							</button> -->
						</div>
					</div>
					
				</div>

				<!-- job list -->
				<div class="row" v-if="matchingJobList.length">
					<!-- job -->
					<div
						class="col-xl-3 col-lg-4 col-md-6"
						v-for="(job, index) in matchingJobList"
						:key="index"
					>
						<div class="dream-gig-box">
							<!-- logo -->
							<div class="gig-box-img">
								<img
									:src="
										job.company?.logo ||
											require('@/assets/images/iconWomanDraw.png')
									"
									class="img-fluid"
									alt=""
								/>
							</div>

							<!-- company name -->
							<div class="gig-box-title">
								<h5 class="text-big">{{ job.job_title }}</h5>
								<span class="text-small">
									{{ job.company?.company_name }}
								</span>
							</div>
							<div class="gig-box-info">
								<!-- city -->
								<div class="text-row">
									<span class="text-small">
										{{ t('fieldList.city') }}
									</span>
									<p>{{ job.city?.city_name }}</p>
								</div>

								<!-- application ends on -->
								<div class="text-row">
									<span class="text-small">
										{{ t('job.applicationEndOn') }}
									</span>
									<p>{{ dateFormat(job.apply_before) }}</p>
								</div>

								<!-- gig duration -->
								<div class="text-row">
									<span class="text-small">
										{{ t('job.gigDuration') }}
									</span>
									<p>{{ job.job_duration }}</p>
								</div>

								<!-- created on -->
								<div class="text-row">
									<span class="text-small">
										{{ t('common.createdOn') }}
									</span>
									<p>{{ dateFormat(job.created_at) }}</p>
								</div>
							</div>

							<!-- apply now -->
							<div class="gig-box-btn">
								<button
									class="btn-common btn-red"
									:class="{ disable: job.job_proposal }"
									@click="applyJob(job.id)"
									:disabled="job.job_proposal"
								>
									{{
										job.job_proposal
											? t('common.applied')
											: t('common.applyNow')
									}}
								</button>
							</div>
						</div>
					</div>
				</div>
	
				<div class="row" v-else>
					<div class="col-12 text-center">
						<h5>No Jobs Found</h5>
					</div>
				</div>

				<!-- pagination -->
				<pagination
					v-model:value="page"
					:total="totalPages"
					:max="totalPages > 9 ? 9 : totalPages"
					@changePage="handlePageChange"
				/>
			</div>
		</section>
	</div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useSwal } from '@/components/sweetalert';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { dateFormat } from '@/utils/mixins';
import { useRoute } from 'vue-router';

export default {
	name: 'FindJobList',
	components: {
		FontAwesomeIcon,
	},

	setup() {
		// refs
		const sortOrder = ref(null);
		const page = ref(1);
		const maxItemsPerPage = ref(5);
		const search = ref(null);

		// global translate function
		const { t } = useI18n({ useScope: 'global' });
		//icon
		const leftArrowIcon = faArrowLeft;
		const searchIcon= faSearch;

		// global store
		const store = useStore();

		// sweetalert
		const Swal = useSwal();
		//  global route
		const route = useRoute();

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(() => {			
			sortOrder.value = 'latest';
			// fetch matching job list
			fetchMatchingJobs();
		});

		/**
		 * Computed
		 * *******************************************************************
		 */
		// matching job list
		const matchingJobList = computed(
			() => store.getters['job/getMatchingJobList'],
		);

		const totalMatchingJob = computed(() => store.state.job.totalCount);

		// total pages
		const totalPages = computed(() =>
			Math.ceil(totalMatchingJob.value / maxItemsPerPage.value),
		);

		/**
		 * Methods
		 * *******************************************************************
		 */
		const fetchMatchingJobs = async () => {
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
				order:sortOrder.value
			};

			await store.dispatch('job/getMatchingJobList', payload);
		};

		// update list sort order
		const updateListSortOrder = async e => {			
			sortOrder.value = e.target.value;
			fetchMatchingJobs();
		};

		// apply job
		const applyJob = id => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to apply on this job ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, apply it!',
			}).then(async result => {
				if (result.isConfirmed) {
					// apply proposal
					await store
						.dispatch('job/addJobProposal', { jobId: id })
						.then(() => {
							Swal.fire(
								'Applied!',
								'Your have been applied for this job.',
								'success',
							);

							fetchMatchingJobs();
						});
				}
			});
		};

		// handle page change
		const handlePageChange = val => {
			page.value = val;
			fetchMatchingJobs();
		};

		watch(search,()=>{
			fetchMatchingJobs();
		})

		return {
			// translate funtion
			t,
			route,
			search,
			// refs
			sortOrder,
			dateFormat,
			page,
			maxItemsPerPage,

			//icon
			leftArrowIcon,
			searchIcon,

			// computed
			matchingJobList,
			totalMatchingJob,
			totalPages,

			// methods
			fetchMatchingJobs,
			updateListSortOrder,
			applyJob,
			handlePageChange,
		};
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/variable.scss';

.find__job__list {
	.dream-gig {
		// .form-control {
		// 	height: unset;
		// }

		.gig-dropdown {
			.dropdown {
				float: right;
				width: 30%;
				background-color: transparent;

				.dropdown-toggle {
					text-align: center;
					display: block;
					width: 100%;
				}
			}
		}

		.banner-form {
			padding: 10px;
			background-color: #fff;
			border-radius: 35px;
			border: 1px solid #eaeaea;

			.form-control {
				border: none;
				// color: #ff4b57;
				font-weight: 500;
				width: auto;
				padding: 0px 10px;
				height:100%;
			}
		}

		.dream-gig-box {
			padding: 30px 20px 20px 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
			border-radius: 25px;
			position: relative;
			margin-bottom: 20px;

			.gig-box-drop {
				position: absolute;
				right: 20px;
				.dropdown {
					.dropdown-toggle {
						color: $colorGray;
						&::after {
							display: none;
						}
					}
				}
			}
			.gig-box-img {
				width: 100px;
				height: 100px;
				border-radius: 100%;
				background-color: $colorExLightGray;
				overflow: hidden;
				margin: 0 auto;
				img {
					width: 100px;
					height: 100px;
					object-fit: cover;
				}
			}
			.gig-box-title {
				text-align: center;
				margin: 20px 0px;
				.text-big {
					font-size: 20px;
				}
				.text-small {
					color: #000;
				}
			}
			.gig-box-info {
				.text-row {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-bottom: 10px;

					p {
						font-size: 14px;
						font-weight: 500;
					}
				}
			}
			.gig-box-btn {
				text-align: center;
				margin-top: 20px;

				& .disable {
					background: gray;

					&:hover {
						color: #fff !important;
					}
				}
			}
		}

		.go__back {
			cursor: pointer;
			background-color: #fff;
			border-radius: 50px;
			width: 150px;
			margin-bottom: 10px;

			.banner-back {
				display: flex;
				align-items: center;

				.back-icon {
					width: 30px;
					height: 30px;
					line-height: 40px;
					text-align: center;
					background-color: $coloRed;
					border-radius: 100%;
					margin-right: 10px;
					color: #fff;
					font-size: 25px;
				}

				.back-text {
					span {
						font-weight: 600;
						color: #000;
					}
				}
			}
			
			.back-icon {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background-color: #ff4b57;
			}
		}
	}

	@media (max-width: 1400px) {
		.dream-gig {
			.gig-dropdown {
				.dropdown {
					width: 40%;
				}
			}
		}
	}

	@media (max-width: 1200px) {
		.dream-gig {
			.gig-dropdown {
				.dropdown {
					width: 50%;
				}
			}
		}
	}

	@media (max-width: 992px) {
		.dream-gig {
			.gig-dropdown {
				.dropdown {
					width: 60%;
				}
			}
		}
	}

	@media (max-width: 768px) {
		.dream-gig {
			.gig-dropdown {
				.dropdown {
					width: 100%;
				}
			}
		}
	}

	@media (max-width: 576px) {
		.dream-gig {
			.title-lg {
				text-align: center;
			}

			.gig-dropdown {
				margin-top: 20px;

				.dropdown {
					float: none;
					text-align: center;
					width: 50%;
					margin: 0 auto;
				}
			}
		}
	}
}
</style>

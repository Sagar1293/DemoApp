<template>
	<!-- job proposals list -->
	<div class="job__seekers_application card-space">
		<!-- header -->
		<div class="payment-pill-header mb-2">
			<!-- title -->
			<div class="pph-left">
				<h5 class="title-lg">
					{{ t('jobProposal.gigAppReceived') }}
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
					<span class="w-100 text-center">{{ t('common.actions') }}</span>
				</div>
			</div>
			<div v-if="jobSeekerProposalList.length > 0">
				<div :class="`invoice__row ${proposalStatus(item)}`" :key="i" v-for="(item, i) in jobSeekerProposalList">
					<span class="font border-right w-100 me-2 d-flex align-items-center">
						<img src="@/assets/images/member-img.png" alt="img" class="img-fluid icon-ing" />
						<p class="ms-2">
							{{ item.seeker?.user?.full_name }}
						</p>
					</span>

					<span class="font border-right w-100 me-2 d-flex align-items-center justify-content-center">
						{{ item.job?.job_title }}
					</span>

					<span class="font border-right w-100 me-2 d-flex align-items-center justify-content-center">
						{{ dateFormat(item.created_at) }}
					</span>

					<span class="w-100 d-flex align-items-center justify-content-center">
						<div class="tbl-status w-100 d-flex align-items-center justify-content-center" v-if="item.status == 'not_assigned'">
							<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'assigned')">
								<!-- <FontAwesomeIcon :icon="editIcon" /> -->
								<span class="sts-wait">
									<FontAwesomeIcon :icon="clockIcon" />
									{{ t('leJobApplication.notAssigned') }}
								</span>
							</button>
						</div>
						<div class="tbl-status d-flex align-items-center justify-content-center" v-else-if="item.status == 'assigned'">
							<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'rejected')">
								<span class="sts-approve">
									<FontAwesomeIcon :icon="approveIcon" />
									{{ t('leJobApplication.assigned_1') }}
								</span>
							</button>
						</div>
						<div class="tbl-status" v-else>
							<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'not_assigned')">
								<span class="sts-reject">
									<FontAwesomeIcon :icon="deleteIcon" />
									{{ t('leJobApplication.rejected') }}
								</span>
							</button>
						</div>
					</span>
				</div>
				<pagination @changePage="handlePageChange" v-model:value="page" :total="TotalPages" :max="9" />
			</div>
			<div v-else>
				<div class="text-center p-4">{{ t('common.noDataAvailable') }}</div>
			</div>
		</div>

		<div class="spacing-table responsive-table">
			<!-- <div class="spacing-table-head w-100">
				<div class="w-100">Application Name</div>
				<div class="w-100">Applied On</div>
				<div class="w-100">Status</div>
				<div class="w-50 d-flex justify-content-end align-items-center">
					Actions
				</div>
			</div> -->
			<div v-if="jobSeekerProposalList.length > 0">
				<div :class="`invoice__row ${proposalStatus(item)} mb-3`" :key="i" v-for="(item, i) in jobSeekerProposalList">
					<div class="collapse-div" @click="openTable(i, item)">
						<div class="d-flex justify-content-between">
							<div>
								<div class="w-100 me-2 d-flex align-items-center">
									<span class="invoice__data ">
										{{ dateFormat(item.created_at) }}
									</span>
								</div>
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

						<div class="border-padding">
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
													<FontAwesomeIcon :icon="approveIcon" />
													{{ t('leJobApplication.assigned_1') }}
												</span>
											</button>
										</div>

										<div class="tbl-status w-100" v-else>
											<button :class="`assign__status ${proposalStatus(item)}`" @click="updateProposalStatus(item.id, 'not_assigned')">
												<span class="sts-reject">
													<FontAwesomeIcon :icon="deleteIcon" />
													{{ t('leJobApplication.rejected') }}
												</span>
											</button>
										</div>
									</span>
								</div>
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

		<!-- <pagination
			@changePage="handlePageChange"
			v-model:value="page"
			:total="totalJobSeekerProposals / maxItemsPerPage"
			:max="9"
		/> -->

		<!-- job proposals list -->

		<!-- <pagination
			v-model:value="currentx"
			:total="searchx && !sst ? getTotalPagesSearch : getTotalPages"
			:max="maxPagesToShow"
		/> -->

		<!-- <div class="spacing-table">
			<div class="spacing-table-head">
				<div class="w-100">Application Name</div>
				<div class="w-100">Applied On</div>
				<div class="w-100">Status</div>
				<div class="w-50 d-flex justify-content-end align-items-center">
					Actions
				</div>
			</div>

			<div
				class="invoice__row"
				:key="i"
				v-for="(item, i) in jobSeekerProposalList"
			>
				<div class="border-right w-100 me-2 d-flex align-items-center">
					<span class="font">
						{{ tr.seeker?.user?.full_name }}
					</span>
				</div>

				<div class="border-right w-100 me-2 d-flex align-items-center">
					<span class="invoice__data ">
						{{ dateFormat(item.created_at) }}
					</span>
				</div>

				<div class="border-right w-100 me-2 d-flex align-items-center">
					<span class="assign__status">
						<span class="assign__status">{{ item.status }} </span>
					</span>
				</div>

				<div class="w-50 d-flex justify-content-end">
					<span class="invoice__data">
						<button
							title="Remove Proposal"
							class="close-btn tbl-action red-close "
							@click="deleteProposal(item.id)"
						>
							<FontAwesomeIcon :icon="deleteIcon" />
						</button>
					</span>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
import { ref, onMounted, computed, watch } from '@vue/runtime-core';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp, faClock, faEye, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
// import Toggle from '@vueform/toggle';

import { dateFormat } from '@/utils/mixins';

export default {
	name: 'ManageLightEnterPrenuers',

	// components
	components: {
		FontAwesomeIcon,
		// Toggle,
	},

	setup() {
		// refs
		const page = ref(1);
		const maxItemsPerPage = ref(5);
		const value = true;
		const tableIndex = ref(0);
		const search = ref('');

		// icons
		const eyeIcon = faEye;
		const approveIcon = faThumbsUp;
		const clockIcon = faClock;
		const deleteIcon = faTimes;
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore();

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch current users educations
			fetchJobSeekerProposals();
		});

		/**
		 * Computed
		 * *******************************************************************
		 */
		// job seeker proposal list
		const jobSeekerProposalList = computed(() => store.getters['application/getJobSeekerProposalList']);

		// total job seeker proposals
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

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch job seeker proposals
		const fetchJobSeekerProposals = async () => {
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
			};

			store.dispatch('application/getJobSeekerProposals', payload);
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

		const updateProposalStatus = (id, status) => {
			const payload = {
				id: id,
				status: status,
			};
			store.dispatch('application/updateJobProposalStatus', payload).then(() => {
				fetchJobSeekerProposals();
			});
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

		watch(search, () => {
			fetchJobSeekerProposals();
		});

		return {
			// refs
			page,
			maxItemsPerPage,
			dateFormat,
			tableIndex,
			search,

			// icons
			eyeIcon,
			approveIcon,
			clockIcon,
			deleteIcon,
			arrowDown,
			arrowUp,

			// translate function
			t,

			value,

			// computed
			jobSeekerProposalList,
			// totalJobSeekerProposals,
			jobSeekerTotalProposalsCompany,
			proposalStatus,
			TotalPages,

			// methods
			handlePageChange,
			updateProposalStatus,
			openTable,
			updateSearchQuery,
		};
	},
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

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
	}

	.min-width {
		max-width: 190px;
	}
}

.border-padding {
	border-bottom-left-radius: 10px;
	background-color: #f5f5f5;
	border-bottom-right-radius: 10px;
}
</style>

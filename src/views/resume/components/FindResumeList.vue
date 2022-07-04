<template>
	<!-- resume - list -->
	<div class="resume__list card-space">
		<div class="container">
			<div class="go__back" v-if="route.meta.breadcrumb.length"></div>
			<div class="row">
				<div class="col-12">
					<!-- table -->
					<div class="resume__table">
						<new-data-table
							:data="resumesList"
							sst
							pagination
							search
							@search="updateSearchQuery"
							@changePage="handlePageChange"
							:total="totalResumeCount"
							:max-items="maxItemsPerPage"
							class="large-table"
						>
							<!-- header -->
							<template #header>
								<div class="select__limit d-flex align-items-center">
									<span>{{ t('common.show') }}</span>
									<div class="dropdown">
										<a
											class="dropdown-toggle btn-common btn-gray-border tbl-drop"
											href="#"
											id="navbarDropdownResumes"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											{{ maxItemsPerPage }}
										</a>
										<ul class="dropdown-menu" aria-labelledby="navbarDropdownResumesAria">
											<li @click="changePerPageMaxItems(5)">
												<span class="dropdown-item tbl-drop-link">
													5
												</span>
											</li>
											<li @click="changePerPageMaxItems(10)">
												<span class="dropdown-item tbl-drop-link">
													10
												</span>
											</li>
											<li @click="changePerPageMaxItems(15)">
												<span class="dropdown-item tbl-drop-link">
													15
												</span>
											</li>
										</ul>
									</div>
									<span>{{ t('common.entries') }}</span>
								</div>
							</template>

							<!-- column header -->
							<template #thead>
								<new-tb-th>
									{{ t('jobProposal.lightEnterpreneurName') }}
								</new-tb-th>
								<new-tb-th>
									{{ t('fieldList.dob') }}
								</new-tb-th>
								<new-tb-th>
									{{ t('fieldList.gender') }}
								</new-tb-th>
								<new-tb-th>
									{{ t('common.actions') }}
								</new-tb-th>
							</template>

							<!-- rows -->
							<template #data="scopedData" ref="tableBody">
								<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
									<!-- seeker - full name -->
									<new-tb-td>
										{{ tr.seeker?.user?.full_name }}
									</new-tb-td>

									<!-- birth date -->
									<new-tb-td>
										{{ dateFormat(tr.seeker?.user?.dob) }}
									</new-tb-td>

									<!-- gender -->
									<new-tb-td>
										{{ tr.seeker?.user?.gender }}
									</new-tb-td>

									<!-- request button -->
									<new-tb-td>
										<div
											class="tbl-status mx-auto"
											:class="{
												disable: tr.resume_request,
											}"
											title="Request Resume Access"
											@click="requestResumeAccess(tr.id)"
											:disabled="tr.resume_request"
										>
											<span class="sts-wait">
												{{ tr.resume_request ? t('resume.requestSent') : t('resume.requestAccess') }}
											</span>
										</div>
									</new-tb-td>
								</new-tb-tr>
							</template>
						</new-data-table>

						<div>
							<new-data-table
								:data="resumesList"
								sst
								pagination
								search
								@search="updateSearchQuery"
								:total="totalResumeCount"
								:max-items="maxItemsPerPage"
								@change-page="handlePageChange"
								class="responsive-table"
							>
								<!-- header -->
								<template #header>
									<div class="select__limit d-flex align-items-center">
										<span>{{ t('common.show') }}</span>
										<div class="dropdown">
											<a
												class="dropdown-toggle btn-common btn-gray-border tbl-drop"
												href="#"
												id="navbarDropdownResumesMobile"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false"
											>
												{{ maxItemsPerPage }}
											</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdownResumesMobileAria">
												<li @click="changePerPageMaxItems(5)">
													<span class="dropdown-item tbl-drop-link">
														5
													</span>
												</li>
												<li @click="changePerPageMaxItems(10)">
													<span class="dropdown-item tbl-drop-link">
														10
													</span>
												</li>
												<li @click="changePerPageMaxItems(15)">
													<span class="dropdown-item tbl-drop-link">
														15
													</span>
												</li>
											</ul>
										</div>
										<span>{{ t('common.entries') }}</span>
									</div>
								</template>

								<template #data="scopedData" ref="tableBody">
									<new-tb-tr class="invoice__row expand-table" :key="i" v-for="(tr, i) in scopedData.data">
										<div>
											<div class="d-flex align-items-center justify-content-between collapse-div" @click="openTable(i, item)">
												<div class="d-flex">
													<div>
														<div>
															{{ tr.seeker?.user?.full_name }}
														</div>
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
													<new-tb-tr>
														<new-tb-th>
															{{ t('fieldList.dob') }}
														</new-tb-th>
														<new-tb-td>
															{{ dateFormat(tr.seeker?.user?.dob) }}
														</new-tb-td>
													</new-tb-tr>

													<new-tb-tr>
														<new-tb-th>
															{{ t('fieldList.gender') }}
														</new-tb-th>
														<new-tb-td>
															{{ tr.seeker?.user?.gender }}
														</new-tb-td>
													</new-tb-tr>

													<new-tb-tr>
														<new-tb-th>
															{{ t('common.actions') }}
														</new-tb-th>

														<new-tb-td>
															<div
																class="tbl-status mx-auto"
																:class="{
																	disable: tr.resume_request,
																}"
																title="Request Resume Access"
																@click="requestResumeAccess(tr.id)"
																:disabled="tr.resume_request"
															>
																<span class="sts-wait">
																	{{ tr.resume_request ? t('resume.requestSent') : t('resume.requestAccess') }}
																</span>
															</div>
														</new-tb-td>
													</new-tb-tr>
												</div>
											</div>
										</div>
									</new-tb-tr>
								</template>
							</new-data-table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed, onMounted } from '@vue/runtime-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { dateFormat } from '@/utils/mixins';
import { faChevronDown, faChevronUp, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from 'vue-router';

export default {
	name: 'ResumeList',
	components: {
		FontAwesomeIcon,
	},
	setup() {
		// refs
		const maxItemsPerPage = ref(5);
		const page = ref(1);
		const search = ref(null);
		const tableIndex = ref(0);

		// icon
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const leftArrowIcon = faArrowLeft;

		// language translate function
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore();
		//  global route
		const route = useRoute();

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch current users educations
			fetchResuleList();
		});

		/**
		 * Computed
		 * *******************************************************************
		 */
		// total resume list
		const resumesList = computed(() => store.getters['resume/getResumeList']);

		// total resume count
		const totalResumeCount = computed(() => store.state.resume.totalResumeCount);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch resume list
		const fetchResuleList = async () => {
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
			};

			store.dispatch('resume/getResumeList', payload);
		};

		// change per page max items
		const changePerPageMaxItems = length => {
			maxItemsPerPage.value = length;
			page.value = 1;
			fetchResuleList();
		};

		// search resume
		const updateSearchQuery = searchKey => {
			search.value = searchKey;
			fetchResuleList();
		};

		// handle page change
		const handlePageChange = val => {
			page.value = val;
			fetchResuleList();
		};

		// request resume access
		const requestResumeAccess = async id => {
			await store.dispatch('resume/requestResumeAccess', { resumeId: id }).then(() => fetchResuleList());
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

		return {
			// refs
			maxItemsPerPage,
			page,
			dateFormat,
			tableIndex,
			route,

			// icon
			arrowDown,
			arrowUp,
			leftArrowIcon,

			// translate function
			t,

			// computed
			resumesList,
			totalResumeCount,

			// methods
			fetchResuleList,
			changePerPageMaxItems,
			updateSearchQuery,
			handlePageChange,
			requestResumeAccess,
			openTable,
		};
	},
};
</script>

<style lang="scss">
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.resume__list {
	// .select__limit {
	// 	display: flex;
	// 	align-items: center;

	// 	span {
	// 		font-weight: 500;
	// 	}

	// 	.dropdown {
	// 		margin: 0px 20px;

	// 		.dropdown-toggle {
	// 			color: #000;

	// 			&:hover {
	// 				border-color: $colorExLightGray !important;
	// 				color: #000 !important;
	// 			}
	// 		}
	// 	}
	// }

	.invoice__row {
		@media (max-width: 1024px) {
			border: none;
		}
	}
	// .go__back {
	// 		cursor: pointer;
	// 		background-color: #fff;
	// 		border-radius: 50px;
	// 		width: 150px;
	// 		margin-bottom: 10px;

	// 		.banner-back {
	// 			display: flex;
	// 			align-items: center;

	// 			.back-icon {
	// 				width: 40px;
	// 				height: 40px;
	// 				line-height: 40px;
	// 				text-align: center;
	// 				background-color: $coloRed;
	// 				border-radius: 100%;
	// 				margin-right: 10px;
	// 				color: #fff;
	// 				font-size: 25px;
	// 			}

	// 			.back-text {
	// 				span {
	// 					font-weight: 600;
	// 					color: #000;
	// 				}
	// 			}
	// 		}
	// }

	table {
		tr {
			border-right: none;
			button {
				&.disable {
					background: gray;

					&:hover {
						color: #fff !important;
					}
				}
			}
		}
	}
}

// @media (max-width: 576px) {
// 	.resume__list {
// 		.select__limit {
// 			margin-bottom: 10px;
// 			justify-content: center;

// 			span {
// 				font-size: 14px;
// 			}
// 		}
// 	}
// }
// .table td,
// .table th {
// 	border-right: 1px solid #dee2e6;
// }
// .table td:first-child {
// 	border-left: 1px solid #dee2e6;
// }

.expand-table {
	th {
		width: 10%;
	}

	td {
		width: 20%;
	}
}
</style>

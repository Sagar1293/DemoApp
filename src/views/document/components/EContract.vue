<template>
	<div class="e_contract">
		<div class="table-header">
			<div class="payment-pill-header">
				<div class="pph-left">
					<h5 class="title-lg">{{ t('sidebar.eContract') }}</h5>
				</div>
			</div>
			<div class="select__limit mobile-table-header">
				<span>{{ t('common.show') }} </span>
				<div class="dropdown">
					<a class="
								dropdown-toggle
								btn-common btn-gray-border
								tbl-drop
							" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						{{ maxItemsPerPage }}
					</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
		</div>

		<new-data-table :data="eContractList" sst pagination search @search="updateSearchQuery"
			:total="totalEContractCount" :max-items="maxItemsPerPage" @change-page="handleChangePage"
			class="large-table" @sort="handleSort">
			<template #header>
				<div class="select__limit d-flex align-items-center">
					<span>{{ t('invoiceList.show') }}</span>
					<div class="dropdown mx-2">
						<a class="
									dropdown-toggle
									btn-common btn-gray-border
									tbl-drop
								" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							{{ maxItemsPerPage }}
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
					<span>{{ t('invoiceList.entries') }}</span>
				</div>
			</template>
			<template #thead>
				<new-tb-th sort-key="contractor_contacts">{{ t('fieldList.contractName') }}</new-tb-th>
				<new-tb-th sort-key="created_at">{{ t('fieldList.creationOn') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.expiryDate') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.documentExpired') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.action') }}</new-tb-th>
			</template>

			<template #data="scopedData" ref="tableBody">
				<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
					{{ tr.expiry_date }}
					<new-tb-td>{{ tr.contractor_contacts }}</new-tb-td>
					<new-tb-td>{{ dateFormat(tr.created_at) }}</new-tb-td>
					<new-tb-td>{{ tr.mandate_end_date == null ? '-' : dateFormat(tr.mandate_end_date) }}</new-tb-td>
					<new-tb-td>
						<span :class="[isUserUploadedContractExpired(tr) ? 'text-red' : 'text-yellow']">
							<FontAwesomeIcon :icon="isUserUploadedContractExpired(tr) ? clockIcon : approveIcon"
								class="mr-2" />
							{{ isUserUploadedContractExpired(tr) ? 'Document Expired' : 'Document Not Expired' }}
						</span>
					</new-tb-td>
					<new-tb-td>
						<div class="d-flex align-items-center justify-content-center">
							<!-- <button
								class="tbl-action grey-edit"
								@click="viewSeekerInvoiceDetail(tr.id)"
							>
								<FontAwesomeIcon
									:icon="viewIcon"
									style="text-align: 'center'"
								/>
							</button> -->
							<ToolTip :title="t('toolTip.deleteEcontract')">
								<button class="tbl-action red-close ml-2" @click="deleteEContract(tr.id)">
									<FontAwesomeIcon :icon="deleteIcon" />
								</button>
							</ToolTip>
						</div>
					</new-tb-td>
				</new-tb-tr>
			</template>
		</new-data-table>

		<div>
			<new-data-table :data="eContractList" sst pagination search @search="updateSearchQuery"
				:total="totalEContractCount" :max-items="maxItemsPerPage" @change-page="handleChangePage"
				class="responsive-table">
				<template #header>
					<div class="select__limit desktop-table-header d-flex align-items-center">
						<span>{{ t('invoiceList.show') }}</span>
						<div class="dropdown mx-2">
							<a class="
									dropdown-toggle
									btn-common btn-gray-border
									tbl-drop
								" href="#" id="navbarDropdownEContract" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								{{ maxItemsPerPage }}
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdownEContractAria">
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
						<span>{{ t('invoiceList.entries') }}</span>
					</div>
				</template>
				<template #data="scopedData" ref="tableBody">
					<new-tb-tr class="invoice__row expand-table" :key="i" v-for="(tr, i) in scopedData.data">
						<div>
							<div class="d-flex align-items-center justify-content-between collapse-div"
								@click="openTable(i, item)">
								<div class="d-flex">
									<div>
										<div>
											{{ dateFormat(tr.created_at) }}
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
										<new-tb-th>{{ t('fieldList.contractName') }}</new-tb-th>

										<new-tb-td>{{ tr.file_name }}</new-tb-td>
									</new-tb-tr>

									<new-tb-tr>
										<new-tb-th>{{ t('fieldList.expiryDate') }}</new-tb-th>
										<new-tb-td>{{ dateFormat(tr.expiry_date) }}</new-tb-td>
									</new-tb-tr>

									<new-tb-tr>
										<new-tb-th>{{ t('fieldList.documentExpired') }}</new-tb-th>

										<new-tb-td>
											<span
												:class="[isUserUploadedContractExpired(tr) ? 'text-red' : 'text-yellow']">
												<FontAwesomeIcon
													:icon="isUserUploadedContractExpired(tr) ? clockIcon : approveIcon"
													class="mr-2" />
												{{ isUserUploadedContractExpired(tr) ? 'Document Expired' :
														'DocumentNot Expired'
												}}
											</span>
										</new-tb-td>
									</new-tb-tr>

									<new-tb-tr>
										<new-tb-th>{{ t('common.actions') }}</new-tb-th>

										<new-tb-td>
											<div class="d-flex align-items-center justify-content-end">
												<button class="tbl-action red-close" @click="deleteEContract(tr.id)">
													<FontAwesomeIcon :icon="deleteIcon" />
												</button>
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
</template>

<script>
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { dateFormat } from '@/utils/mixins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp, faClock, faThumbsUp, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import { useSwal } from '../../../components/sweetalert';
// import DefaultLoader from '@/components/loader/DefaultLoader.vue';

export default {
	name: 'EContract',

	components: {
		FontAwesomeIcon,
	},

	setup() {
		//refs
		const isUploadContractModal = ref(false);
		const tableIndex = ref(0);

		// icon
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const approveIcon = faThumbsUp;
		const clockIcon = faClock;
		const deleteIcon = faTimes;
		const viewIcon = faEye;
		const page = ref(1);
		const maxItemsPerPage = ref(5);
		const search = ref(null);
		const order = ref(null);

		//global store
		const store = useStore();

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });
		// sweetalert
		const Swal = useSwal();

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch work detail
			fetchEContract();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// show upload my document model
		const showUploadContractModal = computed({
			get() {
				return isUploadContractModal;
			},

			set(val) {
				isUploadContractModal.value = val;
			},
		});

		// user uploaded contract list
		const eContractList = computed(() => store.state.document.eContracts);
		// user uploaded contract expiry status check
		const isUserUploadedContractExpired = computed(() => {
			return data => {
				const today = new Date();
				const expiryDate = new Date(data.expiry_date);

				return today.getTime() >= expiryDate.getTime();
			};
		});
		//total  contract count
		const totalEContractCount = computed(() => store.state.document.totalEContracts);
		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch current users document type
		const fetchEContract = async () => {
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
				order: order.value,
			};
			await store.dispatch('document/getEContract', payload);
		};

		//filter and sorting data
		const handleSort = key => {
			console.log('sdajhsgdjhashjda');
			page.value = 1;
			order.value = [key.key, key.sortType];
			fetchEContract();
		};

		// handle page change
		const handleChangePage = val => {
			page.value = val;
			fetchEContract();
		};

		// handle search
		const updateSearchQuery = searchKey => {
			search.value = searchKey;
			page.value = 1;
			fetchEContract();
		};

		// change per page max items
		const changePerPageMaxItems = length => {
			maxItemsPerPage.value = length;
			page.value = 1;
			fetchEContract();
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
		// const viewSeekerContractDetail = link => {
		// 	window.open(link);
		// };

		// delete my document
		const deleteEContract = id => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to delete e contract ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then(async result => {
				console.log(id);
				console.log(result);
				if (result.isConfirmed) {
					store.dispatch('document/deleteJobseekerEContract', id).then(() => {
						fetchEContract();
					});
				}
			});
		};

		return {
			// translate function
			t,
			tableIndex,
			page,
			maxItemsPerPage,
			search,

			// icon
			arrowDown,
			arrowUp,
			approveIcon,
			clockIcon,
			deleteIcon,
			viewIcon,
			// refs
			dateFormat,

			// computed
			showUploadContractModal,
			eContractList,
			isUserUploadedContractExpired,
			totalEContractCount,

			// methods
			fetchEContract,
			openTable,
			// viewSeekerContractDetail,
			deleteEContract,
			handleChangePage,
			updateSearchQuery,
			changePerPageMaxItems,
			handleSort
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.e_contract {
	margin-bottom: 10px;
	margin-top: 40px;

	// .md-header {
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: space-between;

	// 	.md-header-left {
	// 		.header-title {
	// 			font-weight: 600;
	// 			font-size: 22px;
	// 		}
	// 	}
	// }

	table {
		tr {
			// .text-yellow {
			// 	color: #fff;
			// 	background-color: $colorWait;
			// 	padding: 3px 20px;
			// 	border-radius: 50px;
			// 	white-space: nowrap;
			// }

			// .text-red {
			// 	color: #fff;
			// 	background-color: #e92028;
			// 	padding: 3px 20px;
			// 	border-radius: 50px;
			// 	white-space: nowrap;
			// }
		}

		td {
			padding: 20px;
		}
	}

	// .table thead th {
	// 	border-bottom: transparent;
	// }

	// .table td {
	// 	border-right: 1px solid #dee2e6;
	// }
}

// @media (max-width: 576px) {
// 	.my__document {
// 		.md-header {
// 			display: block;
// 			text-align: center;
// 			.md-header-left {
// 				.header-title {
// 					margin-bottom: 15px;
// 					font-size: 20px;
// 				}
// 			}
// 		}
// 	}
// }

.expand-table {
	th {
		width: 29%;
	}

	td {
		width: 70%;
	}
}
</style>

<style>
@media (max-width: 768px) {
	.e_contract .data__table .table__header {
		display: block !important;
	}
}
</style>

<template>
	<!-- contract list - user uploaded -->
	<div class="contract_file">
		<!-- header -->
		<div class="payment-pill-header">
			<!-- title -->
			<div class="pph-left">
				<h5 class="title-lg">
					{{ t('document.contractFile') }}
				</h5>
			</div>

			<!-- action btn -->
			<div class="pph-right">
				<ToolTip :title="t('toolTip.uploadContract')">
					<button class="btn-common btn-red" type="button" @click="showUploadContractModal = true">+ {{
							t('document.uploadContract')
					}}</button>
				</ToolTip>
			</div>
		</div>

		<!-- contract data -->
		<new-data-table :data="userUploadedContractList" sst pagination search @search="updateSearchQuery"
			:total="totalContractCount" :max-items="maxItemsPerPage" @change-page="handleChangePage" @sort="handleSort"
			class="large-table">
			<template #header>
				<div class="select__limit d-flex align-items-center">
					<span>{{ t('invoiceList.show') }}</span>
					<div class="dropdown mx-2">
						<a class="
									dropdown-toggle
									btn-common btn-gray-border
									tbl-drop
								" href="#" id="navbarDropdownContract" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							{{ maxItemsPerPage }}
						</a>
						<ul class="dropdown-menu" aria-labelledby="navbarDropdownContractFile">
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
				<new-tb-th sort-key="file_name"> {{ t('fieldList.contractName') }}</new-tb-th>
				<new-tb-th sort-key="created_at">{{ t('fieldList.creationOn') }}</new-tb-th>
				<new-tb-th sort-key="expiry_date">{{ t('fieldList.expiryDate') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.documentExpired') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.action') }}</new-tb-th>
			</template>

			<template #data="scopedData" ref="tableBody">
				<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
					<new-tb-td>{{ tr.file_name }}</new-tb-td>
					<new-tb-td>{{ dateFormat(tr.created_at) }}</new-tb-td>
					<new-tb-td>{{ dateFormat(tr.expiry_date) }}</new-tb-td>
					<new-tb-td>
						<span :class="[isUserUploadedContractExpired(tr) ? 'text-red' : 'text-yellow']">
							<FontAwesomeIcon :icon="isUserUploadedContractExpired(tr) ? clockIcon : approveIcon"
								class="mr-2" />
							{{ isUserUploadedContractExpired(tr) ? 'Document Expired' : 'Document Not Expired' }}
						</span>
					</new-tb-td>
					<new-tb-td>
						<div class="d-flex align-items-center justify-content-center">
							<ToolTip :title="t('toolTip.viewContract')">
								<button class="tbl-action grey-edit" @click="viewSeekerContractDetail(tr.file_path)">
									<FontAwesomeIcon :icon="viewIcon" style="text-align: 'center'" />
								</button>
							</ToolTip>
							<ToolTip :title="t('toolTip.deleteContract')">
								<button class="tbl-action red-close ml-2" @click="deleteSeekerContract(tr.id)">
									<FontAwesomeIcon :icon="deleteIcon" />
								</button>
							</ToolTip>
						</div>
					</new-tb-td>
				</new-tb-tr>
			</template>
		</new-data-table>

		<div>
			<new-data-table :data="userUploadedContractList" sst pagination search @search="updateSearchQuery"
				:total="totalContractCount" :max-items="maxItemsPerPage" @change-page="handleChangePage"
				class="responsive-table">
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
				<template #data="scopedData" ref="tableBody">
					<new-tb-tr class="invoice__row expand-table" :key="i" v-for="(tr, i) in scopedData.data">
						<div>
							<div class="d-flex align-items-center justify-content-between collapse-div"
								@click="openTable(i, item)">
								<div class="d-flex">
									<div>
										<div>
											{{ tr.file_name }}
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
									<!-- <new-tb-tr>
										<new-tb-th>{{
											t('fieldList.contractName')
										}}</new-tb-th>

										<new-tb-td>{{ tr.file_name }}</new-tb-td>
									</new-tb-tr> -->

									<new-tb-tr>
										<new-tb-th>{{ t('fieldList.creationOn') }}</new-tb-th>

										<new-tb-td>{{ dateFormat(tr.created_at) }}</new-tb-td>
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
											<div class="d-flex align-items-center justify-content-center">
												<ToolTip :title="t('toolTip.viewContract')">
													<button class="tbl-action grey-edit"
														@click="viewSeekerContractDetail(tr.file_path)">
														<FontAwesomeIcon :icon="viewIcon"
															style="text-align: 'center'" />
													</button>
												</ToolTip>
												<ToolTip :title="t('toolTip.deleteContract')">
													<button class="tbl-action red-close ml-2"
														@click="deleteSeekerContract(tr.id)">
														<FontAwesomeIcon :icon="deleteIcon" />
													</button>
												</ToolTip>
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

	<!-- Upload contract -->
	<Suspense v-if="showUploadContractModal.value">
		<template #default>
			<upload-my-documents v-model:isModalShow="showUploadContractModal"
				@newContractUploaded="fetchUserUploadedContract" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>

	<!-- open image modal -->
	<Suspense v-if="showDocumentImageModal.value">
		<template #default>
			<open-image-modal v-model:isModalShow="showDocumentImageModal" :imageLink="imageLink" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { ref, defineAsyncComponent, onMounted, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { dateFormat } from '@/utils/mixins';
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
import { faChevronDown, faChevronUp, faClock, faThumbsUp, faTimes, faEye } from '@fortawesome/free-solid-svg-icons';
import { useSwal } from '../../../components/sweetalert';

const UploadMyDocuments = defineAsyncComponent(async () => {
	return import('@/views/document/components/UploadContract.vue' /* webpackChunkName:"UploadContract" */);
});

const OpenImageModal = defineAsyncComponent(async () => {
	return import('@/views/document/components/ImageModal/MyDocumentImageModal.vue' /* webpackChunkName:"UploadContract" */);
});

export default {
	name: 'ContractFile',

	components: {
		DefaultLoader,
		UploadMyDocuments,
		FontAwesomeIcon,
		OpenImageModal,
	},

	setup() {
		// refs
		const isUploadContractModal = ref(false);
		const tableIndex = ref(0);
		const isDocImgModal = ref(false);
		const imageLink = ref(null);

		// global store
		const store = useStore(); // use state

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
			fetchUserUploadedContract();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// show upload my document model
		const showDocumentImageModal = computed({
			get() {
				return isDocImgModal;
			},
			set(val) {
				isDocImgModal.value = val;
			},
		});
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
		const userUploadedContractList = computed(() => store.state.document.contracts);

		// user uploaded contract expiry status check
		const isUserUploadedContractExpired = computed(() => {
			return data => {
				const today = new Date();
				const expiryDate = new Date(data.expiry_date);

				return today.getTime() >= expiryDate.getTime();
			};
		});
		//total  contract count
		const totalContractCount = computed(() => store.state.document.totalContracts);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch current users document type
		const fetchUserUploadedContract = async () => {
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
				order: order.value,
			};
			await store.dispatch('document/getUserUploadedContract', payload);
		};
		//filter and sorting data
		const handleSort = key => {
			console.log('sdajhsgdjhashjda');
			page.value = 1;
			order.value = [key.key, key.sortType];
			fetchUserUploadedContract();
		};

		// handle page change
		const handleChangePage = val => {
			page.value = val;
			fetchUserUploadedContract();
		};

		// handle search
		const updateSearchQuery = searchKey => {
			search.value = searchKey;
			page.value = 1;
			fetchUserUploadedContract();
		};

		// change per page max items
		const changePerPageMaxItems = length => {
			maxItemsPerPage.value = length;
			page.value = 1;
			fetchUserUploadedContract();
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
		const viewSeekerContractDetail = link => {
			const checkExtenation = link
				.split(/[#?]/)[0]
				.split('.')
				.pop()
				.trim();
			if (checkExtenation == 'pdf' || checkExtenation == 'docx') {
				window.open(link);
			} else {
				imageLink.value = link;
				showDocumentImageModal.value = true;
				isDocImgModal.value = true;
			}
		};

		// delete my document
		const deleteSeekerContract = id => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to delete contract ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then(async result => {
				if (result.isConfirmed) {
					store.dispatch('document/deleteJobseekerSeekerContract', id).then(() => {
						fetchUserUploadedContract();
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
			imageLink,

			// icon
			arrowDown,
			arrowUp,
			approveIcon,
			clockIcon,
			deleteIcon,
			viewIcon,

			showDocumentImageModal,
			isDocImgModal,
			// refs
			dateFormat,

			// computed
			showUploadContractModal,
			userUploadedContractList,
			isUserUploadedContractExpired,
			totalContractCount,

			// methods
			fetchUserUploadedContract,
			openTable,
			viewSeekerContractDetail,
			deleteSeekerContract,
			handleChangePage,
			updateSearchQuery,
			changePerPageMaxItems,
			handleSort,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.contract_file {
	margin-bottom: 10px;
	margin-top: 110px;

	@media (max-width: 768px) {
		margin-top: 50px;
	}

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
			td {
				padding: 20px;

				&.text-yellow {
					color: $colorWait;
				}
			}
		}

		.table thead th {
			border-bottom: transparent;
		}
	}

	// .text-red {
	// 	color: #fff;
	// 	background-color: #e92028;
	// 	padding: 3px 20px;
	// 	border-radius: 50px;
	// 	white-space: nowrap;
	// }

	// .text-yellow {
	// 	color: #fff;
	// 	background-color: $colorWait;
	// 	padding: 3px 20px;
	// 	border-radius: 50px;
	// 	white-space: nowrap;
	// }
}

.table> :not(caption)>*>* {
	border-bottom-width: 0;
}

@media (max-width: 576px) {
	// .contract_file{
	// 	.md-header {
	// 		display: block;
	// 		text-align: center;
	// 		.md-header-left {
	// 			.header-title {
	// 				margin-bottom: 15px;
	// 				font-size: 20px;
	// 			}
	// 		}
	// 	}
	// }
}

// .expand-table {
// 	overflow: visible;
// 	// border-bottom: 10px solid #fff;
// 	border-radius: 30px;
// 	border-bottom: none;

// 	th {
// 		border: none;
// 		width: 30%;
// 	}

// 	td {
// 		width: 70%;
// 		border: none;
// 		background-color: #fff;
// 	}
// }

// .large-table {
// 	display: block;
// 	@media (max-width: 1024px) {
// 		display: none;
// 	}
// }

// .responsive-table {
// 	display: none;

// 	@media (max-width: 1024px) {
// 		display: block;
// 	}

// 	.table-border {
// 		border: 1px solid #ccc;
// 		border-radius: 30px;
// 		overflow: hidden;
// 		max-width: 460px;
// 		margin: 15px auto;
// 	}

// 	.collapse-div {
// 		border-top-left-radius: 10px;
// 		border-top-right-radius: 10px;
// 		padding: 20px 20px 0 20px;
// 		background-color: #f5f5f5;
// 	}
// }

// .border-padding {
// 	border-bottom-left-radius: 10px;
// 	background-color: #f5f5f5;
// 	padding: 10px;
// 	border-bottom-right-radius: 10px;
// }

.btn-red {
	white-space: nowrap;
}
</style>

<style>
@media (max-width: 768px) {
	.contract_file .data__table .table__header {
		display: flex !important;
	}
}

@media (max-width: 575px) {
	.contract_file .data__table .table__header {
		display: block !important;
	}
}
</style>
<template>
	<div class="dash-table">
		<div class="row" v-if="userTypeInfo == 'jobseeker'">
			<div class="col-12">
				<div class="table-header mb-2">
					<h5 class="title-lg">{{ t('leDashboard.receivedDocuments') }}</h5>
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
			</div>

			<new-data-table :data="receiveDocuments" sst pagination search @search="updateSearchQuery"
				:total="totalRecevedDocuments" :max-items="maxItemsPerPage" @change-page="handleChangePage"
				class="large-table">
				<template #header>
					<div class="select__limit">
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
				</template>

				<template #thead>
					<new-tb-th>{{ t('leDashboard.sentOn') }}</new-tb-th>
					<new-tb-th>{{ t('leDashboard.documentTitle') }}</new-tb-th>
					<new-tb-th>{{ t('fieldList.description') }}</new-tb-th>
					<new-tb-th>{{ t('fieldList.action') }}</new-tb-th>
				</template>

				<template #data="scopedData" ref="tableBody">
					<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
						<new-tb-td>{{ dateFormat(tr.created_at) || '-' }}</new-tb-td>
						<new-tb-td>{{ tr.title || '-' }}</new-tb-td>
						<new-tb-td>{{ tr.description || '-' }}</new-tb-td>
						<new-tb-td>
							<div class="d-flex align-items-center justify-content-center">
								<ToolTip title="View Resume">
									<button class="tbl-action grey-edit" @click="viewResume(tr.file_path, tr.id)">
										<FontAwesomeIcon :icon="viewIcon" style="text-align: 'center'" />
									</button>
								</ToolTip>
							</div>
						</new-tb-td>
					</new-tb-tr>
				</template>
			</new-data-table>

			<div>
				<new-data-table :data="receiveDocuments" sst pagination search @search="updateSearchQuery"
					:total="totalRecevedDocuments" :max-items="maxItemsPerPage" @change-page="handleChangePage"
					class="responsive-table">
					<template #header>
						<div class="select__limit desktop-table-header">
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
					</template>

					<template #data="scopedData" ref="tableBody">
						<new-tb-tr class="invoice__row expand-table" :key="i" v-for="(tr, i) in scopedData.data">
							<div>
								<div class="d-flex align-items-center justify-content-between collapse-div"
									@click="openTable(i, item)">
									<div class="d-flex">
										<div>
											<div>
												{{ dateFormat(tr.created_at) || '-' }}
											</div>
											<div>
												{{ tr.due_date || '-' }}
											</div>
										</div>
									</div>

									<div>
										<a>
											<FontAwesomeIcon :icon="arrowDown" v-if="tableIndex !== i"
												class="arrowIcon" />
										</a>

										<a>
											<FontAwesomeIcon :icon="arrowUp" v-if="tableIndex === i"
												class="arrowIcon" />
										</a>
									</div>
								</div>

								<div class="border-padding">
									<div v-if="i == tableIndex" class="table-border">
										<new-tb-tr>
											<new-tb-th>{{ t('leDashboard.sentOn') }}</new-tb-th>
											<new-tb-td>{{ dateFormat(tr.created_at) || '-' }}</new-tb-td>
										</new-tb-tr>

										<new-tb-tr>
											<new-tb-th>{{ t('leDashboard.documentTitle') }}</new-tb-th>
											<new-tb-td>{{ tr.title || '-' }}</new-tb-td>
										</new-tb-tr>

										<new-tb-tr>
											<new-tb-th>{{ t('fieldList.description') }}</new-tb-th>
											<new-tb-td>{{ tr.description || '-' }}</new-tb-td>
										</new-tb-tr>

										<new-tb-tr>
											<new-tb-th>{{ t('fieldList.action') }}</new-tb-th>

											<new-tb-td>
												<ToolTip :title="t('toolTip.viewResume')">
													<button class="tbl-action grey-edit"
														@click="viewResume(tr.file_path)">
														<FontAwesomeIcon :icon="viewIcon"
															style="text-align: 'center'" />
													</button>
												</ToolTip>
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
import { useStore } from 'vuex';
import { onMounted, computed, ref, defineAsyncComponent } from 'vue';
import { dateFormat } from '@/utils/mixins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp, faEye, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import DefaultLoader from '@/components/loader/DefaultLoader.vue';

const OpenImageModal = defineAsyncComponent(async () => {
	return import('@/views/document/components/ImageModal/MyDocumentImageModal.vue' /* webpackChunkName:"UploadContract" */);
});

export default {
	name: 'RecevedDocuments',

	components: {
		FontAwesomeIcon,
		OpenImageModal,
		DefaultLoader,
	},

	// composition api
	setup() {
		//ref
		const page = ref(1);
		const maxItemsPerPage = ref(5);
		const search = ref(null);
		const tableIndex = ref(0);
		const isDocImgModal = ref(false);
		const imageLink = ref(null);
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// icon
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const fileIcon = faFileAlt;
		const viewIcon = faEye;

		// global store
		const store = useStore(); // use state

		// Dashboard and user profile
		const receiveDocuments = computed(() => store.state.dashboard.RecevedDocuments);

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch logged users invoices
			if (userTypeInfo.value == 'jobseeker') {
				fetchRecevedDocuments();
			}
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
		// total invoice count company
		const totalRecevedDocuments = computed(() => store.state.dashboard.totalRecevedDocuments);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// handle page change
		const handleChangePage = val => {
			page.value = val;
			fetchRecevedDocuments();
		};

		// handle search
		const updateSearchQuery = searchKey => {
			search.value = searchKey;
			fetchRecevedDocuments();
		};

		// change per page max items
		const changePerPageMaxItems = length => {
			maxItemsPerPage.value = length;
			page.value = 1;
			fetchRecevedDocuments();
		};

		// fetch insurance services
		const fetchRecevedDocuments = () => {
			const payload = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
			};
			store.dispatch('dashboard/getReceiveDocuments', payload);
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

		// view resume
		const viewResume = (link, id) => {
			receiveDocumentsViewStatus(id);
			// window.open(link);
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
		const receiveDocumentsViewStatus = id => {
			store.dispatch('dashboard/documentsViewStatus', id);
		};

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		return {
			// ref
			t,
			maxItemsPerPage,
			tableIndex,
			imageLink,

			// icon
			arrowDown,
			arrowUp,
			fileIcon,
			viewIcon,

			// computed
			receiveDocuments,
			totalRecevedDocuments,
			dateFormat,
			userTypeInfo,
			showDocumentImageModal,
			isDocImgModal,

			// methods
			handleChangePage,
			updateSearchQuery,
			changePerPageMaxItems,
			openTable,
			viewResume,
			receiveDocumentsViewStatus,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.dash-table {
	width: 100%;
	display: block;
	background-color: #fff;
	border-radius: 20px;
	padding: 30px 15px;

	.payment-pill-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

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
		.tbl-status {
			display: flex;
			align-items: center;
			width: 100%;

			span {
				margin-right: 10px;

				&.sts-wait {
					color: $colorWait;
					margin-left: 5px;
				}

				&.sts-approve {
					color: $colorApprove;
					margin-left: 5px;
				}
			}

			img {
				width: 18px;
				height: 18px;
				object-fit: cover;
			}
		}
	}
}

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

@media (max-width: 468px) {
	.dash-table {
		.title-lg {
			// text-align: center;
		}
	}
}

.expand-table {
	th {
		width: 20%;
	}

	td {
		width: 80%;
	}
}
</style>

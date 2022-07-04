<template>
	<div class="econtract__list">
		<div class="payment-pill-header">
			<div class="pph-left">
				<h5 class="title-lg">{{ t('eContract.eContractTitle') }}</h5>
			</div>
			<!-- upload document btn -->
			<div class="pph-right">
				<button class="btn-common btn-red " type="button" @click="showAddEContractModal = true">+ {{ t('fieldList.addEContract') }}</button>
			</div>
		</div>

		<new-data-table :data="eContractList" sst pagination search @search="updateSearchQuery" :total="totalInvoiceCount" :max-items="maxItemsPerPage" @change-page="handleChangePage">
			<template #header>
				<div class="select__limit ml-3">
					<span>Show</span>
					<div class="dropdown">
						<a
							class="
								dropdown-toggle
								btn-common btn-gray-border
								tbl-drop
							"
							href="#"
							id="navbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
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
					<span>entries</span>
				</div>
			</template>

			<template #thead>
				<new-tb-th>{{ t('fieldList.contractName') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.expiryDate') }}</new-tb-th>
				<new-tb-th>{{ t('fieldList.documentExpired') }}</new-tb-th>
				<new-tb-th>{{ t('common.actions') }}</new-tb-th>
			</template>

			<template #data="scopedData" ref="tableBody">
				<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
					<new-tb-td>{{ tr.file_name }}</new-tb-td>
					<new-tb-td>{{ dateFormat(tr.expiry_date) }}</new-tb-td>
					<new-tb-td :class="[isUserUploadedContractExpired(tr) ? 'text-red' : 'text-yellow']">
						{{ isUserUploadedContractExpired(tr) ? 'Document Expired' : 'Document Not Expired' }}
					</new-tb-td>
					<new-tb-td class="buttons">
						<!-- remove work detail -->
						<div class="delete-btn" @click="removeEcontract(tr.id)">
							<FontAwesomeIcon :icon="trashIcon" />
						</div>
					</new-tb-td>
				</new-tb-tr>
			</template>
		</new-data-table>
	</div>
	<!-- Add my document -->
	<Suspense v-if="showAddEContractModal.value">
		<template #default>
			<add-e-contract v-model:isModalShow="showAddEContractModal" @newEContractUploaded="fetchEcontract" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
// import Slider from '@vueform/slider';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { dateFormat } from '@/utils/mixins';
// import Multiselect from '@vueform/multiselect';
import { faEye, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useSwal } from '../../../components/sweetalert';
// import { useRouter } from 'vue-router';

const AddEContract = defineAsyncComponent(async () => {
	return import('@/views/econtract/components/AddMyDocument.vue' /* webpackChunkName:"UploadMyDocument" */);
});
export default {
	name: 'EContract',

	components: {
		// Slider,
		// Multiselect,
		FontAwesomeIcon,
		AddEContract,
	},

	setup() {
		//ref
		// const paySlipValue = ref(52);
		const page = ref(1);
		const maxItemsPerPage = ref(5);
		const search = ref(null);
		const seekerId = ref(null);
		const viewIcon = faEye;
		const trashIcon = faTrashAlt;

		const isAddEContractModal = ref(false);

		//global store
		const store = useStore();

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// sweetalert
		const Swal = useSwal();

		//globle router
		// const router = useRouter();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			//get jobseeker option
			// store.dispatch('econtract/getJobSeeker');
			fetchEcontract();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */

		// show add my document model
		const showAddEContractModal = computed({
			get() {
				return isAddEContractModal;
			},

			set(val) {
				isAddEContractModal.value = val;
			},
		});

		// gigworkhour list
		const eContractList = computed(() => store.getters['econtract/getEcontract']);

		// total invoice count
		const totalInvoiceCount = computed(() => store.state.econtract.totalEContract);

		// user uploaded contract expiry status check
		const isUserUploadedContractExpired = computed(() => {
			return data => {
				const today = new Date();
				const expiryDate = new Date(data.expiry_date);

				return today.getTime() >= expiryDate.getTime();
			};
		});
		//job seeker option
		// const jobSeekerOptions = computed(
		// 	() => store.getters['econtract/getjobseekerOptions'],
		// );
		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch current users document type
		const fetchEcontract = async () => {
			const values = {
				page: page.value,
				limit: maxItemsPerPage.value,
				search: search.value,
			};
			await store.dispatch('econtract/getEContractList', {
				payload: values,
			});
		};

		// handle page change
		const handleChangePage = val => {
			page.value = val;
			fetchEcontract();
		};

		// handle search
		const updateSearchQuery = searchKey => {
			search.value = searchKey;
			fetchEcontract();
		};

		// change per page max items
		const changePerPageMaxItems = length => {
			maxItemsPerPage.value = length;
			page.value = 1;
			fetchEcontract();
		};
		// select drop down box on change
		const onChange = event => {
			seekerId.value = event;
			fetchEcontract();
		};
		// remove work details
		const removeEcontract = id => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to remove this work detail ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Remove It',
			}).then(async result => {
				if (result.isConfirmed) {
					await store.dispatch('econtract/deleteWorkDetail', id).then(() => {
						Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						fetchEcontract();
					});
				}
			});
		};

		//View gig work hour details
		// const viewGigWorkDetail = data => {
		// 	store.commit('gigworkhour/SET_STATE', {
		// 		action: 'gigWorkDetail',
		// 		data: data,
		// 	});
		// 	router.push({ name: 'ViewGigWorkDetail', params: { id: data.id } });
		// };

		return {
			// translate function
			t,
			// ref
			maxItemsPerPage,
			seekerId,
			viewIcon,
			trashIcon,
			// paySlipValue ,
			dateFormat,

			// computed
			eContractList,
			totalInvoiceCount,
			isUserUploadedContractExpired,
			showAddEContractModal,
			// jobSeekerOptions,

			// methods
			handleChangePage,
			updateSearchQuery,
			changePerPageMaxItems,
			onChange,
			removeEcontract,
			fetchEcontract,
			// viewGigWorkDetail,
		};
	},
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.econtract__list {
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
	.buttons {
		color: #ff4b57;
		display: flex;
		cursor: pointer;

		.delete-btn,
		.view-btn {
			width: 40px;
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 5px;
			border-radius: 12px;
			background-color: #f8dddf;
		}
	}

	.invoice__row {
		.tbl-action-disabled {
			width: 40px;
			height: 40px;
			background-color: $colorExLightGray;
			border-radius: 100%;
			text-align: center;
			line-height: 40px;
			display: inline-block;
			margin-left: 10px;

			svg {
				color: $colorGray;
			}
		}

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
				// width: 40px;
				// height: 40px;
				width: 18px;
				height: 18px;
				object-fit: cover;
			}
		}
	}
}

.table td,
.table th {
	border-right: 1px solid #dee2e6;
}
.table td:first-child {
	border-left: 1px solid #dee2e6;
}
</style>

<template>
	<div class="employerDetails">
		<!-- title -->
		<div class="payment-pill-header d-lg-flex d-block mb-4">
			<!-- employer details -->
			<div class="pph-left">
				<h5 class="title-lg white-space mr-2 ">{{ t('fieldList.recipientDetails') }}</h5>
			</div>
			<!-- <div class="plus-modal ml-lg-0 ml-auto" @click="toggleAttachmentModal">
				<FontAwesomeIcon
					:icon="plusIcon"
				/>
			</div> -->
			<div class="d-flex align-items-center mt-sm-0 mt-2">
				<!-- select employer -->
				<div class="select-employee mt-md-0 w-100">
					<Multiselect
						id="employerList"
						class="form-group multi-close-dropdown"
						:placeholder="t('common.selectRecipient')"
						v-model="selectedEmployerId"
						:options="employerList"
						@change="empListChage($event)"
						mode="single"
						:canDeselect="true"
						:searchable="true"
					>
						<!-- @click="removeEmployee" -->
						<template v-slot:option="{ option }">
							{{ option.label }}
							<span @click="removeCompany(option.value)">
								<FontAwesomeIcon :icon="deleteIcon" class="close-icon" />
							</span>
						</template>
					</Multiselect>
					<!-- <div class="xyz">X</div> -->
				</div>
				<ToolTip :title="t('toolTip.addInvoiceRecipient')">
					<div class="pph-right">
						<button class="btn-common btn-red white-space ml-1 add-recipt-btn" @click="toggleAttachmentModal">
							{{ t('teamInvoiceList.addRecipient') }}
						</button>
					</div>
				</ToolTip>
			</div>
		</div>
		<p class="text-danger" style="text-align:center">
			{{ formFieldsData.selectedEmployerId.errorMessage }}
		</p>
		<!-- employer details -->
		<div class="pph-left-box large-table" v-if="employerDetails">
			<!-- <h5 class="title-lg oligona-title">Anipa Oligona</h5> -->
			<div class="pph-left-content">
				<div class="company-content">
					<!-- company name -->
					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.name') }}:</p>
						<p class="company-value">
							{{ (employerDetails.company && employerDetails.company.company_name) || '-' }}
						</p>
					</div>
					<!-- company email -->
					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.email') }}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.user && employerDetails.company.user.email }}
						</p>
					</div>

					<!-- company phone -->
					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.phone') }}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.user && employerDetails.company.user.phone_number }}
						</p>
					</div>

					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.residence') }}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.countryReference && employerDetails.company.countryReference.country_name }}
						</p>
					</div>

					<!-- <div class="company-text">
						<p class="company-titel">{{t('fieldList.city')}}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.companyCity && employerDetails.company.companyCity.city_name || '-'}}
						</p>
					</div> -->

					<!-- company address -->
					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.address') }}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.address }}
						</p>
					</div>
				</div>

				<!-- <div class="company-content company-sub-content"> -->
				<div class="company-content">
					<!-- employer ssn -->
					<!-- <div class="company-text">
						<p class="company-titel">{{t('fieldList.companyRegNum')}}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.reg_number || '-' }}
						</p>
					</div> -->

					<!-- employer tax no. -->
					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.zipCode') }}.:</p>
						<p class="company-value">
							{{ (employerDetails.company && employerDetails.company.zip_code) || '-' }}
						</p>
					</div>

					<!-- employer y tunnus -->
					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.employerYTunnus') }}:</p>
						<p class="company-value">
							{{ (employerDetails.company && employerDetails.company.reg_number) || '-' }}
						</p>
					</div>

					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.operatorCode') }}:</p>
						<p class="company-value">
							{{ (employerDetails.company && employerDetails.company.operator_code) || '-' }}
						</p>
					</div>

					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.vatNumber') }}:</p>
						<p class="company-value">
							{{ (employerDetails.company && employerDetails.company.vat_number) || '-' }}
						</p>
					</div>

					<div class="company-text">
						<p class="company-titel">{{ t('fieldList.Type') }}:</p>
						<p class="company-value" v-if="employerDetails.company.is_private == true">
							{{ t('leInvoice.addInvoice.private') }}
							<!-- {{ employerDetails.company && employerDetails.company.is_private || '-' }} -->
						</p>
						<p class="company-value" v-else>
							{{ t('common.company') }}
							<!-- {{ employerDetails.company && employerDetails.company.is_private || '-' }} -->
						</p>
					</div>
					<!-- </div> -->
				</div>
			</div>
		</div>

		<!-- responsive data -->
		<div class=" attachment-table responsive-table mb-4">
			<div v-if="employerDetails">
				<div>
					<div class="d-flex align-items-center justify-content-between collapse-div" @click="openTable(index, item)">
						<div class="d-flex">
							<div>
								{{ (employerDetails.company && employerDetails.company.company_name) || '-' }}
							</div>
						</div>
						<div>
							<a>
								<FontAwesomeIcon :icon="arrowDown" v-if="tableIndex !== index" class="arrowIcon" />
							</a>

							<a>
								<FontAwesomeIcon :icon="arrowUp" v-if="tableIndex === index" class="arrowIcon" />
							</a>
						</div>
					</div>
				</div>
				<div class="border-padding">
					<div v-if="tableIndex === index" class=" pph-left-box">
						<div class="pph-left-content">
							<div class="company-content">
								<!-- company name -->
								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.name') }}:</p>
									<p class="company-value">
										{{ (employerDetails.company && employerDetails.company.company_name) || '-' }}
									</p>
								</div>
								<!-- company email -->
								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.email') }}:</p>
									<p class="company-value">
										{{ employerDetails.company && employerDetails.company.user && employerDetails.company.user.email }}
									</p>
								</div>

								<!-- company phone -->
								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.phone') }}:</p>
									<p class="company-value">
										{{ employerDetails.company && employerDetails.company.user && employerDetails.company.user.phone_number }}
									</p>
								</div>

								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.residence') }}:</p>
									<p class="company-value">
										{{ employerDetails.company && employerDetails.company.countryReference && employerDetails.company.countryReference.country_name }}
									</p>
								</div>

								<!-- <div class="company-text">
						<p class="company-titel">{{t('fieldList.city')}}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.companyCity && employerDetails.company.companyCity.city_name || '-'}}
						</p>
					</div> -->

								<!-- company address -->
								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.address') }}:</p>
									<p class="company-value">
										{{ employerDetails.company && employerDetails.company.address }}
									</p>
								</div>
							</div>

							<!-- <div class="company-content company-sub-content"> -->
							<div class="company-content">
								<!-- employer ssn -->
								<!-- <div class="company-text">
						<p class="company-titel">{{t('fieldList.companyRegNum')}}:</p>
						<p class="company-value">
							{{ employerDetails.company && employerDetails.company.reg_number || '-' }}
						</p>
					</div> -->

								<!-- employer tax no. -->
								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.zipCode') }}.:</p>
									<p class="company-value">
										{{ (employerDetails.company && employerDetails.company.zip_code) || '-' }}
									</p>
								</div>

								<!-- employer y tunnus -->
								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.employerYTunnus') }}:</p>
									<p class="company-value">
										{{ (employerDetails.company && employerDetails.company.reg_number) || '-' }}
									</p>
								</div>

								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.operatorCode') }}:</p>
									<p class="company-value">
										{{ (employerDetails.company && employerDetails.company.operator_code) || '-' }}
									</p>
								</div>

								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.vatNumber') }}:</p>
									<p class="company-value">
										{{ (employerDetails.company && employerDetails.company.vat_number) || '-' }}
									</p>
								</div>

								<div class="company-text">
									<p class="company-titel">{{ t('fieldList.Type') }}:</p>
									<p class="company-value" v-if="employerDetails.company.is_private == true">
										{{ t('leInvoice.addInvoice.private') }}
										<!-- {{ employerDetails.company && employerDetails.company.is_private || '-' }} -->
									</p>
									<p class="company-value" v-else>
										{{ t('common.company') }}
										<!-- {{ employerDetails.company && employerDetails.company.is_private || '-' }} -->
									</p>
								</div>
								<!-- </div> -->
							</div>
						</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- Add employer form -->
	<Suspense v-if="showAddEmployerModal.value">
		<template #default>
			<AddEmployerModal v-model:isModalShow="showAddEmployerModal" @newEmployeeAdded="fetchEmplist" />
		</template>
	</Suspense>
</template>

<script>
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import Multiselect from '@vueform/multiselect';
import { useI18n } from 'vue-i18n';
import { onMounted } from '@vue/runtime-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddEmployerModal from '@/views/invoice/components/AddEmployerModal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'EmployerDetails',

	components: {
		Multiselect,
		FontAwesomeIcon,
		AddEmployerModal,
	},

	props: {
		formFields: Object,
	},

	setup(props) {
		// icone
		// const plusIcon = faPlus;
		const isAddEmployerModalShow = ref(false);
		const formFieldsData = ref(props.formFields);
		const deleteIcon = faTimes;
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		// global store
		const store = useStore();

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// ref
		const selectedEmployerId = ref(null);

		const tableIndex = ref(0);

		const index = ref(0);

		/**
		 * Mounted
		 * *******************************************************************
		 */

		onMounted(() => {
			fetchEmplist();
		});

		/**
		 * computed props
		 * *******************************************************************
		 */
		// get employer list
		const employerList = computed(() => {
			return store.getters['invoice/getEmployerList'];
		});
		const empListChage = event => {
			formFieldsData.value.selectedEmployerId.value = event ?? null;
		};
		// employer details
		const employerDetails = computed(() => {
			return employerList.value.find(x => {
				// formFieldsData.selectedEmployerId = selectedEmployerId.value
				// console.log(formFieldsData.selectedEmployerId,'//////////////');
				if (x.company.id === selectedEmployerId.value) {
					formFieldsData.value.quickPayStatus.value = x.company.quick_pay_status || false;
					return true;
				}
			});
		});

		const showAddEmployerModal = computed({
			get() {
				return isAddEmployerModalShow;
			},

			set(val) {
				isAddEmployerModalShow.value = val;
			},
		});

		/**
		 * metheds
		 * *******************************************************************
		 */
		const toggleAttachmentModal = () => {
			showAddEmployerModal.value = true;
		};

		const fetchEmplist = async () => {
			await store.dispatch('invoice/getDefaultEmployerList');
		};

		//remove value -Select Employee
		// const removeEmployee = event => {
		// 	if (event) {
		// 		selectedEmployerId.value = null;
		// 	}
		// };
		// remove comapany
		const removeCompany = async id => {
			await store.dispatch('invoice/deleteInvoiceRemoveCompany', id).then(() => {
				fetchEmplist();
				selectedEmployerId.value = null;
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

		return {
			tableIndex,
			index,
			t,
			// ref
			selectedEmployerId,
			formFieldsData,

			// computed props
			employerList,
			employerDetails,
			empListChage,
			// methods
			// icone
			deleteIcon,
			arrowDown,
			arrowUp,
			// plusIcon,
			showAddEmployerModal,
			toggleAttachmentModal,
			fetchEmplist,

			openTable,

			//remove value from dropdown
			// removeEmployee,
			removeCompany,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
.responsive-table {
	.collapse-div {
		background-color: #f9f9f9;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}
	.border-padding {
		background-color: #f9f9f9;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
	}
}

.select-employee {
	width: 40%;
	border-radius: 12px;
	background-color: #ffff;
	border-radius: 20px;
	z-index: 1;

	@media (max-width: 576px) {
		width: 100%;
	}
}

.payment-pill-header {
	display: flex !important;
	align-items: center;
	justify-content: space-between;
	flex-wrap: nowrap;

	@media (max-width: 1280px) {
		flex-wrap: wrap;
	}

	.pph-left {
		color: #a0a4a9;
	}

	.plus-modal {
		cursor: pointer;
		color: #ffff;
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		background-color: #ff4b57;
		border: 2px solid #ffe4e6;
	}
}

.card-space {
	.payment-pill-header {
		.pph-right {
			@media (max-width: 1024px) {
				margin-top: 0px;
			}
		}
	}
}

.title-lg {
	font-size: 22px;
}

.oligona-title {
	margin-bottom: 5px;
}

.pencilIcon {
	color: #ff4b57;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #f8dddf;
	display: flex;
	justify-content: center;
	align-items: center;
}

.pph-left-box {
	padding: 19px;
	border-radius: 20px;
	background-color: #f9f9f9;

	.company-content {
		padding: 10px 0;

		.company-text {
			display: flex;
			margin-bottom: 5px;

			.company-titel {
				max-width: 160px;
				width: 100%;
				font-size: 15px;
				font-weight: 500;
				color: #858a90;
			}

			@media (max-width: 576px) {
				display: block;
			}
		}

		.company-value {
			font-size: 14px;
			margin-bottom: 5px;
			font-weight: 500;
		}
	}

	.company-sub-content {
		padding: 19px;
		border-radius: 20px;
		background-color: #f2f2f2;
	}
}
</style>
<style lang="scss">
.multi-close-dropdown {
	.multiselect-option {
		position: relative;

		.close-icon {
			position: absolute;
			right: 8px;
			top: 50%;
			transform: translateY(-50%);
			color: #ff4b57;
		}
	}
}

.multiselect-input {
	font-size: 14px;
}

.multiselect-options {
	overflow: auto;
	border-radius: 10px;
}

.multiselect-option {
	background-color: #ffffff;
	font-size: 14px;
	min-height: 45px;
}

.multiselect-option.is-selected.is-pointed {
	color: #000;
	background: #ffff;
}

.multiselect-option.is-selected {
	color: #ff4b57;
	background-color: #ffff;
}

.trip-time {
	padding: 5px 15px !important;
	display: block !important;

	.form-control {
		border: none;
		width: 100%;
		padding: 0;
		height: auto;
	}

	.vc-time-picker {
		padding: 0 !important;

		.vc-time-icon {
			width: 22px;
			height: 22px;
		}
	}

	.vc-time-date {
		display: none !important;
	}

	.vc-select select {
		background: none;
		border: none;

		&:hover {
			color: #000000;
		}
	}
}

.white-space {
	white-space: nowrap;
}

.add-recipt-btn {
	padding: 8px 10px;
	font-size: 14px;
}
</style>

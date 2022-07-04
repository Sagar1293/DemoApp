<template>
	<div class="document__list card-space container-lg">
		<div class="main-card position-relative">
			<div class="row">
				<div class="col-xl-6 col-lg-12 col-md-12 col-12">
					<div class="h-100 d-flex flex-column">
						<div class="logo-fi mb-4">
							<img src="@/assets/images/way2work-logo.png" alt="img" class="img-fluid" />
						</div>
						<div class="pph-left-box d-flex justify-content-between flex-column me-xl-3 mb-">
							<div>
								<div>
									<h5 class="title-lg">{{ t('viewSeekerPay.invoice_recipient') }}</h5>
									<p class="head-title">{{ t('viewSeekerPay.john_koskinen') }}</p>
								</div>
								<div>
									<h5 class="extrabold fn18 my-3">
										{{ t('viewSeekerPay.bank_account_number') }}
									</h5>
									<p class="head-title mb-3">{{ t('viewSeekerPay.and_other_details_here') }}</p>
								</div>
							</div>
							<div>
								<h4 class="extrabold fn18 mb-1">
									{{ t('viewSeekerPay.sent_by') }}
								</h4>
								<p class="head-title">{{ t('leInvoice.viewInvoice.way2_work_oy') }}</p>
								<p class="head-title">{{ t('viewSeekerPay.haad_title') }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-6 col-md-12 col-12">
					<div class="red-box ms-xl-3 mt-xl-0 mt-3">
						<div class="row justify-content-between mb-2">
							<div class="col-5">
								<h5 class="extrabold text-white fn18 d-inline">
									{{ t('viewSeekerPay.salary_breakdown') }}
								</h5>
								<div class="max-w-160 d-flex align-items-center justify-content-between">
									<span class="fn16 company-value">{{ t('viewSeekerPay.user_id') }}</span>
									<span class="fn16 company-value">661</span>
								</div>
							</div>
							<div class="col-5">
								<h5 class="extrabold text-white fn18">{{ t('fieldList.paymentDate') }}</h5>
								<span class="company-value">13.04.2022</span>
							</div>
						</div>
						<div class="z-3 position-relative">
							<div class="company-text">
								<p class="company-titel">{{ t('common.reference') }} :</p>
								<p class="company-value">11793</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('fieldList.startDate') }} :</p>
								<p class="company-value">13.04.2022</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('fieldList.endDate') }} :</p>
								<p class="company-value">13.04.2022</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('viewSeekerPay.swift') }} :</p>
								<p class="company-value">{{ t('viewSeekerPay.ndeafihh') }}</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('viewSeekerPay.bank_account') }} :</p>
								<p class="company-value">F122 1050 3500 0883 08</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('fieldList.ssn') }} :</p>
								<p class="company-value">050895-115W</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('viewSeekerPay.tax_limits') }} :</p>
								<p class="company-value"></p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('fieldList.yearlyIncome') }} :</p>
								<p class="company-value">24000</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('viewInvoice.taxPercentage') }} :</p>
								<p class="company-value">19%</p>
							</div>
							<div class="company-text">
								<p class="company-titel">{{ t('viewSeekerPay.upper_percentage') }} :</p>
								<p class="company-value">25%</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-5 summary-table">
			<new-data-table :data="seekerInvoiceDetail || []" class="large-table table-borderless">
				<template #thead>
					<new-tb-th>{{ t('job.salaryType') }}</new-tb-th>
					<new-tb-th>{{ t('viewSeekerPay.timespan') }}</new-tb-th>
					<new-tb-th>{{ t('workDetails.Amount') }}</new-tb-th>
					<new-tb-th>{{ t('viewSeekerPay.a_price') }}</new-tb-th>
					<new-tb-th class="text-end">{{ t('viewInvoice.total') }}</new-tb-th>
				</template>
				<template #data="scopedData" ref="tableBody">
					<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
						<new-tb-td> {{ tr.KM_Allowances || '-' }}</new-tb-td>
						<new-tb-td> {{ tr.time_span || '-' }}</new-tb-td>
						<new-tb-td> {{ tr.amount || '-' }}</new-tb-td>
						<new-tb-td> {{ tr.a_Price || '-' }}</new-tb-td>
						<new-tb-td class="text-end"> {{ tr.Total || '-' }}</new-tb-td>
					</new-tb-tr>
				</template>
			</new-data-table>
			<div>
				<new-data-table :data="seekerInvoiceDetail || []" class="responsive-table mt-4">
					<template #data="scopedData" ref="tableBody">
						<new-tb-tr class="invoice__row expand-table" :key="i" v-for="(tr, i) in scopedData.data">
							<div class="d-flex align-items-center justify-content-between collapse-div" @click="openTable(i, item)">
								<div class="d-flex">
									<div>
										<div>
											{{ tr.KM_Allowances || '-' }}
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
										<new-tb-th>{{ t('job.salaryType') }}</new-tb-th>
										<new-tb-td>{{ tr.KM_Allowances }}</new-tb-td>
									</new-tb-tr>
									<new-tb-tr>
										<new-tb-th>{{ t('viewSeekerPay.timespan') }}</new-tb-th>
										<new-tb-td>{{ tr.time_span }}</new-tb-td>
									</new-tb-tr>
									<new-tb-tr>
										<new-tb-th>{{ t('workDetails.Amount') }}</new-tb-th>
										<new-tb-td>{{ tr.amount }}</new-tb-td>
									</new-tb-tr>
									<new-tb-tr>
										<new-tb-th>{{ t('viewSeekerPay.a_price') }}</new-tb-th>
										<new-tb-td>{{ tr.a_Price }}</new-tb-td>
									</new-tb-tr>
									<new-tb-tr>
										<new-tb-th>{{ t('viewInvoice.total') }}</new-tb-th>
										<new-tb-td>{{ tr.Total }}</new-tb-td>
									</new-tb-tr>
								</div>
							</div>
						</new-tb-tr>
					</template>
				</new-data-table>
			</div>
			<div class="row my-3">
				<div class="col-8 text-end extrabold">{{ t('leInvoice.addInvoice.withholdingTax') }}</div>
				<div class="col-4 text-end">-35, 46</div>
			</div>
			<div class="row mb-2">
				<div class="col-8 text-end extrabold">{{ t('teamInvoiceList.willBePaid') }}</div>
				<div class="col-4 text-end">
					<span class="extrabold mr-2">{{ t('viewSeekerPay.eur') }}</span
					>388, 14
				</div>
			</div>
		</div>
		<div class="mt-4 overflow-auto">
			<table class="table table-borderless table-head">
				<thead>
					<tr>
						<th class="w2">{{ t('leInvoice.addInvoice.summary') }}</th>
						<th class="w20 text-left">{{ t('common.description') }}</th>
						<th class="w15 text-end">{{ t('viewSeekerPay.pay_period') }}</th>
						<th class="w20 text-end">
							{{ t('viewSeekerPay.from_the_beginning_of_the_year') }}
						</th>
					</tr>
				</thead>
			</table>
			<div class="my-4">
				<table class="table table-borderless table-text-bold table-radius">
					<tbody class="total-box text-white">
						<tr>
							<td class="p-0">
								<table class="table m-0 table-radius">
									<tbody class="total-box">
										<tr>
											<td rowspan="6" class="w5 pt-3 text-white">
												<div class="save-icon">
													<img src="~@/assets/images/save-icon.png" alt="" class="img-fluid" />
												</div>
											</td>
											<td class="w20 pt-3 text-white">
												{{ t('viewSeekerPay.total_wages') }}
											</td>
											<td class="w15 pt-3 text-white text-end">
												337,66
											</td>
											<td class="w20 pt-3 text-white text-end">
												6498,79
											</td>
										</tr>
										<tr>
											<td class="py-1 text-white">{{ t('viewSeekerPay.salary') }}</td>
											<td class="py-1 text-white text-end">337,66</td>
											<td class="py-1 text-white text-end">6498,79</td>
										</tr>
										<tr>
											<td class="py-1 text-white">{{ t('viewSeekerPay.tax_free_compensations') }}</td>
											<td class="py-1 text-white text-end">79,34</td>
											<td class="py-1 text-white text-end">6643,21</td>
										</tr>
										<tr>
											<td class="py-1 text-white">{{ t('leInvoice.addInvoice.withholdingTax') }}</td>
											<td class="py-1 text-white text-end">-35,46</td>
											<td class="py-1 text-white text-end">-738,81</td>
										</tr>
										<tr>
											<td class="py-1 text-white">{{ t('viewSeekerPay.other_deducations_payment') }} (-/+)</td>
											<td class="py-1 text-white text-end">-34,40</td>
											<td class="py-1 text-white text-end">-1033,50</td>
										</tr>
										<tr>
											<td class="text-white p-3">{{ t('viewSeekerPay.payments') }}</td>
											<td class="text-white p-3 text-end">338,14</td>
											<td class="text-white p-3 text-end">11369,69</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';
import { computed, onMounted } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'vuex';
export default {
	name: 'ViewSeekerPaySleepDetail',

	components: {
		FontAwesomeIcon,
	},
	setup() {
		//ref
		// const store = useStore();
		// global router
		const route = useRoute();
		const tableIndex = ref(0);
		const seekerInvoiceDetail = ref([
			{
				KM_Allowances: 'KM Allowances',
				time_span: '2.4.2022 - 3.4.2022	',
				amount: '104,00',
				a_Price: '0.46',
				Total: '47,84',
			},
			{
				KM_Allowances: 'Lunch Compensation',
				time_span: '2.4.2022 - 3.4.2022	',
				amount: '2,00',
				a_Price: '11,25',
				Total: '22,50',
			},
			{
				KM_Allowances: 'Salary',
				time_span: '2.4.2022 - 3.4.2022	',
				amount: '1,00',
				a_Price: '337, 66',
				Total: '337, 66',
			},
			{
				KM_Allowances: 'Sercice fee',
				time_span: '2.4.2022 - 3.4.2022	',
				amount: '-1,00',
				a_Price: '34, 40',
				Total: '-34, 40',
			},
		]);

		// icons
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;

		// gloal store
		const store = useStore();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		// table open
		const openTable = index => {
			// showTable.value = !showTable.value
			if (tableIndex.value === index) {
				tableIndex.value = null;
				return;
			}
			tableIndex.value = index;
		};

		onMounted(() => {
			// store.dispatch('invoice/viewJobseekerInvoice', route.params.id);
			console.log(route, '<><><><><><');
			console.log(route.params.id, '<><><><><>');
			store.dispatch('document/getPaySlipDetails', route.params.id);
		});

		/**
		 * computed Properties
		 * *******************************************************************
		 */

		const seekerPaySleepDetail = computed(() => store.getters['document/getPaySleepDetails']);

		return {
			//ref
			seekerInvoiceDetail,
			tableIndex,

			// methods
			openTable,

			//icons /
			arrowDown,
			arrowUp,

			//Computed
			seekerPaySleepDetail,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.document__list {
	.logo-fi {
		max-width: 200px;
		width: 100%;
	}
	.head-title {
		font-size: 15px;
		color: black;
	}

	.extrabold {
		font-weight: 600 !important;
	}

	.fn18 {
		font-size: 18px;
	}

	.pph-left-box {
		padding: 22px;
		border-radius: 25px;
		height: 100%;
		background-color: #f9f9f9;
		overflow: hidden;
		box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.55);
		// margin-right: 1.2rem;
	}

	.red-box {
		background-color: #ff4b57;
		color: #fff;
		border-radius: 25px;
		box-shadow: 1px 1px 10px 2px rgba(204, 204, 204, 0.55);
		padding: 22px;
		position: relative;
		overflow: hidden;
		// margin-left: 1.2rem;

		&::after {
			background-position: bottom right;
			content: '';
			background-image: url('~@/assets/images/invoice-red-box-puzzle.svg');
			background-size: contain;
			position: absolute;
			bottom: 0px;
			right: 0px;
			// transform: translate(5px, 0px);
			width: 330px;
			height: 330px;
			background-repeat: no-repeat;

			@media (max-width: 768px) {
				opacity: 0.8;
			}

			@media (max-width: 576px) {
				right: -40px;
				width: 200px;
			}
		}

		&::before {
			background-position: bottom right;
			content: '';
			background-image: url('~@/assets/images/payment-img.png');
			background-size: contain;
			position: absolute;
			bottom: 20px;
			right: 20px;
			width: 150px;
			height: 160px;
			background-repeat: no-repeat;
			z-index: 1;
			@media (max-width: 576px) {
				width: 90px;
			}
		}

		.company-text {
			display: flex;
			align-items: center;
			margin-bottom: 6px;
			.company-titel {
				flex-basis: 250px;
				max-width: 250px;
				min-width: 100px;
				font-size: 16px;
				font-weight: 600;
			}
		}
	}

	.main-card::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
		height: 30px;
		width: 30px;
		background-image: url('~@/assets/images/left-right-arrow.svg');
		background-size: contain;
		background-repeat: no-repeat;
		opacity: 0.5;

		@media (max-width: 1199px) {
			display: none;
		}
	}

	.large-table {
		table {
			th {
				&:first-child {
					border-bottom-left-radius: 10px;
					border-top-left-radius: 10px;
				}
				&:last-child {
					border-bottom-right-radius: 10px;
					border-top-right-radius: 10px;
				}
				border-right: transparent;
			}

			td {
				border-right: transparent;
				padding: 10px;
			}
		}
	}
}

.w2 {
	width: 2%;
}
.w5 {
	width: 5.2%;
}
.w20 {
	width: 20%;
}
.w15 {
	width: 15%;
}
.max-w-160 {
	max-width: 160px;
}
.z-3 {
	z-index: 3;
}

.vs-table-text {
	justify-content: end !important;
}
.total-box {
	padding: 1.5rem;
	background-color: #ff4b57;
}

.table {
	&.table-borderless {
		min-width: 900px;
	}
}

.table-head {
	th {
		&:first-child {
			border-bottom-left-radius: 10px;
			border-top-left-radius: 10px;
		}
		&:last-child {
			border-bottom-right-radius: 10px;
			border-top-right-radius: 10px;
		}
	}
}

.table {
	&.table-radius {
		tbody {
			tr {
				td {
					&:first-child {
						border-top-left-radius: 15px;
						border-bottom-left-radius: 15px;
					}
					&:last-child {
						border-top-right-radius: 15px;
						border-bottom-right-radius: 15px;
					}
				}
			}
		}
	}
}

table {
	th {
		font-size: 16px;
		font-weight: 400;
		color: #fff;
		overflow: hidden;
		background: #000 !important;
	}
}

.expand-table {
	border-bottom: 10px solid #fff;
	th {
		width: 10%;
		// @media (max-width: 768px) {
		// 	width: 10%;
		// }
	}
}
</style>
<style lang="scss">
.summary-table {
	.data__table {
		.table__data {
			border: 1px solid transparent !important;
		}
	}
}

.table-borderless {
	tbody {
		tr {
			border-bottom: transparent;
		}
	}
}
.red-tabel {
	.data__table {
		.table__data {
			.table {
				tbody {
					background-color: #ff4b57;
					color: #fff;
					border-radius: 20px;
					tr {
						&:first-child {
							border-bottom-left-radius: 10px;
							border-top-left-radius: 10px;
						}
						&:last-child {
							border-bottom-right-radius: 10px;
							border-top-right-radius: 10px;
						}
						border-right: transparent;
					}
				}
			}
		}
	}
}

.save-icon {
	height: 40px;
	width: 40px;
	margin: 0 auto;
}
</style>

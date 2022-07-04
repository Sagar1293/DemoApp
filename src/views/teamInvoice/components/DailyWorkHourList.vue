<template>
	<div class="workHourList">
		<!-- daily work hour list title -->
		<div class="employer-details">
			<div class="pph-left">
				<h5 class="title-lg">{{ t('workDetails.dailyWorkDetails') }}</h5>
			</div>
		</div>

		<div class="daily-work-row">
			<div class="daily-work-col">
				<!-- daily work hour list - column name -->
				<div class="details-head text-center">
					<div class="product-no">
						<p class="details-head-text">Row</p>
					</div>

					<div class="team-member">
						<p class="details-head-text">Team Member</p>
					</div>

					<div class="discription">
						<p class="details-head-text">Description</p>
					</div>

					<div class="contract-type">
						<p class="details-head-text">Type</p>
					</div>

					<div class="contract-value">
						<p class="details-head-text">Value</p>
					</div>

					<div class="quantity">
						<p class="details-head-text">Quantity</p>
					</div>
					<div class="actions">
						<p class="details-head-text">Actions</p>
					</div>
				</div>
				<!-- daily work hout list - row -->
				<div v-for="(item, index) in workDetailList" :key="index">
					<div v-if="expandRowIndex === index">
						<div class="details-content">
							<!-- serial no. -->
							<div class="product-width">
								<div class="product-1">
									<p class="inpult-area">{{ index + 1 }}</p>
								</div>
							</div>
							<!-- Team member -->
							<div class="work-width me-2 ml-xl-0 ml-3">
								<div class="work py-0">
									<input type="text" @input="teamMemberField.handleChange" @blur="teamMemberField.handleBlur" v-model="teamMemberField.value" class="form-control" />
								</div>
							</div>

							<!-- desciption Field Input -->
							<div class="work-width me-2">
								<div class="work py-0">
									<input type="text" @input="desciptionField.handleChange" @blur="desciptionField.handleBlur" v-model="desciptionField.value" class="form-control" />
								</div>
							</div>

							<!-- contract type -->
							<div class="hours-width">
								<div class="hours">
									<Multiselect
										id="contractType"
										class="form-group"
										@input="contactTypeField.handleChange"
										@blur="contactTypeField.handleBlur"
										v-model="contactTypeField.value"
										:options="contractTypeOptions"
										mode="single"
										:canDeselect="true"
									/>
									<!-- @click="removeContractType" -->
								</div>
							</div>

							<!-- contract value -->
							<div class="contractvalue-width">
								<div class="totalamount">
									<p>€</p>
									<input
										type="number"
										min="0"
										@input="contractValueField.handleChange;"
										@blur="contractValueField.handleBlur;"
										v-model="contractValueField.value"
										class="inpult-area"
									/>
								</div>
							</div>

							<!-- quantity & unit -->
							<div class="contractvalue-width">
								<div class="totalamount">
									<!-- <p>€</p> -->
									<input type="number" min="0" @input="hoursUnitField.handleChange;" @blur="hoursUnitField.handleBlur;" v-model="hoursUnitField.value" class="inpult-area" />
								</div>
							</div>

							<!-- actions -->
							<div class="buttons">
								<!-- copy work detail -->
								<div class="copy-btn" @click="duplicateWorkDetail(index)">
									<FontAwesomeIcon :icon="copyIcon" />
								</div>

								<!-- remove work detail -->
								<div class="delete-btn" @click="removeWorkDetail(index, item.id)">
									<FontAwesomeIcon :icon="trashIcon" />
								</div>

								<!-- expand work detail -->
								<div class="down-btn" v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item.id)">
									<FontAwesomeIcon :icon="downIcon" />
								</div>

								<!-- expand work detail -->
								<div class="down-btn" v-if="index === expandRowIndex" @click="sinkWorkDetails">
									<FontAwesomeIcon :icon="upIcon" />
								</div>

								<!-- euro sign -->
								<div class="down-btn ms-1" @click="addWorkDetails(item.id, index)">
									<FontAwesomeIcon :icon="euroSign" />
								</div>
								<!-- save button -->
								<div class="copy-btn ml-2" @click="updateWorkDetailInfo(index)">
									<FontAwesomeIcon :icon="saveIcon" />
								</div>
							</div>
						</div>

						<!-- daily work hour list - row - expand -->
						<div class="opne-toggle" v-if="index === expandRowIndex">
							<div>
								<div class="row no-gutters m-n2">
									<div class="p-1 col-4">
										<div class="summary-box">
											<h1>Total Summary Calculations</h1>
										</div>
									</div>
									<div class="p-1 col-8">
										<div class="dark-box">
											<div class="row no-gutters">
												<div class="col-6">
													<ul>
														<li class="fw-bold dark-box-text lh-lg">
															Allowances
														</li>
														<li class="dark-box-text lh-lg">
															Full day allowances
														</li>
														<li class="dark-box-text lh-lg">
															part day allowances
														</li>
														<li class=" dark-box-text lh-lg">
															Food allowances
														</li>
														<li class="dark-box-text lh-lg">
															Kilometer allowances
														</li>
														<li class="dark-box-text lh-lgfw-bold">
															Total
														</li>
													</ul>
												</div>

												<div class="col-4">
													<ul>
														<li class="fw-bold dark-box-text">
															Amount
														</li>
														<li class="dark-box-text lh-lg">
															<!-- <input
																class="dark-box-input"
																type="number"
																min="0"
																@input="fullHalfDatCompensationField.handleChange"
																@blur="fullHalfDatCompensationField.handleBlur"
																v-model="fullHalfDatCompensationField.value"
																placeholder="0"
															/> -->
															{{ item.fullHalfDayCompensationAmount || 0 }}
														</li>
														<li class="dark-box-text lh-lg">
															<!-- <input
																type="number"
																class="dark-box-input"
																min="0"
																@input="lunchCompensationField.handleChange"
																@blur="lunchCompensationField.handleBlur;"
																v-model="lunchCompensationField.value"
																placeholder="0"
															/> -->
															{{ item.lunchCompensationAmount || 0 }}
														</li>
														<li class="dark-box-text lh-lg">
															{{ item.otherCompensationAmount || 0 }}
														</li>
														<li class="dark-box-text lh-lg">
															{{ (item.distance || 0).toFixed(2) || 0 }}
														</li>
													</ul>
												</div>

												<div class="col-2">
													<ul>
														<li class="fw-bold dark-box-text lh-lg">
															Sum
														</li>
														<li class="dark-box-text lh-lg">
															<!-- {{ fullHalfDatCompensationField.value || 0 }} -->
															{{ item.fullHalfDayCompensationAmount || 0 }}
														</li>
														<li class="dark-box-text lh-lg">
															<!-- {{ lunchCompensationField.value || 0 }} -->
															{{ item.lunchCompensationAmount || 0 }}
														</li>
														<li class="dark-box-text lh-lg">
															<!-- {{ otherCompensationField.value || 0 }} -->
															{{ item.otherCompensationAmount || 0 }}
														</li>
														<li class="dark-box-text lh-lg">
															<!-- {{ totalDistanceKilloMeter.toFixed(2) || 0 }} -->
															{{ (item.distance || 0).toFixed(2) || 0 }}
														</li>
														<li class="fw-bold dark-box-text lh-lg">
															<!-- {{ finalTotal.toFixed(2) || 0 }} -->
															{{ finalTotal(item) }}
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div v-else>
						<div class="details-content">
							<!-- serial no. -->
							<div class="product-width">
								<div class="product-1">
									<p class="inpult-area">{{ index + 1 }}</p>
								</div>
							</div>
							<!-- Team member -->
							<div class="work-width me-2  ml-xl-0 ml-3">
								<div class="work py-0">
									<input type="text" :v-model="item.seeker?.user?.full_name" class="form-control" />
								</div>
							</div>
							<!-- desciptionField -->
							<div class="work-width me-2">
								<div class="work py-0">
									<input type="text" v-model="item.description" class="form-control" />
								</div>
							</div>
							<!-- contract type -->
							<div class="hours-width">
								<div class="hours">
									<Multiselect id="contractType" class="form-group" v-model="item.contract_type" :options="contractTypeOptions" mode="single" :canDeselect="true" />
								</div>
							</div>

							<!-- contract value -->
							<div class="contractvalue-width">
								<div class="totalamount">
									<p>€</p>
									<input type="number" v-model="item.contract_value" class="inpult-area" />
								</div>
							</div>

							<!-- quantity & unit -->
							<div class="contractvalue-width">
								<div class="totalamount">
									<input type="number" v-model="item.total_work" class="inpult-area" />
								</div>
							</div>
							<!-- vat -->

							<!-- actions -->
							<div class="buttons">
								<!-- copy work detail -->
								<div class="copy-btn" @click="duplicateWorkDetail(index)">
									<FontAwesomeIcon :icon="copyIcon" />
								</div>

								<!-- remove work detail -->
								<div class="delete-btn" @click="removeWorkDetail(index, item.id)">
									<FontAwesomeIcon :icon="trashIcon" />
								</div>

								<!-- expand work detail -->
								<div class="down-btn" v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item)">
									<FontAwesomeIcon :icon="downIcon" />
								</div>

								<!-- expand work detail -->
								<div class="down-btn" v-if="index === expandRowIndex" @click="sinkWorkDetails">
									<FontAwesomeIcon :icon="upIcon" />
								</div>

								<!-- open in work dairies -->
								<div class="down-btn ms-1" @click="addWorkDetails(item.id, index)">
									<FontAwesomeIcon :icon="euroSign" />
								</div>

								<!-- save icon -->
								<div class="copy-btn ml-2" @click="updateWorkDetailInfo(index)">
									<FontAwesomeIcon :icon="saveIcon" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row mt-3">
				<div class="col-lg-5">
					<ToolTip title="Add new trip">
						<div class="plus" @click="addNewWorkDetail">
							<FontAwesomeIcon :icon="plusIcon" />
						</div>
					</ToolTip>
					<div>
						<h5 class="grey-light">Add new row</h5>
					</div>
				</div>

				<div class="col-lg-5 col-8">
					<!-- total work -->
					<div class="total">
						<div class="total-excl">
							<p class="text-total">
								Total excl. VAT
							</p>
							<p class="text-prize">
								€
								{{ calculateTotalWithoutVat }}
							</p>
						</div>
						<div class="total-excl">
							<p class="text-total">
								Personal tax
							</p>
							<p class="text-prize">{{ taxAmountField.value }} %</p>
						</div>
						<div class="total-excl">
							<p class="text-total">
								Total Compensation
							</p>
							<p class="text-prize">
								€
								{{ totalCompensationField.value ? totalCompensationField.value : 0 }}
							</p>
						</div>
						<div class="total-excl total-bold-border">
							<p class="all-total">
								Total
							</p>
							<p class="total-prize">
								€
								{{ subTotalField.value ? subTotalField.value : 0 }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- team invoice work detail modal -->
	<Suspense v-if="workDeatilsModal">
		<template #default>
			<team-work-details-modal v-model:isModalShow="workDeatilsModal" :indexIdField="indexIdField" :addNewItem="addNewItem" @modalFlag="updateFlag" @workDetails="workDetails" />
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { onMounted, ref, computed, watch, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
// import { useI18n } from 'vue-i18n';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faCopy, faTrashAlt, faChevronDown, faChevronUp, faEuroSign, faSave } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';
import { contractTypeOptions, vatTypeOptions } from '@/utils/enums.js';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import { useForm, useField } from 'vee-validate';
import { reactive } from '@vue/reactivity';
import * as yup from 'yup';
// import { useRouter } from 'vue-router';
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
// work details
const TeamWorkDetailsModal = defineAsyncComponent(async () => {
	return import('@/views/teamInvoice/components/AddTeamWorkDetailModal.vue' /* WorkDetailModal:"WorkDetailModal" */);
});
export default {
	name: 'DailyWorkHourList',

	components: {
		FontAwesomeIcon,
		Multiselect,
		TeamWorkDetailsModal,
		DefaultLoader,
	},
	props: {
		formFields: Object,
		workDetailArray: Array,
	},

	setup(props) {
		const workDetailList = ref([]);
		const formFieldsData = ref(props.formFields);
		const defaultWorkDetails = {
			contract_type: 'hours',
			contract_value: 0,
			date: null,
			day_compensation: 0,
			description: null,
			distance: null,
			driven_in_rough_terrain: null,
			lunch_compensation: 0,
			other_compensation: 0,
			teamId: 0,
			total_work: 0,
			transported_heavyloads: false,
			transported_workload: false,
			trip_calculate_time: null,
			trip_end_address: null,
			trip_end_date: null,
			trip_end_time: null,
			trip_name: null,
			trip_start_address: null,
			trip_start_date: null,
			trip_start_time: null,
			vehicleCheckBoxValue: null,
			vehicle_class: null,
			vehicle_number: null,
			vehicle_subclass: null,
		};
		const expandRowIndex = ref(null);
		const expandRowId = ref(null);
		const vatValue = ref(null);
		const plusIcon = faPlus;
		const copyIcon = faCopy;
		const trashIcon = faTrashAlt;
		const downIcon = faChevronDown;
		const downArrowIcon = faChevronDown;
		const upIcon = faChevronUp;
		const saveIcon = faSave;
		const euroSign = faEuroSign;
		const isWorkDetailsModal = ref(false);
		const workDeatilsModal = ref(false);
		const indexIdField = ref(null);
		const addNewItem = ref(null);

		// const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// sweetalert
		const Swal = useSwal();

		// global router
		// const router = useRouter();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch work details
			workDetails();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		const calculateSubTotal = computed(() => {
			return item => {
				const total = item.contract_value * item.total_work + (item.contract_value * item.total_work) / 100;

				return Math.floor(total * 100) / 100;
			};
		});

		const tripTimeCalc = computed(() => {
			const timeDiff = moment.duration(moment(tripEndField.value).diff(moment(tripStartField.value)));
			return timeDiff.asHours();
		});

		// sub total of all item without vat
		const calculateTotalWithoutVat = computed(() => {
			const subTotal = workDetailList.value.reduce((acc, item, index) => {
				let total = 0;
				if (index === expandRowIndex.value) {
					total = contractValueField.value * hoursUnitField.value;
				} else {
					total = item.contract_value * item.total_work;
				}
				acc += total || 0;
				return acc;
			}, 0);
			return Math.floor(subTotal * 100) / 100;
		});

		// calculate vat from subTotal
		const calculateVat = computed(() => {
			return (calculateTotalWithoutVat.value * 0) / 100;
		});

		// sub total of all item with vat
		const calculatgeTotalWithVat = computed(() => {
			const subTotalWithoutVat = calculateTotalWithoutVat.value;
			return subTotalWithoutVat + calculateVat.value;
		});

		const isDisableCompensation = computed(() => {
			if (fullHalfDatCompensationField.value > 0) {
				lunchCompensationField.value == 0;
				otherCompensationField.value == 0;
				return true;
			}

			return false;
		});

		const dayCompensationDisable = computed(() => {
			if (lunchCompensationField.value || otherCompensationField.value > 0) {
				fullHalfDatCompensationField.value == 0;
				return true;
			}
			return false;
		});

		// get vat value
		const getVat = computed(() => {
			return store.state.teamInvoice.vatHandler;
		});

		//select workin details in work dairies or not
		const workId = computed(() => {
			return localStorage.getItem('invoiceWorkDetails') ?? [];
		});

		//distance killo
		const totalDistanceKilloMeter = computed(() => {
			return distanceField.value * 0.46;
		});
		//total calculation
		const finalTotal = computed(() => {
			return data => {
				return (Number(data.fullHalfDayCompensationAmount) + Number(data.lunchCompensationAmount) + Number(data.otherCompensationAmount) + Number(data.distance)).toFixed(2) || 0;
			};
		});
		const invoiceWorkDetailList = computed(() => store.getters['workDetail/getInvoicesWorkDetails']);
		//work details array
		const workDetailsArray = computed(() => {
			let workedIds = localStorage.getItem('invoiceWorkDetails') ? JSON.parse(localStorage.getItem('invoiceWorkDetails')) : [];
			const workObj = [];
			if (workedIds) {
				workObj.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			} else {
				workObj.value = store.state.invoice.workDeatilsObj;
			}
			return workObj;
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		const addWorkDetails = (id, index) => {
			let dairiesField = {
				description: desciptionField.value,
				contract_type: contactTypeField.value,
				contract_value: contractValueField.value,
				distance: distanceField.value,
				lunch_compensation: lunchCompensationField.value,
				full_compensation: fullHalfDatCompensationField.value,
				other_compensation: otherCompensationField.value,
				work_description: workDescriptionField.value,
				total_work: hoursUnitField.value,
			};
			store.commit('invoice/SET_STATE', {
				action: 'invoiceWorkDairiesDetail',
				data: dairiesField,
			});
			indexIdField.value = index ?? null;
			workDeatilsModal.value = true;
		};

		// work details
		const workDetails = () => {
			const payload = {
				page: 0,
				limit: 0,
			};
			store.dispatch('workDetail/getCurrentInvoiceWorkDetails', payload).then(res => {
				const checkExistingWorkDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
				if (checkExistingWorkDetails.length) {
					workDetailList.value = [...checkExistingWorkDetails];
					localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
				} else if (res.data.data.length) {
					workDetailList.value = res.data.data;
					localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
				} else {
					workDetailList.value = new Array(1).fill(null).map(() => {
						return {
							...defaultWorkDetails,
						};
					});
					localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
				}
			});
		};

		// form schema validation
		const workDetailSchema = yup.object({
			description: yup
				.string()
				.nullable()
				.optional(),
			contract_type: yup
				.string()
				.nullable()
				.required(),
			contract_value: yup
				.number()
				.nullable()
				.required(),
			total_work: yup
				.number()
				.nullable()
				.required(),
			vat: yup
				.number()
				.nullable()
				.required(),
			other_amount: yup
				.number()
				.nullable()
				.optional(),
			distance: yup
				.number()
				.nullable()
				.optional(),
			lunch_compensation: yup
				.number()
				.nullable()
				.optional(),
			day_compensation: yup
				.number()
				.nullable()
				.optional(),
			other_compensation: yup
				.number()
				.nullable()
				.optional(),
			trip_start: yup
				.string()
				.nullable()
				.optional(),
			trip_end: yup
				.string()
				.nullable()
				.optional(),
			trip_time: yup
				.number()
				.nullable()
				.optional(),
			trip_address: yup
				.string()
				.nullable()
				.optional(),
			work_description: yup
				.string()
				.nullable()
				.optional(),
			team_member_name: yup
				.string()
				.nullable()
				.optional(),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, resetForm } = useForm({
			validationSchema: workDetailSchema,
		});

		// Form Feilds
		const desciptionField = reactive(
			useField('description', undefined, {
				initialValue: null,
			}),
		);
		const contactTypeField = reactive(
			useField('contract_type', undefined, {
				initialValue: 'hours',
			}),
		);
		const contractValueField = reactive(
			useField('contract_value', undefined, {
				initialValue: 0,
			}),
		);
		const hoursUnitField = reactive(
			useField('total_work', undefined, {
				initialValue: 0,
			}),
		);
		const vatField = reactive(
			useField('vat', undefined, {
				initialValue: 0,
			}),
		);
		const otherAmountField = reactive(
			useField('other_amount', undefined, {
				initialValue: null,
			}),
		);

		const distanceField = reactive(
			useField('distance', undefined, {
				initialValue: null,
			}),
		);

		const lunchCompensationField = reactive(
			useField('lunch_compensation', undefined, {
				initialValue: 0,
			}),
		);

		const fullHalfDatCompensationField = reactive(
			useField('day_compensation', undefined, {
				initialValue: 0,
			}),
		);

		const otherCompensationField = reactive(
			useField('other_compensation', undefined, {
				initialValue: 0,
			}),
		);

		const tripStartField = reactive(
			useField('trip_start', undefined, {
				initialValue: moment()
					.startOf('day')
					.toDate(),
			}),
		);

		const tripEndField = reactive(
			useField('trip_end', undefined, {
				initialValue: moment()
					.startOf('day')
					.toDate(),
			}),
		);

		const tripTimeField = reactive(
			useField('trip_time', undefined, {
				initialValue: tripTimeCalc.value,
			}),
		);

		const tripAddressField = reactive(
			useField('trip_address', undefined, {
				initialValue: null,
			}),
		);

		const workDescriptionField = reactive(
			useField('work_description', undefined, {
				initialValue: null,
			}),
		);

		const totalCompensationField = reactive(
			useField('compensation_amount', undefined, {
				initialValue: null,
			}),
		);

		const subTotalField = reactive(
			useField('sub_total', undefined, {
				initialValue: null,
			}),
		);

		const taxAmountField = reactive(
			useField('tax', undefined, {
				initialValue: null,
			}),
		);
		const teamMemberField = reactive(
			useField('team_member_name', undefined, {
				initialValue: null,
			}),
		);

		// expand work details
		const expandWorkDetails = (index, data) => {
			indexIdField.value = index;
			expandRowIndex.value = index;
			expandRowId.value = data.id;
			desciptionField.value = data.description;
			contactTypeField.value = data.contract_type;
			contractValueField.value = data.contract_value;
			hoursUnitField.value = data.total_work;
			otherAmountField.value = data.other_amount;
			distanceField.value = data.distance || 0;
			lunchCompensationField.value = data.lunch_compensation;
			fullHalfDatCompensationField.value = data.day_compensation || 0;
			otherCompensationField.value = data.other_compensation;
			teamMemberField.value = data?.seeker?.user.full_name || null;
		};

		// Form Submit
		const submitForm = handleSubmit(async values => {
			values.date = moment().format('YYYY/MM/DD');
			const Starttime = '00:00:00';
			const EndTime = '00:00:00';
			values.trip_start = values.trip_start == null ? null : moment(values.trip_start).format('YYYY/MM/DD');
			values.trip_end = values.trip_end == null ? null : moment(values.trip_end).format('YYYY/MM/DD');
			values.trip_start_time = Starttime;
			values.trip_end_time = EndTime;
			values.indexId = indexIdField.value ?? null;
			const workDetailData = { ...values };
			store.commit('workDetail/updateWorkDetails', workDetailData);
			const workDetailInfoList = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];

			workDetailInfoList[indexIdField.value] = { ...workDetailInfoList[indexIdField.value] };
			localStorage.setItem('workDetails', JSON.stringify(workDetailInfoList));

			workDetailList.value = workDetailInfoList;

			setTimeout(() => {
				expandRowIndex.value = null;
			}, 1000);
		});

		// update work hour list
		const updateWorkHour = handleSubmit(async values => {
			values.transported_heavyloads = false;
			values.driven_in_rough_terrain = false;
			values.transported_workload = false;
			values.date = moment().format('YYYY/MM/DD');

			let workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			workDetails.splice(indexIdField.value, 1);

			workDetails.push(values);
			localStorage.setItem('workDetails', JSON.stringify(workDetails));

			desciptionField.value = values.description;
			contactTypeField.value = values.contract_type;
			contractValueField.value = values.contract_value;
			hoursUnitField.value = values.total_work;
			otherAmountField.value = values.other_amount;
			distanceField.value = values.distance;
			lunchCompensationField.value = values.lunch_compensation;
			fullHalfDatCompensationField.value = values.day_compensation;
			otherCompensationField.value = values.other_compensation;
			tripStartField.value = values.trip_start;
			tripEndField.value = values.trip_end;
			tripTimeField.value = values.trip_time;
			tripAddressField.value = values.trip_address;
			workDescriptionField.value = values.work_description;

			setTimeout(() => {
				workDetailList.value = workDetails;
				expandRowIndex.value = null;
			}, 1000);
		});

		const updateInvoiceCalculation = async () => {
			const workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			const data = {
				worked_hourIds: workDetails.reduce((acc, x) => {
					acc.push(x.id);
					return acc;
				}, []),
				vat: getVat.value,
			};
			await store.dispatch('teamInvoice/calculationWorkedHour', data).then(res => {
				const data = res.data.data;
				taxAmountField.value = data.tax;
				totalCompensationField.value = data.compensation_amount;
				subTotalField.value = data.sub_total;
			});
			return true;
		};

		// sink work details
		const sinkWorkDetails = () => {
			expandRowIndex.value = null;
		};
		//update flage
		const updateFlag = () => {
			workDeatilsModal.value = false;
		};

		// remove work details
		const removeWorkDetail = (index, id) => {
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
					workDetailList.value.splice(index, 1);

					const workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];

					localStorage.setItem('workDetails', JSON.stringify(workDetails.filter(x => x.id !== id)));

					Swal.fire('Success!', 'Work detail is removed!', 'success');
				}
			});
		};

		// add new work detail
		const addNewWorkDetail = () => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to add new work details ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then(async result => {
				if (result.isConfirmed) {
					let invoiceWorkDetails = localStorage.getItem('invoiceWorkDetails') ? JSON.parse(localStorage.getItem('invoiceWorkDetails')) : [];
					if (invoiceWorkDetails != '') {
						addNewItem.value = true;
						store.commit('workDetail/addWorkDetails', Object.assign({}, defaultWorkDetails));
						workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
					} else {
						workDetailList.value.push(Object.assign({}, defaultWorkDetails));
						localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
					}
				}
			});
		};

		// duplicate work details
		const duplicateWorkDetail = index => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to duplicate this work detail ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then(async result => {
				if (result.isConfirmed) {
					let invoiceWorkDetails = localStorage.getItem('invoiceWorkDetails') ? JSON.parse(localStorage.getItem('invoiceWorkDetails')) : [];
					if (invoiceWorkDetails) {
						addNewItem.value = true;
						store.commit('workDetail/addWorkDetails', Object.assign({}, workDetailList.value[index]));
						workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
					} else {
						workDetailList.value.push(Object.assign({}, defaultWorkDetails));
						localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
					}
				}
			});
		};

		// update work detail information
		// in localstorage
		const updateWorkDetailInfo = index => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to save this work detail ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then(async result => {
				if (result.isConfirmed) {
					const workDetailInfoList = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
					workDetailInfoList[index] = { ...workDetailInfoList[index], ...workDetailList.value[index] };
					localStorage.setItem('workDetails', JSON.stringify(workDetailInfoList));

					workDetailList.value = workDetailInfoList;
				}
			});
		};

		// Watch
		watch(tripTimeCalc, () => {
			tripTimeField.value = tripTimeCalc.value < 0 ? 0 : tripTimeCalc.value;
		});
		watch(
			() => props.workDetailArray,
			val => {
				console.log(val, '/////////////');
				workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
				console.log(workDetailList.value, '===========');
				// workDetailList.value = workDetailList.value.filter(
				// 	wd => wd.id !== val.id,
				// );
				if (workDetailList.value != '') {
					workDetailList.value.push(...val);
					// workDetailList.value.forEach(elem => {
					// 	var arr = val;
					// 	if (arr.some(arr => arr.id !== elem.id)) workDetailList.value.push(elem);
					// });
				} else {
					workDetailList.value.push(...val);
				}
				localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
			},
		);

		watch(workDetailsArray, () => {
			console.log(workDetailsArray, 'workDetailsArray');

			workDetailList.value.splice(workDetailsArray.value.indexId, 1);
			workDetailList.value.push(workDetailsArray.value);
			localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
		});

		//remove value - Contract Type
		// const removeContractType = event => {
		// 	if (event) {
		// 		workDetailList.value && workDetailList.value.map(item => (item.contract_type = null));
		// 	}
		// };

		return {
			// ref
			contractTypeOptions,
			workDetailList,
			expandRowIndex,
			vatTypeOptions,
			formFieldsData,
			vatValue,
			expandRowId,
			isWorkDetailsModal,
			workDeatilsModal,
			indexIdField,
			addNewItem,

			// icons
			plusIcon,
			copyIcon,
			trashIcon,
			downIcon,
			upIcon,
			downArrowIcon,
			euroSign,
			saveIcon,

			// Form
			submitForm,
			formMeta,
			resetForm,
			updateWorkHour,

			// Form Feilds
			teamMemberField,
			desciptionField,
			contactTypeField,
			contractValueField,
			hoursUnitField,
			vatField,
			otherAmountField,
			distanceField,
			lunchCompensationField,
			fullHalfDatCompensationField,
			otherCompensationField,
			tripStartField,
			tripEndField,
			tripTimeField,
			tripAddressField,
			workDescriptionField,
			totalCompensationField,
			subTotalField,
			taxAmountField,

			// computed
			calculateSubTotal,
			calculateTotalWithoutVat,
			calculateVat,
			calculatgeTotalWithVat,
			tripTimeCalc,
			dayCompensationDisable,
			isDisableCompensation,
			totalDistanceKilloMeter,
			finalTotal,
			invoiceWorkDetailList,
			workId,
			workDetailsArray,

			// methods
			expandWorkDetails,
			sinkWorkDetails,
			removeWorkDetail,
			addNewWorkDetail,
			duplicateWorkDetail,
			updateInvoiceCalculation,
			addWorkDetails,
			updateFlag,
			workDetails,
			updateWorkDetailInfo,

			//remove value from dropdown
			// removeContractType,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.invoice__list {
	.inpult-area {
		outline: none;
		border: none;
		width: 100%;
		background-color: transparent;
	}

	.employer-details {
		display: flex;
		align-items: center;
		justify-content: space-between;
		// margin:10px 0;
		.title-lg {
			color: #a0a4a9;
		}
		.plus {
			cursor: pointer;
			color: #ffff;
			width: 50px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
			border-radius: 50%;
			background-color: #ff4b57;
			border: 4px solid #ffe4e6;
		}
	}

	.daily-work-row {
		@media (max-width: 1200px) {
			overflow: auto;
		}
	}
	.daily-work-col {
		@media (max-width: 1200px) {
			min-width: 900px;
		}
	}

	.details-head {
		display: flex;
		align-items: center;
		background-color: #273238;
		padding: 10px 7px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		.product-no {
			width: 7%;
		}
		.contract-type,
		.contract-value,
		.quantity {
			width: 15%;
		}
		.total-amount {
			width: 17%;
		}
		.actions {
			width: 22%;
		}
		.discription,
		.team-member {
			width: 24%;
		}
	}
	.details-head-text {
		color: #ffff;
		font-size: 16px;
	}
	.daily-work-col {
		border: 1px solid #dde0e2;
		border-radius: 10px;
	}
	.details-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 7px 5px;
		border-top: 1px solid #dde0e2;
		min-width: 900px;
		// overflow: auto;

		.product-width {
			width: 6%;
			.product-1 {
				font-size: 14px;
				display: inline-block;
				padding: 8px 25px;
				border-radius: 12px;
				border: 2px solid #e4e6e7;
			}
			.product-2 {
				background-color: #fff;
			}
		}
		.work-width {
			width: 23%;

			.work {
				width: 100%;
				padding: 8px 20px;
				border-radius: 12px;
				background-color: #f6f6f6;
				font-size: 14px;
				.form-control {
					border: none;
					padding: 0;
					background-color: transparent;
				}
			}
			.programme {
				background-color: #ffff;
			}
		}
		.hours-width,
		.contractvalue-width {
			width: 13%;
			.hours {
				width: 90%;
				padding: 0;
				border-radius: 12px;
				// background-color: #f6f6f6;
			}
			.contractvalue {
				width: 90%;
				padding: 8px 25px;
				border-radius: 12px;
				background-color: #f6f6f6;
			}
			.contractvalue-1 {
				background-color: #ffff;
			}
			.pieces {
				background-color: #ffff;
			}

			.totalamount {
				width: 90%;
				padding: 8px 10px;
				border-radius: 12px;
				display: flex;
				background-color: #f6f6f6;

				p {
					margin-right: 5px;
				}
			}
			.totalamount-1 {
				background-color: #ffff;
			}
		}
		.totalamount-width {
			width: 17%;
		}
		.buttons {
			color: #ff4b57;
			width: 21%;
			display: flex;
			cursor: pointer;

			.delete-btn,
			.copy-btn {
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 5px;
				border-radius: 12px;
				background-color: #f8dddf;
			}
			.down-btn {
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 12px;
				color: #ffff;
				background-color: #273238;
				cursor: pointer;
			}
		}
	}
	.details-content-1 {
		background-color: #f6f6f6;
	}
	.opne-toggle {
		padding: 10px 20px;
		.payment-section {
			display: grid;
			gap: 1.25rem;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
		.input-title {
			font-size: 14px;
			margin-bottom: 5px;
			font-weight: 500;
			color: #858a90;
		}
		.inpul-fount-md {
			font-size: 14px;
		}
		.input-parent-white {
			background-color: #ffff;
			border-radius: 12px;
			padding: 8px 15px;
		}
		.other-amount {
			display: grid;
			gap: 1.25rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.other-compensation {
			font-size: 14px;
			padding: 2px 8px;
			border-radius: 8px;
			background-color: #f6f6f6;
		}
		.trip-time {
			display: grid;
			gap: 5px;
			padding: 5px;
			font-size: 14px;
			border-radius: 12px;
			background-color: #ffff;
			grid-template-columns: repeat(2, minmax(0, 1fr));
			.trip-start-time {
				width: 100%;
				padding: 5px 15px;
				text-align: left;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
		.address-section {
			padding: 10px 0;
		}
		.work-description {
			width: 100%;
			outline: none;
			font-size: 14px;
			border: none;
			resize: none;
		}
	}
	.summary-box {
		background-color: #e92028;
		color: #fff;
		padding: 20px;
		border-radius: 20px;
		height: 100%;
		// width: 320px;
		h1 {
			font-weight: 600;
			font-size: 48px;
			letter-spacing: -3px;
			line-height: 41px;
			text-shadow: 1px 3px 3px #494848;
			@media (max-width: 1440px) {
				font-size: 45px;
			}
		}
	}
	.dark-box {
		background-color: #4c4f56;
		color: #fff;
		padding: 30px;
		border-radius: 20px;
		height: 100%;
		.dark-box-text {
			font-size: 19px;
			letter-spacing: -1px;
			text-shadow: 1px 3px 3px #494848;
		}
	}
	.total {
		background-color: #f9f9f9;
		border-radius: 20px;
		padding: 25px;
		.total-excl {
			width: 100%;
			display: flex;
			padding-bottom: 5px;
			justify-content: space-between;
			align-items: center;

			.text-total {
				color: #858a90;
				font-size: 14px;
			}
			.text-prize {
				font-size: 14px;
				font-weight: 500;
			}
		}
		.total-excl-border {
			border-bottom: 2px solid #dde0e2;
		}
		.total-bold-border {
			border-bottom: 4px solid #dde0e2;
			padding: 5px 0;
			border-top: 1px solid #dde0e2;
			.all-total {
				font-weight: 600;
			}
			.total-prize {
				color: #ff4b57;
				font-weight: 600;
			}
		}
	}
	.text-gray {
		margin-bottom: 10px;
		color: #a0a4a9;
	}

	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		width: 100%;
		border: 3px dashed #dde0e2;
		// background-color: #f6f6f6;
	}

	.paperclip-icone {
		color: white;
		margin-right: 10px;
		font-size: 16px;
	}
	.copy-icone {
		color: #ff4b57;
	}
	.down-icone {
		color: #ffff;
		font-size: 20px;
	}
	.dark-box-input {
		background-color: #4c4f56;
		border: none;
		color: #fff;
		width: 80%;
	}
	.grey-light {
		color: #babec3;
		font-weight: 500;
	}
}
.invoice-pd {
	padding: 10px 20px;
}
</style>

<style lang="scss" scoped>
.multiselect-options {
	overflow: auto;
	border-radius: 10px;
}
.multiselect-option {
	background-color: #ffffff;
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

.invoice__list .invoice-dropdown {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	border-radius: 50px;
	font-size: 14px;
	&:focus {
		box-shadow: none;
	}
}
.dropdown-menu {
	padding: 15px;
	border: transparent;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	color: #949494;
}
.dropdown-item {
	padding: 8px 0px;
	color: rgb(80, 76, 76);

	&:hover {
		background-color: transparent;
		color: red;
	}
}
</style>

<style lang="scss">
.multiselect {
	border-radius: 50px !important;
}
.multiselect-options {
	overflow: auto;
	border-radius: 12px;
}
.multiselect-option {
	background-color: #ffffff;
}
.multiselect-option.is-selected.is-pointed {
	color: #000;
	background: #ffff;
}
.multiselect-option.is-selected {
	color: #ff4b57;
	background-color: #ffff;
}
</style>

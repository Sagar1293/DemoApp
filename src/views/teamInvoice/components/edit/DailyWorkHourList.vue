<template>
	<div class="workHourList overflow-auto">
		<div class="work-hour-col">
			<!-- daily work hour list title -->
			<div class="employer-details">
				<div class="pph-left">
					<h5 class="title-lg">Daily Work Details</h5>
				</div>
				<div class="plus" @click="addNewWorkDetail">
					<FontAwesomeIcon :icon="plusIcon" />
				</div>
			</div>

			<!-- daily work hour list - column name -->
			<div class="details-head text-center">
				<div class="product-no">
					<p class="details-head-text">Product no.</p>
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
						<div class="work-width">
							<div class="work py-0">
								<input type="text" @input="teamMemberField.handleChange" @blur="teamMemberField.handleBlur" v-model="teamMemberField.value" class="form-control" />
							</div>
						</div>

						<!-- description -->
						<div class="work-width">
							<div class="work py-0">
								<input type="text" @input="desciptionField.handleChange" @blur="desciptionField.handleBlur" v-model="desciptionField.value" class="form-control" />
							</div>
						</div>

						<!-- contract type -->
						<div class="hours-width me-2">
							<div class="hours">
								<Multiselect
									id="teamContractType"
									class="form-group min-height"
									@input="contactTypeField.handleChange;"
									@blur="contactTypeField.handleBlur;"
									v-model="contactTypeField.value"
									:options="contractTypeOptions"
									mode="single"
									:canDeselect="true"
								/>
							</div>
						</div>

						<!-- contract value -->
						<div class="contractvalue-width">
							<div class="totalamount">
								<p>€</p>

								<input type="number" min="0" @input="contractValueField.handleChange;" @blur="contractValueField.handleBlur;" v-model="contractValueField.value" class="inpult-area" />
							</div>
						</div>

						<!-- quantity & unit -->
						<div class="contractvalue-width">
							<div class="totalamount">
								<p>€</p>

								<input type="number" min="0" @input="hoursUnitField.handleChange;" @blur="hoursUnitField.handleBlur;" v-model="hoursUnitField.value" class="inpult-area" />
								<!-- <FontAwesomeIcon :icon="downIcon" /> -->
							</div>
						</div>

						<!-- actions -->
						<div class="buttons">
							<!-- copy work detail -->
							<div class="copy-btn" @click="duplicateWorkDetail(item.id)">
								<FontAwesomeIcon :icon="copyIcon" />
							</div>

							<!-- remove work detail -->
							<div class="delete-btn" @click="removeWorkDetail(index, item.id)">
								<FontAwesomeIcon :icon="trashIcon" />
							</div>

							<!-- expand work detail -->
							<div class="down-btn ms-1" v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item.id)">
								<FontAwesomeIcon :icon="downIcon" />
							</div>

							<!-- expand work detail -->
							<div class="down-btn ms-1" v-if="index === expandRowIndex" @click="sinkWorkDetails">
								<FontAwesomeIcon :icon="upIcon" />
							</div>
							<!-- save icon -->
							<!-- <div
									class="copy-btn ml-2"

								>
									<FontAwesomeIcon :icon="saveIcon" />
								</div> -->
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
													<li class="dark-box-text lh-lg">
														Food allowances
													</li>
													<li class="dark-box-text lh-lg">
														Kilometer allowances
													</li>
													<li class="dark-box-text lh-lg fw-bold">
														Total
													</li>
												</ul>
											</div>

											<div class="col-4">
												<ul>
													<li class="fw-bold dark-box-text lh-lg ">
														Amount
													</li>
													<li class="dark-box-text lh-lg">
														<input
															class="dark-box-input"
															type="number"
															min="0"
															@input="fullHalfDatCompensationField.handleChange"
															@blur="fullHalfDatCompensationField.handleBlur"
															v-model="fullHalfDatCompensationField.value"
															placeholder="0"
														/>
													</li>
													<li class="dark-box-text lh-lg">
														<input
															type="number"
															class="dark-box-input"
															min="0"
															@input="lunchCompensationField.handleChange"
															@blur="lunchCompensationField.handleBlur;"
															v-model="lunchCompensationField.value"
															placeholder="0"
														/>
													</li>
													<li class="dark-box-text lh-lg">
														<input
															type="number"
															class="dark-box-input"
															min="0"
															@input="otherCompensationField.handleChange;"
															@blur="otherCompensationField.handleBlur;"
															v-model="otherCompensationField.value"
															placeholder="0"
														/>
													</li>
													<li class="dark-box-text lh-lg">
														<!-- <input type="text" class="dark-box-input" value="11.2*(0+1*0.03)" /> -->
														<input
															type="number"
															min="0"
															@input="distanceField.handleChange;"
															@blur="distanceField.handleBlur;"
															v-model="distanceField.value"
															placeholder="0"
															class="dark-box-input"
														/>
													</li>
												</ul>
											</div>

											<div class="col-2">
												<ul>
													<li class="fw-bold dark-box-text lh-lg">
														Sum
													</li>
													<li class="dark-box-text lh-lg">
														{{ fullHalfDatCompensationField.value || 0 }}
													</li>
													<li class="dark-box-text lh-lg">
														{{ lunchCompensationField.value || 0 }}
													</li>
													<li class="dark-box-text lh-lg">
														{{ otherCompensationField.value || 0 }}
													</li>
													<li class="dark-box-text lh-lg">
														{{ totalDistanceKilloMeter.toFixed(2) || 0 }}
													</li>
													<li class="fw-bold dark-box-text lh-lg">
														{{ finalTotal.toFixed(2) || 0 }}
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div class="form-row text-right">
									<button type="submit" class="btn-common btn-red mt-2 ml-auto" @click="submitFormNext(item.work_hoursId == null ? index : item.work_hoursId)">
										{{ item.id ? 'Update' : 'Save' }}
									</button>
								</div>
							</div>
						</div>

						<!-- <div class="form-row text-right">
							<button
								type="submit"
								class="btn-common btn-red mt-2 ml-auto"
								@click="submitFormNext(item.work_hoursId)"
							>
								{{ item.id ? 'Update' : 'Save' }}
							</button>
						</div> -->
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
						<div class="work-width">
							<div class="work py-0">
								<input type="text" :value="item.seeker?.user?.full_name" class="form-control" disabled />
							</div>
						</div>

						<!-- discription -->
						<div class="work-width">
							<div class="work">
								<input type="text" v-model="item.description" class="inpult-area inpul-fount-md" disabled />
							</div>
						</div>

						<!-- contract type -->
						<div class="hours-width">
							<div class="hours h-full">
								<Multiselect id="team_contract_Type" class="form-group" v-model="item.contract_type" :options="contractTypeOptions" mode="single" :canDeselect="true" disabled />
							</div>
						</div>

						<!-- contract value -->
						<div class="contractvalue-width">
							<div class="totalamount">
								<p>€</p>
								<input type="number" v-model="item.contract_value" class="inpult-area" disabled />
							</div>
						</div>

						<!-- quantity & unit -->
						<div class="contractvalue-width">
							<div class="totalamount">
								<input type="text" v-model="item.total_work" class="inpult-area" disabled />
							</div>
						</div>

						<!-- total amount -->
						<!-- <div class="contractvalue-width totalamount-width">
							<div class="totalamount">
								<p>€</p>

								<input
									type="number"
									:value="calculateSubTotal(item) || 0"
									class="inpult-area"
									disabled
								/>
							</div>
						</div> -->

						<!-- actions -->
						<div class="buttons">
							<!-- copy work detail -->
							<div class="copy-btn" @click="duplicateWorkDetail(item.id)">
								<FontAwesomeIcon :icon="copyIcon" />
							</div>

							<!-- remove work detail -->
							<div class="delete-btn" @click="removeWorkDetail(index, item.id)">
								<FontAwesomeIcon :icon="trashIcon" />
							</div>

							<!-- expand work detail -->
							<div class="down-btn ms-1" v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item)">
								<FontAwesomeIcon :icon="downIcon" />
							</div>

							<!-- expand work detail -->
							<div class="down-btn ms-1" v-if="index === expandRowIndex" @click="sinkWorkDetails">
								<FontAwesomeIcon :icon="upIcon" />
							</div>

							<!-- save icon -->
							<!-- <div
									class="copy-btn ml-2"
								>
									<FontAwesomeIcon :icon="saveIcon" />
								</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-lg-5 col-8">
				<ToolTip title="Add new trip">
					<div class="plus" @click="addNewWorkDetail">
						<FontAwesomeIcon :icon="plusIcon" />
					</div>
				</ToolTip>

				<div>
					<h5 class="grey-light">Add new row</h5>
				</div>
			</div>
			<!-- total work -->
			<div class="col-lg-5 col-8 ">
				<div class="total">
					<div class="total-excl">
						<p class="text-total">Total excl. VAT</p>
						<p class="text-prize">€ {{ calculateTotalWithoutVat }}</p>
					</div>
					<!-- <div class="total-excl">
						<p class="text-total">Personal tax</p>
						<p class="text-prize">{{ getCalculation.tax }} %</p>
					</div> -->
					<div class="total-excl">
						<p class="text-total">Total Compensation</p>
						<p class="text-prize">
							€
							{{ totalCompensationField.value ? totalCompensationField.value : getCalculation.compensation_amount }}
						</p>
					</div>
					<div class="total-excl total-bold-border">
						<p class="all-total">Total</p>
						<p class="total-prize">
							€
							{{ subTotalField.value ? subTotalField.value : getCalculation.sub_total }}
						</p>
						<!-- calculatgeTotalWithVat -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faCopy, faTrashAlt, faChevronDown, faChevronUp, faSave } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';
import { contractTypeOptions, vatTypeOptions } from '@/utils/enums.js';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import { useForm, useField } from 'vee-validate';
import { reactive } from '@vue/reactivity';
import * as yup from 'yup';

export default {
	name: 'DailyWorkHourList',

	components: {
		FontAwesomeIcon,
		Multiselect,
	},
	props: {
		formFields: Object,
		workDetailArray: Array,
	},

	setup(props) {
		const invoiceWorkDetail = ref({});
		const work_hourId = ref(null);
		const workDetailList = ref([]);
		const getCalculation = ref([]);
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
			seekerId: null,
			total_work: 0,
			transported_heavyloads: null,
			transported_workload: null,
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
		const plusIcon = faPlus;
		const copyIcon = faCopy;
		const trashIcon = faTrashAlt;
		const downIcon = faChevronDown;
		const downArrowIcon = faChevronDown;
		const upIcon = faChevronUp;
		const saveIcon = faSave;
		const eidtIndexIdField = ref(null);
		const workSeekerId = ref(null);
		// global store
		const store = useStore(); // use state

		// sweetalert
		const Swal = useSwal();

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
				const total = item.contract_value * item.total_work;
				return Math.floor(total * 100) / 100;
			};
		});
		// seekerId
		const seekerId = computed(() => store.state.auth.user);
		const tripTimeCalc = computed(() => {
			const timeDiff = moment.duration(moment(tripEndField.value).diff(moment(tripStartField.value)));
			return timeDiff.asHours();
		});

		// sub total of all item without vat
		const calculateTotalWithoutVat = computed(() => {
			const subTotal = (workDetailList.value || []).reduce((acc, item, index) => {
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

		// total companstion calculate
		const totalCompensation = computed(() => {
			return lunchCompensationField.value + otherCompensationField.value;
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

		// edit invoice data by id
		const work_hour_details = computed(() => {
			return store.state.teamInvoice.invoiceInfo;
		});

		const workhourList = computed(() => {
			return store.state.teamInvoice.invoiceInfo.invoice_workhours;
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

		// get sub total and compensation amount computed
		const calculation_total = computed(() => {
			return store.state.teamInvoice.invoiceInfo;
		});
		const totalDistanceKilloMeter = computed(() => {
			return distanceField.value * 0.46;
		});

		const finalTotal = computed(() => {
			return Number(fullHalfDatCompensationField.value) + Number(lunchCompensationField.value) + Number(otherCompensationField.value) + Number(totalDistanceKilloMeter.value);
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// work details
		const workDetails = () => {
			const checkExistingWorkDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			if (checkExistingWorkDetails.length) {
				workDetailList.value = checkExistingWorkDetails;
			} else {
				workDetailList.value = new Array(1).fill(null).map(() => {
					return {
						...defaultWorkDetails,
					};
				});
			}
		};

		const setCalculation = () => {
			getCalculation.value = store.state.teamInvoice.invoiceInfo;
		};

		const workedHoursDetails = () => {
			workDetailList.value = store.state.teamInvoice.invoiceInfo.invoice_workhours;
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
				initialValue: null,
			}),
		);
		const hoursUnitField = reactive(
			useField('total_work', undefined, {
				initialValue: null,
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
		const teamMemberField = reactive(
			useField('team_member_name', undefined, {
				initialValue: null,
			}),
		);

		const submitFormNext = id => {
			expandRowIndex.value = id;
			submitForm();
		};

		// Form Submit
		const submitForm = handleSubmit(async values => {
			values.trip_start = moment(values.trip_start, 'HH:mm:ss').format('HH:mm:ss');
			values.trip_end = moment(values.trip_end, 'HH:mm:ss').format('HH:mm:ss');
			values.date = moment().format('YYYY/MM/DD');
			values.seekerId = workSeekerId.value;
			let workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			workDetails.splice(eidtIndexIdField.value, 1);
			// workDetails = workDetails.filter(
			// 	wd => (wd.work_hoursId ? wd.work_hoursId : wd.id) !== data.id,
			// );
			workDetails.push(values);
			localStorage.setItem('workDetails', JSON.stringify(workDetails));
			(desciptionField.value = values.description),
			(contactTypeField.value = values.contract_type),
			(contractValueField.value = values.contract_value),
			(hoursUnitField.value = values.total_work),
			(otherAmountField.value = values.other_amount),
			(distanceField.value = values.distance),
			(lunchCompensationField.value = values.lunch_compensation),
			(fullHalfDatCompensationField.value = values.day_compensation),
			(otherCompensationField.value = values.other_compensation),
			(tripStartField.value = values.trip_start),
			(tripEndField.value = values.trip_end),
			(tripTimeField.value = values.trip_time),
			(tripAddressField.value = values.trip_address),
			(workDescriptionField.value = values.work_description);
			setTimeout(() => {
				workDetailList.value = workDetails;
				expandRowIndex.value = null;
			}, 1000);
			return true;
		});

		const updateInputByOnBlur = async () => {
			const workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];

			const data = {
				worked_hourIds: workDetails.reduce((acc, x) => {
					acc.push(x.work_hoursId ? x.work_hoursId : x.id);
					return acc;
				}, []),
				vat: formFieldsData.value.vatField.value,
			};
			await store.dispatch('teamInvoice/calculationWorkedHour', data).then(res => {
				const data = res.data.data;
				totalCompensationField.value = data.compensation_amount;
				subTotalField.value = data.sub_total;
			});
			return true;
		};

		// expand work details
		const expandWorkDetails = (index, data) => {
			eidtIndexIdField.value = index;
			expandRowIndex.value = index;
			expandRowId.value = data.id;
			desciptionField.value = data.description;
			workSeekerId.value = data.seekerId == null ? seekerId.value?.jobSeeker?.id : data.seekerId;
			contactTypeField.value = data.contract_type;
			contractValueField.value = data.contract_value;
			hoursUnitField.value = data.total_work;
			otherAmountField.value = data.other_amount;
			distanceField.value = data.distance;
			lunchCompensationField.value = data.lunch_compensation || 0;
			fullHalfDatCompensationField.value = data.day_compensation || 0;
			otherCompensationField.value = data.other_compensation || 0;
			// tripStartField.value = data.trip_start == '00:00:00' ? null : moment(data.trip_start, 'HH:mm:ss').format();
			// tripEndField.value = data.trip_end == '00:00:00' ? null: moment(data.trip_end, 'HH:mm:ss').format();
			tripTimeField.value = data.trip_time;
			tripAddressField.value = data.trip_address;
			workDescriptionField.value = data.work_description;
			teamMemberField.value = data.seeker?.user?.full_name || null;
		};

		// sink work details
		const sinkWorkDetails = () => {
			expandRowIndex.value = null;
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
					console.log(id);
					store.commit('teamInvoice/remove', index);
					// workDetailList.value.splice(index, 1);
					workDetailList.value = workhourList.value;
					Swal.fire('Success!', 'Work detail is removed!', 'success');
				}
			});
		};

		// add new work detail
		const addNewWorkDetail = () => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to Delete this invoice ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes',
			}).then(async result => {
				if (result.isConfirmed) {
					store.commit('teamInvoice/upda', [defaultWorkDetails]);
					workDetailList.value;
				}
			});
		};

		// duplicate work details
		const duplicateWorkDetail = id => {
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
					console.log(id);
					store.commit('teamInvoice/upda', [defaultWorkDetails]);
					workDetailList.value;
				}
			});
		};

		// Watch

		watch(tripTimeCalc, () => {
			tripTimeField.value = tripTimeCalc.value < 0 ? 0 : tripTimeCalc.value;
		});
		watch(work_hour_details, () => {
			workedHoursDetails();
		});
		watch(calculation_total, () => {
			setCalculation();
		});
		// new work hour list
		watch(workhourList, () => {
			workDetailList.value = workhourList.value;
		});

		watch(
			() => props.workDetailArray,
			val => {
				workDetailList.value = val ?? [];
				localStorage.setItem('workDetails', JSON.stringify(val));
			},
		);

		return {
			// ref
			contractTypeOptions,
			workDetailList,
			expandRowIndex,
			expandRowId,
			vatTypeOptions,
			work_hourId,
			invoiceWorkDetail,
			getCalculation,
			formFieldsData,
			eidtIndexIdField,
			seekerId,
			workSeekerId,

			// icons
			plusIcon,
			copyIcon,
			trashIcon,
			downIcon,
			upIcon,
			downArrowIcon,
			saveIcon,

			// Form
			submitForm,
			formMeta,
			resetForm,
			submitFormNext,
			updateInputByOnBlur,

			// Form Feilds
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
			teamMemberField,

			// computed
			calculateSubTotal,
			calculateTotalWithoutVat,
			calculateVat,
			calculatgeTotalWithVat,
			tripTimeCalc,
			workedHoursDetails,
			isDisableCompensation,
			dayCompensationDisable,
			totalCompensation,
			totalDistanceKilloMeter,
			finalTotal,

			// methods
			expandWorkDetails,
			sinkWorkDetails,
			removeWorkDetail,
			addNewWorkDetail,
			duplicateWorkDetail,
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
		padding: 7px 5px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		.product-no {
			width: 6%;
		}
		.contract-type,
		.contract-value,
		.quantity {
			width: 12%;
		}
		.total-amount {
			width: 17%;
		}
		.actions {
			width: 16%;
		}
		.discription {
			width: 22%;
		}
		.team-member {
			width: 21%;
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
				width: 95%;
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
			width: 16%;
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
			}
		}
	}
	.details-content-1 {
		background-color: #f6f6f6;
	}
	.opne-toggle {
		padding: 10px 20px;
		// background-color: #f6f6f6;
		// border: 1px solid #dde0e2;
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
	.grey-light {
		color: #babec3;
		font-weight: 500;
	}

	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		width: 100%;
		border: 3px dashed #dde0e2;
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
}
.invoice-pd {
	padding: 10px 20px;
}
.work-hour-col {
	min-width: 900px;
}
</style>

<style lang="scss" scoped>
.workHourList {
	.form-group {
		.multiselect-input {
			border: none !important;
		}
	}
}
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
	// background-color: #fff;
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
.min-height {
	min-height: 100%;
}
</style>

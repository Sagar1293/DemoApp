<template>
	<div class="paymentsharingList mt-3">
		<!-- daily work hour list title -->
		<div class="d-flex align-items-center justify-content-between mb-3">
			<div class="pph-left">
				<h5 class="title-lg">Payment Sharing</h5>
			</div>
		</div>
		<p class="pb-2">This payment will be shared with the follwing members.</p>

		<div class="daily-work-row">
			<div class="daily-work-col">
				<!-- paymentsharing head -->
				<div class="details-head text-center d-flex align-items-center">
					<div class="member-name">
						<p class="details-head-text text-start">Member name</p>
					</div>

					<div class="role-member">
						<p class="details-head-text">Role</p>
					</div>

					<div class="email-address">
						<p class="details-head-text">Email address</p>
					</div>

					<div class="share-value">
						<p class="details-head-text">Share</p>
					</div>

					<div class="Tax-value">
						<p class="details-head-text">Tax Percentage</p>
					</div>

					<div class="allowances">
						<p class="details-head-text">Allowances</p>
					</div>
					<div class="payment">
						<p class="details-head-text">Will be paid</p>
					</div>
					<div class="payment">
						<p class="details-head-text">Actions</p>
					</div>
				</div>

				<!-- paymentsharing list - row -->
				<div class="details-content text-center ">
					<div class="product-no">
						<div class="d-flex align-items-center">
							<div class="w-20 h-20">
								<img src="@/assets/images/user-icon.svg" class="w-100 h-100" alt="err" />
							</div>
							<p class="ml-2">John Doe</p>
						</div>
					</div>

					<div class="role-member">
						<div class="w-20 h-20 mx-auto">
							<img src="@/assets/images/leader-icon.svg" class="w-100 h-100" alt="err" />
						</div>
					</div>

					<div class="email-address text-break">
						<div>
							<p>john@mail.tld</p>
						</div>
					</div>

					<div class="share-value ml-xl-0 ml-3">
						<div class="work py-0 form-control d-flex align-items-center rounded-md">
							<input type="text" class="border-none w-100" />
							<p class="pl-2">€</p>
						</div>
					</div>

					<div class="Tax-value">
						<div class="tax-input py-0 form-control d-flex align-items-center">
							<input type="text" class="w-100 form-control" />
							<p class="pl-2">€</p>
						</div>
					</div>

					<div class="allowances">
						<div class="allowances-input py-0 form-control d-flex align-items-center">
							<input type="text" class="form-control w-100" />
							<p class="pl-2">€</p>
						</div>
					</div>

					<div class="payment">
						<div>
							<p class="text-red">1461.36€</p>
						</div>
					</div>
					<div class="actions d-flex justify-content-center align-items-center">
						<!-- expand work detail -->
						<div class="down-btn" v-if="index !== expandRowIndex" @click="expandWorkDetails(index,item)">
							<FontAwesomeIcon :icon="downIcon" />
						</div>

						<!-- expand work detail -->
						<div class="down-btn" v-if="index === expandRowIndex" @click="expandWorkDetails">
							<FontAwesomeIcon :icon="upIcon" />
						</div>
					</div>

				</div>

				<!-- paymentsharing row expand -->
				<div class="opne-toggle p-3 border-top border-bottom" v-if="index === expandRowIndex">
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
							<p class="details-head-text">Contract Type</p>
						</div>
						<div class="contract-value">
							<p class="details-head-text">Contract Value</p>
						</div>
						<div class="quantity">
							<p class="details-head-text">Quantity & Units</p>
						</div>
					</div>

					<div>
						<div class="row no-gutters">
							<div class="details-content border rounded-bottom">
								<!-- serial no. -->
								<div class="product-width">
									<div class="product-1">
										<p class="inpult-area">{{ index + 1 }}</p>
									</div>
								</div>
								

								<!-- description -->
								<div class="work-width text-center">
									<p>John Doe</p>
								</div>

								<!-- description -->
								<div class="work-width text-center">
									<p>Description Description</p>
								</div>

								<!-- contract type -->
								<div class="hours-width me-2 text-center">
									<p>8 Hours</p>
								</div>

								<!-- contract value -->
								<div class="contractvalue-width text-center">
									<p>108 €</p>
								</div>

								<!-- quantity & unit -->
								<div class="contractvalue-width text-center">
									<p>100 €</p>
								</div>
							</div>
						</div>
					</div>
				</div>


				<div class="details-content text-center ">
					<div class="product-no">
						<div class="d-flex align-items-center">
							<div class="w-20 h-20">
								<img src="@/assets/images/user-icon.svg" class="w-100 h-100" alt="err" />
							</div>
							<p class="ml-2">John Doe</p>
						</div>
					</div>

					<div class="role-member">
						<div class="w-20 h-20 mx-auto">
							<img src="@/assets/images/member-icon.svg" class="w-100 h-100" alt="err" />
						</div>
					</div>

					<div class="email-address">
						<div>
							<p>john@mail.tld</p>
						</div>
					</div>

					<div class="share-value ml-xl-0 ml-3">
						<div class="work py-0 form-control d-flex align-items-center">
							<input type="text" class="border-none w-100" />
							<p class="pl-2">€</p>
						</div>
					</div>

					<div class="Tax-value">
						<div class="tax-input py-0 form-control d-flex align-items-center">
							<input type="text" class="w-100 form-control" />
							<p class="pl-2">€</p>
						</div>
					</div>

					<div class="allowances">
						<div class="allowances-input py-0 form-control d-flex align-items-center">
							<input type="text" class="form-control w-100" />
							<p class="pl-2">€</p>
						</div>
					</div>

					<div class="payment">
						<div class="pph-left-box">
							<p class="text-red">1461.36€</p>
						</div>
					</div>
					<div class="actions d-flex justify-content-center align-items-center">
						
						<div class="down-btn" v-if="index !== expandRowIndex" @click="expandWorkDetails(index,item)">
							<FontAwesomeIcon :icon="downIcon" />
						</div>

				
						<div class="down-btn" v-if="index === expandRowIndex" @click="sinkWorkDetails">
							<FontAwesomeIcon :icon="upIcon" />
						</div>

					</div>
				</div>

				<!-- paymentsharing row expand -->
				<div class="opne-toggle p-3 border-top" v-if="index === expandRowIndex">
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
							<p class="details-head-text">Contract Type</p>
						</div>
						<div class="contract-value">
							<p class="details-head-text">Contract Value</p>
						</div>
						<div class="quantity">
							<p class="details-head-text">Quantity & Units</p>
						</div>
					</div>

					<div>
						<div class="row no-gutters">
							<div class="details-content border rounded-bottom">
								<!-- serial no. -->
								<div class="product-width">
									<div class="product-1">
										<p class="inpult-area">{{ index + 1 }}</p>
									</div>
								</div>

								<!-- description -->
								<div class="work-width text-center">
									<p>John Doe</p>
								</div>

								<!-- description -->
								<div class="work-width text-center">
									<p>Description Description</p>
								</div>

								<!-- contract type -->
								<div class="hours-width me-2 text-center">
									<p>8 Hours</p>
								</div>

								<!-- contract value -->
								<div class="contractvalue-width text-center">
									<p>108 €</p>
								</div>

								<!-- quantity & unit -->
								<div class="contractvalue-width text-center">
									100 €
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-7 col-8 ml-auto p-0">
				<div class="total mt-3 ">
					<div class="total-excl">
						<p class="text-total">Total excl. VAT</p>
						<p class="text-prize"> € 0</p>
					</div>
					<div class="total-excl">
						<p class="text-total">Personal tax</p>
						<p class="text-prize"> € </p>
					</div>
					<div class="total-excl">
						<p class="text-total">Total Compensation</p>
						<p class="text-prize"> € 0</p>
					</div>
					<div class="total-excl total-bold-border">
						<p class="all-total">Total</p>
						<p class="total-prize"> € 0</p>
					</div>
				</div>
			</div>
		</div>

		<p class="pt-2 border-bottom pb-3">The invoice sum is automatically shared by members workdetails, as team leader you can edit the sharing amount.Our platform will automatically.</p>

		<div class="text-right mt-2">
			<h5 class="title-sm fw-bolder">Left to share</h5>
			<h1 class="text-red">100.00€</h1>
		</div>
	</div>


</template>

<script>
import { onMounted, ref, computed, watch } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faPlus,
	faChevronDown,
	faChevronUp,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
// import Multiselect from '@vueform/multiselect';
import { contractTypeOptions, vatTypeOptions } from '@/utils/enums.js';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import { useForm, useField } from 'vee-validate';
import { reactive } from '@vue/reactivity';
import * as yup from 'yup';

export default {
	name: 'PaymentSharing',

	components: {
		FontAwesomeIcon,
		// Multiselect,
		// TeamWorkDetailsModal,
		// DefaultLoader,
	},

	props: {
		formFields: Object,
		workDetailArray: Array,
	},

	setup(props) {
		const invoiceWorkDetail = ref({});
		const index = ref(0);
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
		const downIcon = faChevronDown;
		const downArrowIcon = faChevronDown;
		const upIcon = faChevronUp;
		const closeIcon = faTimes;
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
			const timeDiff = moment.duration(
				moment(tripEndField.value).diff(moment(tripStartField.value)),
			);
			return timeDiff.asHours();
		});

		// sub total of all item without vat
		const calculateTotalWithoutVat = computed(() => {
			const subTotal = (workDetailList.value || []).reduce(
				(acc, item, index) => {
					let total = 0;
					if (index === expandRowIndex.value) {
						total = contractValueField.value * hoursUnitField.value;
					} else {
						total = item.contract_value * item.total_work;
					}

					acc += total || 0;
					return acc;
				},
				0,
			);
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
			if (
				lunchCompensationField.value ||
				otherCompensationField.value > 0
			) {
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
			return (
				Number(fullHalfDatCompensationField.value) +
				Number(lunchCompensationField.value) +
				Number(otherCompensationField.value) +
				Number(totalDistanceKilloMeter.value)
			);
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// work details
		const workDetails = () => {
			const checkExistingWorkDetails = localStorage.getItem('workDetails')
				? JSON.parse(localStorage.getItem('workDetails'))
				: [];
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
			workDetailList.value =
				store.state.teamInvoice.invoiceInfo.invoice_workhours;
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
			values.trip_start = moment(values.trip_start, 'HH:mm:ss').format(
				'HH:mm:ss',
			);
			values.trip_end = moment(values.trip_end, 'HH:mm:ss').format(
				'HH:mm:ss',
			);
			values.date = moment().format('YYYY/MM/DD');
			values.seekerId = workSeekerId.value;
			let workDetails = localStorage.getItem('workDetails')
				? JSON.parse(localStorage.getItem('workDetails'))
				: [];
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
			const workDetails = localStorage.getItem('workDetails')
				? JSON.parse(localStorage.getItem('workDetails'))
				: [];

			const data = {
				worked_hourIds: workDetails.reduce((acc, x) => {
					acc.push(x.work_hoursId ? x.work_hoursId : x.id);
					return acc;
				}, []),
				vat: formFieldsData.value.vatField.value,
			};
			await store
				.dispatch('teamInvoice/calculationWorkedHour', data)
				.then(res => {
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
			workSeekerId.value =
				data.seekerId == null
					? seekerId.value?.jobSeeker?.id
					: data.seekerId;
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
			tripTimeField.value =
				tripTimeCalc.value < 0 ? 0 : tripTimeCalc.value;
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
			downIcon,
			upIcon,
			downArrowIcon,
			closeIcon,
			
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
			index
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.paymentsharingList {
	.text-red {
		color: #ff4b57;
		font-weight: 500;
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
	.daily-work-row {
		@media (max-width: 1200px) {
			overflow: auto;
		}
	}
	.daily-work-col {
		border: 1px solid #dde0e2;
		border-radius: 10px;
		@media (max-width: 1200px) {
			min-width: 900px;
		}
	}
	.details-head {
		background-color: #273238;
		padding: 10px 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.product-no ,.member-name {
		width: 13%;
	}

	.role-member {
		width: 10%;
	}

	.share-value {
		width: 20%;
	}

	.Tax-value {
		width: 15%;
	}

	.allowances {
		width: 10%;
	}

	.payment {
		width: 10%;
	}

	.email-address {
		width: 20%;
	}

	.actions {
		width: 10%;
	}
	.details-head-text {
		color: #ffff;
		font-size: 16px;
	}
	
	.details-content {
		display: flex;
		align-items: center;
		padding: 10px 10px;
		min-width: 900px;
		// overflow: auto;

		.product-width {
			width: 9%;
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
				padding:10px;
				// border-radius: 12px;
				background-color: #f6f6f6;
				font-size: 14px;
				height:calc(1.9em + .75rem + 2px);
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

		.tax-input {
			width: 95%;
			border-radius:50px;
			border: 1px solid #ccc;
			font-size: 14px;
			height:calc(1.9em + .75rem + 2px);

			.form-control {
				border: none;
				padding: 0;
				background-color: transparent;
			}
		}
		
		.allowances-input {
			width: 100%;
			padding: 8px 20px;
			border-radius:50px;
			font-size: 14px;
			height:calc(1.9em + .75rem + 2px);

			.form-control {
				border: none;
				padding: 0;
				background-color: transparent;
			}
		}
		.hours-width,
		.contractvalue-width {
			width: 22%;
			.hours {
				width: 100%;
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
				width:95%;
				padding: 8px 10px;
				border-radius: 12px;
				display: flex;
				background-color: #f6f6f6;

				input {
					border: none;
					background: transparent;
				}

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

		.share-value {
			width: 20%;

			.work {
				width: 95%;
				// border-radius: 50px;
				font-size: 14px;
				height:calc(1.9em + .75rem + 2px);

				input {
					border: none;
				}
			}
			.programme {
				background-color: #ffff;
			}
		}
		.totalamount-width {
			width: 17%;
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
	.details-head {
		display: flex;
		align-items: center;
		background-color: #273238;
		padding: 10px;
		border-top-left-radius:10px;
		border-top-right-radius: 10px;

		.product-no {
			width:10%;
		}
		.contract-type,
		.contract-value,
		.quantity {
			width: 22%;
		}
		.total-amount {
			width: 17%;
		}
		.actions {
			width: 16%;
		}
		.discription{
			width: 22%;
		}
		.team-member {
			width: 21%;
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
	

}
</style>

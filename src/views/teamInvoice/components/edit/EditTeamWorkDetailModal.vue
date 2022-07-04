<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container upload_documents" content-class="modal-content px-0 pb-0" :click-to-close="false">
		<!-- close btn -->
		<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal()">
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="closeIcon" />
			</span>
		</button>

		<!-- modal content -->
		<div>
			<div class="modal__content">
				<!-- modal header -->
				<div class="modal-header">
					<h5 class="title-lg">
						{{ t('workDetails.editWorkDetails') }}
					</h5>
				</div>

				<!-- modal body -->
				<div>
					<div class="modal-body">
						<div class="modal-form">
							<!-- form -->
							<div class="invoice__list">
								<form class="theme-input tab-form">
									<div class="invoice-sec invoice-pd">
										<div class="row m-auto">
											<div class="col-xl-6">
												<div class="pph-left">
													<h5 class="title-lg mb-2">Trip Details</h5>
												</div>
												<div class="pph-left-box">
													<div class="row">
														<!-- trip Name -->
														<div class="col-md-12 form-group">
															<label for="tripName" class="company-titel"> Trip Name </label>
															<input
																id="editTeamTripName"
																type="text"
																class="form-control"
																:placeholder="
																	t('validation.enterField', {
																		field: 'fieldList.tripName',
																	})
																"
																@input="tripNameField.handleChange"
																@blur="tripNameField.handleBlur"
																:value="tripNameField.value"
															/>
														</div>
														<!-- End trip Name -->
														<!-- Start Starting Address -->
														<div class="col-md-6">
															<div class="col-md-12 form-group p-0">
																<div class="position-relative">
																	<label for="startingAddress" class="company-titel">Starting Address</label>

																	<div class="position-relative">
																		<GMapAutocomplete
																			class="form-control"
																			:placeholder="
																				t('validation.enterField', {
																					field: 'fieldList.tripStartAddress',
																				})
																			"
																			@input="tripStartAddressField.handleChange"
																			@blur="tripStartAddressField.handleBlur"
																			:value="tripStartAddressField.value"
																			@place_changed="originStart"
																			:componentRestrictions="gAuComRestriction"
																		/>
																		<div class="calender-icon d-flex justify-content-center align-items-center position-absolute">
																			<FontAwesomeIcon :icon="faMapMarker" class="text-sm" />
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<!-- End Starting Address -->
														<!-- Strat Ending Address -->
														<div class="col-md-6">
															<div class="col-md-12 form-group p-0">
																<div class="position-relative">
																	<label for="firstName" class="company-titel">Ending Address</label>

																	<div class="position-relative">
																		<GMapAutocomplete
																			type="text"
																			class="form-control"
																			:placeholder="
																				t('validation.enterField', {
																					field: 'fieldList.tripEndAddress',
																				})
																			"
																			@input="tripEndAddressField.handleChange"
																			@blur="tripEndAddressField.handleBlur"
																			:value="tripEndAddressField.value"
																			@place_changed="destionationEnd"
																			:componentRestrictions="gAuComRestriction"
																		/>
																		<div class="calender-icon d-flex justify-content-center align-items-center position-absolute">
																			<FontAwesomeIcon :icon="faMapMarker" class="text-sm" />
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<!-- End Ending Address -->
														<!-- Start Trip Starting date -->
														<div class="col-md-4">
															<label for="firstName" class="company-titel">Trip Starting date</label>
															<div class="form-group dropdown select-employee">
																<div>
																	<p class="company-input input-date pr-2">
																		<v-date-picker
																			@input="tripStartDateField.handleChange;"
																			@blur="tripStartDateField.handleBlur;"
																			v-model="tripStartDateField.value"
																			:min-date="`2020/01/01`"
																			:masks="{
																				input: 'DD.MM.YYYY',
																			}"
																			class="d-flex justify-content-center align-items-center"
																		>
																			<template v-slot="{ inputValue, inputEvents }">
																				<input class="form-control" :value="inputValue" v-on="inputEvents" />

																				<div class="calender-icon d-flex justify-content-center align-items-center">
																					<FontAwesomeIcon :icon="calenderIcon" class="text-sm" />
																				</div>
																			</template>
																		</v-date-picker>
																	</p>
																</div>
															</div>
														</div>
														<!-- End Trip Starting date -->
														<!-- Strat Trip Starting time -->
														<div class="col-md-8 pe-4">
															<div class="form-group p-0">
																<label for="firstName" class="company-titel">Trip Starting Time</label>

																<div class="row start-time-drop">
																	<div class="col-12">
																		<div class="dropdown select-employee">
																			<div>
																				<input
																					type="time"
																					name="team_edit_end_time"
																					id="edit_end_time"
																					class="form-control"
																					@change="tripsStartTime($event)"
																					v-model="tripStartTime"
																					style="border-radius: 50px"
																				/>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<!-- End Trip Starting date -->
														<!-- Start Trip Ending date -->
														<div class="col-md-4">
															<label for="firstName" class="company-titel">Trip Ending date</label>
															<div class="form-group dropdown select-employee">
																<p class="company-input input-date pr-2">
																	<v-date-picker
																		@input="tripEndDateField.handleChange;"
																		@blur="tripEndDateField.handleBlur;"
																		v-model="tripEndDateField.value"
																		:min-date="`2020/01/01`"
																		:masks="{
																			input: 'DD.MM.YYYY',
																		}"
																		class="d-flex justify-content-center align-items-center"
																	>
																		<template v-slot="{ inputValue, inputEvents }">
																			<input class="form-control" :value="inputValue" v-on="inputEvents" />

																			<div class="calender-icon d-flex justify-content-center align-items-center">
																				<FontAwesomeIcon :icon="calenderIcon" class="text-sm" />
																			</div>
																		</template>
																	</v-date-picker>
																</p>
															</div>
														</div>
														<!-- End Trip Ending date -->
														<!-- Start Ending Time -->
														<div class="col-md-8 pe-4">
															<div class="form-group p-0">
																<label for="firstName" class="company-titel">Ending Time</label>

																<div>
																	<div class="row start-time-drop">
																		<div class="col-12">
																			<div class="dropdown select-employee">
																				<div>
																					<input
																						type="time"
																						name="edit_end_time"
																						id="team_edit_ending_time"
																						class="form-control"
																						@change="tripsEndTime($event)"
																						v-model="tripEndTime"
																						style="border-radius: 50px"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<!-- End Ending Time -->
														<!-- Start Calculatedtrip Time -->
														<div class="col-md-4 col-6">
															<label for="firstName" class="company-titel">Calculatedtrip Time</label>
															<input style="border: none" id="teamCalculatedtripTime" type="text" :value="calculateTripTime" disabled />
															<!-- </p> -->
														</div>
														<!-- End Calculatedtrip Time -->
														<!-- Start Total distance  -->
														<div class="col-md-4 col-6">
															<label for="firstName" class="company-titel">Total distance</label>
															<p class="trip-text" id="totalDistance"></p>
														</div>
														<!-- End Total distance  -->
														<!-- Attechment button -->
													</div>
												</div>
											</div>
											<!-- map view section -->
											<div class="col-xl-6">
												<div class="pph-left">
													<h5 class="title-lg mb-2">Preview</h5>
												</div>
												<div class="cost-ex-map">
													<GMapMap
														style="border: 0"
														:zoom="7"
														:center="{
															lat: 60.1699,
															lng: 24.9384,
														}"
														allowfullscreen=""
														loading="lazy"
													>
														<directions-renderer travelMode="ArrivalTime" :origin="origin" :destination="destionation">
															<p id="distance"></p>
														</directions-renderer>
													</GMapMap>
												</div>
											</div>
										</div>
									</div>
									<!-- Start Vehicle Section -->
									<div class="detail-sec">
										<div class="row">
											<div class="col-xl-3 col-md-5 col-6">
												<label for="firstName" class="company-titel">Vehicle registration number</label>

												<div class="input-group">
													<input
														class="form-control form-grey-input text-center"
														type="text"
														id="editWorkVehicleRegistrationNumber"
														placeholder="-"
														aria-label="Text input with radio button"
														@input="vehicleRegistrationField.handleChange"
														@blur="vehicleRegistrationField.handleBlur"
														:value="vehicleRegistrationField.value"
													/>
												</div>
											</div>

											<div class="col-xl-2 col-md-5 col-5">
												<div>
													<span class="prof-bg-puzzle">
														<img src="/img/prof-red-r.9eaadf30.png" alt="" class="prof-red-t-right" />
													</span>
													<div class="puzzle-text">
														<h6>Extras</h6>
													</div>
												</div>
											</div>

											<div class="col-xl-3 col-md-7 col-7">
												<div class="d-flex flex-column justify-content-center h-100">
													<div class="form-check form-checkbox">
														<input
															class="form-check-input form-checkbox-width"
															type="checkbox"
															id="editWorktransportedHeavyLoad"
															:checked="transportedHeavyLoad"
															:value="transportedHeavyLoad.value"
															:v-model="transportedHeavyLoad.value"
															@click="onTransported($event)"
														/>
														<label class="form-check-label extras-font" for="editWorktransportedHeavyLoad"> Transported heavy load </label>
													</div>

													<div class="form-check form-checkbox">
														<input
															class="form-check-input form-checkbox-width"
															type="checkbox"
															:checked="drivenRoughTerrain"
															:value="drivenRoughTerrain.value"
															:v-model="drivenRoughTerrain.value"
															@click="ondrivenRough($event)"
															id="editWorkDrivenRoughTerrain"
														/>
														<label class="form-check-label extras-font" for="editWorkDrivenRoughTerrain"> Driven in rough terrain </label>
													</div>

													<!-- Trailer -->
													<div class="form-check form-checkbox">
														<input
															class="form-check-input form-checkbox-width"
															type="checkbox"
															:checked="vehicleSubClassField"
															:value="vehicleSubClassField.value"
															:v-model="vehicleSubClassField.value"
															@click="onTrailer($event)"
															id="editWorkVehicleSubClass"
														/>
														<label class="form-check-label extras-font" for="editWorkvehicleSubClass"> Trailer </label>
													</div>
												</div>
											</div>
										</div>

										<div class="invoice-grey-sec">
											<div class="row">
												<div class="col-md-3 form-group">
													<label for="firstName" class="company-titel">Contract Type</label>
													<Multiselect
														id="editWorkContractType"
														class="form-group"
														@input="contactTypeField.handleChange;"
														@blur="contactTypeField.handleBlur;"
														v-model="contactTypeField.value"
														:options="contractTypeOptions"
														mode="single"
														:canDeselect="true"
													/>
													<p class="text-danger">
														{{ contactTypeField.errorMessage }}
													</p>
												</div>
												<div class="col-md-3 form-group">
													<label for="tripName" class="company-titel"> Contract Value </label>
													<input
														id="editWorkContractValue"
														type="number"
														min="0"
														class="form-control"
														@input="contractValueField.handleChange"
														@blur="contractValueField.handleBlur"
														:value="contractValueField.value"
													/>
													<p class="text-danger">
														{{ contractValueField.errorMessage }}
													</p>
												</div>

												<div class="col-md-3 form-group">
													<label for="firstName" class="company-titel">Contract Date</label>
													<div class="form-group dropdown select-employee">
														<p class="company-input input-date pr-2">
															<v-date-picker
																@input="dateField.handleChange;"
																@blur="dateField.handleBlur;"
																v-model="dateField.value"
																:masks="{
																	input: 'DD.MM.YYYY',
																}"
																class="d-flex justify-content-center align-items-center"
															>
																<template v-slot="{ inputValue, inputEvents }">
																	<input class="form-control" :value="inputValue" v-on="inputEvents" />

																	<div class="calender-icon d-flex justify-content-center align-items-center pr-2">
																		<FontAwesomeIcon :icon="calenderIcon" class="text-sm" />
																	</div>
																</template>
															</v-date-picker>
														</p>
														<p class="text-danger">
															{{ dateField.errorMessage }}
														</p>
													</div>
												</div>

												<div class="col-md-3 form-group">
													<label for="firstName" class="company-titel">Work Description</label>
													<textarea
														class="form-control"
														id="editWorkDescription"
														spellcheck="false"
														@input="workDescription.handleChange"
														@blur="workDescription.handleBlur"
														:value="workDescription.value"
													></textarea>
												</div>

												<div class="col-md-3 form-group">
													<label for="Lunch Compensation" class="company-titel">Hours / Pieces</label>
													<div class="form-control d-flex">
														<input
															id="editWorkHoursPieces"
															type="number"
															class="input-area"
															@input="totalWorkField.handleChange"
															@blur="totalWorkField.handleBlur"
															:value="totalWorkField.value"
														/>
													</div>
												</div>

												<div class="col-md-3 form-group">
													<label for="Lunch Compensation" class="company-titel">Lunch Compensation</label>
													<div>
														<Multiselect
															id="editWorkLunchCompensation"
															class="form-group"
															@input="lunchCompensationField.handleChange"
															@blur="lunchCompensationField.handleBlur"
															:placeholder="
																t('validation.selectField', {
																	field: 'fieldList.lunchCompensation',
																})
															"
															v-model="lunchCompensationField.value"
															:options="lunchCompensation"
															clear
															@clear="clearVal"
															label="compensation_value"
															mode="single"
															:canDeselect="true"
															:disabled="isDisableCompensation('lunch')"
														/>
													</div>
												</div>

												<div class="col-xl-4 col-md-3 form-group">
													<label for="Lunch Compensation" class="company-titel">Full /Half day Compensation</label>
													<div>
														<Multiselect
															id="EditWorkFullHalfDayCompensation"
															class="form-group"
															@input="otherCompensationField.handleChange"
															@blur="otherCompensationField.handleBlur"
															:placeholder="
																t('validation.selectField', {
																	field: 'fieldList.daysCompensation',
																})
															"
															v-model="otherCompensationField.value"
															:options="halfFullCompnesation"
															clear
															@clear="clearVal"
															label="compensation_value"
															mode="single"
															:canDeselect="true"
															:disabled="isDisableCompensation('fullHalfDay')"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- End Vehicle Section -->
									<div class="text-center mt-2 pb-3">
										<button type="button" class="btn-common btn-red mt-2" @click="submitForm">
											{{ t('common.submit') }}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import moment from 'moment';
import { ref, computed, reactive, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes, faArrowDown, faArrowLeft, faArrowRight, faChevronDown, faMapMarkerAlt, faPaperclip, faPlus, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
import { vehicleClassTypes, vehicleSubClassTypes, vatTypeOptionsNew, contractTypeOptions, gAuComRestriction } from '@/utils/enums.js';

export default {
	name: 'EditWorkDetailModal',

	//components
	components: {
		FontAwesomeIcon,
		Multiselect,
	},

	props: {
		// modal status
		isModalShow: Boolean,
		editWorkInfo: Object,
		indexId: Number,
	},

	setup(props, { emit }) {
		// ref vars
		const modalShow = ref(props.isModalShow);
		const contractFile = ref(null);
		const contractFilePreview = ref('');
		const formFieldsData = ref('');
		const vehicleCheckBoxValue = ref(false);
		const transportedHeavyLoad = ref(false);
		const drivenRoughTerrain = ref(false);
		const transportedWorkload = ref(false);
		const vehicleSubClassField = ref(false);
		const start = ref('');
		const end = ref('');
		const imageFile = ref(null);
		const workDetailInfo = ref(props.editWorkInfo);
		const tripStartTime = ref(null);
		const tripEndTime = ref(null);

		// icons
		const closeIcon = faTimes;
		const rightIcon = faArrowRight;
		const bottomIcon = faArrowDown;
		const leftArrowIcon = faArrowLeft;
		const faMapMarker = faMapMarkerAlt;
		const downArrowIcon = faChevronDown;
		const paperClipIcon = faPaperclip;
		const plusIcon = faPlus;
		const calenderIcon = faCalendarWeek;
		const ionvoiceWorkDetail = ref(null);

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const workDetailsSchema = yup.object({
			trip_name: yup.string().nullable().notRequired(),
			trip_start_address: yup.string().nullable().notRequired(),
			trip_end_address: yup.string().nullable().notRequired(),
			trip_start_date: yup.string().nullable().notRequired(),
			trip_start_time: yup.string().nullable().notRequired(),
			trip_end_date: yup.string().nullable().notRequired(),
			trip_end_time: yup.string().nullable().notRequired(),
			trip_calculate_time: yup.number().nullable().notRequired(),
			vehicle_number: yup.string().nullable().notRequired(),
			vehicle_class: yup.string().nullable().notRequired(),

			description: yup.string().nullable().notRequired(),
			lunch_compensation: yup.number().nullable().notRequired(),
			distance: yup
				.number()
				.nullable()
				.notRequired()
				.min(0, t('validation.minDistance', { minLen: 0 })),
			total_work: yup.number().nullable().notRequired(),
			other_compensation: yup.number().nullable().notRequired(),
			contract_type: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.contractType',
					}),
				),
			contract_value: yup
				.number()
				.typeError('contract value must be a number')
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.contractValue',
					}),
				),
			date: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.contractDate',
					}),
				),
			teamId: yup.number().nullable().notRequired(),
		});

		// form validation intialize
		const {
			meta: formMeta,
			handleSubmit,
			isSubmitting,
			setValues,
		} = useForm({
			validationSchema: workDetailsSchema,
			// validateOnMount: false,
		});

		//trip name
		const tripNameField = reactive(useField('trip_name', undefined, { initialValue: null }));
		// start address
		const tripStartAddressField = reactive(useField('trip_start_address', undefined, { initialValue: null }));
		// end address
		const tripEndAddressField = reactive(useField('trip_end_address', undefined, { initialValue: null }));
		// trip start date
		const tripStartDateField = reactive(
			useField('trip_start_date', undefined, {
				initialValue: null,
			}),
		);
		// trip start time
		const tripStartTimeHoursField = reactive(
			useField('trip_start_time', undefined, {
				initialValue: moment().startOf('day').toDate(),
			}),
		);
		// tripe end date
		const tripEndDateField = reactive(useField('trip_end_date', undefined, { initialValue: null }));
		// tripe end time
		const tripEndTimeHourField = reactive(
			useField('trip_end_time', undefined, {
				initialValue: moment().startOf('day').toDate(),
			}),
		);
		// trip calculations
		const tripCalculateTimeField = reactive(useField('trip_calculate_time', undefined, { initialValue: 0 }));
		//  vehicle registration
		const vehicleRegistrationField = reactive(
			useField('vehicle_number', undefined, {
				initialValue: null,
			}),
		);
		// vehicle class
		const vehicleClassField = reactive(useField('vehicle_class', undefined, { initialValue: null }));
		//work description
		const workDescription = reactive(useField('description', undefined, { initialValue: null }));
		//total work hour
		const totalWorkField = reactive(useField('total_work', undefined, { initialValue: null }));
		// lunch compensation Field
		const lunchCompensationField = reactive(useField('lunch_compensation', undefined, { initialValue: 0 }));
		//day Compensation Field
		const otherCompensationField = reactive(useField('other_compensation', undefined, { initialValue: 0 }));
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
		const dateField = reactive(
			useField('date', undefined, {
				initialValue: null,
			}),
		);
		const showTeamField = reactive(
			useField('teamId', undefined, {
				initialValue: null,
			}),
		);

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch work detail
			store.dispatch('invoice/getDefaultEmployerList');
			//get work team
			store.dispatch('workDetail/getWrokTeam');

			//fetch details off work details
			fetchInvoiceWorkDairies();
			//get lunch compensation
			fetchLunchCompensation();
			//half_day_compensation, full_day_compensation,
			fetchfullDayCompensation();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		const calculateTripTime = computed(() => {
			const startTime = tripStartTime.value;
			const endTime = tripEndTime.value;
			const startDate = moment(tripStartDateField.value).format('YYYY/MM/DD');
			const endDate = moment(tripEndDateField.value).format('YYYY/MM/DD');
			const diff = Math.abs(new Date(`${startDate} ${startTime}`) - new Date(`${endDate} ${endTime}`));
			const minutes = Math.floor(diff / 1000 / 60);
			const hours = isNaN(minutes) ? 0 : minutes / 60;

			return Number.parseFloat(hours).toFixed(2);
		});

		const totalSummaryCalculations = computed(() => {
			const totalSummary = Number(lunchCompensationField.value) + Number(otherCompensationField.value);
			return totalSummary;
		});

		// get employer list
		const employerList = computed(() => {
			return store.getters['invoice/getEmployerList'];
		});

		// get team list
		const teamList = computed(() => {
			return store.getters['workDetail/getTeamOptions'];
		});

		const origin = computed(() => {
			if (!start.value) return null;
			return { query: start.value };
		});
		const destionation = computed(() => {
			if (!end.value) return null;
			return { query: end.value };
		});
		// calculate file size
		const calculateFileSize = computed(() => {
			return (file) => {
				const bytes = file.size || 0;

				if (bytes === 0) {
					return 0;
				}

				return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2));
			};
		});

		//get half full day compensation
		const halfFullCompnesation = computed(() => {
			return store.getters['workDetail/getHlafFullDayCompensation'];
		});

		//get lunch compensation
		const lunchCompensation = computed(() => {
			return store.getters['workDetail/getLunchCompensation'];
		});

		//lunch compensation disabled
		const isDisableCompensation = computed(() => {
			return (val) => {
				if (val === 'fullHalfDay' && lunchCompensationField.value > 0) {
					return true;
				} else if (val === 'lunch' && otherCompensationField.value > 0) {
					return true;
				} else {
					return false;
				}
			};
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// clear selected value
		const clearVal = () => {};

		// submit form - add work hour
		const submitForm = handleSubmit(async (values) => {
			const Starttime = tripStartTime.value.split(':').length != 3 ? tripStartTime.value + ':' + '00' : tripStartTime.value;
			const EndTime = tripEndTime.value.split(':').length != 3 ? tripEndTime.value + ':' + '00' : tripEndTime.value;
			const workDetailData = { ...values, vehicle_class: 'own_car' };

			workDetailData.teamId = values.teamId ?? null;
			workDetailData.trip_start_address = start.value ?? null;
			workDetailData.trip_end_address = end.value ?? null;
			workDetailData.distance = store.state.workDetail.totalKilloMeter || null;
			workDetailData.trip_start_date = values.trip_start_date == null ? null : moment(values.trip_start_date).format('YYYY/MM/DD');
			workDetailData.trip_end_date = values.trip_end_date == null ? null : moment(values.trip_end_date).format('YYYY/MM/DD');
			workDetailData.trip_start_time = Starttime;
			workDetailData.trip_end_time = EndTime;
			workDetailData.vehicleCheckBoxValue = vehicleCheckBoxValue.value;
			workDetailData.trip_calculate_time = calculateTripTime.value;
			workDetailData.transported_heavyloads = transportedHeavyLoad.value;
			workDetailData.driven_in_rough_terrain = drivenRoughTerrain.value;
			workDetailData.transported_workload = transportedWorkload.value;
			workDetailData.vehicle_subclass = vehicleSubClassField.value;
			workDetailData.day_compensation = values.other_compensation == 0 ? null : values.other_compensation;
			workDetailData.fullHalfDayCompensationAmount =
				values.other_compensation == 0 ? 0 : (halfFullCompnesation.value.find((x) => x.value === values.other_compensation) || {}).compensation_value;
			workDetailData.lunch_compensation = values.lunch_compensation == 0 ? null : values.lunch_compensation;
			workDetailData.lunchCompensationAmount = values.lunch_compensation == 0 ? 0 : (lunchCompensation.value.find((x) => x.value === values.lunch_compensation) || {}).compensation_value;
			workDetailData.other_compensation = values.other_compensation == 0 ? null : values.other_compensation;
			workDetailData.otherCompensationAmount = workDetailData.fullHalfDayCompensationAmount;
			workDetailData.indexId = props.indexId ?? 0;
			workDetailData.date = values.date == null ? null : moment(values.date).format('YYYY/MM/DD');

			store.commit('workDetail/updateWorkDetails', workDetailData);

			emit('workDetails');
			emit('modalFlag');

			modalShow.value = false;
		});
		//check box radio
		const onChangeValue = () => {
			vehicleCheckBoxValue.value = !vehicleCheckBoxValue.value;
			return vehicleCheckBoxValue.value;
		};

		// transpor tedHeavy Load
		const onTransported = () => {
			transportedHeavyLoad.value = !transportedHeavyLoad.value;
			return transportedHeavyLoad.value;
		};

		//transported Work load
		const onTransportedWorkload = () => {
			transportedWorkload.value = !transportedWorkload.value;			
			return transportedWorkload.value;
		};

		const ondrivenRough = () => {
			drivenRoughTerrain.value = !drivenRoughTerrain.value;			
			return drivenRoughTerrain.value;
		};

		const onTrailer = () => {
			vehicleSubClassField.value = !vehicleSubClassField.value;
			return vehicleSubClassField.value;
		};
		//close modal
		const closeModal = () => {
			emit('modalFlag');
			modalShow.value = false;
		};
		// remove receipt file
		const removeReceiptFile = () => {
			contractFile.value = null;
			contractFilePreview.value = null;
		};

		const originStart = (place) => {
			start.value = place.formatted_address;
		};
		const destionationEnd = (place) => {
			end.value = place.formatted_address;
		};
		//tripe start time updated
		const tripsStartTime = (event) => {
			tripsStartTime.value = event;
		};
		//tripe end time updated
		const tripsEndTime = (event) => {
			tripsEndTime.value = event;
		};
		//get work dairies details
		const fetchInvoiceWorkDairies = () => {
			const checkExistingWorkDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			ionvoiceWorkDetail.value = store.state.invoice.invoiceWorkDairiesDetail;
			contactTypeField.value = ionvoiceWorkDetail.value.contract_type;
			contractValueField.value = ionvoiceWorkDetail.value.contract_value;
			totalWorkField.value = ionvoiceWorkDetail.value.total_work || 0;
			lunchCompensationField.value = ionvoiceWorkDetail.value.lunch_compensation || 0;
			otherCompensationField.value = ionvoiceWorkDetail.value.full_compensation || 0;
			let dataWorkDetail = checkExistingWorkDetails[props.indexId];
			document.getElementById('totalDistance').innerHTML = dataWorkDetail.distance || null;
			transportedHeavyLoad.value = dataWorkDetail.transported_heavyloads || false;
			drivenRoughTerrain.value = dataWorkDetail.driven_in_rough_terrain || false;
			transportedWorkload.value = dataWorkDetail.transported_workload || false;
			vehicleSubClassField.value = dataWorkDetail.vehicle_subclass || false;
			tripStartTime.value = dataWorkDetail.trip_start_time == null ? '00:00' : dataWorkDetail.trip_start_time;
			tripEndTime.value = dataWorkDetail.trip_end_time == null ? '00:00' : dataWorkDetail.trip_end_time;
			setValues({
				trip_name: dataWorkDetail.trip_name,
				trip_start_address: dataWorkDetail.trip_start_address,
				trip_end_address: dataWorkDetail.trip_end_address,
				trip_start_date: dataWorkDetail.trip_start_date,
				trip_end_date: dataWorkDetail.trip_end_date,
				trip_calculate_time: dataWorkDetail.trip_calculate_time,
				vehicle_number: dataWorkDetail.vehicle_number,
				vehicle_class: dataWorkDetail.vehicle_class,
				description: dataWorkDetail.description,
				lunch_compensation: dataWorkDetail.lunchCompensationId,
				distance: dataWorkDetail.distance,
				total_work: dataWorkDetail.total_work,
				other_compensation: dataWorkDetail.otherCompensationId,
				contract_type: dataWorkDetail.contract_type,
				contract_value: dataWorkDetail.contract_value,
				date: dataWorkDetail.date,
			});
		};

		//get lunch compensation
		const fetchLunchCompensation = () => {
			const payload = {
				compensationType: 'lunch_compensation',
			};
			store.dispatch('workDetail/getLunchCompensation', payload);
		};

		//half_day_compensation, full_day_compensation,
		const fetchfullDayCompensation = () => {
			const payload = {
				compensationType: 'full_day_compensation',
			};
			store.dispatch('workDetail/getHalfFullCompensation', payload);
		};

		return {
			gAuComRestriction,
			// translate function
			t,
			clearVal,
			// refs
			modalShow,
			contractFile,
			contractFilePreview,
			formFieldsData,
			vehicleCheckBoxValue,
			transportedHeavyLoad,
			drivenRoughTerrain,
			transportedWorkload,
			onTrailer,
			start,
			end,
			imageFile,
			tripStartTime,
			tripEndTime,
			ionvoiceWorkDetail,
			workDetailInfo,

			// icons
			closeIcon,
			rightIcon,
			bottomIcon,
			leftArrowIcon,
			faMapMarker,
			downArrowIcon,
			paperClipIcon,
			plusIcon,
			calenderIcon,

			//options
			vehicleClassTypes,
			vehicleSubClassTypes,
			vatTypeOptionsNew,
			contractTypeOptions,

			// fields
			formMeta,
			isSubmitting,
			tripNameField,
			tripStartAddressField,
			tripEndAddressField,
			tripStartDateField,
			tripStartTimeHoursField,
			tripEndDateField,
			tripEndTimeHourField,
			tripCalculateTimeField,
			vehicleRegistrationField,
			vehicleClassField,
			vehicleSubClassField,
			workDescription,
			totalWorkField,
			lunchCompensationField,
			otherCompensationField,
			contactTypeField,
			contractValueField,
			dateField,
			showTeamField,

			// computed
			calculateTripTime,
			totalSummaryCalculations,
			employerList,
			teamList,
			origin,
			destionation,
			calculateFileSize,
			lunchCompensation,
			halfFullCompnesation,
			isDisableCompensation,

			// methods
			handleSubmit,
			removeReceiptFile,
			submitForm,
			onChangeValue,
			onTransported,
			ondrivenRough,
			onTransportedWorkload,
			originStart,
			destionationEnd,
			closeModal,
			tripsStartTime,
			tripsEndTime,
			fetchLunchCompensation,
			fetchfullDayCompensation,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.text-grey {
	color: rgb(93, 92, 92);
}
.text-md {
	font-size: 20px;
}
.start-width {
	width: 30px;
}
.explaination {
	padding: 10px;
	border-radius: 12px;
	outline: none;
	width: 100%;
	border: 1px solid #dde0e2;
	box-shadow: 2px 1px 11px #a5a5a5;
	font-weight: 600;
	font-size: 14px;
	background-color: #f6f6f6;
}

.upload_documents {
	padding: 0;

	.modal__content {
		padding: 0;
		overflow: auto;

		.modal-header {
			padding: 15px 30px;
		}

		.modal-body {
			padding: 10px 10px;
			overflow: auto;
			margin-bottom: 20px;

			&::-webkit-scrollbar {
				display: none;
			}

			form {
				max-height: 60vh;

				.time__selector {
					padding: 9px 15px;
				}

				.document_file_error {
					position: absolute;
					bottom: 0;
					left: 20px;
					margin-top: 20px;
				}
			}
		}
	}

	@media (max-width: 576px) {
		.modal__content {
			.modal-header {
				display: block;
				padding: 10px;
			}
			.modal-body {
				padding: 20px;
			}
		}
	}
}
</style>

<style scoped>
.review-star:hover {
	fill: #e4aa18;
	cursor: pointer;
}
</style>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';
.vue-map-container {
	width: 100%;
	height: 500px;
}
.text-gray {
	color: #858a90;
}
.text-light-grey {
	color: #bbbfc4;
}
.summary-text {
	font-size: 13px;
	font-weight: 500;
}

.dropdown-menu {
	padding: 15px;
	border: transparent;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	color: #949494;
}
.invoice__list {
	width: 100%;
	display: block;
	align-items: center;
	border-radius: 20px;
	overflow: auto;
	.text-gray {
		margin-bottom: 15px;
	}
	.cost-sec {
		background-color: #e92028;
		.info-icon {
			max-width: 50px;
			height: 50px;
			@media (max-width: 1200px) {
				max-width: 40px;
				height: 40px;
			}

			@media (max-width: 1024px) {
				max-width: 30px;
				height: 30px;
			}

			@media (max-width: 576px) {
				max-width: 30px;
				height: 30px;
			}
		}

		p {
			font-size: 21px;
			font-weight: 600;
			color: #fff;
			letter-spacing: -2px;
			text-shadow: 1px 3px 3px #494848;
			white-space: nowrap;

			@media (max-width: 1200px) {
				font-size: 17px;
				letter-spacing: -2px;
			}

			@media (max-width: 1024px) {
				font-size: 16px;
			}

			@media (max-width: 768px) {
				font-size: 16px;
			}

			@media (max-width: 576px) {
				font-size: 12px;
			}
		}
		.cost-btn {
			background-color: #4c4f56;
			padding: 7px 15px;
			color: #fff;
			border-radius: 50px;
			font-size: 14px;
			letter-spacing: -1px;
			white-space: nowrap;

			@media (max-width: 1200px) {
				padding: 7px 9px;
				font-size: 12px;
			}

			@media (max-width: 1024px) {
				font-size: 12px;
				padding: 6px 12px;
				margin: 10px 0 0;
				margin-left: auto;
			}

			@media (max-width: 768px) {
				font-size: 12px;
				padding: 6px 12px;
				margin: 10px 0 0;
				margin-left: auto;
			}
			.right-icon {
				width: 25px;
				height: 25px;
				border: 2px solid #fff;
			}
		}
	}
	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		width: 100%;
		border: 3px dashed #dde0e2;
		font-weight: 600;
		font-size: 14px;
		// color: #a0a4a9;
	}
	::placeholder {
		color: #a0a4a9;
		font-size: 13px;
	}
	.invoice-dropdown {
		background-color: #fff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		border-radius: 15px;
		&:focus {
			box-shadow: none;
		}
	}
	.grey-invoice-drop {
		background-color: #f9f9f9;
		border-radius: 10px;
		padding: 5px 15px;
	}
	.dropdown-toggle::after {
		display: none;
	}

	.add-row {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.plus {
			cursor: pointer;
			color: #ffff;
			max-width: 50px;
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
			border-radius: 50%;
			background-color: #ff4b57;
			border: 4px solid #ffe4e6;

			@media (max-width: 1200px) {
				max-width: 30px;
				height: 30px;
			}
			@media (max-width: 576px) {
				max-width: 30px;
				height: 30px;
			}
		}
	}
}

.invoice__list {
	width: 100%;
	display: block;
	align-items: center;
	border-radius: 20px;
	overflow: auto;

	.trip-text {
		font-size: 14px;
		font-weight: 500;
	}
	.pph-left-box {
		padding: 19px;
		border-radius: 20px;
		background-color: #f9f9f9;
	}
	.pph-left {
		color: #a0a4a9;
		.title-lg {
			font-size: 20px;
		}
	}
	.company-titel {
		font-size: 13px;
		font-weight: 500;
		color: #858a90;
	}
	.form-control {
		// padding: 10px 35px 10px 15px;
		background-color: #fff;
		// border: none;
		// height: unset;
		// border-radius: 15px;
		position: relative;
	}
	.form-grey-input {
		background-color: #f9f9f9;
		border-radius: 50px;
	}

	.vat-drop {
		padding: 5px 10px;
	}
	.cost-ex-map iframe {
		width: 100%;
		min-height: 450px;
		border-radius: 10px;
	}

	.btn-padding {
		padding: 10px 14px;
		font-size: 13px;
	}

	.input-group {
		background: white;
		border-radius: 1rem;
	}

	.extras-font {
		font-size: 15px;
		font-weight: 500;

		@media (max-width: 576px) {
			font-size: 14px;
		}
	}

	.input-group-text {
		border: none;
		background-color: rgb(60, 60, 199);
		color: #fff;
		border-bottom-left-radius: 50px;
		border-top-left-radius: 50px;
		padding: 10px 20px;

		.form-check {
			margin-bottom: 20px;
		}

		.form-check-input {
			background-color: transparent;
			margin-left: -6px;
			border: 1px solid rgb(90, 88, 88);

			input {
				margin-left: -6px;
			}

			&:checked {
				background-color: #fff;
				border-color: #fff;
			}

			&:focus {
				box-shadow: none;
			}
		}
	}

	.form-check-input:checked {
		background-color: #565e64;
		border-color: #565e64;
	}

	.form-check-input:focus {
		border-color: #565e64;
	}

	.form-checkbox {
		margin-bottom: 10px;

		.form-checkbox-width {
			width: 1.4em;
			height: 1.4em;
			margin: 0 0 0 -30px;

			&:focus {
				box-shadow: none;
			}
		}
	}

	.prof-bg-puzzle {
		position: relative;
		display: block;
		img {
			width: 100%;
			height: 100%;
			position: relative;
			object-fit: contain;
		}
	}
	.puzzle-text {
		position: absolute;
		top: 40px;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;

		@media (max-width: 1024px) {
			top: 50%;
		}
	}
	.detail-sec {
		padding: 0 15px;
		// background-image: url('~@/assets/images/iconManPad.png');
		// background-repeat: no-repeat;
		// background-position: 100% 16%;
		// background-size: 21%;

		// @media (max-width: 576px) {
		// 	background-position: 100% 0%;
		// 	background-size: 30%;
		// }
	}
	.invoice-grey-sec {
		background-color: #f9f9f9;
		border-radius: 10px;
		padding: 19px;
		// background-image: url('~@/assets/images/use-icon.png');
		// background-repeat: no-repeat;
		// background-position: right bottom;
		// background-size: 20%;
		// border-radius: 10px;

		// @media (max-width: 1024px) {
		// 	background-position: 100% 90%;
		// 	background-size: 30%;
		// }
	}

	.calender-icon {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translate(-50%, -50%);
	}

	.input-title {
		font-size: 16px;
		margin-bottom: 5px;
		font-weight: 500;
		color: #858a90;
	}

	.input-area {
		outline: none;
		border: none;
		width: 100%;
		background-color: transparent;
	}

	.input-pera {
		width: 100%;
		padding: 7px 10px;
		border-radius: 12px;
		border: 2px dashed #e4e6e7;
	}
	.invoice-receipt {
		padding: 19px;
		// background-image: url('~@/assets/images/open-gigs-icon.png');
		// background-repeat: no-repeat;
		// background-position: right bottom;
		// background-size: 20%;

		// @media (max-width: 1024px) {
		// 	background-position: 100%;
		// 	background-size: 27%;
		// }
	}
}
.add-text {
	white-space: nowrap;

	@media (max-width: 1200px) {
		font-size: 13px;
		white-space: nowrap;
	}

	@media (max-width: 576px) {
		font-size: 13px;
		white-space: nowrap;
	}
}

.summary-box {
	background-color: #e92028;
	color: #fff;
	padding: 20px;
	border-radius: 20px;
	height: 100%;

	@media (max-width: 1200px) {
		max-width: 320px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		max-width: 320px;
		margin: 0 auto;
	}

	@media (max-width: 576px) {
		max-width: 320px;
		margin: 0 auto;
	}

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

	@media (max-width: 576px) {
		max-width: 320px;
		margin: 0 auto;
	}

	.dark-box-text {
		font-size: 19px;
		letter-spacing: -1px;
		text-shadow: 1px 3px 3px #494848;
		@media (max-width: 576px) {
			font-size: 14px;
		}
	}

	.dark-box-input {
		background-color: #4c4f56;
		border: none;
		color: #fff;
		width: 80%;
	}
}
// .summary-calc {
// 	max-width: 150px;
// 	width: 100%;
// }
.dropdown-menu {
	width: 100%;
}
.transparent-input {
	opacity: 0.9;
}
.additional-dropdown {
	background-color: #fff;
	opacity: 0.9;
	border-radius: 50px;
}
.grey-drop {
	padding: 5px 10px;
	background-color: #f9f9f9;
	border-radius: 10px;
	font-size: 13px;
	&:focus {
		box-shadow: none;
	}
}
.dropdown-item {
	&:hover {
		background-color: transparent;
		color: #ff4b57;
	}
}
</style>
<style lang="scss">
.time__selector {
	.vc-time-picker {
		padding: 0;

		.vc-time-content {
			.vc-time-date {
				display: none;
			}
			.vc-select select {
				width: 120px;
			}
		}

		.vc-time-icon {
			display: none;
		}
	}
}
.close-btn {
	background-color: #ff4b57;
	border-radius: 50%;
	width: 30px;
	height: 30px;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
.modal-content {
	max-width: 80% !important;
}

</style>

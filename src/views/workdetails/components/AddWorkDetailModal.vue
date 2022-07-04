<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container add_work_details__modal" content-class="modal-content px-0 pb-0">
		<!-- close btn -->
		<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="modalShow = false">
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="closeIcon" />
			</span>
		</button>

		<!-- modal content -->
		<div class="modal__content">
			<!-- modal header -->
			<div class="modal-header">
				<h5 class="title-lg">
					{{ !workDetailId ? t('workDetails.addWorkDetails') : t('workDetails.editWorkDetails') }}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="row m-0">
					<div class="col-12">
						<!-- form -->
						<form class="theme-input tab-form" name="workDetailForm">
							<div class="form-row">
								<!-- contract type - piece or hours -->
								<div class="form-group col-md-4">
									<label for="contractType">
										{{ t('fieldList.contractType') }}
									</label>

									<Multiselect
										class="form-group"
										@input="contractTypeField.handleChange"
										@blur="contractTypeField.handleBlur"
										:placeholder="
											t('validation.selectField', {
												field: 'fieldList.contractType',
											})
										"
										v-model="contractTypeField.value"
										:options="contractTypeOptions"
										mode="single"
										:canDeselect="true"
									/>

									<p class="text-danger">
										{{ contractTypeField.errorMessage }}
									</p>
								</div>

								<!-- contract value -->
								<div class="form-group col-md-4">
									<label for="contractValue">
										{{ t('fieldList.contractValue') }}
									</label>

									<input
										type="number"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.contractValue',
											})
										"
										@input="contractValue.handleChange"
										@blur="contractValue.handleBlur"
										:value="contractValue.value"
									/>

									<p class="text-danger">
										{{ contractValue.errorMessage }}
									</p>
								</div>
								<!-- trip start time -->
								<div class="form-group col-md-4">
									<label for="tripStart">
										{{ t('fieldList.tripStart') }}
									</label>

									<v-date-picker
										id="tripStart"
										@input="tripStartField.handleChange"
										@blur="tripStartField.handleBlur"
										v-model="tripStartField.value"
										mode="time"
										class="form-control time__selector"
										is24hr
									>
									</v-date-picker>

									<p class="text-danger">
										{{ tripStartField.errorMessage }}
									</p>
								</div>

								<!-- trip end time -->
								<div class="form-group col-md-4">
									<label for="tripEnd">
										{{ t('fieldList.tripEnd') }}
									</label>

									<v-date-picker
										id="tripEnd"
										@input="tripEndField.handleChange"
										v-model="tripEndField.value"
										@blur="tripStartField.handleBlur"
										mode="time"
										class="form-control time__selector"
										is24hr
									>
									</v-date-picker>

									<p class="text-danger">
										{{ tripEndField.errorMessage }}
									</p>
								</div>

								<!-- trip address -->
								<div class="form-group col-md-4">
									<label for="tripAddress">
										{{ t('fieldList.tripAddress') }}
									</label>

									<input
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.tripAddress',
											})
										"
										@input="addressField.handleChange"
										@blur="addressField.handleBlur"
										:value="addressField.value"
									/>
									<p class="text-danger">
										{{ addressField.errorMessage }}
									</p>
								</div>

								<!-- trip distance in KM -->
								<div class="form-group col-md-4">
									<label for="distance">
										{{ t('fieldList.distance') }}
										{{ t('common.km') }}
									</label>

									<input
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.distance',
											})
										"
										@input="distanceField.handleChange"
										@blur="distanceField.handleBlur"
										:value="distanceField.value"
									/>
									<p class="text-danger">
										{{ distanceField.errorMessage }}
									</p>
								</div>

								<!-- number of hour worked -->
								<div class="form-group col-md-4">
									<label for="hours">
										{{ contractTypeField.value === 'hours' ? t('fieldList.numberOfHours') : t('fieldList.numberOfPieces') }}
									</label>
									<input
										id="hours"
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: contractTypeField.value === 'hours' ? 'fieldList.numberOfHours' : 'fieldList.numberOfPieces',
											})
										"
										@input="totalWorkField.handleChange"
										@blur="totalWorkField.handleBlur"
										:value="totalWorkField.value"
									/>
									<p class="text-danger">
										{{ totalWorkField.errorMessage }}
									</p>
								</div>

								<!-- lunch compensation -->
								<div class="form-group col-md-4">
									<label for="lunchCompensation">
										{{ t('fieldList.lunchCompensation') }}
									</label>

									<input
										id="lunchCompensation"
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.lunchCompensation',
											})
										"
										@input="lunchCompensationField.handleChange"
										@blur="lunchCompensationField.handleBlur"
										:value="lunchCompensationField.value"
									/>
									<p class="text-danger">
										{{ lunchCompensationField.errorMessage }}
									</p>
								</div>

								<!-- trip time -->
								<div class="form-group col-md-4">
									<label for="tripTime">
										{{ t('fieldList.tripTime') }}
									</label>

									<input
										id="tripTime"
										type="text"
										class="form-control"
										disabled
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.tripTime',
											})
										"
										:value="calculateTripTime"
									/>
								</div>

								<!-- full / half day compensation -->
								<div class="form-group col-md-4">
									<label for="dayCompensation">
										{{ t('fieldList.dayCompensation') }}
									</label>

									<input
										id="dayCompensation"
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.dayCompensation',
											})
										"
										@input="dayCompensationField.handleChange"
										@blur="dayCompensationField.handleBlur"
										:value="dayCompensationField.value"
									/>
									<p class="text-danger">
										{{ dayCompensationField.errorMessage }}
									</p>
								</div>

								<!-- other compensation -->
								<div class="form-group col-md-4">
									<label for="otherCompensation">
										{{ t('fieldList.otherCompensation') }}
									</label>

									<input
										id="otherCompensation"
										type="text"
										class="form-control"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.otherCompensation',
											})
										"
										@input="otherCompensationField.handleChange"
										@blur="otherCompensationField.handleBlur"
										:value="otherCompensationField.value"
									/>
									<p class="text-danger">
										{{ otherCompensationField.errorMessage }}
									</p>
								</div>

								<!-- work description -->
								<div class="form-group col-12">
									<label for="workDescription">
										{{ t('fieldList.workDescription') }}
									</label>
									<textarea
										id="workDescription"
										class="form-control"
										rows="4"
										:placeholder="
											t('validation.enterField', {
												field: 'fieldList.workDescription',
											})
										"
										@input="workDescriptionField.handleChange"
										@blur="workDescriptionField.handleBlur"
										:value="workDescriptionField.value"
									>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil cum, blanditiis ex possimus nobis quos vitae veniam voluptates! Placeat provident fugit molestias soluta aut cumque eligendi illo omnis eos est.</textarea
									>
								</div>
							</div>

							<!-- submit btn -->
							<button type="button" class="btn-common btn-red mt-2" :disabled="isSubmitting" @click="submitForm">
								{{ t('common.submit') }}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import Multiselect from '@vueform/multiselect';
import * as yup from 'yup';
import moment from 'moment';

import { contractTypeOptions } from '@/utils/enums.js';

export default {
	name: 'AddWorkDetailModal',

	props: {
		// modal status
		isModalShow: Object,

		// work detail id
		workDetailId: {
			default: null,
			type: Number,
		},
	},

	//components
	components: {
		FontAwesomeIcon,
		Multiselect,
	},

	setup(props, { emit }) {
		// ref vars
		const modalShow = ref(props.isModalShow);

		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const workDetailsSchema = yup.object({
			contract_type: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.contractType',
					}),
				),
			contract_value: yup.number().required(),
			trip_start: yup
				.string()
				.nullable()
				.notRequired(),
			trip_end: yup
				.string()
				.nullable()
				.notRequired(),
			trip_address: yup
				.string()
				.nullable()
				.notRequired(),
			distance: yup
				.number()
				.nullable()
				.notRequired()
				.min(0, t('validation.minDistance', { minLen: 0 })),
			total_work: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.totalWork',
					}),
				)
				.when('contract_type', contract_type => {
					if (contract_type === 'hours') {
						return yup.number().min(
							0.1,
							t('validation.minValue', {
								field: 'fieldList.numberOfHours',
								minLen: 0.1,
							}),
						);
					} else {
						return yup
							.number()
							.integer(
								t('validation.mustBe', {
									field: 'fieldList.numberOfPieces',
									type: 'datatype.int',
								}),
							)
							.min(
								1,
								t('validation.minValue', {
									field: 'fieldList.numberOfPieces',
									minLen: 1,
								}),
							);
					}
				}),
			lunch_compensation: yup
				.number()
				.nullable()
				.notRequired(),
			trip_time: yup
				.number()
				.nullable()
				.notRequired(),
			day_compensation: yup
				.number()
				.nullable()
				.notRequired(),
			other_compensation: yup
				.number()
				.nullable()
				.notRequired(),
			work_description: yup
				.string()
				.nullable()
				.notRequired(),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting, setValues } = useForm({
			validationSchema: workDetailsSchema,
			validateOnMount: false,
		});

		// form fields
		const contractTypeField = reactive(useField('contract_type', undefined, { initialValue: null }));

		const contractValue = reactive(useField('contract_value', undefined, { initialValue: 0 }));

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
		const addressField = reactive(useField('trip_address', undefined, { initialValue: null }));
		const distanceField = reactive(useField('distance', undefined, { initialValue: 0 }));
		const totalWorkField = reactive(useField('total_work', undefined, { initialValue: 0 }));
		const lunchCompensationField = reactive(useField('lunch_compensation', undefined, { initialValue: 0 }));
		const tripTimeField = reactive(useField('trip_time', undefined, { initialValue: 0 }));
		const dayCompensationField = reactive(useField('day_compensation', undefined, { initialValue: 0 }));
		const otherCompensationField = reactive(useField('other_compensation', undefined, { initialValue: 0 }));
		const workDescriptionField = reactive(useField('work_description', undefined, { initialValue: null }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			if (props.workDetailId) {
				// fetch work detail
				fetchWorkDetailById();
			}
		});

		/**
		 * Computed
		 * *******************************************************************
		 */
		const calculateTripTime = computed(() => {
			return Math.max(
				0,
				moment
					.duration(moment(tripEndField.value).diff(moment(tripStartField.value)))
					.asHours()
					.toFixed(2),
			);
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch work detail by id
		const fetchWorkDetailById = async () => {
			// save the work details
			await store.dispatch('workDetail/getWorkDetailById', props.workDetailId).then(res => {
				// set form values
				setValues({
					contract_type: res.data.contract_type,
					contract_value: res.data.contract_value,
					trip_start: moment(res.data.trip_start, 'HH:mm:ss').format(),
					trip_end: moment(res.data.trip_end, 'HH:mm:ss').format(),
					trip_address: res.data.trip_address,
					distance: res.data.distance,
					total_work: res.data.total_work,
					lunch_compensation: res.data.lunch_compensation,
					trip_time: res.data.trip_time,
					day_compensation: res.data.day_compensation,
					other_compensation: res.data.other_compensation,
					work_description: res.data.work_description,
				});
			});
		};

		// submit form - add work hour
		const submitForm = handleSubmit(async values => {
			// set date format
			values.trip_start = moment(values.trip_start).format('HH:mm');
			values.trip_end = moment(values.trip_end).format('HH:mm');
			// values.contract_value = Number(values.contract_value)

			if (props.workDetailId) {
				// save the work details
				await store
					.dispatch('workDetail/updateWorkDetails', {
						payload: values,
						id: props.workDetailId,
					})
					.then(() => {
						modalShow.value = false;
					});

				emit('updateWorkDetail');

				return true;
			}

			let newWorkDetail;

			// save the work details
			await store.dispatch('workDetail/addWorkDetails', values).then(res => {
				newWorkDetail = res.data.data;
				modalShow.value = false;
			});

			// pass added work details to parent compoenent
			emit('newWorkDetail', newWorkDetail);

			return true;
		});

		return {
			// refs
			modalShow,
			contractTypeOptions,

			// icons
			closeIcon,

			// translate function
			t,

			// form fields
			contractTypeField,
			contractValue,
			tripStartField,
			tripEndField,
			addressField,
			distanceField,
			totalWorkField,
			lunchCompensationField,
			tripTimeField,
			dayCompensationField,
			otherCompensationField,
			workDescriptionField,

			// form related
			formMeta,
			isSubmitting,

			// computed
			calculateTripTime,

			// methods
			submitForm,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.add_work_details__modal {
	padding: 0;

	.modal__content {
		padding: 0;
		overflow: auto;

		.modal-header {
			padding: 30px;
		}

		.modal-body {
			padding: 30px;
			overflow: scroll;
			margin-bottom: 20px;

			&::-webkit-scrollbar {
				display: none;
			}

			form {
				max-height: 60vh;

				.time__selector {
					padding: 9px 15px;
				}
			}
		}
	}

	@media (max-width: 576px) {
		.modal__content {
			.modal-header {
				display: block;
				padding: 20px;
			}
			.modal-body {
				padding: 20px;
			}
		}
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
		}
	}
}
</style>

<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container add_work_details__modal"
		content-class="modal-content px-0 pb-0"
	>
		<!-- close btn -->
		<button
			type="button"
			class="close"
			data-dismiss="modal"
			aria-label="Close"
			@click="modalShow = false"
		>
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="closeIcon" />
			</span>
		</button>

		<!-- modal content -->
		<div class="modal__content">
			<!-- modal header -->
			<div class="modal-header">
				<h5 class="title-lg">
					{{
						!workDetailId
							? t('teamMember.addTeamDetails')
							: t('teamMember.editTeamDetails')
					}}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="row m-0">
					<div class="col-12">
						<!-- form -->
						<form
							class="theme-input tab-form"
							name="workDetailForm"
							@submit.prevent="submitForm"
						>
							<div class="form-row">
								<!-- contract type - piece or hours -->
								<div class="form-group col-md-4">
									<label for="contractType">
										{{ t('fieldList.members') }}
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
										:options="teamMemberOptions"
										mode="single"
										label="full_name"
										:canDeselect="true"
									/>

									<p class="text-danger">
										{{ contractTypeField.errorMessage }}
									</p>
								</div>	
							</div>

							<!-- submit btn -->
							<button
								type="submit"
								class="btn-common btn-red mt-2"
								:disabled="isSubmitting"
							>
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
// import * as yup from 'yup';
// import moment from 'moment';

export default {
	name: 'AddTeamMemberModal',

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
		// const workDetailsSchema = yup.object({
		// 	contract_type: yup
		// 		.string()
		// 		.nullable()
		// 		.required(
		// 			t('validation.requiredField', {
		// 				field: 'fieldList.contractType',
		// 			}),
		// 		),			
		// });

		// form validation intialize
		const {
			meta: formMeta,
			handleSubmit,
			isSubmitting,
		} = useForm({			
			validateOnMount: false,
		});

		// form fields
		const contractTypeField = reactive(
			useField('userId', undefined, { initialValue: null }),
		);

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// if (props.workDetailId) {
			// 	// fetch work detail
			// 	fetchWorkDetailById();
			// }
		});

		/**
		 * Computed
		 * *******************************************************************
		 */		
		//Team member option
		const teamMemberOptions = computed(
			() => store.getters['auth/getTeamOptions'],
		);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch work detail by id
		// const fetchWorkDetailById = async () => {
		// 	// save the work details
		// 	await store
		// 		.dispatch('workDetail/getWorkDetailById', props.workDetailId)
		// 		.then(res => {
		// 			// set form values
		// 			setValues({
		// 				contract_type: res.data.contract_type,
		// 				date: moment(res.data.date, 'YYYY/MM/DD').format(),
		// 				trip_start: moment(
		// 					res.data.trip_start,
		// 					'HH:mm:ss',
		// 				).format(),
		// 				trip_end: moment(
		// 					res.data.trip_end,
		// 					'HH:mm:ss',
		// 				).format(),
		// 				trip_address: res.data.trip_address,
		// 				distance: res.data.distance,
		// 				total_work: res.data.total_work,
		// 				lunch_compensation: res.data.lunch_compensation,
		// 				trip_time: res.data.trip_time,
		// 				day_compensation: res.data.day_compensation,
		// 				other_compensation: res.data.other_compensation,
		// 				work_description: res.data.work_description,
		// 			});
		// 		});
		// };

		// submit form - add work hour
		const submitForm = handleSubmit(async values => {
			
			// set date format
			let addNewTeamWorkDetail;

			// save the work details
			await store
				.dispatch('auth/addTeamMember', values)
				.then(res => {
					addNewTeamWorkDetail = res.data.data;
					modalShow.value = false;
				});

			// pass added work details to parent compoenent
			emit('addNewTeamWorkDetail', addNewTeamWorkDetail);

			return true;
		});

		return {
			// refs
			modalShow,

			// icons
			closeIcon,

			// translate function
			t,

			// form fields
			contractTypeField,			

			// form related
			formMeta,
			isSubmitting,

			// computed
			// calculateTripTime,
			teamMemberOptions,

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
			padding: 15px 30px;
		}

		.modal-body {
			padding: 30px;
			overflow: scroll;
			margin-bottom: 40px;

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
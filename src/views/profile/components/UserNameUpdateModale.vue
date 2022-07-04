<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container upload_contract" content-class="modal-content px-0 pb-0">
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
					{{ t('leProfile.leAccount.updateUserName') }}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="modal-form">
					<!-- form -->
					<form class="theme-input tab-form">
						<div class="form-row">
							<!-- contract name -->
							<div class="form-group col-xl-12">
								<label for="userName">
									{{ t('fieldList.fullName') }}
								</label>

								<input
									id="teamName"
									type="text"
									class="form-control"
									:placeholder="
										t('validation.enterField', {
											field: 'jobSeekerTeam.fullName',
										})
									"
									@input="fullNameField.handleChange"
									@blur="fullNameField.handleBlur"
									:value="fullNameField.value"
								/>

								<p class="text-danger">
									{{ fullNameField.errorMessage }}
								</p>
							</div>
						</div>

						<!-- upload btn -->
						<button type="button" class="btn-common btn-red mt-2" @click="submitForm">
							{{ t('jobSeekerTeam.submit') }}
						</button>
					</form>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';

import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
// import moment from 'moment';

export default {
	name: 'AddJobseekerTeamModal',

	//components
	components: {
		FontAwesomeIcon,
	},

	props: {
		// modal status
		isModalShow: Object,
		// work detail id
		editUserDetails: {
			default: null,
			type: Object,
		},
	},

	setup(props, { emit }) {
		// ref vars
		const modalShow = ref(props.isModalShow);
		// const teamDetails = ref(props.editUserDetails)

		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const contractSchema = yup.object({
			full_name: yup
				.string()
				.matches(/^([A-Za-zÀ-ÖØ-öø-ÿ]+\s){1,2}([A-Za-zÀ-ÖØ-öø-ÿ]+)$/, 'Full Name is not valid')
				// .min(2, 'Full name must be at least 2 characters')
				.max(25,'Full name most be at least 25 characters'),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: contractSchema,
		});

		// form fields
		const fullNameField = reactive(useField('full_name', undefined, { initialValue: null }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch user related company list
			// fetchEmploerList();
			fullNameField.value = props.editUserDetails.editUserName ?? null;
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch user related company list
		// const fetchEmploerList = async () => {
		// 	await store.dispatch('document/getEmployerList');
		// };

		// submit form - upload contract
		const submitForm = handleSubmit(async values => {
			await store
				.dispatch('auth/updateUserName', {
					payload: {
						full_name: values.full_name,
					},
				})
				.then(() => {
					emit('fetchUserDetails');
					modalShow.value = false;
				});

			// form data
			// const formData = new FormData();

			// formData.append('companyId', values.companyId);
			// formData.append('expiry_date', moment(values.expiry_date).format('YYYY/MM/DD'));
			// formData.append('file_name', values.file_name);
			// formData.append('contract_file', values.contract_file[0]);

			// await store.dispatch('document/uploadContractFile', formData).then(() => {
			// 	emit('newAddedTeam');
			// 	modalShow.value = false;
			// });
		});

		return {
			// translate function
			t,
			// refs
			modalShow,
			// teamName,

			// icons
			closeIcon,

			// form related
			formMeta,
			isSubmitting,

			// fields
			fullNameField,

			// computed

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

.upload_contract {
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
				padding: 20px;
			}
			.modal-body {
				padding: 20px;
			}
		}
	}
}
.table thead th {
	border-bottom: transparent;
}

.table td {
	border-right: 2px solid #dee2e6;

	&:last-child {
		border-right: transparent;
	}
}
</style>

<style lang="scss" scoped>
::v-deep .modal-content {
	width: 100% !important;
	max-width: 600px !important;
	min-width: auto !important;
}
</style>

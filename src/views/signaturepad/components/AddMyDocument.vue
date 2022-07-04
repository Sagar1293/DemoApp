<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container upload_contract"
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
					{{ t('eContract.uploadEContract') }}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="modal-form">
					<!-- form -->
					<form class="theme-input tab-form">
						<div class="form-row">
							<!-- company -->
							<div class="form-group col-12">
								<label for="employer">
									{{ t('eContract.seeker') }}
								</label>

								<Multiselect
									id="employer"
									class="form-group"
									@input="seekerId.handleChange"
									@blur="seekerId.handleBlur"
									:placeholder="
										t('validation.selectField', {
											field: 'eContract.seeker',
										})
									"
									v-model="seekerId.value"
									:options="seekerList"
									mode="single"
									label="full_name"
									:canDeselect="true"
								/>

								<p class="text-danger">
									{{ seekerId.errorMessage }}
								</p>
							</div>

							<!-- contract name -->
							<div class="form-group col-xl-6 col-lg-6">
								<label for="fileName">
									{{ t('fieldList.fileName') }}
								</label>

								<input
									id="fileName"
									type="text"
									class="form-control"
									:placeholder="
										t('validation.enterField', {
											field: 'fieldList.fileName',
										})
									"
									@input="fileNameField.handleChange"
									@blur="fileNameField.handleBlur"
									:value="fileNameField.value"
								/>

								<p class="text-danger">
									{{ fileNameField.errorMessage }}
								</p>
							</div>

							<!-- expiry date of contract -->
							<div class="form-group col-xl-6 col-lg-6">
								<label for="contractExpiryDate">
									{{ t('fieldList.expiryDate') }}
								</label>

								<v-date-picker
									id="contractExpiryDate"
									@input="expiryDateField.handleChange"
									@blur="expiryDateField.handleBlur"
									v-model="expiryDateField.value"
									:masks="{ input: 'YYYY/MM/DD' }"
								>
									<template
										v-slot="{ inputValue, inputEvents }"
									>
										<input
											class="form-control"
											:value="inputValue"
											v-on="inputEvents"
											:placeholder="
												t('validation.selectField', {
													field:
														'fieldList.expiryDate',
												})
											"
										/>
									</template>
								</v-date-picker>

								<p class="text-danger">
									{{ expiryDateField.errorMessage }}
								</p>
							</div>

							<!-- upload contract -->
							<div class="form-group col-12">
								<!-- attachment -->
								<label for="contractFile">
									{{ t('document.uploadContract') }}
								</label>

								<div class="drop-container">
									<!-- drop zone component -->
									<drop-zone
										@fileDrop="handleContractFileChange"
										class="mb-4" :isUploadButton="false"
									/>

									<!-- contract file - error -->
									<p
										class="contract_file_error text-center text-danger"
									>
										{{ contractFileField.errorMessage }}
									</p>

									<!-- contract file preview -->
									<div
										class="preview mb-4"
										v-if="contractFile"
									>
										<button
											type="button"
											class="drop-close"
											@click="removeContractFile"
										>
											<FontAwesomeIcon
												:icon="closeIcon"
											/>
										</button>
										<div id="preview">
											<div
												class="dz-preview dz-error dz-complete dz-image-preview"
											>
												<div class="dz-image">
													<img
														data-dz-thumbnail=""
														alt="Invocie receipt file image"
														:src="
															contractFilePreview
														"
													/>
												</div>
												<div class="dz-details">
													<div class="dz-size">
														<span>
															<strong>
																{{
																	calculateFileSize(
																		contractFile,
																	)
																}}
															</strong>
															MB
														</span>
													</div>
													<div class="dz-filename">
														<span>{{
															contractFile.name
														}}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- upload btn -->
						<button
							type="button"
							class="btn-common btn-red mt-2"
							@click="submitForm"
						>
							{{ t('common.upload') }}
						</button>
					</form>
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
import Multiselect from '@vueform/multiselect';
import * as yup from 'yup';
import { useField, useForm } from 'vee-validate';
import moment from 'moment';

export default {
	name: 'AddMyDocument',

	//components
	components: {
		FontAwesomeIcon,
		Multiselect,
	},

	props: {
		// modal status
		isModalShow: Object,
	},

	setup(props, { emit }) {
		// ref vars
		const modalShow = ref(props.isModalShow);
		const contractFile = ref(null);
		const contractFilePreview = ref('');

		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const contractSchema = yup.object({
			seekerId: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'eContract.seeker',
					}),
				),
			file_name: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.fileName',
					}),
				)
				.min(2),
			expiry_date: yup
				.date()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.expiryDate',
					}),
				),
			contract_file: yup.mixed().required(
				t('validation.requiredField', {
					field: 'fieldList.contractFile',
				}),
			),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: contractSchema,
		});

		// form fields
		const seekerId = reactive(
			useField('seekerId', undefined, { initialValue: null }),
		);
		const fileNameField = reactive(
			useField('file_name', undefined, { initialValue: null }),
		);
		const expiryDateField = reactive(
			useField('expiry_date', undefined, { initialValue: null }),
		);
		const contractFileField = reactive(
			useField('contract_file', undefined, { initialValue: null }),
		);

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			
			// fetch user related company list
			fetchSeekerList();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// calculate file size
		const calculateFileSize = computed(() => {
			return (file) => {
				const bytes = file.size || 0;

				// convert file size to MB from kb
				if (bytes === 0) {
					return 0;
				}

				return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2));
			};
		});

		// employer list
		const seekerList = computed(
			() => store.getters['econtract/getjobseekerOptions'],
		);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch user related company list
		const fetchSeekerList = async () => {
			await store.dispatch('econtract/getJobSeeker');
		};

		// submit form - upload contract
		const submitForm = handleSubmit(async (values) => {
			console.log('values====================>',values);
			// form data
			const formData = new FormData();

			formData.append('seekerId', values.seekerId);
			formData.append(
				'expiry_date',
				moment(values.expiry_date).format('YYYY/MM/DD'),
			);
			formData.append('file_name', values.file_name);
			formData.append('contract_file', values.contract_file[0]);
			
			await store
				.dispatch('econtract/addEContractFile', formData)
				.then(() => {
					emit('newEContractUploaded');
					modalShow.value = false;
				});
		});

		// handle contract file change
		const handleContractFileChange = (file) => {
			contractFileField.value = file;

			contractFile.value = file[0]; // store file
			// file preview
			contractFilePreview.value = ['image/png'].includes(file[0].type)
				? URL.createObjectURL(file[0])
				: require('@/assets/images/iconWomanDraw.png');
		};

		// remove contract file
		const removeContractFile = () => {
			contractFileField.value = null;
			contractFile.value = null;
			contractFilePreview.value = null;
		};

		return {
			// translate function
			t,

			// refs
			modalShow,
			contractFile,
			contractFilePreview,

			// icons
			closeIcon,

			// form related
			formMeta,
			isSubmitting,

			// fields
			seekerId,
			fileNameField,
			expiryDateField,
			contractFileField,

			// computed
			calculateFileSize,
			seekerList,

			// methods
			submitForm,
			handleContractFileChange,
			removeContractFile,
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
			padding: 15px 30px;
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
</style>
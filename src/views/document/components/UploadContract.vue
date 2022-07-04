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
					{{ t('document.uploadContract') }}
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
									{{ t('userType.employer') }}
								</label>

								<Multiselect
									id="employer"
									class="form-group"
									@input="companyField.handleChange"
									@blur="companyField.handleBlur"
									:searchable="true"
									:placeholder="
										t('validation.selectField', {
											field: 'userType.employer',
										})
									"
									v-model="companyField.value"
									:options="employerList"
									mode="single"
									:canDeselect="true"
								/>
								<!-- @click="removeEmployer" -->

								<p class="text-danger">
									{{ companyField.errorMessage }}
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
									:masks="{ input: 'DD.MM.YYYY' }"
								>
									<template v-slot="{ inputValue, inputEvents }">
										<input
											class="form-control"
											:value="inputValue"
											v-on="inputEvents"
											:placeholder="
												t('validation.selectField', {
													field: 'fieldList.expiryDate',
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
									<drop-zone @fileDrop="handleContractFileChange" :isUploadButton="false" />

									<!-- contract file - error -->

									<!-- contract file preview -->
									<div class="preview mb-4" v-if="contractFile">
										<button type="button" class="drop-close" @click="removeContractFile">
											<FontAwesomeIcon :icon="closeIcon" />
										</button>
										<div id="preview">
											<div class="dz-preview dz-error dz-complete dz-image-preview">
												<div class="dz-image">
													<img data-dz-thumbnail="" alt="Invocie receipt file image" :src="contractFilePreview" />
												</div>
												<div class="dz-details">
													<div class="dz-size">
														<span>
															<strong>
																{{ calculateFileSize(contractFile) }}
															</strong>
															{{ t('document.mb') }}
														</span>
													</div>
													<div class="dz-filename">
														<span>{{ contractFile.name }}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<p class="contract_file_error text-left text-danger ">
									{{ contractFileField.errorMessage }}
								</p>
							</div>
						</div>

						<!-- upload btn -->
						<button type="button" class="btn-common btn-red mt-2" @click="submitForm">
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
	name: 'UploadMyDocument',

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
		const stringRegExp = /^[a-zA-Z ]*$/;

		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// form schema validation
		const contractSchema = yup.object({
			companyId: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'userType.employer',
					}),
				),
			file_name: yup
				.string()
				.typeError('File Name is required.')
				.matches(stringRegExp, 'File Name is not valid')
				.min(2)
				.max(60)
				.required(
					t('validation.requiredField', {
						field: 'userType.fileName',
					}),
				),
			expiry_date: yup
				.date()
				.nullable()
				.typeError('expiry date is required.')
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
		const companyField = reactive(useField('companyId', undefined, { initialValue: null }));
		const fileNameField = reactive(useField('file_name', undefined, { initialValue: null }));
		const expiryDateField = reactive(useField('expiry_date', undefined, { initialValue: null }));
		const contractFileField = reactive(useField('contract_file', undefined, { initialValue: null }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch user related company list
			fetchEmploerList();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// calculate file size
		const calculateFileSize = computed(() => {
			return file => {
				const bytes = file.size || 0;

				// convert file size to MB from kb
				if (bytes === 0) {
					return 0;
				}

				return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2));
			};
		});

		// employer list
		const employerList = computed(() => store.getters['document/getEmployersList']);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch user related company list
		const fetchEmploerList = async () => {
			await store.dispatch('document/getEmployerList');
		};

		// submit form - upload contract
		const submitForm = handleSubmit(async values => {
			// form data
			const formData = new FormData();

			formData.append('companyId', values.companyId);
			formData.append('expiry_date', moment(values.expiry_date).format('YYYY/MM/DD'));
			formData.append('file_name', values.file_name);
			formData.append('contract_file', values.contract_file[0]);

			await store.dispatch('document/uploadContractFile', formData).then(() => {
				emit('newContractUploaded');
				modalShow.value = false;
			});
		});

		// handle contract file change
		const handleContractFileChange = file => {
			contractFileField.value = file;

			contractFile.value = file[0]; // store file
			// file preview
			contractFilePreview.value = ['image/png'].includes(file[0].type) ? URL.createObjectURL(file[0]) : require('@/assets/images/iconWomanDraw.png');
		};

		// remove contract file
		const removeContractFile = () => {
			contractFileField.value = null;
			contractFile.value = null;
			contractFilePreview.value = null;
		};

		//remove Value - Employer
		// const removeEmployer = event => {
		// 	if (event) {
		// 		companyField.value = null;
		// 	}
		// };

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
			companyField,
			fileNameField,
			expiryDateField,
			contractFileField,

			// computed
			calculateFileSize,
			employerList,

			// methods
			submitForm,
			handleContractFileChange,
			removeContractFile,

			//remove value from dropdown
			// removeEmployer,
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

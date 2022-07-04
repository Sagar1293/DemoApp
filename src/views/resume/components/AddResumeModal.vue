<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container add_experience_modal" content-class="modal-content px-0 pb-0">
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
					{{ t('resume.resumeTitle') }}
				</h5>
			</div>

			<!-- modal body -->
			<div class="modal-body overflow-visible">
				<div class="row m-0">
					<div class="col-12">
						<!-- form -->
						<form class="theme-input tab-form">
							<div class="form-row">
								<!-- job title type -->
								<div class="form-group col-md-12">
									<label for="resumeDesc">
										{{ t('fieldList.resumeDesc') }}
									</label>

									<textarea
										id="resumeDesc"
										type="text"
										class="form-control text-height"
										@input="resumeDescripationField.handleChange"
										@blur="resumeDescripationField.handleBlur"
										:value="resumeDescripationField.value"
									/>

									<p class="text-danger">
										{{ resumeDescripationField.errorMessage }}
									</p>
								</div>
							</div>

							<div class="form-group col-md-12 p-0">
								<!-- dropzone - upload file -->
								<label for="uploadResumeFile">{{ t('registerForm.uploadResumeFile') }}</label>
								<div class="drop-container">
									<div class="dropzone" id="dropImage" v-bind="getRootProps()">
										<div class="dropzone-text">
											<div class="dropzone-icon">
												<FontAwesomeIcon :icon="cloudUploadIcon" />
											</div>
											<div class="dropzone-info align-items-center flex-wrap">
												<p class="pr-3">
													{{ t('registerForm.uploadresume') }}
												</p>
												<span>PDF, DOC, PPT, JPG, PNG</span>
											</div>
										</div>
										<div class="fallback">
											<input name="contentFile" v-bind="getInputProps()" />
										</div>
									</div>

									<!-- uploaded file preview -->
									<div class="preview" v-if="contentFile">
										<button type="button" class="drop-close" @click="removeFile">
											<FontAwesomeIcon :icon="closeIcon" />
										</button>
										<div id="preview">
											<div
												class="
										dz-preview
										dz-error
										dz-complete
										dz-image-preview
									"
											>
												<div class="dz-image">
													<img data-dz-thumbnail="" alt="Content file image" :src="contentFilePreview" />
												</div>
												<div class="dz-details">
													<div class="dz-size">
														<span data-dz-size=""
															><strong>{{ calculateFileSize }}</strong> {{t('document.mb')}}</span
														>
													</div>
													<div class="dz-filename">
														<span data-dz-name="">{{ contentFile.name }}</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<p class="text-danger">
									{{ resumefileField.errorMessage }}
								</p>
							</div>
							<!-- submit btn -->
							<button type="button" class="btn-common btn-red mt-2" @click="submitForm">
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
import { faTimes, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
// import moment from 'moment';
import { useToast } from 'vue-toastification';
import { useDropzone } from 'vue3-dropzone';
// import Multiselect from '@vueform/multiselect';

export default {
	name: 'AddEmployerModal',

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
		// Multiselect,
	},

	setup(props, { emit }) {
		// ref vars
		const modalShow = ref(props.isModalShow);

		// file var
		const contentFile = ref(null);
		const contentFilePreview = ref('');

		// icons
		const closeIcon = faTimes;
		const cloudUploadIcon = faCloudUploadAlt;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// toast
		const toast = useToast();

		// global store
		const store = useStore(); // use state

		// form schema validation
		const experienceSchema = yup.object({
			description: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.resumeDesc',
					}),
				)
				.max(255),
			resume_file: yup
				.mixed()
				.nullable()
				.optional(),
			// .required(
			// 	t('validation.requiredField', {
			// 		field: 'resume.resumeFile',
			// 	}),
			// ),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: experienceSchema,
		});

		// form fields
		const resumeDescripationField = reactive(useField('description', undefined, { initialValue: null }));
		const resumefileField = reactive(useField('resume_file', undefined, { initialValue: null }));

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(async () => {
			// fetch country options
			// store.dispatch('country/getCountries');
			// // fetch city options
			// store.dispatch('country/getCities');
		});

		/**
		 * Computed props
		 * *******************************************************************
		 */
		// get country options
		// const countryOptions = computed(
		// 	() => store.getters['country/getCountryOptions'],
		// );

		// get city options
		// const cityOptions = computed(
		// 	() => store.getters['country/getCitiesOptions'],
		// );
		// calculate file size
		const calculateFileSize = computed(() => {
			const bytes = (contentFile.value && contentFile.value.size) || 0;

			// convert file size to MB from kb
			if (bytes === 0) {
				return 0;
			}

			return parseFloat((bytes / Math.pow(1024, 2)).toFixed(2));
		});
		/**
		 * Methods
		 * *******************************************************************
		 */
		// submit form - add work hour
		const submitForm = handleSubmit(async values => {
			console.log(values, 'bjagshjdas');
			// set date format
			// values.start_date = moment(values.start_date).format('YYYY/MM/DD');
			// values.end_date = values.end_date ? moment(values.end_date).format('YYYY/MM/DD') : null;

			// save the work details
			// await store.dispatch('resume/addExperience', values).then(() => {
			// });
			const file = contentFile.value ?? null;

			// form data
			const formData = new FormData();
			formData.append('resume_file', file);
			formData.append('description', values.description);

			await store.dispatch('resume/addResume', formData).then(() => {
				modalShow.value = false;
			});

			emit('newResume');

			return true;
		});

		// on file upload
		const onDrop = (acceptFiles, rejectReasons) => {
			if (rejectReasons.length) {
				toast.error(rejectReasons[0].errors[0].message);
				return false;
			}

			contentFile.value = acceptFiles[0]; // store file
			resumefileField.value = acceptFiles[0];
			// props.onDataFileChange(acceptFiles[0]); // handle data file change

			// file preview
			contentFilePreview.value = ['image/png', 'image/jpg', 'image/jpeg', 'image/pdf'].includes(acceptFiles[0].type)
				? URL.createObjectURL(acceptFiles[0])
				: require('@/assets/images/iconWomanDraw.png');
		};

		// remove file
		const removeFile = () => {
			contentFile.value = null;
		};

		// dropzone
		const { getRootProps, getInputProps, ...rest } = useDropzone({
			multiple: false,
			onDrop,
			maxSize: 5242880, // 5 MB
			accept: ['.png', '.pdf', '.jpg', '.jpeg', '.docx'],
		});

		return {
			// translate function
			t,
			contentFile,
			contentFilePreview,
			toast,

			// refs
			modalShow,

			// icons
			closeIcon,
			cloudUploadIcon,
			// form related
			formMeta,
			isSubmitting,

			// fields
			resumeDescripationField,
			resumefileField,
			// companyNameField,
			// countryField,
			// cityField,
			// startDateField,
			// endDateField,

			// computed
			// countryOptions,
			// cityOptions,
			calculateFileSize,

			//method
			onDrop,
			submitForm,
			removeFile,
			getRootProps,
			getInputProps,
			rest,
			// openImageSelector,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.add_experience_modal {
	padding: 0;
	.theme-input {
		.text-height {
			height: 100px;
		}
	}

	.modal__content {
		padding: 0;
		max-height: calc(100vh - 4em);
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

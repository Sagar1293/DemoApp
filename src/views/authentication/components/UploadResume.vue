<template>
	<div class="uploadResume">
		<!-- step - 3 -- title -->
		<div class="tab-header">
			<h5 class="text-big">
				{{ userType === 'employer' ? t('registerForm.uploadCompanyLogo') : t('fieldList.uploadResume') }}
			</h5>
		</div>

		<!-- step - 3 -- form content -->
		<div class="tab-form theme-input">
			<div class="form-row">
				<div class="form-group col-12">
					<!-- dropzone - upload file -->
					<label>{{ t('registerForm.uploadFile') }}</label>
					<div class="drop-container">
						<div class="dropzone" id="dropImage" v-bind="getRootProps()">
							<div class="dropzone-text">
								<div class="dropzone-icon">
									<FontAwesomeIcon :icon="cloudUploadIcon" />
								</div>
								<div class="dropzone-info">
									<p>
										{{ t('registerForm.uploadFile') }}
									</p>
									<span>{{ t('common.pdf_doc_ppt_jpg_png') }}</span>
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
								<div class="dz-preview dz-error dz-complete dz-image-preview">
									<div class="dz-image">
										<img data-dz-thumbnail="" alt="Content file image" :src="contentFilePreview" />
									</div>
									<div class="dz-details">
										<div class="dz-size">
											<span data-dz-size=""
												><strong>{{ calculateFileSize }}</strong> {{ t('document.mb') }}</span
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
				</div>
			</div>
		</div>

		<!-- prev tab and next tab btn -->
		<div class="form-row form-btns justify-content-end">
			<div class="form-group">
				<button type="button" class="btn-common btn-lightGray mr-3" @click="changeTab('pills-personalInformation-tab')">
					{{ t('common.back') }}
				</button>
			</div>
			<div class="form-group">
				<button type="button" class="btn-common btn-red" @click="submitForm">
					{{ t('common.next') }}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { Tab } from 'bootstrap';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { useDropzone } from 'vue3-dropzone';
import { useToast } from 'vue-toastification';

export default {
	name: 'UploadResume',

	// components
	components: {
		FontAwesomeIcon,
	},

	props: {
		userType: String,
		onDataFileChange: Function,
	},

	setup(props) {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore(); // use state

		// file var
		const contentFile = ref(null);
		const contentFilePreview = ref('');

		// icons
		const closeIcon = faTimes;
		const cloudUploadIcon = faCloudUploadAlt;

		// toast
		const toast = useToast();

		/**
		 * Computed Props
		 * *******************************************************************
		 */
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
		// change form step
		const changeTab = tab => {
			const triggerTab = document.querySelector(`#pills-tab #${tab}`);
			new Tab(triggerTab).show();
		};

		// on file upload
		const onDrop = (acceptFiles, rejectReasons) => {
			if (rejectReasons.length) {
				toast.error(rejectReasons[0].errors[0].message);
				return false;
			}

			contentFile.value = acceptFiles[0]; // store file

			props.onDataFileChange(acceptFiles[0]); // handle data file change

			// file preview
			contentFilePreview.value = ['image/png'].includes(acceptFiles[0].type) ? URL.createObjectURL(acceptFiles[0]) : require('@/assets/images/iconWomanDraw.png');
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

		// submit form - change tab - step - 2
		const submitForm = () => {
			// store data in vuex
			store.commit('auth/SET_STATE', {
				action: 'contentFile',
				data: contentFile.value,
			});

			// go to next tab
			changeTab('pills-terms-tab');
		};

		return {
			t,
			contentFile,
			contentFilePreview,
			closeIcon,
			cloudUploadIcon,
			calculateFileSize,
			changeTab,
			getRootProps,
			getInputProps,
			...rest,
			removeFile,
			submitForm,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.uploadResume {
	.tab-form {
		margin: 30px 0px 10px 0px;

		.dropzone {
			outline: none !important;
		}
	}

	@media (max-width: 576px) {
		.tab-header {
			text-align: center;
		}
		.tab-form {
			margin: 20px 0px;
		}
	}
}
</style>

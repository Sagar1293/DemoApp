<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container add_employer__modal " content-class="modal-content">
		<!-- close btn -->
		<button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal">
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="clodeicone" />
			</span>
		</button>

		<div class="model">
			<h1 class="attachments">{{t('invoiceData.attachments')}}</h1>
			<!-- form field -->
			<div class="invoice-pd invoice-receipt">
				<div class="row">
					<div class="d-md-flex justify-content-between mb-3 mt-5 ">
						<div class="pph-left">
							<h5 class="title-lg mb-2">{{t('invoiceData.attachmentsList')}}</h5>
						</div>

						<!-- <button type="button" class="close-btn" @click="removeRow(index)">
										<FontAwesomeIcon :icon="closeIcon" />
									</button> -->

						<div class="pph-right d-flex justify-content-end">
							<button class="btn-common btn-red mt-0" type="button" @click="addReceiptDetail">
								<span class="ml-2">
									<FontAwesomeIcon :icon="pinIcon" />
								</span>
								{{t('invoiceData.addAttachments')}}
							</button>
						</div>
					</div>
					<div class="daily-work-row">
						<!--  class="overflow-auto" -->
						<div>
							<div class="daily-work-col">
								<!-- daily work hour list - column name -->
								<div class="details-head">
									<div class="product-no w-30">
										<p class="details-head-text text-left">{{t('invoiceData.attachmentDescription')}}</p>
									</div>

									<div class="team-member w-20">
										<p class="details-head-text text-left">{{t('invoiceData.attachmentDate')}}</p>
									</div>

									<div class="discription w-40">
										<p class="details-head-text text-left">{{t('invoiceData.attachments')}}</p>
									</div>
									<div class="discription w-10">
										<p class="details-head-text text-left">{{t('invoiceData.attachmentsAction')}}</p>
									</div>
								</div>
								<!-- daily work hout list - row -->
								<div class="border-attach">
									<div v-for="(row, index) in receiptItem" :key="index">
										<div class="details-content gap-2">
											<!-- serial no. -->
											<div class="product-width w-25">
												<input type="text" min="0" v-model="row.purchase_place" class="form-control form-model" />
											</div>
											<!-- Team member -->
											<div class="work-width me-2 ml-xl-0 ml-3 w-20">
												<div class="position-relative">
													<v-date-picker v-model="row.purchase_date" :masks="{ input: 'DD.MM.YYYY' }" class="d-flex align-items-center">
														<template
															v-slot="{
																inputValue,
																inputEvents,
															}"
														>
															<input class="form-control form-model" :value="inputValue" v-on="inputEvents" />

															<div class="calender-icon d-flex justify-content-center align-items-center position-absolute">
																<FontAwesomeIcon :icon="calenderIcon" class="text-gray text-sm" />
															</div>
														</template>
													</v-date-picker>
												</div>
											</div>

											<!-- desciption Field Input -->
											<div class="work-width me-2 w-40">
												<div class="work py-0">
													<div class="">
														<div>
															<div class="input-pera btn-color position-relative">
																<drop-zone @fileDrop="file => handleContractFileChange(file, index)" class="mb-4" :isUploadButton="false" />
																<div class="preview top-0 left-0" v-if="row.contractFile">
																	<div id="preview">
																		<div class="dz-preview dz-error dz-complete dz-image-preview dz-img-wrap">
																			<div class="dz-image">
																				<img data-dz-thumbnail="" alt="Invocie receipt file image" :src="row.contractFilePreview" class="thumb-img" />
																			</div>
																			<div class="dz-details d-flex align-items-center">
																				<div class="dz-filename">
																					<span>
																						{{ row.contractFile?.name }}
																					</span>
																				</div>
																				<div class="ml-2 mt-2 preview">
																					<button type="button" class="drop-close" @click="removeInvoiceReceiptFile(index)">
																						<FontAwesomeIcon :icon="closeIcon" />
																					</button>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="d-flex align-items-center justify-content-center w-10">
												<button type="button" class="close-btn" @click="removeRow(index)">
													<FontAwesomeIcon :icon="closeIcon" />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- add btn -->
				<div class="text-center pt-3">
					<button class="btn-common btn-red" @click="closeModal">
						{{t('invoiceData.done')}}
					</button>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faTimes, faCalendarWeek, faPlus, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { ref } from '@vue/reactivity';
import { vatTypeOptionsNew } from '@/utils/enums.js';
import { onMounted } from '@vue/runtime-core';
import { dateFormat } from '@/utils/mixins';
import moment from 'moment';
import { useStore } from 'vuex';

export default {
	name: 'EditAttachmentModal',

	props: {
		isModalShow: Object,
		formFields: Object,
	},

	components: {
		FontAwesomeIcon,
	},

	setup(props) {
		// ref vars
		const modalShow = ref(props.isModalShow);
		const formFieldsData = ref(props.formFields);

		const calenderIcon = faCalendarWeek;
		const closeIcon = faTimes;
		const plusIcon = faPlus;
		const pinIcon = faPaperclip;

		const contractFile = ref(null);
		const imageFile = ref(null);

		// file var
		const invoiceReceiptFile = ref(null);
		const invoiceReceiptFilePreview = ref('');
		const invoiceMultiFile = ref(null);
		const invoiceMultiFilePreview = ref('');

		// globle store
		const store = useStore();

		// icons
		const clodeicone = faTimes;
		const downArrowIcon = faChevronDown;

		//receipt file
		const receiptItem = ref([
			{
				purchase_place: null,
				purchase_date: null,
				receipt_file: '',
				contractFile: null,
				contractFilePreview: null,
			},
		]);

		const closeModal = () => {
			const receiptItemData = [];
			receiptItem.value.map(function(item) {
				let itemObj = {};
				itemObj.purchase_place = item.purchase_place;
				itemObj.purchase_date = item.purchase_date == null ? null : moment(item.purchase_date).format('YYYY/MM/DD');
				itemObj.receipt_file = item.receipt_file;
				receiptItemData.push(itemObj);
			});
			formFieldsData.value.receiptFileField.value = receiptItemData || [];
			modalShow.value = false;
		};

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(() => {
			receiptItem.value = store.state.teamInvoice.editTeamWorkDetailList.invoice_files.map(x => ({
				id: x.id,
				purchase_place: x.purchase_place || '',
				purchase_date: x.purchase_date == null ? null : moment(x.purchase_date).format('YYYY/MM/DD'),
				receipt_file: x.receipt_file,
				contractFile: x.file_path || null,
				contractFilePreview: x.file_path || null,
				file_path: x.file_path || null,
			}));
		});

		/**
		 * Methods
		 * *******************************************************************
		 */

		const handleContractFileChange = (file, index) => {
			imageFile.value = file;

			const formData = new FormData();
			formData.append('file', file[0]);
			formData.append('file_upload_from', 'teamInvoice');

			store.dispatch('uploadImage', formData).then(res => {
				receiptItem.value[index].receipt_file = res.data.tempUploadFile?.id;
				receiptItem.value[index].contractFile = file[0]; // store file
				receiptItem.value[index].contractFilePreview = ['image/png', 'image/jpg', 'image/svg', 'image/jpeg', 'image/pdf', 'image/csv'].includes(file[0].type)
					? res.data.file_link
					: require('@/assets/images/iconWomanDraw.png');
			});
		};

		// remove document file
		const removeInvoiceReceiptFile = index => {
			receiptItem.value[index].contractFile = null; // store file

			// file preview
			receiptItem.value[index].contractFilePreview = null;
		};

		const addReceiptDetail = () => {
			receiptItem.value.push({
				purchase_place: '',
				purchase_date: '',
				receipt_file: '',
				contractFile: '',
				contractFilePreview: '',
				file_path: '',
			});
		};

		//remove item
		const removeRow = (index, id) => {
			if (id) {
				store.dispatch('teamInvoice/deleteTeamInvoiceImage', id).then(() => {
					receiptItem.value.splice(index, 1);
				});
			}

			store.commit('teamInvoice/DELETE_ATTACHMENT', index);
			receiptItem.value.splice(index, 1); // why is this removing only the last row?
		};

		return {
			//ref
			vatTypeOptionsNew,
			modalShow,
			formFieldsData,
			receiptItem,

			dateFormat,
			// icons
			clodeicone,
			downArrowIcon,
			calenderIcon,
			closeIcon,
			plusIcon,
			pinIcon,

			// file vars
			invoiceReceiptFile,
			invoiceMultiFile,
			invoiceReceiptFilePreview,
			invoiceMultiFilePreview,
			contractFile,

			// methods
			closeModal,
			removeInvoiceReceiptFile,
			addReceiptDetail,
			removeRow,
			handleContractFileChange,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';
@import '@/assets/scss/modal.scss';

.modal-content {
	.model {
		width: 100%;
		padding: 20px 40px;
		border-radius: 25px;
		border: 2px dashed #e4e6e7;
		position: relative;
		overflow: auto;
		@media (max-width:576px) {
			padding: 20px 20px;
		}

		.close-icone {
			width: 20px;
			height: 20px;
			font-size: 20px;
			position: absolute;
			top: 5px;
			right: 5px;
			cursor: pointer;
		}

		.attachments {
			padding: 20px 0;
			font-weight: 700;
			text-align: center;
		}
		.input-title {
			font-size: 16px;
			margin-bottom: 5px;
			font-weight: 500;
			color: #858a90;
		}
		.input-pera {
			width: 300px;
			padding: 7px 10px;
			font-size: 11px;
			height: 70px;
			border-radius: 12px;
			border: 2px dashed #e4e6e7;
		}
		.input-back {
			border: none;
			background-color: #f6f6f6;
		}

		.text-prize {
			padding: 20px 0;
		}
		.input-fill {
			width: 100%;
			font-size: 14px;
			background: transparent;
			outline: none;
			border: none;
		}
		.text-center {
			text-align: center;
		}
		.btn-color {
			display: flex;
			align-items: center;
			::-webkit-file-upload-button {
				border: 1px solid #273238;
				border-radius: 10px;
				background-color: #273238;
				color: #fff;
				padding: 8px;
				float: right;
				margin-right: 0;
			}
		}
		.pph-right {
			.btn-common {
				padding: 8px 17px;
				font-size: 13px;
			}
		}
	}
}
.dz-img-wrap {
	position: absolute;
	right: 0;
	top: 0;
	transform: translate(150px, 20px);

	.dz-image {
		.thumb-img {
			width: 100px;
			height: 100px;
			object-fit: cover;
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

.plus-border-text {
	.pph-left {
		.add-text {
			min-width: 570px;
			width: 100%;

			@media (max-width: 1024px) {
				min-width: 0;
			}
		}
	}
}

.form-model {
	padding: 12px 15px;
	background-color: #fbfbfb;
	border-radius: 25px;
	position: relative;
}

.invoice-dropdown {
	padding: 12px 15px;
	background-color: #fbfbfb;
	border: 1px solid #eaeaea;
	height: unset;
	border-radius: 25px;
	&:focus {
		box-shadow: none;
	}
	&:after {
		display: none;
	}
}
::placeholder {
	font-size: 13px;
}
.invoice-dropdown {
	padding: 10px 20px;
}
.w-full {
	width: 100%;
}
.b-bottom {
	border-bottom: 1px solid red;
	padding-bottom: 20px;
}
.calender-icon {
	right: 0;
	top: 50%;
	transform: translate(-30px, -50%);
}
.dz-filename span {
	display: none;
}
.preview {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 20px;
	transform: translateY(30%);
	height: 20px;
	background-color: #fff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
.daily-work-col {
	width: 100%;
	min-width: 800px;
}
.details-head {
	display: flex;
	align-items: center;
	background-color: #273238;
	padding: 10px 10px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	color: #fff;
}
.details-content {
	display: flex;
	align-items: center;
	padding: 7px 5px;
}
</style>

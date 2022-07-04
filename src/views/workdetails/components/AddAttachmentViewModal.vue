<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container add_employer__modal "
		content-class="modal-content"
	>
		<div class="model">
			<!-- title -->
			<h1 class="attachments">Attachments</h1>

			<!-- close btn -->
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

			<!-- form field -->
			<div>
				<div class="select-file">
					<!-- attachment for reciept -->


					<div class="form-row account__form">
						<div class="form-group col-xl-3 col-lg-6">
							<label for="firstName">
								<span class="input-title"
									>place of Purchase</span
								>
							</label>
							<input
								id="addAttachPlaceofPurchase"
								type="text"
								class="form-control form-model"
							/>
						</div>

						<div class="form-group col-xl-7 col-lg-6">
							<label for="firstName">
								<span class="input-title"
									>place of Purchase</span
								>
							</label>
							<input
								id="addAttchPlaceOfPurchase"
								type="text"
								class="form-control form-model"
							/>
						</div>

						<div class="form-group col-xl-2 col-lg-6">
							<label for="firstName">
								<span class="input-title">Total</span>
							</label>
							<input								
								type="text"
								class="form-control form-model"
							/>
						</div>

						<div class="form-group col-xl-3 col-lg-6">
							<label for="firstName">
								<span class="input-title"
									>Date of Purchase</span
								>
							</label>
							<input
								
								type="text"
								class="form-control form-model"
							/>
						</div>

						<!-- <div class="form-group col-xl-6 col-lg-6">
							<p class="company-input input-date pr-2">
								<v-date-picker
								>
									<template>
										<input
											class="form-control"
										/>
									</template>
								</v-date-picker>
							</p>
						</div> -->

						<div
							class="form-group dropdown select-employee col-xl-2 col-lg-6"
						>
							<div>
								<label for="vatselect" class="w-full">
									<span class="input-title">VAT%</span>
								</label>
								<button
									class="btn dropdown-toggle
									tbl-drop invoice-dropdown"
									type="button"									
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<!-- <FontAwesomeIcon
										:icon="downArrowIcon"
										class="ms-3 text-gray"
									/> -->
								</button>
								<ul
									class="dropdown-menu"
									aria-labelledby="dropdownMenuButton1"
								>
									<li>
										<a class="dropdown-item" href="#"
											>Action</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Another action</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Something else here</a
										>
									</li>
								</ul>
							</div>
						</div>

						<div
							class="form-group dropdown select-employee col-xl-2 col-lg-6"
						>
							<label for="vatfree">
								<span class="input-title">VAT free</span>
							</label>
							<p class="input-title mt-2">0€</p>
						</div>

						<div class="col-xl-5">
							<p class="input-title">Attachments</p>
							<div>
								<div class="input-pera btn-color">
									<drop-zone
										@fileDrop="handleInvoiceRecieptFile"
									/>
								</div>
								<div class="preview" v-if="invoiceReceiptFile">
									<button
										type="button"
										class="drop-close"
										@click="removeInvoiceReceiptFile"
									>
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
												<img
													data-dz-thumbnail=""
													alt="Invocie receipt file image"
													:src="
														invoiceReceiptFilePreview
													"
													class="thumb-img"
												/>
											</div>
											<div class="dz-details">
												<div class="dz-filename">
													<span>
														{{
															invoiceReceiptFile.name
														}}
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- add btn -->
				<div class="text-center">
					<button class="btn-common btn-red" @click="closeModal">
						Done
					</button>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref, reactive } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';
import * as yup from 'yup';
import { useForm, useField } from 'vee-validate';

export default {
	name: 'AddEmployerModal',

	props: {
		isModalShow: Object,
	},

	//components
	components: {
		FontAwesomeIcon,
	},

	setup(props) {
		// ref
		const modalShow = ref(props.isModalShow);
		const invoiceReceiptFile = ref(null);
		const invoiceReceiptFilePreview = ref('');		

		// icons
		const closeIcon = faTimes;

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// global store
		const store = useStore();

		// form schema validation
		const employerSchema = yup.object({
			full_name: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.fullName',
					}),
				)
				.min(2),
			company_name: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyName',
					}),
				),
			company_email: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyEmail',
					}),
				)
				.email(t('validation.validEmail')),
			address: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyAddress',
					}),
				),
			company_phone: yup
				.number()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.companyPhone',
					}),
				),
			ssn: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.ssn',
					}),
				),
			tax_number: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.taxNumber',
					}),
				),
			reg_number: yup
				.string()
				.nullable()
				.required(
					t('validation.requiredField', {
						field: 'fieldList.yTunnus',
					}),
				),
			attechment_file: yup.mixed().required(
				t('validation.requiredField', {
					field: 'fieldList.contractFile',
				}),
			),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, isSubmitting } = useForm({
			validationSchema: employerSchema,
		});

		// form fields
		const fullNameField = reactive(
			useField('full_name', undefined, { initialValue: null }),
		);
		const companyNameField = reactive(
			useField('company_name', undefined, { initialValue: null }),
		);
		const companyEmailField = reactive(
			useField('company_email', undefined, { initialValue: null }),
		);
		const companyAddressField = reactive(
			useField('address', undefined, { initialValue: null }),
		);
		const companyPhoneField = reactive(
			useField('company_phone', undefined, { initialValue: null }),
		);
		const employerSSNField = reactive(
			useField('ssn', undefined, { initialValue: null }),
		);
		const employerTaxNumberField = reactive(
			useField('tax_number', undefined, { initialValue: null }),
		);
		const employerYTunnusField = reactive(
			useField('reg_number', undefined, { initialValue: null }),
		);
		const invoiceReceiptField = reactive(
			useField('attechment_file', undefined, { initialValue: null }),
		);

		/**
		 * Methods
		 * *******************************************************************
		 */
		// submit form - add employer
		const submitForm = handleSubmit(async values => {
			await store
				.dispatch('auth/addAnonymousEmployer', values)
				.then(() => {
					modalShow.value = false;
				});
		});

		// handle contract file change
		const handleInvoiceRecieptFile = file => {
			invoiceReceiptField.value = file;

			invoiceReceiptFile.value = file[0]; // store file
			// file preview
			invoiceReceiptFilePreview.value = ['image/png'].includes(
				file[0].type,
			)
				? URL.createObjectURL(file[0])
				: require('@/assets/images/iconWomanDraw.png');
		};

		// remove contract file
		const removeInvoiceReceiptFile = () => {
			invoiceReceiptField.value = null;
			invoiceReceiptFile.value = null;
			invoiceReceiptFilePreview.value = null;
		};

		return {
			// icons
			closeIcon,
			invoiceReceiptFile,
			invoiceReceiptFilePreview,
			invoiceReceiptField,

			// translate function
			t,

			// refs
			modalShow,

			// form related
			formMeta,
			isSubmitting,
			submitForm,

			// fields
			fullNameField,
			companyNameField,
			companyEmailField,
			companyAddressField,
			companyPhoneField,
			employerSSNField,
			employerTaxNumberField,
			employerYTunnusField,
			//method
			handleInvoiceRecieptFile,
			removeInvoiceReceiptFile,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.modal-content {
	.model {
		// max-width: 1024px;
		width: 100%;
		padding: 20px 40px;
		border-radius: 25px;
		border: 2px dashed #e4e6e7;
		position: relative;
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
			width: 100%;
			padding: 7px 10px;
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
		.btn-common {
			margin-top: 20px;
		}
	}
}

.dz-image {
	display: flex;
	flex-wrap: wrap;

	.thumb-img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}
}

.form-model {
	padding: 12px 15px;
	background-color: #fbfbfb;
	// border: 1px solid #eaeaea;
	border-radius: 25px;
	position: relative;
}
.dz-filename span {
	font-size: 12px;
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
.invoice-dropdown {
	padding: 10px 20px;
}
.w-full {
	width: 100%;
}
</style>

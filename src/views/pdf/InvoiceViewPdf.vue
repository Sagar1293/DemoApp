<template>
	<div>
		<!-- ${Date.now()} -->
		<vue3-html2pdf
			:enable-download="true"
			:preview-modal="false"
			:filename="`${singleInformationInvoice.invoice_number}`"
			:manual-pagination="true"
			pdf-format="a4"
			pdf-orientation="portrait"
			@hasGenerated="hasGenerated($event)"
			ref="pdf"
		>
			<template v-slot:pdf-content>
				<section>
					<div class="document__list card-space container-lg pt-4">
						<div>
							<div class="row justify-content-center mb-xl-4 mb-sm-0 mb-4">
								<!-- <div class="col-12">
									<div class="d-flex align-items-center justify-content-end" @click="invoicePdf(singleInformationInvoice)">
										<button class="btn-common btn-red py-2">PDF</button>
									</div>
								</div> -->
								<div class="col-xl-6 col-lg-12 col-md-12 col-12 mb-xl-0 mb-3">
									<div class="pph-wrapper">
										<div class="logo-fi pb-3">
											<img src="@/assets/images/way2work-logo.png" alt="img" class="img-fluid" />
										</div>

										<div class="pph-left-box">
											<h3 class="title-head">Recipient Details</h3>
											<div class="company-content">
												<!-- company name -->
												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.name') }}:</p>
													<p class="company-value">
														{{ (singleInformationInvoice.company && singleInformationInvoice.company.company_name) || '-' }}
													</p>
												</div>

												<!-- company email -->
												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.email') }}:</p>
													<p class="company-value">
														{{ singleInformationInvoice.company && singleInformationInvoice.company.company_email }}
													</p>
												</div>

												<!-- company phone -->
												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.phone') }}:</p>
													<p class="company-value">
														{{ singleInformationInvoice.company && singleInformationInvoice.company.mobile }}
													</p>
												</div>

												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.residence') }}:</p>
													<p class="company-value">
														{{
															singleInformationInvoice.company &&
																singleInformationInvoice.company.companyCountry &&
																singleInformationInvoice.company.companyCountry.country_name
														}}
													</p>
												</div>

												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.city') }}:</p>
													<p class="company-value">
														{{
															(singleInformationInvoice.company &&
																singleInformationInvoice.company.companyCity &&
																singleInformationInvoice.company.companyCity.city_name) ||
																'-'
														}}
													</p>
												</div>

												<!-- company address -->
												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.address') }}:</p>
													<p class="company-value">
														{{ singleInformationInvoice.company && singleInformationInvoice.company.address }}
													</p>
												</div>
											</div>

											<!-- <div class="company-content company-sub-content"> -->
											<div class="company-content">
												<!-- employer ssn -->
												<!-- <div class="company-text">
													<p class="company-titel">{{t('fieldList.companyRegNum')}} :</p>
													<p class="company-value">
														{{ singleInformationInvoice.company && singleInformationInvoice.company.reg_number || '-' }}
													</p>
												</div> -->

												<!-- employer tax no. -->
												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.zipCode') }}:</p>
													<p class="company-value">
														{{ (singleInformationInvoice.company && singleInformationInvoice.company.zip_code) || '-' }}
													</p>
												</div>

												<!-- employer y tunnus -->
												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.employerYTunnus') }}:</p>
													<p class="company-value">
														{{ (singleInformationInvoice.company && singleInformationInvoice.company.reg_number) || '-' }}
													</p>
												</div>

												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.operatorCode') }}:</p>
													<p class="company-value">
														{{ (singleInformationInvoice.company && singleInformationInvoice.company.operator_code) || '-' }}
													</p>
												</div>

												<div class="company-text">
													<p class="company-titel">{{ t('fieldList.vatNumber') }}:</p>
													<p class="company-value">
														{{ (singleInformationInvoice.company && singleInformationInvoice.company.vat_number) || '-' }}
													</p>
												</div>
												<!-- </div> -->
											</div>
										</div>
									</div>
								</div>

								<div class="col-xl-6 col-md-12 col-12 mb-xl-0 mb-3">
									<div class="red-wrapper  ">
										<div class="pb-4">
											<h5 class="title-head">
												{{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.user && singleInformationInvoice.seeker.user.full_name }} INVOICE
											</h5>
										</div>

										<div class="red-box">
											<div class="d-flex justify-content-between">
												<div class="mb-2">
													<h5 class="title-lg">Invoice date</h5>
													<p class="text-md-fw">
														{{ dateFormat(singleInformationInvoice.created_at) }}
													</p>
												</div>

												<div v-if="singleInformationInvoice.mark_as_wrong">
													<div class="tbl-status">
														<span class="sts-wait d-flex align-items-center justify-content-center">
															<!-- <FontAwesomeIcon :icon="clockIcon" class="me-2" /> -->
															<p>Credited</p>
														</span>
													</div>
												</div>
											</div>
											<div>
												<div class="mb-2">
													<h5 class="title-lg mb-1">Invoice number</h5>
													<p class="text-md-fw">
														{{ singleInformationInvoice.invoice_number }}
													</p>
												</div>

												<div class="mb-2">
													<h5 class="title-lg mb-1">Reference number</h5>
													<p class="text-md-fw">
														{{ singleInformationInvoice?.ref_number || 'Not assigned yet' }}
													</p>
												</div>

												<div class="mb-2">
													<h5 class="title-lg mb-1">Due date</h5>
													<p class="text-md-fw">
														{{ dateFormat(singleInformationInvoice.due_date || '-') }}
													</p>
												</div>

												<div class="mb-2">
													<h5 class="title-lg mb-1">
														Late Paymentinterest
													</h5>
													<p class="text-md-fw">{{ singleInformationInvoice?.panelty_interest || 0 }}%</p>
												</div>

												<div class="mb-2" v-if="singleInformationInvoice.company && singleInformationInvoice.company.reg_number">
													<h5 class="title-lg mb-1">Company ID</h5>
													<p class="text-md-fw">
														{{ singleInformationInvoice.company && singleInformationInvoice.company.reg_number }}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="singleInformationInvoice.under_review">
								<div class="pph-left mb-3">
									<h5 class="title-head">Revision Note</h5>
								</div>

								<div class="overflow-auto">
									<div class="bottom-header d-flex align-items-center justify-content-between mb-4">
										<div class="d-flex align-items-center">
											<p class="text-white">{{ singleInformationInvoice.admin_revision_note ?? '' }}</p>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div class="mb-3">
									<h5 class="title-head">Work Details</h5>
								</div>
								<new-data-table :data="singleInformationInvoice.worked_hours || []" sst class="large-table detail-table">
									<template #thead>
										<new-tb-th class="w-30">Invoice details</new-tb-th>
										<new-tb-th>Date</new-tb-th>
										<new-tb-th>Value</new-tb-th>
										<new-tb-th class="text-center">Quantity</new-tb-th>
										<new-tb-th class="text-center">VAT%</new-tb-th>
										<new-tb-th>No VAT</new-tb-th>
										<new-tb-th>VAT</new-tb-th>
										<new-tb-th>Total</new-tb-th>
									</template>
									<template #data="scopedData" ref="tableBody">
										<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
											<new-tb-td>{{ tr.description || '-' }}</new-tb-td>

											<new-tb-td>{{ tr.date == null ? '-' : dateFormat(tr.date) }}</new-tb-td>

											<new-tb-td class="text-center">€ {{ tr.contract_value || '-' }}</new-tb-td>

											<new-tb-td class="text-center">{{ tr.total_work || '-' }}</new-tb-td>

											<new-tb-td class="text-center">{{ singleInformationInvoice.vat || '-' }} </new-tb-td>

											<new-tb-td>€ {{ tr.contract_value * tr.total_work }}</new-tb-td>

											<new-tb-td>€ {{ (tr.contract_value * tr.total_work * singleInformationInvoice.vat) / 100 }}</new-tb-td>
											<new-tb-td>€ {{ tr.contract_value * tr.total_work + (tr.contract_value * tr.total_work * singleInformationInvoice.vat) / 100 }}</new-tb-td>
										</new-tb-tr>
									</template>
								</new-data-table>

								<div class="overflow-auto">
									<div class="bottom-header d-flex align-items-center justify-content-between mb-4">
										<div class="pph-left">
											<h5 class="text-white">Summary</h5>
										</div>
										<div class="d-flex align-items-center ml-md-auto">
											<!-- <div class="mr-5 text-white">
												<p class="text-md-fw">Invoice Total</p>
												<p class="text-md-fw">€ {{ Number(singleInformationInvoice.work_vat_value).toFixed(2) || 0.0 }}</p>
											</div>

											<div class="mr-5 text-white">
												<p class="text-md-fw">VAT %</p>
												<p class="text-md-fw">{{ singleInformationInvoice.vat || '-' }}</p>
											</div> -->

											<div class="mr-5 text-white">
												<p class="text-sm-fw">Gross amount</p>
												<p class="text-sm-fw">
													€
													{{
														singleInformationInvoice.mark_as_wrong
															? -Number(singleInformationInvoice.gross_salary).toFixed(2)
															: Number(singleInformationInvoice.gross_salary).toFixed(2) || '-'
													}}
												</p>
											</div>

											<div class="mr-5 text-white">
												<p class="text-sm-fw">Withholding tax</p>
												<p class="text-sm-fw">
													€
													{{
														singleInformationInvoice.mark_as_wrong
															? -Number(singleInformationInvoice.tax_amount).toFixed(2)
															: Number(singleInformationInvoice.tax_amount).toFixed(2) || 0.0
													}}
												</p>
											</div>

											<div class="mr-5 text-white">
												<p class="text-sm-fw">Compensations</p>
												<p class="text-sm-fw">
													€
													{{
														singleInformationInvoice.mark_as_wrong
															? -Number(singleInformationInvoice.compensation_amount).toFixed(2)
															: Number(singleInformationInvoice.compensation_amount).toFixed(2) || '-'
													}}
												</p>
											</div>

											<div class="text-white">
												<p class="text-sm-fw">You will be paid</p>
												<p class="text-sm-fw">
													€
													{{
														singleInformationInvoice.mark_as_wrong
															? -Number(singleInformationInvoice.sub_total).toFixed(2)
															: Number(singleInformationInvoice.sub_total).toFixed(2) || '-'
													}}
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="overflow-auto">
									<div class="bottom-header d-flex align-items-center justify-content-between mb-4">
										<!-- <div class="save-icon">
							<img src="@/assets/images/save-icon.png" class="img-fluid" alt="err" />
						</div> -->

										<div class="pph-left">
											<h5 class="text-white">Recipient</h5>
										</div>
										<div class="d-flex align-items-center ml-md-auto">
											<div class="mr-5 text-white">
												<p class="text-sm-fw">Invoice Total</p>
												<p class="text-sm-fw">
													€
													{{
														singleInformationInvoice.mark_as_wrong
															? -Number(singleInformationInvoice.company_pay_amount ?? 0).toFixed(2)
															: Number(singleInformationInvoice.company_pay_amount ?? 0).toFixed(2) || 0.0
													}}
												</p>
											</div>

											<div class="mr-5 text-white">
												<p class="text-sm-fw">VAT Amount</p>
												<p class="text-sm-fw">
													€ {{ singleInformationInvoice.mark_as_wrong ? -singleInformationInvoice.vat_amount : singleInformationInvoice.vat_amount || 0 }}
												</p>
											</div>

											<!-- <div class="text-white">
								<p class="text-md-fw">Due Date</p>
								<p class="text-md-fw">{{ dateFormat(singleInformationInvoice.due_date || '-') }}</p>
							</div> -->

											<!-- <div class="text-white">
								<p class="text-md-fw">Company ID</p>
								<p class="text-md-fw"> 898579668</p>
							</div> -->
										</div>
									</div>
								</div>

								<div class="mb-3">
									<h5 class="title-head">{{ t('invoiceData.attachmentsList') }}</h5>
								</div>

								<new-data-table :data="singleInformationInvoice.invoice_files || []" sst class="large-table detail-table attachment-table">
									<template #thead>
										<new-tb-th class="w-50">{{ t('invoiceData.attachmentDescription') }}</new-tb-th>
										<new-tb-th class="w-30">{{ t('invoiceData.attachmentDate') }}</new-tb-th>
										<new-tb-th>{{ t('invoiceData.attachments') }}</new-tb-th>
									</template>

									<template #data="scopedData" ref="tableBody">
										<new-tb-tr class="invoice__row" :key="i" v-for="(tr, i) in scopedData.data">
											<new-tb-td>{{ tr.purchase_place || '-' }}</new-tb-td>
											<new-tb-td>{{ dateFormat(tr.purchase_date) }}</new-tb-td>
											<new-tb-td>
												<div class="d-flex align-items-center">
													<button class="tbl-action grey-edit" @click="viewSeekerDocument(tr.file_path)">
														<FontAwesomeIcon :icon="viewIcon" style="text-align: 'center'" />
													</button>
												</div>
											</new-tb-td>
										</new-tb-tr>
									</template>
								</new-data-table>
							</div>

							<div class="page-break"></div>

							<div class="position-relative">
								<div class="overflow-auto" :class="!singleInformationInvoice.approved ? 'blur-overlay' : 'no-blur-overlay'">
									<h4 class="text-center mt-5"></h4>

									<div class="viewinvoicetable">
										<div class="d-flex">
											<div style="width:18%; border-right:2px solid #000;border-bottom:2px solid #000;" class="p-2 text-end">
												Saajan tilinumero Mottagarens kontonummer.
											</div>
											<div style="width:33%; border-right:2px solid #000;border-bottom:2px solid #000;" class="p-2">
												<p>IBAN</p>
												<p class="ml-2">{{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.account_number }}</p>
											</div>
											<div style="width:55%; border-bottom:2px solid #000;" class="p-2">
												<p>BIC</p>
												<p class="ml-2">Bank BIC : {{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.bic_number }}</p>
											</div>
										</div>

										<div class="d-flex">
											<div style="width: 18%; border-right:2px solid #000; border-bottom:2px solid #000;" class="p-2 text-end">
												Saaja Mottagare
											</div>
											<div style="width: 33%; border-bottom:2px solid #000; border-right:2px solid #000;" class="p-2">
												Way2Work Oy
											</div>
											<div style="width: 55%;" class="p-2"></div>
										</div>

										<div class="d-flex">
											<div style="width:18%; border-right:2px solid #000;" class="p-2 d-flex flex-column justify-content-between align-items-start position-relative">
												<div class="text-uppercase verticle-text ml-2">
													Tillisirato girering
												</div>
												<div class="ml-auto mb-5 table-text">
													Maksaja Betalare
												</div>
												<div class="ml-auto table-text">
													Allekirjoitus Underskrift
												</div>
											</div>

											<div class="d-flex flex-column justify-content-between p-2" style="width:33%; border-right:2px solid #000;">
												<div class="p-2">
													Customer details
													<p>Full Name : {{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.user && singleInformationInvoice.seeker.user.full_name }}</p>
													<p>Email : {{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.user && singleInformationInvoice.seeker.user.email }}</p>
													<p>Phone Number : {{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.user && singleInformationInvoice.seeker.user.mobile }}</p>
													<p>Gender : {{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.user && singleInformationInvoice.seeker.user.gender }}</p>
													<p>DOB : {{ singleInformationInvoice.seeker && singleInformationInvoice.seeker.user && dateFormat(singleInformationInvoice.seeker.user.dob) }}</p>
												</div>
												<!-- <div class="border-bottom mb-4 border-dark border-2"></div> -->
											</div>
											<div style="width:55%;border-top:2px solid #000;" class="d-flex align-items-end">
												<div style="width:32%; border-right:2px solid #000;border-top:2px solid #000;" class="p-2">
													Vitenro Ref. nr
												</div>
												<div style="width:86%;border-top:2px solid #000;" class="p-2">Reference Number : {{ singleInformationInvoice.ref_number }}</div>
											</div>
										</div>

										<div style="border-top:2px solid #000;">
											<div class="d-flex">
												<div class="p-2 text-end" style=" width:18%;border-right:2px solid #000; border-bottom:2px solid #000;">
													<p>Tilita nrop</p>
													<p>Fran konto nr</p>
												</div>
												<div class="p-2" style=" width:33%;border-right:2px solid #000; border-bottom:2px solid #000;"></div>
												<div class="p-2" style="width:10%;border-right:2px solid #000; border-bottom:2px solid #000;">
													Erapaiva Forf.dag
												</div>
												<div class="p-2 d-flex justify-content-center align-items-center" style="width:20%;border-right:2px solid #000; border-bottom:2px solid #000;">
													Due date :
													{{ dateFormat(singleInformationInvoice.due_date) }}
												</div>
												<div class="p-2" style="width:25%; border-bottom:2px solid #000;">
													<p>Summa</p>
													<p class="text-center">Total : {{ singleInformationInvoice.sub_total }}</p>
												</div>
											</div>
										</div>

										<div class="d-flex align-items-center my-3">
											<div class="barcode-text">
												<p class="d-flex align-items-center justify-content-center">
													Barcode here
												</p>
											</div>
											<div>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit magnam tempore quia, praesentium consequuntur fuga id! Rerum mollitia, dolorum ab,
													illum accusamus inventore dolores voluptas, similique quidem aperiam porro beatae.
												</p>
											</div>
										</div>
									</div>
								</div>

								<!-- <div class="go__back position-absolute top-50 start-50 translate-middle shadow" v-if="!singleInformationInvoice.approved">
									<a class="banner-back d-inline-block">
										<div class="d-flex align-items-center">
											<div class="back-icon d-flex align-items-center justify-content-center text-light">
												<FontAwesomeIcon :icon="leftArrowIcon" />
											</div>
											<div class="back-text">
												<span class="ml-2 mr-5">
													Back
												</span>
											</div>
										</div>
									</a>
								</div> -->
							</div>
						</div>
					</div>
				</section>
			</template>
		</vue3-html2pdf>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import Vue3Html2pdf from 'vue3-html2pdf';
import { dateFormat } from '@/utils/mixins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faChevronUp, faEdit, faInfo, faLongArrowAltLeft, faLongArrowAltRight, faEye } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'InvoiceViewPdf',

	props: {
		singleInformationInvoice: Object,
	},

	components: {
		Vue3Html2pdf,
		FontAwesomeIcon,
	},
	created() {
		this.$nextTick(() => {
			// window.scrollTo(0, 0);
			this.$refs.pdf.generatePdf();
			this.$emit('downloaded');
		});
	},
	setup() {
		//use useI18n
		const { t } = useI18n({ useScope: 'global' });
		const infoIcon = faInfo;
		const editIcon = faEdit;
		const leftArrowIcon = faLongArrowAltLeft;
		const rightArrowIcon = faLongArrowAltRight;
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const downIcon = faChevronDown;
		const upIcon = faChevronUp;
		const viewIcon = faEye;

		return {
			t,
			dateFormat,

			// icon
			infoIcon,
			editIcon,
			leftArrowIcon,
			rightArrowIcon,
			arrowDown,
			arrowUp,
			downIcon,
			upIcon,
			viewIcon,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.document__list {
	.attachment-table {
		.border-table {
			background-color: red;
		}
	}

	.logo-fi {
		width: 200px;
		height: 55px;
	}

	.arrow-width {
		img {
			width: 50px;
		}
	}

	.grey-box {
		background-color: #f6f6f6;
		border-radius: 20px;

		.grey-col-p {
			padding: 20px;

			&::after {
				content: '';
				background-image: url('~@/assets/images/myResumesImg.svg');
				background-repeat: no-repeat;
				background-size: contain;
				width: 150px;
				height: 100%;
				position: absolute;
				top: 0;
				right: 0;

				@media (max-width: 576px) {
					width: 60px;
				}
			}
		}

		.bg-black {
			background-color: rgb(77, 22, 22);
			border-radius: 50px;
			padding: 20px;

			.info-icon {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.piggi-wrap {
				width: 100px;
				height: 100px;
				position: absolute;
				right: -12px;
				bottom: 15px;
			}
		}
	}

	.red-box {
		background-color: #ff4b57;
		color: #fff;
		border-radius: 25px;
		box-shadow: 1px 1px 10px 2px rgba(204, 204, 204, 0.55);
		padding: 22px;
		position: relative;
		height: calc(100% - 55px);

		&::after {
			background-position: bottom right;
			content: '';
			background-image: url('~@/assets/images/invoice-red-box-puzzle.svg');
			background-size: contain;
			position: absolute;
			bottom: 0px;
			right: 0px;
			// transform: translate(5px, 0px);
			width: 330px;
			height: 330px;
			background-repeat: no-repeat;

			@media (max-width: 576px) {
				right: -40px;
				width: 200px;
			}
		}

		&::before {
			background-position: bottom right;
			content: '';
			background-image: url('~@/assets/images/payment-img.png');
			background-size: contain;
			position: absolute;
			bottom: 20px;
			right: 20px;
			width: 150px;
			height: 160px;
			background-repeat: no-repeat;
			z-index: 1;

			@media (max-width: 576px) {
				width: 90px;
			}
		}
	}

	.red-puzzle {
		background-color: #ff4b57;
		border-radius: 20px;
		padding: 50px;
		width: calc(100% - 50px);

		&::after {
			content: '';
			background-image: url('~@/assets/images/invoice-puzzle.png');
			background-size: contain;
			position: absolute;
			bottom: 0;
			right: 0;
			transform: translate(-30px, 0);
			width: 110px;
			height: 200px;
			background-repeat: no-repeat;
			z-index: 1;
		}

		&::before {
			content: '';
			position: absolute;
			top: 50%;
			right: 0;
			transform: translate(40px, -50%);
			width: 50px;
			height: 50px;
			background-color: #ff4b57;
			border-radius: 50px;
		}
	}

	.red-2-puzzle {
		background-color: #ff4b57;
		border-radius: 20px;
		padding: 50px;
		height: 100%;
		width: calc(100% - 50px);
	}

	.address-text {
		max-width: 200px;
	}

	.info-icon {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		background-color: #fff;
	}

	.pph-left-box {
		padding: 19px;
		border-radius: 25px;
		background-color: #f9f9f9;
		height: calc(100% - 61px);
		overflow: hidden;
		box-shadow: 0px 0px 10px 2px rgba(204, 204, 204, 0.55);

		.company-content {
			padding: 10px 0;

			.company-text {
				display: flex;
				margin-bottom: 5px;

				@media (max-width: 576px) {
					display: block;
				}

				.company-titel {
					flex-basis: 160px;
					font-size: 12px;
					color: #858a90;
				}
			}

			.company-value {
				font-size: 12px;
				margin-bottom: 5px;
				font-weight: 500;
				color: #626262;
				-width: 320px;
			}
		}

		.company-sub-content {
			padding: 19px;
			border-radius: 20px;
			background-color: #f2f2f2;
		}
	}
}

.title-sm {
	font-size: 13px;
}

.verticle-text {
	transform: rotate(-90deg);
	position: absolute;
	top: 0;
	left: 0px;
	width: 126px;
	height: 100%;
	font-size: 10px;
	text-align: center;
	font-weight: 500;
}

.red-box-common {
	.prof-bg-puzzle {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		display: block;

		img {
			width: 100%;
			height: 100%;
		}
	}

	p,
	span,
	div {
		z-index: 1;
		position: relative;
	}

	.invoice-content {
		max-width: 250px;
		width: 100%;
	}

	.invoice-value {
		max-width: 120px;
		width: 100%;
	}
}

.bottom-header {
	background-color: $coloRed;
	padding: 10px;
	border-radius: 5px;

	@media (max-width: 768px) {
		min-width: 650px;
	}
}

.max-w-300 {
	max-width: 300px;

	@media (max-width: 1024px) {
		max-width: 200px;
	}
}

// .save-icon {
// 	max-width: 50px;
// 	width: 100%;
// 	@media (max-width: 576px) {
// 		display: none;
// 	}
// }

.table-text {
	max-width: 67px;
}

.barcode-text {
	max-width: 800px;
	width: 100%;
}

.blur-overlay {
	filter: blur(3px);
	cursor: not-allowed;
	user-select: none;
}

.no-blur-overlay {
	filter: blur(0px);
}

.border-dash {
	border-bottom: 2px dashed rgb(26, 21, 21);
	line-height: 45px;
	position: relative;

	&:after {
		content: '';
		background-image: url('~@/assets/images/scissors.svg');
		background-size: contain;
		height: 30px;
		width: 30px;
		position: absolute;
		top: -14px;
		left: 0;
		background-repeat: no-repeat;
		transform: rotate(90deg);
	}
}

.large-table {
	table {
		tr {
			th {
				padding: 14px 7px;
				font-size: 10px;
				font-weight: 600;

				&:first-child {
					border-bottom-left-radius: 10px;
					border-top-left-radius: 10px;
				}

				&:last-child {
					border-bottom-right-radius: 10px;
					border-top-right-radius: 10px;
				}

				border-right: transparent;
			}

			td {
				border-right: transparent;
				padding: 14px 7px;
			}
		}

		tbody {
			font-size: 10px !important;
		}
	}
}

.viewinvoicetable {
	color: #000;
	font-weight: 500;
	font-size: 11px;
	border: 2px solid #000;
}

.tbl-status {
	.sts-wait {
		background-color: #000;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
		color: #fff;
		padding: 10px 20px;
		border-radius: 50px;
		z-index: 1;
		position: relative;
	}
}

.title-lg {
	font-size: 12px;
	font-weight: 600;
}

.text-md-fw {
	font-size: 12px;
	font-weight: 500;
}

.text-sm-fw {
	font-size: 12px;
	font-weight: 500;
}

.title-head {
	font-size: 22px;
	font-weight: 500;
}

.pph-wrapper,
.red-wrapper {
	height: 100%;
}

.pph-left {
	h5 {
		font-size: 16px;
	}
}
</style>
<style lang="scss">
.document__list {
	.data__table {
		&.detail-table {
			.table__data {
				min-height: auto !important;
				height: 100%;

				table {
					tbody {
						font-size: 10px;
					}
				}
			}
		}
	}
}

.page-break {
	page-break-after: always;
}
</style>

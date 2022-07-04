<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container add_employer__modal"
		content-class="modal-content"
	>
		<div class="model">
			<!-- title -->
			<h1 class="attachments">Invoice Team</h1>

			<!-- close btn -->
			<div class="close-icone" @click="closeModal">
				<FontAwesomeIcon :icon="clodeicone" />
			</div>

			<!-- form field -->
			<div>
				<div class="select-file">
					<div class="row">
						<div class="form-group col-xl-12">
							<label for="selectgroup">
								<span class="input-title">Group Name</span>
							</label>
							<div
								class="
									dropdown
									select-employee
									d-flex
									align-items-center Invoice-model-dropdown
								"
							>
								<button
									class="
										btn
										dropdown-toggle
										btn-common
										form-control form-model
										tbl-drop
										invoice-dropdown
									"
									type="button"
									id="GroupName"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<FontAwesomeIcon
										:icon="downArrowIcon"
										class="ms-auto"
									/>
								</button>

								<ul
									class="dropdown-menu"
									aria-labelledby="dropdownMenuButton1" style="position: absolute; transform: translate(0 , 0) !important;"
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

								<div class="ms-3">
									<button
										class="btn-common btn-red"
										@click="closeModal"
									>
										Add Member
									</button>
								</div>
							</div>
						</div>

						<!-- <div class="col-xl-6 col-lg-6">
							<div class="d-flex align-items-center mt-3">
								<div class="info-2">
									<img src="@/assets/images/info-2.svg" class="img-fluid" alt="">
								</div>
								<p class="text-gray ms-2">Before Previewing the salary as percentage you need to finish the invoice.</p>
							</div>
                        </div> -->

						<div class="col-xl-6">
							<div class="row">
								<div class="col-xl-6">
									<ul>
										<li class="input-title">Member name</li>
										<li class="input-title team-text">-</li>
										<li class="team-text">-</li>
										<li class="team-text">-</li>
									</ul>
								</div>

								<div class="col-xl-6">
									<ul>
										<li class="input-title">Email</li>
										<li class="team-text">-</li>
										<li class="team-text">-</li>
										<li class="team-text">-</li>
									</ul>
								</div>
							</div>
						</div>

						<div class="col-xl-5">
							<div class="row">
								<!-- <div class="col-xl-6">
									<ul>
										<li class="input-title">Salary</li>
										<li class="input-title team-text lh-lg">
											<button class="salary-btn">
												<div>
													<span class="text-gray">€</span><span class="fw-bolder">0</span>
												</div>
												<div class="dropdown select-employee ">
													<button
														class="btn dropdown-toggle btn-common tbl-drop salary-dropdown"
														type="button"														
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														%
														<FontAwesomeIcon :icon="downArrowIcon" class="ms-3 drop-font" />
													</button>
													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuButton1"
													>
														<li>
															<a class="dropdown-item" href="#"
																>%
																</a
															>
														</li>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
													</ul>
												</div>
											</button>
										</li>
										<li class="input-title team-text lh-lg">
											<button class="salary-btn">
												<div>
													<span class="text-gray">€</span><span class="fw-bolder">0</span> 
												</div>
												<div class="dropdown select-employee ">
													<button
														class="btn dropdown-toggle btn-common tbl-drop salary-dropdown"
														type="button"														
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														%
														<FontAwesomeIcon :icon="downArrowIcon" class="ms-3 drop-font" />
													</button>
													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuButton1"
													>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
													</ul>
												</div>
											</button>
										</li>
										<li class="input-title team-text lh-lg">
											<button class="salary-btn">
												<div>
													<span class="text-gray">€</span><span class="fw-bolder">0</span>
												</div>
													
													
												<div class="dropdown select-employee ">
													<button
														class="btn dropdown-toggle btn-common tbl-drop salary-dropdown"
														type="button"														
														data-bs-toggle="dropdown"
														aria-expanded="false"
													>
														%
														<FontAwesomeIcon :icon="downArrowIcon" class="ms-3 drop-font" />
													</button>
													<ul
														class="dropdown-menu"
														aria-labelledby="dropdownMenuButton1"
													>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
														<li>
															<a class="dropdown-item" href="#"
																>%</a
															>
														</li>
													</ul>
												</div>
											</button>
										</li>
									</ul>
								</div> -->

								<!-- <div class="col-xl-6">
									<ul>
										<li class="input-title">Preview</li>
										<li class="team-text">0€</li>
										<li class="team-text">0€</li>
										<li class="team-text">0€</li>
									</ul>
								</div> -->
							</div>
						</div>
					</div>
				</div>

				<!-- add btn -->
				<div class="text-center mt-5">
					<button class="btn-common btn-red" @click="closeModal">
						Add
					</button>
				</div>
			</div>
		</div>
	</vue-final-modal>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faChevronDown,
	faPlus,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { ref } from '@vue/reactivity';
export default {
	name: 'AddTeamInvoiceModal',

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

		// file var
		const invoiceReceiptFile = ref(null);
		const invoiceReceiptFilePreview = ref('');
		const invoiceMultiFile = ref(null);
		const invoiceMultiFilePreview = ref('');

		// icons
		const clodeicone = faTimes;
		const downArrowIcon = faChevronDown;
		const plusIcon = faPlus;

		function closeModal() {
			modalShow.value = false;
		}

		/**
		 * Methods
		 * *******************************************************************
		 */
		// handle upload receipt file
		const handleInvoiceRecieptFile = (acceptedFiles) => {
			invoiceReceiptFile.value = acceptedFiles[0]; // store file
			formFieldsData.value.receiptFileField.value = acceptedFiles[0];

			// file preview
			invoiceReceiptFilePreview.value = ['image/png'].includes(
				acceptedFiles[0].type,
			)
				? URL.createObjectURL(acceptedFiles[0])
				: require('@/assets/images/iconWomanDraw.png');
		};

		// handle upload multi file
		const handleInvoiceMultiFile = (acceptedFiles) => {
			invoiceMultiFile.value = acceptedFiles[0]; // store file
			formFieldsData.value.multiFileField.value = acceptedFiles[0];

			// file preview
			invoiceMultiFilePreview.value = ['image/png'].includes(
				acceptedFiles[0].type,
			)
				? URL.createObjectURL(acceptedFiles[0])
				: require('@/assets/images/iconWomanDraw.png');
		};

		return {
			modalShow,
			// icons
			clodeicone,
			downArrowIcon,
			plusIcon,

			// file vars
			invoiceReceiptFile,
			invoiceMultiFile,
			invoiceReceiptFilePreview,
			invoiceMultiFilePreview,

			// methods
			closeModal,
			handleInvoiceRecieptFile,
			handleInvoiceMultiFile,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

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
	.plus {
		cursor: pointer;
		color: #ffff;
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		border-radius: 50%;
		background-color: #ff4b57;
		border: 4px solid #ffe4e6;
	}
	.salary-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		box-shadow: 0px 4px 8px #dcdada;
		// border: 1px solid  #a18d8d;
		border-radius: 10px;
		padding: 3px 10px;
		width: 85%;
		.salary-dropdown {
			border-radius: 10px;
			background-color: #fbfbfb;
			padding: 2px 8px;
		}
		.dropdown-toggle::after {
			display: none;
		}
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
	.info-2 {
		width: 120px;
	}
	.team-text {
		font-size: 14px;
		color: #858a90;
		font-weight: 500;
		line-height: 41px;
	}
	.text-gray {
		color: #858a90;
		font-size: 14px;
		font-weight: 500;
	}
	.drop-font {
		font-size: 12px;
		color: #696d72;
	}
	.btn-common {
		white-space: nowrap;
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
	// min-height: 50px;
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
	height: 50px;
	width: 80%;
	border-radius: 25px;
	display: flex;
	align-items: center;
	padding: 10px 20px;
	&:focus {
		box-shadow: none;
	}
	&:after {
		display: none;
	}
}
.dropdown-menu {
	width: 80%;
	transform: translate(0px, 52px);
}
.Invoice-model-dropdown{
	.dropdown-menu{
		inset: 100% auto auto 0 !important;
		transform: translateX(0) !important;	
	}
}

</style>

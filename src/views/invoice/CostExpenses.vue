<template>
	<div
		class="go__back">
		<div class="banner-back">
			<span class="pe-3">
				<div class="back-text">
					<router-link to="/invoices/add" class="d-flex align-items-center">
						<div class="back-icon">
							<FontAwesomeIcon
								:icon="leftArrowIcon"
							/>
						</div>
						Back 
					</router-link>
				</div>
			</span>
		</div>
	</div>

	<div class="invoice__list">
		<div class="invoice-sec invoice-pd">
			<div class="row">
				<div class="col-xl-6">
					<div class="pph-left">
						<h5 class="title-lg mb-2">Trip Details</h5>
					</div>
					<div class="pph-left-box">
						<div class="row">
							<!-- trip Name -->
							<div class="col-md-12 form-group">
								<label for="tripName" class="company-titel">Trip Name</label>
								<input id="tripName" type="text" class="form-control" placeholder="Enter Full Name">
							</div>
							<!-- trip Name -->

							<div class="col-md-6">
								<div class="col-md-12 form-group p-0">
									<div class="position-relative">
										<label for="firstName" class="company-titel">Vehicle Class</label>
										<div class="position-relative">
											<input id="vehicleClass" type="text" class="form-control" placeholder="Enter Full Name">	
											<div
												class="calender-icon d-flex justify-content-center align-items-center position-absolute"
											>
												<FontAwesomeIcon
													:icon="calenderIcon"
													class="text-sm"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-6">
								<div class="col-md-12 form-group p-0">
									<div class="position-relative">
										<label for="name" class="company-titel">Trip Name</label>
										<div class="position-relative">
											<input id="nameTrip" type="text" class="form-control" placeholder="Enter Full Name">	
											<div
												class="calender-icon d-flex justify-content-center align-items-center position-absolute"
											>
												<FontAwesomeIcon
													:icon="calenderIcon"
													class="text-sm"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<label for="firstName" class="company-titel">Trip Starting date</label> 
								<div class="form-group dropdown select-employee">
									<div>
										<button
											class="btn dropdown-toggle
											tbl-drop invoice-dropdown"
											type="button"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											2hrs
											<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
										</button>
										<ul
											class="dropdown-menu"
											aria-labelledby="dropdownMenuButtonArira1"
										>
											<li>
												<a class="dropdown-item" href="#"
													>2 hrs</a
												>
											</li>
											<li>
												<a class="dropdown-item" href="#"
													>3 hrs</a
												>
											</li>
											<li>
												<a class="dropdown-item" href="#"
													>4 hrs</a
												>
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div class="col-md-8 pe-4">
								<div class="form-group p-0">
									<label for="firstName" class="company-titel">Trip Starting date</label>
									<div class="">
										<div class="row start-time-drop">
											<div class="col-6 p-1">
												<div class="dropdown select-employee">
													<div>
														<button
															class="btn dropdown-toggle
															tbl-drop invoice-dropdown grey-invoice-drop"
															type="button"
															id="dropdownMenuButton2"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															2hrs
															<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
														</button>
														<ul
															class="dropdown-menu"
															aria-labelledby="dropdownMenuButtonAria2"
														>
															<li>
																<a class="dropdown-item" href="#"
																	>2 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>3 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>6 hrs</a
																>
															</li>
														</ul>
													</div>
												</div>
											</div>

											<div class="col-6 p-1">
												<div class="dropdown select-employee">
													<div>
														
														<button
															class="btn dropdown-toggle
															tbl-drop invoice-dropdown grey-invoice-drop"
															type="button"
															id="dropdownMenuButton3"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															30 mins
															<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
														</button>
														<ul
															class="dropdown-menu"
															aria-labelledby="dropdownMenuButtonAria3"
														>
															<li>
																<a class="dropdown-item" href="#"
																	>2 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>5 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>7 hrs</a
																>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-4">
								<label for="firstName" class="company-titel">Trip Ending date</label> 
								<div class="form-group dropdown select-employee">
									<div>
										<button
											class="btn dropdown-toggle
											tbl-drop invoice-dropdown"
											type="button"
											id="dropdownMenuButton4"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											2hrs
											<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
										</button>
										<ul
											class="dropdown-menu"
											aria-labelledby="dropdownMenuButtonAria4"
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
							</div>

							<div class="col-md-8 pe-4">
								<div class="form-group p-0">
									<label for="firstName" class="company-titel">Ending date</label>
									<div>
										<div class="row start-time-drop">
											<div class="col-6 p-1">
												<div class="dropdown select-employee">
													<div>
														<button
															class="btn dropdown-toggle
															tbl-drop invoice-dropdown grey-invoice-drop"
															type="button"
															id="dropdownMenuButton5"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															2hrs
															<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
														</button>
														<ul
															class="dropdown-menu"
															aria-labelledby="dropdownMenuButtonAria5"
														>
															<li>
																<a class="dropdown-item" href="#"
																	>2 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>3 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>6 hrs</a
																>
															</li>
														</ul>
													</div>
												</div>
											</div>

											<div class="col-6 p-1">
												<div class="dropdown select-employee">
													<div>
														
														<button
															class="btn dropdown-toggle
															tbl-drop invoice-dropdown grey-invoice-drop"
															type="button"
															id="dropdownMenuButton6"
															data-bs-toggle="dropdown"
															aria-expanded="false"
														>
															30 mins
															<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
														</button>
														<ul
															class="dropdown-menu"
															aria-labelledby="dropdownMenuButtonAraia6"
														>
															<li>
																<a class="dropdown-item" href="#"
																	>2 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>5 hrs</a
																>
															</li>
															<li>
																<a class="dropdown-item" href="#"
																	>7 hrs</a
																>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="col-md-4 col-6">
								<label for="firstName" class="company-titel">Ending date</label>
								<p class="trip-text">18minutes</p>
							</div>

							<div class="col-md-4 col-6">
								<label for="firstName" class="company-titel">Total distance</label>
								<p class="trip-text">10.2 kilometers</p>
							</div>

							<div class="col-md-4 p-1">
								<div class="pph-right">
									<button
										class="btn-common btn-red d-flex align-items-center btn-padding"
										@click="toogleAttachmentViewModal"
									>
										<FontAwesomeIcon :icon="paperClipIcon" />
										Attachments
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			
				<div class="col-xl-6">
					<div class="pph-left">
						<h5 class="title-lg mb-2">Preview</h5>
					</div>
					<div class="cost-ex-map">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141630.97994416903!2d72.74798545582003!3d21.12130634363884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1637217170154!5m2!1sen!2sin" width="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
					</div>
				</div>
			</div>
		</div>

		<div
			class="cost-sec py-2 px-3 d-xl-flex align-items-center justify-content-between pb-2"
		>
			<div class="d-md-flex align-items-center">
				<div class="info-icon"> 
					<img
						src="@/assets/images/info.svg"
						class="img-fluid"
						alt="infoError"
					/>
				</div>

				<p class="mx-2">
					Did You know? You can affect Your allowances with more specific details.
				</p>
			</div>

			<button
				class="cost-btn fw-bold d-flex align-items-center justify-content-between"
				@click="viewCostExpenses"
			>
				Fill Details
				<div
					class="right-icon rounded-circle d-flex align-items-center justify-content-center ms-3"
				>
					<FontAwesomeIcon v-if="isBottomSectionExpaned" :icon="rightIcon" />
					<FontAwesomeIcon v-else :icon="bottomIcon" />
				</div>
			</button>
		</div>

		<div class="invoice-pd detail-sec" :class="{ 'd-none': !isBottomSectionExpaned }">
			<div class="row">
				<div class="col-xl-1 col-md-2 col-12">
					<label for="firstName" class="company-titel">Distance</label>
					<h5 class="text-grey">11,2km</h5>
				</div>

				<div class="col-xl-3 col-md-5 col-6">
					<label for="firstName" class="company-titel">Vehicle registration number</label>

					<div class="input-group">
						<div class="input-group-text">
							<input class="form-check-input mt-0" type="radio" aria-label="Radio button for following text input">
						</div>
						<input type="number" class="form-control form-grey-input text-center" placeholder="-" aria-label="Text input with radio button">
					</div>

				</div>

				<div class="col-xl-3 col-md-5 col-6 form-group">
					<label for="firstName" class="company-titel">Vehicle Class</label>
					<input id="vehicleClass" type="text" class="form-control invoice-dropdown form-grey-input">
				</div>

				<div class="col-xl-5 col-md-12 col-12">
					<label for="firstName" class="company-titel">Additional Options</label> 
					<!-- <label for="firstName" class="company-titel">Vehicle Class</label>  -->
					<div class="d-flex">
						<div class="form-group dropdown select-employee w-100">
							<div>
								<button
									class="btn dropdown-toggle
									tbl-drop invoice-dropdown form-grey-input"
									type="button"
									id="dropdownMenuButton7"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Select
									<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
								</button>
								<ul
									class="dropdown-menu "
									aria-labelledby="dropdownMenuButtonAria7"
								>
									<li>
										<a class="dropdown-item" href="#"
											>Own Car</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Motorcycle</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Bicycle</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Motorcycle</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Bicycle</a
										>
									</li>
								</ul>
							</div>
						</div>
						<div class="form-group dropdown select-employee additional-dropdown ml-3 w-100">
							<div>
								<button
									class="btn dropdown-toggle
									tbl-drop invoice-dropdown form-grey-input transparent-input"
									type="button"
									id="dropdownMenuButton8"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Select
									<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto" />
								</button>
								<ul
									class="dropdown-menu"
									aria-labelledby="dropdownMenuButtonAria8"
								>
									<li>
										<a class="dropdown-item" href="#"
											>Own Car</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Motorcycle</a
										>
									</li>
									<li>
										<a class="dropdown-item" href="#"
											>Bicycle</a
										>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-2 col-md-5 col-5">
					<div>
						<span class="prof-bg-puzzle">
							<img src="/img/prof-red-r.9eaadf30.png" alt="" class="prof-red-t-right">
						</span>
						<div class="puzzle-text">
							<h6>Extras</h6>
						</div>
					</div>
				</div>

				<div class="col-xl-3 col-md-7 col-7">
					<div class="d-flex flex-column justify-content-center h-100">
						<div class="form-check form-checkbox">
							<input class="form-check-input form-checkbox-width" type="checkbox" value="" id="flexCheckDefault-1">
							<label class="form-check-label extras-font" for="flexCheckDefault-1">
								Transported heavy load
							</label>
						</div>

						<div class="form-check form-checkbox">
							<input class="form-check-input form-checkbox-width" type="checkbox" value="" id="flexCheckChecked-2">
							<label class="form-check-label extras-font" for="flexCheckChecked-2">
								Driven in rough terrain
							</label>
						</div>

						<div class="form-check form-checkbox">
							<input class="form-check-input form-checkbox-width" type="checkbox" value="" id="flexCheckChecked-3">
							<label class="form-check-label extras-font" for="flexCheckChecked-3">
								Transported Workdog
							</label>
						</div>
					</div>
				</div>

				<div class="col-xl-2 col-5">
					<div>
						<span class="prof-bg-puzzle">
							<img src="@/assets/images/light-grey-puzzle.png" alt="" class="prof-red-t-right">
						</span>
						<div class="puzzle-text text-dark">
							<h6 class="fw-bold">Total Summary</h6>
						</div>
					</div>
				</div>
				
				<div class="col-xl-3 col-7">
					<div class="d-flex flex-column justify-content-center h-100">
						<p class="summary-text">1*(0.46 + 0.007 + 0.03 + 0.09 + 0.03 )</p>
						<h1 class="text-light-grey">7,39€</h1>
					</div>
				</div>

			</div>

			<div class="invoice-grey-sec">
				<div class="row">
					<div class="col-md-12 form-group">
						<label for="firstName" class="company-titel">Work Description</label> 
						<textarea class="form-control" id="pro_summary" spellcheck="false"></textarea>
					</div>

					<div class="col-md-4 form-group">
						<label for="Lunch Compensation" class="company-titel">Lunch Compensation</label> 
						<div class="form-control d-flex">
							<p>€</p>
							<input id="Lunch Compensation" type="number" placeholder="€" value="0" class="input-area">
						</div>
					</div>

					<div class="col-xl-4 col-md-6 form-group  mb-3">
					<label for="Lunch Compensation" class="company-titel">Full /Half day /Other Compensation</label> 
						<div class="form-control d-flex align-items-center">
							<p>€</p>
							<input type="text" class="input-area p-0" aria-label="Text input with dropdown button" value="0" >
							<button class="btn dropdown-toggle grey-drop tbl-drop" type="button" data-bs-toggle="dropdown" aria-expanded="false">other</button>
							<ul class="dropdown-menu dropdown-menu-end">

								<li>
									<a class="dropdown-item" href="#">Action</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">Another action</a>
								</li>
								<li>
									<a class="dropdown-item" href="#">Something else here</a>
								</li>

							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>


		<div class="invoice-pd invoice-receipt">
			<div  class="pph-left">
				<h5 class="title-lg mb-2">Receipts</h5>
			</div>

			<div class="row">

				<!-- trip Name -->
				<div class="col-xl-3 col-6 form-group">
					<label for="placeOfPurchase" class="input-title">Place of Purchase</label>
					<input id="placeOfPurchase" type="text" class="form-control form-grey-input">
				</div>
				<!-- trip Name -->

				<div class="col-xl-3 col-6 form-group">
					<label for="description" class="input-title">Description</label>
					<input id="description" type="text" class="form-control form-grey-input">
				</div>

				<div class="col-xl-2 col-4 form-group">
					<label for="total" class="input-title">Total</label>
					<input id="total" type="text" class="form-control form-grey-input">
				</div>

				<div class="col-xl-2 col-4 form-group">
					<label for="vatselect" class="w-full" >
						<span class="input-title" >VAT%</span>
					</label>
					<button
						class="btn dropdown-toggle 
						tbl-drop invoice-dropdown form-grey-input vat-drop"
						type="button"
						id="dropdownMenuButton9"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
					
						<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto text-gray" />
					</button>
					<ul
						class="dropdown-menu"
						aria-labelledby="dropdownMenuButtonAria91"
					>
						<li>
							<a class="dropdown-item" href="#"
								>10%</a
							>
						</li>
						<li>
							<a class="dropdown-item" href="#"
								>15%</a
							>
						</li>
						<li>
							<a class="dropdown-item" href="#"
								>50%</a
							>
						</li>
					</ul>
				</div>

				<div class="col-xl-2 col-4 form-group">
					<label for="firstName" class="input-title">VAT free</label>
					<p class="input-title">0€</p>
				</div>

				<div class="col-xl-3 col-3 form-group">
					<label for="firstName" class="input-title">Date of Purchase</label>
					<button
						class="btn dropdown-toggle 
						tbl-drop invoice-dropdown form-grey-input"
						type="button"
						id="dropdownMenuButton10"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
					
						<FontAwesomeIcon :icon="downArrowIcon" class="ms-auto text-gray" />
					</button>
					<ul
						class="dropdown-menu"
						aria-labelledby="dropdownMenuButtonArai10"
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

				<div class="col-xl-7 col-9">
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
												:src="invoiceReceiptFilePreview"
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

		<div class="invoice-pd add-row">
			<div class="pph-left">
				<p class="title-sm add-text">You can add new row by clicking + in the right bottom corner</p>
			</div>
				<span class="border-top w-100 mx-2"></span>
			<div class="plus">
				<FontAwesomeIcon :icon="plusIcon" @click="addNewWorkDetail"/>
			</div>
		</div>

		<div class="row no-gutters m-n2">
			<div class="p-1 col-xl-4 col-12">
				<div class="summary-box">
					<h1>Total Summary Calculations</h1>
					<div class="d-flex">
						<h1 class="border-bottom summary-calc ml-auto mt-5 text-right d-inline-block ml-auto">{{ totalSummaryCalculations }}€</h1>
					</div>
				</div>
			</div>
			<div class="p-1 col-xl-8 col-12">
				<div class="dark-box">
					<div class="row no-gutters">
						<div class="col-md-6 col-12">
							<ul>
								<li class="fw-bold dark-box-text lh-lg">Allowances</li>
								<li class="dark-box-text lh-lg">Full day allowances</li>
								<li class="dark-box-text lh-lg">part day allowances</li>
								<li class="dark-box-text lh-lg">Food allowances</li>
								<li class="dark-box-text lh-lg">Kilometer allowances</li>
							</ul>
						</div>
						<div class="col-md-4 col-6">
							<ul>
								<li class="fw-bold dark-box-text lh-lg">Amount</li>
								<li class="dark-box-text lh-lg">
									<input type="text" class="dark-box-input" value="0">
								</li>
								<li class="dark-box-text lh-lg">
									<input type="text" class="dark-box-input" value="0">
								</li>
								<li class="dark-box-text lh-lg">									
									<input type="text" class="dark-box-input" value="0">
								</li>
								<li class="dark-box-text lh-lg">
									<input type="text" class="dark-box-input" value="1*(0,44+0,07+0,03+0,09+0,03)">
								</li>
							</ul>
						</div>
						<div class="col-md-2 col-6">
							<ul>
								<li class="fw-bold dark-box-text lh-lg">Sum</li>
								<li class="dark-box-text lh-lg">0,00 €</li>
								<li class="dark-box-text lh-lg">0,00 €</li>
								<li class="dark-box-text lh-lg">0,00 €</li>
								
							</ul>
						</div>
						
					</div>
				</div>
			</div>
		</div>

		<div class="text-center mt-5 pb-3" >
			<button class="btn-common btn-red" >Save</button>
		</div>
	</div>
	<!-- daily work hour list -->

	<!-- Add employer form -->
	<Suspense v-if="showAddAttachmentViewModal.value">
		<template #default>
			<AddAttachmentViewModal
				v-model:isModalShow="showAddAttachmentViewModal"
			/>
		</template>
	</Suspense>


</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AddAttachmentViewModal from '@/views/invoice/components/AddAttachmentViewModal';
import { useI18n } from 'vue-i18n';
import { computed, onMounted, ref } from '@vue/runtime-core';
import {  faArrowDown, faArrowLeft, faArrowRight,faChevronDown,faMapMarkerAlt, faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';
export default {
	name: 'CostExpenses',

	components: {
		FontAwesomeIcon,
		AddAttachmentViewModal,
	},

	setup() {
		// ref
		const isAddAttachmentViewModalShow = ref(false);

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });
		const isBottomSectionExpaned = ref(true);

		// global store
		// const store = useStore(); // use state

		// global router
		// const router = useRouter();

		// icon
		const rightIcon = faArrowRight;
		const bottomIcon =	faArrowDown;
		const leftArrowIcon = faArrowLeft;
		const calenderIcon = faMapMarkerAlt;
		const downArrowIcon=faChevronDown;
		const paperClipIcon = faPaperclip;
		const plusIcon = faPlus;

		/**
		 * Mounted
		 * *******************************************************************
		 */

		onMounted(() => {});

		/**
		 * Computed
		 * *******************************************************************
		 */

		const showAddAttachmentViewModal = computed({
			get() {
				return isAddAttachmentViewModalShow;
			},

			set(val) {
				isAddAttachmentViewModalShow.value = val;
			},
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		const viewCostExpenses = () => {
			isBottomSectionExpaned.value = !isBottomSectionExpaned.value
		}

		const toogleAttachmentViewModal = () => {
			showAddAttachmentViewModal.value = true;
		};

		return {
			t,
			isBottomSectionExpaned,
			//form

			//method
			viewCostExpenses,
			toogleAttachmentViewModal,

			// computed
			showAddAttachmentViewModal,

			// icon
			rightIcon,
			bottomIcon,
			leftArrowIcon,
			calenderIcon,
			downArrowIcon,
			paperClipIcon,
			plusIcon
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';
.text-gray{
	color: #858a90;
}
.text-light-grey {
	color: #bbbfc4;
}
.summary-text{
	font-size: 13px;
	font-weight: 500;
}
.invoice-pd {
	padding: 10px 20px;
}
.dropdown-menu{
	padding: 15px;
	border: transparent;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
	border-radius: 15px;
	color: #949494;
}

.invoice__list {
	width: 100%;
	display: block;
	align-items: center;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0px 2px 5px #ccc;

	.text-gray {
		margin-bottom: 15px;
	}
	.cost-sec {
		background-color: #e92028;
		.info-icon {
			max-width: 50px;
			height: 50px;
			@media (max-width: 1200px) {
				max-width: 40px;
				height: 40px;
			}

			@media (max-width: 1024px) {
				max-width: 30px;
				height: 30px;
			}

			@media (max-width: 576px) {
				max-width: 30px;
				height: 30px;
			}
		}

		p {
			font-size: 21px;
			font-weight: 600;
			color: #fff;
			letter-spacing: -2px;
			text-shadow: 1px 3px 3px #494848;
			white-space: nowrap;

			@media (max-width: 1200px) {
				font-size: 17px;
				letter-spacing: -2px;
			}

			@media (max-width: 1024px) {
				font-size: 16px;
			}

			@media (max-width: 768px) {
				font-size: 16px;
			}

			@media (max-width: 576px) {
				font-size: 12px;
			}

		}
		.cost-btn {
			background-color: #4c4f56;
			padding: 7px 15px;
			color: #fff;
			border-radius: 50px;
			font-size: 14px;
			letter-spacing: -1px;
			white-space: nowrap;

			@media (max-width: 1200px) {
				padding: 7px 9px;
				font-size: 12px;
			}

			@media (max-width: 1024px) {
				font-size: 12px;
				padding: 6px 12px;
				margin: 10px 0 0;
				margin-left: auto;
			}

			@media (max-width: 768px) {
				font-size: 12px;
				padding: 6px 12px;
				margin: 10px 0 0;
				margin-left: auto;
			}
			.right-icon {
				width: 25px;
				height: 25px;
				border: 2px solid #fff;
			}
		}
	}
	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		width: 100%;
		border: 3px dashed #dde0e2;
		font-weight: 600;
		font-size: 14px;
		// color: #a0a4a9;
	}
	::placeholder {
		color: #a0a4a9;
	}
	.invoice-dropdown{
		background-color: #fff;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		border-radius: 15px;
		&:focus{
			box-shadow: none;
		}
	}
	.grey-invoice-drop{
		background-color: #f9f9f9;
		border-radius: 10px;
		padding:5px 15px;
	}
	.dropdown-toggle::after{
		display: none;
	}

	.start-time-drop{
		background-color: #fff;
		border-radius: 15px;
	}
	.add-row{
		display: flex;
		justify-content: space-between;
		align-items: center;

		.plus{
			cursor: pointer;
			color: #ffff;
			max-width: 50px;
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
			border-radius: 50%;
			background-color: #ff4b57;
			border: 4px solid #ffe4e6;

			@media (max-width: 1200px) {
				max-width: 30px;
				height: 30px;
			}
			@media (max-width: 576px) {
				max-width: 30px;
				height: 30px;
			}
		}

	}
}

.invoice__list {
	width: 100%;
	display: block;
	align-items: center;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0px 2px 5px #ccc;

	.trip-text{
		font-size: 14px;
		font-weight: 500;
	}
	.pph-left-box{
		padding: 19px;
		border-radius: 20px;
		background-color: #f9f9f9;

	}
	.pph-left {
		color: #a0a4a9;
		.title-lg{
			font-size: 20px;
		}
	}
	.company-titel{
		font-size: 13px;
		font-weight: 500;
		color: #858a90;
	}
	.form-control{
		padding: 10px 15px;
		background-color: #fff;
		border:none;
		height: unset;
		border-radius: 15px;
		position: relative;
	}
	.form-grey-input{
		background-color: #f9f9f9;
		border-radius: 50px;
	}

	.vat-drop{
		padding: 5px 10px;
	}
	.cost-ex-map iframe{
		width: 100%;
		min-height: 450px;
		border-radius: 10px;
	}

	.btn-padding{
		padding: 10px 14px;
		font-size: 13px;
	}

	.input-group{
		background: white;
		border-radius: 1rem;
	}

	.extras-font{
		font-size:15px;
		font-weight: 500;

		@media (max-width: 576px) {
			font-size: 14px;
		}

	}

	.input-group-text{
		border: none;
		background-color: rgb(60, 60, 199);
		color: #fff;
		border-bottom-left-radius: 50px;
		border-top-left-radius: 50px;
		padding: 10px 20px;

		.form-check{
			margin-bottom: 20px;
		}

		.form-check-input{
			background-color: transparent;
			margin-left: -6px;
			border: 1px solid rgb(90, 88, 88);

			input{
				margin-left: -6px;
			}

			&:checked{
				background-color:#fff;
				border-color: #fff;
			}
	
			&:focus{
				box-shadow: none;
			}
		
		}
		
	}

	.form-check-input:checked{
		background-color: #565e64;
		border-color: #565e64;
	}

	.form-check-input:focus{
		border-color: #565e64;
	}

	.form-checkbox{
		margin-bottom: 10px;

		.form-checkbox-width{
			width: 1.4em;
			height: 1.4em;
			margin:0 0 0 -30px;
			
			&:focus{
				box-shadow: none;
			}
		}
	}

	.prof-bg-puzzle{
		position: relative;
		display: block;
		img{
			width: 100%;
			height: 100%;
			position: relative;
			object-fit: contain;

		}
	}
	.puzzle-text{
		position: absolute;
		top: 40px;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #fff;

		@media (max-width: 1024px) {
			top: 50%;
		}

	
	}
	.detail-sec{
		padding: 19px;
		background-image: url('~@/assets/images/iconManPad.png');
		background-repeat: no-repeat;
		background-position:100% 16%;
		background-size: 21%;

		@media (max-width: 576px) {
			background-position: 100% 0%;
			background-size: 30%;
		}
	}
	.invoice-grey-sec{
		background-color: #f9f9f9;
		border-radius: 10px;
		padding: 19px;
		// background-image: url('~@/assets/images/use-icon.png');
		// background-repeat: no-repeat;
		// background-position: right bottom;
		// background-size: 20%;

		// @media (max-width: 1024px) {
		// 	background-position: 100% 90%;
		// 	background-size: 30%;
		// }
	}

	.calender-icon{
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translate(-50%,-50%);
	}

	.input-title{
		font-size: 16px;
		margin-bottom: 5px;
		font-weight: 500;
		color: #858a90;
		
	}

	.input-area{
		outline: none;
		border: none;
		width: 100%;
		background-color: transparent;
	}
	
	.input-pera{
		width: 100%;
		padding: 7px 10px;
		border-radius: 12px;
		border: 2px dashed #e4e6e7;
	}
	.invoice-receipt{
		padding: 19px;
		// background-image: url('~@/assets/images/open-gigs-icon.png');
		// background-repeat: no-repeat;
		// background-position: right bottom;
		// background-size: 20%;

		// @media (max-width: 1024px) {
		// 	background-position: 100%;
		// 	background-size: 27%;
		// }
	}
}
.add-text{
	white-space: nowrap;

	@media (max-width: 1200px) {
		font-size: 13px;
		white-space: nowrap;
	}

	@media (max-width: 576px) {
		font-size: 13px;
		white-space: nowrap;
	}
}

.summary-box{
	background-color: #e92028;
	color: #fff;
	padding: 20px;
	border-radius: 20px;
	height: 100%;

	@media (max-width: 1200px) {
		max-width: 320px;
		margin: 0 auto;
	}

	@media (max-width: 768px) {
		max-width: 320px;
		margin: 0 auto;
	}
	
	@media (max-width: 576px) {
		max-width: 320px;
		margin: 0 auto;
	}

	h1{
		font-weight: 600;
		font-size: 48px;
		letter-spacing:-3px;
		line-height: 41px;
		text-shadow: 1px 3px 3px #494848;

		@media (max-width:1440px) {
			font-size: 45px;
		}
	}
}
.dark-box{
	background-color: #4c4f56;
	color: #fff;	
	padding: 30px;
	border-radius: 20px;
	height: 100%;

	@media (max-width: 576px) {
		max-width: 320px;
		margin: 0 auto;
	}

	.dark-box-text{
		font-size: 19px;
		letter-spacing: -1px;
		text-shadow: 1px 3px 3px #494848;
		@media (max-width: 576px) {
			font-size: 14px;	
		}
	}

	.dark-box-input{
		background-color: #4c4f56;
		border: none;
		color: #fff;
		width: 80%;
	}

}
// .summary-calc{
// 	max-width: 150px;
// 	width: 100%;
// }
.dropdown-menu{
	width: 100%;
}
.transparent-input{
	opacity: 0.9;
}
.additional-dropdown{
	background-color: #fff;
	opacity: 0.9;
	border-radius: 50px;
}
.grey-drop{
	padding: 5px 10px;
	background-color: #f9f9f9;
	border-radius:10px;
	font-size: 13px;
	&:focus{
		box-shadow: none;
	}
}
.dropdown-item{
	&:hover{
		background-color: transparent;
		color: #ff4b57;
	}
}
</style>

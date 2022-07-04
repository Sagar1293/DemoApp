<template>
	<div class="workHourList">
		<!-- daily work hour list title -->
		<div class="employer-details py-3">
			<div>
				<h5 class="title-lg">{{ t('workDetails.dailyWorkDetails') }}</h5>
			</div>
		</div>

		<div class="daily-work-row large-table">
			<div class="daily-work-col">
				<!-- daily work hour list - column name -->
				<div class="details-head text-center">
					<div class="product-no text-left">
						<p class="details-head-text">{{ t('workDetails.productNo') }}</p>
					</div>
					<div class="days">
						<p class="details-head-text">{{ t('workDetails.days') }}</p>
					</div>
					<div class="discription">
						<p class="details-head-text">{{ t('workDetails.description') }}</p>
					</div>

					<div class="contract-type">
						<p class="details-head-text">{{ t('workDetails.type') }}</p>
					</div>

					<div class="contract-value">
						<p class="details-head-text">{{ t('workDetails.value') }}</p>
					</div>

					<div class="quantity">
						<p class="details-head-text">{{ t('workDetails.quantity') }}</p>
					</div>

					<div class="actions">
						<p class="details-head-text">{{ t('workDetails.actions') }}</p>
					</div>
				</div>

				<!-- daily work hout list - row -->
				<div v-for="(item, index) in workDetailList" :key="index">
					<!-- current expanded row -->
					<div v-if="expandRowIndex === index">
						<div class="details-content">
							<!-- serial no. -->
							<div class="product-width">
								<div class="product-1">
									<p class="inpult-area">{{ index + 1 }}</p>
								</div>
							</div>

							<div class="multiple-day d-flex justify-content-center">
								<div class="py-0" v-if="item.totalDays > 1">
									<span class="ml-2 d-inline bg-danger text-white multi-rounded">{{ item.totalDays }} </span>
								</div>
								<div class="work py-0" v-else>
									-
								</div>
							</div>
							<!-- desciption Field Input -->
							<div class="work-width ml-xl-0">
								<div class="work py-0">
									<input type="text" v-model="item.description" @change="e => editHandleContractValue(e, index, 'description')" class="form-control" />
								</div>
							</div>

							<!-- contract type -->
							<div class="hours-width">
								<div class="hours">
									<Multiselect
										id="contractType"
										class="form-group"
										@change="e => editHandleContractValue({ target: { value: e } }, index, 'contract_type')"
										v-model="item.contract_type"
										:options="contractTypeOptions"
										mode="single"
										:canDeselect="true"
									/>
								</div>
							</div>

							<!-- contract value -->
							<div class="contractvalue-width">
								<div class="totalamount">
									<p>€</p>
									<input
										type="number"
										min="0"
										v-model="item.contract_value"
										@change="e => editHandleContractValue(e, index, 'contract_value')"
										class="inpult-area"
										@input="checkInputNuberValue"
									/>
									<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
								</div>
							</div>

							<!-- quantity & unit -->
							<div class="totalamount-width">
								<div class="totalamount">
									<div class="mr-2 text-sm">
										<FontAwesomeIcon :icon="closeIcon" />
									</div>
									<!-- <p>x</p> -->
									<input
										type="number"
										min="0"
										v-model="item.total_work"
										@change="e => editHandleContractValue(e, index, 'total_work')"
										class="inpult-area"
										v-on:keypress="NumbersOnly"
										@input="checkInputNuberQty"
									/>
									<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
								</div>
							</div>

							<!-- actions -->
							<div class="buttons">
								<!-- copy work detail -->
								<ToolTip :title="t('toolTip.duplicateRecord')">
									<div class="copy-btn" :class="{ btnDisabled: isDublicateInvoiceDisable(index) }" @click="duplicateWorkDetail(index)">
										<FontAwesomeIcon :icon="copyIcon" />
									</div>
								</ToolTip>

								<!-- remove work detail -->
								<ToolTip :title="t('toolTip.deleteRecord')">
									<div class="delete-btn" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="removeWorkDetail(index)">
										<FontAwesomeIcon :icon="trashIcon" />
									</div>
								</ToolTip>
								<!-- expand work detail -->
								<ToolTip :title="t('toolTip.expantiate')">
									<div class="down-btn" v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item)">
										<FontAwesomeIcon :icon="downIcon" />
									</div>
								</ToolTip>

								<!-- expand work detail -->
								<ToolTip :title="t('toolTip.expantiate')">
									<div class="down-btn" v-if="index === expandRowIndex" @click="sinkWorkDetails">
										<FontAwesomeIcon :icon="upIcon" />
									</div>
								</ToolTip>

								<ToolTip :title="t('toolTip.tripButton')">
									<div class="down-btn ms-1" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="addWorkDetails(item.id, index, item)">
										<FontAwesomeIcon :icon="euroSign" />
									</div>
								</ToolTip>
							</div>
						</div>

						<!-- daily work hour list - row - expand -->
						<div class="opne-toggle" v-if="index === expandRowIndex">
							<div>
								<div class="row no-gutters m-n2">
									<div class="p-1 col-4">
										<div class="summary-box">
											<h1>{{ t('leInvoice.addInvoice.summaryCalculations') }}</h1>
										</div>
									</div>

									<!-- work detail expansion details -->
									<div class="p-1 col-8">
										<div class="dark-box">
											<div class="row no-gutters">
												<!-- allances title -->
												<div class="col-6">
													<ul>
														<!-- allowances -->
														<li class="fw-bold dark-box-text lh-lg">{{ t('workDetails.allowances') }}</li>

														<!-- part day allowances -->
														<li class="dark-box-text lh-lg">{{ t('workDetails.lunchCompensatio') }}</li>

														<!-- full day allowances -->
														<li class="dark-box-text lh-lg">{{ t('workDetails.fullHalfCompensation') }}</li>

														<!-- food allowances -->
														<li class="dark-box-text lh-lg">{{ t('workDetails.otherCompensation') }}</li>

														<!-- kilometer allowances -->
														<li class="dark-box-text lh-lg">{{ t('workDetails.kilometerAllowances') }}</li>
														<span v-if="item.distance">
															<li v-if="item.transported_heavyloads" class="dark-box-text lh-lg">{{ t('workDetails.transportedHeavyLoad') }}</li>
															<li v-if="item.driven_in_rough_terrain" class="dark-box-text lh-lg">{{ t('workDetails.Driveninroughterrain') }}</li>
															<li v-if="item.vehicle_subclass" class="dark-box-text lh-lg">{{ t('workDetails.Trailer') }}</li>
														</span>
														<!-- total -->
														<li class="dark-box-text lh-lg fw-bold">{{ t('workDetails.total') }}</li>
													</ul>
												</div>
												<!-- allowances amount -->
												<div class="col-4">
													<ul>
														<!-- amount - header -->
														<li class="fw-bold dark-box-text lh-lg">{{ t('workDetails.Amount') }}</li>
														<!-- part day allowances - amount -->
														<li class="dark-box-text lh-lg">
															€ {{ item.lunchCompensationAmount || 0 * item.totalDays || 0 }}
															<!-- <input type="number" class="dark-box-input" min="0" v-model="item.lunchCompensationAmount" placeholder="0" /> -->
														</li>
														<!-- full day allowances - amount -->
														<li class="dark-box-text lh-lg">
															€ {{ item.fullHalfDayCompensationAmount || 0 * item.totalDays || 0 }}
															<!-- <input class="dark-box-input" type="number" min="0" v-model="item.fullHalfDayCompensationAmount" placeholder="0" /> -->
														</li>
														<!-- food allowances - amount -->
														<li class="dark-box-text lh-lg">
															€ {{ item.otherCompensationAmount || 0 }}
															<!-- <input type="number" class="dark-box-input" min="0" v-model="item.otherCompensationAmount" placeholder="0" /> -->
														</li>
														<!-- kilometer allowances - amount -->
														<li class="dark-box-text lh-lg">
															€ {{ Number(item.distance * invoiceAllownceTracer.distanceAllownce * item.totalDays).toFixed(2) || 0 }}
															<!-- <input type="number" min="0" v-model="item.distance" placeholder="0" class="dark-box-input" /> -->
														</li>
														<span v-if="item.distance">
															<li v-if="item.transported_heavyloads" class="dark-box-text lh-lg">
																€
																{{
																	item.transported_heavyloads == true ? (invoiceAllownceTracer.transported_heavyloads * item.distance * item.totalDays).toFixed(2) : 0
																}}
															</li>

															<li v-if="item.driven_in_rough_terrain" class="dark-box-text lh-lg">
																€
																{{
																	item.driven_in_rough_terrain == true
																		? (invoiceAllownceTracer.driven_in_rough_terrain * item.distance * item.totalDays).toFixed(2)
																		: 0
																}}
															</li>

															<li v-if="item.vehicle_subclass" class="dark-box-text lh-lg">
																€ {{ item.vehicle_subclass == true ? (invoiceAllownceTracer.vehicle_subclass * item.distance * item.totalDays).toFixed(2) : 0 }}
															</li>
														</span>
													</ul>
												</div>

												<!-- allowances sum -->
												<div class="col-2">
													<ul>
														<!-- sum - header -->
														<li class="fw-bold dark-box-text lh-lg">{{ t('workDetails.sum') }}</li>

														<!-- part day allowances -->
														<li class="dark-box-text lh-lg">€ {{ item.lunchCompensationAmount || 0 * item.totalDays || 0 }}</li>
														<!-- full day allowances -->
														<li class="dark-box-text lh-lg">€ {{ item.fullHalfDayCompensationAmount || 0 * item.totalDays || 0 }}</li>

														<!-- food allowances -->
														<li class="dark-box-text lh-lg">€ {{ item.otherCompensationAmount || 0 }}</li>
														<!-- kilometer allowances -->
														<li class="dark-box-text lh-lg">
															<!-- {{ (item.distance || 0).toFixed(2) || 0 }} -->
															€ {{ Number(item.distance * invoiceAllownceTracer.distanceAllownce * item.totalDays).toFixed(2) || 0 }}
														</li>
														<span v-if="item.distance">
															<li v-if="item.transported_heavyloads" class="dark-box-text lh-lg">
																€
																{{
																	item.transported_heavyloads == true ? (invoiceAllownceTracer.transported_heavyloads * item.distance * item.totalDays).toFixed(2) : 0
																}}
															</li>

															<li v-if="item.driven_in_rough_terrain" class="dark-box-text lh-lg">
																€
																{{
																	item.driven_in_rough_terrain == true
																		? (invoiceAllownceTracer.driven_in_rough_terrain * item.distance * item.totalDays).toFixed(2)
																		: 0
																}}
															</li>

															<li v-if="item.vehicle_subclass" class="dark-box-text lh-lg">
																€ {{ item.vehicle_subclass == true ? (invoiceAllownceTracer.vehicle_subclass * item.distance * item.totalDays).toFixed(2) : 0 }}
															</li>
														</span>

														<!-- total - allowances -->
														<li class="fw-bold dark-box-text lh-lg">€ {{ Number(finalTotal(item)).toFixed(2) }}</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- other rows -->
					<div v-else>
						<div class="details-content">
							<!-- serial no. -->
							<div class="product-width">
								<div class="product-1">
									<p class="inpult-area">{{ index + 1 }}</p>
								</div>
							</div>

							<div class="multiple-day d-flex justify-content-center">
								<div class="py-0" v-if="item.totalDays > 1">
									<span class="ml-2 d-inline bg-danger text-white multi-rounded">{{ item.totalDays }}</span>
								</div>
								<div class="work py-0" v-else>
									-
								</div>
							</div>
							<!-- discription -->
							<div class="work-width">
								<div class="work py-0">
									<input type="text" v-model="item.description" @change="e => editHandleContractValue(e, index, 'description')" class="form-control" />
								</div>
							</div>

							<!-- contract type -->
							<div class="hours-width">
								<div class="hours">
									<Multiselect
										id="contractType"
										class="form-group"
										v-model="item.contract_type"
										@change="e => editHandleContractValue({ target: { value: e } }, index, 'contract_type')"
										:options="contractTypeOptions"
										mode="single"
										:canDeselect="true"
									/>
									<!-- @click="removeContractType" -->
								</div>
							</div>

							<!-- contract value -->
							<div class="contractvalue-width">
								<div class="totalamount">
									<p>€</p>
									<input
										type="number"
										v-model="item.contract_value"
										@change="e => editHandleContractValue(e, index, 'contract_value')"
										class="inpult-area"
										v-on:keypress="NumbersOnly"
										@input="checkInputNuberValue"
									/>
									<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
								</div>
							</div>

							<!-- quantity & unit -->
							<div class="totalamount-width">
								<div class="totalamount">
									<div class="mr-2 text-sm">
										<FontAwesomeIcon :icon="closeIcon" />
									</div>
									<input
										type="text"
										v-model="item.total_work"
										@change="e => editHandleContractValue(e, index, 'total_work')"
										class="inpult-area"
										v-on:keypress="NumbersOnly"
										@input="checkInputNuberQty"
									/>
									<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
								</div>
							</div>

							<!-- actions -->
							<div class="buttons">
								<!-- copy work detail -->
								<ToolTip :title="t('toolTip.duplicateRecord')">
									<div class="copy-btn" :class="{ btnDisabled: isDublicateInvoiceDisable(index) }" @click="duplicateWorkDetail(index)">
										<FontAwesomeIcon :icon="copyIcon" />
									</div>
								</ToolTip>

								<!-- remove work detail -->
								<ToolTip :title="t('toolTip.deleteRecord')">
									<div class="delete-btn" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="removeWorkDetail(index)">
										<FontAwesomeIcon :icon="trashIcon" />
									</div>
								</ToolTip>

								<!-- expand work detail -->
								<ToolTip :title="t('toolTip.expantiate')">
									<div class="down-btn" v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item)">
										<FontAwesomeIcon :icon="downIcon" />
									</div>
								</ToolTip>
								<ToolTip :title="t('toolTip.tripButton')">
									<div class="down-btn mx-1" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="addWorkDetails(item.id, index, item)">
										<FontAwesomeIcon :icon="euroSign" />
									</div>
								</ToolTip>

								<!-- copy work detail -->
								<!-- <ToolTip title="Save button">
									<div class="copy-btn ms-1" @click="updateWorkDetailInfo(index)">
										<FontAwesomeIcon :icon="saveIcon" />
									</div>
								</ToolTip> -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="attachment-table responsive-table ">
			<div v-for="(item, index) in workDetailList" :key="index">
				<div>
					<div class="d-flex align-items-center justify-content-between collapse-div" @click="openTable(index, item)">
						<div class="d-flex">
							<div>
								<div>
									{{ dateFormat(item.created_at) || '-' }}
								</div>
								<div>
									{{ item.description || '-' }}
								</div>
							</div>
						</div>

						<div>
							<a>
								<FontAwesomeIcon :icon="arrowDown" v-if="tableIndex !== index" class="arrowIcon" />
							</a>

							<a>
								<FontAwesomeIcon :icon="arrowUp" v-if="tableIndex === index" class="arrowIcon" />
							</a>
						</div>
					</div>
					<div class="expand-daily-table mb-3">
						<div v-if="index == tableIndex">
							<div v-if="expandRowIndex === index">
								<div class="row align-items-end">
									<div class="col-sm-1 col-2 pe-0 ps-0 mb-sm-0 mb-2">
										<p class="">{{ t('workDetails.productNo') }}</p>

										<!-- serial no. -->
										<div class="product-1">
											<p class="inpult-area">{{ index + 1 }}</p>
										</div>
									</div>

									<div class="col-sm-1 col-2 pe-0 ps-2 mb-sm-0 mb-2">
										<p class="">{{ t('workDetails.days') }}</p>
										<!-- serial no. -->
										<div class="product-1">
											<div class="py-0" v-if="item.totalDays > 1">
												<p class="inpult-area d-inline bg-danger text-white multi-rounded">{{ item.totalDays }}</p>
											</div>
											<div class="work py-0" v-else>
												-
											</div>
										</div>
									</div>

									<!-- contract type -->
									<div class="col-sm-3 col-8 pe-0 ps-lg-2 ps-3 mb-sm-0 mb-2">
										<div class="hours">
											<Multiselect
												id="contractType"
												class="form-group"
												@change="e => editHandleContractValue({ target: { value: e } }, index, 'contract_type')"
												v-model="item.contract_type"
												:options="contractTypeOptions"
												mode="single"
												:canDeselect="true"
											/>
										</div>
									</div>

									<!-- contract value -->
									<div class="col-sm-2 col-4 pe-0 ps-sm-2 ps-0">
										<div class="product-2 d-flex">
											<p class="mr-2">€</p>
											<input
												type="number"
												min="0"
												v-model="item.contract_value"
												@change="e => editHandleContractValue(e, index, 'contract_value')"
												class="inpult-area"
												@input="checkInputNuberValue"
											/>
											<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
										</div>
									</div>

									<!-- quantity & unit -->
									<div class="col-sm-2 col-3 pe-0 ps-lg-2 ps-1">
										<div class="product-2 d-flex">
											<div class="mr-2 text-sm">
												<FontAwesomeIcon :icon="closeIcon" />
											</div>
											<!-- <p>x</p> -->
											<input
												type="number"
												min="0"
												v-model="item.total_work"
												@change="e => editHandleContractValue(e, index, 'total_work')"
												class="inpult-area"
												v-on:keypress="NumbersOnly"
												@input="checkInputNuberQty"
											/>
											<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
										</div>
									</div>

									<!-- actions -->
									<div class="col-sm-2 col-5 pe-0 ps-lg-2 ps-1">
										<div class="buttons d-flex align-items-center justify-content-sm-between">
											<!-- copy work detail -->
											<ToolTip :title="t('toolTip.duplicateRecord')">
												<div class="copy-btn" :class="{ btnDisabled: isDublicateInvoiceDisable(index) }" @click="duplicateWorkDetail(index)">
													<FontAwesomeIcon :icon="copyIcon" />
												</div>
											</ToolTip>

											<!-- remove work detail -->
											<ToolTip :title="t('toolTip.deleteRecord')">
												<div class="delete-btn" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="removeWorkDetail(index)">
													<FontAwesomeIcon :icon="trashIcon" />
												</div>
											</ToolTip>

											<ToolTip :title="t('toolTip.tripButton')">
												<div class="down-btn ms-1" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="addWorkDetails(item.id, index, item)">
													<FontAwesomeIcon :icon="euroSign" />
												</div>
											</ToolTip>
										</div>
									</div>
								</div>
								<div class="row align-items-end my-3">
									<div class="col-sm-8 col-12 pe-0 ps-0 mb-sm-0 mb-2">
										<p class="">{{ t('workDetails.work_description') }}</p>
										<div class="work-width ml-xl-0">
											<div class="work py-0">
												<input type="text" v-model="item.description" @change="e => editHandleContractValue(e, index, 'description')" class="form-control" />
											</div>
										</div>
									</div>
									<div class="col-sm-4 col-12 pe-0 ps-sm-2 ps-0">
										<div class="summary-box">
											<!-- expand work detail -->
											<div class="down-btn d-flex align-items-center justify-content-between " v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item)">
												<p>Compensations</p>
												<ToolTip :title="t('toolTip.expantiate')">
													<FontAwesomeIcon :icon="downIcon" />
												</ToolTip>
											</div>

											<!-- expand work detail -->
											<div class="down-btn d-flex align-items-center justify-content-between" v-if="index === expandRowIndex" @click="sinkWorkDetails">
												<p>Compensations</p>
												<ToolTip :title="t('toolTip.expantiate')">
													<FontAwesomeIcon :icon="upIcon" />
												</ToolTip>
											</div>
										</div>
									</div>
								</div>
								<div class="opne-toggle" v-if="index === expandRowIndex">
									<div class="dark-box">
										<div class="row no-gutters">
											<!-- allances title -->
											<div class="col-6">
												<ul>
													<!-- allowances -->
													<li class="fw-bold dark-box-text lh-lg">{{ t('workDetails.allowances') }}</li>

													<!-- part day allowances -->
													<li class="dark-box-text lh-lg">{{ t('workDetails.lunchCompensatio') }}</li>

													<!-- full day allowances -->
													<li class="dark-box-text lh-lg">{{ t('workDetails.fullHalfCompensation') }}</li>

													<!-- food allowances -->
													<li class="dark-box-text lh-lg">{{ t('workDetails.otherCompensation') }}</li>

													<!-- kilometer allowances -->
													<li class="dark-box-text lh-lg">{{ t('workDetails.kilometerAllowances') }}</li>
													<span v-if="item.distance">
														<li v-if="item.transported_heavyloads" class="dark-box-text lh-lg">{{ t('workDetails.transportedHeavyLoad') }}</li>
														<li v-if="item.driven_in_rough_terrain" class="dark-box-text lh-lg">{{ t('workDetails.Driveninroughterrain') }}</li>
														<li v-if="item.vehicle_subclass" class="dark-box-text lh-lg">{{ t('workDetails.Trailer') }}</li>
													</span>
													<!-- total -->
													<li class="dark-box-text lh-lg fw-bold">{{ t('workDetails.total') }}</li>
												</ul>
											</div>
											<!-- allowances amount -->
											<div class="col-4">
												<ul>
													<!-- amount - header -->
													<li class="fw-bold dark-box-text lh-lg">{{ t('workDetails.Amount') }}</li>
													<!-- part day allowances - amount -->
													<li class="dark-box-text lh-lg">
														€ {{ item.lunchCompensationAmount || 0 * item.totalDays || 0 }}
														<!-- <input type="number" class="dark-box-input" min="0" v-model="item.lunchCompensationAmount" placeholder="0" /> -->
													</li>
													<!-- full day allowances - amount -->
													<li class="dark-box-text lh-lg">
														€ {{ item.fullHalfDayCompensationAmount || 0 * item.totalDays || 0 }}
														<!-- <input class="dark-box-input" type="number" min="0" v-model="item.fullHalfDayCompensationAmount" placeholder="0" /> -->
													</li>
													<!-- food allowances - amount -->
													<li class="dark-box-text lh-lg">
														€ {{ item.otherCompensationAmount || 0 }}
														<!-- <input type="number" class="dark-box-input" min="0" v-model="item.otherCompensationAmount" placeholder="0" /> -->
													</li>
													<!-- kilometer allowances - amount -->
													<li class="dark-box-text lh-lg">
														€ {{ Number(item.distance * invoiceAllownceTracer.distanceAllownce * item.totalDays).toFixed(2) || 0 }}
														<!-- <input type="number" min="0" v-model="item.distance" placeholder="0" class="dark-box-input" /> -->
													</li>
													<span v-if="item.distance">
														<li v-if="item.transported_heavyloads" class="dark-box-text lh-lg">
															€
															{{ item.transported_heavyloads == true ? (invoiceAllownceTracer.transported_heavyloads * item.distance * item.totalDays).toFixed(2) : 0 }}
														</li>

														<li v-if="item.driven_in_rough_terrain" class="dark-box-text lh-lg">
															€
															{{ item.driven_in_rough_terrain == true ? (invoiceAllownceTracer.driven_in_rough_terrain * item.distance * item.totalDays).toFixed(2) : 0 }}
														</li>

														<li v-if="item.vehicle_subclass" class="dark-box-text lh-lg">
															€ {{ item.vehicle_subclass == true ? (invoiceAllownceTracer.vehicle_subclass * item.distance * item.totalDays).toFixed(2) : 0 }}
														</li>
													</span>
												</ul>
											</div>

											<!-- allowances sum -->
											<div class="col-2">
												<ul>
													<!-- sum - header -->
													<li class="fw-bold dark-box-text lh-lg">{{ t('workDetails.sum') }}</li>

													<!-- part day allowances -->
													<li class="dark-box-text lh-lg">€ {{ item.lunchCompensationAmount || 0 * item.totalDays || 0 }}</li>
													<!-- full day allowances -->
													<li class="dark-box-text lh-lg">€ {{ item.fullHalfDayCompensationAmount || 0 * item.totalDays || 0 }}</li>

													<!-- food allowances -->
													<li class="dark-box-text lh-lg">€ {{ item.otherCompensationAmount || 0 }}</li>
													<!-- kilometer allowances -->
													<li class="dark-box-text lh-lg">
														<!-- {{ (item.distance || 0).toFixed(2) || 0 }} -->
														€ {{ Number(item.distance * invoiceAllownceTracer.distanceAllownce * item.totalDays).toFixed(2) || 0 }}
													</li>
													<span v-if="item.distance">
														<li v-if="item.transported_heavyloads" class="dark-box-text lh-lg">
															€
															{{ item.transported_heavyloads == true ? (invoiceAllownceTracer.transported_heavyloads * item.distance * item.totalDays).toFixed(2) : 0 }}
														</li>

														<li v-if="item.driven_in_rough_terrain" class="dark-box-text lh-lg">
															€
															{{ item.driven_in_rough_terrain == true ? (invoiceAllownceTracer.driven_in_rough_terrain * item.distance * item.totalDays).toFixed(2) : 0 }}
														</li>

														<li v-if="item.vehicle_subclass" class="dark-box-text lh-lg">
															€ {{ item.vehicle_subclass == true ? (invoiceAllownceTracer.vehicle_subclass * item.distance * item.totalDays).toFixed(2) : 0 }}
														</li>
													</span>

													<!-- total - allowances -->
													<li class="fw-bold dark-box-text lh-lg">€ {{ Number(finalTotal(item)).toFixed(2) }}</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-else>
								<div class="row align-items-end">
									<div class="col-sm-1 col-2 pe-0 ps-0 mb-sm-0 mb-2">
										<p class="">{{ t('workDetails.productNo') }}</p>

										<!-- <div v-if="expandRowIndex === index"> -->
										<!-- serial no. -->
										<div class="product-1">
											<p class="inpult-area">{{ index + 1 }}</p>
										</div>
									</div>

									<div class="col-sm-1 col-2 pe-0 ps-2 mb-sm-0 mb-2">
										<p class="">{{ t('workDetails.days') }}</p>
										<!-- serial no. -->
										<div class="">
											<div class="days-red" v-if="item.totalDays > 1">
												<p class="inpult-area">{{ item.totalDays }}</p>
											</div>
											<div class="work product-1" v-else>
												-
											</div>
										</div>
									</div>

									<!-- contract type -->
									<div class="col-sm-3 col-8 pe-0 ps-lg-2 ps-3 mb-sm-0 mb-2">
										<div class="hours">
											<Multiselect
												id="contractType"
												class="form-group"
												@change="e => editHandleContractValue({ target: { value: e } }, index, 'contract_type')"
												v-model="item.contract_type"
												:options="contractTypeOptions"
												mode="single"
												:canDeselect="true"
											/>
										</div>
									</div>

									<!-- contract value -->
									<div class="col-sm-2 col-4 pe-0 ps-sm-2 ps-0">
										<div class="product-2 d-flex">
											<p class="mr-2">€</p>
											<input
												type="number"
												min="0"
												v-model="item.contract_value"
												@change="e => editHandleContractValue(e, index, 'contract_value')"
												class="inpult-area"
												@input="checkInputNuberValue"
											/>
											<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
										</div>
									</div>

									<!-- quantity & unit -->
									<div class="col-sm-2 col-3 pe-0 ps-lg-2 ps-1">
										<div class="product-2 d-flex">
											<div class="mr-2 text-sm">
												<FontAwesomeIcon :icon="closeIcon" />
											</div>
											<!-- <p>x</p> -->
											<input
												type="number"
												min="0"
												v-model="item.total_work"
												@change="e => editHandleContractValue(e, index, 'total_work')"
												class="inpult-area"
												v-on:keypress="NumbersOnly"
												@input="checkInputNuberQty"
											/>
											<!-- oninput="this.value =!!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null" -->
										</div>
									</div>

									<!-- actions -->
									<div class="col-sm-2 col-5 pe-0 ps-lg-2 ps-1">
										<div class="buttons d-flex align-items-center justify-content-sm-between">
											<!-- copy work detail -->
											<ToolTip :title="t('toolTip.duplicateRecord')">
												<div class="copy-btn" :class="{ btnDisabled: isDublicateInvoiceDisable(index) }" @click="duplicateWorkDetail(index)">
													<FontAwesomeIcon :icon="copyIcon" />
												</div>
											</ToolTip>

											<!-- remove work detail -->
											<ToolTip :title="t('toolTip.deleteRecord')">
												<div class="delete-btn" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="removeWorkDetail(index)">
													<FontAwesomeIcon :icon="trashIcon" />
												</div>
											</ToolTip>

											<ToolTip :title="t('toolTip.tripButton')">
												<div class="down-btn ms-1" :class="{ btnDisabled: workDetailBtnDisabled(index) }" @click="addWorkDetails(item.id, index, item)">
													<FontAwesomeIcon :icon="euroSign" />
												</div>
											</ToolTip>
										</div>
									</div>
								</div>
								<div class="row align-items-end my-3">
									<div class="col-sm-8 col-12 pe-0 ps-0 mb-sm-0 mb-2">
										<p class="">{{ t('workDetails.work_description') }}</p>
										<div class="work-width ml-xl-0">
											<div class="work py-0">
												<input type="text" v-model="item.description" @change="e => editHandleContractValue(e, index, 'description')" class="form-control" />
											</div>
										</div>
									</div>
									<div class="col-sm-4 col-12 pe-0 ps-sm-2 ps-0">
										<div class="summary-box">
											<!-- expand work detail -->
											<div class="down-btn d-flex align-items-center justify-content-between " v-if="index !== expandRowIndex" @click="expandWorkDetails(index, item)">
												<p>Compensations</p>
												<ToolTip :title="t('toolTip.expantiate')">
													<FontAwesomeIcon :icon="downIcon" />
												</ToolTip>
											</div>

											<!-- expand work detail -->
											<!-- <div class="down-btn d-flex align-items-center justify-content-between" v-if="index === expandRowIndex" @click="sinkWorkDetails">
											<p>Compensations</p>
											<ToolTip :title="t('toolTip.expantiate')">
												<FontAwesomeIcon :icon="upIcon" />
											</ToolTip>
										</div> -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="overflow-auto">
			<div class="bottom-header d-lg-flex align-items-center justify-content-between my-3">
				<!-- <div class="save-icon">
							<img src="@/assets/images/save-icon.png" class="img-fluid" alt="err" />
						</div> -->
				<div class="pph-left mb-lg-0 mb-2">
					<h5 class="text-white">{{ t('leInvoice.addInvoice.summary') }}</h5>
				</div>
				<div class="d-sm-flex align-items-center ml-md-auto flex-md-wrap flex-wrap">
					<!-- <div class="mr-5 text-white">
								<p class="text-md-fw">Invoice Total</p>
								<p class="text-md-fw">€ {{ Number(seekerInvoiceDetail.work_vat_value).toFixed(2) || 0.0 }}</p>
							</div>

							<div class="mr-5 text-white">
								<p class="text-md-fw">VAT %</p>
								<p class="text-md-fw">{{ seekerInvoiceDetail.vat || '-' }}</p>
							</div> -->

					<div class="mr-5 text-white mb-md-0 mb-1">
						<p class="text-sm-fw">{{ t('leInvoice.addInvoice.grossAmount') }}</p>
						<p class="text-sm-fw">
							€
							{{ GrossSalary ? GrossSalary : 0 }}
						</p>
					</div>

					<div class="mr-5 text-white mb-md-0 mb-1">
						<p class="text-sm-fw">{{ t('leInvoice.addInvoice.withholdingTax') }}</p>
						<p class="text-sm-fw">€ {{ TaxbledAmount ? TaxbledAmount : 0 }}</p>
					</div>

					<div class="mr-5 text-white mb-md-0 mb-1">
						<p class="text-sm-fw">{{ t('leInvoice.addInvoice.compensations') }}</p>
						<p class="text-sm-fw">€ {{ Number(compensationAmount).toFixed(2) || 0 }}</p>
					</div>

					<div class="text-white">
						<p class="{{'text-sm-fw'|translate}}">{{ t('leInvoice.addInvoice.willpaid') }}</p>
						<p class="text-sm-fw">€ {{ Number(youWillBePaid).toFixed(2) || 0 }}</p>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-auto">
			<div class="bottom-header d-lg-flex align-items-center justify-content-between">
				<!-- <div class="save-icon">
							<img src="@/assets/images/save-icon.png" class="img-fluid" alt="err" />
						</div> -->

				<div class="pph-left mb-lg-0 mb-2">
					<h5 class="text-white">{{ t('leInvoice.addInvoice.recipient') }}</h5>
				</div>
				<div class="d-sm-flex align-items-center ml-md-auto flex-md-wrap flex-wrap">
					<div class="mr-5 text-white mb-md-0 mb-1">
						<p class="text-sm-fw">{{ t('leInvoice.addInvoice.invoiceTotal') }}</p>
						<p class="text-sm-fw">€ {{ Number(invoiceTotal).toFixed(2) || 0.0 }}</p>
					</div>

					<div class="mr-5 text-white mb-md-0 mb-1">
						<p class="text-sm-fw">{{ t('leInvoice.addInvoice.VATAmount') }}</p>
						<p class="text-sm-fw">€ {{ vatTotal || 0 }}</p>
					</div>

					<div class="text-white">
						<p class="text-sm-fw">{{ t('fieldList.due_date') }}</p>
						<p class="text-sm-fw">{{ dateFormat(dueDate || '-') }}</p>
					</div>

					<!-- <div class="text-white">
								<p class="text-md-fw">Company ID</p>
								<p class="text-md-fw"> 898579668</p>
							</div> -->
				</div>
			</div>
		</div>
		<div class="row mt-2">
			<div class="col-lg-5">
				<div class="d-flex align-items-center">
					<ToolTip :title="t('toolTip.addNewTrip')">
						<div class="plus" @click="addNewWorkDetail">
							<FontAwesomeIcon :icon="plusIcon" />
						</div>
					</ToolTip>
					<div>
						<h5 class="grey-light">{{ t('workDetails.addNewRow') }}</h5>
					</div>
				</div>
			</div>
			<div class="col-lg-7 col-md-8 col-12 md:ml-auto xs:ml-0 mt-2">
				<div class="form-check form-checkbox">
					<input
						class="form-check-input form-checkbox-width"
						type="checkbox"
						id="debugcalculation"
						:checked="displayAllW2WTotoal"
						:value="displayAllW2WTotoal.value"
						:v-model="displayAllW2WTotoal.value"
						@click="onTransported($event)"
					/>
					<label class="form-check-label extras-font ml-2" for="debugcalculation"> {{ t('leInvoice.addInvoice.debugCal') }}</label>
				</div>

				<!-- total work detail info -->
				<div v-if="displayAllW2WTotoal">
					<!-- total work -->
					<div class="total">
						<div class="total-excl">
							<p class="text-total">{{ t('workDetails.totalWorkValue') }}</p>
							<p class="text-prize">
								€
								{{ calculateTotalWithoutVat }}
							</p>
						</div>
						<!-- <div class="text-end">
							<div class="total-excl">
								<p class="text-total">Vat Added Value</p>
								<p class="text-prize">€ {{ VatAddedValue ? VatAddedValue : 0 }}</p>
							</div>
							<span class="text-xs d-block">(Vat(%) + Workvalue)</span>
						</div> -->
						<!-- <div class="total-excl">
							<p class="text-total">Personal tax</p>
							<p class="text-prize">
								€
								{{ Number(taxAmountField.value).toFixed(2) }}
							</p>
						</div> -->

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('workDetails.totalCompensation') }}</p>
								<p class="text-prize">
									€
									{{ totalCompensationField.value ? totalCompensationField.value : 0 }}
								</p>
							</div>
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.grossSalary') }}</p>
								<p class="text-prize">
									€
									{{ GrossSalary ? GrossSalary : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.vatAddedVal') }}))</span>
						</div>
						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.taxAmount') }}</p>
								<p class="text-prize">
									€
									{{ TaxbledAmount ? TaxbledAmount : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.prTaxGrossSalary') }})</span>
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.grossAfterTax') }}</p>
								<p class="text-prize">
									€
									{{ hoursAmountAfterTax ? hoursAmountAfterTax.toFixed(2) : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.grossAfterTaxFormula') }})</span>
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.misbAmt') }}</p>
								<p class="text-prize">
									€
									{{ misbCommissionAmount ? misbCommissionAmount : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.misbAmtFormula') }})</span>
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.W2WAmt') }}</p>
								<p class="text-prize">
									€
									{{ w2wCommissionAmount ? w2wCommissionAmount : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.W2WAmtFormula') }})</span>
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.commissionAmt') }}</p>
								<p class="text-prize">
									€
									{{ CommitionAmount ? CommitionAmount : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.commissionAmtFormula') }})</span>
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.dedAmt') }}</p>
								<p class="text-prize">
									€
									{{ deducationAmount ? deducationAmount : 0 }}
								</p>
							</div>
							<!-- <span class="text-xs d-block">(W2W + misb Commission)</span> -->
						</div>

						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('leInvoice.addInvoice.quickpayAmt') }}</p>
								<p class="text-prize">
									€
									{{ quickpayAmount ? quickpayAmount : 0 }}
								</p>
							</div>
							<!-- <span class="text-xs d-block">(W2W + misb Commission)</span> -->
						</div>

						<div class="text-end margin-top-5 total-bold-border">
							<div class="total-excl">
								<p class="all-total">{{ t('workDetails.total') }}</p>
								<p class="total-prize">
									€
									{{ subTotalField.value ? Number(subTotalField.value).toFixed(2) : 0 }}
								</p>
							</div>
							<span class="text-xs d-block">({{ t('leInvoice.addInvoice.totalFormula') }})</span>
						</div>
					</div>
				</div>

				<!-- total work detail info -->
				<!-- <div v-else>
					<div class="total">
						<div class="total-excl">
							<p class="text-total">{{ t('workDetails.totalWorkValue') }}</p>
							<p class="text-prize">
								€
								{{ totalWorkValue || 0 }}
							</p>
						</div>
						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('workDetails.taxableAmount') }}</p>
								<p class="text-prize">
									€
									{{ TaxbledAmount ? TaxbledAmount : 0 }}
								</p>
							</div>
						</div>
						<div class="text-end margin-top-5">
							<div class="total-excl">
								<p class="text-total">{{ t('workDetails.totalCompensation') }}</p>
								<p class="text-prize">
									€
									{{ totalCompensationField.value || 0 }}
								</p>
							</div>
						</div>
						<div class="text-end margin-top-5 total-bold-border">
							<div class="total-excl">
								<p class="all-total">{{ t('workDetails.total') }}</p>
								<p class="total-prize">
									€
									{{ subTotalField.value ? Number(subTotalField.value).toFixed(2) : 0 }}
								</p>
							</div>
						</div>
					</div>
				</div> -->
			</div>
			<!-- total work detail info -->
			<!-- <div class="col-lg-7 ml-auto mt-2">
				
				<div class="total">
					<div class="total-excl">
						<p class="text-total">{{ t('workDetails.totalWorkValue') }}</p>
						<p class="text-prize">€ {{ calculateTotalWithoutVat }}</p>
					</div>
					<div class="total-excl">
						<p class="text-total">{{ t('workDetails.taxableAmount') }}</p>
						<p class="text-prize">€ {{ Number(getCalculation).toFixed(2) }}</p>
					</div>
					<div class="total-excl">
						<p class="text-total">{{ t('workDetails.totalCompensation') }}</p>
						<p class="text-prize">
							€
							{{ totalCompensationField.value ? totalCompensationField.value : getCalculation.compensation_amount }}
						</p>
					</div>
					<div class="total-excl total-bold-border">
						<p class="all-total">{{ t('workDetails.total') }}</p>
						<p class="total-prize">
							€
							{{ subTotalField.value ? currencyConverture(subTotalField.value) : currencyConverture(getCalculation.sub_total) }}
						</p>
					</div>
				</div>
			</div> -->
		</div>
	</div>

	<!-- Upload my document -->
	<Suspense v-if="editWorkDeatilsModal">
		<template #default>
			<edit-work-details-modal
				v-model:isModalShow="editWorkDeatilsModal"
				:editWorkInfo="editWorkInfo"
				:indexId="indexId"
				:addNewItem="addNewItem"
				@modalFlag="updateFlag"
				@workDetails="workDetails"
			/>
		</template>
		<template #fallback>
			<default-loader />
		</template>
	</Suspense>
</template>

<script>
import { onMounted, ref, computed, watch, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlus, faCopy, faTrashAlt, faChevronDown, faChevronUp, faEuroSign, faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import Multiselect from '@vueform/multiselect';
import { contractTypeOptions, vatTypeOptions, invoiceAllownceTracer } from '@/utils/enums.js';
import { useSwal } from '@/components/sweetalert'; // sweetalert2
import { useForm, useField } from 'vee-validate';
import { reactive } from '@vue/reactivity';
import { currencyConverture, dateFormat } from '@/utils/mixins';
import * as yup from 'yup';
import DefaultLoader from '@/components/loader/DefaultLoader.vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import emitter from '@/helpers/eventHub';
import { useToast } from 'vue-toastification';

const EditWorkDetailsModal = defineAsyncComponent(async () => {
	return import('@/views/invoice/components/edit/EditWorkDetailModal.vue' /* EditWorkDetailModal:"WorkDetailModal" */);
});

export default {
	name: 'DailyWorkHourList',

	inheritAttrs: false,

	components: {
		FontAwesomeIcon,
		Multiselect,
		DefaultLoader,
		EditWorkDetailsModal,
	},

	props: {
		formFields: Object,
	},

	setup(props) {
		const { t } = useI18n({ useScope: 'global' });
		const invoiceWorkDetail = ref({});
		const work_hourId = ref(null);
		const workDetailList = ref([]);
		const getCalculation = ref([]);
		const formFieldsData = ref(props.formFields);
		const editWorkDeatilsModal = ref(false);
		const editWorkInfo = ref(null);
		const indexId = ref(null);
		const defaultWorkDetails = {
			contract_type: 'hours',
			contract_value: 0,
			date: null,
			day_compensation: null,
			description: null,
			distance: null,
			driven_in_rough_terrain: false,
			lunch_compensation: null,
			other_compensation: null,
			teamId: 0,
			total_work: 0,
			transported_heavyloads: false,
			transported_workload: false,
			trip_calculate_time: null,
			trip_end_address: null,
			trip_end_date: null,
			trip_end_time: null,
			trip_name: null,
			trip_start_address: null,
			trip_start_date: null,
			trip_start_time: null,
			vehicleCheckBoxValue: null,
			vehicle_class: null,
			vehicle_number: null,
			vehicle_subclass: false,
		};
		const expandRowIndex = ref(null);
		const expandRowId = ref(null);
		const plusIcon = faPlus;
		const copyIcon = faCopy;
		const trashIcon = faTrashAlt;
		const downIcon = faChevronDown;
		const saveIcon = faSave;
		const upIcon = faChevronUp;
		const euroSign = faEuroSign;
		const closeIcon = faTimes;
		const arrowDown = faChevronDown;
		const arrowUp = faChevronUp;
		const addNewItem = ref(null);
		const GrossSalary = ref(null);
		const TaxbledAmount = ref(null);
		const compensationAmount = ref(null);
		const youWillBePaid = ref(null);
		const invoiceTotal = ref(null);
		const vatTotal = ref(null);
		const dueDate = ref(null);
		const totalWorkValue = ref(null);
		const displayAllW2WTotoal = ref(false);
		const CommitionAmount = ref(null);
		const deducationAmount = ref(null);
		const quickpayAmount = ref(null);
		const VatAddedValue = ref(null);
		const hoursAmountAfterTax = ref(null);
		const misbCommissionAmount = ref(null);
		const w2wCommissionAmount = ref(null);

		const tableIndex = ref(0);

		// global store
		const store = useStore(); // use state

		// sweetalert
		const Swal = useSwal();

		const route = useRoute();

		// toast
		const toast = useToast();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch work details
			workDetails();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		const calculateSubTotal = computed(() => {
			return item => {
				const total = item.contract_value * item.total_work;

				return Math.floor(total * 100) / 100;
			};
		});

		const tripTimeCalc = computed(() => {
			const timeDiff = moment.duration(moment(tripEndField.value).diff(moment(tripStartField.value)));
			return timeDiff.asHours();
		});

		// sub total of all item without vat
		const calculateTotalWithoutVat = computed(() => {
			const subTotal = (workDetailList.value || []).reduce((acc, item, index) => {
				let total = 0;
				if (index === expandRowIndex.value) {
					total = item.contract_value * item.total_work;
				} else {
					total = item.contract_value * item.total_work;
				}
				acc += total || 0;
				return acc;
			}, 0);
			return Math.floor(subTotal * 100) / 100;
		});

		const workDetailBtnDisabled = computed(() => {
			return index => {
				const x = workDetailList.value[index];

				if (!x.contract_value || x.contract_value === 0) {
					return true;
				}

				if (!x.total_work || x.total_work === 0) {
					return true;
				}

				return false;
			};
		});

		// calculate vat from subTotal
		const calculateVat = computed(() => {
			return (calculateTotalWithoutVat.value * 0) / 100;
		});

		// sub total of all item with vat
		const calculatgeTotalWithVat = computed(() => {
			const subTotalWithoutVat = calculateTotalWithoutVat.value;
			return subTotalWithoutVat + calculateVat.value;
		});

		const isDisableCompensation = computed(() => {
			if (fullHalfDatCompensationField.value > 0) {
				lunchCompensationField.value == 0;
				otherCompensationField.value == 0;
				return true;
			}

			return false;
		});

		const dayCompensationDisable = computed(() => {
			if (lunchCompensationField.value || otherCompensationField.value > 0) {
				fullHalfDatCompensationField.value == 0;
				return true;
			}
			return false;
		});

		// total companstion calculate
		const totalCompensation = computed(() => {
			return lunchCompensationField.value + otherCompensationField.value;
		});

		// get sub total and compensation amount computed
		const calculation_total = computed(() => {
			return store.state.invoice.invoiceInfo;
		});

		//distance killo
		const totalDistanceKilloMeter = computed(() => {
			return distanceField.value * 0.46;
		});

		//total calculation
		const finalTotal = computed(() => {
			return data => {
				const drivenInRoughTerrainVal = data.driven_in_rough_terrain == true ? invoiceAllownceTracer.driven_in_rough_terrain * data.distance * data.totalDays : 0;
				const transportedHeavyloadsVal = data.transported_heavyloads == true ? invoiceAllownceTracer.transported_heavyloads * data.distance * data.totalDays : 0;
				const vehicleSubclassVal = data.vehicle_subclass == true ? invoiceAllownceTracer.vehicle_subclass * data.distance * data.totalDays : 0;
				const EditDistance = data.distance == 0 ? 0 : Number(data.distance * invoiceAllownceTracer.distanceAllownce * data.totalDays).toFixed(2);
				const editDayAmount = data.day_compensation == null ? 0 : Number(data.fullHalfDayCompensationAmount * data.totalDays);
				const editLunchAmount = data.lunch_compensation == null ? 0 : Number(data.lunchCompensationAmount * data.totalDays);
				return (
					Number(editDayAmount) +
						Number(editLunchAmount) +
						Number(data.otherCompensationAmount) +
						(EditDistance == 0 ? 0 : drivenInRoughTerrainVal) +
						(EditDistance == 0 ? 0 : transportedHeavyloadsVal) +
						(EditDistance == 0 ? 0 : vehicleSubclassVal) +
						Number(EditDistance) || 0
				);
			};
		});

		//work details array
		const workDetailsArray = computed(() => {
			let workObj = store.state.invoice.workDeatilsObj;
			return workObj;
		});

		const isDublicateInvoiceDisable = computed(() => {
			return index => {
				if ([null, '', 0].includes(workDetailList.value[index].contract_value) || [null, '', 0].includes(workDetailList.value[index].total_work)) {
					return true;
				}

				return false;
			};
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// work details
		const workDetails = () => {
			const checkExistingWorkDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];

			if (checkExistingWorkDetails.length) {
				workDetailList.value = checkExistingWorkDetails;
			} else {
				workDetailList.value = new Array(1).fill(null).map(() => {
					return {
						...defaultWorkDetails,
					};
				});
			}
			setTimeout(() => {
				updateInputByOnBlur();
			}, 500);
		};

		const setCalculation = () => {
			getCalculation.value = store.state.invoice.invoiceInfo;
		};

		const workedHoursDetails = () => {
			workDetailList.value = JSON.parse(JSON.stringify(store.state.invoice.invoiceInfo.worked_hours));
		};

		// form schema validation
		const workDetailSchema = yup.object({
			description: yup
				.string()
				.nullable()
				.optional(),
			contract_type: yup
				.string()
				.nullable()
				.required(),
			contract_value: yup
				.number()
				.nullable()
				.required(),
			total_work: yup
				.number()
				.nullable()
				.required(),
			vat: yup
				.number()
				.nullable()
				.required(),
			other_amount: yup
				.number()
				.nullable()
				.optional(),
			distance: yup
				.number()
				.nullable()
				.optional(),
			lunch_compensation: yup
				.number()
				.nullable()
				.optional(),
			day_compensation: yup
				.number()
				.nullable()
				.optional(),
			other_compensation: yup
				.number()
				.nullable()
				.optional(),
			trip_start: yup
				.string()
				.nullable()
				.optional(),
			trip_end: yup
				.string()
				.nullable()
				.optional(),
			trip_time: yup
				.number()
				.nullable()
				.optional(),
			trip_address: yup
				.string()
				.nullable()
				.optional(),
			work_description: yup
				.string()
				.nullable()
				.optional(),
		});

		// form validation intialize
		const { meta: formMeta, handleSubmit, resetForm } = useForm({
			validationSchema: workDetailSchema,
		});

		// Form Feilds
		const desciptionField = reactive(
			useField('description', undefined, {
				initialValue: null,
			}),
		);
		const contactTypeField = reactive(
			useField('contract_type', undefined, {
				initialValue: 'hours',
			}),
		);
		const contractValueField = reactive(
			useField('contract_value', undefined, {
				initialValue: null,
			}),
		);
		const hoursUnitField = reactive(
			useField('total_work', undefined, {
				initialValue: null,
			}),
		);
		const vatField = reactive(
			useField('vat', undefined, {
				initialValue: 0,
			}),
		);
		const otherAmountField = reactive(
			useField('other_amount', undefined, {
				initialValue: null,
			}),
		);
		const distanceField = reactive(
			useField('distance', undefined, {
				initialValue: null,
			}),
		);
		const lunchCompensationField = reactive(
			useField('lunch_compensation', undefined, {
				initialValue: 0,
			}),
		);
		const fullHalfDatCompensationField = reactive(
			useField('day_compensation', undefined, {
				initialValue: 0,
			}),
		);
		const otherCompensationField = reactive(
			useField('other_compensation', undefined, {
				initialValue: 0,
			}),
		);
		const tripStartField = reactive(
			useField('trip_start', undefined, {
				initialValue: moment()
					.startOf('day')
					.toDate(),
			}),
		);
		const tripEndField = reactive(
			useField('trip_end', undefined, {
				initialValue: moment()
					.startOf('day')
					.toDate(),
			}),
		);
		const tripTimeField = reactive(
			useField('trip_time', undefined, {
				initialValue: tripTimeCalc.value,
			}),
		);
		const tripAddressField = reactive(
			useField('trip_address', undefined, {
				initialValue: null,
			}),
		);
		const workDescriptionField = reactive(
			useField('work_description', undefined, {
				initialValue: null,
			}),
		);
		const totalCompensationField = reactive(
			useField('compensation_amount', undefined, {
				initialValue: null,
			}),
		);
		const subTotalField = reactive(
			useField('sub_total', undefined, {
				initialValue: null,
			}),
		);

		const submitFormNext = id => {
			expandRowIndex.value = id;
			submitForm();
		};

		//check box value
		const onTransported = () => {
			displayAllW2WTotoal.value = !displayAllW2WTotoal.value;
			return displayAllW2WTotoal.value;
		};

		workDetails;

		/**
		 * Methods
		 * *******************************************************************
		 */
		emitter.$on('vatUpdate', () => {
			const checkWorkDetail = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			const isValid = checkWorkDetail.find(x => Number(x.contract_value) && Number(x.total_work));
			if (checkWorkDetail && isValid) {
				updateInputByOnBlur();
			}
		});

		emitter.$on('paymentTermsUpdate', () => {
			const checkWorkDetail = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			const isValid = checkWorkDetail.find(x => Number(x.contract_value) && Number(x.total_work));
			if (checkWorkDetail && isValid) {
				updateInputByOnBlur();
			}
		});

		emitter.$on('quickPayStatusUpdate', () => {
			const checkWorkDetail = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			const isValid = checkWorkDetail.find(x => Number(x.contract_value) && Number(x.total_work));
			if (checkWorkDetail && isValid) {
				updateInputByOnBlur();
			}
		});

		// handle work detail amount change
		const editHandleContractValue = (e, index, textType) => {
			const val = e.target.value;
			const workDataList = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];

			workDataList[index][textType] = val ?? 0;
			if (textType === 'contract_type' && e.target.value === 'pieces') {
				workDataList[index]['total_work'] = 1;
			}

			localStorage.setItem('workDetails', JSON.stringify(workDataList));
			workDetailList.value = workDataList;
			const isExist = workDataList.find(x => {
				if (!x.contract_value || x.contract_value === 0) {
					return true;
				}

				if (!x.total_work || x.total_work === 0) {
					return true;
				}

				return false;
			});
			if (isExist) {
				return false;
			}
			updateInputByOnBlur();
		};
		// Form Submit
		const submitForm = handleSubmit(async values => {
			values.transported_heavyloads = false;
			values.driven_in_rough_terrain = false;
			values.transported_workload = false;
			const trip_start = moment(values.trip_start, 'HH:mm').format('HH:mm');
			const trip_end = moment(values.trip_end, 'HH:mm').format('HH:mm');
			const date = '2022/01/30';
			// save the work details
			await store
				.dispatch('invoice/updateWorkHourDetails', {
					id: expandRowIndex.value ? expandRowIndex.value : expandRowId.value,
					payload: {
						...values,
						trip_start,
						trip_end,
						date,
					},
				})
				.then(({ data }) => {
					let workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
					workDetails = workDetails.filter(wd => (wd.work_hoursId ? wd.work_hoursId : wd.id) !== data.id);
					workDetails.push(data);

					localStorage.setItem('workDetails', JSON.stringify(workDetails));

					desciptionField.value = data.description;
					contactTypeField.value = data.contract_type;
					contractValueField.value = data.contract_value;
					hoursUnitField.value = data.total_work;
					otherAmountField.value = data.other_amount;
					distanceField.value = data.distance;
					lunchCompensationField.value = data.lunch_compensation;
					fullHalfDatCompensationField.value = data.day_compensation;
					otherCompensationField.value = data.other_compensation;
					tripStartField.value = data.trip_start;
					tripEndField.value = data.trip_end;
					tripTimeField.value = data.trip_time;
					tripAddressField.value = data.trip_address;
					workDescriptionField.value = data.work_description;

					setTimeout(() => {
						workDetailList.value = workDetails;
						expandRowIndex.value = null;
					}, 1000);

					setTimeout(() => {
						updateInputByOnBlur();
					}, 1000);
				});
			return true;
		});

		const updateInputByOnBlur = async () => {
			const workDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			const data = {
				worked_hours: workDetails.reduce((acc, x) => {
					// acc.push(x.work_hoursId ? x.work_hoursId : x);
					acc.push(x);
					return acc;
				}, []),
				vat: formFieldsData.value.vatField.value,
				invoiceId: route.params.id,
				payment_terms: formFieldsData.value.paymentTermField.value ?? 0,
				quick_pay_status: formFieldsData.value.quickPayField.value ?? 0,
			};
			// totalCompensationField.value = store.state.invoice.invoiceInfo.compensation_amount ?? 0.00;
			// subTotalField.value = store.state.invoice.invoiceInfo.sub_total ?? 0.00;
			await store
				.dispatch('invoice/calculationWorkedHour', data)
				.then(res => {
					const data = res.data.data;
					GrossSalary.value = data.gross_salary ?? 0;
					TaxbledAmount.value = data.tax_amount ?? 0;
					compensationAmount.value = data.compensation_amount ?? 0;
					youWillBePaid.value = data.sub_total ?? 0;
					invoiceTotal.value = data.company_pay_amount ?? 0;
					vatTotal.value = data.vat_amount ?? 0;
					totalWorkValue.value = data.worked_value ?? 0.0;
					dueDate.value = store.state.invoice.invoiceInfo.due_date ?? 0;
					getCalculation.value = store.state.invoice.invoiceInfo.tax_amount ?? 0.0;
					totalCompensationField.value = data.compensation_amount;
					subTotalField.value = data.sub_total;
					TaxbledAmount.value = data.tax_amount;
					CommitionAmount.value = data.commission_amount;
					deducationAmount.value = data.deduction_amount ?? 0;
					quickpayAmount.value = data.quick_pay_commission ?? 0;
					VatAddedValue.value = data.work_vat_value ?? 0;
					GrossSalary.value = data.gross_salary ?? 0;
					hoursAmountAfterTax.value = data.hours_amount_after_tax ?? 0;
					totalWorkValue.value = data.worked_value ?? 0.0;
					misbCommissionAmount.value = data.misb_commission_amount ?? 0;
					w2wCommissionAmount.value = data.w2w_commission_amount ?? 0;
				})
				.catch(err => {
					console.log(err.response, err.message);
					Swal.fire({
						text: err.message,
						icon: 'warning',
						showCancelButton: true,
						confirmButtonColor: '#3085d6',
						confirmButtonText: 'Ok',
					});
				});

			return true;
		};
		// const diffDay = ref(2);
		// expand work details
		const expandWorkDetails = (index, data) => {
			expandRowIndex.value = index;
			expandRowId.value = data.id;

			// if (data.trip_start_date && data.trip_end_date) {
			// 	const startDate = moment(data.trip_start_date).format('YYYY/MM/DD');
			// 	const endDate = moment(data.trip_end_date).format('YYYY/MM/DD');
			// 	const startDateTime = moment(`${startDate} 00:00`, 'YYYY/MM/DD HH:mm');
			// 	const endDateTime = moment(`${endDate} 23:59`, 'YYYY/MM/DD HH:mm').add(1, 'minutes');
			// 	const days = moment(endDateTime).diff(startDateTime, 'days');
			// 	diffDay.value = days
			// }

			// contactTypeField.value = data.contract_type;
			// contractValueField.value = data.contract_value;
			// hoursUnitField.value = data.total_work;
			// otherAmountField.value = data.other_amount;
			// distanceField.value = data.distance;
			// lunchCompensationField.value = data.lunchCompensation && Number(data.lunchCompensation.compensation_values);
			// fullHalfDatCompensationField.value = data.day_compensation;
			// otherCompensationField.value = Number(data.otherCompensation.compensation_values);
			// tripStartField.value = moment(data.trip_start, 'HH:mm:ss').format();
			// tripEndField.value = moment(data.trip_end, 'HH:mm:ss').format();
			// tripTimeField.value = data.trip_time;
			// tripAddressField.value = data.trip_address;
			// workDescriptionField.value = data.work_description;
		};

		// sink work details
		const sinkWorkDetails = () => {
			expandRowIndex.value = null;
		};

		// remove work details
		const removeWorkDetail = index => {
			Swal.fire({
				title: 'Are you sure?',
				text: 'You want to remove this work detail ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Remove It',
			}).then(async result => {
				if (result.isConfirmed) {
					let invoiceWorkDetails = localStorage.getItem('invoiceWorkDetails') ? JSON.parse(localStorage.getItem('invoiceWorkDetails')) : [];
					if (invoiceWorkDetails) {
						addNewItem.value = true;
						store.commit('workDetail/removeWorkDetail', index);
						workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
						updateInputByOnBlur();
					} else {
						workDetailList.value.splice(index, 1);
						localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
						updateInputByOnBlur();
					}

					Swal.fire('Success!', 'Work detail is removed!', 'success');
				}
			});
		};

		// add new work detail
		const addNewWorkDetail = () => {
			let invoiceWorkDetails = localStorage.getItem('invoiceWorkDetails') ? JSON.parse(localStorage.getItem('invoiceWorkDetails')) : [];
			if (invoiceWorkDetails) {
				addNewItem.value = true;
				store.commit('workDetail/addWorkDetails', Object.assign({}, defaultWorkDetails));
				workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			} else {
				workDetailList.value.push(Object.assign({}, defaultWorkDetails));
				localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
			}
			// Swal.fire({
			// 	title: 'Are you sure?',
			// 	text: 'You want to Add this invoice ?',
			// 	icon: 'warning',
			// 	showCancelButton: true,
			// 	confirmButtonColor: '#3085d6',
			// 	cancelButtonColor: '#d33',
			// 	confirmButtonText: 'Yes',
			// }).then(async result => {
			// 	if (result.isConfirmed) {
			// 		let invoiceWorkDetails = localStorage.getItem('invoiceWorkDetails') ? JSON.parse(localStorage.getItem('invoiceWorkDetails')) : [];
			// 		if (invoiceWorkDetails) {
			// 			addNewItem.value = true;
			// 			store.commit('workDetail/addWorkDetails', Object.assign({}, defaultWorkDetails));
			// 			workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			// 		} else {
			// 			workDetailList.value.push(Object.assign({}, defaultWorkDetails));
			// 			localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
			// 		}
			// 	}
			// });
		};

		// duplicate work details
		// eslint-disable-next-line no-unused-vars
		const duplicateWorkDetail = index => {
			let invoiceWorkDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			if (invoiceWorkDetails) {
				addNewItem.value = true;
				store.commit('workDetail/addWorkDetails', Object.assign({}, workDetailList.value[index]));
				workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
				updateInputByOnBlur();
			} else {
				workDetailList.value.push(Object.assign({}, defaultWorkDetails));
				localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
				// updateInputByOnBlur()
			}
			// Swal.fire({
			// 	title: 'Are you sure?',
			// 	text: 'You want to duplicate this work detail ?',
			// 	icon: 'warning',
			// 	showCancelButton: true,
			// 	confirmButtonColor: '#3085d6',
			// 	cancelButtonColor: '#d33',
			// 	confirmButtonText: 'Yes',
			// }).then(async result => {
			// 	if (result.isConfirmed) {
			// 		let invoiceWorkDetails = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			// 		if (invoiceWorkDetails) {
			// 			addNewItem.value = true;
			// 			store.commit('workDetail/addWorkDetails', Object.assign({}, workDetailList.value[index]));
			// 			workDetailList.value = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			// 			updateInputByOnBlur();
			// 		} else {
			// 			workDetailList.value.push(Object.assign({}, defaultWorkDetails));
			// 			localStorage.setItem('workDetails', JSON.stringify(workDetailList.value));
			// 			// updateInputByOnBlur()
			// 		}
			// 	}
			// });
		};

		// update work detail information
		// in localstorage
		const updateWorkDetailInfo = index => {
			// Swal.fire({
			// 	title: 'Are you sure?',
			// 	text: 'You want to save this work detail ?',
			// 	icon: 'warning',
			// 	showCancelButton: true,
			// 	confirmButtonColor: '#3085d6',
			// 	cancelButtonColor: '#d33',
			// 	confirmButtonText: 'Yes',
			// }).then(async (result) => {
			// 	if (result.isConfirmed) {
			// 		}
			// });
			const workDetailInfoList = localStorage.getItem('workDetails') ? JSON.parse(localStorage.getItem('workDetails')) : [];
			workDetailInfoList[index] = { ...workDetailInfoList[index], ...workDetailList.value[index] };
			localStorage.setItem('workDetails', JSON.stringify(workDetailInfoList));

			workDetailList.value = workDetailInfoList;
			updateInputByOnBlur();
		};

		const updateFlag = () => {
			editWorkDeatilsModal.value = false;
		};

		const addWorkDetails = (id, index, data) => {
			// let editInvoiceId = route.params.id ?? '';
			let dairiesField = {
				description: desciptionField.value,
				contract_type: contactTypeField.value,
				contract_value: contractValueField.value,
				distance: distanceField.value,
				lunch_compensation: lunchCompensationField.value,
				full_compensation: fullHalfDatCompensationField.value,
				other_compensation: otherCompensationField.value,
				work_description: workDescriptionField.value,
				total_work: hoursUnitField.value,
			};
			// let workDairies = 'EDIT';
			store.commit('invoice/SET_STATE', {
				action: 'invoiceWorkDairiesDetail',
				data: dairiesField,
			});
			if (id) {
				editWorkDeatilsModal.value = true;
				indexId.value = index ?? null;
				editWorkInfo.value = data ?? null;
			} else {
				editWorkDeatilsModal.value = true;
				indexId.value = index ?? null;
			}
		};
		// check input number length
		const checkInputNuberValue = e => {
			const inputNUmberLength = e.target.value ?? 0;
			const regexCheckNumber = /^\d{1,6}(\.\d{1,2})?$/;
			console.log(regexCheckNumber.test(inputNUmberLength));
			if (!regexCheckNumber.test(inputNUmberLength)) {
				toast.error('Value length is not valid');
				return;
			}
		};
		// check input number length
		const checkInputNuberQty = e => {
			const inputNUmberLength = e.target.value ?? 0;
			const regexCheckNumber = /^\d{1,4}(\.\d{1,2})?$/;
			console.log(regexCheckNumber.test(inputNUmberLength));
			if (!regexCheckNumber.test(inputNUmberLength)) {
				toast.error('Quantity length is not valid');
				return;
			}
		};
		// Watch
		watch(tripTimeCalc, () => {
			tripTimeField.value = tripTimeCalc.value < 0 ? 0 : tripTimeCalc.value;
		});

		watch(calculation_total, () => {
			setCalculation();
		});

		watch(workDetailsArray, () => {
			store.commit('invoice/remove', workDetailsArray.value.indexId);
			store.commit('invoice/upda', workDetailsArray.value);
		});

		//remove value - Contract Type
		// const removeContractType = event => {
		// 	if (event) {
		// 		workDetailList.value && workDetailList.value.map(item => (item.contract_type = null));
		// 	}
		// };

		// table open
		const openTable = index => {
			// showTable.value = !showTable.value
			if (tableIndex.value === index) {
				tableIndex.value = null;
				return;
			}
			tableIndex.value = index;
			console.log(tableIndex, 'kkkkkkk');
		};

		return {
			tableIndex,
			// ref
			t,
			indexId,
			contractTypeOptions,
			invoiceAllownceTracer,
			workDetailList,
			expandRowIndex,
			expandRowId,
			vatTypeOptions,
			work_hourId,
			invoiceWorkDetail,
			getCalculation,
			formFieldsData,
			editWorkDeatilsModal,
			editWorkInfo,
			currencyConverture,
			addNewItem,
			route,
			dateFormat,
			GrossSalary,
			TaxbledAmount,
			compensationAmount,
			youWillBePaid,
			invoiceTotal,
			vatTotal,
			dueDate,
			CommitionAmount,
			deducationAmount,
			quickpayAmount,
			VatAddedValue,
			hoursAmountAfterTax,
			misbCommissionAmount,
			w2wCommissionAmount,
			totalWorkValue,

			// icons
			plusIcon,
			copyIcon,
			trashIcon,
			downIcon,
			upIcon,
			euroSign,
			saveIcon,
			closeIcon,
			arrowDown,
			arrowUp,

			// Form
			submitForm,
			formMeta,
			resetForm,
			submitFormNext,
			updateInputByOnBlur,

			// Form Feilds
			desciptionField,
			contactTypeField,
			contractValueField,
			hoursUnitField,
			vatField,
			otherAmountField,
			distanceField,
			lunchCompensationField,
			fullHalfDatCompensationField,
			otherCompensationField,
			tripStartField,
			tripEndField,
			tripTimeField,
			tripAddressField,
			workDescriptionField,
			totalCompensationField,
			subTotalField,

			// computed
			calculateSubTotal,
			calculateTotalWithoutVat,
			calculateVat,
			calculatgeTotalWithVat,
			tripTimeCalc,
			workedHoursDetails,
			isDisableCompensation,
			dayCompensationDisable,
			totalCompensation,
			totalDistanceKilloMeter,
			finalTotal,
			workDetailsArray,
			workDetailBtnDisabled,
			displayAllW2WTotoal,
			isDublicateInvoiceDisable,
			// methods
			workDetails,
			expandWorkDetails,
			sinkWorkDetails,
			removeWorkDetail,
			addNewWorkDetail,
			duplicateWorkDetail,
			addWorkDetails,
			updateFlag,
			updateWorkDetailInfo,
			editHandleContractValue,
			onTransported,
			openTable,

			//remove value from dropdown
			// removeContractType,
			checkInputNuberValue,
			checkInputNuberQty,
		};
	},
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.workHourList {
	.responsive-table {
		.collapse-div {
			border-top-left-radius: 18px;
			border-top-right-radius: 18px;
		}
		.expand-daily-table {
			background-color: #f5f5f5;
			border-bottom-right-radius: 18px;
			border-bottom-left-radius: 18px;
			padding: 10px 30px 10px 30px;
			.table-border {
				margin: 0 auto;
			}
			.product-1 {
				background-color: #fff;
				font-size: 14px;
				display: inline-block;
				padding: 8px 25px;
				border-radius: 12px;
				border: 2px solid #e4e6e7;
				width: 100%;
				text-align: center;
			}
			.product-2 {
				background-color: #fff;
				font-size: 14px;
				display: inline-block;
				padding: 8px 25px;
				border-radius: 12px;
				border: 2px solid #e4e6e7;
				width: 100%;

				@media (max-width: 575px) {
					padding: 8px 15px;
				}
			}
			.days-red {
				padding: 8px 25px;
				border-radius: 12px;
				background-color: #ff4b57;
				color: #fff;
			}

			.buttons {
				color: #ff4b57;
				.delete-btn,
				.copy-btn {
					width: 40px;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 5px;
					border-radius: 12px;
					background-color: #f8dddf;
				}

				.down-btn {
					width: 40px;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 12px;
					color: #ffff;
					background-color: #273238;
				}
			}
			.summary-box {
				padding: 10px 20px;
				border-radius: 13px;
				height: auto;
			}
			.work-width {
				.work {
					.form-control {
						border: 2px solid #e4e6e7;
					}
				}
			}
		}
	}
}
.invoice__list {
	.inpult-area {
		outline: none;
		border: none;
		width: 100%;
		background-color: transparent;
	}

	.employer-details {
		display: flex;
		align-items: center;
		justify-content: space-between;

		// margin:10px 0;
		.title-lg {
			color: #a0a4a9;
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
	}

	.daily-work-row {
		@media (max-width: 1440px) {
			overflow: auto;
		}
	}

	.daily-work-col {
		@media (max-width: 1440px) {
			min-width: 950px;
		}

		// @media (max-width: 1200px) {
		// 	min-width: 1150px;
		// }
		@media (max-width: 768px) {
			min-width: 1050px;
		}
	}

	.details-head {
		display: flex;
		align-items: center;
		background-color: #273238;
		padding: 10px 10px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;

		.product-no {
			width: 5%;
		}

		.days {
			width: 8%;
		}

		.contract-type {
			width: 10%;
		}

		.contract-value {
			width: 8%;
		}

		.quantity {
			width: 7%;
		}

		.actions {
			width: 15%;
		}

		.discription {
			width: 46%;
		}
	}

	.details-head-text {
		color: #ffff;
		font-size: 16px;
	}

	.daily-work-col {
		border: 1px solid #dde0e2;
		border-radius: 10px;
	}

	.details-content {
		display: flex;
		align-items: center;
		padding: 7px 5px;
		border-top: 1px solid #dde0e2;
		min-width: 900px;
		// overflow: auto;

		.product-width {
			width: 5%;

			.product-1 {
				font-size: 14px;
				display: inline-block;
				padding: 8px 25px;
				border-radius: 12px;
				border: 2px solid #e4e6e7;
			}

			.product-2 {
				background-color: #fff;
			}
		}

		.work-width {
			width: 46%;

			.work {
				width: 98%;
				padding: 8px 20px;
				border-radius: 12px;
				background-color: #f6f6f6;
				font-size: 14px;

				.form-control {
					border: none;
					padding: 0;
					background-color: transparent;
				}
			}

			.programme {
				background-color: #ffff;
			}
		}

		.contractvalue-width,
		.hours-width {
			width: 8%;

			.hours {
				width: 90%;
				padding: 0;
				border-radius: 12px;
			}

			.contractvalue {
				width: 90%;
				padding: 8px 25px;
				border-radius: 12px;
				background-color: #f6f6f6;
			}

			.contractvalue-1 {
				background-color: #ffff;
			}

			.pieces {
				background-color: #ffff;
			}

			.totalamount {
				width: 90%;
				padding: 8px 10px;
				border-radius: 12px;
				display: flex;
				align-items: center;
				background-color: #f6f6f6;

				p {
					margin-right: 5px;
				}

				input::-webkit-outer-spin-button,
				input::-webkit-inner-spin-button {
					appearance: none;
					margin: 0;
				}
			}

			.totalamount-1 {
				background-color: #ffff;
			}
		}

		.hours-width {
			width: 10%;
		}

		.totalamount-width {
			.totalamount {
				width: 90%;
				padding: 8px 10px;
				border-radius: 12px;
				display: flex;
				align-items: center;
				background-color: #f6f6f6;

				p {
					margin-right: 5px;
				}
			}

			width: 7%;
		}

		.multiple-day {
			width: 8%;
		}

		.buttons {
			color: #ff4b57;
			width: 15%;
			display: flex;
			// justify-content: flex-end;
			cursor: pointer;

			.delete-btn,
			.copy-btn {
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 5px;
				border-radius: 12px;
				background-color: #f8dddf;
			}

			.down-btn {
				width: 40px;
				height: 40px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 12px;
				color: #ffff;
				background-color: #273238;
			}
		}
	}

	.details-content-1 {
		background-color: #f6f6f6;
	}

	.opne-toggle {
		padding: 10px 20px;
		@media (max-width: 575px) {
			padding: 0;
			margin: 0 -15px;
		}

		// background-color: #f6f6f6;
		// border: 1px solid #dde0e2;
		.payment-section {
			display: grid;
			gap: 1.25rem;
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.input-title {
			font-size: 14px;
			margin-bottom: 5px;
			font-weight: 500;
			color: #858a90;
		}

		.inpul-fount-md {
			font-size: 14px;
		}

		.input-parent-white {
			background-color: #ffff;
			border-radius: 12px;
			padding: 8px 15px;
		}

		.other-amount {
			display: grid;
			gap: 1.25rem;
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.other-compensation {
			font-size: 14px;
			padding: 2px 8px;
			border-radius: 8px;
			background-color: #f6f6f6;
		}

		.trip-time {
			display: grid;
			gap: 5px;
			padding: 5px;
			font-size: 14px;
			border-radius: 12px;
			background-color: #ffff;
			grid-template-columns: repeat(2, minmax(0, 1fr));

			.trip-start-time {
				width: 100%;
				padding: 5px 15px;
				text-align: left;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}

		.address-section {
			padding: 10px 0;
		}

		.work-description {
			width: 100%;
			outline: none;
			font-size: 14px;
			border: none;
			resize: none;
		}
	}

	.summary-box {
		background-color: #e92028;
		color: #fff;
		padding: 20px;
		border-radius: 20px;
		height: 100%;

		// width: 320px;
		h1 {
			font-weight: 600;
			font-size: 48px;
			letter-spacing: -3px;
			line-height: 41px;
			text-shadow: 1px 3px 3px #494848;

			@media (max-width: 1440px) {
				font-size: 45px;
			}
		}
	}

	.dark-box {
		background-color: #4c4f56;
		color: #fff;
		padding: 30px;
		border-radius: 20px;
		height: 100%;
		@media (max-width: 768px) {
			padding: 15px 20px;
		}

		.dark-box-text {
			font-size: 19px;
			letter-spacing: -1px;
			text-shadow: 1px 3px 3px #494848;
			@media (max-width: 768px) {
				font-size: 17px;
			}
			@media (max-width: 575px) {
				font-size: 13px;
			}
		}
	}

	.total {
		background-color: #f9f9f9;
		border-radius: 20px;
		padding: 25px;

		// max-width: 450px;
		// width: 100%;
		// padding: 10px 20px;
		// margin-left: auto;
		.total-excl {
			width: 100%;
			display: flex;
			padding-bottom: 5px;
			justify-content: space-between;
			align-items: center;

			.text-total {
				color: #858a90;
				font-size: 14px;
			}

			.text-prize {
				font-size: 14px;
				font-weight: 800;
			}
		}

		.total-excl-border {
			border-bottom: 2px solid #dde0e2;
		}

		.total-bold-border {
			border-bottom: 4px solid #dde0e2;
			padding: 5px 0;
			border-top: 1px solid #dde0e2;

			.all-total {
				font-weight: 600;
			}

			.total-prize {
				color: #ff4b57;
				font-weight: 600;
			}
		}
	}

	.text-gray {
		margin-bottom: 10px;
		color: #a0a4a9;
	}

	.grey-light {
		color: #babec3;
		font-weight: 500;
	}

	.explaination {
		padding: 10px;
		border-radius: 12px;
		outline: none;
		width: 100%;
		border: 3px dashed #dde0e2;
		// background-color: #f6f6f6;
	}

	.paperclip-icone {
		color: white;
		margin-right: 10px;
		font-size: 16px;
	}

	.copy-icone {
		color: #ff4b57;
	}

	.down-icone {
		color: #ffff;
		font-size: 20px;
	}

	.dark-box-input {
		background-color: #4c4f56;
		border: none;
		color: #fff;
		width: 80%;
	}
}

.invoice-pd {
	padding: 10px 20px;
}

.multi-rounded {
	border-radius: 50px;
	padding: 4px 22px;
	font-size: 12px;
}

.bg-danger {
	background: #ff4b57;
}

.bottom-header {
	background-color: $coloRed;
	padding: 10px;
	border-radius: 5px;

	@media (max-width: 768px) {
		// min-width: 760px;
	}
}
</style>

<style lang="scss" scoped>
.multiselect-options {
	overflow: auto;
	border-radius: 10px;
}

.multiselect-option {
	background-color: #ffffff;
}

.multiselect-option.is-selected.is-pointed {
	color: #000;
	background: #ffff;
}

.multiselect-option.is-selected {
	color: #ff4b57;
	background-color: #ffff;
}

.trip-time {
	padding: 5px 15px !important;
	display: block !important;

	.form-control {
		border: none;
		width: 100%;
		padding: 0;
		height: auto;
	}

	.vc-time-picker {
		padding: 0 !important;

		.vc-time-icon {
			width: 22px;
			height: 22px;
		}
	}

	.vc-time-date {
		display: none !important;
	}

	.vc-select select {
		background: none;
		border: none;

		&:hover {
			color: #000000;
		}
	}
}

.invoice__list .invoice-dropdown {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	border-radius: 50px;
	font-size: 14px;

	&:focus {
		box-shadow: none;
	}
}

.dropdown-menu {
	padding: 15px;
	border: transparent;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	color: #949494;
}

.dropdown-item {
	padding: 8px 0px;
	color: rgb(80, 76, 76);

	&:hover {
		background-color: transparent;
		color: red;
	}
}

.btnDisabled {
	cursor: not-allowed;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.form-checkbox {
	margin-bottom: 10px;
	display: flex;
	justify-content: flex-end;

	.form-checkbox-width {
		width: 1.4em;
		height: 1.4em;
		margin: 0 0 0 -19px;

		&:focus {
			box-shadow: none;
		}
	}
}

.form-check-input {
	position: relative;
}

.form-check-input:checked {
	background-color: #565e64;
	border-color: #565e64;
}

.form-check-input:focus {
	border-color: #565e64;
}

.margin-top-5 {
	margin-top: 15px;
}

.pph-left {
	h5 {
		font-size: 16px;
	}
}

.text-sm-fw {
	font-size: 16px;
	//   font-weight: 500;
}
</style>

<style lang="scss">
.expand-daily-table {
	.hours {
		.multiselect-input {
			border: 2px solid #e4e6e7 !important;
		}
	}
}
</style>

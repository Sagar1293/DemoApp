<template>
	<div class="company__profile">
		<!-- dashboard stats -->
		<div class="dash-user-info">
			<div class="container-lg p-0">
				<div class="puzzle-grid">
					<!-- number of working hours -->
					<div class="puzzle-col">
						<router-link to="/econtract">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/yellow.png" alt="img" class="puzzle-fluid" />
								</span>

								<h3 class="text-light fw-bold mb-5 puzzle-font">
									{{ t('companyDashboard.eContracts') }}
								</h3>

								<a href="" class="text-light fw-bold arrow-size text-end d-block">></a>
								<div class="puzzle-icon">
									<img src="@/assets/images/brief.png" alt="img" class="img-fluid icon-ing" />
								</div>
							</div>
						</router-link>
					</div>

					<!-- invoices -->
					<div class="puzzle-col">
						<router-link to="/job/list">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/danger-puzzle.png" alt="img" class="puzzle-fluid" />
								</span>
								<h3 class="fw-bold mb-4 puzzle-font text-light">
									{{ t('companyDashboard.myGigs') }}
								</h3>
								<a href="" class="text-light fw-bold text-size text-end d-block">{{ companyDashboard.job_post }}</a>
								<div class="puzzle-icon">
									<img src="@/assets/images/red-puzzle-icon.png" alt="img" class="puzzle-fluid" />
								</div>
							</div>
						</router-link>
					</div>

					<!-- number of invites -->
					<div class="puzzle-col">
						<router-link to="/gigworkhour">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/info-puzzle.png" alt="img" class="puzzle-fluid" />
								</span>

								<h3 class="fw-bold mb-4 puzzle-font text-light">
									{{ t('leDashboard.WORKDETAILS') }}
								</h3>
								<a href="" class="text-light fw-bold text-size text-end d-block">{{ companyDashboard.worked_hours }}</a>
								<div class="puzzle-icon ">
									<img src="@/assets/images/info-puzzle-icon.png" alt="img" class="puzzle-fluid" />
								</div>
							</div>
						</router-link>
					</div>

					<!-- work contract, my cv -->
					<div class="puzzle-col">
						<router-link to="/invoices">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/black-puzzle.png" alt="img" class="puzzle-fluid" />
								</span>

								<h3 class="text-light fw-bold mb-4 puzzle-font">
									{{ t('leDashboard.YOURINVOICES') }}
								</h3>
								<a href="" class="text-light fw-bold text-size text-end d-block ">{{ companyDashboard.invoice }}</a>
								<div class="puzzle-icon ">
									<img src="@/assets/images/piggy-bank.png" alt="img" class="puzzle-fluid" />
								</div>
								<!-- <a href="">More Information ></a> -->
							</div>
						</router-link>
					</div>

					<!-- work contract, my cv -->
					<div class="puzzle-col">
						<router-link to="/CompanyInvites">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/green-puzzle.png" alt="img" class="puzzle-fluid" />
								</span>
								<h3 class="fw-bold mb-5 puzzle-font text-light">
									{{ t('leDashboard.INVITEFRIENDS') }}
								</h3>
								<a href="" class="text-light fw-bold arrow-size text-end d-block">></a>
								<div class="puzzle-icon">
									<img src="@/assets/images/computer.png" alt="img" class="puzzle-fluid" />
								</div>
							</div>
						</router-link>
					</div>

					<!-- number of working hours -->
					<div class="puzzle-col">
						<router-link to="/documents" class="">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/dashboard-red-2.png" alt="img" class="puzzle-fluid" />
								</span>
								<div>
									<h3 class="text-light fw-bold mb-5 puzzle-font">
										{{ t('leDashboard.TOTALEARNINGSLASTMONTH') }}
									</h3>
									<a href="" class="text-light fw-bold arrow-size text-end d-block">€ {{ Number(companyDashboard.total_expense_of_last_month).toFixed(2) || 0 }}</a>
								</div>
							</div>
						</router-link>
					</div>

					<!-- invoices -->
					<div class="puzzle-col">
						<router-link to="/job/proposals" class="">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/dashboard-red-1.png" alt="img" class="puzzle-fluid" />
								</span>
								<h3 class="text-light fw-bold puzzle-font">
									{{ t('leDashboard.INVOICESLASTMONTH') }}
								</h3>
								<a href="" class="text-light fw-bold text-size text-end d-block">{{ companyDashboard.total_invoice_count_of_last_month || 0 }}</a>
								<a href="" class="text-light fw-bold arrow-size text-end d-block">€ {{ Number(companyDashboard.total_invoice_amount_of_last_month).toFixed(2) || 0 }}</a>
							</div>
						</router-link>
					</div>

					<!-- number of invites -->
					<div class="puzzle-col">
						<router-link to="/worked-details" class="">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/dashboard-dark-1.png" alt="img" class="puzzle-fluid" />
								</span>

								<h3 class="text-light fw-bold puzzle-font">
									{{ t('leDashboard.PENDINGINVOICES') }}
								</h3>
								<a href="" class="text-light fw-bold text-size text-end d-block">{{ companyDashboard.pendingInvoices || 0 }}</a>
								<a href="" class="text-light fw-bold arrow-size text-end d-block">€ {{ Number(companyDashboard.pendingInvoiceAmount).toFixed(2) || 0 }}</a>
							</div>
						</router-link>
					</div>

					<!-- work contract, my cv -->
					<div class="puzzle-col">
						<router-link to="/invoices" class="">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/dashboard-grey-1.png" alt="img" class="puzzle-fluid" />
								</span>

								<h3 class="fw-bold puzzle-font">
									{{ t('leDashboard.TEAMINVOICES') }}
								</h3>
								<a href="" class="fw-bold text-size text-end d-block ">{{ companyDashboard.totalTeamInvoiceCount || 0 }}</a>
								<a href="" class="fw-bold arrow-size text-end d-block">€ {{ Number(companyDashboard.totalTeamInvoiceAmount)?.toFixed(2) || 0 }}</a>
							</div>
						</router-link>
					</div>

					<!-- work contract, my cv -->
					<!-- <div class="puzzle-col">
							<router-link to="/invites">
								<div class="dash-user-info-box">
									<span class="user-info-box-right">
										<img src="@/assets/images/dashboard-grey-2.png" alt="img" class="puzzle-fluid" />
									</span>
									<h2 class="fw-bold puzzle-font">
										TAX CARDS
									</h2>
									<a href="" class="fw-bold text-size text-end d-block">32</a>
								</div>
							</router-link>
						</div> -->

					<!-- work contract, my cv -->
					<!-- <div class="puzzle-col">
						<router-link to="/invites">
							<div class="dash-user-info-box">
								<span class="user-info-box-right">
									<img src="@/assets/images/dashboard-grey-2.png" alt="img" class="puzzle-fluid" />
								</span>
								<h2 class="fw-bold puzzle-font">
									TAX CARDS
								</h2>
								<a href="" class="fw-bold text-size text-end d-block">32</a>
							</div>
						</router-link>
					</div> -->
				</div>
			</div>
		</div>

		<div class="dash-profile-data">
			<div class="row">
				<div class="col-xl-7">
					<div class="dash-user-profile-info mt-xl-3">
						<div class="row">
							<div class="col-xl-4 col-12">
								<div class="user-rotate-puzzle">
									<img src="@/assets/images/puzzle-rotate-red-puzzle.png" alt="img" class="w-100 h-100 puzzle-fluid" />

									<div class="user-rotate-img">
										<img :src="userProfileDetails?.file_path" class="w-100 h-100" />
									</div>
								</div>
							</div>
							<div class="col-xl-8 col-12">
								<div class="">
									<div class="profile-info-box">
										<div class="info-box-icon">
											<FontAwesomeIcon :icon="userIcon" />
										</div>
										<div class="info-box-text">
											<div v-if="userTypeInfo == 'jobseeker'">
												<p class="text-big">
													{{ userInfo.full_name }}
												</p>
												<a href="" class="text-small">{{ userInfo.email }} </a>
											</div>
											<div v-else>
												<p class="text-big">
													{{ userProfileDetails.company && userProfileDetails.company.company_name }}
												</p>
												<a href="" class="text-small">{{ userProfileDetails.company && userProfileDetails.company.company_email }} </a>
											</div>
										</div>
									</div>
									<div class="profile-info-box mt-3">
										<div class="info-box-icon clr-gay">
											<FontAwesomeIcon :icon="locationIcon" />
										</div>
										<div class="info-box-text">
											<div v-if="userTypeInfo == 'jobseeker'">
												<a class="text-big">{{ userInfo.jobSeeker && userInfo.jobSeeker.address }}</a>
											</div>
											<div v-else>
												<a class="text-big">{{ userProfileDetails.company && userProfileDetails.company.address }}</a>
											</div>
										</div>
									</div>

									<div class="profile-info-box mt-3">
										<div class="info-box-icon clr-gay">
											<FontAwesomeIcon :icon="editIcon" />
										</div>
										<div class="info-box-text">
											<router-link to="/companyprofile" class="text-decoration-underline">{{ t('commanDashboard.manageAccount') }}</router-link>

											<!-- <a href="" class="text-decoration-underline">Manage Account</a> -->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- <div class="col-xl-5">
					<div class="dash-user-data">
						<div class="dash-user-data-top">
							<div class="data-left mb-3">
								<label class="fw-bold w-100">Your Social Security Number:</label>
								<span>
									{{ companyDashboard.tax_number }}
									<a href="" class="text-light fw-bold text-decoration-underline">REVEAL</a>
								</span>
							</div>

							<div class="mb-3">
								<label class="fw-bold w-100">Your Tax Number: </label>
								<span>{{ companyDashboard.tax_number }}</span>
							</div>

							<div class="mb-3">
								<label class="fw-bold w-100">Your SSN Number: </label>
								<span>{{ companyDashboard.ssn }}</span>
							</div>
						</div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import { dateFormat } from '@/utils/mixins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { onMounted } from 'vue';
import { faEdit, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
export default {
	name: 'CompanyProfile',

	// components
	components: {
		FontAwesomeIcon,
	},

	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		document.title = 'Dashboard - Way2Work';
		//global store
		const store = useStore();

		// icons
		const userIcon = faUser;
		const editIcon = faEdit;
		const locationIcon = faMapMarkerAlt;

		//global router
		// const router = useRouter();

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// get dashboard data
			fetchCompanyDashboard();
		});

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		// For User Info
		const userProfileDetails = computed(() => store.state.auth.userProfile);

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		// for comapany dashboard
		const companyDashboard = computed(() => store.state.dashboard.DashboardCompany);

		// Dashboard and user profile
		const userInfo = computed(() => store.state.dashboard.DashboardWorkStats);

		/**
		 * Methods
		 * *******************************************************************
		 */
		const fetchCompanyDashboard = () => {
			store.dispatch('dashboard/getCompanyDashboard');
		};
		return {
			//computed
			userProfileDetails,
			dateFormat,

			// icon
			userIcon,
			editIcon,
			locationIcon,
			userInfo,
			userTypeInfo,
			companyDashboard,

			// trasnslate function
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.dash-user-info {
	background-color: #fff;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	padding: 28px 11px;

	.dash-user-info-box {
		background-color: transparent;
		position: relative;
		z-index: 1;
		min-height: 250px;
		max-width: 250px;
		padding: 50px;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		transition: all 0.5s;

		&:hover {
			transform: scale(1.1);
		}

		@media (max-width: 768px) {
			min-height: 210px;
			padding: 34px 40px 40px 40px;
		}

		@media (max-width: 675px) {
			min-height: 210px;
			padding: 35px 61px 35px 51px;
		}

		// @media (max-width: 425px) {
		// 	min-height: 280px;
		// 	padding: 60px;
		// }

		.puzzle-font {
			@media (max-width: 768px) {
				font-size: 15px;
				padding-top: 20px;
			}
			@media (max-width: 675px) {
				font-size: 17px;
				padding-top: 10px;
			}
			@media (max-width: 576px) {
				font-size: 14px;
			}
		}
	}

	.puzzle-icon {
		position: absolute;
		left: 22%;
		bottom: -1%;
		transform: translate(-20px, -40px);
		z-index: -1;

		@media (max-width: 1440px) {
			max-width: 60px;
			width: 100%;
		}

		@media (max-width: 768px) {
			max-width: 50px;
			width: 100%;
		}

		@media (max-width: 576px) {
			right: 30px;
			transform: translate(0, -30px);
		}

		@media (max-width: 375px) {
			right: 30px;
			transform: translate(0, -53px);
		}
	}

	.user-info-box-right {
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.arrow-size {
		font-size: 18px;
	}
	.text-size {
		font-size: 50px;
		@media (max-width: 1440px) {
			font-size: 40px;
		}
		@media (max-width: 768px) {
			font-size: 35px;
		}
	}

	.puzzle-fluid {
		width: 100%;
		height: 100%;
		position: relative;
		object-fit: contain;
	}
	.user-info-box-right {
		p {
			font-weight: 600;
			margin-bottom: 5px;
		}

		a {
			font-size: 14px;
			// color: $colorLightGray;

			&:hover {
				color: $coloRed;
			}
		}
	}
}

@media (max-width: 992px) {
	.dash-user-info {
		padding: 20px 15px;
	}
}

@media (max-width: 576px) {
	.dash-user-info {
		.dash-user-info-box {
			.user-info-box-left {
				.user-info-left-icon-box {
					width: 40px;
					height: 40px;
					line-height: 42px;

					svg {
						font-size: 15px;
					}
				}
			}

			.user-info-box-right {
				p {
					font-size: 14px;
					margin: 0;
				}

				a {
					font-size: 12px;
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.dash-user-info {
		.dash-user-info-box {
			display: block;
			text-align: center;
			margin: 0 auto;

			.user-info-box-left {
				.user-info-left-icon-box {
					margin: 0 auto;
				}
			}
		}
	}
}

.text-lg {
	font-size: 24px;
}

.dark-cardpuzzle {
	background-color: transparent;
	position: relative;
	z-index: 1;
	padding: 50px;
	color: #fff;
	height: 100%;
	// width: 500px;

	@media (max-width: 1400px) {
		margin: 0 auto;
		padding: 100px;
	}

	@media (max-width: 576px) {
		width: 370px;
		height: 360px;
		padding: 60px;
		// font-size: 20px;
	}

	.tax-limit-progress {
		height: 2rem;
		border-radius: 1rem;
		background-color: #232323;
		position: relative;
		z-index: 3;
		box-shadow: 0px 2px 2px #000;

		.tax-limit-bar {
			background-color: #d11d25 !important;
		}

		span {
			color: $colorWhite;
			line-height: 30px;
		}
	}
	&:after {
		content: '';
		background-image: url('~@/assets/images/payment-card.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		position: absolute;
		bottom: 40px;
		right: 70px;
		transform: translate(0, -20px);
		max-width: 150px;
		max-height: 130px;
		width: 100%;
		height: 100%;

		@media (max-width: 1024px) {
			max-width: 80px;
		}
	}
}

.dash-profile-data {
	.dash-user-profile-img {
		width: 200px;
		height: 200px;
		border-radius: 100%;
		margin-right: 40px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media (max-width: 1024px) {
			margin: 0 auto;
		}
	}

	.dash-user-profile-info {
		border-radius: 20px;
		border-radius: 25px;
		box-shadow: 2px 2px 16px #eae9e9;
		padding: 50px;
		height: 100%;

		@media (max-width: 1024px) {
			margin: 0 auto;
			height: 100%;
		}

		@media (max-width: 768px) {
			margin: 0 auto;
			max-width: 400px;
		}

		.profile-info-box {
			display: flex;
			align-items: center;
		}

		.info-box-icon {
			width: 40px;
			height: 40px;
			min-width: 40px;
			line-height: 40px;
			text-align: center;
			border-radius: 10px;
			overflow: hidden;
			background-color: $coloRed;
			margin-right: 10px;

			svg {
				color: #fff;
			}

			&.clr-gay {
				background-color: $colorExLightGray;

				svg {
					color: $colorGray;
				}
			}
		}

		.info-box-text {
			a {
				&:hover {
					color: $coloRed;
				}
			}
		}
	}

	.dash-user-data {
		background-color: #000;
		padding: 40px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		color: #fff;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
		position: relative;
		z-index: -1;
		margin-top: -20px;
		height: 110%;

		&:after {
			content: '';
			background-image: url('~@/assets/images/payment-card.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
			position: absolute;
			bottom: 10px;
			transform: translate(-10px, 0);
			right: 0;
			max-width: 150px;
			width: 100%;
			height: 100px;
		}

		.dash-user-data-top {
			margin-bottom: 30px;
		}

		.dash-user-data-bottom {
			display: flex;
			align-items: center;
		}

		@media (max-width: 1024px) {
			max-width: 500px;
			margin-left: auto;
			border-radius: 30px;
		}

		@media (max-width: 992px) {
			max-width: 510px;
			margin-left: auto;
		}

		@media (max-width: 768px) {
			max-width: 500px;
			margin: 0 auto;
		}

		@media (max-width: 576px) {
			max-width: 400px;
			margin: 0 auto;
		}
	}
}

@media (max-width: 1200px) {
	.dash-profile-data {
		.dash-user-data {
			float: none;
			text-align: center;
			margin-top: 30px;

			.dash-user-data-top {
				margin-bottom: 20px;
			}
		}
	}
}

@media (max-width: 992px) {
	.dash-profile-data {
		margin: 30px 0px;
	}
}

@media (max-width: 768px) {
	.dash-user-data {
		text-align: left;
	}
	.dash-user-profile-img {
		width: 80px;
		height: 80px;
		margin-right: 20px;

		img {
			width: 80px;
			height: 80px;
		}
	}
}

@media (max-width: 576px) {
	.dash-profile-data {
		.dash-user-profile {
			.dash-user-profile-img {
				width: 80px;
				height: 80px;
				margin-right: 20px;

				img {
					width: 80px;
					height: 80px;
				}
			}
		}
	}
}

@media (max-width: 468px) {
	.dash-profile-data {
		.dash-user-profile {
			display: block;
			text-align: center;

			.dash-user-profile-img {
				margin: 0 auto;
				margin-bottom: 10px;
			}

			.dash-user-profile-info {
				.profile-info-box {
					justify-content: center;
				}

				.info-box-icon {
					width: 35px;
					height: 35px;
					line-height: 35px;

					svg {
						font-size: 15px;
					}
				}
			}
		}

		.dash-user-data-top {
			justify-content: center;
		}

		.dash-user-data-bottom {
			justify-content: center;
		}
	}
}
.btn-grey {
	background-color: #4c5b64;
	margin-right: 10px;
	padding: 5px 10px;
	color: #fff;
	font-size: 13px;
}
.text-danger {
	color: red;
}
.text-lg {
	font-size: 20px;
}
.text-grey {
	color: #ccc;
}
.progress-text {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}

.tax-limit-progress {
	height: 2rem;
	border-radius: 1rem;
	background-color: #232323;
	position: relative;
	z-index: 3;
	box-shadow: 0px 2px 2px #000;

	.tax-limit-bar {
		background-color: #d11d25 !important;
	}

	span {
		color: $colorWhite;
		line-height: 30px;
	}
}
.puzzle-grid {
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));

	@media (max-width: 1646px) {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}

	@media (max-width: 1280px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	// @media (max-width:1024px) {
	// 	grid-template-columns: repeat(2, minmax(0, 1fr));
	// }

	@media (max-width: 992px) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}

	@media (max-width: 675px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}
}
.user-rotate-puzzle {
	.user-rotate-img {
		@media (min-width: 1440px) {
			max-width: 110px;
			min-width: 110px;
			height: 110px;
		}
		@media (min-width: 2560px) {
			max-width: 121px;
			// min-width: 110px;
			height: 121px;
		}
	}
	img {
		object-fit: cover;
	}
}
</style>

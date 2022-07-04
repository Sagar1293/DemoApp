<template>
	<div class="dash-profile-data">
		<div class="row mt-3">
			<div class="col-xl-7 col-lg-12 col-12">
				<div class="dash-user-profile-info mt-xl-0 mt-4">
					<div class="row">
						<div class="col-md-4 col-12">
							<div class="user-rotate-puzzle p-0 mb-xl-0 mb-3">
								<img src="@/assets/images/puzzle-rotate-red-puzzle.png" alt="img" class="w-100 h-100 puzzle-fluid" />

								<div class="user-rotate-img">
									<img :src="userInfo?.file_path" class="w-100 h-100" />
								</div>
							</div>
						</div>
						<div class="col-md-8 col-12">
							<div class="profile-info-box">
								<div class="info-box-icon">
									<FontAwesomeIcon :icon="userIcon" />
								</div>
								<div class="info-box-text">
									<div>
										<p class="text-big">
											{{ userInfo.full_name || '' }}
										</p>
										<a class="text-small">{{ userInfo.email || '' }}</a>
									</div>
								</div>
							</div>

							<div class="profile-info-box mt-3">
								<div class="info-box-icon clr-gay">
									<FontAwesomeIcon :icon="locationIcon" />
								</div>
								<div class="info-box-text">
									<!-- href="https://goo.gl/maps/s4GYCehkHvuYHHzj7" -->
									<div>
										<a class="text-big"> {{ userInfo.cityReference?.city_name }}, {{ userInfo.countryReference?.country_name }}</a>
									</div>
								</div>
							</div>

							<div class="profile-info-box mt-3">
								<div class="info-box-icon clr-gay">
									<FontAwesomeIcon :icon="editIcon" />
								</div>
								<div class="info-box-text">
									<!-- <a href="/invoices/add" class="text-decoration-underline"
										>Manage Account</a -->

									<router-link to="/update-profile" class="text-decoration-underline">{{ t('sidebar.manageAccount') }}</router-link>
								</div>
							</div>
						</div>
					</div>
					<div class="dark-card-puzzle-responsive dark-cardpuzzle mt-xl-0 mt-5">
						<div class="dash-user-data-top">
							<div class="data-left mb-3">
								<label class="fw-bold w-100">{{ t('leDashboard.YourSSN') }}:</label>
								<span>
									{{ userInfo?.jobSeeker?.ssn }}
								</span>
								<br />
								<!-- <a href="#" class="text-light fw-bold text-decoration-underline">REVEAL</a> -->
							</div>
							<div class="mb-3">
								<label class="fw-bold">{{ t('leDashboard.TaxProgressBar') }}: </label>
								<div class="progress tax-limit-progress text-center mb-3">
									<!-- <div class="progress-bar tax-limit-bar" role="progressbar" :style="styeValue"></div>
								<span class="fw-bold text-lg progress-text">{{ currencyConverture(progressVal.earned_percentage) || 0 }}%</span> -->
									<slider class="w-100" v-model="progressVal" disabled="true" />
									<span class="fw-bold text-lg progress-text">{{ currencyConverture(progressVal) || 0 }}%</span>
								</div>

								<!-- <div class="">
								<label class="fw-bold w-100">Your Tax Number: </label>
								<span>{{ userInfo?.jobSeeker?.tax_number }}</span>
							</div> -->
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-xl-5 col-lg-12 col-12">
				<div class="dark-cardpuzzle mt-xl-0 mt-5">
					<div class="dash-user-data-top">
						<div class="data-left mb-3">
							<label class="fw-bold w-100">{{ t('leDashboard.YourSSN') }}:</label>
							<span>
								{{ userInfo?.jobSeeker?.ssn }}
							</span>
							<br />
						</div>
						<div class="mb-3">
							<label class="fw-bold">{{ t('leDashboard.TaxProgressBar') }}: </label>
							<div class="progress tax-limit-progress text-center mb-3">
								<slider class="w-100" v-model="progressVal" disabled="true" />
								<span class="fw-bold text-lg progress-text">{{ currencyConverture(progressVal) || 0 }}%</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Slider from '@vueform/slider';
import { faUser, faMapMarkerAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { currencyConverture } from '@/utils/mixins';

export default {
	name: 'UserInformation',

	// components
	components: {
		FontAwesomeIcon,
		Slider,
	},

	// composition api
	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// icons
		const userIcon = faUser;
		const editIcon = faEdit;
		const locationIcon = faMapMarkerAlt;
		// const style = ref(null);
		// global store
		const store = useStore(); // use state
		const tem = ref(75);

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		onMounted(() => {
			//yearly income
			fetchYearlyIncome();
			fetchPercentage();
		});

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		// Dashboard and user profile
		const userInfo = computed(() => store.state.dashboard.DashboardWorkStats);
		// For User Income info
		const userYealyIncome = computed(() => store.state.auth.userProfile);
		//

		//yearly income in progress bar
		const yearlyIncome = computed(() => store.getters['document/getYearlyIncome']);

		const progressVal = computed(() => store.state.dashboard.DashboardJobseeker.earned_percentage || 0);

		const paySlipValue = computed(() => {
			const userYearlyIncome = userYealyIncome.value.jobSeeker.yearly_income == 0 ? 1 : userYealyIncome.value.jobSeeker.yearly_income;
			const totalIncome = (yearlyIncome.value.income / userYearlyIncome) * 100;
			return totalIncome >= 100 ? 100 : totalIncome.toFixed(2);
		});

		const styeValue = computed(() => {
			return 'width:' + paySlipValue.value + '%';
		});
		/**
		 * Methods
		 * *******************************************************************
		 */
		// fetch current users document type

		//fetch yearly income
		const fetchYearlyIncome = async () => {
			await store.dispatch('document/getYearlyIncome');
		};

		// fetch logged users invoices
		const fetchPercentage = () => {
			store.dispatch('dashboard/fetchJobseeker');
		};

		//watch
		// watch(paySlipValue,()=>{
		// 	console.log(paySlipValue.value + '%','paySlipValue');
		// 	style.value ='width:'+paySlipValue.value + '%';
		// })
		return {
			tem,
			currencyConverture,
			userIcon,
			editIcon,
			locationIcon,
			userInfo,
			userTypeInfo,
			//computed
			paySlipValue,
			styeValue,
			//method
			fetchYearlyIncome,
			progressVal,
			t,
		};
	},
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.text-lg {
	font-size: 24px;
}
.dark-card-puzzle-responsive {
	display: none;

	@media (max-width: 1024px) {
		display: block !important;
	}
}

.dark-cardpuzzle {
	background-color: #000;
	position: relative;
	z-index: 1;
	padding: 50px;
	color: #fff;
	border-radius: 40px;
	max-width: calc(100% - 50px);
	width: 100%;
	// height: 100%;

	@media (max-width: 1024px) {
		display: none;
	}

	&::before {
		content: '';
		width: 50px;
		height: 50px;
		border-radius: 50px;
		background-color: #000;
		position: absolute;
		top: 50%;
		right: 0;
		transform: translate(40px, -50%);

		@media (max-width: 576px) {
			width: 30px;
			height: 30px;
			transform: translate(20px, -50%);
		}
	}

	@media (max-width: 1440px) {
		padding: 60px;
	}

	@media (max-width: 1024px) {
		// max-width: 550px;
		// margin: 0 auto;
	}

	@media (max-width: 576px) {
		width: 100%;
		max-width: 100%;
		padding: 30px;

		label {
			font-size: 14px;
		}
		span {
			font-size: 10px;
		}
	}

	.tax-limit-progress {
		height: 2rem;
		border-radius: 1rem;
		background-color: #232323;
		position: relative;
		z-index: 9999;

		.tax-limit-bar {
			background-color: #d11d25 !important;
		}

		span {
			color: $colorWhite;
			line-height: 30px;
			z-index: 9999;
		}
	}

	&:after {
		content: '';
		background-image: url('~@/assets/images/payment-card.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		position: absolute;
		bottom: 100px;
		right: 70px;
		transform: translate(0, -20px);
		max-width: 100px;
		width: 100%;
		height: 100px;

		@media (max-width: 1024px) {
			max-width: 80px;
			right: 0;
			transform: translate(-10px, 0px);
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
	.puzzle-fluid {
		width: 100%;
		height: 100%;

		@media (max-width: 1440px) {
			width: 100%;
		}
	}
}

.dash-profile-data {
	.dash-user-profile-img {
		width: 100%;
		height: auto;
		border-radius: 100%;
		margin-right: 40px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		@media (max-width: 1199px) {
			margin: 0 auto;
			width: 200px;
		}
	}

	.dash-user-profile-info {
		border-radius: 40px;
		box-shadow: 2px 2px 16px #eae9e9;
		padding: 50px;
		height: 100%;

		@media (max-width: 1024px) {
			margin: 0 auto;
			padding: 20px;
		}

		@media (max-width: 992px) {
			height: 100%;
			max-width: 100%;
			padding: 20px;
		}

		@media (max-width: 768px) {
			max-width: 100%;
			margin: 0 auto;
		}

		@media (max-width: 576px) {
			width: 100%;
		}

		.profile-info-box {
			display: flex;
			align-items: center;
		}

		.info-box-icon {
			min-width: 40px;
			width: 40px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			border-radius: 10px;
			overflow: hidden;
			background-color: $coloRed;
			margin-right: 10px;
			@media (max-width: 1440px) {
				min-width: 40px;
			}

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
		padding: 30px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		color: #fff;
		box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.5);
		position: relative;
		z-index: -1;
		margin-top: -20px;

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
		margin: 30px auto;
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
.data-margin {
	@media (max-width: 768px) {
		margin-left: 90px;
	}
	@media (max-width: 425px) {
		margin-left: 0px;
	}
}

.user-rotate-puzzle {
	@media (max-width: 425px) {
		width: 110px;
	}
	.user-rotate-img {
		@media (max-width: 576px) {
			width: 80px;
			height: 80px;
			min-width: 83px;
		}
		@media (min-width: 1440px) {
			max-width: 110px;
			min-width: 110px;
			height: 110px;
		}
		@media (min-width: 2560px) {
			max-width: 123px;
			// min-width: 110px;
			height: 123px;
		}
		img {
			object-fit: cover;
		}
	}
}

.text-decoration-underline {
	@media (max-width: 425px) {
		font-size: 14px;
	}
}
</style>
<style>
.multiselect-input {
	border: 1px solid #e2e2e2;
}
.slider-connects {
	height: 40px;
}
.slider-handle {
	display: none;
}
[disabled] .slider-connect {
	background-color: #e1001d;
}
.slider-horizontal {
	height: 40px;
}
</style>

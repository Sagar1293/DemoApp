<template>
	<vue-final-modal v-model="modalShow" classes="modal modal-container signup__modal" content-class="modal-content p-0 border-0 w-100" :lock-scroll="true" :clickToClose="false">
		<!-- close btn -->
		<button type="button" class="close close-new" data-dismiss="modal" aria-label="Close" @click="modalShow = false">
			<span aria-hidden="true">
				<FontAwesomeIcon :icon="closeIcon" />
			</span>
		</button>

		<!-- modal content -->
		<div class="modal__content px-3 py-3">
			<!-- modal header -->
			<div class="modal-header">
				<!-- modal title -->
				<div class="header-left">
					<h5 class="title-lg">{{ t('updateProfile.seek_for_gigs') }}</h5>
				</div>
			</div>

			<!-- modal body -->
			<div class="modal-body">
				<div class="row m-0">
					<div class="col-lg-4 col-md-6">
						<label for="fromRegions" class="company-titel">{{ t('updateProfile.FromRegions') }} </label>
						<div class="form-group dropdown select-employee">
							<div>
								<Multiselect id="fromRegions" class="dropdown-menu show p-1 w-100" :options="cityOptions" mode="single" label="city_name" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6">
						<label for="industry" class="company-titel">{{ t('updateProfile.Industry') }} </label>
						<div class="form-group dropdown select-employee">
							<div>
								<Multiselect id="industry" class="dropdown-menu show p-1 w-100" :options="industryOptions" mode="single" label="industry_name" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6">
						<label for="occupation" class="company-titel">{{ t('updateProfile.Occupation') }} </label>
						<div class="form-group dropdown select-employee">
							<div>
								<Multiselect id="occupation" class="dropdown-menu show p-1 w-100" :options="occupatioOptions" mode="single" label="occupation_name" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6" style="margin-top:20px">
						<label for="durations" class="company-titel">{{ t('updateProfile.Durations') }} </label>
						<div class="form-group dropdown select-employee">
							<div>
								<Multiselect id="durations" class="dropdown-menu show p-1 w-100" :options="gigModeOptions" mode="single" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6" style="margin-top:20px">
						<label for="gigTypes" class="company-titel">{{ t('updateProfile.GigTypes') }} </label>
						<div class="form-group dropdown select-employee">
							<div>
								<Multiselect id="gigTypes" class="dropdown-menu show p-1 w-100" :options="gigTypes" mode="single" />
							</div>
						</div>
					</div>

					<div class="col-lg-4 col-md-6" style="margin-top:20px">
						<label for="availableAfter" class="company-titel">{{ t('updateProfile.AvailableAfter') }} </label>
						<div class="form-group dropdown select-employee mt-2">
							<div>
								<!-- <input
									type="date"
									class="btn dropdown-toggle
											tbl-drop invoice-dropdown"
								/> -->

								<v-date-picker id="availableAfter" :masks="{ input: 'YYYY/MM/DD' }">
									<template v-slot="{ inputValue, inputEvents }">
										<input
											class="btn dropdown-toggle
											tbl-drop invoice-dropdown"
											:value="inputValue"
											v-on="inputEvents"
										/>
										<!-- <div
											class="calender-icon d-flex justify-content-center align-items-center"
										>
											<FontAwesomeIcon
												:icon="calenderIcon"
												class="text-light text-sm"
											/>
										</div> -->
									</template>
								</v-date-picker>
							</div>
						</div>
					</div>

					<p class="mb-3">
						{{ t('updateProfile.text1') }}
					</p>

					<p class="mb-3">
						{{ t('updateProfile.text2') }}
					</p>

					<textarea rows="4" class="modal-textarea" placeholder="Type Your explanation"></textarea>
				</div>
			</div>
		</div>
		<a href="" class="modal-puzzle">
			<div class="modal-image">
				<img src="~@/assets/images/modal-puzzle.png" class="img-fluid" alt="" />
			</div>
			<p class="text-uppercase text-white fw-bold">{{ t('updateProfile.i_m_ready') }}</p>
		</a>
	</vue-final-modal>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';
import Multiselect from '@vueform/multiselect';
import { contractTypeOptions, vatTypeOptions, gigModeOptions, gigTypes } from '@/utils/enums.js';

export default {
	name: 'RegisterForm',

	// components
	components: {
		FontAwesomeIcon,
		Multiselect,
	},

	setup() {
		// icons
		const closeIcon = faTimes;

		const downArrowIcon = faChevronDown;

		// user type status
		const userType = ref('jobseeker');

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		// data file
		const filedt = ref(null);

		// global store
		const store = useStore(); // use state

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			// fetch country options
			store.dispatch('country/getCountries');

			// fetch city options
			store.dispatch('country/getCities');

			// fetch industry options
			store.dispatch('industry/getIndustries');

			//fetch get Occupation Options
			store.dispatch('industry/getOccupation');

			const currentRegistrationData = JSON.parse(localStorage.getItem('current_registration'));

			if (currentRegistrationData) {
				userType.value = currentRegistrationData.user_type;
			}
		});

		/**
		 * Computed Props
		 * *******************************************************************
		 */
		// industry options
		const industryOptions = computed(() => store.getters['industry/getIndustryOptions']);

		// occupations options
		const occupatioOptions = computed(() => store.getters['industry/getOccupationOptions']);
		// city options
		const cityOptions = computed(() => store.getters['country/getCitiesOptions']);
		// toggle login modal
		const modalShow = computed({
			get() {
				return store.state.auth.isJobSeekerModelOpen;
			},

			set(val) {
				store.commit('auth/SET_STATE', {
					action: 'isJobSeekerModelOpen',
					data: val,
				});
				store.commit('auth/SET_STATE', {
					action: 'seekForGig',
					data: val,
				});
			},
		});

		/**
		 * Methods
		 * *******************************************************************
		 */
		// data file change
		const atfileChange = file => {
			filedt.value = file;
		};

		return {
			closeIcon,
			downArrowIcon,
			modalShow,
			userType,
			t,
			filedt,
			atfileChange,

			contractTypeOptions,
			vatTypeOptions,
			gigModeOptions,

			//computed
			industryOptions,
			occupatioOptions,
			cityOptions,
			gigTypes,
		};
	},
};
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';

.signup__modal {
	padding: 0;
	overflow: hidden;

	.close-new {
		background-color: #d9dce1;
		right: 8px;
		top: -33px;
		z-index: -1;
	}

	.modal__content {
		background-color: #d9dce1;
		padding: 0;
		overflow: auto;
		border-radius: 1.5rem;
		@media (max-width: 1024px) {
			max-height: 280px;
		}

		.modal-header {
			padding: 30px;

			.header-right {
				display: flex;
				align-items: center;

				.header-toggle {
					display: flex;
					align-items: center;
					margin-left: 20px;

					.toggle {
						margin-left: 20px;
					}
				}
			}
		}

		.invoice-dropdown {
			background-color: #fff;
			width: 100%;
			border-radius: 50px;
			display: flex;
			align-items: center;
			justify-content: center;
			box-shadow: none;
			font-size: 14px;
			padding: 12px 30px;
		}

		.form-group {
			margin-bottom: 1.5rem;
			.dropdown-menu {
				border-radius: 50px;
			}
		}
		.dropdown-menu {
			z-index: auto !important;
		}

		.modal-textarea {
			border-radius: 12px;
			height: 100px;
			border: 1px solid #ccc;
			resize: none;
			padding: 10px;

			&:focus-visible {
				border: none;
			}
		}

		.modal-body {
			padding: 0;
			overflow: auto;

			.navigation-content {
				padding: 30px;
				overflow: scroll;
				margin-bottom: 20px;

				&::-webkit-scrollbar {
					display: none;
				}
			}

			.navigation-tab {
				.nav {
					// justify-content: space-between;
					background-color: $colorExLightGray;

					.nav-item {
						padding: 0;
						cursor: pointer;

						.nav-link {
							padding: 40px 30px;
							text-align: center;
							position: relative;
							border-radius: 0;

							&.active {
								background-color: #fff;
								color: #000;

								span {
									color: $coloRed;
								}
							}

							span {
								display: block;
								position: absolute;
								width: 50px;
								height: 50px;
								line-height: 50px;
								text-align: center;
								border-radius: 100%;
								background-color: $bg-color;
								top: 0;
								left: 50%;
								transform: translate(-50%, -50%);
							}
						}
					}
				}
			}
		}
	}

	.nav-pills {
		flex-wrap: nowrap;

		.nav-item {
			flex-basis: 16.66%;
			flex-grow: 1;

			.nav-link {
				height: 100%;
			}
		}
	}

	@media (max-width: 920px) {
		.modal__content {
			.modal-body {
				.navigation-tab {
					.nav {
						justify-content: space-around;
						.nav-item {
							margin-bottom: 30px;

							.nav-link {
								padding: 10px;

								.tab__name {
									display: none;
								}
							}
						}
					}
				}
			}
		}
	}

	@media (max-width: 576px) {
		.modal__content {
			.modal-header {
				display: block;
				padding: 20px;
				.header-left {
					text-align: center;
				}
				.header-right {
					justify-content: center;
					margin-top: 20px;
					p {
						font-size: 14px;
					}
				}
			}
			.modal-body {
				.navigation-content {
					padding: 20px;
				}
			}
		}
	}

	@media (max-width: 468px) {
		.modal__content {
			.modal-header {
				.header-right {
					display: block;
					.header-toggle {
						justify-content: center;
					}
				}
			}
		}
	}
}
.modal-image {
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50px;
		background-image: url('~@/assets/images/check-right.png');
		width: 100px;
		height: 100px;
		background-repeat: no-repeat;

		@media (max-width: 1020px) {
			top: 90px;
		}
	}
}
// .form-group {
// 	.multiselect-input {
// 		border: none !important;
// 	}
// }
// .form-group {
// 	.multiselect-options {
// 		top: 40px !important;
// 	}
// }
// .multiselect-options {
// 	overflow: auto;
// 	border-radius: 12px;
// }
// .multiselect-option {
// 	background-color: #ffffff;
// }
// .multiselect-option.is-selected.is-pointed {
// 	color: #000;
// 	background: #ffff;
// }
// .multiselect-option.is-selected {
// 	color: #ff4b57;
// 	background-color: #ffff;
// }

.modal-puzzle {
	width: 485px;
	height: 130px;
	overflow: hidden;
	background-repeat: no-repeat;
	background-size: contain;
	margin-left: auto;
	position: relative;

	@media (max-width: 1020px) {
		width: 380px;
		height: 85px;
	}

	p {
		position: absolute;
		bottom: 0;
		left: 90px;
		transform: translate(0px, -50px);

		@media (max-width: 1020px) {
			top: 90px;
		}
	}
}

.dropdown-toggle::after {
	display: none;
}

.close:not(:disabled):not(.disabled):hover {
	opacity: 1;
}
</style>

<style>
.multiselect-input {
	border: none !important;
}
</style>

<template>
	<!-- find job banner -->
	<section >
		<div class="container">
			<!-- <div class="row align-items-center">  -->
				<!-- left side images -->
				<!-- <div class="col-md-2 mb-4 mb-md-0">
					<div class="gig-banner-img">
						<img
							src="@/assets/images/iconManLaptop.png"
							class="img-fluid"
							alt="IconManLaptop"
						/>
						<img
							src="@/assets/images/iconManPad.png"
							class="img-fluid"
							alt="IconManPad"
						/>
					</div>
				</div> -->

				<!-- title -->
				<!-- <div class="col-md-8">
					<div class="banner-left text-center">
						
						<div class="banner-title">
							
							<div class="sec-header">
								<span>
									{{ t('job.way2easyDreamGig') }}
								</span>
							</div>

							
							<h1>
								{{ t('job.findGigTitle') }}
							</h1>
						</div>

					
						<div class="banner-form">
							<form>
							
								<div class="dropdown">
									<a
										class="dropdown-toggle city-drop"
										href="#"
										id="navbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<span>
											<FontAwesomeIcon :icon="mapIcon" />
										</span>
										{{ t('fieldList.location') }}
									</a>
									<ul
										class="dropdown-menu"
										aria-labelledby="navbarDropdown"
									>
										<li>
											<a
												class="dropdown-item select-city"
												href="#"
												>Mumbai</a
											>
										</li>
										<li>
											<a
												class="dropdown-item select-city"
												href="#"
												>Delhi</a
											>
										</li>
										<li>
											<a
												class="dropdown-item select-city"
												href="#"
												>Surat</a
											>
										</li>
									</ul>
								</div>

								
								<div class="form-input flex-grow-1">
									<input
										class="form-control"
										type="text"
										placeholder="Search here..."
									/>
								</div>

								
								<button
									type="button"
									class="btn-common btn-red"
								>
									{{ t('common.search') }}
									<span>
										<FontAwesomeIcon :icon="searchIcon" />
									</span>
								</button>
							</form>
						</div>
					</div>
				</div> -->
				<h5 class="title-lg py-5 text-center">Find your dream Gigs through Way2Work easily</h5>
			</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'FindJobBanner',

	// components
	components: {
		// FontAwesomeIcon,
	},

	setup() {
		// icons
		const mapIcon = faMapMarkerAlt;
		const searchIcon = faSearch;

		// global translate function
		const { t } = useI18n({ useScope: 'global' });

		return {
			// icons
			mapIcon,
			searchIcon,

			// translate function
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.banner {
	background-color: #f5f5f5;
	padding-top: 130px;

	.banner-left {
		h1 {
			font-weight: 600;
		}

		.banner-form {
			padding: 10px;
			background-color: #fff;
			margin-top: 80px;
			border-radius: 35px;

			form {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.form-input {
					.form-control {
						border: none;
						color: $colorPurple;
						font-weight: 500;
						width: auto;
						padding: 0px 10px;

						&:focus {
							border: none;
						}
					}
				}

				.dropdown {
					padding: 0px 20px;

					.dropdown-toggle {
						font-size: 14px;
						position: relative;
						color: $colorLightGray;

						&::before {
							content: '';
							position: absolute;
							right: -18px;
							top: -3px;
							border-left: 1px solid $colorExLightGray;
							width: 1px;
							height: 25px;
						}

						&::after {
							margin-left: 20px;
						}

						svg {
							color: $coloRed;
							margin-right: 5px;
							font-size: 18px;
						}
					}
				}
			}
		}
	}
}

@media (max-width: 992px) {
	.banner {
		padding-top: 150px;
	}
}

@media (max-width: 768px) {
	.banner {
		padding-top: 120px;
	}
}

@media (max-width: 576px) {
	.banner {
		padding-top: 100px;
	}
}
</style>
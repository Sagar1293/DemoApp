<template>
	<section class="features-voxed">
		<!-- <div class="video-container">
			<div class="container">
				<div class="container-padding">
					<div class="video-section">
						<video controls>
							<source
								src="@/assets/video/w2wcommercial.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
			</div>
		</div>
		<div class="cards-section">
			<div class="container">
				<div class="container-padding">
					<h2 class="card-title">
						{{ t('leadingPage.features.cardTitle') }}
					</h2>
					<p class="cards-text">
						{{ t('leadingPage.features.cardsText') }}
					</p>
					<div class="features">
						<div class="row justify-content-center">
							<div class="col-sm-6 col-md-5 col-lg-4 item">
								<div class="box">
									<FontAwesomeIcon
										:icon="mapMarkedalt"
										class="map-icon"
									/>
									<h3 class="name">
										{{
											t(
												'leadingPage.features.mapMarkedaltName',
											)
										}}
									</h3>
									<p class="description">
										{{
											t(
												'leadingPage.features.mapMarkedaltDescription',
											)
										}}
									</p>
								</div>
							</div>
							<div class="col-sm-6 col-md-5 col-lg-4 item">
								<div class="box">
									<FontAwesomeIcon
										:icon="clock"
										class="map-icon"
									/>
									<h3 class="name">
										{{
											t('leadingPage.features.clockName')
										}}
									</h3>
									<p class="description">
										{{
											t(
												'leadingPage.features.clockDescription',
											)
										}}
									</p>
								</div>
							</div>
							<div class="col-sm-6 col-md-5 col-lg-4 item">
								<div class="box">
									<FontAwesomeIcon
										:icon="listAlt"
										class="map-icon"
									/>
									<h3 class="name">
										{{
											t(
												'leadingPage.features.listAltName',
											)
										}}
									</h3>
									<p class="description">
										{{
											t(
												'leadingPage.features.listAltDescription',
											)
										}}
									</p>
								</div>
							</div>
							<div class="col-sm-6 col-md-5 col-lg-4 item">
								<div class="box">
									<FontAwesomeIcon
										:icon="Leaf"
										class="map-icon"
									/>
									<h3 class="name">
										{{ t('leadingPage.features.leafName') }}
									</h3>
									<p class="description">
										{{
											t(
												'leadingPage.features.leafDescription',
											)
										}}
									</p>
								</div>
							</div>
							<div class="col-sm-6 col-md-5 col-lg-4 item">
								<div class="box">
									<FontAwesomeIcon
										:icon="plane"
										class="map-icon rotate-icon"
									/>
									<h3 class="name">
										{{
											t('leadingPage.features.planeName')
										}}
									</h3>
									<p class="description">
										{{
											t(
												'leadingPage.features.planeDescription',
											)
										}}
									</p>
								</div>
							</div>
							<div class="col-sm-6 col-md-5 col-lg-4 item">
								<div class="box">
									<FontAwesomeIcon
										:icon="phone"
										class="map-icon rotate-icon-full"
									/>
									<h3 class="name">
										{{
											t('leadingPage.features.phoneName')
										}}
									</h3>
									<p class="description">
										{{
											t(
												'leadingPage.features.phoneDescription',
											)
										}}
									</p>
								</div>
							</div>
						</div>
						<div class="animation-img">
							<img
								src="@/assets/images/3_puzzle_dark.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</section>
</template>
<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useI18n } from 'vue-i18n';
import {
	faMapMarkerAlt,
	faClock,
	faListAlt,
	faLeaf,
	faPlane,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'FeaturesVoxed',
	// components
	components: {
		// FontAwesomeIcon,
	},
	setup() {
		//ref
		const { t } = useI18n({ useScope: 'global' });
		// icons
		const mapMarkedalt = faMapMarkerAlt;
		const clock = faClock;
		const listAlt = faListAlt;
		const Leaf = faLeaf;
		const plane = faPlane;
		const phone = faPhone;
		return {
			//ref
			t,
			mapMarkedalt,
			clock,
			listAlt,
			Leaf,
			plane,
			phone,
		};
	},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.features-voxed {
	background: url('~@/assets/images/banner-rockets.png') bottom right / auto
			no-repeat,
		$coloRed;
	position: relative;
	.video-container {
		.container {
			.container-padding {
				padding: 0 7rem;
				padding-top: 1rem;
				.video-section {
					width: 100%;
					border-radius: 3rem;
					padding: 0.8rem;
					background-color: #fff;
					video {
						display: block;
						border-radius: 2.5rem;
						width: 100%;
					}
				}
			}
		}
	}
	.cards-section {
		margin-top: 40px;
		text-align: center;
		.container {
			.container-padding {
				padding: 0 7rem;
				.card-title {
					color: #fff;
					font-weight: 700;
					margin-bottom: 40px;
				}
				.cards-text {
					color: #fff;
					font-size: 20px;
				}
				.features {
					margin-top: 50px;
					.item {
						.box {
							border-radius: 70px;
							padding: 30px;
							background-color: #fff;
							margin-bottom: 30px;
							min-height: 340px;
							border: 0;
							transform: scale(1);
							.map-icon {
								font-size: 60px;
								color: $coloRed;
								margin-top: 20px;
								margin-bottom: 35px;
							}
							.rotate-icon {
								transform: rotate(330deg);
							}
							.rotate-icon-full {
								transform: rotate(90deg);
							}
							.name {
								font-weight: 700;
								font-size: 18px;
								margin-bottom: 8px;
								margin-top: 0;
								color: inherit;
							}
							.description {
								font-size: 16px;
								margin-top: 15px;
								margin-bottom: 20px;
								color: #7d8285;
							}
							&:hover {
								animation-name: boxZoom;
								animation-duration: 0.8s;
								animation-iteration-count: 1;
								animation-timing-function: linear;
							}
							@keyframes boxZoom {
								0% {
									transform: scale(1);
								}
								50% {
									transform: scale(1.05);
								}
								100% {
									transform: scale(1);
								}
							}
						}
					}
					.animation-img {
						position: absolute;
						width: 200px;
						bottom: 0;
						right: 50px;
						transform: translateY(50%);
						animation-duration: 1s;
						animation-fill-mode: both;
						animation-iteration-count: 1;
						img {
							width: 100%;
						}
						&:hover {
							animation-name: effect;
						}
					}
					@keyframes effect {
						from {
							transform: translateY(50%) scale3d(1, 1, 1);
						}

						30% {
							transform: translateY(50%) scale3d(1.25, 0.75, 1);
						}

						40% {
							transform: translateY(50%) scale3d(0.75, 1.25, 1);
						}

						50% {
							transform: translateY(50%) scale3d(1.15, 0.85, 1);
						}

						65% {
							transform: translateY(50%) scale3d(0.95, 1.05, 1);
						}

						75% {
							transform: translateY(50%) scale3d(1.05, 0.95, 1);
						}

						to {
							transform: translateY(50%) scale3d(1, 1, 1);
						}
					}
				}
			}
		}
	}
}
@media (max-width: 1200px) {
	.features-voxed {
		padding: 50px 0;
		.video-container {
			.container {
				.container-padding {
					padding: 0;
				}
			}
		}
		.cards-section {
			margin-top: 40px;
			text-align: center;
			.container {
				.container-padding {
					padding: 0;
					.card-title {
						margin-bottom: 20px;
					}
					.features {
						margin-top: 35px;
						.item {
							.box {
								border-radius: 50px;
								padding: 20px;
								min-height: 320px;
							}
						}
					}
				}
			}
		}
	}
}
@media (max-width: 768px) {
	.features-voxed {
		.cards-section {
			.container {
				.container-padding {
					.features {
						.animation-img {
							position: absolute;
							width: 160px;
							bottom: 0;
							right: 10px;
						}
					}
				}
			}
		}
	}
}
@media (max-width: 480px) {
	.features-voxed {
		padding: 40px 0;
		.video-container {
			.container {
				.container-padding {
					padding-top: 0;
					.video-section {
						border-radius: 2rem;
						padding: 0.5rem;
						video {
							border-radius: 1.5rem;
						}
					}
				}
			}
		}
		.cards-section {
			margin-top: 20px;
			.container {
				.container-padding {
					.card-title {
						font-size: 26px;
						margin-bottom: 10px;
					}
					.cards-text {
						font-size: 18px;
					}
					.features {
						margin-top: 30px;
						.item {
							.box {
								border-radius: 70px;
								margin-bottom: 15px;
								min-height: auto;
								border: 0;
								transform: scale(1);
								.map-icon {
									font-size: 50px;
									margin-top: 0;
									margin-bottom: 25px;
								}
							}
						}
						.animation-img {
							position: absolute;
							width: 140px;
							right: 10px;
						}
					}
				}
			}
		}
	}
}
</style>

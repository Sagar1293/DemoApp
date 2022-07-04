@@ -1,638 +0,0 @@
<template>
	<!-- <section class="section-container">
		<div class="container">
			<div class="workinhyodyt-section">
				<div class="section-head">
					<h1 class="section-tital">
						{{t('leadingPage.workinHyodyt.sectionTitel')}}
					</h1>
					<p class="section-det">
						{{t('leadingPage.workinHyodyt.sectionDesc')}}
					</p>
				</div>
			</div>
		</div>
	</section> -->
	<!-- <section class="section">
		<div class="way2workin-section">
			<div class="container">
				<div class="row align-items-center">	
					<div class="col-md-6">
						<div class="section-left">
							<h5 class="left-section-tital">
								The <u>benefits of</u>	Way							
								<img
									src="@/assets/images/icon_png.png"
									alt="img"
									class="img-fluid icon-ing"
								/>
								Work 
							</h5>
							<div class="text-det-main">
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc1')}}
								</p>
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc2')}}
								</p>
							</div>
							<h5 class="left-section-tital">
								<u>{{t('leadingPage.workinHyodyt.workinTitel')}}</u>
							</h5>
							<div class="text-det-main">
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc3')}}
								</p>
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc4')}}
								</p>
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc5')}}
								</p>
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc6')}}
								</p>
								<p class="text-det">
									{{t('leadingPage.workinHyodyt.textDesc7')}}
								</p>
							</div>
							<div class="fi_guy_join-img">
								<img
									src="@/assets/images/fi_guy_join.png"
									alt="img"
									class="img-fluid"
								/>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="float-right">
							<img
								src="@/assets/images/puzzle.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div class="animation-img">
					<img
						src="@/assets/images/1.png"
						alt="img"
						class="img-fluid"
					/>
				</div>
			</div>
		</div>
	</section> -->

	<!-- feature-sec -->
	<section class="feature-sec">
		<div class="container-lg position-relative feature-box-col ">
			<!-- feature-Heading -->
			<div class="feature-content">
				<h1>
					<span class="text-red">{{
						t('leadingPage.features.feature')
					}}</span>
					{{ t('leadingPage.features.cardTitle') }}
				</h1>
				<p>
					{{ t('leadingPage.features.cardsText') }}
				</p>
			</div>
			<!-- feature-Heading -->

			<!-- feature-Box -->
			<div
				class="row no-gutters  justify-content-center
			"
			>
				<div class="col-xl-4 col-md-5 col-sm-6 col-12">
					<div class="feature-light-box feature-common-box">
						<div class="feature-img-wrap">
							<img
								src="~@/assets/images/watch-icon.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
						<h4>{{ t('leadingPage.features.clockName') }}</h4>
						<p>
							{{ t('leadingPage.features.clockDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-5 col-sm-6 col-12">
					<div
						class="feature-dark-box feature-common-box text-center"
					>
						<div class="feature-img-wrap">
							<img
								src="~@/assets/images/earth-icon.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
						<h4>
							{{ t('leadingPage.features.mapMarkedaltName') }}
						</h4>
						<p>
							{{
								t(
									'leadingPage.features.mapMarkedaltDescription',
								)
							}}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-5 col-sm-6 col-12">
					<div class="feature-danger-box feature-common-box text-end">
						<div class="feature-img-wrap">
							<img
								src="~@/assets/images/open-gigs-icon.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
						<h4>{{ t('leadingPage.features.listAltName') }}</h4>
						<p>
							{{ t('leadingPage.features.listAltDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-5 col-sm-6 col-12">
					<div
						class="feature-danger-box feature-common-box text-start "
					>
						<div class="feature-img-wrap">
							<img
								src="~@/assets/images/use-icon.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
						<h4>{{ t('leadingPage.features.leafName') }}</h4>
						<p>
							{{ t('leadingPage.features.leafDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-5 col-sm-6 col-12">
					<div
						class="feature-light-box feature-common-box text-center"
					>
						<div class="feature-img-wrap">
							<img
								src="~@/assets/images/hard-use.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
						<h4>{{ t('leadingPage.features.planeName') }}</h4>
						<p>
							{{ t('leadingPage.features.planeDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-5 col-sm-6 col-12">
					<div class="feature-dark-box feature-common-box text-end">
						<div class="feature-img-wrap">
							<img
								src="~@/assets/images/customer-service.png"
								alt="img"
								class="img-fluid"
							/>
						</div>
						<h4>{{ t('leadingPage.features.phoneName') }}</h4>
						<p>
							{{ t('leadingPage.features.phoneDescription') }}
						</p>
					</div>
				</div>
			</div>
			<!-- feature-Box -->
		</div>
	</section>

	<!-- feature-sec -->
</template>
<script>
import { useI18n } from 'vue-i18n';
export default {
	name: 'WorkinHyodyt',
	// components
	components: {
		// FontAwesomeIcon,
	},
	setup() {
		//ref
		const { t } = useI18n({ useScope: 'global' });
		// icons

		return {
			//ref
			t,
		};
	},
};
</script>
<style lang="scss">
@import '@/assets/scss/variable.scss';

// feature-sec
html:lang(es) {
	.feature-sec {
		background: linear-gradient(
			to bottom,
			#fff 25%,
			rgba(25, 28, 34, 1) 60%
		);
		padding: 150px 0 100px 0;
		position: relative;
		z-index: 1;

		@media (max-width: 768px) {
			padding: 50px 0 50px 0;
		}

		.container-lg {
			&::after {
				content: '';
				position: absolute;
				top: 40px;
				right: 20px;
				width: 240px;
				height: 240px;
				background-image: url('~@/assets/images/feature-side.png');
				background-size: contain;
				background-repeat: no-repeat;
				background-position: right;
				z-index: -1;

				@media (max-width: 1440px) {
					right: 70px;
				}

				@media (max-width: 1040px) {
					width: 100px;
					top: 10px;
					right: 10px;
					z-index: -1;
				}
			}
		}
	}
}

.feature-sec {
	background: linear-gradient(to bottom, #fff 25%, rgba(25, 28, 34, 1) 60%);
	padding: 150px 0 100px 0;
	position: relative;
	z-index: 1;

	@media (max-width: 768px) {
		padding: 50px 0 50px 0;
	}

	.container-lg {
		&::after {
			content: '';
			position: absolute;
			top: 40px;
			right: 20px;
			width: 240px;
			height: 240px;
			background-image: url('~@/assets/images/feature-side.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: right;
			z-index: -1;

			@media (max-width: 1440px) {
				right: 70px;
			}

			@media (max-width: 1040px) {
				width: 100px;
				top: 10px;
				right: 10px;
				z-index: -1;
			}
		}
	}
	.feature-box-col {
		margin-bottom: -300px;
		@media (max-width: 1024px) {
			margin: 0;
		}
	}

	.feature-content {
		text-align: center;
		h1 {
			font-weight: 900;
			font-size: 50px;

			@media (max-width: 1440px) {
				font-size: 40px;
			}

			@media (max-width: 576px) {
				font-size: 30px;
			}
		}
		.text-red {
			color: $colorDanger;
			font-style: italic;
		}
		p {
			font-size: 20px;
			margin: 25px 0 30px 0;
			max-width: 900px;
			margin: 25px auto 120px auto;

			@media (max-width: 768px) {
				margin: 25px auto 25px auto;
				font-size: 14px;
			}
		}
	}

	.feature-img-wrap {
		@media (max-width: 1024px) {
			max-width: 250px;
			margin: 0 auto;
		}
	}

	.feature-container {
		// .feature-col {
		// 	margin-bottom: -250px;
		// }

		// .feature-common-box {
		// 	padding: 70px;
		// 	border-radius: 40px;
		// 	height: 500px;

		// 	h4 {
		// 		color: $colorWhite;
		// 		padding: 20px 10px;
		// 		font-weight: 800;
		// 	}

		// 	p {
		// 		color: $colorWhite;
		// 		font-size: 20px;
		// 		font-weight: 500;
		// 	}
		// }
		// .feature-light-box {
		// 	background-color: #82899b;
		// }
		// .feature-dark-box {
		// 	background-color: #394251;
		// }
		// .feature-danger-box {
		// 	background-color: #d8212a;
		// 	// position: absolute;
		// 	z-index: 999999;
		// }
	}
}
// feature-sec

// .workinhyodyt-section {
// 	padding: 0 7rem;
// 	.section-head {
// 		.section-tital {
// 			font-size: 35px;
// 			font-weight: bold;
// 			margin-bottom: 0.5rem;
// 		}
// 		.section-det {
// 			font-size: 20px;
// 		}
// 		&:hover {
// 			animation-name: zoomin;
// 			animation-duration: 0.8s;
// 			animation-iteration-count: 1;
// 			animation-timing-function: linear;
// 		}
// 		@keyframes zoomin {
// 			0% {
// 				transform: scale(1);
// 			}
// 			50% {
// 				transform: scale(1.05);
// 			}
// 			100% {
// 				transform: scale(1);
// 			}
// 		}
// 	}
// }
// .section {
// 	padding-top: 0;
// 	.way2workin-section {
// 		padding: 0 7rem;
// 		position: relative;
// 		.section-left {
// 			background: url('~@/assets/images/banner-benefits.png') bottom /
// 					contain no-repeat,
// 				$coloRed;
// 			color: #fff;
// 			padding: 35px;
// 			border-radius: 2.5rem;
// 			.left-section-tital {
// 				font-weight: bold;
// 				font-size: 35px;
// 				margin-bottom: 0.5rem;
// 				.icon-ing {
// 					margin-left: -10px;
// 					margin-right: -10px;
// 					height: 60px;
// 				}
// 			}
// 			.text-det-main {
// 				.text-det {
// 					font-size: 20px;
// 					font-weight: light;
// 					margin-bottom: 1.5rem;
// 				}
// 			}
// 			&:hover {
// 				animation-name: sectionzoomin;
// 				animation-duration: 0.8s;
// 				animation-iteration-count: 1;
// 				animation-timing-function: linear;
// 			}
// 			@keyframes sectionzoomin {
// 				0% {
// 					transform: scale(1);
// 				}
// 				50% {
// 					transform: scale(1.05);
// 				}
// 				100% {
// 					transform: scale(1);
// 				}
// 			}
// 			.fi_guy_join-img {
// 				&:hover {
// 					animation-name: swing;
// 					animation-duration: 0.3s;
// 					animation-iteration-count: 5;
// 					animation-timing-function: linear;
// 				}
// 				@keyframes swing {
// 					0% {
// 						transform: rotate(5deg);
// 					}
// 					50% {
// 						transform: rotate(-5deg);
// 					}
// 					100% {
// 						transform: rotate(5deg);
// 					}
// 				}
// 			}
// 		}
// 		.animation-img {
// 			position: absolute;
// 			width: 200px;
// 			bottom: 0;
// 			left: 50px;
// 			transform: translateY(100%);
// 			animation-duration: 1s;
// 			animation-fill-mode: both;
// 			animation-iteration-count: 1;
// 			img {
// 				width: 100%;
// 			}
// 			&:hover {
// 				animation-name: effect;
// 			}
// 		}
// 		@keyframes effect {
// 			from {
// 				transform: translateY(100%) scale3d(1, 1, 1);
// 			}

// 			30% {
// 				transform: translateY(100%) scale3d(1.25, 0.75, 1);
// 			}

// 			40% {
// 				transform: translateY(100%) scale3d(0.75, 1.25, 1);
// 			}

// 			50% {
// 				transform: translateY(100%) scale3d(1.15, 0.85, 1);
// 			}

// 			65% {
// 				transform: translateY(100%) scale3d(0.95, 1.05, 1);
// 			}

// 			75% {
// 				transform: translateY(100%) scale3d(1.05, 0.95, 1);
// 			}

// 			to {
// 				transform: translateY(100%) scale3d(1, 1, 1);
// 			}
// 		}
// 	}
// }
// @media (max-width: 1200px) {
// 	.section-container {
// 		padding: 50px 0;
// 		.workinhyodyt-section {
// 			padding: 0;
// 		}
// 	}
// 	.section {
// 		padding-top: 0;
// 		.way2workin-section {
// 			padding: 0;
// 			.section-left {
// 				.text-det-main {
// 					.text-det {
// 						margin-bottom: 1rem;
// 					}
// 				}
// 			}
// 		}
// 	}
// }
// @media (max-width: 768px) {
// 	.section-container {
// 		padding: 40px 0;
// 		.workinhyodyt-section {
// 			.section-head {
// 				.section-tital {
// 					font-size: 34px;
// 				}
// 			}
// 		}
// 	}
// 	.section {
// 		.way2workin-section {
// 			.float-right {
// 				width: 100%;
// 			}
// 			.animation-img {
// 				position: absolute;
// 				width: 160px;
// 				left: 10px;
// 			}
// 		}
// 	}
// }
// @media (max-width: 480px) {
// 	.section-container {
// 		.workinhyodyt-section {
// 			.section-head {
// 				.section-tital {
// 					font-size: 26px;
// 				}
// 				.section-det {
// 					font-size: 18px;
// 				}
// 			}
// 		}
// 	}
// 	.section {
// 		.way2workin-section {
// 			.section-left {
// 				.left-section-tital {
// 					font-weight: bold;
// 					font-size: 26px;
// 					margin-bottom: 0.5rem;
// 					.icon-ing {
// 						height: 50px;
// 					}
// 				}
// 				.text-det-main {
// 					.text-det {
// 						font-size: 18px;
// 					}
// 				}
// 			}
// 			.float-right {
// 				display: none;
// 			}
// 			.animation-img {
// 				width: 140px;
// 			}
// 		}
// 	}
// }
</style>
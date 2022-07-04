<template>
	
	<!-- feature-sec -->
	<section class="feature-sec">
		<div class="container-lg position-relative feature-box-col ">
			<!-- feature-Heading -->
			<div class="feature-content">
				<h1 class="banner-head-text">
					<span class="text-red">{{ t('leadingPage.features.feature') }}</span>
					{{ t('leadingPage.features.cardTitle') }}
				</h1>
				<p>
					{{ t('leadingPage.features.cardsText') }}
				</p>
			</div>
			<!-- feature-Heading -->

			<!-- feature-Box -->
			<div
				class="row no-gutters justify-content-center
			"
			>
				<div class="col-xl-4 col-md-6 col-sm-12 col-12">
					<!-- <div class="feature-light-box feature-common-box" :style="{backgroundImage: `url(${require(`@/assets/images/light-grey.png`)})`,'background-position':'center','background-size':'contain','background-repeat':'no-repeat'}"> -->
					<div class="feature-light-box feature-common-box">
						<span class="bg-puzzle">
							<img src="~@/assets/images/feat-t-r-b.png" alt="" class="bg-puzzle-inset" />
						</span>
						<div class="feature-img-wrap">
							<img src="~@/assets/images/watch-icon.png" alt="img" class="img-fluid" />
						</div>
						<h4>{{ t('leadingPage.features.clockName') }}</h4>
						<p>
							{{ t('leadingPage.features.clockDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 col-sm-12 col-12">
					<div class="feature-dark-box feature-common-box text-center p-top-right">
						<span class="bg-puzzle">
							<img src="~@/assets/images/feat-dark-l-b-r.png" alt="" class="bg-puzzle-top" />
						</span>
						<div class="feature-img-wrap">
							<img src="~@/assets/images/earth-icon.png" alt="img" class="img-fluid" />
						</div>
						<h4>
							{{ t('leadingPage.features.mapMarkedaltName') }}
						</h4>
						<p>
							{{ t('leadingPage.features.mapMarkedaltDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 col-sm-12 col-12">
					<div class="feature-danger-box feature-common-box text-end p-top-right p-sm-red-box">
						<span class="bg-puzzle">
							<img src="~@/assets/images/feat-red-l-b.png" alt="" class="bg-puzzle-v-top" />
						</span>
						<div class="feature-img-wrap">
							<img src="~@/assets/images/open-gigs-icon.png" alt="img" class="img-fluid" />
						</div>
						<h4>{{ t('leadingPage.features.listAltName') }}</h4>
						<p>
							{{ t('leadingPage.features.listAltDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 col-sm-12 col-12">
					<div class="feature-danger-box feature-common-box text-start">
						<span class="bg-puzzle">
							<img src="~@/assets/images/feat-red-t-r.png" alt="" class="bg-red-t-right" />
						</span>
						<div class="feature-img-wrap">
							<img src="~@/assets/images/use-icon.png" alt="img" class="img-fluid" />
						</div>
						<h4>{{ t('leadingPage.features.leafName') }}</h4>
						<p>
							{{ t('leadingPage.features.leafDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 col-sm-12 col-12">
					<div class="feature-light-box feature-common-box text-center ">
						<span class="bg-puzzle">
							<img src="~@/assets/images/feat-light-l-t-r.png" alt="" class="bg-grey-v-right" />
						</span>
						<div class="feature-img-wrap">
							<img src="~@/assets/images/hard-use.png" alt="img" class="img-fluid" />
						</div>
						<h4>{{ t('leadingPage.features.planeName') }}</h4>
						<p>
							{{ t('leadingPage.features.planeDescription') }}
						</p>
					</div>
				</div>

				<div class="col-xl-4 col-md-6 col-sm-12 col-12">
					<div class="feature-dark-box feature-common-box text-end ">
						<span class="bg-puzzle">
							<img src="~@/assets/images/feat-t-l-b.png" alt="" class="bg-dark-h-left" />
						</span>
						<div class="feature-img-wrap">
							<img src="~@/assets/images/customer-service.png" alt="img" class="img-fluid" />
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
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

// feature-sec
html:lang(es) {
	.feature-sec {
		background: linear-gradient(to bottom, #fff 25%, rgba(25, 28, 34, 1) 60%);
		padding: 150px 0 100px 0;
		position: relative;
		z-index: 1;

		// @media (max-width: 768px) {
		// 	padding: 50px 0 50px 0;
		// }

		.container-lg {
			&::after {
				content: '';
				position: absolute;
				top: 0px;
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

				@media (max-width: 575px) {
					top: 40px;
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
			top: 90px;
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
			margin: 0 auto;
		}
	}

	.feature-content {
		text-align: center;
		h1 {
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
		margin: 15px auto 0 auto;
		max-width: 250px;

		@media (max-width: 1600px) {
			max-width: 160px;
		}
		@media (max-width: 768px) {
			margin: 50px auto 0;
		}
		// @media (max-width: 1024px) {
		// 	max-width: 250px;
		// 	margin: 0 auto;
		// }
		// @media (max-width: 768px) {
		// 	max-width: 140px;
		// 	margin: 0 auto;
		// }
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
		// 	background-color: #395751;
		// }
		// .feature-danger-box {
		// 	background-color: #d8212a;
		// 	// position: absolute;
		// 	z-index: 999999;
		// }
	}
}
.feature-common-box {
	padding: 96px;
	@media (max-width: 1600px) {
		padding: 90px 60px 39px 60px;
	}
	@media (max-width: 1440px) {
		padding: 70px 80px 60px 90px;
	}

	@media (max-width: 1024px) {
		padding: 90px;
	}

	@media (max-width: 991px) {
		padding: 40px;
	}

	@media (max-width: 768px) {
		padding: 50px;
	}

	@media (max-width: 576px) {
		padding: 60px;
	}

	@media (max-width: 320px) {
		padding: 50px;
	}
}

.carousel .feature-slider-box {
	min-height: 500px;

	@media (max-width: 1440px) {
		min-height: 414px;
	}

	@media (max-width: 1440px) {
		padding: 40px 45px;
		min-height: 362px;
	}

	@media (max-width: 1200px) {
		min-height: 312px;
	}

	@media (max-width: 991px) {
		max-width: 300px;
	}

	@media (max-width: 768px) {
		max-width: 300px;
	}
	@media (max-width: 480px) {
		min-height: 68vw;
	}

	@media (max-width: 380px) {
		min-height: 85vw;
	}
}

.profession-box-common {
	padding: 74px;
	transition: all 0.5s;
	&:hover {
		transform: scale(1.2);
	}
	@media (max-width: 1600px) {
		padding: 57px;
	}
}

.bg-puzzle {
	top: 0;
	left: 0;
	z-index: -1;
	width: 100%;
	height: 100%;
	position: absolute;

	// @media (max-width: 992px) {
	// 	padding: 28px;
	// }

	// @media (max-width: 768px) {
	// 	padding: 28px;
	// }

	// @media (max-width: 576px) {
	// 	padding: 48px;
	// }
}
.bg-puzzle img {
	width: 100%;
	height: 100%;
	position: relative;
	object-fit: contain;
}

// .bg-puzzle img {
// 	width: calc(100% + 96px);
//     height: calc(100% + 96px);

// 	@media (max-width: 1440px) {
// 		width: calc(100% + 30px);
// 		height: 100%;
// 	}
// }

// img.bg-puzzle-inset {
//     top: -48px;
//     right: 24px;
// 	@media (max-width: 1440px) {
// 		top: -50px;
// 		right: 0px;
// 		width: calc(100% + 50px);
// 		height: calc(100% + 120px);
// 	}

// 	@media (max-width: 768px) {
// 		top: -30px;
// 		left: -40px;
// 		width: calc(100% + 110px);
// 		height: calc(100% + 100px);

// 	}
// }

// img.bg-puzzle-top {
//     top: 0;
//     right: 24px;
//     height: calc(100% + 48px);

// 	@media (max-width: 1440px) {
// 		bottom: -60px;
// 		right: 0px;
// 		width: calc(100% + 40px);
// 		height: calc(100% + 60px);

// 	}

// 	@media (max-width: 1024px) {
// 		width: calc(100% + 40px);
// 		height: calc(100% + 70px);
// 		right: 0px;
// 		left: 0;
// 		bottom: -35px;
// 	}
// }

// img.bg-puzzle-v-top {
//     right: 24px;
//     top: 0;
//     width: calc(100% + 48px);
//     height: calc(100% + 48px);

// 	@media (max-width: 1440px) {
// 		bottom: -60px;
// 		right: 0;
// 		width: 100%;
// 		height: calc(100% + 60px);

// 	}

// 	@media (max-width: 991px) {

// 		height: calc(100% + 30px);

// 	}
// }

// img.bg-grey-v-right {
// 	left: -48px;
//     top: 0;
//     width: calc(100% + 48px);
//     height: 100%;

// 	@media (max-width: 1440px) {
// 		left: -40px;
// 		top: -10px;
// 		width: calc(100% + 40px);
// 		height: 100%;

// 	}
// 	@media (max-width: 768px) {
// 		left: -40px;
// 		top:0;
// 		width: calc(100% + 40px);
// 		height:  calc(100% + 40px);

// 	}

// }

// img.bg-red-t-right{
// 	right: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;

// 	@media (max-width: 1440px) {
// 		left: 0;
// 		top: 0;
// 		width: 100%;
// 		height: 100%;
// 	}

// 	@media (max-width: 1040px) {
// 		left: 0;
// 		top: 0;
// 		width: 100%;
// 		height: calc(100% + 30px);
// 	}

// 	@media (max-width: 768px) {
// 		left: 0;
// 		top: 0;
// 		width: 100%;
// 		height: calc(100% + 50px);
// 	}
// }

// img.bg-dark-h-left{
// 	right: 48px;
//     top: 0;
//     width: calc(100% + 48px);
//     height: calc(100% + 48px);

// 	@media (max-width: 1440px) {
// 		left: -48px;
// 		top: 0;
// 		width: calc(100% + 48px);
// 		height: 100%;
// 	}

// 	@media (max-width: 1040px) {
// 		left: -30px;
// 		bottom:-25px;
// 		width: calc(100% + 30px);
// 		height: calc(100% + 50px);
// 	}

// 	@media (max-width: 768px) {
// 		left: -30px;
// 		bottom: 0;
// 		width: calc(100% + 30px);
// 		height: calc(100% + 60px);
// 	}
// }

// .top-auto {
// 	top: auto !important;
// }
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

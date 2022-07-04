<template>
	<!-- <section class="brands-section">
		<div class="container">
			<div class="brands">
				<img
					src="@/assets/images/sv.png"
					alt="img"
					class="img-fluid img-width"
				/>
				<img
					src="@/assets/images/lk.png"
					alt="img"
					class="img-fluid img-width"
				/>
				<img
					src="@/assets/images/jy.png"
					alt="img"
					class="img-fluid img-width"
				/>
				<img
					src="@/assets/images/fn.png"
					alt="img"
					class="img-fluid img-width"
				/>
				<img
					src="@/assets/images/vm.png"
					alt="img"
					class="img-fluid img-width"
				/>
			</div>
		</div>
	</section> -->

	<!-- download-sec -->
	<section class="download-sec">
		<div class="container-lg">
			<!-- download-heading -->
			<div class="download-heading">
				<h4 class="text-center">
					{{ t('leadingPage.downloadSection.download') }}
				</h4>
			</div>
			<!-- download-heading -->

			<!-- download-col -->
			<div class="row">
				<div class="col-xl-5 col-lg-12 col-12">
					<div class="download-img">
						<img src="@/assets/images/mock-up.png" class="img-fluid" alt="" />
					</div>
				</div>
				<div class="col-xl-7 col-lg-12 col-12">
					<div class="download-head">
						<div class="d-flex items-center">
							<div class="download-content-img">
								<img src="@/assets/images/download-img.png" class="img-fluid" alt="" />
							</div>
							<h1 class="text-light">
								{{ t('leadingPage.downloadSection.download1') }}
								<span class="download-txt-lg">{{ t('leadingPage.downloadSection.way2Work') }} </span> {{ t('leadingPage.downloadSection.on') }}
								{{ t('leadingPage.downloadSection.device') }}
							</h1>
						</div>
						<p>
							{{ t('leadingPage.downloadSection.textDes1') }}
						</p>
						<p class="download-text">
							{{ t('leadingPage.downloadSection.textDes2') }}
						</p>

						<div class="row justify-content-xl-start	 justify-content-lg-center justify-content-center">
							<a href="#" class="app-str-btn">
								<img src="@/assets/images/app-play.svg" alt="" />
							</a>

							<a href="#" class="app-str-btn">
								<img src="@/assets/images/google-play.svg" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- download-col -->
	</section>
	<!-- download-sec -->
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
	name: 'Brands',
	// components
	components: {
		// FontAwesomeIcon,
	},
	setup() {
		//ref
		const { t } = useI18n({ useScope: 'global' });
		// icons

		return {
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

// download-sec

.download-sec {
	background-color: rgba(228, 17, 22, 1);
	mix-blend-mode: multiply;
	z-index: 999;
	position: relative;
	padding: 100px 0;

	@media (max-width: 1024px) {
		padding: 50px 0;
	}

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100vh;
		width: 100%;
		mix-blend-mode: multiply;
		background: url('~@/assets/images/vector-smart.png') no-repeat;
		background-position: bottom right;
		background-size: cover;
		background-repeat: repeat-y;
		z-index: -1;
		transform: rotate(180deg);
	}

	.download-heading {
		max-width: 1200px;
		margin: 0 auto;
		@media (max-width: 576px) {
			padding: 50px 0;
		}

		h4 {
			letter-spacing: 17px;
			font-size: 18px;
			color: #000;
			border-bottom: 1px solid #000;
			max-width: 295px;
			margin: 0 auto 70px auto;
			font-weight: 800;
		}
	}

	.download-img {
		@media (max-width: 1024px) {
			max-width: 500px;
			margin: 0 auto;
			width: 100%;
		}
	}

	.download-head {
		p {
			color: #fff;
			font-size: 18px;
			font-weight: 500;
			margin-bottom: 50px;
			line-height: 40px;

			@media (max-width: 576px) {
				font-size: 14px;
				text-align: center;
				line-height: 25px;
			}
		}
		.download-text {
			font-weight: 600;
		}
		.text-light {
			font-weight: 700;
			@media (max-width: 768px) {
				font-size: 28px;
			}
			.download-txt-lg {
				color: #000;
			}
			@media (max-width: 576px) {
				font-size: 25px;
				text-align: center;
				margin-bottom: 10px;
			}
		}
		.download-content-img {
			margin-left: -40px;
			width: 300px;
			height: 150px;
			img {
				object-fit: cover;
			}
			@media (max-width: 576px) {
				display: none;
			}
		}
		.app-str-btn {
			max-width: 270px;
			width: 100%;

			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
			@media (max-width: 320px) {
				margin-top: 10px;
			}
		}

		// .app-str-btn {
		// 	background-color: #000;
		// 	max-width: 290px;
		// 	padding: 18px 35px;
		// 	border-radius: 20px;
		// 	color: #fff;
		// 	font-weight: 500;
		// 	display: flex;
		// 	justify-content: center;
		// 	align-items: center;

		// 	&:last-child {
		// 		margin-left: 25px;
		// 		@media (max-width: 576px) {
		// 			margin: 10px auto;
		// 		}
		// 	}

		// 	img {
		// 		width: 30px;
		// 		height: 30px;
		// 	}

		// 	.text-sm {
		// 		font-size: 13px;
		// 	}

		// 	.app-str-btn-text {
		// 		padding-left: 20px;
		// 		display: flex;
		// 		flex-direction: column;
		// 	}
		// 	h4 {
		// 		font-size: 18px;
		// 		@media (max-width: 576px) {
		// 			font-size: 16px;
		// 		}
		// 	}
		// 	@media (max-width: 576px) {
		// 		padding: 10px 35px;
		// 		max-width: 250px;
		// 		margin: 0;
		// 	}
		// }

		// @media (max-width: 1440px) {
		// 	text-align: center;
		// }

		// @media (max-width: 1024px) {
		// 	text-align: center;
		// }
		// @media (max-width: 768px) {
		// 	text-align: left;
		// }
		// @media (max-width: 320px) {
		// 	margin-top: 10px;
		// }
	}
}
</style>

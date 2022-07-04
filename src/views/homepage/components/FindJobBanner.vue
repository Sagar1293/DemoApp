<template>
	<section class="process d-inline-block position-relative w-100">
		<div class="container">
			<div class="row">
				<div class="col-12 text-center">
					<div class="sec-header">
						<span>{{ t('homepage.howWork2.howItWork') }}</span>
						<h5 class="sec-title">
							{{ t('homepage.howWork2.title') }}
						</h5>
						<p>
							{{ t('homepage.howWork2.subTitle') }}
						</p>
					</div>
				</div>
			</div>
			<div class="row justify-content-center">
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="process-box">
						<div class="process-box-img">
							<img
								src="@/assets/images/iconManPad.png"
								class="img-fluid"
								alt=""
							/>
						</div>
						<div class="process-box-title">
							<h5 class="title-lg">
								{{ t('homepage.howWork2.createAccount') }}
							</h5>
						</div>
						<div class="process-box-text">
							<p>
								Get Started by creating an account. Build your
								skills in way2work system, stay back and
								employers will follow your skills and you can
								start to work
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
					<div class="process-box">
						<div class="process-box-img">
							<img
								src="@/assets/images/iconWomanDraw.png"
								class="img-fluid"
								alt=""
							/>
						</div>
						<div class="process-box-title">
							<h5 class="title-lg">
								{{ t('homepage.howWork2.submitResume') }}
							</h5>
						</div>
						<div class="process-box-text">
							<p>
								Way2work lets you upload your resume for both
								easy access and to enable employers and hiring
								managers to view your public resume
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
					<div class="process-box">
						<div class="process-box-img">
							<img
								src="@/assets/images/iconManLaptop.png  "
								class="img-fluid"
								alt=""
							/>
						</div>
						<div class="process-box-title">
							<h5 class="title-lg">
								{{ t('homepage.howWork2.EmailAlerts') }}
							</h5>
						</div>
						<div class="process-box-text">
							<p>
								By providing us with your email, alerts for
								notifications about new Gigs or recommendations
								for openings that might have otherwise gone
								overlooked
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
	name: 'FindJobBanner',
	setup() {
		const { t } = useI18n({ useScope: 'global' });

		return { t };
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.process {
	background-color: $bg-color;

	.process-box {
		margin-top: 120px;
		padding: 150px 30px 30px 30px;
		background-color: #fff;
		border-radius: 20px;
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
		position: relative;

		.process-box-img {
			position: absolute;
			top: -110px;
			left: 0;
		}

		.process-box-title {
			margin-bottom: 15px;
		}

		.process-box-text {
			height: 120px;
		}
	}
}

@media (max-width: 1400px) {
	.process {
		.process-box {
			.process-box-text {
				height: 120px;
			}
		}
	}
}

@media (max-width: 1200px) {
	.process {
		.process-box {
			padding: 100px 20px 20px 20px;
			margin-top: 80px;

			.process-box-img {
				top: -80px;

				img {
					width: 220px;
				}
			}

			.process-box-text {
				height: 145px;
			}
		}
	}
}

@media (max-width: 768px) {
	.process {
		.process-box {
			.process-box-text {
				height: auto;
			}
		}
	}
}

@media (max-width: 576px) {
	.process {
		.process-box {
			margin-top: 40px;

			.process-box-img {
				top: -50px;

				img {
					width: 180px;
				}
			}

			.process-box-title {
				margin-bottom: 10px;
			}

			.process-box-text {
				p {
					font-size: 14px;
				}
			}
		}
	}
}
</style>
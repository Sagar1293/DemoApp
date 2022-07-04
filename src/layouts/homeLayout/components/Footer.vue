<template>
	<!-- New Footer -->
	<section class="footer-up">
		<div class="container">
			<!-- <div class="footer-alert">
				<div class="footer-alert-text">
					<p>
						<strong>Reminder </strong> — we use cookies on our
						website. By continuing to use, you accept the use of
						cookies. <a href="#" class="lue">Read more</a>
						<button class="btn">ok</button>
					</p>
				</div>
			</div> -->
			<!-- <footer class="footer">
				<div class="container-footer">
					<div class="row justify-content-center">
						<div class="col-md-6">
							<div class="f-left">
								<h6 class="foouter-title">{{ t('leadingPage.footer.Sitemap') }}</h6>
								<ul>
									<li class="footer-text-list">{{ t('leadingPage.footer.frontpage') }}</li>
									<li class="footer-text-list">{{ t('leadingPage.footer.Login') }}</li>
									<li class="footer-text-list">
										{{ t('leadingPage.footer.joinHere') }}
									</li>
								</ul>
							</div>
						</div>
						<div class="col-md-6">
							<div class="social-item">
								<div class="f-right">
									<h6 class="foouter-title">Way2Work Oy</h6>
									<div>
										<p class="footer-text">
											Kauppalantie 15, 00320 Helsinki
										</p>
										<p class="footer-text mb-3">
											{{ t('leadingPage.footer.Openonweekday') }} 08:00 - 16:00
										</p>
										<p class="footer-text">
											info@way2work.fi
										</p>
										<p class="footer-text">
											+358 401591447
										</p>
									</div>
								</div>
								<div class="social">
									<div class="item-social">
										<FontAwesomeIcon :icon="FacebookIcon" />
									</div>
									<div class="item-social">
										<FontAwesomeIcon :icon="twitterIcon" />
									</div>
									<div class="item-social">
										<FontAwesomeIcon
											:icon="instagramIcon"
										/>
									</div>
								</div>
							</div>
						</div>
						<div>
							<p class="copyright">
								Way2Work Oy (3123560-3) © 2021
							</p>
						</div>
					</div>
				</div>
			</footer> -->
		</div>
	</section>

	<!-- Old Footer -->
	<!-- <section class="footer d-inline-block position-relative w-100">
		<div class="container">
			<div class="row">
				<div class="footer-col">
					<div class="footer-logo">
						<a href="index.html"
							><img
								src="@/assets/images/logo-white.png"
								class="img-fluid"
								alt=""
						/></a>
					</div>
					<div class="footer-logo-text">
						<p>
							{{ t('footer.description') }}
						</p>
					</div>
					<div
						class="footer-btns d-flex align-items-center justify-content-center"
					>
						<a href="#" class="block mr-2">
							<img
								src="@/assets/images/appStore.png"
								class="img-fluid"
								alt=""
							/>
						</a>
						<a href="#" class="block">
							<img
								src="@/assets/images/googleStore.png"
								class="img-fluid"
								alt=""
							/>
						</a>
					</div>
				</div>
				<div class="footer-col">
					<ul class="footer-list">
						<li>
							<h5 class="footer-title">
								{{ t('footer.quickLinks') }}
							</h5>
						</li>
						<li>
							<a href="">{{ t('common.login') }}</a>
						</li>
						<li>
							<a href="">{{ t('footer.postGig') }}</a>
						</li>
						<li>
							<a href="">{{ t('common.lightEnterpreneur') }}</a>
						</li>
					</ul>
				</div>
				<div class="footer-col">
					<ul class="footer-list">
						<li>
							<h5 class="footer-title">
								{{ t('footer.popularCities') }}
							</h5>
						</li>
						<li>
							<a href="">Espo</a>
						</li>
						<li>
							<a href="">Helsinki</a>
						</li>
						<li>
							<a href="">Porvoo</a>
						</li>
						<li>
							<a href="">Vantaa</a>
						</li>
					</ul>
				</div>
				<div class="footer-col">
					<ul class="footer-list">
						<li>
							<h5 class="footer-title">
								{{ t('common.company') }}
							</h5>
						</li>
						<li>
							<a href="">{{ t('common.home') }}</a>
						</li>
						<li>
							<a href="">{{ t('common.aboutUs') }}</a>
						</li>
						<li>
							<a href="">{{ t('common.contactUs') }}</a>
						</li>
						<li>
							<a href="">{{ t('common.ourTeam') }}</a>
						</li>
					</ul>
				</div>
				<div class="footer-col">
					<ul class="footer-list">
						<li>
							<h5 class="footer-title">
								{{ t('footer.getTouch') }}
							</h5>
						</li>
						<li>
							<a href="">
								<span>
									<FontAwesomeIcon :icon="locationPinIcon" />
								</span>
								Kauppalantie 15, 0030, Helsinki
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<FontAwesomeIcon :icon="phoneIcon" />
								</span>
								+358 401591447
							</a>
						</li>
						<li>
							<a href="">
								<span>
									<FontAwesomeIcon :icon="mailIcon" />
								</span>
								info@way2work.fi
							</a>
						</li>
						<li>
							<a>
								<span>
									<FontAwesomeIcon :icon="clockIcon" />
								</span>
								{{ t('common.mon') }} {{ t('common.to') }}
								{{ t('common.fri') }}
								<br />
								9.00 am to 16:00 pm
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section> -->
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	// faMapMarkerAlt,
	// faPhoneAlt,
	// faEnvelope,
	// faClock,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { useI18n } from 'vue-i18n';

export default {
	name: 'Footer',

	// components
	components: {
		// FontAwesomeIcon,
	},

	// composition api
	setup() {
		// icons
		// const locationPinIcon = faMapMarkerAlt;
		// const phoneIcon = faPhoneAlt;
		// const mailIcon = faEnvelope;
		// const clockIcon = faClock;
		const FacebookIcon = faFacebook;
		const twitterIcon = faTwitter;
		const instagramIcon = faInstagram;

		// i18n instance
		const { t } = useI18n({
			useScope: 'global',
		}); //  use i18n

		return {
			// locationPinIcon,
			// phoneIcon,
			// mailIcon,
			// clockIcon,
			FacebookIcon,
			twitterIcon,
			instagramIcon,
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
.footer-up {
	padding: 0;
	color: #fff;
	background-color: #263238;
	.footer-alert {
		padding: 10px 0;
		.footer-alert-text {
			color: #fff;
			text-align: center;
			.lue {
				color: #007bff;
				border-bottom: 1px solid #007bff;
			}
			.btn {
				color: #fff;
				background-color: $coloRed;
				margin-left: 10px;
				padding: 3px 10px;
			}
		}
	}
	.footer {
		.container-footer {
			padding: 40px 0;
			margin: 0 7rem;
			.foouter-title {
				margin-bottom: 12px;
				font-weight: 700;
				font-size: 16px;
			}
			.footer-text-list {
				color: inherit;
				text-decoration: none;
				opacity: 0.6;
			}
			.social-item {
				display: flex;
				align-items: flex-end;
				.social {
					display: flex;
					align-items: center;
					.item-social {
						cursor: pointer;
						font-size: 20px;
						width: 36px;
						height: 36px;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 0 8px;
						color: #fff;
						opacity: 0.75;
						border: 1px solid #fff;
					}
				}
			}
			// .copyright {
			// 	text-align: center;
			// 	padding-top: 24px;
			// 	opacity: 0.3;
			// 	font-size: 13px;
			// 	margin-bottom: 0;
			// }
		}
	}
}
@media (max-width: 768px) {
	.footer-up {
		.footer {
			.container-footer {
				padding: 40px 0;
				margin: 0 1rem;
				.social-item {
					display: block;
					.social {
						margin-top: 1rem;
					}
				}
			}
		}
	}
}
@media (max-width: 480px) {
	.footer-up {
		.footer {
			.container-footer {
				text-align: center;
				.social-item {
					margin-top: 2rem;
					.social {
						justify-content: center;
					}
				}
			}
		}
	}
}
.footer {
	background-color: #000;
	color: #fff;
	.footer-col {
		width: 20%;
		padding: 0px 15px;

		.footer-logo {
			img {
				width: 150px;
				object-fit: contain;
			}
			// @media (max-width: 576px) {
			// 	width: 150px;
			// }
		}

		.footer-logo-text {
			margin: 30px 0px;
		}

		.footer-btns {
			a {
				display: inline-block;
				margin-bottom: 10px;
			}
		}

		.footer-list {
			li {
				padding: 8px 0px;

				a {
					font-weight: 400;
					display: flex;
					align-items: center;

					span {
						display: inline-block;
						margin-right: 10px;

						svg {
							font-size: 20px;
						}
					}

					&:hover {
						color: $coloRed;
					}
				}

				.footer-title {
					margin-bottom: 10px;
					font-size: 20px;
					font-weight: 600;
				}
			}
		}
	}
}

@media (max-width: 992px) {
	.footer {
		.footer-col {
			width: 33.33%;
			margin-bottom: 30px;
		}
	}
}

@media (max-width: 768px) {
	.footer {
		.footer-col {
			width: 50%;
		}
	}
}

@media (max-width: 576px) {
	.footer {
		text-align: center;

		.footer-col {
			width: 100%;
			text-align: center;

			.footer-list {
				li {
					.footer-title {
						margin-bottom: 0px;
						font-size: 18px;
					}

					a {
						justify-content: center;
						font-size: 14px;
					}
				}
			}
		}
	}
}
</style>

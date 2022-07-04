<template>
	<section class="our-team d-inline-block position-relative w-100 p-0">
		<div class="container">
			<div class="row our-team-row float-top">
				<div class="col-xl-4 col-sm-6" v-for="(item, i) in 5" :key="i">
					<div class="team-box">
						<div class="team-box-img">
							<div class="img1">
								<img
									src="@/assets/images/teamBg.png"
									class="img-fluid"
									alt=""
								/>
							</div>
							<div class="img2">
								<img
									src="@/assets/images/woman1.png"
									class="img-fluid"
									alt=""
								/>
							</div>
						</div>
						<div class="team-box-content">
							<div class="tbc-title">
								<h5 class="text-big">Maia-Liisa Stadnik</h5>
							</div>
							<div class="tbc-info">
								<div class="row align-items-center">
									<div class="col-md-10">
										<div class="tbc-contact">
											<ul class="contact-list">
												<li>
													<a
														href="tel:+358 401253499"
													>
														<span>
															<FontAwesomeIcon
																:icon="
																	phoneIcon
																"
															/>
														</span>
														+358 401253499
													</a>
												</li>
												<li>
													<a href="">
														<span>
															<FontAwesomeIcon
																:icon="
																	envelopIcon
																"
															/>
														</span>
														Maia-liisa@way2work.fi
													</a>
												</li>
												<li>
													<a href="">
														<span>
															<FontAwesomeIcon
																:icon="userIcon"
															/>
														</span>
														Asiakaspalvelu
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="col-md-2">
										<div class="tbc-social">
											<ul class="social-list">
												<li>
													<a href="">
														<FontAwesomeIcon
															:icon="facebookIcon"
														/>
													</a>
												</li>
												<li>
													<a href="">
														<FontAwesomeIcon
															:icon="twitterIcon"
														/>
													</a>
												</li>
												<li>
													<a href="">
														<FontAwesomeIcon
															:icon="
																googlePlusIcon
															"
														/>
													</a>
												</li>
												<li>
													<a href="">
														<FontAwesomeIcon
															:icon="
																instagramIcon
															"
														/>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faUser,
	faPhoneAlt,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faFacebook,
	faTwitter,
	faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

export default {
	name: 'TeamCards',

	// components
	components: {
		FontAwesomeIcon,
	},

	setup() {
		const { t } = useI18n({ useScope: 'global' });
		const userIcon = faUser;
		const phoneIcon = faPhoneAlt;
		const envelopIcon = faEnvelope;
		const instagramIcon = faInstagram;
		const facebookIcon = faFacebook;
		const twitterIcon = faTwitter;
		const googlePlusIcon = faGooglePlusG;

		return {
			t,
			userIcon,
			phoneIcon,
			envelopIcon,
			instagramIcon,
			facebookIcon,
			twitterIcon,
			googlePlusIcon,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.our-team {
	& .float-top {
		top: -100px;
	}

	.our-team-row {
		background-color: #fff;
		border-radius: 30px;
		padding: 30px 10px 30px 10px;
		position: relative;

		.team-box {
			position: relative;
			padding: 130px 25px 25px 25px;
			border-radius: 20px;
			box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
			margin-top: 220px;

			.team-box-img {
				.img1 {
					position: absolute;
					top: -10%;
					left: 50%;
					transform: translate(-50%, -50%);
				}

				.img2 {
					position: absolute;
					top: -10%;
					left: 50%;
					transform: translate(-50%, -50%);

					img {
						width: 350px;
						height: 300px;
						object-fit: cover;
					}
				}
			}

			.team-box-content {
				.tbc-title {
					margin-top: 10px;
					margin-bottom: 20px;

					.text-big {
						font-size: 22px;
					}
				}

				.tbc-info {
					.tbc-contact {
						.contact-list {
							li {
								display: block;
								padding: 10px 0px;

								a {
									svg {
										font-size: 16px;
										margin-right: 10px;
									}
								}
							}
						}
					}
				}

				.tbc-social {
					.social-list {
						li {
							padding: 5px 0px;
							display: block;
							text-align: center;

							a {
								svg {
									color: $coloRed;
								}
							}
						}
					}
				}
			}
		}
	}
}

@media (max-width: 1200px) {
	.our-team {
		.our-team-row {
			.team-box {
				.team-box-img {
					.img2 {
						img {
							height: 310px;
							width: auto;
						}
					}
				}
			}
		}
	}
}

@media (max-width: 992px) {
	.our-team {
		.our-team-row {
			.team-box {
				.team-box-img {
					.img2 {
						img {
							height: 310px;
							min-width: 210px;
						}
					}
				}
			}
		}
	}
}

@media (max-width: 768px) {
	.our-team {
		.our-team-row {
			.team-box {
				.team-box-content {
					.tbc-social {
						.social-list {
							li {
								display: inline-block;
								padding: 5px 10px;
							}
						}
					}
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.our-team {
		.our-team-row {
			.team-box {
				text-align: center;
				.team-box-img {
					.img2 {
						img {
							height: auto;
							width: auto;
							object-fit: contain;
						}
					}
				}
				.team-box-content {
					.tbc-title {
						margin-bottom: 10px;
						.text-big {
							font-size: 20px;
						}
					}
					.tbc-info {
						.tbc-contact {
							.contact-list {
								li {
									a {
										font-size: 14px;
										svg {
											font-size: 12px;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
</style>
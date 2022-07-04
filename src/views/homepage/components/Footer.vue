<template>
	<footer class="footer d-inline-block position-relative w-100">
		<div class="container-lg">
			<div class="row">	
				<div class="col-lg-5 col-12">
					<div class="footer-logo">
						<a href="index.html" class="img-wrap d-block"
							><img
								src="@/assets/images/logo-white.png"
								alt=""
						/>
						</a>
					
							<ul class="footer-sitemap mt-4">
								<li>
									<a href="" class="d-flex align-items-start">
										<div>
											<FontAwesomeIcon :icon="mapIcon" />
										</div>
										<p class="ml-3">
											Kauppalantie 15,00320 Helsinki Open in
											weekdays 08:00-16:00
										</p>
									</a>
								</li>
							</ul>

							<div class="row">
								<div class="col-xl-6 col-lg-12 col-12">
									<ul>
										<li>
											<a
												href=""
												class="d-flex align-items-center"
											>
												<div>
													<FontAwesomeIcon
														:icon="telephoneIcon"
													/>
												</div>
												<p class="ml-3 tel-text">
													+358 401591447
												</p>
											</a>
										</li>
									</ul>
								</div>
								<div class="col-xl-6 col-lg-12 col-12">
									<ul>
										<li>
											<a
												href=""
												class="d-flex align-items-center"
											>
												<div>
													<FontAwesomeIcon
														:icon="emailICon"
													/>
												</div>
												<a href="" class="ml-3"
													>info@way2work.fi</a
												>
											</a>
										</li>
									</ul>
								</div>
							</div>
					<!-- <li>
						<a href="">
							<div>
								<FontAwesomeIcon :icon="telephoneIcon" />
							</div>
						</a>
					</li> -->
					<!-- <li>
						<a href=""></a>
					</li> -->
				
					</div>
					<!-- <div class="footer-logo-text">
						<p>
							{{ t('footer.description') }}
						</p>
					</div> -->
					<!-- <div
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
					</div> -->
				</div>
				<div class="col-lg-3 col-12">
					<ul class="footer-sitemap">
						<li>
							<h5 class="footer-title mb-3">
								{{ t('leadingPage.footer.Sitemap') }}
							</h5>
						</li>
						<li>
							<a href="">{{ t('leadingPage.footer.Home') }}</a>
						</li>
						<li>
							<a href="">{{ t('leadingPage.footer.Login') }}</a>
						</li>
						<li>
							<a href=""
								>{{ t('leadingPage.footer.joinHere') }}
							</a>
						</li>
					</ul>
				</div>

				<div class="col-lg-4">
					<div class="d-flex ">
						<div class="mr-1 cursor-pointer">
							<img src="@/assets/images/fb-icon.png" alt="" />
						</div>

						<div class="mr-1 cursor-pointer">
							<img
								src="@/assets/images/twitter-icon.png"
								alt=""
							/>
						</div>

						<div class="mr-1 cursor-pointer">
							<img src="@/assets/images/google-icon.png" alt="" />
						</div>

						<div class="mr-1 cursor-pointer">
							<img src="@/assets/images/wp-icon.png" alt="" />
						</div>

						<div class="cursor-pointer">
							<img src="@/assets/images/plus-icon.png" alt="" />
						</div>
					</div>
				</div>
				
				
				
				
			</div>
		</div>

		<div class="container-lg footer-bottom">
			<p>
				Way2Work oy(3123560-3)
				<span>
					<FontAwesomeIcon :icon="copyrightIcon" />
				</span>
				2021 (privacy policy,terms of service)
			</p>
		</div>

		<div class="container-xl">
			<p class="text-small">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit sequi repellendus esse non nemo quasi accusamus cum, quaerat error cupiditate explicabo fugiat eos nulla labore minus alias omnis placeat.
				Aliquid voluptatibus cupiditate natus. Error odit ipsa asperiores quasi consequuntur minus quae suscipit numquam tenetur provident possimus cumque saepe perferendis voluptas hic, eveniet magnam ad sapiente ab placeat maiores dolor?
				Ea eius iusto quos odio amet id, impedit dolores eligendi maxime earum alias, a inventore nesciunt aperiam consequuntur voluptate itaque commodi mollitia cumque minus dolorem voluptatem perferendis quasi ratione! Veniam?
				Aperiam commodi, in veniam earum ad quo ipsum quam, libero laboriosam alias exercitationem minus eos deserunt corrupti reiciendis ab ducimus maxime porro facilis ut voluptatum fugiat. Blanditiis aspernatur quisquam maiores!
				Eos, ratione fuga est ut ad voluptate numquam qui delectus exercitationem totam, sequi, labore maiores beatae possimus eligendi reiciendis odio quaerat dolores impedit vel distinctio itaque reprehenderit eaque.
			</p>
		</div>
	</footer>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	// faMapMarkerAlt,
	// faPhoneAlt,
	// faEnvelope,
	// faClock,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
	faMapMarkerAlt,
	faPhoneAlt,
	faEnvelope,
	faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n';

export default {
	name: 'Footer',

	// components
	components: {
		FontAwesomeIcon,
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
		const mapIcon = faMapMarkerAlt;
		const telephoneIcon = faPhoneAlt;
		const emailICon = faEnvelope;
		const copyrightIcon = faCopyright;
		// const mapIcon = fam;

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
			mapIcon,
			telephoneIcon,
			emailICon,
			copyrightIcon,
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.footer {
	background-color: #000;
	color: #fff;
	padding: 50px 0 0;
	li {
		line-height: 45px;
	}

	a {
		color: #fff;
		font-size: 14px;
		font-weight: 500;

		@media (max-width: 576px) {
			font-size: 13px;
		}
	}

	.footer-logo {

		@media (max-width: 768px) {
			margin-bottom: 40px;
		}

		@media (max-width: 576px) {
			width: 150px;
		}
	}
	.tel-text {
		font-size: 14px;
		white-space: nowrap;
		@media (max-width: 576px) {
			font-size: 13px;
		}
	}
	.footer-bottom {
		padding: 60px 0 60px;
		@media (max-width: 1024px) {
			padding: 50px 0 100px;
		}

		@media (max-width: 768px) {
			padding: 50px 0 100px;
		}
		@media (max-width: 576px) {
			padding: 20px 20px 20px;
			font-size: 13px;
		}
	}
	.footer-sitemap {
		p {
			max-width: 295px;
			line-height: 30px;
			font-weight: 300;
			font-size: 14px;
		}
		h5 {
			@media (max-width: 1024px) {
				margin: 20px 0 0;
			}
		}
		@media (max-width: 576px) {
			margin: 20px 0 0;
		}
		a {
			@media (max-width: 576px) {
				font-size: 13px;
			}
		}
	}
}
</style>

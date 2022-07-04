<template>
	<!-- <section class="team-Boxed-section">
		<div class="container">
			<div class="intro">
				<h3 class="intro-title">
					{{ t('leadingPage.teamBoxed.introTitle') }}
				</h3>
				<p>
					{{ t('leadingPage.teamBoxed.introTitledesc') }}
				</p>
			</div>
			<div class="cards">
				<div class="card">
					<div class="card-img-top">
						<img
							src="@/assets/images/icon_png.png"
							alt="img"
							class="img-fluid"
						/>
					</div>
					<div class="card-body">
						<h5 class="card-title">
							{{ t('leadingPage.teamBoxed.cardtTitle1') }}
						</h5>
						<p class="card-text">
							{{ t('leadingPage.teamBoxed.cardtText1') }}
						</p>
						<p>
							{{ t('leadingPage.teamBoxed.cardtDesc1') }}
						</p>
					</div>
					<div class="card-footers">
						<button class="btn">
							{{ t('leadingPage.teamBoxed.cardtBtnFoot') }} »
						</button>
					</div>
				</div>
				<div class="card">
					<div class="card-img-top">
						<img
							src="@/assets/images/icon_png.png"
							alt="img"
							class="img-fluid"
						/>
					</div>
					<div class="card-body">
						<h5 class="card-title">
							{{ t('leadingPage.teamBoxed.cardtTitle2') }}
						</h5>
						<p class="card-text">
							{{ t('leadingPage.teamBoxed.cardtText2') }}
						</p>
						<p>
							{{ t('leadingPage.teamBoxed.cardtDesc2') }}
						</p>
					</div>
					<div class="card-footers">
						<button class="btn">
							{{ t('leadingPage.teamBoxed.cardtBtnFoot') }} »
						</button>
					</div>
				</div>
				<div class="card">
					<div class="card-img-top">
						<img
							src="@/assets/images/icon_png.png"
							alt="img"
							class="img-fluid"
						/>
					</div>
					<div class="card-body">
						<h5 class="card-title">
							{{ t('leadingPage.teamBoxed.cardtTitle3') }}
						</h5>
						<p class="card-text">
							{{ t('leadingPage.teamBoxed.cardtText3') }}
						</p>
						<p>
							{{ t('leadingPage.teamBoxed.cardtDesc3') }}
						</p>
					</div>
					<div class="card-footers">
						<button class="btn">
							{{ t('leadingPage.teamBoxed.cardtBtnFoot') }} »
						</button>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<!-- <section class="highlight-blue">
		<div class="highlight-blue-section">
			<div class="container">
				<div class="pulse-section">
					<h1 class="card-title">
						<u>{{ t('leadingPage.downloadSection.download') }} </u>
						Way
						<img
							src="@/assets/images/icon_png.png"
							alt="img"
							class="img-fluid icon-img"
						/>
						Work
						<u>{{ t('leadingPage.downloadSection.device') }}</u>
					</h1>
					<p class="text-det">
						{{ t('leadingPage.downloadSection.textDes1') }}
					</p>
					<p class="text-det">
						{{ t('leadingPage.downloadSection.textDes2') }}
						{{ t('leadingPage.downloadSection.for') }}&nbsp;<strong
							>Android</strong
						>
						{{ t('leadingPage.downloadSection.andText') }}
						<strong>iPhone</strong>
						{{ t('leadingPage.downloadSection.smartphones') }}
					</p>
					<p class="text-det">
						{{ t('leadingPage.downloadSection.textDes3') }}
						<strong>{{
							t('leadingPage.downloadSection.store')
						}}</strong>
						{{ t('leadingPage.downloadSection.andText') }}
						<strong>{{
							t('leadingPage.downloadSection.googlePaly')
						}}</strong
						>.
					</p>
					<div class="buttons">
						<img
							src="@/assets/images/icons/app-store-badge.svg"
							alt="img"
							class="img-fluid icon-img"
						/>
						<img
							src="@/assets/images/google-play-badge.png"
							alt="img"
							class="img-fluid icon-img"
						/>
					</div>
				</div>
			</div>
		</div>
	</section> -->

	<div class="pro-gig-wrap">
		<div class="container-lg">
			<section class="profession-sec position-relative">
				<!-- profession heading -->
				<div class="container-lg">
					<div class="profession-heading">
						<div class="underline-text-wrap">
							<h4 class="underline-text">
								{{ t('leadingPage.Professions.profession') }}
							</h4>
						</div>
						<h1>
							{{ t('leadingPage.Professions.lightEntrepreneurship') }}
						</h1>
					</div>
				</div>
				<!-- profession heading -->

				<!-- profession box -->
				<div class="profession-container container-lg">
					<div class="row no-gutters">
						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="danger-box profession-box-common p-h">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-red-r.png" alt="" class="prof-red-t-right" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox1') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="danger-box profession-box-common p-h">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-red-l.png" alt="" class="prof-red-left" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox2') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="dark-box profession-box-common p-h">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-grey-r-b.png" alt="" class="prof-grey-t-right" />
								</span>
								<h2>
									{{ t('leadingPage.Professions.professionBox3') }}
								</h2>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="dark-box profession-box-common p-h">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-grey-l-b.png" alt="" class="prof-grey-l-b" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox4') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="white-box profession-box-common prof-px">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-white-right-bottom.png" alt="" class="prof-red-t-right prof-white-left" />
								</span>
								<h2>
									<span class="text-danger">{{ t('leadingPage.Professions.professionBox5') }}</span>
									{{ t('leadingPage.Professions.professionBox5-1') }}
								</h2>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="white-box profession-box-common prof-px">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-white-l-b.png" alt="" class="prof-grey-l-b prof-white-top" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox6') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="dark-box profession-box-common prof-px">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-t-r-b.png" alt="" class="prof-grey-l-b prof-white-top" />
								</span>
								<p class="overflow-hidden ">
									{{ t('leadingPage.Professions.professionBox7') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="dark-box profession-box-common prof-px">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-light-grey-t-r-b.png" alt="" class="prof-red-t-right prof-grey-top" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox8') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="white-box profession-box-common prof-h-p">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-white-t-r.png" alt="" class="prof-grey-l-b prof-white-top prof-white-v" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox9') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="white-box profession-box-common prof-h-p">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-white-t-l.png" alt="" class="prof-red-t-right prof-white-v-left" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox10') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="dark-box profession-box-common prof-h-p">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-t-r.png" alt="" class="prof-red-t-right prof-grey-top prof-h-right" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox11') }}
								</p>
							</div>
						</div>

						<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
							<div class="dark-box profession-box-common prof-h-p">
								<span class="prof-bg-puzzle">
									<img src="~@/assets/images/prof-t-l.png" alt="" class="prof-grey-l-b prof-white-top prof-v-top" />
								</span>
								<p>
									{{ t('leadingPage.Professions.professionBox12') }}
								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- profession box -->
			</section>
		</div>

		<section class="gig-sec">
			<div class="container-lg">
				<div class="gig-heading">
					<h1 class="banner-head-text text-black bg-light p-2">
						<span>
							{{ t('leadingPage.latestGigs.latest') }}
						</span>
						{{ t('leadingPage.latestGigs.gig') }}
					</h1>
					<h1>{{ t('leadingPage.latestGigs.availableGig') }}</h1>
					<p>
						{{ t('leadingPage.latestGigs.offer') }}
					</p>
				</div>
			</div>
			<div class="container-lg">
				<div class="gig-splide">
					<carousel :items-to-show="3" :breakpoints="breakpoints">
						<slide v-for="(item, index) in gigList" :key="item.id">
							<div :class="`feature-slider-box ${className[index % 3]}`">
								<div class="img-wrap mx-auto mt-2">
									<img src="@/assets/images/dark-logo.svg" alt="" />
								</div>
								<h3 class="mt-xl-3 my-2">{{ item.job_title || '-' }}</h3>
								<p class="gig-title">Sijainti:{{ item.city && item.city.city_name }}</p>
								<p class="d-inline-block text-truncate">
									{{ item.job_description || '-' }}
								</p>
								<button class="btn-bordered btn-light-gray-shadow " @click="viewMoreDetail(item.id, index)">
									MORE INFORMATION
								</button>
							</div>
						</slide>

						<template #addons>
							<!-- <navigation /> -->
							<pagination />
						</template>
					</carousel>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { useStore } from 'vuex';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
export default {
	name: 'TeamBox',

	// components
	components: {
		// FontAwesomeIcon,
		// Splide,
		// SplideSlide,
		Carousel,
		Slide,
		Pagination,
		// Navigation,
	},

	setup() {
		//ref
		const { t } = useI18n({ useScope: 'global' });
		const className = ['white-box', 'feature-dark-box', 'feature-light-box'];
		const secondary = ref(null);
		const options = {
			perPage: 3,
			rewind: false,
			autoplay: true,
			pauseOnHover: false,
			arrows: false,
			gap: '0.6rem',

			breakpoints: {
				1024: {
					perPage: 2,
					padding: 0,
				},
				768: {
					perPage: 2,
					padding: 0,
				},
				576: {
					perPage: 1,
					padding: 0,
				},
			},
			// height: '15rem',
		};

		const breakpoints = {
			320: {
				itemsToShow: 1,
				snapAlign: 'center',
			},
			375: {
				itemsToShow: 1,
				snapAlign: 'center',
			},

			576: {
				itemsToShow: 1,
				snapAlign: 'center',
			},

			// 700px and up
			768: {
				itemsToShow: 2,
				snapAlign: 'center',
			},
			// 1024 and up
			1024: {
				itemsToShow: 3,
				snapAlign: 'start',
			},
		};
		// global store
		const store = useStore();

		// global router
		const router = useRouter();

		/**
		 * Mounted
		 * *******************************************************************
		 */
		onMounted(() => {
			if (secondary.value && secondary.value.splide) {
				console.log(secondary.value.splide.length);
			}
			// secondary.primary.sync(secondary.secondary.splide);
			//Gig list
			fetchProjectList();
		});

		/**
		 * Computed
		 * *******************************************************************
		 */

		// project market list
		const gigList = computed(() => store.getters['projectmarket/getProjectList']);

		// user is looged in ?
		const isUserLogedIn = computed(() => store.state.auth.userLogged);

		// For User Type
		const userTypeInfo = computed(() => store.state.auth.userType);

		// project details
		// const projectDetails = computed(
		// 	() => store.getters['projectmarket/getProjectInfo'],
		// );

		/**
		 * Methods
		 * *******************************************************************
		 */

		const fetchProjectList = async () => {
			const values = {
				industry: '',
				city: '',
			};
			await store.dispatch('projectmarket/getProjectList', {
				payload: values,
			});
		};
		//more information
		const viewMoreDetail = (id, index) => {
			// store.commit('projectmarket/SET_STATE', {
			// 	action: 'gigProjectId',
			// 	data: id,
			// });
			router.push({
				name: 'Project Marker',
				params: { id: id, index: index },
			});
		};

		return {
			//ref
			t,
			options,
			className,
			secondary,

			//computed
			gigList,
			isUserLogedIn,
			userTypeInfo,

			//method
			viewMoreDetail,
			breakpoints,
		};
	},
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.pro-gig-wrap {
	position: relative;
	padding: 300px 0 0;
	z-index: 0;
	background: linear-gradient(to bottom, rgba(16, 0, 1, 1) 20%, rgba(228, 17, 22, 1) 70%);
	mix-blend-mode: multiply;
	width: 100%;
	margin-top: -20px;

	@media (max-width: 1024px) {
		padding: 100px 0 0;
	}

	@media (max-width: 576px) {
		padding: 50px 0 0;
	}

	&::after {
		content: '';
		position: absolute;
		padding-bottom: -330px;
		top: 20%;
		left: 0;
		right: 0;
		height: 100%;
		width: 100%;
		mix-blend-mode: multiply;
		background: url('~@/assets/images/gig-wrap-img.png') no-repeat;
		background-position: top right;
		background-size: contain;
		z-index: -1;
	}

	// profession-sec
	.profession-sec {
		.container-lg {
			position: relative;
			z-index: 1;
		}

		.profession-heading {
			max-width: 1200px;
			margin: 0 auto;
			text-align: center;

			@media (max-width: 576px) {
				padding: 5px;
			}

			.underline-text-wrap {
				max-width: 370px;
				margin: 0 auto;

				.underline-text {
					color: #e41116;
					border-bottom: 1px solid #e41116;

					@media (max-width: 576px) {
						font-size: 25px;
						letter-spacing: 10px;
						max-width: 300px;
						margin: 0 auto;
					}
				}
			}
		}

		h1 {
			font-size: 40px;
			color: $colorWhite;
			font-weight: 700;
			margin-top: 40px;
			margin-bottom: 80px;

			@media (max-width: 1024px) {
				font-size: 30px;
				margin-top: 30px;
				margin-bottom: 60px;
			}

			@media (max-width: 576px) {
				font-size: 20px;
			}
		}
		&::before {
			content: '';
			position: absolute;
			left: 0;
			width: 150px;
			height: 150px;
			background: url('~@/assets/images/thrown.png') no-repeat;
			z-index: -1;
			background-size: contain;

			@media (max-width: 1440px) {
				left: 30px;
			}

			@media (max-width: 1024px) {
				top: -10px;
				left: 30px;
			}

			@media (max-width: 768px) {
				top: -10px;
				left: 30px;
			}

			@media (max-width: 576px) {
				display: none;
			}
		}
	}

	.profession-box-common {
		border-radius: 20px;
		height: 382px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 74px;

		@media (max-width: 1600px) {
			font-size: 15px;
			padding: 74px 55px;
		}

		@media (max-width: 1400px) {
			height: 320px;
		}

		.prof-bg-puzzle {
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			position: absolute;

			img {
				width: 100%;
				height: 100%;
				position: relative;
				object-fit: contain;
			}
		}

		p {
			@media (max-width: 1440px) {
				font-size: 12px;
			}

			@media (max-width: 1024px) {
				font-size: 13px;
			}

			@media (max-width: 576px) {
				font-size: 11px;
			}
		}
		@media (max-width: 1024px) {
			// padding: 70px;
			height: 300px;
		}
		@media (max-width: 768px) {
			max-width: 400px;
			margin: 0 auto;
			// padding: 70px;
			height: 340px;
		}

		@media (max-width: 576px) {
			max-width: 300px;
			margin: 0 auto;
			// padding: 10px 80px;
			height: 330px;
		}
		@media (max-width: 320px) {
			max-width: 300px;
			margin: 0 auto;
			// padding: 10px 90px;
			height: 330px;
		}
	}

	.danger-box {
		background-color: transparent;
		color: $colorWhite;
	}
	.dark-box {
		background-color: transparent;
		color: $colorWhite;
		font-weight: 300;

		h2 {
			color: $colorWhite;
		}

		p {
			@media (max-width: 1536px) {
				font-size: 13px;
			}

			@media (max-width: 320px) {
				font-size: 11px;
			}
		}
	}
	.white-box {
		background-color: transparent;
		color: #000;
		h2 {
			span {
				font-size: 33px;
				font-weight: 700;
			}
		}

		p {
			@media (max-width: 1536px) {
				font-size: 11px;
			}
		}
	}
	.feature-dark-box {
		background-color: #394251;
	}
}

// gig-sec
.gig-sec {
	padding: 150px 0 50px 0;

	@media (max-width: 1600px) {
		padding: 50px 50px;
	}

	@media (max-width: 768px) {
		padding: 50px 50px;
	}
	@media (max-width: 576px) {
		padding: 20px 50px;
	}
	@media (max-width: 380px) {
		padding: 20px 10px;
	}
	.gig-heading {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;

		.banner-head-text {
			max-width: 450px;
			margin: 0 auto;

			@media (max-width: 1440px) {
				max-width: 350px;
			}

			@media (max-width: 576px) {
				font-size: 25px;
				margin: 0 auto 20px auto;
			}
		}

		h1 {
			color: #fff;
			font-weight: 700;
			font-size: 40px;
			margin: 25px 0 0 0;

			@media (max-width: 768px) {
				font-size: 20px;
			}

			@media (max-width: 576px) {
				font-size: 20px;
			}
		}

		p {
			color: #fff;
			font-size: 22px;
			margin-top: 15px;
			font-weight: 300;

			@media (max-width: 768px) {
				font-size: 20px;
			}

			@media (max-width: 576px) {
				font-size: 15px;
			}
		}

		.gig-head {
			p {
				color: #fff;
				font-size: 22px;
				font-weight: 400;
				margin: 50px 0;
				line-height: 40px;
			}
		}
	}

	.gig-splide {
		padding-top: 100px;

		// @media (max-width: 768px) {
		// 	padding-top: 30px;
		// }
		// @media (max-width: 576px) {
		// padding-top: 0;
		// }

		.white-box {
			text-align: center;
			// background-color: transparent;
			background-image: url('~@/assets/images/slider-white-puzzle.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: right;

			h3 {
				font-weight: 700;
				font-size: 20px;

				@media (max-width: 1240px) {
					font-size: 19px;
				}
				@media (max-width: 576px) {
					font-size: 16px;
				}
			}

			p {
				font-size: 17px;
				color: #595959;
				overflow: hidden;

				@media (max-width: 1240px) {
					font-size: 14px;
				}

				@media (max-width: 576px) {
					padding: 15px 20px;
					font-size: 14px;
				}
			}
			.gig-title {
				margin: 15px 0 30px 0;

				@media (max-width: 1240px) {
					margin: 10px;
					font-size: 14px;
				}

				@media (max-width: 1024px) {
					margin: 10px;
				}

				@media (max-width: 576px) {
					margin: 0px 0 -30px 0;
				}
			}
		}

		.feature-dark-box,
		.feature-light-box {
			text-align: center;
			background-color: transparent;
			background-image: url('~@/assets/images/slider-gray-puzzle.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: right;

			h3 {
				font-weight: 700;
				color: #fff;
				font-size: 20px;

				@media (max-width: 1240px) {
					font-size: 15px;
				}
				@media (max-width: 576px) {
					font-size: 16px;
				}
			}

			p {
				font-size: 17px;
				font-weight: 300;
				color: #fff;
				overflow: hidden;

				@media (max-width: 1240px) {
					font-size: 14px;
				}

				@media (max-width: 576px) {
					padding: 15px 20px;
					font-size: 10px;
				}
			}

			.gig-title {
				margin: 15px 0 30px 0;

				@media (max-width: 1240px) {
					margin: 10px;
					font-size: 14px;
				}

				@media (max-width: 576px) {
					margin: 5px 0 -30px 0;
				}
			}
		}

		.feature-light-box {
			background-color: transparent;
			background-color: transparent;
			background-image: url('~@/assets/images/slider-light-grey-puzzle.png');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: right;
		}

		.btn-bordered,
		.btn-light-shadow {
			background-color: #e41116;
			padding: 20px 35px;
			border-radius: 50px;
			color: #fff;
			font-weight: 600;
			box-shadow: 0px 9px 20px #cecfd3;
			font-size: 14px;
			margin-top: 30px;

			@media (max-width: 1440px) {
				padding: 12px 20px;
				font-size: 14px;
				margin-top: 30px;
			}
			@media (max-width: 1024px) {
				padding: 10px 20px;
				font-size: 12px;
				margin-top: 10px;
			}
			@media (max-width: 576px) {
				padding: 10px 20px;
				font-size: 10px;
			}
		}

		.btn-light-shadow {
			box-shadow: 0px 9px 20px #24262a;
		}

		.btn-light-gray-shadow {
			box-shadow: 0px 9px 20px #576a88;

			@media (max-width: 1200px) {
				white-space: nowrap;
				font-size: 12px;
			}
			@media (max-width: 1200px) {
				white-space: nowrap;
				font-size: 9px;
			}
		}
	}
}

.gig-splide {
	.splide__pagination {
		bottom: -90px !important;
	}

	.splide__pagination__page {
		margin: 10px !important;
		background-color: #e34a4e;
	}

	.splide__pagination__page.is-active {
		height: 13px;
		width: 13px;
		background: #454648;
		border: 2px solid #fff;
	}

	.splide__pagination__page:hover {
		background: #454648;
	}
}

.carousel__pagination-button {
	margin: var(--vc-pgn-margin);
	height: 13px;
	width: 13px;
	border-radius: 50%;
	border: 0;
	cursor: pointer;
	background-color: #e34a4e;
	margin-top: 30px;
}
.carousel__pagination-button--active {
	height: 13px;
	width: 13px;
	background-color: #454648;
}

.feature-slider-box {
	padding: 90px;
	min-height: 500px;
	border-radius: 30px;
	width: 98% !important;
	display: flex;
	flex-direction: column;

	@media (max-width: 1440px) {
		padding: 70px;
		min-height: 330px;
	}
	@media (max-width: 1024px) {
		padding: 60px;
	}
	@media (max-width: 768px) {
		padding: 70px;
	}
	@media (max-width: 768px) {
		padding: 70px 40px;
	}

	h3 {
		@media (max-width: 1024px) {
			font-size: 20px;
		}
		@media (max-width: 576px) {
			font-size: 16px;
		}
	}
	p {
		@media (max-width: 1024px) {
			font-size: 16px;
		}
	}
}
</style>

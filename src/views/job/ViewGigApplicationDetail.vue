<template>
	<!-- view job detail` -->
	<div class="job__detail card-space">
		<div class="manage-gig-detail-pill">
			<!-- job detail header - info -->
			<div class="gig-detail-top">
				<div class="gdp-profile">
					<!-- company logo -->
					<div class="profile-img">
						<!-- @/assets/images/iconWomanDraw.png -->
						<img
							:src="applicationJobDetail.job && applicationJobDetail.job.company && applicationJobDetail.job.company.user && applicationJobDetail.job.company.user.file_path"
							class="img-fluid"
							alt=""
						/>
					</div>

					<!-- job detail - title, created date -->
					<div class="profile-name">
						<!-- job title -->
						<h5 class="title-lg">{{ applicationJobDetail.job && applicationJobDetail.job.job_title }}</h5>

						<!-- job created date -->
						<span>{{ dateNewFormat(applicationJobDetail.job && applicationJobDetail.job.created_at) }}</span>
					</div>
				</div>

				<!-- company detail -->
				<div class="gdp-information mt-lg-0 mt-3">
					<!-- company location -->
					<div class="info-box">
						<a class="info-box-left">
							<FontAwesomeIcon :icon="mapIcon" />
						</a>
						<div class="info-box-right">
							<a href="https://goo.gl/maps/scqr63duVQVXn2Tm7" class="d-block"
								>{{ applicationJobDetail.job && applicationJobDetail.job.countryReference && applicationJobDetail.job.countryReference.country_name }},
								{{ applicationJobDetail.job && applicationJobDetail.job.cityReference && applicationJobDetail.job.cityReference.city_name }}</a
							>
							<span class="text-small">{{ t('fieldList.location') }}</span>
						</div>
					</div>

					<!-- no of employer -->
					<div class="info-box">
						<a class="info-box-left">
							<FontAwesomeIcon :icon="userIcon" />
						</a>
						<div class="info-box-right">
							<p class="d-block">{{ applicationJobDetail.job && applicationJobDetail.job.company && applicationJobDetail.job.company.no_of_employees }}</p>
							<span class="text-small">{{ t('job.employee') }}</span>
						</div>
					</div>
				</div>
			</div>

			<!-- job detail -->
			<div class="gig-detail row">
				<div class="col-xl-5 p-0">
					<div class="detail-left">
						<div class="detail-title">
							<h5 class="title-lg">{{ t('job.gigDetails') }}</h5>
						</div>
						<div class="detail-list">
							<ul>
								<!-- job industry -->
								<li>
									<span class="font-dark">{{ t('fieldList.industry') }}</span>
									<span class="text-sm">{{
										applicationJobDetail.job && applicationJobDetail.job.industryReference && applicationJobDetail.job.industryReference.industry_name
									}}</span>
								</li>

								<!-- total vacancy -->
								<li>
									<span class="font-dark">{{ t('job.totalPosition') }}</span>
									<span class="text-sm">{{ applicationJobDetail.job && applicationJobDetail.job.vacancies }}</span>
								</li>

								<!-- job type -->
								<li>
									<span class="font-dark">{{ t('fieldList.gigType') }}</span>
									<span class="text-sm">{{ applicationJobDetail.job && applicationJobDetail.job.job_mode }}</span>
								</li>

								<!-- salary -->
								<li>
									<span class="font-dark">{{ t('job.salaryType') }}</span>
									<span class="text-sm">{{ applicationJobDetail.job && applicationJobDetail.job.salary_offer }}</span>
								</li>

								<!-- job education -->
								<li>
									<span class="font-dark">{{ t('job.minimumEducation') }}</span>
									<span class="text-sm">{{
										(applicationJobDetail.job && applicationJobDetail.job.qualification && applicationJobDetail.job.qualification.qualification) || '-'
									}}</span>
								</li>

								<!-- job experience -->
								<li>
									<span class="font-dark">{{ t('job.minimumExperience') }}</span>
									<span class="text-sm">{{ (applicationJobDetail.job && applicationJobDetail.job.experience) || '-' }}</span>
								</li>

								<!-- apply by -->
								<li>
									<span class="font-dark">{{ t('job.applyBy') }}</span>
									<span class="text-sm">{{ dateNewFormat(applicationJobDetail.job && applicationJobDetail.job.apply_before) || '-' }}</span>
								</li>

								<!-- gig position date -->
								<!-- <li>
									<span class="font-dark">Application Statua</span>
									<span>{{applicationJobDetail.status || '-'}}</span>
								</li> -->
							</ul>
						</div>
					</div>
				</div>

				<div class="col-xl-7 p-0">
					<div class="detail-right">
						<!-- map - location - job -->
						<!-- <div class="detail-map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.434214812814!2d24.41384860891892!3d60.12395467171614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468d8c199ae6aa91%3A0x400b551554bb1e0!2sKirkkonummi%2C%20Finland!5e0!3m2!1sen!2sin!4v1616584855389!5m2!1sen!2sin"
								height="100%"
								width="100%"
								style="border: 0"
								allowfullscreen=""
								loading="lazy"
							></iframe>
						</div> -->

						<div class="cards-section">
							<GMapMap
								:center="{
									lat: applicationJobDetail.job && applicationJobDetail.job.lat,
									lng: applicationJobDetail.job && applicationJobDetail.job.lng,
								}"
								:zoom="10"
								map-type-id="terrain"
								style="height: 200px"
								class="img-fluid w-100"
							>
								<GMapMarker
									:position="{
										lat: applicationJobDetail.job && applicationJobDetail.job.lat,
										lng: applicationJobDetail.job && applicationJobDetail.job.lng,
									}"
									:clickable="true"
									:draggable="true"
								/>
							</GMapMap>
						</div>

						<!-- job - skill required -->
						<div class="detail-skill mt-3">
							<div class="skill-title">
								<h5 class="title-lg">{{ t('job.skillRequired') }}</h5>
							</div>
							<div class="skill-box">
								<span v-for="(row, index) in applicationJobDetail.job && applicationJobDetail.job.skills" :key="index" class="job_skill d-inline-flex mb-2">
									<span class="inner-skill">
										{{ (row.reference && row.reference.skill) || '-' }}
									</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- job description -->
			<div class="gig-description">
				<div class="desc-title">
					<h5 class="title-lg">{{ t('job.gigDescription') }}</h5>
				</div>
				<div class="desc-text">
					<p>
						{{ (applicationJobDetail.job && applicationJobDetail.job.job_description) || '-' }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { onMounted } from '@vue/runtime-core';
import { dateFormat, currencyConverture, dateNewFormat } from '@/utils/mixins';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faChevronDown, faChevronUp, faEdit, faInfo, faLongArrowAltLeft, faLongArrowAltRight, faEye } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from 'vue-router';
// import { icon } from '@fortawesome/fontawesome-svg-core';
import { faMap, faUser } from '@fortawesome/free-solid-svg-icons';
// import moment from 'moment';
export default {
	name: 'JobDetail',
	components: {
		FontAwesomeIcon,
	},
	setup() {
		// i18n instance
		const { t } = useI18n({ useScope: 'global' });
		document.title = 'View Applications - Way2Work';
		//ref
		// gloal store
		const store = useStore();
		// global route
		const route = useRoute();

		// icon
		const mapIcon = faMap;
		const userIcon = faUser;

		// icons

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			store.dispatch('job/viewApplicationJobDetails', route.params.id);
			// fetchSeekerInvoiceDetail();
		});

		// const fetchSeekerInvoiceDetail = () => {
		// 	seekerInvoiceDetail.value = store.state.invoice.invoiceSeekerDetail;
		// };

		/**
		 * computed Properties
		 * *******************************************************************
		 */

		// const seekerInvoiceDetail = computed(()=>store.state.invoice.invoiceSeekerDetail)
		const applicationJobDetail = computed(() => store.state.job.getJobApplicationViewDetails);
		// view document
		// const viewSeekerDocument = link => {
		// 	window.open(link);
		// };

		/**
		 * Watch
		 * *******************************************************************
		 */

		/**
		 * Methods
		 * *******************************************************************
		 */

		// table open

		return {
			//ref
			dateFormat,
			currencyConverture,
			dateNewFormat,

			// icon
			mapIcon,
			userIcon,

			//computed
			applicationJobDetail,

			// icons/

			// methods
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.job__detail {
	.manage-gig-detail-pill {
		.gig-detail-top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			@media (max-width: 576px) {
				display: block;
			}

			.gdp-profile {
				display: flex;
				align-items: center;

				.profile-img {
					width: 100px;
					height: 100px;
					min-width: 100px;
					border-radius: 100%;
					overflow: hidden;
					margin-right: 20px;

					img {
						width: 100px;
						height: 100px;
						object-fit: cover;
					}
				}

				.profile-name {
					span {
						margin-top: 10px;
						display: inline-block;
						color: $colorGray;
					}
				}
			}

			.gdp-information {
				display: flex;
				align-items: center;

				.info-box {
					display: flex;
					align-items: center;
					margin-right: 20px;

					.info-box-left {
						width: 40px;
						height: 40px;
						min-width: 40px;
						line-height: 40px;
						text-align: center;
						background-color: $colorExLightGray;
						border-radius: 10px;
						margin-right: 15px;

						svg {
							color: $colorLightGray;
						}
					}

					.info-box-right {
						a,
						p {
							font-weight: 500;
						}
					}
				}
			}
		}

		.gig-detail {
			// background-color: #fff;
			// padding: 20px;
			// border-radius: 20px;
			// box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
			margin: 30px 0px;
			justify-content: space-between;

			.detail-left {
				.detail-title {
					margin-bottom: 20px;

					@media (max-width: 576px) {
						margin-bottom: 10px;
					}
				}
				.detail-list {
					margin-top: 30px;

					@media (max-width: 576px) {
						margin-top: 20px;
					}

					ul {
						li {
							display: flex;
							padding: 5px 0px;

							span {
								&.font-dark {
									font-weight: 600;
									min-width: 230px;
									@media (max-width: 576px) {
										min-width: 180px;
										font-size: 14px;
									}
								}
							}
						}
						.text-sm {
							@media (max-width: 576px) {
								font-size: 14px;
							}
						}
					}
				}
			}

			.detail-right {
				.detail-map {
					height: 200px;
					width: auto;
					overflow: hidden;
					border-radius: 20px;
				}

				.detail-skill {
					// margin-top: 30px;

					.skill-title {
						margin-bottom: 20px;
					}

					.skill-box {
						padding: 10px;
						background-color: $bg-color;
						border: 2px dashed $colorExLightGray;
						border-radius: 10px;
						display: inline-block;
						width: 100%;

						.inner-skill {
							padding: 10px;
							background-color: $coloRed;
							color: #fff;
							display: inline-block;
							border-radius: 10px;
							font-size: 14px;
							margin-right: 8px;
						}
					}
				}
			}
		}

		.gig-description {
			// background-color: #fff;
			// padding: 20px;
			border-radius: 20px;
			// box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

			.desc-title {
				margin-bottom: 20px;
			}

			.desc-text {
				p {
					color: $colorGray;
					margin-bottom: 10px;
					display: block;
				}
			}
		}
	}
}
</style>

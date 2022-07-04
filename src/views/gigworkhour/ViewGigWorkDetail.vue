<template>
	<!-- view job detail` -->
	<div class="job__detail">
		<div class="manage-gig-detail-pill">
			<!-- job detail header - info -->
			<div class="gig-detail-top">
				<div class="gdp-profile">
					<div class="profile-name">
						<!-- job title -->
						<h5 class="title-lg">{{ t('viewGigWork.gig_work_hour_detail') }}</h5>
					</div>
				</div>
			</div>

			<!-- job detail -->
			<div class="gig-detail row">
				<div class="detail-left col-xl-8">
					<!-- <div class="detail-title">
						<h5 class="title-lg">Gig Work Details</h5>
					</div> -->
					<div class="detail-list">
						<ul>
							<!-- job industry -->
							<li>
								<span class="font-dark">{{ t('common.createdOn') }}</span>
								<span>{{ dateFormat(gigWorkDetail?.created_at) || '-' }}</span>
							</li>

							<!-- total vacancy -->
							<li>
								<span class="font-dark">{{ t('projectMarketPage.contractType') }}</span>
								<span>{{ gigWorkDetail?.contract_type || '-' }}</span>
							</li>

							<!-- job type -->
							<li>
								<span class="font-dark">{{ t('fieldList.tripStart') }}</span>
								<span>{{ gigWorkDetail?.trip_start || '-' }}</span>
							</li>

							<!-- salary -->
							<li>
								<span class="font-dark">{{ t('fieldList.tripEnd') }}</span>
								<span>{{ gigWorkDetail?.trip_end || '-' }}</span>
							</li>

							<!-- job location -->
							<li>
								<span class="font-dark">{{ t('fieldList.tripAddress') }}</span>
								<span>{{ gigWorkDetail?.trip_address || '-' }}</span>
							</li>

							<!-- job education -->
							<li>
								<span class="font-dark">{{ t('common.km') }}</span>
								<span>{{ gigWorkDetail?.distance || '-' }}</span>
							</li>

							<!-- job experience -->
							<li>
								<span class="font-dark">{{ t('fieldList.tripTime') }}</span>
								<span>{{ gigWorkDetail?.trip_time || '-' }}</span>
							</li>

							<!-- apply by -->
							<li>
								<span class="font-dark">{{ t('fieldList.workedHours') }}</span>
								<span>{{ gigWorkDetail?.total_work || '-' }}</span>
							</li>

							<!-- gig position date -->
							<li>
								<span class="font-dark">{{ t('fieldList.otherCompensation') }}</span>
								<span>{{ gigWorkDetail?.other_compensation || '-' }}</span>
							</li>

							<li>
								<span class="font-dark">{{ t('fieldList.extraInformation') }}</span>
								<span>{{ gigWorkDetail?.work_description || '-' }}</span>
							</li>
						</ul>
					</div>
				</div>

				<!-- <div class="detail-right col-xl-6">
					
					<div class="detail-map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.434214812814!2d24.41384860891892!3d60.12395467171614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468d8c199ae6aa91%3A0x400b551554bb1e0!2sKirkkonummi%2C%20Finland!5e0!3m2!1sen!2sin!4v1616584855389!5m2!1sen!2sin"
							height="100%"
							width="100%"
							style="border: 0"
							allowfullscreen=""
							loading="lazy"
						></iframe>
					</div>

					
					<div class="detail-skill">
						<div class="skill-title">
							<h5 class="title-lg">Skill Required</h5>
						</div>
						<div class="skill-box">
							<span class="inner-skill">php</span>
						</div>
					</div>
				</div> -->
			</div>

			<!-- job description -->
			<!-- <div class="gig-description">
				<div class="desc-title">
					<h5 class="title-lg">Gig Description</h5>
				</div>
				<div class="desc-text">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Sint pariatur labore illo deleniti ex delectus,
						corporis accusamus minima quod adipisci optio
						consequuntur.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Alias sint perferendis voluptate minus architecto, sed
						cupiditate, explicabo necessitatibus laudantium ducimus
						quis ullam odio quia quasi assumenda. Sit soluta hic
						possimus.libero aperiam suscipit ducimus aliquam ut. Et,
						dolor?
					</p>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { dateFormat } from '@/utils/mixins';
import { useI18n } from 'vue-i18n';
export default {
	name: 'GigWorkDetail',
	setup() {
		//ref
		const gigWorkDetail = ref(null);

		// gloal store
		const store = useStore();
		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			fetchGigWorkWorkDetail();
		});

		const fetchGigWorkWorkDetail = () => {
			gigWorkDetail.value = store.state.gigworkhour.gigWorkDetail;
		};
		// i18n instance
		const { t } = useI18n({
			useScope: 'global',
		});

		return {
			//ref
			gigWorkDetail,
			dateFormat,
			t,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.job__detail {
	width: 100%;
	display: block;
	background-color: #fff;
	border-radius: 20px;
	padding: 30px 15px;

	.manage-gig-detail-pill {
		.gig-detail-top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.gdp-profile {
				display: flex;
				align-items: center;

				.profile-img {
					width: 100px;
					height: 100px;
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
			background-color: #fff;
			padding: 20px;
			border-radius: 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
			margin: 30px 0px;
			justify-content: space-between;

			.detail-left {
				width: 100%;

				.detail-list {
					margin-top: 30px;

					ul {
						li {
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 5px 0px;

							span {
								&.font-dark {
									font-weight: 600;
								}
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
					margin-top: 30px;

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
			background-color: #fff;
			padding: 20px;
			border-radius: 20px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

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

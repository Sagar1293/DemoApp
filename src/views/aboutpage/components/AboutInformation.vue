<template>
	<section class="about-us d-inline-block position-relative w-100 p-0">
		<div class="container">
			<div class="row about-us-row float-top align-items-center">
				<div class="col-md-6">
					<div class="about-us-left">
						<h5 class="title-lg">
							{{ t('common.aboutUs') }}
						</h5>
						<div class="about-description">
							<p>
								{{ t('aboutpage.description') }}
							</p>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="about-img">
						<img
							src="@/assets/images/aboutUsImage-v1.png"
							class="img-fluid"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
	name: 'AboutInformation',

	setup() {
		const { t } = useI18n({ useScope: 'global' });

		return { t };
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.about-us {
	& .float-top {
		top: -100px;
	}

	.about-us-row {
		background-color: $coloRed;
		padding: 20px 10px;
		border-radius: 30px;
		position: relative;
		&.about-1 {
			background-color: #fff;
			.about-us-left {
				color: #000;
			}
		}
		.about-us-left {
			color: #fff;
			.about-description {
				margin-top: 40px;
				p {
					line-height: 40px;
					font-size: 18px;
				}
			}
		}
	}
}

@media (max-width: 992px) {
	.about-us {
		.about-us-row {
			margin: 0px 5px;
		}
	}
}

@media (max-width: 768px) {
	.about-us {
		.about-us-row {
			.about-us-left {
				text-align: center;
				.about-description {
					margin-top: 20px;
					margin-bottom: 20px;
					text-align: center;

					p {
						font-size: 16px;
						line-height: 30px;
					}
				}
			}
		}
	}
}
</style>
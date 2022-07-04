<template>
	<!-- contact us -->
	<section class="contact-info d-inline-block position-relative w-100 p-0">
		<div class="container">
			<div class="row contact-info-row float-top">
				<!-- contact details -->
				<div class="col-md-5">
					<div class="contact-info-left">
						<ul class="cil-list">
							<!-- address -->
							<li>
								<p>{{ t('fieldList.address') }}:</p>
								<a href="https://goo.gl/maps/rE9g8EtHwkazL1rf9">
									<span>
										<FontAwesomeIcon :icon="locationIcon" />
									</span>
									Kauppalanties 15, 00320, Helskini
								</a>
							</li>
							<!-- phone number -->
							<li>
								<p>{{ t('fieldList.phoneNumber') }}:</p>
								<a href="tel:+358 401591447">
									<span>
										<FontAwesomeIcon :icon="phoneIcon" />
									</span>
									+358 401591447
								</a>
							</li>
							<!-- email -->
							<li>
								<p>{{ t('fieldList.emailAddress') }}:</p>
								<a href="">
									<span>
										<FontAwesomeIcon :icon="envelopIcon" />
									</span>
									info@way2work.fi
								</a>
							</li>
							<!-- time -->
							<li>
								<p>{{ t('common.time') }}:</p>
								<a href="https://goo.gl/maps/rE9g8EtHwkazL1rf9">
									<span>
										<FontAwesomeIcon :icon="clockIcon" />
									</span>
									{{ t('common.mon') }}
									{{ t('common.to') }}
									{{ t('common.fri') }}
									09:00 am to 16:00 pm
								</a>
							</li>
						</ul>
					</div>
				</div>

				<!-- contact form -->
				<div class="col-md-7">
					<div class="contact-info-right">
						<form class="theme-input">
							<!-- title -->
							<div class="form-group col-12 p-0">
								<h5 class="title-lg">{{ t('contactpage.get_in_touch_fast') }}</h5>
							</div>
							<div class="form-row">
								<!-- email -->
								<div class="form-group col-xl-6 col-lg-6">
									<label> {{ t('fieldList.email') }}<span>*</span> </label>
									<input type="email" class="form-control" :placeholder="t('common.typeHere')" />
								</div>
								<!-- password -->
								<div class="form-group col-xl-6 col-lg-6">
									<label> {{ t('fieldList.password') }}<span>*</span> </label>
									<input type="password" class="form-control" :placeholder="t('common.typeHere')" />
								</div>
								<!-- full name -->
								<div class="form-group col-12">
									<label for="inputEmail4"> {{ t('fieldList.fullName') }}<span>*</span> </label>
									<input type="text" class="form-control" :placeholder="t('common.typeHere')" />
								</div>
								<!-- address -->
								<div class="form-group col-12">
									<label>
										{{ t('fieldList.address') }}
										<span>*</span>
									</label>
									<textarea name="" class="form-control" rows="5" :placeholder="t('common.typeHere')"></textarea>
								</div>
							</div>
							<!-- submit btn -->
							<div class="form-btn">
								<button type="submit" class="btn-common btn-red mt-2">
									{{ t('common.submitNow') }}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUsers, faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'Banner',

	// components
	components: {
		FontAwesomeIcon,
	},

	setup() {
		const { t } = useI18n({ useScope: 'global' });
		const usersIcon = faUsers;
		const locationIcon = faMapMarkerAlt;
		const phoneIcon = faPhoneAlt;
		const envelopIcon = faEnvelope;
		const clockIcon = faClock;

		return {
			t,
			usersIcon,
			locationIcon,
			phoneIcon,
			envelopIcon,
			clockIcon,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.contact-info {
	& .float-top {
		top: -100px;
	}

	.contact-info-row {
		border-radius: 20px;
		padding: 25px 10px;
		background-color: #fff;
		position: relative;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

		.contact-info-left {
			padding: 30px;
			background-color: $colorGray;
			border-radius: 20px;
			.cil-list {
				li {
					color: #fff;
					padding: 20px 0px;
					p {
						font-size: 18px;
						margin-bottom: 10px;
						text-transform: uppercase;
					}
					a {
						color: #fff;
						display: flex;
						align-items: center;

						svg {
							font-size: 24px;
							margin-right: 10px;
							display: block;
						}
					}
				}
			}
		}
		.contact-info-right {
			padding-top: 10px;
			.form-btn {
				text-align: right;
			}
		}
	}
}

@media (max-width: 992px) {
	.contact-info {
		.contact-info-row {
			margin: 0px 5px;
			.contact-info-left {
				margin-bottom: 20px;
				.cil-list {
					text-align: left;
				}
			}
			.contact-info-right {
				.title-lg {
					text-align: center;
				}
				.form-btn {
					text-align: center;
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.contact-info {
		.contact-info-row {
			padding: 15px 0px 15px 0px;
			.contact-info-left {
				padding: 15px;
				.cil-list {
					li {
						padding: 15px 0px;
						p {
							font-size: 16px;
							margin-bottom: 5px;
						}
						a {
							font-size: 14px;

							svg {
								font-size: 20px;
							}
						}
					}
				}
			}
		}
	}
}
</style>

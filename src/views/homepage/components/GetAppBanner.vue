<template>
	<section class="ss-banner position-relative d-inline-block w-100">
		<div class="container">
			<div class="row justify-content-end">
				<div class="col-lg-5 col-md-8">
					<div class="sec-header">
						<span>{{ t('homepage.getApp.stepForward') }}</span>
						<h5 class="sec-title">
							{{ t('homepage.getApp.title') }}
						</h5>
						<p>
							{{ t('homepage.getApp.description') }}
						</p>
					</div>
					<div class="ss-banner-btns d-flex align-items-center">
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
			</div>
		</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
	name: 'GetAppBanner',
	setup() {
		const { t } = useI18n({ useScope: 'global' });

		return { t };
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.ss-banner {
	background-image: url('~@/assets/images/appBgImage.png');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	.sec-header {
		color: #fff;
	}

	.ss-banner-btns {
		a {
			display: inline-block;
			margin-bottom: 10px;
		}
	}
}
</style>
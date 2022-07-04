<template>
	<section class="banner d-inline-block position-relative w-100">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-3">
					<div class="go__back " v-if="route.meta.breadcrumb.length">
						<router-link
							:to="
								route.meta.breadcrumb[
									route.meta.breadcrumb.length - 2
								].url
							"
						>
							<a class="banner-back d-inline-block">
								<div class="d-flex align-items-center">
									<div
										class="back-icon d-flex align-items-center justify-content-center text-light"
									>
										<FontAwesomeIcon
											:icon="leftArrowIcon"
										/>
									</div>
									<div class="back-text">
										<span class="ml-2 mr-5">
											back
										</span>
									</div>
								</div>
							</a>
						</router-link>
					</div>
				</div>
				<div class="col-6 text-center d-flex justify-content-center">
					<div>
						<div class="banner-icon">
							<FontAwesomeIcon :icon="fileIcon" />
						</div>

						<div class="sec-header">
							<h5 class="sec-title">Resume List</h5>
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
import { faArrowLeft, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from 'vue-router';

export default {
	name: 'Banner',

	// components
	components: {
		FontAwesomeIcon,
	},

	setup() {
		// ref
		const { t } = useI18n({ useScope: 'global' });

		// icon
		const fileIcon = faFileAlt;
		const leftArrowIcon = faArrowLeft;
		//  global route
		const route = useRoute();

		return {
			t,
			fileIcon,
			leftArrowIcon,
			route
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.banner {
	background-color: #f5f5f5;
	padding-top: 130px;

	& .banner-icon svg {
		font-size: 50px;
		color: #ff4b57;
	}
}

@media (max-width: 992px) {
	.banner {
		padding-top: 150px;
	}
}

@media (max-width: 768px) {
	.banner {
		padding-top: 120px;
	}
}

@media (max-width: 576px) {
	.banner {
		padding-top: 100px;
	}
}
.banner-back {
	background-color: #fff;
	border-radius: 50px;
	box-shadow: 0px 0px 3px #ccc;
}
.back-icon {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #ff4b57;
}
</style>

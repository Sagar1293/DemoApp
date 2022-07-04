<template>
	<section class="banner d-inline-block position-relative w-100 float-banner">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-12 text-center">
					<div class="banner-icon">
						<FontAwesomeIcon :icon="usersIcon" />
					</div>
					<div class="sec-header">
						<h5 class="sec-title">
							{{ t('common.aboutUs') }}
						</h5>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'Banner',

	// components
	components: {
		FontAwesomeIcon,
	},

	setup() {
		const { t } = useI18n({ useScope: 'global' });
		const usersIcon = faUsers;

		return { t, usersIcon };
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.banner {
	background-color: #f5f5f5;
	padding-top: 130px;

	&.float-banner {
		padding-bottom: 100px;

		& .banner-icon svg {
			font-size: 50px;
			color: #ff4b57;
		}
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
</style>
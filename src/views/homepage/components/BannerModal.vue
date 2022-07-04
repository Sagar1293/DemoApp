<template>
	<vue-final-modal
		v-model="modalShow"
		classes="modal modal-container"
		content-class="modal-content"
		:click-to-close="true"
		:esc-to-close="true"
	>
		<div class="video-section">
			<video controls>
				<source
					src="@/assets/video/w2wcommercial.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	</vue-final-modal>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
	name: 'BannerModal',

	props: {
		// modal status
		isModalShow: Object,
	},
	setup(props) {
		/**
		 * computed props
		 * *******************************************************************
		 */

		// toggle login modal
		const modalShow = ref(props.isModalShow);

		return {
			modalShow,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/modal.scss';
video {
	width: 100%;
	min-height: 100%;
	height: 100%;
	@media (max-width: 1024px) {
		min-width: 400px;
		width: 100%;
		min-height: 100%;
		height: 100%;
	}
}
.modal-content {
	@media (max-width: 1440px) {
		min-width: 75%;
		min-height: 100%;
		height: 100%;
	}
	@media (max-width: 1024px) {
		min-width: 75%;
		min-height: 100%;
		height: 100%;
	}
}
</style>

<template>
	<section>
		<div class="container">
			<div class="market-section">
				<!-- market-Left -->
				<div class="market-left">
					<market-sidebar />
				</div>
				<div class="market-right">
					<market-content />
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import MarketSidebar from '@/views/projectMarket/components/edit/MarketSidebar.vue';
import MarketContent from '@/views/projectMarket/components/edit/MarketContent.vue';

export default {
	name: 'Market',
	components: {
		MarketSidebar,
		MarketContent,
	},
};
</script>

<style lang="scss" scoped>
.market-section {
	display: flex;
	@media (max-width: 1024px) {
		flex-wrap: wrap;
	}
	.market-right {
		margin-left: 1.5rem;
		width: 100%;
	}
	.market-left{
		// z-index: -1;
	}
}
</style>
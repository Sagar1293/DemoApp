 <template>
	<div class="market-left-section">
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Manager</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Kuopio</p>
				</div>
				<p class="cards-text">
					Laminate installation work available for 7 weeks. For more
					information call +358407622562.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Vesieristystyöt</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Helsinki</p>
				</div>
				<p class="cards-text">Vesieristystyöt Töölönkadulla.</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Laatoitustyöt</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Helsinki</p>
				</div>
				<p class="cards-text">
					Laminate installation work available for 7 weeks. For more
					information call +358407622562.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Kirvesmies</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Uusimaa</p>
				</div>
				<p class="cards-text">
					Yleistyöt isolla työmaalla: etuputsi, suojaus, kanto,
					piikkaus, listat, ovet, kotelot, ym. Työkalut saa
					toimeksiantajalta.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Laatoitustyöt</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Helsinki</p>
				</div>
				<p class="cards-text">
					Laminate installation work available for 7 weeks. For more
					information call +358407622562.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Kirvesmies</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Uusimaa</p>
				</div>
				<p class="cards-text">
					Yleistyöt isolla työmaalla: etuputsi, suojaus, kanto,
					piikkaus, listat, ovet, kotelot, ym. Työkalut saa
					toimeksiantajalta.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Laatoitustyöt</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Helsinki</p>
				</div>
				<p class="cards-text">
					Laminate installation work available for 7 weeks. For more
					information call +358407622562.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Kirvesmies</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Uusimaa</p>
				</div>
				<p class="cards-text">
					Yleistyöt isolla työmaalla: etuputsi, suojaus, kanto,
					piikkaus, listat, ovet, kotelot, ym. Työkalut saa
					toimeksiantajalta.
				</p>
			</div>
		</div>
		<div class="card">
			<div class="logo-img">
				<img
					src="@/assets/images/icon_png.png"
					alt="img"
					class="img-fluid"
				/>
			</div>
			<div class="card-content">
				<h5 class="card-titles">Laatoitustyöt</h5>
				<div class="location">
					<FontAwesomeIcon :icon="MapMarkerIcon" class="icon" />
					<p class="location-name">Helsinki</p>
				</div>
				<p class="cards-text">
					Laminate installation work available for 7 weeks. For more
					information call +358407622562.
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
export default {
	name: 'Market Sidebar',
	components: {
		FontAwesomeIcon,
	},
	setup() {
		const MapMarkerIcon = faMapMarkerAlt;
		return {
			MapMarkerIcon,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.market-left-section {
	max-width: 32rem;
	width: 100%;
	.card {
		padding: 1rem;
		border-radius: 10px;
		display: flex;
		margin-bottom: 1.5rem;
		flex-direction: row;
		border: 1px solid #f8f1f1;
		box-shadow: 0 4px 60px 0 #f8f1f1;
		.logo-img {
			max-width: 50px;
			width: 100%;
			height: 50px;
			padding: 8px;
			margin-right: 1rem;
			border-radius: 50%;
			background-color: #fff6f6;
		}
		.card-content {
			.card-titles {
				font-weight: 700;
				margin-bottom: 0.1rem;
			}
			.location {
				display: flex;
				align-items: center;
				font-size: 14px;
				font-weight: 600;
				margin-bottom: 0.5rem;
				.icon {
					margin-right: 5px;
					color: $coloRed;
				}
			}
			.cards-text {
				font-size: 14px;
				color: #909aa3;
			}
		}
		&:active {
			background-color: $coloRed;
			position: relative;
			.card-content {
				color: #fff;
				.location {
					.icon {
						color: #fff;
					}
				}
				.cards-text {
					color: #fff;
					&::after {
						content: '';
						position: absolute;
						width: 25px;
						height: 25px;
						top: 50%;
						right: 0;
						clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
						transform: translate(50%, -50%);
						background-color: $coloRed;
					}
				}
			}
		}
	}
}
</style>
<template>
	<div class="market-right-section">
		<div class="apply-for-this-section">
			<div class="apply-for-this">
				<div class="logo-img">
					<img
						src="@/assets/images/icon_png.png"
						alt="img"
						class="img-fluid icon-img"
					/>
				</div>
				<div class="card-content">
					<div class="card-text-btn">
						<div class="card-texts">
							<h2 class="card-titles">Vesieristystyöt</h2>
							<div class="location">
								<FontAwesomeIcon
									:icon="MapMarkerIcon"
									class="icon"
								/>
								<p class="location-name">Kuopio (Finland)</p>
							</div>
							<p class="location-time">
								Posted on Sep 12, 2021 <span>&bull;</span> Full
								Time
							</p>
						</div>
						<button class="btn-common btn-red">
							Apply for this Gig
						</button>
					</div>
				</div>
			</div>
			<div class="labels">
				<div class="labels-name"><p>Team Spirit</p></div>
				<div class="labels-name"><p>Strong communication</p></div>
				<div class="labels-name"><p>Good time-management</p></div>
				<div class="labels-name"><p>Visual communication</p></div>
			</div>
		</div>
		<div class="cards-section">
			<div class="about-this-post-section">
				<h2 class="card-titles">About this gigs post</h2>
				<div class="cards-details">
					<div class="row">
						<div class="col-sm-6">
							<div class="text-cards">
								<p class="text-head">Industry of the Gogss</p>
								<p class="card-texts">
									Logistics & Warehousing
								</p>
							</div>
							<div class="text-cards">
								<p class="text-head">No. of vaccancies</p>
								<p class="card-texts">01</p>
							</div>
							<div class="text-cards">
								<p class="text-head">Duration:</p>
								<p class="card-texts">One Month</p>
							</div>
						</div>
						<div class="col-sm-6">
							<div class="text-cards">
								<p class="text-head">Apply Before</p>
								<p class="card-texts">02 Sep 2020</p>
							</div>
							<div class="text-cards">
								<p class="text-head">Contract Type</p>
								<p class="card-texts">Hours</p>
							</div>
							<div class="text-cards">
								<p class="text-head">Address</p>
								<p class="card-texts">
									Matkustajasatama, 70100 Kuopio, Finland
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="cards-section">
			<div class="description-section">
				<h2 class="card-titles">Description:</h2>
				<div class="cards-details">
					<p class="cards-text">
						We are currently looking for, user centered UI/UX
						Designer to join a collaborative and innovative team to
						create visually delightful and easy-to-use digital
						products in a fast paced environment. To be successful
						in this role, you should have experience with design
						software and wireframe tools.
					</p>
				</div>
			</div>
		</div>
		<div class="cards-section">
			<div class="the-company-section">
				<h2 class="card-titles">About the company:</h2>
				<div class="cards-details">
					<div class="user-img">
						<img
							src="@/assets/images/user-img.png"
							alt="img"
							class="img-fluid w-100 h-100"
						/>
					</div>
					<p class="cards-text">
						There are many variations of passages of Lorem Ipsum
						available, but the majority have suffered alteration in
						some form, by injected humour, or randomised words which
						don't look even slightly believable.
					</p>
				</div>
			</div>
		</div>
		<div class="cards-section">
			<img
				src="@/assets/images/map.png"
				alt="img"
				class="img-fluid w-100 h-100"
			/>
		</div>
	</div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
export default {
	name: 'Market Content',
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

.market-right-section {
	width: 100%;
	.apply-for-this-section {
		padding: 1.5rem;
		border-radius: 10px;
		margin-bottom: 1.5rem;
		background-color: #fefafa;
		border: 1px solid #f8f1f1;
		box-shadow: 0 4px 60px 0 #f8f1f1;
		.apply-for-this {
			display: flex;
			align-items: center;
			.logo-img {
				width: 100%;
				height: 85px;
				padding: 1rem;
				max-width: 85px;
				margin-right: 1rem;
				border-radius: 50%;
				background-color: #fff;
				box-shadow: 0 4px 80px 0 #63000730;
				.icon-img {
					width: 100%;
				}
			}
			.card-content {
				width: 100%;
				.card-text-btn {
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					align-items: center;
					.card-texts {
						.card-titles {
							font-weight: 700;
							letter-spacing: -1px;
							margin-bottom: 0.2rem;
							text-transform: uppercase;
						}
						.location {
							display: flex;
							align-items: center;
							margin-bottom: 0.2rem;
							.icon {
								margin-right: 5px;
								color: $coloRed;
							}
							.location-name {
								font-size: 16px;
								letter-spacing: -1px;
								font-weight: 600;
							}
						}
						.location-time {
							font-size: 16px;
							font-weight: 600;
							color: #9fa1a6;
						}
					}
				}
			}
		}
		.labels {
			display: flex;
			flex-wrap: wrap;
			.labels-name {
				margin-top: 1rem;
				padding: 0.5rem 1rem;
				font-size: 16px;
				font-weight: 600;
				border-radius: 10rem;
				margin-right: 10px;
				border: 2px solid #fed6d8;
			}
		}
	}
	.cards-section {
		padding: 1.5rem;
		border-radius: 10px;
		margin-bottom: 1.5rem;
		border: 1px solid #f8f1f1;
		box-shadow: 0 4px 60px 0 #f8f1f1;
		.card-titles {
			font-size: 24px;
			font-weight: 700;
			color: #cfd2d4;
			margin-bottom: 1.5rem;
			letter-spacing: -1px;
			text-transform: uppercase;
		}
	}
	.about-this-post-section {
		.cards-details {
			.text-cards {
				margin-bottom: 1rem;
				.text-head {
					font-size: 16px;
					font-weight: 500;
					color: #878d92;
				}
				.card-texts {
					font-size: 20px;
					font-weight: 600;
					color: #465765;
				}
			}
		}
	}
	.description-section {
		.cards-text {
			font-size: 18px;
			color: #465765;
		}
	}
	.the-company-section {
		.cards-details {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			.user-img {
				max-width: 120px;
				width: 100%;
				height: 120px;
				border-radius: 50%;
				margin-right: 1rem;
			}
			.cards-text {
				font-size: 18px;
				color: #465765;
			}
		}
	}
}
@media (max-width: 1200px) {
	.market-right-section {
		.apply-for-this-section {
			.apply-for-this {
				.card-content {
					.card-text-btn {
						.btn-red {
							margin-top: 1rem;
						}
					}
				}
			}
		}
	}
}
@media (max-width: 425px) {
	.market-right-section {
		.apply-for-this-section {
			padding: 1rem;
			margin-bottom: 1rem;
			.apply-for-this {
				flex-wrap: wrap;
				.logo-img {
					height: 80px;
					// padding: 0.5rem;
					max-width: 80px;
					margin-bottom: 1rem;
				}
				.card-content {
					.card-text-btn {
						.card-texts {
							.card-titles {
								font-size: 24px;
							}
						}
					}
				}
			}
			.labels {
				.labels-name {
					margin-top: 0.7rem;
					padding: 5px 22px;
				}
			}
		}
		.cards-section {
			padding: 1rem;
			margin-bottom: 1rem;
			.card-titles {
				font-size: 20px;
				margin-bottom: 0.7rem;
			}
		}
		.about-this-post-section {
			.cards-details {
				.text-cards {
					margin-bottom: 0.7rem;
					.text-head {
						font-size: 14px;
					}
					.card-texts {
						font-size: 16px;
					}
				}
			}
		}
		.description-section {
			.cards-text {
				font-size: 14px;
			}
		}
		.the-company-section {
			.cards-details {
				.user-img {
					max-width: 80px;
					width: 100%;
					height: 80px;
					border-radius: 50%;
					margin-right: 1rem;
				}
				.cards-text {
					font-size: 14px;
				}
			}
		}
	}
}
</style>
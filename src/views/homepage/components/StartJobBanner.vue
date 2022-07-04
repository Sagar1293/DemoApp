<template>
	<section class="how-it-works d-inline-block position-relative w-100">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-12 text-center">
					<div class="sec-header">
						<span>{{ t('homepage.howWork1.howItWork') }}</span>
						<h5 class="sec-title">
							{{ t('homepage.howWork1.title') }}
						</h5>
					</div>
				</div>
			</div>
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="how-it-works-info">
						<ul>
							<li class="how-it-works-row">
								<div class="how-it-works-number num1">
									<p>1</p>
								</div>
								<div class="dropdown">
									<button
										class="dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{{
											t(
												'homepage.howWork1.completeProfile',
											)
										}}
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton1"
									>
										<li>
											<p>
												Lorem ipsum, dolor sit amet
												consectetur adipisicing elit.
												Rerum eos odit nam ea illo
												nostrum officia ullam soluta
												perferendis suscipit. Quam, enim
												id laboriosam quo nam sit iusto
												praesentium amet!
											</p>
										</li>
									</ul>
								</div>
							</li>
							<li class="how-it-works-row">
								<div class="how-it-works-number num2">
									<p>2</p>
								</div>
								<div class="work-detail">
									<p class="work-btn">
										{{
											t('homepage.howWork1.seachVacancy')
										}}
									</p>
									<ul>
										<li>
											<p>
												Lorem ipsum, dolor sit amet
												consectetur adipisicing elit.
												Rerum eos odit nam ea illo
												nostrum officia ullam soluta
												perferendis suscipit.
											</p>
										</li>
									</ul>
								</div>
							</li>
							<li class="how-it-works-row">
								<div class="how-it-works-number num3">
									<p>3</p>
								</div>
								<div class="dropdown">
									<button
										class="dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{{ t('homepage.howWork1.applyJob') }}
									</button>
									<ul
										class="dropdown-menu"
										aria-labelledby="dropdownMenuButton1"
									>
										<li>
											<p>
												Lorem ipsum, dolor sit amet
												consectetur adipisicing elit.
												Rerum eos odit nam ea illo
												nostrum officia ullam soluta
												perferendis suscipit. Quam, enim
												id laboriosam quo nam sit iusto
												praesentium amet!
											</p>
										</li>
									</ul>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6">
					<div class="how-it-works-video">
						<img
							src="@/assets/images/video.png"
							class="img-fluid"
							alt=""
						/>
						<div class="video-icon">
							<a href="">
								<FontAwesomeIcon :icon="playIcon" />
							</a>
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
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default {
	name: 'StartJobBanner',

	components: {
		FontAwesomeIcon,
	},

	setup() {
		// icon
		const playIcon = faPlay;

		// i18n instance
		const { t } = useI18n({
			useScope: 'global',
		}); //  use i18n

		return { playIcon, t };
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

.how-it-works {
	.how-it-works-video {
		overflow: hidden;
		border-radius: 25px;
		position: relative;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.4);
			width: 100%;
			height: 100%;
			z-index: 0;
		}

		img {
			width: 650px;
			height: 400px;
			object-fit: cover;
		}

		.video-icon {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 200px;
			height: 200px;
			background-color: #fff;
			border-radius: 100%;
			z-index: 1;

			a {
				position: relative;
				text-align: center;
				width: 100%;
				height: 100%;
				display: block;
				z-index: 1;

				svg {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					font-size: 25px;
				}

				&::before {
					content: '';
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 130px;
					height: 130px;
					border-radius: 100%;
					box-sizing: border-box;
					border: 2px solid $coloRed;
					transition: $transition;
					animation: video-anim 2s infinite;
					z-index: -1;
				}

				@keyframes video-anim {
					0% {
						width: 100px;
						height: 100px;
					}

					100% {
						width: 130px;
						height: 130px;
					}
				}
			}
		}
	}

	.how-it-works-info {
		.how-it-works-row {
			display: flex;
			align-items: center;
			padding: 10px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
			border-radius: 25px;
			margin-bottom: 15px;

			.how-it-works-number {
				width: 70px;
				height: 70px;
				line-height: 70px;
				border-radius: 20px;
				text-align: center;
				background-color: #ffe8e8;
				color: #fff;
				margin-right: 20px;

				&.num2 {
					background-color: #ffb2b2;
				}

				&.num3 {
					background-color: $coloRed;
				}

				p {
					font-size: 20px;
					font-weight: 600;
				}
			}

			.work-detail {
				width: 80%;

				.work-btn {
					width: 100%;
					text-align: left;
					font-size: 18px;
					cursor: pointer;
					font-weight: 500;
					margin-bottom: 10px;
				}
			}

			ul {
				li {
					p {
						color: $colorLightGray;
					}
				}
			}

			.dropdown {
				width: 80%;
				cursor: pointer;

				.dropdown-menu {
					width: 100%;
				}

				.dropdown-toggle {
					width: 100%;
					text-align: left;
					font-size: 18px;
					cursor: pointer;
					font-weight: 500;
				}
			}
		}
	}
}

@media (max-width: 768px) {
	.how-it-works {
		.how-it-works-video {
			img {
				width: 100%;
				height: 350px;
			}

			.video-icon {
				width: 80px;
				height: 80px;

				a {
					&::before {
						width: 100px;
						height: 100px;
					}
				}
			}
			@keyframes video-anim {
				0% {
					width: 80px;
					height: 80px;
				}

				100% {
					width: 100px;
					height: 100px;
				}
			}
		}
	}
}

@media (max-width: 576px) {
	.how-it-works {
		.how-it-works-info {
			.how-it-works-row {
				.how-it-works-number {
					width: 50px;
					height: 50px;
					line-height: 50px;
					border-radius: 15px;
				}

				.dropdown {
					.dropdown-toggle {
						font-size: 16px;
					}
				}

				.work-detail {
					.work-btn {
						font-size: 16px;
						margin-bottom: 5px;
					}
				}

				ul {
					li {
						p {
							font-size: 14px;
						}
					}
				}
			}
		}

		.how-it-works-video {
			img {
				height: 250px;
			}
			.video-icon {
				width: 60px;
				height: 60px;

				a {
					&::before {
						width: 80px;
						height: 80px;
					}
					svg {
						font-size: 18px;
					}
				}
			}
			@keyframes video-anim {
				0% {
					width: 60px;
					height: 60px;
				}

				100% {
					width: 80px;
					height: 80px;
				}
			}
		}
	}
}
</style>

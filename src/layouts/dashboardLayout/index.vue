<template>
	<div>
		<!-- top navbar -->
		<top-navbar />

		<!-- banner -->
		<banner />
		<div>
			<section class="dashboard__layout position-relative w-100 p-0">
				<div class="sidebar-overlay" @click="hideSidebar"></div>
				<div class="container-xl">
					<div class="dashboard__layout_row">
						<div class="dash-nav-responsive dash-nav" id="i_am_sidebar" ref="sideBarRef" @mouseover="toggleDashboardSidebar">
							<!--  @mouseleave="toggleDashboardSidebarMouseleave" -->
							<!-- toggle btn -->
							<div class="dt-icons floating__btn">
								<button type="button" class="btn-navigate">
									<svg xmlns="http://www.w3.org/2000/svg" width="384.969" height="192.484" viewBox="0 0 384.969 192.484">
										<g id="menu" transform="translate(0 -96.243)">
											<g id="Menu_1_">
												<path id="Path_87" data-name="Path 87" d="M12.03,120.3H372.939a12.03,12.03,0,0,0,0-24.06H12.03a12.03,12.03,0,1,0,0,24.06Z" fill="#ff4b57" />
												<path id="Path_88" data-name="Path 88" d="M372.939,180.455H12.03a12.03,12.03,0,1,0,0,24.06H372.939a12.03,12.03,0,1,0,0-24.06Z" fill="#ff4b57" />
												<path id="Path_89" data-name="Path 89" d="M372.939,264.667H132.333a12.03,12.03,0,1,0,0,24.06H372.939a12.03,12.03,0,0,0,0-24.06Z" fill="#ff4b57" />
											</g>
										</g>
									</svg>
								</button>
							</div>
							<!-- sidebar -->
							<sidebar />
						</div>
						<div class="dash-right-tab col">
							<!-- router -->
							<router-view />
						</div>
					</div>
				</div>
			</section>
		</div>

		<!-- subscribe footer -->
		<footer-subscriber />

		<!-- footer -->
		<Footer />

		<!-- footer copyright -->
		<footer-copyright />

		<!-- MobileSplash -->
		<MobileSplash />
	</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TopNavbar from '@/layouts/homeLayout/components/TopNavbar.vue';
import Banner from '@/layouts/dashboardLayout/components/Banner.vue';
import Sidebar from '@/layouts/dashboardLayout/components/Sidebar.vue';
import FooterSubscriber from '@/layouts/homeLayout/components/FooterSubscriber.vue';
import Footer from '@/layouts/homeLayout/components/Footer.vue';
import FooterCopyright from '@/layouts/homeLayout/components/FooterCopyright.vue';
import MobileSplash from '@/layouts/homeLayout/components/MobileSplash.vue';
import { inActiveSession } from '@/mixins/session-expired';
export default {
	components: {
		TopNavbar,
		Banner,
		Sidebar,
		FooterSubscriber,
		Footer,
		FooterCopyright,
		MobileSplash,
	},
	mixins: [inActiveSession],

	setup() {
		const sideBarRef = ref(null);
		const screenwidth = ref(null);

		/**
		 * Mounted Properties
		 * *******************************************************************
		 */
		onMounted(() => {
			window.addEventListener('resize', () => {
				if (window.innerWidth < 1200) {
					sideBarRef.value.classList.add('dash-nav-responsive');
				} else {
					sideBarRef.value.classList.remove('dash-nav-responsive');
				}

				if (window.innerWidth < 1025) {
					sideBarRef.value.classList.add('hide-nav');
				} else {
					sideBarRef.value.classList.remove('hide-nav');
					document.querySelector('.sidebar-overlay').style.display = 'none';
				}
			});

			// screenwidth.value = window.innerWidth;

			if (window.innerWidth < 1200) {
				sideBarRef.value.classList.add('dash-nav-responsive');
			} else {
				sideBarRef.value.classList.remove('dash-nav-responsive');
			}

			if (window.innerWidth < 1025) {
				sideBarRef.value.classList.add('hide-nav');
			} else {
				sideBarRef.value.classList.remove('hide-nav');
				document.querySelector('.sidebar-overlay').style.display = 'none';
			}
		});

		/**
		 * Methods
		 * *******************************************************************
		 */

		const toggleDashboardSidebarMouseleave = () => {
			if (window.innerWidth < 1200) sideBarRef.value.classList.add('dash-nav-responsive');
		};

		const toggleDashboardSidebar = () => {
			if (window.innerWidth < 1200) sideBarRef.value.classList.remove('dash-nav-responsive');
		};

		const hideSidebar = () => {
			document.getElementById('i_am_sidebar').classList.add('hide-nav');
			document.getElementById('i_am_sidebar').classList.add('dash-nav-responsive');
			document.querySelector('.sidebar-overlay').style.display = 'none';
		};

		return {
			sideBarRef,
			screenwidth,
			toggleDashboardSidebar,
			toggleDashboardSidebarMouseleave,
			hideSidebar,
		};
	},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

// sidebar toggle icon
.dt-icons.floating__btn {
	text-align: center;
	position: fixed;
	z-index: 99;
	bottom: 5%;
	right: 5%;
	background: $coloRed;
	padding: 10px;
	width: 50px;
	height: 50px;
	border-radius: 100%;
	display: none;

	.btn-navigate {
		margin: 0 auto;
		cursor: pointer;

		svg {
			width: 30px;
			height: auto;

			path {
				fill: #fff;
			}
		}
	}
}

.dashboard__layout {
	top: -160px;
	// overflow-x: hidden;

	.sidebar-overlay {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 9;
		display: none;
		// background-color: #ccc;
	}

	.dashboard__layout_row {
		display: flex;
	}

	.dash-nav {
		width: 340px;
		transition: all 0s;
		display: block;
		border-radius: 1rem;
		margin-top: 44px;

		@media (max-width: 1024px) {
			position: fixed;
			top: 90px;
			left: 10px;
			z-index: 9;
			overflow: auto;
			height: 73vh;
			// display: none;
			margin-top: 0;
		}

		@media (max-width: 576px) {
			width: 280px;
		}

		&.hide-nav {
			// display: none;
			left: 0;
			transform: translateX(-100%);
		}
	}

	.dash-right-tab {
		width: 0;
		padding: 15px;
		margin-top: 44px;
		position: relative;
		display: block;

		@media (max-width: 1023px) {
			margin-left: 0;
		}

		@media (max-width: 576px) {
			padding: 15px 0;
			width: calc(100% - 40px);
		}
	}

	.dashboard__layout_row {
		.dash-nav-responsive {
			width: 100px;
			transition: all 0s;

			@media (max-width: 1025px) {
				width: 60px;
			}

			@media (max-width: 425px) {
				width: 50px;
			}

			.nav {
				a {
					&.nav-link {
						.left-arrow {
							display: none !important;
						}
					}
				}
			}
		}
	}
}
</style>

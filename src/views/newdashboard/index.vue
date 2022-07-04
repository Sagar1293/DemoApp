<template>
	<div>
		<top-navbar />
		<section class="banner d-inline-block position-relative w-100">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-12">
						<div class="banner-text d-flex justify-content-center align-items-center">
							<!-- page header - breadcrumb -->
							<div>
								<div class="banner-icon">
									<FontAwesomeIcon :icon="dashboardIcon" />
								</div>

								<div class="sec-header">
									<h5 class="sec-title" id="h1">
										{{ t('commanDashboard.myDashboard') }}
									</h5>
									<p>
										<a href="#"> {{ t('commanDashboard.myDashboard') }}/ </a>

										<span>
											<a href="#" id="h3">{{ t('commanDashboard.dashboard') }}</a>
										</span>
									</p>
								</div>
								<!-- <h5>Company Login</h5> -->
							</div>
						</div>
					</div>
				</div>
				<div v-if="userTypeInfo == 'jobseeker'">
					<span v-if="profileCompleteFlag" class="alert dashboard-alert text-center position-relative d-block my-4">
						<router-link to="/update-profile" class="header-right-dash" v-if="isUserLogedIn">
							<!-- Your Profile is incomplete, please click update profile -->
							{{ t('commanDashboard.profileInComplete') }}
						</router-link>
						<span class="cursor-pointer alert-close-icon" @click="hideTaxAlert"><FontAwesomeIcon :icon="closeIcon"/></span>
					</span>
				</div>
				<div v-else>
					<span v-if="profileCompleteFlag" class="alert dashboard-alert text-center position-relative d-block my-4">
						<router-link to="/companyprofile" class="header-right-dash" v-if="isUserLogedIn">
							<!-- Your Profile is incomplete, please click update profile -->
							{{ t('commanDashboard.profileInComplete') }}
						</router-link>
						<span class="cursor-pointer alert-close-icon" @click="hideTaxAlert"><FontAwesomeIcon :icon="closeIcon"/></span>
					</span>
				</div>
				<div v-if="userTypeInfo == 'jobseeker'">
					<!-- if tax card exist -->
					<div v-if="!isHideTaxAlert && userProfileInfo.availableTaxCard && userProfileInfo.earned_percentage === 100" class="alert dashboard-alert text-center position-relative my-4">
						<p class="mb-0">
							<!-- Your current tax card limit is expired, so your tax calculation will be count based on maximum tax percentage -->
							<!-- {{t('commanDashboard.textCard')}} -->
							{{ t('leDashboard.dashboardTaxMessage') }}
						</p>
						<span class="cursor-pointer alert-close-icon" @click="hideTaxAlert"><FontAwesomeIcon :icon="closeIcon"/></span>
					</div>

					<!-- if tax card is not exist -->
					<div v-if="!isHideTaxAlert && !userProfileInfo.availableTaxCard" class="alert dashboard-alert text-center position-relative my-4">
						<p class="mb-0">
							<!-- Upload your latest tax card to your documents, otherwise 60 % of your salary will be withheld from your invoices. -->
							<!-- {{t('commanDashboard.uploadTextCard')}} -->
							{{ t('leDashboard.taxCardMessage') }}
						</p>
						<span class="cursor-pointer alert-close-icon" @click="hideTaxAlert"><FontAwesomeIcon :icon="closeIcon"/></span>
					</div>

					<div class="profession-container container-lg">
						<div class="row no-gutters">
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/dashboard" v-if="isUserLogedIn">
									<div class="danger-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-red.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/company.png" alt="" class="img-fluid" />
											</div>
											<h5 class="fw-bold text-center mt-4 text-white">
												{{ t('commanDashboard.dashboard') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/invoices" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-left.png" alt="" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/all-invoice.png" alt="err" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.Invoicing') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/team-invoices" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-left.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/team-members.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.teamInvoicing') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/jobseeker-team" class="header-right-dash" v-if="isUserLogedIn">
									<div
										class="white-box profession-box-common p-h 
										"
									>
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-b.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/light-entrepreneurs.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.jobSeekerTeam') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
								<router-link to="/update-profile" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-t-b.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/team-invoice-list.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.manageAccount') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/documents" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-l-t-r.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/applications.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.myDocuments') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/my-resume" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-l-t-r.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/myResumesImg.svg" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.myResumes') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/job/proposals" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/light-grey-l-b.png" alt="err" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/my-application.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.myApplications') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/worked-details" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/light-grey-l-b.png" alt="err" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/worked-details.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4" id="h2">
												{{ t('commanDashboard.myWorkDetails') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/job/find" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/light-grey-l-b.png" alt="err" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/job-matching.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.jobMatching') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/update-profile" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/light-grey-l-b.png" alt="err" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/manage-skills.png" alt="" class="" />
											</div>
											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.manageSkills') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>

				<div v-else>
					<div class="profession-container container-lg">
						<div class="row no-gutters">
							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/profile/company" class="header-right-dash" v-if="isUserLogedIn">
									<div class="danger-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-red.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/company.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4 text-white" id="h5">
												<!-- Tehovoima oy -->
												{{ t('commanDashboard.dashboard') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
								<router-link to="/companyprofile" class="header-right-dash" v-if="isUserLogedIn">
									<div class="profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-left.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/company.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												<!-- Tehovoima oy -->
												{{ t('commanDashboard.companyProfile') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/invoices" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-left.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/all-invoice.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.allInvoices') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/team-invoices" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-left.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/all-invoice.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.allTeamInvoices') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/team-member" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-left.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/team-members.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4" id="h6">
												{{ t('commanDashboard.teamMembers') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/light-entreprenuers" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common p-h">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-b.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/light-entrepreneurs.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.lightEntrepreneurs') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/gigworkhour" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-grey-t-b.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/applications.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.myWorkHourList') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/econtract" class="header-right-dash" v-if="isUserLogedIn">
									<div class="white-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-l-t-r.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/worked-details.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.eContract') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/job/add" class="header-right-dash" v-if="isUserLogedIn">
									<div class="dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-l-t-r.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/job-matching.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4">
												{{ t('commanDashboard.postNewGig') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>

							<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" :class="profileCompleteFlag == true ? 'not-allowed' : ''">
								<router-link to="/job/list" class="header-right-dash" v-if="isUserLogedIn">
									<div class="text-white dark-box profession-box-common prof-px">
										<span class="prof-bg-puzzle">
											<img src="~@/assets/images/new-dash-blue-puzzle.png" alt="err" class="" />
										</span>
										<div class="text-content">
											<div class="content-icon">
												<img src="~@/assets/images/job-matching.png" alt="" class="" />
											</div>

											<h5 class="fw-bold text-center mt-4 text-white">
												{{ t('commanDashboard.manageMyGigs') }}
											</h5>
										</div>
									</div>
								</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- vue tour -->
		<!-- <div v-if="firstLogin"> -->
		<!-- <v-tour name="myTour" :steps="steps"></v-tour> -->
		<div v-if="userTypeInfo == 'jobseeker'">
			<v-tour name="myTour" :steps="steps" :callbacks="myCallbacks"> </v-tour>
		</div>
		<div v-else>
			<v-tour name="myTour" :steps="step" :callbacks="myCallbacks"> </v-tour>
		</div>
		<!-- </div> -->
		<footer class="footer d-inline-block position-relative w-100">
			<div class="container-lg">
				<div class="row">
					<div class="col-lg-5 col-12">
						<div class="footer-logo">
							<a href="index.html"><img src="@/assets/images/logo-white.png" class="img-fluid" alt=""/></a>
						</div>
					</div>
					<div class="col-lg-3 col-12">
						<ul class="footer-sitemap">
							<li>
								<h5 class="footer-title mb-3">
									{{ t('footerDash.Sitemap') }}
								</h5>
							</li>
							<li>
								<a href="">
									{{ t('footerDash.Home') }}
								</a>
							</li>
							<li>
								<a href="">{{ t('footerDash.signIn') }}</a>
							</li>
							<li>
								<a href="">{{ t('footerDash.joinToday') }}</a>
							</li>
						</ul>
					</div>
					<div class="col-lg-4 col-12">
						<ul class="footer-sitemap">
							<li>
								<h5 class="footer-title mb-4">
									Way2Work oy
								</h5>
							</li>
							<li>
								<a href="" class="d-flex align-items-start">
									<div>
										<FontAwesomeIcon :icon="mapIcon" />
									</div>
									<p class="ml-3">
										Kauppalantie 15,00320 Helsinki Open in weekdays 08:00-16:00
									</p>
								</a>
							</li>
						</ul>

						<div class="row">
							<div class="col-xl-6 col-lg-12 col-12">
								<ul>
									<li>
										<a href="" class="d-flex align-items-center">
											<div>
												<FontAwesomeIcon :icon="telephoneIcon" />
											</div>
											<p class="ml-3 tel-text">
												+358 401591447
											</p>
										</a>
									</li>
								</ul>
							</div>
							<div class="col-xl-6 col-lg-12 col-12">
								<ul>
									<li>
										<a href="" class="d-flex align-items-center">
											<div>
												<FontAwesomeIcon :icon="emailICon" />
											</div>
											<a href="" class="ml-3">info@way2work.fi</a>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container-lg footer-bottom">
				<p>
					Way2Work oy(3123560-3)
					<span>
						<FontAwesomeIcon :icon="copyrightIcon" />
					</span>
					2021
				</p>
			</div>
		</footer>

		<!-- banner -->
	</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TopNavbar from '@/layouts/homeLayout/components/TopNavbar.vue';
import { faCopyright, faEnvelope, faMapMarkerAlt, faMinusSquare, faPhoneAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { computed, ref } from '@vue/reactivity';
import { useStore } from 'vuex';
import { onMounted, watch } from 'vue';
import { getCurrentInstance, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	name: 'NewDashboard',

	components: {
		TopNavbar,
		FontAwesomeIcon,
	},

	setup() {
		document.title = 'Dashboard - Way2Work';
		//vue tour
		const $vueInstance = getCurrentInstance();

		//ref
		const isHideTaxAlert = ref(localStorage.getItem('hideTaxAlert') || false);
		const someTimeLoginUser = ref(null);
		const dashboardIcon = faMinusSquare;
		const FacebookIcon = faFacebook;
		const twitterIcon = faTwitter;
		const instagramIcon = faInstagram;
		const mapIcon = faMapMarkerAlt;
		const telephoneIcon = faPhoneAlt;
		const emailICon = faEnvelope;
		const copyrightIcon = faCopyright;
		const closeIcon = faTimes;
		const steps = ref([
			{
				target: '#h1',
				step: {
					// offset: 100, // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				},
				header: {
					title: 'Get Started',
				},
				content: 'Discover <strong>Vue Tour</strong>!',
				params: {
					placement: 'right', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				},
			},
			{
				target: '#h2',
				content: 'An awesome plugin made with Vue.js!',
			},
			{
				target: '#h3',
				content: 'Try it',
				params: {
					placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				},
			},
		]);

		const step = ref([
			{
				target: '#h1',
				step: {
					// offset: 100, // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				},
				header: {
					title: 'Get Started',
				},
				content: 'Discover <strong>Vue Tour</strong>!',
				params: {
					placement: 'right', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				},
			},
			{
				target: '#h5',
				content: 'An awesome plugin made with Vue.js!',
			},
			{
				target: '#h6',
				content: 'Try it',
				params: {
					placement: 'top', // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
				},
			},
		]);

		// store
		const store = useStore();

		// i18n instance
		const { t } = useI18n({ useScope: 'global' });

		/**
		 * Computed Properties
		 * *******************************************************************
		 */
		const userTypeInfo = computed(() => store.state.auth.userType);
		// user is looged in ?
		const isUserLogedIn = computed(() => store.state.auth.userLogged);
		// Dashboard and user profile
		const dashboardInfo = computed(() => store.state.dashboard.DashboardWorkStats);
		const userProfileInfo = computed(() => store.state.auth.userProfile);
		/**
		 * Mounted Properties
		 * *******************************************************************
		 */

		onMounted(() => {
			store.dispatch('auth/verifyToken').then(res => {
				someTimeLoginUser.value = res.data.data.first_time_login;
				if (someTimeLoginUser.value) {
					$vueInstance?.proxy?.$tours?.myTour?.start();
				}
			});
			// start()
			// someTimeLoginUser.value == store.getters['auth/getUserFirstLogin']
		});

		/**
		 * Methods
		 * *******************************************************************
		 */

		const profileCompleteFlag = computed(() => {
			return store.state.auth.incompleteProfileFlag;
		});
		console.log(profileCompleteFlag.value, 'profileCompleteFlag');
		//first time login
		// const firstLogin = computed(() => {
		// 	return store.state.auth.firstTimeLogin;
		// });
		const firstLogin = computed(() => {
			return store.getters['auth/getUserFirstLogin'];
		});

		// const someTimeLoginUser = computed(() => store.getters['auth/getUserFirstLogin']);

		// console.log(firstLogin.value, 'hhhhhhhhhhhhhhhhhhhhh');

		/**
		 * Methods
		 * *******************************************************************
		 */
		const hideTaxAlert = () => {
			isHideTaxAlert.value = true;
			localStorage.setItem('hideTaxAlert', true);
		};

		//skip tour
		const myCustomSkipStepCallback = () => {
			store.dispatch('auth/vueTour');
		};

		//Finish tour
		const myCustomFinishStepCallback = () => {
			store.dispatch('auth/vueTour');
		};

		const myCallbacks = {
			onSkip: myCustomSkipStepCallback,
			onFinish: myCustomFinishStepCallback,
		};

		// watch(firstLogin.value,
		// 	() => {
		// 		alert(firstLogin.value,'sadasdasda');
		// 		console.log(firstLogin.value, 'fsdfsdfsdfsf==================');
		// 		if (store.getters['auth/getUserFirstLogin']) {
		// 			alert('okay');
		// 			$vueInstance?.proxy?.$tours?.myTour?.start();
		// 		}
		// 	},
		// );
		// watch(()=>someTimeLoginUser.value,()=>{
		// 	alert('new')
		// 	alert(someTimeLoginUser.value,'someTimeLoginUser.value')
		// })
		// watch(() => firstLogin.value, () => {
		// 	alert(firstLogin.value);
		// });

		return {
			//ref
			t,
			dashboardIcon,
			FacebookIcon,
			twitterIcon,
			instagramIcon,
			mapIcon,
			telephoneIcon,
			emailICon,
			closeIcon,
			copyrightIcon,
			dashboardInfo,
			isHideTaxAlert,
			someTimeLoginUser,
			// Computed,
			userTypeInfo,
			isUserLogedIn,
			profileCompleteFlag,
			hideTaxAlert,
			userProfileInfo,
			firstLogin, //first time login
			//vue tour
			steps,
			step,
			myCallbacks,
			myCustomSkipStepCallback,
			myCustomFinishStepCallback,
		};
	},
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/style.scss';

.banner {
	background-color: $bg-color;
	padding-bottom: 150px;
	padding-top: 130px;

	.cursor-pointer {
		cursor: pointer;
	}

	.banner-text {
		text-align: center;
		position: relative;

		.banner-icon {
			margin-bottom: 10px;

			svg {
				font-size: 50px;
				color: $coloRed;
			}
		}

		.sec-header {
			p {
				margin-top: 5px;
				color: $colorGray;
				font-weight: 500;

				a {
					color: $colorGray;
				}

				span {
					color: $colorLightGray;
					font-weight: 300;
				}
			}
		}
	}

	.invoice-dropdown {
		background-color: #fff;
		border-radius: 50px;
		min-height: 40px;
		color: #777777;
		padding: 10px 30px;
		&:focus {
			box-shadow: none;
		}
	}
}

.select-employee {
	width: 40%;
	border-radius: 12px;
	// border: 1px solid #f2f2f2;
	background-color: #ffff;
	border-radius: 20px;
}
.not-allowed {
	cursor: not-allowed;
	pointer-events: none !important;
}

@media (max-width: 992px) {
	.banner {
		padding-top: 150px;

		.go__back {
			position: relative !important;
			display: flex;
			justify-content: center;
			margin-bottom: 30px;
			top: unset !important;
			left: unset !important;
		}
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

		.go__back {
			.banner-back {
				.back-icon {
					width: 35px !important;
					height: 35px !important;
					line-height: 35px !important;

					span {
						font-size: 20px;
					}
				}
				.back-text {
					span {
						font-size: 14px;
					}
				}
			}
		}
	}
}

.danger-box {
	background-color: transparent;
}

.dark-box {
	background-color: transparent;
	font-weight: 300;

	h2 {
		color: $colorWhite;
	}
}

.white-box {
	background-color: transparent;
	color: #000;

	h2 {
		span {
			font-size: 33px;
			font-weight: 700;
		}
	}
}

.feature-dark-box {
	background-color: #394251;
}

.profession-box-common {
	border-radius: 20px;
	height: 382px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 74px;
	transition: all 0.5s;
	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 1440px) {
		height: 320px;
	}

	.prof-bg-puzzle {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		display: block;

		img {
			width: 100%;
			height: 100%;
			position: relative;
			object-fit: contain;
		}
	}
	.text-content {
		z-index: 1;

		.content-icon {
			max-width: 80px;
			margin: 0 auto;
			width: 100%;
			img {
				width: 80px;
				height: 80px;
				object-fit: contain;
			}
		}
	}
}

.simple-hover {
	&:hover {
		transform: scale(1.1);
	}
}

.footer {
	background-color: #000;
	color: #fff;
	padding: 50px 0 0;
	li {
		line-height: 45px;
	}

	a {
		color: #fff;
		font-size: 14px;
		font-weight: 500;

		@media (max-width: 576px) {
			font-size: 13px;
		}
	}

	.footer-logo {
		width: 120px;
		@media (max-width: 768px) {
			margin-bottom: 40px;
		}

		@media (max-width: 576px) {
			width: 150px;
		}
	}
	.tel-text {
		font-size: 14px;
		white-space: nowrap;
		@media (max-width: 576px) {
			font-size: 13px;
		}
	}
	.footer-bottom {
		padding: 100px 0 100px;
		@media (max-width: 1024px) {
			padding: 50px 0 100px;
		}

		@media (max-width: 768px) {
			padding: 50px 0 100px;
		}
		@media (max-width: 576px) {
			padding: 20px 20px 20px;
			font-size: 13px;
		}
	}
	.footer-sitemap {
		p {
			max-width: 295px;
			line-height: 30px;
			font-weight: 300;
			font-size: 14px;
		}
		h5 {
			@media (max-width: 1024px) {
				margin: 20px 0 0;
			}
		}
		@media (max-width: 576px) {
			margin: 20px 0 0;
		}
		a {
			@media (max-width: 576px) {
				font-size: 13px;
			}
		}
	}
}
.alert-close-icon {
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
	font-size: 22px;
}
.dashboard-alert {
	margin: 22px 22px 0px 22px;
	font-weight: 500;
	color: #fff;
	background-color: #ea2129;
	border-radius: 18px;
	a,
	p {
		font-size: 20px;
		color: #fff;
		margin-right: 0.5rem;
		@media (max-width: 2560px) {
			font-size: 20px;
		}
		@media (max-width: 1600px) {
			font-size: 16px;
		}
	}
	.alert-close-icon {
		font-size: 16px;
		right: 20px;
		color: #000;
	}

	&.alert {
		padding: 0.75rem 2.25rem 0.75rem 1.2rem;
	}
}
</style>

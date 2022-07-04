import { createRouter, createWebHistory } from 'vue-router';
import { loadLocaleMessages, setI18nLanguage } from '../helpers/I18n';
import { isUserAuthenticated } from '@/helpers/functions';

import invoiceRoutes from '@/views/invoice/routes';
import profileRoutes from '@/views/profile/routes';
import documentRoutes from '@/views/document/routes';
import resumeRoutes, { resumeBlankLayoutRoutes } from '@/views/resume/routes';
import workdetailsRoutes from '@/views/workdetails/routes';
// import skillRoutes from '@/views/skill/routes';
import jobRoutes from '@/views/job/routes';
import jobBlankLayoutRoutes from '@/views/job/routes';
// import jobRoutes, { jobBlankLayoutRoutes } from '@/views/job/routes';
import teamRoutes from '@/views/team/routes';
import gigWrokHour from '@/views/gigworkhour/routes';
import econtract from '@/views/econtract/routes';
import signaturepade from '@/views/signaturepad/routes';
import jobseekerTeam from '@/views/jobseekerTeam/routes';
import teamInvoice from '@/views/teamInvoice/routes';
import application from '@/views/application/routes';
import invites from '@/views/invites/routes';
import companyprofile from '@/views/companyprofile/routes';
import store from '@/store'; // store

// setup router
export const setupRouter = i18n => {
	// routes
	const routes = [
		// initial routes - guest routes
		{
			path: '',
			component: () => import('@/layouts/homeLayout/index.vue'),
			children: [
				{
					path: '',
					name: 'Home',
					component: () => import('@/views/homepage/indexNew.vue'),
					meta: {
						allowAnonymous: true,
					},
				},
				// {
				// 	path: 'new-page',
				// 	name: 'HomeNewPage',
				// 	component: () => import('@/views/homepage/indexNew.vue'),
				// 	meta: {
				// 		allowAnonymous: true,
				// 	},
				// },
				{
					path: '/logout',
					redirect: '',
				},

				{
					path: '/new-dashboard',
					name: 'New DashBoard',
					component: () => import('@/views/newdashboard/index.vue'),
					meta: {
						allowAnonymous: true,
					},
				},
				{
					path: '/about',
					name: 'About',
					component: () => import('@/views/aboutpage/index.vue'),
					meta: {
						allowAnonymous: true,
					},
				},
				{
					path: '/contactus',
					name: 'ContactUs',
					component: () => import('@/views/contactpage/index.vue'),
					meta: {
						allowAnonymous: true,
					},
				},
				{
					path: '/our-team',
					name: 'OurTeam',
					component: () => import('@/views/ourteampage/index.vue'),
					meta: {
						allowAnonymous: true,
					},
				},
				// ...jobBlankLayoutRoutes, // job routes
				...resumeBlankLayoutRoutes, // resume routes
			],
		},

		{
			path: '/project-market',
			name: 'Project Marker',
			component: () => import('@/views/projectMarket/index.vue'),
			meta: {
				allowAnonymous: true,
			},
		},
		{
			path: '/project-market/:id/:slug',
			name: 'ProjectDetails',
			component: () => import('@/views/projectMarket/components/projectDetails.vue'),
			meta: {
				allowAnonymous: true,
			},
		},

		// authentication routes
		{
			path: '/sign-up',
			name: 'sign-up-page',
			component: () => import('@/views/authentication/AuthSignUpForm'),
			meta: {
				allowAnonymous: true,
			},
		},

		// invitation-accept
		{
			path: '/invitation-accept-message',
			name: 'invitation-accept',
			component: () => import('@/views/maintenancePage/SuccessMessagePage'),
			meta: {
				allowAnonymous: true,
			},
		},

		// invitation-accept
		{
			path: '/invoicing-accept-message',
			name: 'invoicing-accept',
			component: () => import('@/views/maintenancePage/InvoiceQuickpayVerification'),
			meta: {
				allowAnonymous: true,
			},
		},

		// authentication login routes
		{
			path: '/authlogin',
			name: 'auth-login-page',
			component: () => import('@/views/authentication/SignIn'),
			meta: {
				allowAnonymous: true,
			},
		},

		// authentication routes
		{
			path: '/registration',
			name: 'registration-page',
			component: () => import('@/views/authentication/NewRegistration'),
			meta: {
				allowAnonymous: true,
			},
		},

		// authentication routes
		{
			path: '/signin',
			name: 'signin-page',
			component: () => import('@/views/authentication/SignIn'),
			meta: {
				allowAnonymous: true,
			},
		},

		//login page route
		{
			path: '/login',
			name: 'login-page',
			component: () => import('@/views/authentication/NewLogin'),
			meta: {
				allowAnonymous: true,
			},
		},
		//login le page route
		{
			path: '/sign-in-le',
			name: 'login-le',
			component: () => import('@/views/authentication/LoginFormLe'),
			meta: {
				allowAnonymous: true,
			},
		},

		//as a partner route
		{
			path: '/as-a-partner',
			name: 'partner',
			component: () => import('@/views/authentication/CompanyDashboard'),
			meta: {
				allowAnonymous: true,
			},
		},
		//login company page route
		{
			path: '/sign-in-client',
			name: 'login-client',
			component: () => import('@/views/authentication/LoginFormClient'),
			meta: {
				allowAnonymous: true,
			},
		},

		//login company page route
		{
			path: '/email-otp',
			name: 'email-otp-page',
			component: () => import('@/views/authentication/EmailOtpForm'),
			meta: {
				allowAnonymous: true,
			},
		},

		{
			path: '/forget-password-page',
			name: 'ForgetPassword1Form',
			component: () => import('@/views/authentication/ForgetPassword1Form'),
			meta: {
				allowAnonymous: true,
			},
		},

		// //login company page route
		// {
		// 	path: '/forget-password-page.',
		// 	name: 'forget-password-page',
		// 	component: () => import('@/views/authentication/ForgetPassword1Form.vue'),
		// 	meta: {
		// 		allowAnonymous: true,
		// 	},
		// },

		// email verification - done ( continue registration )
		{
			path: '/registration/:token',
			name: 'verify-email',
			component: () => import('@/views/authentication/NewRegistration'),
			meta: {
				allowAnonymous: true,
			},
		},
		// authenticated routes
		{
			path: '/',
			component: () => import('@/layouts/dashboardLayout/index.vue'),
			children: [
				{
					path: '/dashboard',
					name: 'Dashboard',
					component: () => import('@/views/dashboard/index.vue'),
					meta: {
						allowAnonymous: false,
						breadcrumb: [
							{ title: 'My Dashboard', url: '/dashboard' },
							{
								title: 'Dashboard',
								url: '/dashboard',
								active: true,
							},
						],
					},
				},
				...invoiceRoutes, // invoice routes
				...profileRoutes, // profile routes
				...documentRoutes, // document routes
				...resumeRoutes, // resume routes
				...workdetailsRoutes, // work detail routes
				// ...skillRoutes, // skill routes
				...jobRoutes, // job routes
				...teamRoutes, // team routes
				...gigWrokHour, //gigworkhour
				...econtract, //e-contract
				...signaturepade, //e-contract
				...jobseekerTeam, //job-seeker-team
				...teamInvoice, //taem-invoice
				...application, //application
				...invites, // invites
				...companyprofile, //companyprofile
				...jobBlankLayoutRoutes,
			],
		},
		// maintenance mode
		{
			path: '/maitenance-page',
			name: 'MaintenancePage',
			component: () => import('@/views/maintenancePage/Maintenance.vue'),
			meta: {
				allowAnonymous: true,
			},
		},
		// 404 path
		{
			path: '/:catchAll(.*)*',
			name: 'ErrorPage',
			component: () => import('@/views/maintenancePage/Maintenance.vue'),
			meta: {
				allowAnonymous: true,
			},
		},
	];

	// create router
	const router = createRouter({
		history: createWebHistory(process.env.BASE_URL),
		scrollBehavior() {
			return { x: 0, y: 0 };
		},
		routes,
	});

	const checkHomeRoute = to => {
		if (to.path === '/new-dashboard') {
			return true;
		}
		return store.dispatch('auth/urlStatusAccess').then(res => {
			store.commit('SET_STATE', {
				action: 'isSiteStatusChecked',
				value: true,
			});
			localStorage.setItem('urlStatusAccess', res.data.data.url_access_mode);
			if (res.data.data.url_access_mode) {
				return false;
			} else {
				alert;
				return true;
			}
		});
	};

	// check langugae message - if not then import
	router.beforeEach(async (to, from, next) => {
		const paramsLocale = localStorage.getItem('lang') || 'fi';

		// load locale messages
		if (!i18n.global.availableLocales.includes(paramsLocale)) {
			await loadLocaleMessages(i18n, paramsLocale);
		}

		// set i18n language
		setI18nLanguage(i18n, paramsLocale);
		const allowRoutes = ['/', '/signin'];
		// check user validated
		const authState = await isUserAuthenticated();
		if (!allowRoutes.includes(to.path)) {
			store.dispatch('auth/urlStatusAccessSideBar');
		}
		// const routeState = await checkHomeRoute(to, authState);
		// console.log(routeState, 'routeStaterouteStaterouteStaterouteStaterouteState');
		// if (!routeState) {
		// 	// return next({ path: '/authlogin' });
		// 	console.log(authState,'authStateauthStateauthState')
		// 	if (authState) {
		// 		return next({ path: '/' });
		// 	} else {
		// 		return next({ path: '/new-dashboard' });
		// 	}
		// }

		if (authState || to.meta.allowAnonymous) {
			// authenticated routes
			return next();
		} else {
			return next({
				path: '/',
			});
		}
	});

	return router;
};

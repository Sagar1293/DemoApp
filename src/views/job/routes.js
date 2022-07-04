export default [
	{
		path: '/job/add',
		name: 'PostNewGig',
		component: () => import('@/views/job/AddJob.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Post New Gig',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Post New Gig',
					url: '/job/add',
					active: true,
				},
			],
		},
	},
	{
		path: '/job/list',
		name: 'ManageGig',
		component: () => import('@/views/job/ManageJob.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Manage Gigs',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Gigs',
					url: '/job/list',
					active: true,
				},
			],
		},
	},
	{
		path: '/job/edit/:id',
		name: 'EditJob',
		component: () => import('@/views/job/EditJob.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Edit Gig',
			activeLink: '/job/list',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Manage Gigs', url: '/job/list' },
				{
					title: 'Edit Gig',
					url: route => {
						return `/job/edit/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},
	{
		path: '/job/view/:id',
		name: 'ViewGigDetail',
		component: () => import('@/views/job/ViewJobDetail.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View Job Detail',
			activeLink: '/job/list',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Manage Gigs', url: '/job/list' },
				{
					title: 'View Gig Detail',
					url: route => {
						return `/job/view/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},
	{
		path: '/job/proposals',
		name: 'Manage Job Proposals',
		component: () => import('@/views/job/JobProposal.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Manage Job Proposals',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Job Proposals',
					url: '/job/proposals',
					active: true,
				},
			],
		},
	},
	//job application view
	{
		path: '/job/view-application/:id',
		name: 'ViewApplicationDetail',
		component: () => import('@/views/job/ViewGigApplicationDetail.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Project market / Manage Job Proposals',
			activeLink: '/job/proposals',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Project market / Manage Job Proposals', url: '/job/proposals' },
				{
					title: 'View Job Proposal',
					url: '/job/proposals',
					active: true,
				},
			],
		},
	},
	{
		path: '/job/find',
		name: 'JobFind',
		component: () => import('@/views/job/MatchingJobList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Matching Job List',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Project Market / MatchingJobList',
					url: '/job/find',
					active: true,
				},
			],
		},
	},
];

export const jobBlankLayoutRoutes = [
	{
		path: '/job/find',
		name: 'JobFind',
		component: () => import('@/views/job/MatchingJobList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Matching Job List',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'MatchingJobList',
					url: '/job/find',
					active: true,
				},
			],
		},
	},

	
];

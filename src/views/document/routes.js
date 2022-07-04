export default [
	{
		path: '/documents',
		name: 'Manage Documents',
		component: () => import('@/views/document/DocumentList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Project Market / Manage Documents',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Project Market / Manage Documents',
					url: '/documents/list',
					active: true,
				},
			],
		},
	},
	//view seeker pay sleep details
	{
		path: '/documents/view-pay-sleep/:id',
		name: 'ViewSeekerPaySleepDetail',
		component: () => import('@/views/document/components/ViewSeekerPaySleepDetail.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View Seeker Pay sleep Detail',
			activeLink: '/documents',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Manage Documents', url: '/invoice/list' },
				{
					title: 'View Pay Sleep',
					url: route => {
						return `/documents/view-pay-sleep/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},
];

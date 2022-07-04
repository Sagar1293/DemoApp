export default [
	{
		path: '/companyprofile',
		name: 'companyprofile',
		component: () => import('@/views/companyprofile/index.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Invites',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Company Profile',
					url: 'companyprofile',
					active: true,
				},
			],
		},
	},
];

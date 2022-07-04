export default [
	{
		path: '/application',
		name: 'Application',
		component: () => import('@/views/application/Application.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Manage Application',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Application',
					url: '/application',
					active: true,
				},
			],
		},
	},
];

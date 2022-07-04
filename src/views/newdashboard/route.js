export default [
	{
		path: '/new-dashboard',
		name: 'NewDashboad',
		component: () => import('@/views/newdashboard/index.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'New Dashboard',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/new-dashboard' },
				{
					title: 'New Dashboard',
					url: '/new-dashboard',
					active: true,
				},
			],
		},
	},
];

export default [
	{
		path: '/gigworkhour',
		name: 'Manage GigWrokHour',
		component: () => import('@/views/gigworkhour/GigWorkHourList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Gig Work Hour',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage GigWorkHour',
					url: '/gigworkhour/list',
					active: true,
				},
			],
		},
	},
	{
		path: '/gigworkhour/view/:id',
		name: 'ViewGigWorkDetail',
		component: () => import('@/views/gigworkhour/ViewGigWorkDetail.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View GigWork Detail',
			activeLink: '/gigworkhour',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Gig Work Houe', url: '/gigworkhour/list' },
				{
					title: 'Gig Work Hour Detail',
					url: route => {
						return `/gigwork/view/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},
];

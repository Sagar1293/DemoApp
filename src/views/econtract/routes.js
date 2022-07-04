export default [
	{
		path: '/econtract',
		name: 'Manage  E-Contract',
		component: () => import('@/views/econtract/EContractList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'E contract',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage econtract',
					url: '/econtract/list',
					active: true,
				},
			],
		},
	},
	// {
	// 	path: '/gigworkhour/view/:id',
	// 	name: 'ViewGigWorkDetail',
	// 	component: () => import('@/views/gigworkhour/ViewGigWorkDetail.vue'),
	// 	meta: {
	// 		allowAnonymous: false,
	// 		pageTitle: 'View GigWork Detail',
	// 		breadcrumb: [
	// 			{ title: 'My Dashboard', url: '/dashboard' },
	// 			{ title: 'Gig Work Houe', url: '/gigworkhour/list' },
	// 			{
	// 				title: 'Gig Work Hour Detail',
	// 				url: route => {
	// 					return `/gigwork/view/${route.params.id}`;
	// 				},
	// 				active: true,
	// 			},
	// 		],
	// 	},
	// },
];

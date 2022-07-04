export default [
	{
		path: '/worked-details',
		name: 'Worked Details',
		component: () => import('@/views/workdetails/WorkDetailList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Work Detail List',
			activeLink: '/work-details',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Work Details',
					url: '/worked-details',
					active: true,
				},
			],
		},
	},
	{
		path: '/worked-details/add',
		name: 'Add Worked Details',
		component: () => import('@/views/workdetails/AddWorkDetails.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Add Worked Details',
			activeLink: '/worked-details',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Work Details',
					url: '/worked-details',
				},
				{
					title: 'Add Worked Details',
					url: '/worked-details/add',
				},
			],
		},
	},
	{
		path: '/worked-details/edit/:id',
		name: 'Edit Worked Details',
		component: () => import('@/views/workdetails/EditWorkDetails.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Edit Worked Details',
			activeLink: '/worked-details',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Work Details',
					url: '/worked-details',
				},
				{
					title: 'Edit Worked Details',
					url: '/worked-details/edit',
				},
			],
		},
	},
];

export default [
	{
		path: '/invites',
		name: 'Invites',
		component: () => import('@/views/invites/index.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Invites',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
			],
		},
	},
	{
		path: '/companyinvites',
		name: 'CompanyInvites',
		component: () => import('@/views/invites/companyInvites.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Invites',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
			],
		},
	},
];

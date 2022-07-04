export default [
	{
		path: '/team-member',
		name: 'Manage Team',
		component: () => import('@/views/profile/TeamMember.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Manage Team',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Team',
					url: '/team-member',
					active: true,
				},
			],
		},
	},  
	{
		path: '/update-profile',
		name: 'Manage Account',
		component: () => import('@/views/profile/UpdateProfile.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Manage Account',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Account',
					url: '/update-profile',
					active: true,
				},
			],
		},
	},
	{
		path: '/change-password',
		name: 'Change Password',
		component: () => import('@/views/profile/ChangePassword.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Change Password',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Change Password',
					url: '/change-password',
					active: true,
				},
			],
		},
	},
	{
		path: '/profile/company',
		name: 'Company Profile',
		component: () => import('@/views/profile/CompanyProfile.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Company Profile',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Dashboard',
					url: '/profile/company',
					active: true,
				},
			],
		},
	},
];

export default [
	{
		path: '/jobseeker-team',
		name: 'Jobseeker Team List',
		component: () => import('@/views/jobseekerTeam/JobseekerTeam.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Jobseeker Team List',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'LE Team List',
					url: '/job-seeker-team',
					active: true,
				},
			],
		},
	},
	{
		path: '/jobseeker-team/add',
		name: 'Add Jobseeker Team',
		component: () =>
			import('@/views/jobseekerTeam/components/AddJobseekerTeam.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'LE Team List',
			activeLink: '/jobseeker-team',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'LE Team List',
					url: '/jobseeker-team/add',
				},
				{
					title: 'Add Team',
					url: '/jobseeker-team/add',
				},
			],
		},
	},
	{
		path: '/jobseeker-team/view/:id',
		name: 'View Jobseeker Team',
		component: () =>
			import('@/views/jobseekerTeam/components/ViewJobseekerTeam.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View Jobseeker Team',
			activeLink: '/jobseeker-team',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'LE Team List',
					url: '/jobseeker-team',
				},
				{
					title: 'Edit Team',
					url: '/jobseeker-team/view',
				},
			],
		},
	},
];

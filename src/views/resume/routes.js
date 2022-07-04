export default [
	{
		path: '/my-resume',
		name: 'My Resume',
		component: () => import('@/views/resume/MyResume.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: ' Project Market / My Resume',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Project Market / My Resume',
					url: '/my-resume',
					active: true,
				},
			],
		},
	},
];

export const resumeBlankLayoutRoutes = [
	{
		path: '/resume/find',
		name: 'ResumeFind',
		component: () => import('@/views/resume/FindResume.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Resume Find',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/profile/company' },
				{
					title: 'Resume Find',
					url: '/resume/find',
					active: true,
				},
			],
		},
	},
];

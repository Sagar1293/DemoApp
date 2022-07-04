export default [
	{
		path: '/light-entreprenuers',
		name: 'LightEnterprenuers',
		component: () => import('@/views/team/LightEnterprenuers.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Manage LightEntreprenuers',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Lightentreprenuers',
					url: '/light-entreprenuers',
					active: true,
				},
			],
		},
	},
	//view job seeker rating view
	{
		path: '/light-entreprenuers/rating/view/:id',
		name: 'ViewSeekerRatingDetail',
		component: () => import('@/views/team/components/SeekerRating.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View Seeker Rating Detail',
			activeLink: '/light-entreprenuers',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Seeker Invoice', url: '/invoice/list' },
				{
					title: 'Rating Seeker Detail',
					url: route => {
						return `/invoice/Seeker/view/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},
];

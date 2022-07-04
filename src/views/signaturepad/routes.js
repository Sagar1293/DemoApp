export default [
	{
		path: '/signaturepad',
		name: 'Manage  Signature Pad',
		component: () => import('@/views/signaturepad/SignaturePad.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'E contract',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage SignaturePad',
					url: '/signaturepad/list',
					active: true,
				},
			],
		},
	},
];

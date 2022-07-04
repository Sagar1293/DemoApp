export default [
	{
		path: '/invoices',
		name: 'Invoice List',
		component: () => import('@/views/invoice/InvoiceList.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Invoice List',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Invoice',
					url: '/invoices',
					active: true,
				},
			],
		},
	},
	{
		path: '/invoices/add',
		name: 'Add Invoice',
		component: () => import('@/views/invoice/AddInvoice.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Add Invoice',
			activeLink: '/invoices',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Invoices',
					url: '/invoices',
				},
				{
					title: 'Add Invoice',
					url: '/invoices/add',
				},
			],
		},
	},
	{
		path: '/invoices/edit/:id',
		name: 'Edit Invoice',
		component: () => import('@/views/invoice/EditInvoice.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Edit Invoice',
			activeLink: '/invoices',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'Manage Invoice',
					url: '/invoices',
				},
				{
					title: 'Edit Invoice',
					url: '/invoices/edit',
				},
			],
		},
	},

	{
		path: '/invoices/cost-expenses',
		name: 'CostExpensesInvoice',
		component: () => import('@/views/invoice/CostExpenses.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'Add Invoice',
			activeLink: '/invoices',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{
					title: 'CostExpenses Invoices',
					url: '/invoices',
				},
				{
					title: 'CostExpenses Invoice',
					url: '/invoices/cost-expenses',
				},
			],
		},
	},

	//view job seeker invoice view
	{
		path: '/invoice/seeker/view/:id',
		name: 'ViewSeekerInvoiceDetail',
		component: () => import('@/views/invoice/ViewInvoiceSeekerDetail.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View Seeker Invoice Detail',
			activeLink: '/invoices',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Manage Invoice', url: '/invoice/list' },
				{
					title: 'View Invoice',
					url: route => {
						return `/invoice/Seeker/view/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},

	//view job seeker invoice view
	{
		path: '/company-invoice/view/:id',
		name: 'ViewCompanyInvoiceDetail',
		component: () => import('@/views/invoice/ViewInvoiceCompanyDetail.vue'),
		meta: {
			allowAnonymous: false,
			pageTitle: 'View Seeker Invoice Detail',
			activeLink: '/invoices',
			breadcrumb: [
				{ title: 'My Dashboard', url: '/dashboard' },
				{ title: 'Seeker Invoice', url: '/invoice/list' },
				{
					title: 'Invoice Seeker Detail',
					url: route => {
						return `/invoice/Seeker/view/${route.params.id}`;
					},
					active: true,
				},
			],
		},
	},
];

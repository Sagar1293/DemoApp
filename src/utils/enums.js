// import { i18n } from '@/helpers/I18n'; // i18n

// translator function
// const { t } = i18n.global;

// site global configs
export const siteGlobalConfigs = {
	w2wServiceFeePercentage: 7.44,
	insuranceAndSocialFeePercentage: 4.38,
};

// gender options
export const genderOptions = [
	{
		label: 'Male',
		value: 'male',
	},
	{
		label: 'Female',
		value: 'female',
	},
	{
		label: 'Other',
		value: 'other',
	},
];

// organization options
export const organizationOptions = [
	{
		label: 'Private',
		value: 'private',
	},
	{
		label: 'Public',
		value: 'public',
	},
	// {
	// 	label: 'NGO',
	// 	value: 'ngo',
	// },
	{
		label: 'Government',
		value: 'government',
	},
	// {
	// 	label: 'Semi-Government',
	// 	value: 'semi-government',
	// },
];

// no of employees options
export const noOfEmployeesOptions = [
	{
		label: '1-10',
		value: '1-10',
	},
	{
		label: '11-50',
		value: '11-50',
	},
	{
		label: '51-100',
		value: '51-100',
	},
	{
		label: '101-300',
		value: '101-300',
	},
	{
		label: '301-600',
		value: '301-600',
	},
	{
		label: '601-1000',
		value: '601-1000',
	},
	{
		label: '1001-1500',
		value: '1001-1500',
	},
	{
		label: '1501-2000',
		value: '1501-2000',
	},
	{
		label: 'More than 2000',
		value: 'more than 2000',
	},
];

// contract types
export const contractTypeOptions = [
	{
		label: 'Hours',
		value: 'hours',
	},
	{
		label: 'Pcs',
		value: 'pieces',
	},
];

// vat types
export const vatTypeOptions = [
	{
		label: '0%',
		value: '0',
	},
	{
		label: '10 %',
		value: '10',
	},
	{
		label: '14 %',
		value: '14',
	},
	{
		label: '24 %',
		value: '24',
	},
	// {
	// 	label: '24 % with deduction',
	// 	value: '24_with_deduction'
	// }
];

// due date options
export const dueDateOptions = [
	{
		label: '1 Day',
		value: 1,
	},
	{
		label: '2 Day',
		value: 2,
	},
	{
		label: '3 Day',
		value: 3,
	},
	{
		label: '4 Day',
		value: 4,
	},
	{
		label: '5 Day',
		value: 5,
	},
	{
		label: '6 Day',
		value: 6,
	},
	{
		label: '7 Day',
		value: 7,
	},
	{
		label: '8 Day',
		value: 8,
	},
	{
		label: '9 Day',
		value: 9,
	},
	{
		label: '10 Day',
		value: 10,
	},
	{
		label: '14 Day',
		value: 14,
	},
	{
		label: '21 Day',
		value: 21,
	},
	{
		label: '30 Day',
		value: 30,
	},
];

// gig mode options
export const gigModeOptions = [
	{
		label: 'Home based',
		value: 'home_based',
	},
	{
		label: 'Part time',
		value: 'part_time',
	},
	{
		label: 'Full time',
		value: 'full_time',
	},
];

export const vehicleClassTypes = [
	{
		label: 'Own Car',
		value: 'own_car',
	},
	// {
	// 	label: 'Motorboot Upto 50hp',
	// 	value: 'motorboot_upto_50hp',
	// },
	// {
	// 	label: 'Motorboot Over 50tp',
	// 	value: 'motorboot_over_50tp',
	// },
	// {
	// 	label: 'Snowmobile',
	// 	value: 'snowmobile',
	// },
	// {
	// 	label: 'Motorcycle',
	// 	value: 'motorcycle',
	// },
	// {
	// 	label: 'Moped',
	// 	value: 'moped',
	// },
	// {
	// 	label: 'Bicycle',
	// 	value: 'bicycle',
	// },
];
export const vehicleSubClassTypes = [
	{
		label: 'Trailer',
		value: 'trailer',
	},
	{
		label: 'Carvan',
		value: 'carvan',
	},
	{
		label: 'Bigcarvan',
		value: 'bigcarvan',
	},
];

// vat types
export const vatTypeOptionsNew = [
	{
		label: '0%',
		value: '0',
	},
	{
		label: '10 %',
		value: '10',
	},
	{
		label: '14 %',
		value: '14',
	},
	{
		label: '24 %',
		value: '24',
	},
];

// shaerd types
export const shardType = [
	{
		label: 'Percentage',
		value: 'percentage',
	},
	{
		label: 'Amount',
		value: 'amount',
	},
];
//job post status
export const jobPostStatus = [
	{
		label: 'Active',
		value: 'active',
	},
	{
		label: 'Blocked',
		value: 'blocked',
	},
	{
		label: 'Completed',
		value: 'completed',
	},
];

//Gig Type
export const gigTypes = [
	{
		label: 'Permanent',
		value: 'permanent',
	},
	{
		label: 'Temporary',
		value: 'temporary',
	},
	{
		label: 'Full time',
		value: 'full_time',
	},
	{
		label: 'Part time',
		value: 'part_time',
	},
	{
		label: 'On call work',
		value: 'On_call_work',
	},
];
//killometere allownce
export const invoiceAllownceTracer = {
	transported_heavyloads: 0.23,
	driven_in_rough_terrain: 0.10,
	vehicle_subclass: 0.08,
	distanceAllownce: 0.46,
};

// google map autocomplete restriction
export const gAuComRestriction = { country: ['fi', 'ee', 'se', 'no', 'ru', 'lv', 'lt'] };


// payment terms types
export const paymrntTermsOptions = [
	{
		label: '3',
		value: '3',
	},
	{
		label: '7',
		value: '7',
	},
	{
		label: '14',
		value: '14',
	},
	{
		label: '21',
		value: '21',
	},
	{
		label: '30',
		value: '30',
	},
	{
		label: '60',
		value: '60',
	},
	
];

//resume status
export const resumesRequestStatus = [
	{
		label: 'Approved',
		value: 'approved',
	},
	{
		label: 'Declined',
		value: 'declined',
	},
];

//invoice filter statau
export const invoiceFilterStatus = [
	{
		label:'Waiting',
		value:'waiting'
	},
	{
		label:'Approved',
		value:'approved'
	},
	{
		label:'Credited',
		value:'credited'
	},
	{
		label:'Paid',
		value:'paid'
	},
	{
		label:'Unpaid',
		value:'unpaid'
	},
	{
		label:'Partially paid',
		value:'partially_paid'
	},
];

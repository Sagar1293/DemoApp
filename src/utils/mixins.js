import moment from 'moment';

export const dateFormat = date => {	
	// return moment(date).format('MMM DD, YYYY');
	return moment(date).format('DD.MM.YYYY');
};


export const currencyConverture = val => {
	return (Math.round((val + Number.EPSILON) * 100) / 100).toFixed(2);
};

export const dateNewFormat = date => {	
	return moment(date).format('MMMM DD, YYYY');
	// return moment(date).format('DD.MM.YYYY');
};

var holidays = [
	'2015/01/01',
	'2015/01/02',
	'2015/02/13',
	'2015/02/16',
	'2015/02/17',
	'2015/02/18',
	'2015/02/19',
	'2015/02/20',
	'2015/02/23',
	'2015/02/27',
	'2015/04/03',
	'2015/04/06',
	'2015/05/01',
	'2015/06/19',
	'2015/09/28',
	'2015/10/09', 
];

holidays = holidays.map(function(item) { return new Date(item).toString()});

module.exports.holidays = holidays;
export const ChartConfig = {
	options: {
		scaleShowVerticalLines: false,
		responsive: true,
	},
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
	Colors: [
		{ backgroundColor: '#FDEADB' },
		{ backgroundColor: '#D4A77D' },
		{ backgroundColor: '#D7A405' },
		{ backgroundColor: '#B4833A' },
	],
	legend: true,
	colors: [],
	datasets: [
		{
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			label: 'Females',
		},
		{
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			label: 'Males',
		},
		{
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			label: 'Total',
		},
	],
}

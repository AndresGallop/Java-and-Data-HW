new Chart(document.getElementById('barChart'), {
   type: 'bar' ,
   data: {
   	labels: ['North America', 'Europe', 'Africa', 'Asia'],
   	datasets: [
   	     {
   	     	label: 'Population(millions)',
   	     	data: ['846','985','952','124'],
   	     	backgroundColor: ['#c4d5c8','#ea8ea9','#7ea895','red']
   	     }

   	]
   },
   options:{
   	   legend: {
   	   	display: false
   	   }
   }
});

new Chart(document.getElementById('lineChart'), {
	type:'line',
	data:  {
		labels: ['January', 'February', 'March'],
		datasets: [
		{
			label: 'China',
			data: ['548','126','412'],
			fill: false,
			borderColor: 'blue'
		},
		{
			label: 'United States',
			data: [0,60, 92],
			fill: false,
			borderColor:'lightblue' 
		},
		{
			label: 'Canada',
			data: [0,20, 53],
			fill: false,
			borderColor:'black' 

		}

	  ]
	},
	options: {
		title: {
			display: true,
			text: 'Coronavirus Spreading',

		}
	}
});

new Chart(document.getElementById('pieChart'),{
	type: 'pie',
	data: {
		labels: ['Apple', 'Pumpkin', 'Cherry' ],
		datasets: [
		{
			data: [14523, 89563, 45851],
			backgroundColor: ['red', 'yellow', 'lightblue']
		}

		]
	},

	options: {
		title:{
			display: true,
			text: 'Richest fruit'
		}
	}
});

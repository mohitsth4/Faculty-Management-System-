
// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

var donutOptions = {
  cutoutPercentage: 65, 
  legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
};

// donut 1
var chartShowing1 = {
    labels: ['Students', 'Courses', 'Professors'],
    datasets: [
      {
        backgroundColor: colors.slice(0,3),
        borderWidth: 0,
        data: [55, 15, 30]
      }
    ]
};

var chartShowing = document.getElementById("chartShowing");
if (chartShowing) {
  new Chart(chartShowing, {
      type: 'pie',
      data: chartShowing1,
      options: donutOptions
  });
}
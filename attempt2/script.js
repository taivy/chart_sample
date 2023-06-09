const ctx = document.getElementById('chart');

const data = {
  datasets: [{
      data: [{
          x: 333.74,
          y: 60
      }, {
          x: 588.38,
          y: 96
      }, {
          x: 985.65,
          y: 120
      }, {
          x: 1732.2,
          y: 138
      }, {
          x: 2887.7,
          y: 156
      }],
      backgroundColor: 'rgb(255, 99, 132)',
      showLine: true,
  }],
};

var myChart = new Chart(ctx, { 
    type: 'scatter',
    data: data,
    options: {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          beginAtZero: true,
          max: 3800,
          ticks: {
              stepSize: 200
          },
        },
        y: {
          beginAtZero: true,
          max: 240,
          ticks: {
              stepSize: 20
          },
        }
      },
      plugins: {
        legend: {
          display: false,
        }
      }
    }
});
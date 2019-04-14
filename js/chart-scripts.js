let ctx = document.getElementById('chart').getContext('2d');
let myChart;
let previous = 'bar';

function createChart(type){
    myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Test Data',
                fillOpacity: 1,
                data: [9, 1, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            title: {
                display: true,
                text: 'Lorem ipsum dolor sit.'
            }
        }
    });
    myChart.update();
}

function toggle(type){
    if(type == "pie") {
        myChart.destroy();
        createChart('pie');
        previous = 'pie';
    }
    if(type == "bar") {
        myChart.destroy();
        createChart('bar');
        previous = 'bar';
    }
}

createChart('bar');

var chart = Highcharts.chart('cont', {
    chart: {
            type: 'column'
    },
    title: {
            text: ''
    },
    subtitle: {
            text: ''
    },
    xAxis: {
            categories: ['一月', '二月', '三月', '四月', '五月', '六月',
                                     '七月', '八月', '九月', '十月', '十一月', '十二月']
    },
    yAxis: {
            labels: {
                    x: -15
            },
            title: {
                    text: ''
            }
    },
    series: [{
            name: '',
            data: [434, 523, 345, 785, 565, 843, 726, 590, 665, 434, 312, 432]
    }],
    responsive: {
            rules: [{
                    condition: {
                            maxWidth: 500
                    },
                    // Make the labels less space demanding on mobile
                    chartOptions: {
                            xAxis: {
                                    labels: {
                                            formatter: function () {
                                                    return this.value.replace('月', '');
                                            }
                                    }
                            },
                            yAxis: {
                                    labels: {
                                            align: 'left',
                                            x: 0,
                                            y: -2
                                    },
                                    title: {
                                            text: ''
                                    }
                            }
                    }
            }]
    }
});
function setSize(width) {
    chart.setSize(width, 300);
}









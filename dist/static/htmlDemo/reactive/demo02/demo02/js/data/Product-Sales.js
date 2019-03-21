var dom = document.getElementById("Product-Sales");
var myChart = echarts.init(dom);
// var app = {};
// option = null;
// app.title = '折柱混合';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Site A', 'Site B'],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#ffffff' //字体颜色
        }
    },
    xAxis: [{
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        }
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 210,
            interval: 30,
            axisLabel: {
                formatter: '{value}'
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    series: [{
            name: 'Site A',
            type: 'bar',
            color: "#ff4c52",
            data: [7.2, 5.3, 6.1, 32.1, 23.1, 89.2, 158.4, 178.1, 36.4, 22.7, 7.1, 9.4]
        },
        {
            name: 'Site B',
            type: 'bar',
            color: "#3e8ef7",
            data: [19.4, 7.9, 8.9, 27.9, 24.8, 88.1, 167.8, 197.5, 47.1, 16.7, 7.1, 1.5]
        }
    ],
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
// window.addEventListener("resize", function () {
//     myChart.resize();
// })
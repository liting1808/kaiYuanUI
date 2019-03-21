var dom = document.getElementById("avg");
var myChart6 = echarts.init(dom);
// var app = {};
// option = null;
// app.title = '折柱混合';


option = {
    backgroundColor: '#323437',

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    // legend: {
    //     icon: 'rect',
    //     itemWidth: 14,
    //     itemHeight: 5,
    //     itemGap: 13,
    //     data: ['增长数'],
    //     right: '4%',
    //     textStyle: {
    //         fontSize: 12,
    //         color: '#F1F1F3'
    //     }
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
        //data: ['4号', '5号', '6号', '10号', '11号', '14号', '15号', '19号', '20号', '22号', '33号', '35号', '54号', '58号', '60号']
    }],
    yAxis: [{
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    grid: {
        x: 0,
        y: 10,
        x2: 0,
        y2: 5,
        borderWidth: 1
    },
    series: [{
        name: '增长数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5ff6e9'
                }, {
                    offset: 0.8,
                    color: '#7370fd'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [100, 120, 90, 134, 80, 120, 110, 125, 145, 122, 110, 122, 89, 112, 34, 120]
    }]
};
if (option && typeof option === "object") {
    myChart6.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart6.resize();
})

var dom = document.getElementById("Line");
var myChart11 = echarts.init(dom);
app.title = '多 X 轴示例';
var colors = ['#5793f3', '#d14a61', '#675bba'];


option = {
    color: colors,

    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            //data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
	            show: false
	        }
        }
    ],
    series: [
        {
            name:'2015 降水量',
            type:'line',
            xAxisIndex: 1,
            smooth: true,
            data: [-0.10 , 0.39 , 0.78 , 0.99 , 0.95 , 0.68 , 0.24 , -0.26 , -0.68 , -0.95 , -0.98 , -0.77]
        },
        {
            name:'2016 降水量',
            type:'line',
            smooth: true,
            data: [1.0 , 0.92 , 0.62 , 0.17 , -0.32 , -0.74 , -0.97 , -0.97 , -0.73 , -0.69 , -0.31 , 0.19]
        }
    ]
};
if (option && typeof option === "object") {
    myChart11.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart11.resize();
})
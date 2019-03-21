var dom = document.getElementById("earning");
var myChart8 = echarts.init(dom);

var dataAxis = ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
var data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
var yMax = 200;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
    // title: [
    //     // {
    //     //     text: '1,125',
    //     //     subtext: 'User Online\n845 avg',
    //     //     padding: 20, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
    //     //     itemGap: 10, //主副标题间隔
    //     //     textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
    //     //         fontSize: 18,
    //     //         color: "#d2d9e7"
    //     //     },
    //     //     subtextStyle: { //副标题文本样式{"color": "#aaa"}
    //     //         fontSize: 13,
    //     //         color: "#c2c8d4",
    //     //     }
    //     // },
    //     {
    //         text: '+55.6%',
    //         top: "10%",
    //         right:"5%",
    //         width: "60px",
    //         height: "28px",
    //         borderRadius: 5,
    //         backgroundColor: "#3e8ef7",
    //         textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
    //             fontSize: 18,
    //             color: "#d2d9e7"
    //         }
    //      }
    // ],
    grid: {
        x: 10,      //图表距左
        y: 50,      //图表距上
        x2: 5,      //图表距右
        y2: 15,     //图表距下
        borderWidth: 1
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
            textStyle: {
                color: '#fff'
            }
        },
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
        },
        z: 10
    },
    yAxis: {
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
    },
    dataZoom: [{
        type: 'inside'
    }],
    series: [{ // For shadow
            type: 'bar',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0.05)'
                }
            },
            barGap: '-50%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#ba69aa'
                            },
                            {
                                offset: 0.5,
                                color: '#ba69aa'
                            },
                            {
                                offset: 1,
                                color: '#ba69aa'
                            }
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: '#ba69aa'
                            },
                            {
                                offset: 0.7,
                                color: '#ba69aa'
                            },
                            {
                                offset: 1,
                                color: '#ba69aa'
                            }
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

// Enable data zoom when user click bar.
var zoomSize = 6;
myChart8.on('click', function (params) {
    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    myChart8.dispatchAction({
        type: 'dataZoom',
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    });
});

if (option && typeof option === "object") {
    myChart8.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart8.resize();
})
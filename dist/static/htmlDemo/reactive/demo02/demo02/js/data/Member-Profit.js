var dom = document.getElementById("Member-Profit");
var myChart9 = echarts.init(dom);
// var app = {};
// option = null;
// app.title = '折柱混合';


option = {
    title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: 'Member Profit', //主标题文本，'\n'指定换行
        subtext: '+$17,800　　　　　　　　　　　-1.35%', //副标题文本，'\n'指定换行
        x: 'left', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        padding: 30, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
        itemGap: 20, //主副标题纵向间隔，单位px，默认为10
        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 20,
            color: "#d2d9e7"
        },
        subtextStyle: { //副标题文本样式{"color": "#aaa"}
            fontSize: 16,
            color: "#c2c8d4",
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
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
        }
    },
    grid: {
         x: 10,
         y: 50,
         x2: 5,
         y2: 15,
         borderWidth: 1
     },
    series: [{
        data: [3, 2, 3, 4, 6, 8, 7, 5, 6, 7, 8, 20],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            normal: {
                color: "#000"
            },
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8a8a8a'
                }, {
                    offset: 1,
                    color: '#8a8a8a'
                }])
            }
        },
    }]
}
if (option && typeof option === "object") {
    myChart9.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart9.resize();
})
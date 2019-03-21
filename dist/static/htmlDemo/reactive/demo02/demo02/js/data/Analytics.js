var dom = document.getElementById("Analytics");
var myChart5 = echarts.init(dom);

option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Max temp','Min temp'],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#d2d9e7' //字体颜色
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        axisLine:{
            lineStyle:{
                color:'#ffffff',
                // width:8,//这里是为了突出显示加上的
            }
        } 

    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        },
         axisLine:{
            lineStyle:{
                color:'#ffffff',
                // width:8,//这里是为了突出显示加上的
            }
        } 
    },
    series: [
        {
            name:'Max temp',
            type:'line',
            data:[10, 8, 14, 19, 17, 12, 14],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            color:"#0bb2d4",
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'Min temp',
            type:'line',
            data:[2, -3, 1, 6, 4, 5, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            color:"#17b3a3",
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
if (option && typeof option === "object") {
    myChart5.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart5.resize();
})
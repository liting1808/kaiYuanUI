var dom = document.getElementById("change");
var myChart9 = echarts.init(dom);

var xData = function() {
    var data = [];
    for (var i = 1; i < 22; i++) {
        data.push(i+"月");
    }
    return data;
}();
var option = {
    title: {
      "text": "",
      subtext:"",
      top:'12%',
      "left": "10%",
      "subtextStyle": {
        "color": "#fff",
        fontWeight:800,
        fontSize:16
      },
      textStyle:{
          "color": "#fff",
        fontSize:28
      }
    },
    color: ['#4162ff', '#c78b42', '#CD3F2A', '#ff6e72', '#9692ff'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '2%',
        right: '5%',
        bottom: '5%',
        top: '15%',
        containLabel: true,
        z: 22
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#f2f2f2']
            }
        },
         axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                color: 'rgb(170,170,170)',
                formatter: '{value} '
            }
    }],
    xAxis: [{
        type: 'category',
         axisLine: {
            lineStyle: {
                color: '#0c3b71'
            }
        },
        axisLabel: {
            show: true,
             color: 'rgb(170,170,170)',
             fontSize:14
        },
        data:xData
    }],
    series: [{
            name: '第一产业',
            type: 'bar',
            stack: '总量',
            barWidth: '16px',
            data: [50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            // markArea: areaStyle
        },
        {
            name: '第二产业',
            type: 'bar',
            stack: '总量',
            data: [380, 330, 310, 170, 205, 130, 120, 150, 190, 260, 305, 355, 345, 195, 205, 140, 130, 150, 195, 280, 305],
            // markArea: areaStyle
        },
        {
            name: '第三产业',
            type: 'bar',
            stack: '总量',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 120, 120, 50, 50, 50, 50, 50, 50, 50, 50],
            // markArea: areaStyle
        },
        {
            name: '',
            type: 'bar',
            xAxisIndex: 0,
            barWidth: '16px',
            barGap: '-95%',
             itemStyle: {
                normal: {
                    color: 'rgba(255,255,255,0.1)'
                }
            }
        },
      
    ]
};

if (option && typeof option === "object") {
    myChart9.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChart9.resize();
})
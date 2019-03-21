var dom = document.getElementById("advertisers");
var myChart2 = echarts.init(dom);
// var app = {};
// option = null;
// app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'bottom',
        data: ['Abu Dhabi', 'Miami', 'London'],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#ffffff' //字体颜色
        }
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: 335,
                name: 'Abu Dhabi'
            },
            {
                value: 310,
                name: 'Miami'
            },
            {
                value: 234,
                name: 'London'
            }
        ],
        
    }]
};;
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart2.resize();
})
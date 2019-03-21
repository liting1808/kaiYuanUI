var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var dom1 = document.getElementById("container1");
var myChart1 = echarts.init(dom1);
var dom2 = document.getElementById("container2");
var myChart2 = echarts.init(dom2);
var dom3 = document.getElementById("container3");
var myChart3 = echarts.init(dom3);
var dom4 = document.getElementById("container4");
var myChart4 = echarts.init(dom4); 
var app = {};
option = null;
app.title = '环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
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
            color: [ '#d1d1d1','#6fb3ce'],
            data:[
                {value:335, name:''},
                // {value:310, name:'邮件营销'},
                // {value:234, name:'联盟广告'},
                // {value:135, name:'视频广告'},
                {value:1548, name:''}
            ]
        }
    ]
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
    myChart1.setOption(option, true);
    myChart2.setOption(option, true);  
    myChart3.setOption(option, true);
    myChart4.setOption(option, true); 
}
      
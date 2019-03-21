var dom = document.getElementById("barChart3");
var myChart18 = echarts.init(dom);

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[15, 20, 70, 51, 36, 85, 50]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[28, 48, 40, 19, 86, 27, 90]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[8, 28, 50, 29, 76, 77, 40]
        }
    ]
};

if (option && typeof option === "object") {
    myChart18.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart18.resize();
})
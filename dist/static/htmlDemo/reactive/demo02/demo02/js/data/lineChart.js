var dom = document.getElementById("lineChart");
var myChart19 = echarts.init(dom);

option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[86, 114, 106, 106, 107, 111, 133]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[282, 350, 411, 502, 635, 809, 947]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[168, 170, 178, 190, 203, 276, 408]
        },
        {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[40, 20, 10, 16, 24, 38, 74]
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[6, 3, 2, 2, 3, 26, 73]
        }
    ]
};

if (option && typeof option === "object") {
    myChart19.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart19.resize();
})
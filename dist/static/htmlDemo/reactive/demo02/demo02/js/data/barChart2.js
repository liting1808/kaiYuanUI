var dom = document.getElementById("barChart2");
var myChart17 = echarts.init(dom);

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['MyfirstDataSet', 'MysecondDataSet']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
        {
            name: 'MyfirstDataSet',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [10, 59, 40, 75, 50, 45, 80]
        },
        {
            name: 'MysecondDataSet',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [48, 88, 50, 58, 34, 67, 65]
        }
    ]
};

if (option && typeof option === "object") {
    myChart17.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart17.resize();
})
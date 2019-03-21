var dom = document.getElementById("horizontal");
var myChart16 = echarts.init(dom);

option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
    },
    series: [
        {
            name: '',
            type: 'bar',
            data: [8545, 6589, 5894, 4985, 1548, 3652]
        }
    ]
};

if (option && typeof option === "object") {
    myChart16.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart16.resize();
})
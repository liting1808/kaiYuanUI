var dom = document.getElementById("Full");
var myChart12 = echarts.init(dom);

option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [80, 120, 135, 110, 155, 150, 170, 190, 300],
        type: 'line',
        areaStyle: {}
    }]
};

if (option && typeof option === "object") {
    myChart12.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart12.resize();
})
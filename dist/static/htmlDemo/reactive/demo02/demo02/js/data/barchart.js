var dom = document.getElementById("barChart");
var myChart15 = echarts.init(dom);

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
    },
    series: [{
        data: [8545, 6589, 5894, 4985, 1548, 2670, 6230],
        type: 'bar'
    }]
};

if (option && typeof option === "object") {
    myChart15.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart15.resize();
})

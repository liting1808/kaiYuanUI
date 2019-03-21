var dom = document.getElementById("Donut");
var myChart14 = echarts.init(dom);

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['Jan-Apr','May-Aug','Sep-Dec']
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
            data:[
                {value:220, name:'Jan-Apr'},
                {value:350, name:'May-Aug'},
                {value:440, name:'Sep-Dec'}
            ]
        }
    ]
};

if (option && typeof option === "object") {
    myChart14.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart14.resize();
})
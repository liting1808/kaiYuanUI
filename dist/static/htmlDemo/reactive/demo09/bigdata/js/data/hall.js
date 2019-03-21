var dom = document.getElementById("hall");
var myChart8 = echarts.init(dom);

option = {
	grid: {
        left: '1%',
        right: '4%',
        top: "15%",
        bottom: '5%',
        containLabel: true
	},
    xAxis: {
        type: 'category',
        data: ['8:30', '9:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:30', '17:30', '18:30', '19:30', '20:30'],
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:0,//这里是为了突出显示加上的
            }
        } 
    },
    yAxis: {
        type: 'value',
        //设置轴线的属性
        axisLine:{
            lineStyle:{
                color:'#fff',
                width:0,//这里是为了突出显示加上的
            }
        } 
    },
    series: [{
        data: [4, 5, 9, 5, 3, 15, 10, 7, 12, 17, 20, 11, 6],
        type: 'line'
    }]
};


if (option && typeof option === "object") {
    myChart8.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChart8.resize();
})
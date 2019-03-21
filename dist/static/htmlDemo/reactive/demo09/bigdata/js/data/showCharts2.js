function showCharts2(){
    var dom = document.getElementById("showCharts2");
    var myChart4 = echarts.init(dom);

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 50,
            top:30,
            data: ['本月已办业务：6200户']
        },
        series: [{
            name: '本月已办业务：6200户',
            type: 'pie',
            radius: ['60%', '70%'],
            color:'#FF4500',
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 40.00,
                name: '注销事项数',
                
                label: {
                    normal: {
                        formatter: '{d}.00',
                        textStyle: {
                            fontSize: 50
                        }
                    }
                }
            }, {
                value: 60,
                name: '其他事项数',
                label: {
                    normal: {
                        formatter: '\n业务率',
                        textStyle: {
                            color: '#555',
                            fontSize: 30
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#aaa'
                    },
                    emphasis: {
                        color: '#aaa'
                    }
                },
            }]
        }]
    };

    if (option && typeof option === "object") {
        myChart4.setOption(option, true);
    }

    window.addEventListener("resize", function () {
        myChart4.resize();
    })
}
function showCharts3(){
    var dom = document.getElementById("showCharts3");
    var myChart5 = echarts.init(dom);

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 50,
            top:30,
            data: ['累计已达成：4334万']
        },
        series: [{
            name: '累计已达成：4334万',
            type: 'pie',
            radius: ['60%', '70%'],
            color:'#04fff9',
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 100,
                name: '注销事项数',
                
                label: {
                    normal: {
                        formatter: '{d}',
                        textStyle: {
                            fontSize: 50
                        }
                    }
                }
            }, {
                value: 0,
                name: '其他事项数',
                label: {
                    normal: {
                        formatter: '\n完成率',
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
        myChart5.setOption(option, true);
    }

    window.addEventListener("resize", function () {
        myChart5.resize();
    })
}
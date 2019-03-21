var dom = document.getElementById("wattingCharts");
var myChart1 = echarts.init(dom);

dom.configParameters = {
    pie1Process: {
        min: 0,
        max: 100
    },
    pie2Process: {
        min: 0,
        max: 100
    },
    pie3Process: {
        min: 0,
        max: 100
    },
};

dom.config = {
    message: 'dat.gui',
    pie1Process: 25,
    pie2Process: 50,
    pie3Process: 75,
    pie1Color: '#3dd4de',
    pie2Color: '#b697cd',
    pie3Color: '#a6f08f',
    onChange: function() {
        var tempOption = {
            title: {
                text: parseInt(dom.config.pie2Process),
                textStyle: {
                    color: dom.config.pie2Color,
                }
            },
            series: [{
                data: [{
                    value: parseInt(dom.config.pie1Process),
                    itemStyle: {
                        normal: {
                            color: dom.config.pie1Color,
                            shadowColor: dom.config.pie1Color,
                        }
                    },
                    label: {
                        normal: {
                            formatter: '{d}',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '35',
                                fontWeight: 'normal',
                                color: dom.config.pie1Color
                            }
                        }
                    },
                }, {
                    value: 100 - parseInt(dom.config.pie1Process),
                    itemStyle: placeHolderStyle,

                }]
            }, {
                data: [{
                    value: parseInt(dom.config.pie2Process),
                    itemStyle: {
                        normal: {
                            color: dom.config.pie2Color,
                            shadowColor: dom.config.pie2Color,
                        }
                    }
                }, {
                    value: 100 - parseInt(dom.config.pie2Process),
                    itemStyle: placeHolderStyle,
                }]
            }, {
                data: [{
                    value: parseInt(dom.config.pie3Process),
                    label: {
                        normal: {
                            formatter: '{d}',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '35',
                                fontWeight: 'normal',
                                color: dom.config.pie3Color
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: dom.config.pie3Color,
                            shadowColor: dom.config.pie3Color,
                        }
                    }
                }, {
                    value: 100 - parseInt(dom.config.pie3Process),

                    itemStyle: placeHolderStyle,
                }]
            }]
        }
        myChart1.setOption(tempOption);
    }
};

var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};

var placeHolderStyle = {
    normal: {
        color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
    }
};

option = {
    title: {
        text: '50',
        x: '41%',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            color: '#b697cd',
            fontSize: 35
        }
    },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: [
        {
            name: 'Pie1',
            type: 'pie',
            clockWise: false,
            radius: [50, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['10%', '50%'],
            data: [{
                value: 25,
                label: {
                    normal: {
                        formatter: '{d}',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '35',
                            fontWeight: 'normal',
                            color: '#3dd4de'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3dd4de',
                        shadowColor: '#3dd4de',
                        shadowBlur: 10
                    }
                }
            }, {
                value: 75,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, 
        {
            name: 'Pie2',
            type: 'pie',
            clockWise: false,
            radius: [50, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['45%', '50%'],
            data: [{
                value: 50,
                itemStyle: {
                    normal: {
                        color: '#b697cd',
                        shadowColor: '#b697cd',
                        shadowBlur: 10
                    }
                }
            }, {
                value: 50,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, 
        {
            name: 'Pie3',
            type: 'pie',
            clockWise: false,
            radius: [50, 55],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['80%', '50%'],
            data: [{
                value: 75,
                label: {
                    normal: {
                        formatter: '{d}',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '35',
                            fontWeight: 'normal',
                            color: '#a6f08f'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#a6f08f',
                        shadowColor: '#a6f08f',
                        shadowBlur: 10
                    }
                }
            }, {
                value: 25,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }
    ]
}

if (option && typeof option === "object") {
    myChart1.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChart1.resize();
})
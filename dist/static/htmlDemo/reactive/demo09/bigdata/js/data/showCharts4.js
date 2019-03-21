function showCharts4(){
    var dom = document.getElementById("showCharts4");
    var myChart6 = echarts.init(dom);

    var passCount = 30;
    var passRate = 0.3;
    var passPercentage = passRate * 100 + '%';

    var doingCount = 50;
    var doingRate = 0.5;
    var doingPercentage = doingRate * 100 + '%';

    var hahaCount = 70;
    var hahaRate = 0.7;
    var hahaPercentage = hahaRate * 100 + '%';

    dom = {
        normal: {
            label: {
                show: false
            },
            position: 'center',
            labelLine: {
                show: false
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        }
    };
    let lightBlue = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#99da69' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#01babc' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    let lightBlueBoder = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#01babc' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#99da69' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    let lightYellow = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgb(254,121,28)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgb(240,170,32)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    let lightYellowBorder = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgb(240,170,32)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgb(254,121,28)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    let lightRed = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgb(225,94,94)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgb(247,118,118)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    let lightRedBorder = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgb(209,66,66)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgb(244,64,64)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    option = {
        title: [{
                text: '本月退库',
                left: '20%',
                top: '80%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '20',
                    color: 'rgb(67,140,193)',
                    textAlign: 'center',
                },
            }, {
                text: '出口退库',
                left: '50%',
                top: '80%',
                textAlign: 'center',
                textStyle: {
                    color: 'rgb(207,124,80)',
                    fontWeight: 'normal',
                    fontSize: '20',
                    textAlign: 'center',
                },
            },
            {
                text: '一般退库',
                left: '80%',
                top: '80%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '20',
                    color: 'rgb(67,140,193)',
                    textAlign: 'center',
                },
            }
        ],

        graphic: [
        	{
                type: 'text',
                left: '17%',
                top: '45%',
                style: {
                    text: passCount,
                    fill: '#fff',
                    width: 30,
                    height: 30,
                    fontSize: 30,
                }
            },
            {
                type: 'text',
                left: '47%',
                top: '45%',
                style: {
                    text: doingCount,
                    fill: '#fff',
                    width: 30,
                    height: 30,
                    fontSize: 30,
                }
            },
            {
                type: 'text',
                left: '77%',
                top: '45%',
                style: {
                    text: hahaCount,
                    fill: '#fff',
                    width: 30,
                    height: 30,
                    fontSize: 30,
                }
            }
        ],

        series: [{
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '30%'],
                center: ['20%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: passRate * 100,
                        itemStyle: {
                            normal: {
                                color: lightBlue
                            }
                        },
                    }, {
                        value: 133.3 - passRate * 100,
                        itemStyle: dom,
                    },

                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '30%'],
                center: ['50%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: doingRate * 100,
                    itemStyle: {
                        normal: {
                            color: lightYellow
                        }
                    },
                }, {
                    value: 133.3 - doingRate * 100,
                    itemStyle: dom,
                }, ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '30%'],
                center: ['80%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: hahaRate * 100,
                        itemStyle: {
                            normal: {
                                color: lightRed
                            }
                        },
                    }, {
                        value: 133.3 - hahaRate * 100,
                        itemStyle: dom,
                    },

                ]
            },

            //外圈的边框
            {
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['35%', '40%'],
                center: ['20%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 75,
                        itemStyle: {
                            normal: {
                                color: lightBlueBoder
                            }
                        },
                    }, {
                        value: 25,
                        itemStyle: dom,
                    },

                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '40%'],
                center: ['50%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 75,
                        itemStyle: {
                            normal: {
                                color: lightYellowBorder
                            }
                        },
                    }, {
                        value: 25,
                        itemStyle: dom,
                    },

                ]
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '40%'],
                center: ['80%', '50%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                        value: 75,
                        itemStyle: {
                            normal: {
                                color: lightRedBorder
                            }
                        },
                    }, {
                        value: 25,
                        itemStyle: dom,
                    },

                ]
            }
        ]
    };


    if (option && typeof option === "object") {
        myChart6.setOption(option, true);
    }

    window.addEventListener("resize", function () {
        myChart6.resize();
    })

}
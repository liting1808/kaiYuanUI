(function showCharts1(){
    var dom = document.getElementById("showCharts1");
    var myChart3 = echarts.init(dom);

    var passCount = 20;
    var passRate = 0.2;
    var passPercentage = passRate * 100 + '%';

    var doingCount = 45;
    var doingRate = 0.45;
    var doingPercentage = doingRate * 100 + '%';

    var hahaCount = 73;
    var hahaRate = 0.73;
    var hahaPercentage = hahaRate * 100 + '%';

    var eeCount = 95;
    var eeRate = 0.95;
    var eePercentage = eeRate * 100 + '%';

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

    let lightGreen = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgb(64,238,81)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgb(52,214,67)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    let lightGreenBorder = {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgb(13,185,29)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgb(6,181,22)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }

    option = {
        title: [{
                text: '正常管理（总）',
                left: '13%',
                top: '80%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '20',
                    color: 'rgb(67,140,193)',
                    textAlign: 'center',
                },
            }, {
                text: '营改增（总）',
                left: '38%',
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
                text: '新登记（总）',
                left: '63%',
                top: '80%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '20',
                    color: 'rgb(67,140,193)',
                    textAlign: 'center',
                },
            }, {
                text: '注销（月）',
                left: '88%',
                top: '80%',
                textAlign: 'center',
                textStyle: {
                    color: 'rgb(207,124,80)',
                    fontWeight: 'normal',
                    fontSize: '20',
                    textAlign: 'center',
                }
            }
        ],

        graphic: [
            {
                type: 'text',
                left: '10%',
                top: '43%',
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
                left: '35%',
                top: '43%',
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
                left: '60%',
                top: '43%',
                style: {
                    text: hahaCount,
                    fill: '#fff',
                    width: 30,
                    height: 30,
                    fontSize: 30,
                }
            },
            {
                type: 'text',
                left: '85%',
                top: '43%',
                style: {
                    text: eeCount,
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
                center: ['13%', '50%'],
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
                center: ['38%', '50%'],
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
                center: ['63%', '50%'],
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
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '30%'],
                center: ['88%', '50%'],
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
                    value: eeRate * 100,
                    itemStyle: {
                        normal: {
                            color: lightGreen
                        }
                    },
                }, {
                    value: 133.3 - eeRate * 100,
                    itemStyle: dom,
                }, ]
            },

            //外圈的边框
            {
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['35%', '40%'],
                center: ['13%', '50%'],
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
                center: ['38%', '50%'],
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
                center: ['63%', '50%'],
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
            },
            {
                type: 'pie',
                hoverAnimation: false,
                radius: ['35%', '40%'],
                center: ['88%', '50%'],
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
                                color: lightGreenBorder
                            }
                        },
                    }, {
                        value: 25,
                        itemStyle: dom,
                    },

                ]
            },
        ]
    };


    if (option && typeof option === "object") {
        myChart3.setOption(option, true);
    }

    window.addEventListener("resize", function () {
        myChart3.resize();
    })

})()
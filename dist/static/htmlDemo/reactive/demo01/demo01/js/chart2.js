(function () {
    var dom = document.getElementById("tu1");
    var myChart = echarts.init(dom);
    var xData = function () {
        var data = [];
        for (var i = 1; i < 13; i++) {
            data.push(i);
        }
        return data;
    }();

    option = {
        backgroundColor: "#323437",
        "title": {
            x: "4%",

            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#fff"
                }

            },
        },
        "grid": {
            "borderWidth": 0,
            "top": "10%",
            "bottom": "10%",
            "left": "10%",
            "right": "5%",
            textStyle: {
                color: "#fff"
            }
        },
        "legend": {
            x: '30%',
            top: '11%',
            textStyle: {
                color: '#90979c',
            },
            "data": ['女', '男', '平均']
        },


        "calculable": true,
        "xAxis": [{
            "type": "category",
            "axisLine": {
                lineStyle: {
                    color: '#90979c'
                }
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,

            },
            "data": xData,
        }],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#90979c'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,

            },
            "splitArea": {
                "show": false
            },

        }],
        "series": [{
                "name": "女",
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,144,128,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff"
                            },
                            "position": "insideTop",
                            formatter: function (p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    709,
                    191,
                    245,
                    261,
                    171,
                    143,
                    154,
                    328,
                    520,
                    332,
                    248,
                    407
                ],
            },

            {
                "name": "男",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(0,191,183,1)",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    327,
                    176,
                    507,
                    120,
                    80,
                    48,
                    204,
                    130,
                    100,
                    91,
                    31,
                    20
                ]
            }, {
                "name": "总数",
                "type": "line",
                "stack": "总量",
                symbolSize: 10,
                symbol: 'circle',
                "itemStyle": {
                    "normal": {
                        "color": "rgba(252,230,48,1)",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function (p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    106,
                    393,
                    262,
                    310,
                    219,
                    115,
                    148,
                    475,
                    609,
                    423,
                    285,
                    428
                ]
            },
        ]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu2");
    var myChart = echarts.init(dom);
    let data = []
    let color = [
        '#0580F2',
        '#FAA732',
        '#E1575D',
        '#8B73CC',
        '#8CD123',
        '#4B53BA',
        '#429588',
        '#1CCADA'
    ]
    for (let i = 0; i <= 7; i++) {
        let theta = i / 70 * 360
        let r = 5 * (1 + Math.sin(theta / 180 * Math.PI))
        data.push({
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            value: [r, theta]
        })
    }
    option = {
        backgroundColor: '#323437',
        color: ['rgba(5,128,242,0.2)'],
        polar: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#CCCCCC'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EEEEEE'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#666666'
                }
            },
            startAngle: 0
        },
        radiusAxis: {
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#EEEEEE'
                }
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    fontSize: 12,
                    color: '#666666'
                },
                margin: -13
            }
            // data: ['0', '20%', '40%', '60%', '80%']
        },
        series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            symbol: 'circle',
            symbolSize: [6, 6],
            areaStyle: {
                normal: {
                    color: 'rgba(5,128,242,0.2)'
                }
            },
            data: data
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu3");
    var myChart = echarts.init(dom);
    option = {
        backgroundColor: '#323437',
        title: {
            text: '请求数',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['移动', '电信', '联通'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },

            position: 'bottom',
            offset: 20,
            data: ['', '', '', '', '', '', '', '', '', '', {
                value: '周六',
                textStyle: {
                    align: 'left'
                }
            }, '周日']
        }],
        yAxis: [{
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '移动',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12

                }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
            name: '电信',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
            name: '联通',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: 'rgb(219,50,51)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        }, ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu4");
    var myChart = echarts.init(dom);
    option = {
        backgroundColor: '#323437',
        title: {
            textStyle: {
                fontWeight: 'normal',
                fontSize: 28,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect', //设置图例的图形形状，circle为圆，rect为矩形
            itemWidth: 14, //图例标记的图形宽度[ default: 25 ] 
            itemHeight: 5, //图例标记的图形高度。[ default: 14 ] 
            itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ] 
            data: ['移动', '电信', '联通'],
            right: '4%', //图例组件离容器右侧的距离
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%', //grid 组件离容器左侧的距离。
            right: '4%', //grid 组件离容器右侧的距离。
            bottom: '3%', //grid 组件离容器下侧的距离。
            containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
            axisLine: {
                lineStyle: {
                    color: '#F1F1F3' //坐标轴线线的颜色。
                }
            },
            data: ['01', '02', '03', '04', '05', '06',
                '07', '08', '09', '10', '11', '12',
                '13', '14', '15'
            ]
        }],
        yAxis: [{
            type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
            name: '（件）', //坐标轴名称。
            axisTick: {
                show: false //是否显示坐标轴刻度
            },
            axisLine: {
                lineStyle: {
                    color: '#F1F1F3' //坐标轴线线的颜色
                }
            },
            axisLabel: {
                margin: 10, //刻度标签与轴线之间的距离
                textStyle: {
                    fontSize: 12 //文字的字体大小
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B' //分隔线颜色设置
                }
            }
        }],
        series: [{
            name: '日调用数量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [152, 289, 283, 296, 324, 256, 164, 157, 328, 334, 342, 395, 485,
                267, 200, 394, 519
            ]
        }, ]
    };;
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu5");
    var myChart = echarts.init(dom);
    var giftImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAB4UlEQVRoge2Z7ZGCMBRFLcEStgRLoARLoAPpYNOBdrB2sHawdAAdSAfawdkfCbMRDQmQF2DHO5M/Du9yz+QbN5u33oojoCSeKuAT2K0VwNYX8LFmAIAbsF8zQKt87QAg1RMJAW7ANiVANsBjB1wCINQiASyv3NcLiwYwfsoDEXcuCABsgXsPgFo0gPHsmw/neOk3YgB9w6iMl34zSw9cIsYXmwO3HgC1dIBTT3hY8iqEfx8gavhYAOid+NsXntgrkAegAn4CWt94t3Un8VkotvLo4RMCKJHwiQBysfDCACUpLveRARr0PpCJBw8AKIAssH0kCzwAIIv4juPIHj3ODsDj7lyb9/labdXkcwNcjV8xsK4wdZXvQTEA9BEDGHcGsrK4VzNhgLPxKkfWt9lOIQ9JALTnJDWyvr3Zub9mSAHwOHlHeaGX6Fav7xESAOhbWeXwHauKV6dZIYDC4TlVzyuZEIDtWaPHcv36NU41ps72KlMDNJhuRw+rIdpafs1cAFXn92toeodfcgCAA3pDG3oeOpq6g/VbMgDfp5Wxet7QhAAyh+dUPWeSADC++45fQ9hJtG1Npz7dRmZ8u72gBtaroDz/AeDk6MJJF3L0un82Xpehfvz971Yan/gfxd6aoF+Wa+m2l3YWQgAAAABJRU5ErkJggg==";
    var startColor = ['#FC9315', '#FC5515', '#FC3415', '#FC2415', '#FC1121'];
    var middleColor = ['#FDB721', '#FD8E21', '#FD6921', '#FD4A21', '#FD4A21'];
    var endColor = ['#54432E', '#855A27', '#864F2A', '#89462C', '#853930'];
    var StartData = [{
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        }
    ];
    var MiddleData = [{
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        },
        {
            value: 100,
            name: ''
        }
    ];
    var EndData = [{
            value: 100,
            name: '停车15分钟',
            itemStyle: {
                color: '#54432E'
            }
        },
        {
            value: 100,
            name: '停车15-60分钟',
            itemStyle: {
                color: '#855A27'
            }
        },
        {
            value: 100,
            name: '停车1-2小时',
            itemStyle: {
                color: '#864F2A'
            }
        },
        {
            value: 100,
            name: '停车2-4小时',
            itemStyle: {
                color: '#89462C'
            }
        },
        {
            value: 100,
            name: '停车4小时以上',
            itemStyle: {
                color: '#853930'
            }
        }
    ];
    StartData.map(function (item, index) {
        item.itemStyle = {
            normal: {
                color: startColor[index]
            }
        }
    });
    MiddleData.map(function (item, index) {
        item.itemStyle = {
            normal: {
                color: middleColor[index]
            }
        }
    });
    EndData.map(function (item, index) {
        item.itemStyle = {
            normal: {
                color: endColor[index]
            }
        }
    });
    option = {
        backgroundColor: '#323437',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",

        },
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    image: giftImageUrl,
                    width: 50,
                    height: 50
                },
                left: 'center',
                top: 'center'
            }]
        },
        title: {
            text: '平均停车时长',
            left: 'center',
            top: '55%',
            padding: [24, 0],
            textStyle: {
                color: '#fff',
                fontSize: 12,
                align: 'center'
            }
        },
        series: [{
                name: '平均停车时长',
                type: 'pie',
                radius: ['25%', '35%'],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },

                },
                tooltip: {
                    show: false,


                },

                data: StartData
            },
            {
                name: '平均停车时长',
                type: 'pie',
                radius: ['35%', '50%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },

                },
                tooltip: {
                    show: false,


                },

                data: MiddleData
            },
            {
                name: '平均停车时长',
                type: 'pie',
                radius: ['43%', '50%'],
                labelLine: {
                    normal: {
                        show: true,
                        length: 20,
                        length2: 20,
                        lineStyle: {
                            width: 2
                        }
                    }
                },
                label: {
                    normal: {
                        formatter: '{d|{d}%}\n{hr|}\n{b|{b}}',
                        rich: {
                            b: {
                                fontSize: 12,
                                color: '#6164B2',
                                align: 'left',
                                padding: 4
                            },
                            hr: {
                                borderColor: '#12EABE',
                                width: '100%',
                                borderWidth: 2,
                                height: 0
                            },
                            d: {
                                fontSize: 12,
                                color: '#FF9615',
                                align: 'left',
                                padding: 4
                            },
                            c: {
                                fontSize: 12,
                                color: '#fff',
                                align: 'left',
                                padding: 4
                            }
                        }
                    }
                },
                data: [{
                        value: 100,
                        name: '停车15分钟',
                        itemStyle: {
                            color: '#54432E'
                        }
                    },
                    {
                        value: 100,
                        name: '停车15-60分钟',
                        itemStyle: {
                            color: '#855A27'
                        }
                    },
                    {
                        value: 100,
                        name: '停车1-2小时',
                        itemStyle: {
                            color: '#864F2A'
                        }
                    },
                    {
                        value: 100,
                        name: '停车2-4小时',
                        itemStyle: {
                            color: '#89462C'
                        }
                    },
                    {
                        value: 100,
                        name: '停车4小时以上',
                        itemStyle: {
                            color: '#853930'
                        }
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu6");
    var myChart = echarts.init(dom);
    var giftImageUrl = "data:image/png;base64,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";

    option = {
        graphic: {
            elements: [{
                type: 'image',
                style: {
                    image: giftImageUrl,
                    width: 30,
                    height: 30
                },
                left: 'center',
                top: 'center'
            }]
        },
        series: [{
            type: 'pie',
            radius: [30, '55%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            color: ['#f2c955', '#00a69d', '#46d185', '#ec5845'],
            data: [{
                value: 7,
                name: '其他'
            }, {
                value: 4,
                name: '自己制作'
            }, {
                value: 35,
                name: '线下购买'
            }, {
                value: 53,
                name: '网上购买'
            }],
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14
                    },
                    formatter: function (param) {
                        return param.name + ':\n' + Math.round(param.percent) + '%';
                    }
                }
            },
            labelLine: {
                normal: {
                    smooth: true,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.4)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
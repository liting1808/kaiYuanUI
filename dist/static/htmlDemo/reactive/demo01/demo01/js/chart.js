(function () {
    var dom = document.getElementById("tu1");
    var myChart = echarts.init(dom);
    let data = {
        "chart": [{
                month: "1月",
                value: 138,
                ratio: 14.89
            },

            {
                month: "2月",
                value: 114,
                ratio: 79.49
            },

            {
                month: "3月",
                value: 714,
                ratio: 75.8
            },

            {
                month: "4月",
                value: 442,
                ratio: 19.8
            },

            {
                month: "5月",
                value: 622,
                ratio: 44.5
            },


            {
                month: "6月",
                value: 528,
                ratio: 87.3
            }

        ]
    }


    let xAxisMonth = [],
        barData = [],
        lineData = [];
    for (let i = 0; i < data.chart.length; i++) {
        xAxisMonth.push(data.chart[i].month);
        barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
        });
        lineData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].ratio
        });
    }


    var datas = [96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7];
    option = {
        backgroundColor: '#323437',
        title: {
            text: '',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 12,
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
            data: ['受益'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '7%',
            right: '7%',
            bottom: '9%',
            top: '15%',
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                interval: 0,
                rotate: 50,
                textStyle: {
                    fontSize: 12
                }
            },
        }],
        yAxis: [{
            type: 'value',
            interval: 40,
            max: 120,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
            name: '受益',
            type: 'line',
            smooth: true,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(82, 191, 255, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(82, 191, 255, 0)'
                    }], false),
                    shadowColor: 'rgba(228, 139, 76, 0.1)',
                    shadowBlur: 10
                }
            },
            symbolSize: 4,
            itemStyle: {
                normal: {
                    color: 'rgb(82, 191, 255)',
                    borderColor: '#e48b4c'
                },
            },
            data: datas,
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu2");
    var myChart = echarts.init(dom);
    let data = {
        "chart": [{
                month: "1月",
                value: 138,
                ratio: 14.89
            },

            {
                month: "2月",
                value: 114,
                ratio: 79.49
            },

            {
                month: "3月",
                value: 714,
                ratio: 75.8
            },

            {
                month: "4月",
                value: 442,
                ratio: 19.8
            },

            {
                month: "5月",
                value: 622,
                ratio: 44.5
            },


            {
                month: "6月",
                value: 528,
                ratio: 87.3
            }

        ]
    }


    let xAxisMonth = [],
        barData = [],
        lineData = [];
    for (let i = 0; i < data.chart.length; i++) {
        xAxisMonth.push(data.chart[i].month);
        barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
        });
        lineData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].ratio
        });
    }

    option = {
        backgroundColor: '#323437',
        title: '',
        grid: {
            top: '24%',
            left: '15%',
            bottom: '6%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0]["data"].name + "<br/>" + '训练人次: ' + params[1]["data"].value + "<br/>" + '合格率: ' + params[0]["data"].value;
            }
        },
        xAxis: [{
                type: 'category',
                show: false,
                data: ['3月', '4月', '5月', '6月', '7月', '8月'],
                axisLabel: {
                    textStyle: {
                        color: '#1dc4e9'
                    }
                }
            },
            {
                type: 'category',
                position: "bottom",
                data: xAxisMonth,
                boundaryGap: true,
                // offset: 40,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#1dc4e9'
                    }
                }
            }

        ],
        yAxis: [{
            show: true,
            offset: 52,
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#1dc4e9"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                color: '#b6b5ab'
            }
        }, {
            show: false,
            type: "value",
            name: "合格率(%)",
            nameTextStyle: {
                color: '#ccc'
            },
            axisLabel: {
                color: '#ccc'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        color: ['#e54035'],
        series: [{
                name: '训练人次',
                type: 'pictorialBar',
                xAxisIndex: 1,
                barCategoryGap: '-80%',
                // barCategoryGap: '-5%',
                symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                itemStyle: {
                    normal: {
                        color: function (params) {
                            let colorList = [
                                '#1dc4e9', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: barData,
            },
            {
                symbol: 'image://data:image/png;base64,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',
                symbolSize: 42,
                name: "完成率",
                type: "line",
                yAxisIndex: 1,
                data: lineData,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: {
                            colorStops: [{
                                    offset: 0,
                                    color: '#1dc4e9'
                                },

                                {
                                    offset: 1,
                                    color: '#1dc4e9'
                                }
                            ],
                        }
                    }
                }
            }
        ]
    }
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
            data: ['增长数'],
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
                    color: '#00c7ff'
                }
            },
            data: ['4号', '5号', '6号', '10号', '11号', '14号', '15号', '19号', '20号', '22号', '33号', '35号', '54号', '58号', '60号']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#00c7ff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: '增长数',
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
                        color: '#5ff6e9'
                    }, {
                        offset: 0.8,
                        color: '#7370fd'
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
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122, 89, 112, 34]
        }]
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
        "title": {
            "left": "center",
            "y": "10",
            "textStyle": {
                "color": "#fff"
            }
        },
        "backgroundColor": '#323437',
        "color": "#384757",
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            }
        },
        "legend": {
            "data": [{
                    "name": "待处理",
                    "icon": "circle",
                    "textStyle": {
                        "color": "#7d838b"
                    }
                },
                {
                    "name": "已处理",
                    "icon": "circle",
                    "textStyle": {
                        "color": "#7d838b"
                    }
                },
                {
                    "name": "完成率",
                    "icon": "circle",
                    "textStyle": {
                        "color": "#7d838b"
                    }
                }
            ],
            "top": "10%",
            "textStyle": {
                "color": "#fff"
            }
        },
        "xAxis": [{
            "type": "category",
            "data": [
                "1街",
                "2街",
                "3街",
                "4街",
                "5街",
                "6街"
            ],
            "axisPointer": {
                "type": "shadow"
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#7d838b"
                }
            }
        }],
        "yAxis": [{
                "type": "value",
                "name": "不文明现象",
                "nameTextStyle": {
                    "color": "#7d838b"
                },
                "min": 0,
                "max": 50,
                "interval": 10,
                "axisLabel": {
                    "show": true,
                    "textStyle": {
                        "color": "#7d838b"
                    }
                },
                "axisLine": {
                    "show": true
                },
                "splitLine": {
                    "lineStyle": {
                        "color": "#7d838b"
                    }
                }
            },
            {
                "type": "value",
                "name": "完成率",
                "show": true,
                "axisLabel": {
                    "show": true,
                    "textStyle": {
                        "color": "#7d838b"
                    }
                }
            }
        ],
        "grid": {
            "top": "20%"
        },
        "series": [{
                "name": "待处理",
                "type": "bar",
                "data": [
                    4,
                    6,
                    36,
                    6,
                    8,
                    6
                ],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(255,37,117,0.7)"
                                },
                                {
                                    "offset": 0.5,
                                    "color": "rgba(0,133,245,0.7)"
                                },
                                {
                                    "offset": 1,
                                    "color": "rgba(0,133,245,0.3)"
                                }
                            ],
                            "globalCoord": false
                        }
                    }
                }
            },
            {
                "name": "已处理",
                "type": "bar",
                "data": [
                    4,
                    2,
                    36,
                    6,
                    8,
                    6
                ],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "colorStops": [{
                                    "offset": 0,
                                    "color": "rgba(255,37,117,0.7)"
                                },
                                {
                                    "offset": 0.5,
                                    "color": "rgba(0,255,252,0.7)"
                                },
                                {
                                    "offset": 1,
                                    "color": "rgba(0,255,252,0.3)"
                                }
                            ],
                            "globalCoord": false
                        }
                    }
                },
                "barGap": "0"
            },
            {
                "name": "完成率",
                "type": "line",
                "yAxisIndex": 1,
                "data": [
                    100,
                    33,
                    100,
                    100,
                    100,
                    100
                ],
                "itemStyle": {
                    "normal": {
                        "color": "#ffaa00"
                    }
                },
                "smooth": true
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu5");
    var myChart = echarts.init(dom);
    var scale = 1;
    var echartData = [{
        value: 2154,
        name: '阿尔法公司'
    }, {
        value: 3854,
        name: '某迅公司'
    }, {
        value: 3515,
        name: '某度公司'
    }, {
        value: 3515,
        name: '某宝公司'
    }, {
        value: 3854,
        name: '某雷公司'
    }, {
        value: 2154,
        name: '某某公司'
    }]
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 30 * scale,
            padding: [5, 4],
            align: 'center'
        },
        total: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 14 * scale,
            padding: [21, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 16 * scale,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '100%',
            borderWidth: 1,
            height: 0,
        }
    }
    option = {
        backgroundColor: '#323437',
        title: {
            text: '总生产总数',
            left: 'center',
            top: '53%',
            padding: [24, 0],
            textStyle: {
                color: '#fff',
                fontSize: 18 * scale,
                align: 'center'
            }
        },
        legend: {
            selectedMode: false,
            formatter: function (name) {
                var total = 0; //各科正确率总和
                var averagePercent; //综合正确率
                echartData.forEach(function (value, index, array) {
                    total += value.value;
                });
                return '{total|' + total + '}';
            },
            data: [echartData[0].name],
            // data: ['高等教育学'],
            // itemGap: 50,
            left: 'center',
            top: 'center',
            icon: 'none',
            align: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 16 * scale,
                rich: rich
            },
        },
        series: [{
            name: '总生产总数',
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartData.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {
                    length: 55 * scale,
                    length2: 0,
                    lineStyle: {
                        color: '#0b5263'
                    }
                }
            },
            data: echartData
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
(function () {
    var dom = document.getElementById("tu6");
    var myChart = echarts.init(dom);

    option = {
        backgroundColor: '#323437',
        // title: {

        //     textStyle: {
        //         color: '#00FFFF',
        //         fontSize: 24
        //     }
        // },
        legend: {
            top: 20,
            textStyle: {
                color: '#fff',
            },
            data: ['男', '女', '111']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },

        tooltip: {
            show: "true",
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], //内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
            formatter: function (params) {
                if (params.seriesIndex == "3" || params.seriesIndex == "4" || params.seriesIndex == "5") {
                    return params.name + '<br>' + params.seriesName + ' ： 第 ' + params.value + ' 名';
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#363e83 ',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
            },
        },
        xAxis: [{
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#363e83',
                    }
                },
                axisLabel: {
                    inside: false,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'normal',
                        fontSize: '12',
                    },
                    // formatter:function(val){
                    //     return val.split("").join("\n")
                    // },
                },
                data: ['会', '不会', '看情况']
            }, {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: ['会', '不会', '看情况']
            },

        ],
        series: [{
                type: 'bar',
                xAxisIndex: 1,
                zlevel: 1,
                itemStyle: {
                    normal: {
                        color: '#121847',
                        borderWidth: 0,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
                barWidth: '10%',
                data: [30, 30, 30]
            }, {
                type: 'bar',
                xAxisIndex: 1,
                barGap: '100%',
                data: [30, 30, 30],
                zlevel: 1,
                barWidth: '10%',
                itemStyle: {
                    normal: {
                        color: '#121847',
                        borderWidth: 0,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
            }, {
                type: 'bar',
                xAxisIndex: 1,
                barGap: '100%',
                data: [30, 30, 30],
                zlevel: 1,
                barWidth: '10%',
                itemStyle: {
                    normal: {
                        color: '#121847',
                        borderWidth: 0,
                        shadowBlur: {
                            shadowColor: 'rgba(255,255,255,0.31)',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowOffsetY: 2,
                        },
                    }
                },
            }, {
                name: '男',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#f7734e'
                        }, {
                            offset: 1,
                            color: '#e12945'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barWidth: '10%',
                data: [8, 15, 10]
            }, {
                name: '女',
                type: 'bar',
                barWidth: '10%',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#96d668'
                        }, {
                            offset: 1,
                            color: '#01babc'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barGap: '100%',
                data: [8, 17, 26]
            }, {
                name: '111',
                type: 'bar',
                barWidth: '10%',
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1a98f8'
                        }, {
                            offset: 1,
                            color: '#7049f0'
                        }]),
                        barBorderRadius: 50,
                        borderWidth: 0,
                    }
                },
                zlevel: 2,
                barGap: '100%',
                data: [8, 17, 26]
            }

        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();
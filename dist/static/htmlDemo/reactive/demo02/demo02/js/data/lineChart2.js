var dom = document.getElementById("lineChart2");
var myChart20 = echarts.init(dom);

var xData = function() {
    var data = [];
    for (var i = 3; i < 10; i++) {
         data.push("201"+i);
       
    }
    return data;
}();
option = {
    backgroundColor:'#323437',
    title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: 'Yearly Sales Groth', //主标题文本，'\n'指定换行
        x: 'left', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        padding: 30, //标题内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距
        textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontSize: 20,
            color: "#d2d9e7"
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        left: '40%',
        top:'15%',
        textStyle:{
            color:'#FFFFFF'
        },
        data:['Data1','Data2']
    },
     grid: {
        left: '3%',
        right: '3%',
        top:'25%',
        bottom: '3%',
        containLabel: true
    },
    color:['rgba(245, 166, 35, 1)','rgba(19, 173, 255, 1)'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
         	axisLabel: {
	            formatter: '{value}',
	            //  rotate:25,
	            textStyle: {
	                fontSize: 12,
	                color: '#fff'
	            }
        	},
        	// axisLabel: {
	        //     show: false
	        // },
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
            data : xData
        }
    ],
    yAxis : {
            type : 'value',
            axisLine: {
	            show: false
	        },
	        axisLabel: {
	            formatter: '{value}',
	            textStyle: {
	                fontSize: 12,
	                color: '#fff'
	            }
        	}
        }
    ,
    series : [
        {
            name:'Data1',
            type:'line',
            areaStyle: {
                
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(81, 215, 201, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(81, 215, 201, 1)'
                    }], false)
                }
            },
            color:"#51d7c9",
            smooth:true,
            itemStyle: {
                normal: {areaStyle: {type: 'default'}}    
            },
            data:[0,59,40,58,34,45,65,70]
        },
        {
            name:'Data2',
            type:'line',
            areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(118, 185, 234, 1)'
                    }, {
                        offset: 1,
                        color:'rgba(118, 185, 234, 1)'
                    }], false)
                }
            },
            color:"#76b9ea",
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[48,88,50,75,50,67,80,92]
        }
    ]
};

if (option && typeof option === "object") {
    myChart20.setOption(option, true);
}
window.addEventListener("resize", function () {
    myChart20.resize();
})
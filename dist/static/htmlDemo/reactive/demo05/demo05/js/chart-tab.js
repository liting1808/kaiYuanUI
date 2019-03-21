/* // 第二个参数可以指定前面引入的主题
var chart = echarts.init(document.getElementById('tab-be'), 'infographic');
chart.setOption({
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[67, 152, 193, 240, 387, 435, 535, 642, 744]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[287, 385, 490, 562, 594, 626, 698, 895, 952]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[23, 113, 67, 108, 190, 239, 307, 410, 410]
        },
    ]
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
} */


// 第二个参数可以指定前面引入的主题
var myChart = echarts.init(document.getElementById('tab-be'), 'infographic');
var app = {};
option = null;
option={
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[67, 152, 193, 240, 387, 435, 535, 642, 744]
        },
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[287, 385, 490, 562, 594, 626, 698, 895, 952]
        },
        {
            name:'视频广告',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[23, 113, 67, 108, 190, 239, 307, 410, 410]
        },
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}



var dom = document.getElementById("shanchart");
var myChart2 = echarts.init(dom,"infographic");
var app = {};
option = null;
option = {
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '80%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart2.setOption(option, true);
}


var dom = document.getElementById("zhechart");
var myChart3 = echarts.init(dom,"infographic");
var app = {};
option = null;
var option = {
       
    grid: {
        left: '3%',   //图表距边框的距离
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
   
    //x轴信息样式
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //坐标轴颜色
        axisLine:{
            lineStyle:{
                color:'#9a9a9a'
            }
        },
       axisLabel: {
color: "#9a9a9a" //刻度线标签颜色
}
     
    },

    yAxis : [
        {
            min:200,
                    max:900,
                    splitNumber:8,
            
            
            
              axisLine:{
            lineStyle:{
                color:'#9a9a9a',
                
            }
        },
       axisLabel: {
color: "#9a9a9a" ,//刻度线标签颜色


}
     
    
        }
    ],
    series: [
      
        //实线
        {
            name:'分享人数',
            type:'line',
             smooth: true , //true 为平滑曲线，false为直线
            symbol:'circle',
            symbolSize:10,
            itemStyle:{
                normal:{
                    color:'#F3BB45',
                    borderColor:'#F3BB45',  //拐点边框颜色
                      lineStyle:{
                        width:5,
                        type:'solid'  //'dotted'虚线 'solid'实线
                    }
                }
            },
            data:[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
        },
        
       {
            name:'分享人数',
            type:'line',
             smooth: true,  //true 为平滑曲线，false为直线
            symbol:'circle',
            symbolSize:10,
            itemStyle:{
                normal:{
                    color:'#68B3C8',
                    borderColor:'#68B3C8' , //拐点边框颜色
                      lineStyle:{
                        width:5,
                        type:'solid'  //'dotted'虚线 'solid'实线
                    }
                }
              
            },
            data:[230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
        },
       
    ]
};
;
if (option && typeof option === "object") {
    myChart3.setOption(option, true);
}
window.addEventListener("resize", () => { 
        this.myChart.resize();  
        this.myChart2.resize();  
        this.myChart3.resize(); 
        
    });

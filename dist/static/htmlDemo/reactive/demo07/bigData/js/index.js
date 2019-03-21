 //地图
 var mapChart = echarts.init(document.getElementById('CountTab'));
 mapChart.setOption({
    color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
            y : '220',
           x : 'center',
           itemGap:10,
            data : ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',],
            textStyle: {
                color: '#FFFFFF'  // 图例文字颜色
              },
           
       },
       series: [
        {
            name:'采集数据量',
            type:'pie',
             radius : ['40%', '70%'],
            center : ['50%', '45%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '18',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'厦门第一医院'},
                {value:310, name:'厦门中山医院'},
                {value:234, name:'厦门中医院'},
                {value:135, name:'厦门第五医院'}
            ]
        }
    ]
 });
 var mapChart2 = echarts.init(document.getElementById('CountTab2'));
 mapChart2.setOption({
    color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
         y : '220',
        x : 'center',
        itemGap:10,
        textStyle: {
            color: '#ffffff'  // 图例文字颜色
          },
          
          itemGap: 10,
        data: ['厦门第一医院', '厦门中山医院','厦门中医院','厦门第五医院']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '30%',
        containLabel: true
    },
    xAxis:  {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#ffffff',
            }
        } 
    },
    yAxis: {
        type: 'category',
        data: ['门诊人数(人)', '住院人次(人)','人均费用(元)'],
        axisLine:{
            lineStyle:{
                color:'#ffffff',
            }
        } 

    },
    series: [
        {
            name: '厦门第一医院',
            textStyle: {
                fontSize: 14,
                color:"#ffffff"
            },
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301 ]
        },
        {
            name: '厦门中山医院',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101]
        },
        {
            name: '厦门中医院',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191]
        },
         {
            name: '厦门第五医院',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201]
        },
       
    ]
   
    
 });
 var mapChart3 = echarts.init(document.getElementById('CountTab3'));
 mapChart3.setOption({
    color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      legend: {
          y : '220',
          x : 'center',
          textStyle : {
              color : '#ffffff',

          },

           data : ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',],
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '30%',
        containLabel: true
    },
      calculable : false,
      tooltip : {
          trigger: 'item',
          
          formatter: "{a}<br/>{b}<br/>{c}条"
      },
    xAxis: {
        type: 'category',
        data : ['8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
          axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
         axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                },
    },
    yAxis: {
        type: 'value',
         axisLine : {onZero: false},
                axisLine:{
                    lineStyle:{
                        color: '#034c6a'
                    },
                },
        axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "k条"
                    },
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
        
    },
    series: [{
        name:"厦门第一医院",
            data:[15, 0, 20, 45, 22.1, 25, 70, 55, 76],
        type: 'line',
        smooth: true
    },
    {
        name:"厦门中山医院",
        data:[25, 10, 30, 55, 32.1, 35, 80, 65, 76],
        type: 'line',
        smooth: true,
    },
     {
        name:"厦门中医院",
        data:[35, 20, 40, 65, 42.1, 45, 90, 75, 96],
        type: 'line',
        smooth: true
    },
    {
        name:"厦门第五医院",
        data:[45, 30, 50, 75, 52.1, 55, 100, 85, 106],
        type: 'line',
        smooth: true
    }
    ]
 });
 var mapChart4 = echarts.init(document.getElementById('CountTab4'));
 mapChart4.setOption({
   
    color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
    legend: {
        y : '220',
        x : 'center',
        textStyle : {
            color : '#ffffff',

        },

         data : ['厦门第一医院','厦门中山医院','厦门中医院','厦门第五医院',],
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '30%',
      containLabel: true
  },
    calculable : false,
    tooltip : {
        trigger: 'item',
        
        formatter: "{a}<br/>{b}<br/>{c}条"
    },
  xAxis: {
      type: 'category',
      data : ['8:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
        axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },
       axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + ""
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              },
  },
  yAxis: {
      type: 'value',
       axisLine : {onZero: false},
              axisLine:{
                  lineStyle:{
                      color: '#034c6a'
                  },
              },
      axisLabel: {
                  textStyle: {
                      color: '#fff'
                  },
                  formatter: function (value) {
                      return value + "k条"
                  },
              },
              splitLine:{
                  lineStyle:{
                      width:0,
                      type:'solid'
                  }
              }
      
  },
  series: [{
      name:"厦门第一医院",
           data:[15, 0, 20, 45, 22.1, 25,].reverse(),

      type: 'line',
      smooth: true
  },
  {
      name:"厦门中山医院",
                   data:[25, 10, 30, 55, 32.1, 35, ].reverse(),
      type: 'line',
      smooth: true,
  },
   {
      name:"厦门中医院",
      data:[35, 20, 40, 65, 42.1, 45, ].reverse(),
      type: 'line',
      smooth: true
  },
  {
      name:"厦门第五医院",
      data:[45, 30, 50, 75, 52.1, 55, 6].reverse(),
      type: 'line',
      smooth: true
  }
  ]
 });

//百度地图
var map = new BMap.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMap.Point(118.096435, 24.485408), 12);  // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes:[
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]}));	  
map.setCurrentCity("厦门");  
var mapStyle={  style : "midnight" }  
map.setMapStyle(mapStyle);
// 设置地图显示的城市 此项是必须设置的
 map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
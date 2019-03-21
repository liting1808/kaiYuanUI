var dom = document.getElementById("business");
var myChart10 = echarts.init(dom);

option = {
    // backgroundColor: '#424956',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
        data:['2D线','3D线','资源类'],
                textStyle: {
            color: '#fff'
        }
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            hoverAnimation: false,
            legendHoverLink:false,
            radius: ['40%', '42%'],
            color: ['#66c8f6', '#fb965e', '#aef7a0'],
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
               show:false,
               
               
            },
            
            data:[
                {value:654.6, name:''},
                {value:415.6, name:''},
                {value:890, name:''},
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['42%', '55%'],
            color: ['#18b5ff', '#ff5c00', '#5cff3c'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:654.6, name:'业务类型1'},
                {value:415.6, name:'业务类型2'},
                {value:890, name:'业务类型3'},
            ]
        }
    ]
};

if (option && typeof option === "object") {
    myChart10.setOption(option, true);
}

window.addEventListener("resize", function () {
    myChart10.resize();
})
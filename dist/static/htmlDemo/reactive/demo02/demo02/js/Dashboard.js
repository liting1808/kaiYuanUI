// 点击展开，箭头向下，子菜单显示，再次点击收回，箭头向右，子菜单隐藏
var num = 0;
$(".aBox .nav-menu").each(function(){
    $(this).click(function(){
        num++;
        if(num%2==1){
            $(this).css("background", "url(img/Dashboard/jtbot.png) no-repeat 135px center");
        }else{
            $(this).css("background", "url(img/Dashboard/jtrig.png) no-repeat 135px center");
        }
        if($(this).next().css("display")=="block"){
            return $(this).next().hide("slow");
        }else{
            $(".aBox .nav-menu").next().hide("slow");
            $(this).next().show("slow");
        }
        // 点击让子菜单显示
        // $(this).next().toggle("slow");
    })
})

// 点击子菜单，改变颜色和背景图
$(".aBox ul li a").each(function(){
    $(this).click(function(){
        // 点击时先恢复所有的样式
        $(".aBox ul li a").css("color","#8b8d96");
        $(".aBox ul li").css("background","url(img/Dashboard/point.png) left 11px no-repeat");
        // 当前点击的元素添加新的样式
        $(this).css("color","#fbfbfc");
        $(this).parents("li").css("background","url(img/Dashboard/menjt.png) left 9px no-repeat");
    })
})

// 进度条加载
$(function(){
    var width = 0;
    var mytimer = setInterval(function(){
        width++;
        $(".loading").css({
            "width":width+"%"
        })
        if(parseInt($(".loading").css("width"))>=90){
            clearInterval(mytimer);
        }
    }, 16)
})

// 点击菜单按钮，左侧隐藏，再次点击，左侧显示
var n = 0;
$(".menu").click(function(){
    n++;
    if($(".centenBox .nav").css("display")=="none"){
        $(".centenBox .nav").css({
            "display":"block",
            "width":250
        });
    }
    if(n%2==1){
        // 如果当前的li是显示的，则隐藏
        if($(".aBox ul").css("display")=="block"){
            $(".aBox ul").css("display","none");
        }
        $(".logo p").css("display","none");
        $(".navBox h3").css("display","none");
        $(".navBox").css("padding-top","0");
        $($(".navBox")[0]).css("padding-top",20);
        $(".aBox .nav-menu").css("display","none");
        $(".nav").css("width",70);
        $(".logo").css("width",70);
        // 显示侧边栏
        $(".aBox").each(function(){
            // 绑定鼠标滑过事件
            $(this).bind({
                mouseenter:function(){
                    // 每次滑过前先隐藏所有
                    $(".aBox .nav-menu").css({
                        "display":"none"
                    });
                    $(".aBox ul").css({
                        "display":"none"
                    });
                    // 获取当前元素相对于视窗的高度
                    var top = $(this).offset().top;
                    // 显示当前滑过的元素对应的
                    $(this).children(".nav-menu").css({
                        "display":"block",
                        "position":"absolute",
                        "left":80,
                        "top":top
                    });
                    $(this).children("ul").css({
                        "display":"block",
                        "position":"absolute",
                        "left":80,
                        "top":top
                    });
                }
            })
        })
    }else{
        $(".nav").css("width",250);
        $(".logo").css("width",250);
        //隐藏侧边栏
        $(".aBox").each(function(){
            // 取消绑定的鼠标滑过事件
            $(this).unbind("mouseenter")
            // 恢复初始状态
            $(".aBox ul").css({
                "display":"none",
                "position":"static",
            })
            $(".aBox .nav-menu").css({
                "display":"none",
                "position":"static",
            })
        })
        setTimeout(function(){
            $(".logo p").css("display","block");
            $(".navBox h3").css("display","block");
            $(".navBox").css("padding-top",24);
            $(".aBox .nav-menu").css("display","block");
        }, 500)
    }
})

// 点击logo图片，跳转到首页
$(".indexImg").click(function(){
    location.href = "Dashboard.html";
})

// 点击日期下拉菜单，弹出对应的日期选择
var a =0;
$(".select").click(function(){
    a++;
    if(a%2==1){
        $(".noneSelect").css("display","block");
    }else{
        $(".noneSelect").css("display","none");
    }
})

// 鼠标滑过每一个日期变色
$(".dataSelect").each(function(i){
    $(this).hover(
        function(){
            $(this).css("background","#0bb2d4");
        },
        function(){
            $(this).css("background","#262626");
        }
    )
    $(this).click(function(){
        var str = "";
        switch(i){
            case 0:str="000";break;
            case 1:str="111";break;
            case 2:str="222";break;
            case 3:str="333";break;
            case 4:str="444";break;
            case 5:str="555";break;
            case 6:str="666";break;
        }
        // 点击显示对应的日期并隐藏选择框,对应的数值减一
        if(str=="000"){
            $(".data p").html("Today : <span> DEC 10</span>");
            $(".noneSelect").css("display","none");
            a--;
        }else if(str=="111"){
            $(".data p").html("Yesterday : <span> DEC 9</span>");
            $(".noneSelect").css("display","none");
            a--;
        }
        else if(str=="222"){
            $(".data p").html("DEC 4 —<span> DEC 10</span>");
            $(".noneSelect").css("display","none");
            a--;
        }
        else if(str=="333"){
            $(".data p").html("NOV 11 — <span> DEC 10</span>");
            $(".noneSelect").css("display","none");
            a--;
        }
        else if(str=="444"){
            $(".data p").html("DEC 1 —<span> DEC 31</span>");
            $(".noneSelect").css("display","none");
            a--;
        }else if(str=="555"){
            $(".data p").html("NOV 1 —<span> NOV 30</span>");
            $(".noneSelect").css("display","none");
            a--;
        }else if(str=="666"){
            $(".data p").html("Today : <span> DEC 10</span>");
            $(".noneSelect").css("display","none");
            a--;
        }
    })
})

// 循环设置图片
$(".alert").each(function(){
    console.log($(".alert").css("opacity"));
})
var o = 0;
$(".set").each(function(i){
    // 点击设置的图片按钮，让对应的设置框弹出
    $(this).click(function(){
        o++;
        $(".alert").css({
                "opacity":0,
                "zIndex":-1,
            });
        if(o%2==1){
            $($(".alert")[i]).css({
                "opacity":1,
                "zIndex":1,
                "animation": "buling 1s"
            })
        }else{
            $($(".alert")[i]).css({
                "opacity":0,
                "zIndex":-1,
                "animation": ""
            })
        }
    })
})

// 循环所有的clear all按钮，实现点击关闭效果
$(".alert input").each(function(){
    $(this).click(function(){
        $(this).parents(".alert").css("opacity",0)
        o--;
    })
})

window.addEventListener("resize", function () {
    myChart.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
    myChart5.resize();
    myChart6.resize();
    myChart7.resize();
    myChart8.resize();
    myChart9.resize();
    myChart10.resize();
    myChart11.resize();
    myChart12.resize();
    myChart13.resize();
    myChart14.resize();
    myChart15.resize();
    myChart16.resize();
    myChart17.resize();
    myChart18.resize();
    myChart19.resize();
    myChart20.resize();
    myChart21.resize();
    myChart22.resize();
    myChart23.resize();
})
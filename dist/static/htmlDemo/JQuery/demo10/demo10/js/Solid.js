//获取轮播图的容器(盒子)
var solid = document.getElementsByClassName("solid")[0];
//获取所有的豆豆
var DouDou = document.querySelectorAll("ol li");
//获取图片的容器
var oUl = document.getElementsByClassName("oUl")[0];
//获取CSS样式的style标签
var css = document.getElementsByTagName("style")[0];
//定义一个定时器和当前下标
var timer,n = 0;

//掉用函数，创建图片Dom节点，即"初始化"
createDom();

function createDom(){
    //定义一个变量用来把盒子分成100小份，高为100%，宽平均分
    var num = 100; 
    var uHTML = "", pHTML = "", tHTML = "";
    //获取当前容器的总宽度
    var allWidth = parseInt(getComputedStyle(solid,null).width);
    //每一份的宽度
    var width = allWidth / num;
    for(var i=0;i<num;i++){
        //循环创建li和每一小份div(循环完每一张图片有100份小div)，四个div对应四张图片
        uHTML += '<li><div></div><div></div><div></div><div></div></li>';
        //设置li的子元素div的样式，根据i的值，产生不同的背景图位置，最终达到100小份拼成一整张图片
        pHTML += '.solid ul li:nth-child('+ (i+1) +') div{background-position-x:'+ (-i*width) + 'px;}';
        //设置li的样式，根据i的值，每一份产生不同的动画时间，以达到波浪的效果
        tHTML += '.solid ul li:nth-child('+ (i+1) +'){transition: 0.8s ' + (0.3 * i / num) + 's}';
        // tHTML += '.solid ul li:nth-child(' + (i + 1) + '){transition: 0.3s ' + (0.3 * i / num) + 's}';
    }
    //把创建的li和div添加到oUl中
    oUl.innerHTML = uHTML;
    //把动态写好的样式追加到style样式中
    css.innerHTML += pHTML + tHTML + ".solid ul li, .solid ul li div{width:" + width +"px;height:100%}";
    //调用豆豆函数，实现点击豆豆跳转对应的图片的样式
    bindEvent();
    //调用自动播放的图片
    play();
}
//点击豆豆，跳转到对应图片
function bindEvent(){
    //循环所有的豆豆
    for(var i=0;i<DouDou.length;i++){
        //设置自定义属性，用来让每一个豆豆都有不同的下标
        DouDou[i].index = i;
        //点击对应的豆豆
        DouDou[i].onclick = function () {
            //把当前点击的豆豆的下标赋值给n
            n = this.index;
            //循环所有的豆豆
            for(var i=0;i<DouDou.length;i++){
                //把所有的豆豆的className都置为空
                DouDou[i].className = "";
            }
            //把当前点击的豆豆的className置为"on",实现当前对应的豆豆变为红色的效果
            this.className = "on";
            //给li添加css样式,根据n的值，产生不同的旋转角度效果
            css.innerHTML += ".solid ul li{transform: translateZ(-250px) rotateX("+ (n * 90) +"deg);}";
        }
    };
    //鼠标进入，清除定时器，暂停播放
    solid.onmouseenter = function(){
        clearInterval(timer);
    };
    //鼠标离开，继续播放
    solid.onmouseleave = function () {
        play();
    };
}
//自动播放
function play(){
    //清除之前的定时器
    clearInterval(timer);
    //设置定时器
    timer = setInterval(function(){
        //n++,播放时对应的下标变化
        n++;
        //因为只有四张图片，所有取余4，当播放完再跳回第一张
        n=n%4;
        //循环所有的豆豆
        for(var i=0;i<DouDou.length;i++){
            //把所有的豆豆的className置为空
            DouDou[i].className = "";
        }
        //把当前豆豆的className置为"on"
        DouDou[n].className = "on";
        //给li添加css样式,根据n的值，产生不同的旋转角度效果
        css.innerHTML += ".solid ul li{transform: translateZ(-250px) rotateX(" + (n * 90) + "deg);}";
    },2000);   //1169临界值
}
$(document).ready(function () {
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false,
        slideshowSpeed: 3000
    });
   
});

function getStyle(domObj,attr){
	if(domObj.currentStyle){
		//domObj.currentStyle.attr;//这是不对的，因为并没有名字为attr的属性
		return domObj.currentStyle[attr];//如果对象的属性名是变量的方式表示，就只能用方括号。
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}
function $o(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

$(function(){
    $('.la').each(function(){
        $(this).click(function(){
        console.log($(this));
            console.log($(this).next());
            if($(this).next().css('display')=='block'){
                $(this).next().css(
                    {display:'none'}
                )
            }else{
                $(this).next().css(
                    {display:'block'}
                )
            }
           
        })
    })
})


//搜索栏显示的效果


    // console.log($('.lan')[0])
    $o(".lan")[0].onclick=function(){
        // console.log( getStyle($o('.nav-s')[0],'display'))
        if(getStyle($o('.nav-s')[0],'display')=='none'){
            $o('.nav-s')[0].style.display='block';
            console.log( $o('.nav-s')[0].style.display);
        }else if($o('.nav-s')[0].style.display=='block'){
            $o('.nav-s')[0].style.display='none';
        }
    }


    //回到顶部
document.onscroll=function(){
    let num=document.documentElement.scrollTop||document.body.scrollTop;
    $o('.gotopBox')[0].style.opacity=(num-200)/400;
    
}

//鼠标的点击事件
$o('.gotopBox')[0].onclick=function(){
    let top=document.documentElement.scrollTop||document.body.scrollTop;
    gotop();
    function gotop(){
        if(top>0){
              top-=100;
        document.documentElement.scrollTop=top;
       setInterval(gotop,200)
        }
    }
}

function cssTransform(el,attr,val){
    if(!el.tranform){//判断只在无el.tranform属性时新创建el.tranform
        el.tranform={}//为元素el设置一个属性，为一个空对象
    }
    if(arguments.length>2){//判断是否有传入val，有则执行封装函数设置transform值的功能
        el.tranform[attr]=val;
        var sVal="";//用于储存多个transform值

        for( var attrs in el.tranform ){
            switch(attrs){
                case "rotate":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "rotate":
                case "skewX":
                case "skewY":
                    sVal+=attrs+"("+el.tranform[attrs]+"deg) ";//注意此处的空格要加上
                break;

                case "translateX":
                case "translateY":
                case "translateZ":
                    sVal+=attrs+"("+el.tranform[attrs]+"px) ";//注意单位的变化
                break;

                case "scale":
                case "scaleX":
                case "scaleY":
                    sVal+=attrs+"("+el.tranform[attrs]+") ";//注意单位的变化
                break;
            }
        }
        el.style.webkitTransform=el.style.transform=sVal;
    }else{//判断是否有传入val，无则执行封装函数获取transform值的功能
        var val=el.tranform[attr];//获取由该函数设置的transform值的元素的获取transform值
        if(typeof val == "undefined"){//如果想要获取默认值的话
            if(attr=="scale" || attr=="scaleX" || attr=="scaleY"){
                val=1;
            }else{
                val=0;
            }
        }
        return val;
    }

}
window.onload=function(){
        cssTransform($o('.input-right')[0],"translateY","-100");
}
document.body.onresize=function(){
         cssTransform($o('.input-right')[0],"translateY","-100");

}


    






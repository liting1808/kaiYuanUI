$(function () {
    $(".ul-list>a").each(function () {
        $(this).css("color", "#94918d");
        $(this).on("click", () => {
            $(".ul-list>a>li").css({
                "color": "#94918d"
            })
            $(".angle").css({
                "display": "none"
            });
            $(this).find("li").css({
                "color": "#F3BB45"
            })
            $(this).find(".angle").css("display", "block")
            //获得当前元素的下标的值
        })
    })
})

//h-btn的点击事件
function getStyle(domObj, attr) {
    if (domObj.currentStyle) {
        return domObj.currentStyle[attr]; //如果对象的属性名是变量的方式表示，就只能用方括号。
    } else {
        return window.getComputedStyle(domObj)[attr];
    }
}

function $o(str) {
    if (str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}

function cssTransform(el, attr, val) {
    if (!el.tranform) { //判断只在无el.tranform属性时新创建el.tranform
        el.tranform = {} //为元素el设置一个属性，为一个空对象
    }
    if (arguments.length > 2) { //判断是否有传入val，有则执行封装函数设置transform值的功能
        el.tranform[attr] = val;
        var sVal = ""; //用于储存多个transform值

        for (var attrs in el.tranform) {
            switch (attrs) {
                case "rotate":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "rotate":
                case "skewX":
                case "skewY":
                    sVal += attrs + "(" + el.tranform[attrs] + "deg) "; //注意此处的空格要加上
                    break;

                case "translateX":
                case "translateY":
                case "translateZ":
                    sVal += attrs + "(" + el.tranform[attrs] + "px) "; //注意单位的变化
                    break;

                case "scale":
                case "scaleX":
                case "scaleY":
                    sVal += attrs + "(" + el.tranform[attrs] + ") "; //注意单位的变化
                    break;
            }
        }
        el.style.webkitTransform = el.style.transform = sVal;
    } else { //判断是否有传入val，无则执行封装函数获取transform值的功能
        var val = el.tranform[attr]; //获取由该函数设置的transform值的元素的获取transform值
        if (typeof val == "undefined") { //如果想要获取默认值的话
            if (attr == "scale" || attr == "scaleX" || attr == "scaleY") {
                val = 1;
            } else {
                val = 0;
            }
        }
        return val;
    }
}
window.onload = function () {
    cssTransform($(".c-right")[0], "translateX", "0");
    let creenwidth = document.body.clientWidth;
    if (creenwidth < 992) {
        $(".c-left")[0].style.display = 'none';
        $o(".h-btn")[0].onclick = function () {
            $(".c-left")[0].style.float = 'right';
            cssTransform($(".c-right")[0], "translateX", "0");
            if (getStyle($o(".c-left")[0], "display") == "none") {
                $o(".c-left")[0].style.display = 'block';
                cssTransform($(".c-right")[0], "translateX", "-260");
            } else {
                $o(".c-left")[0].style.display = 'none';
            }
            let spandom = this.children;
            if (getStyle(spandom[1], "display") == "block") {
                spandom[1].style.display = "none";
                spandom[2].style.top = '-3px'
                spandom[0].style.top = '3px'
                cssTransform(spandom[0], "rotateZ", "45");
                cssTransform(spandom[2], "rotateZ", "-45");
            } else {
                spandom[1].style.display = "block";
                spandom[2].style.top = '0px'
                spandom[0].style.top = '0px'
                cssTransform(spandom[0], "rotateZ", "0");
                cssTransform(spandom[2], "rotateZ", "0");
            }
        }
    }
}
window.onresize = function () {
    cssTransform($(".c-right")[0], "translateX", "0");
    let creenwidth = document.body.clientWidth;
    if (creenwidth < 992) {
        $(".c-left")[0].style.display = 'none';
        $(".c-left")[0].style.float = 'right';
        $o(".h-btn")[0].onclick = function () {
            cssTransform($(".c-right")[0], "translateX", "0");
            if (getStyle($o(".c-left")[0], "display") == "none") {
                $o(".c-left")[0].style.display = 'block';
                cssTransform($(".c-right")[0], "translateX", "-260");
            } else {
                $o(".c-left")[0].style.display = 'none';
                cssTransform($(".c-right")[0], "translateX", "0");
            }
            let spandom = this.children;
            console.log(getStyle(spandom[1], "display"))
            if (getStyle(spandom[1], "display") == "block") {
                spandom[1].style.display = "none";
                spandom[2].style.top = '-3px'
                spandom[0].style.top = '3px'
                cssTransform(spandom[0], "rotateZ", "45");
                cssTransform(spandom[2], "rotateZ", "-45");
            } else {
                spandom[1].style.display = "block";
                spandom[2].style.top = '0px'
                spandom[0].style.top = '0px'
                cssTransform(spandom[0], "rotateZ", "0");
                cssTransform(spandom[2], "rotateZ", "0");
            }
        }
    } else {
        let spansecond = $(".spansecond")
        spansecond[1].style.display = "block";
        spansecond[2].style.top = '0px'
        spansecond[0].style.top = '0px'
        cssTransform(spansecond[0], "rotateZ", "0");
        cssTransform(spansecond[2], "rotateZ", "0");
        $(".c-left")[0].style.display = 'block';
        $(".c-left")[0].style.float = 'left';
    }
}



$(".link-a").on("click",function(){
    $(".ban-list").fadeToggle("300","linear");
})


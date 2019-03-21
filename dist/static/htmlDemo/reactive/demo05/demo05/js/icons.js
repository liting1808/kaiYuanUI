function $o(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}
    $.get("./css/themify-icons.css", function(result){
        let str=Trim(result,"g");
        let arr=str.split("}");
        let data=[];
        for(let i=2;i<arr.length;i++){
             data.push(arr[i].split(":")[0].substring(1))
        }
        let strarrows="";
        for(let i=0;i<data.length;i++){
                        strarrows+=' <div class="icons-box">\
            <span class=" icons-figuer '+data[i]+'"></span>\
            <span class="icons-text">'+data[i] +'</span>\
        </div>' 
            }
            $o(".icons-arrows")[0].innerHTML=strarrows;
      });

    

      //清除字符串的所有的空格
      function Trim(str,is_global)
  {
   var result;
   result = str.replace(/(^\s+)|(\s+$)/g,"");
   if(is_global.toLowerCase()=="g")
   {
    result = result.replace(/\s/g,"");
    }
   return result;
}


//点击消失的效果
let out=$o(".out");
for(let i=0;i<out.length;i++){
    out[i].onclick=function(){
        console.log(this.parentNode.parentNode)
        this.parentNode.parentNode.style.display="none";
    }
}


//点击按钮显示提示框

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
console.log($o(".btn-noties"));
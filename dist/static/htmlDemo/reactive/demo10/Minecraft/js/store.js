// 注册人数刷新效果
var num = 3141594325;
setInterval(function(){
	var random = Math.round(Math.random()*40+10)	/*随机范围1-50*/
	num+= random;
	var str = num.toString();
	for(var i in str){
		var positionY = "";
		switch(str[i]){
			case "0": positionY="0";break;
			case "1": positionY="-45";break;
			case "2": positionY="-90";break;
			case "3": positionY="-135";break;
			case "4": positionY="-180";break;
			case "5": positionY="-225";break;
			case "6": positionY="-270";break;
			case "7": positionY="-315";break;
			case "8": positionY="-360";break;
			case "9": positionY="-405";break;
		}
		$($(".count").find("span")[i]).animate({
			"backgroundPositionY":positionY
		},"slow","linear");
	}
},3000);

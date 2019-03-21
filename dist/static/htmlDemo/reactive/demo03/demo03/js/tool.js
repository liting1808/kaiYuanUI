function $(str){   //id class tagname标签名
	if(str.charAt(0)=='#'){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=='.'){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str.substring(str));
	}
}
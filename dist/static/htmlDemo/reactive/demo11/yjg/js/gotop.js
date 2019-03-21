//回到顶部的操作
	document.onscroll=function(){
		let num=document.documentElement.scrollTop||document.body.scrollTop;
		$('.gotop')[0].style.opacity=(num-200)/400;
		
	}

	//鼠标的点击事件
	$('.gotop')[0].onclick=function(){
		let top=document.documentElement.scrollTop||document.body.scrollTop;
		gotop();
		function gotop(){
			top-=100;
			document.documentElement.scrollTop=top;
			setInterval(gotop,200)
		}
	}
	
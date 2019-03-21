// 导航条小图标效果
$(".tit").each(function(i){
	if(i==0){
		$(this).hover(
			function(){
				$(this).find("img").attr("src","img/index/menu-buy.gif");
			},
			function(){
				$(this).find("img").attr("src","img/index/menu-buy--reversed.gif");
			}
		)
	}
	if(i==1){
		$(this).hover(
			function(){
				$(this).find("img").attr("src","img/index/menu-realms.gif");
			},
			function(){
				$(this).find("img").attr("src","img/index/menu-realms--reversed.gif");
			}
		)
	}
	if(i==2){
		$(this).hover(
			function(){
				$(this).find("img").attr("src","img/index/menu-store.gif");
			},
			function(){
				$(this).find("img").attr("src","img/index/menu-store--reversed.gif");
			}
		)
	}
	if(i==3){
		$(this).hover(
			function(){
				$(this).find("img").attr("src","img/index/menu-hamburger--mouse-enter.gif");
			},
			function(){
				$(this).find("img").attr("src","img/index/menu-hamburger--mouse-leave.gif");
			}
		)
	}
})

// 滚动登录条消失
window.onscroll = function(){
	if($(window).scrollTop()>10){
		$(".loginBox").css("display","none");
		$(".headerBox").css({
			"position":"fixed",
			"overflow":"hidden",
			"top":"0",
			"left":"0",
			"z-index":"1"
		});
	}else{
		$(".loginBox").css("display","block");
		$(".headerBox").css({
			"position":"relative",
			"top":"-28",
			"left":"0",
			"z-index":"0"
		});
	}
}

// 点击菜单，弹出东西
// $(".menu").click(function(){
// 	$(".headerBox").css({
// 		"height":"300"
// 	})
// 	$("header").css({
// 		"display":"none"
// 	})
// })
$(".showTop li").each(function(i){
	$(this).click(function(){
		$(".showTop li").css("background","#143f39");
		$(".showCharts").css("display","none");
		$(this).css("background","#f42945");
		$($(".showCharts")[i]).css("display","block");
		// 获取id
		var showChartsId = $($(".showCharts")[i]).attr("id");
		switch(showChartsId){
			case "showCharts1":showCharts1;break;
			case "showCharts2":showCharts2();break;
			case "showCharts3":showCharts3();break;
			case "showCharts4":showCharts4();break;
			case "showCharts5":showCharts5();break;
			case "showCharts6":showCharts6();break;
			default:showCharts1;
		}
	})
})
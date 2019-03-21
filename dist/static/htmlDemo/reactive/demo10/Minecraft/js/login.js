// 点击登录按钮，进行登录验证
$("#btn").click(function(){
	var email = $("#email").val();
	var password = $("#password").val();
	$.ajax({
		type:"get",
		url:"php/Login.php",
		async:true,
		data:"email="+email+"&password="+password,
		success:function(data){
			if(data=="1"){
				location.href = "index.html";
			}else if(data=="0"){
				alert("该用户不存在，或者输入有误，请检查~")
			}
		}
	});
})
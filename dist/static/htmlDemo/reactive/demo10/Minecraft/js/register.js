//定义变量用来验证正则是否全部输入正确
let verify = false;

//用户名正则检验
$("#email").keyup(function(){
   verifyEmail(); 
});
function verifyEmail(){
    var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;   //邮箱正则验证
    var str = pattern.test($("#email").val());
    if(str){
        $(".emailspan").html("恭喜您，输入正确");
        $(".emailspan").css({color:"green"});
        verify = true;
    }else{
        $(".emailspan").html("邮箱格式有误，请检查");
        $(".emailspan").css({color:"red"});
        verify = false;
    }
    return str;
}

//检查邮箱正则检验
$("#checkemail").keyup(function(){
   verifyCheckEmail();
});
function verifyCheckEmail(){
    var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;   //邮箱正则验证
    var str = pattern.test($("#checkemail").val());
    if(str){
    	var email = $("#email").val();
		var checkemail = $("#checkemail").val();
    	if(email == checkemail){
    		$(".checkemailspan").html("恭喜您，输入正确");
	        $(".checkemailspan").css({color:"green"});
	        verify = true;
    	}else{
    		$(".checkemailspan").html("两次输入的内容不一致");
	        $(".checkemailspan").css({color:"red"});
	        verify = false;
    	}
    }else{
        $(".checkemailspan").html("邮箱格式有误，请检查");
        $(".checkemailspan").css({color:"red"});
        verify = false;
    }
    return str;
}

//密码正则检验
$("#password").keyup(function(){
    verifyUserPass();
});
function verifyUserPass(){
    var pattern = /^[a-zA-Z]\w{5,15}$/;   
    var str = pattern.test($("#password").val());
    if(str){
        $(".passwordspan").html("恭喜您，输入正确");
        $(".passwordspan").css({color:"green"});
        verify = true;
    }else{
        $(".passwordspan").html("密码长度为6-16位,限制为字母开头，只能包含字母，数字，下划线");
        $(".passwordspan").css({color:"red"});
        verify = false;
    }
    return str;
}

$("#btn").click(function(){
    if (verify && verifyEmail() && verifyCheckEmail() && verifyUserPass()){
        //所有条件都满足，可以进行注册
        var email = $("#email").val();
		var checkemail = $("#checkemail").val();
		var password = $("#password").val();
		if(email == checkemail){
			$.ajax({
				type:"post",
				url:"php/Regise.php",
				async:true,
				data:"email="+email+"&password="+password,
				success:function(data){
					if(data=="1"){
						var check = confirm("注册成功，是否跳转到登录界面？");
						if(check){
							location.href = "login.html"
						}
					}else if(data=="0"){
						alert("该用户不存在，或者输入有误，请检查~")
					}
				}
			});
		}else{
			alert("两次输入的不一致，请检查~")
		}
    }else{
        //当有一个条件不满足的时候，阻止button提交，禁止注册
        return false;
    }
});
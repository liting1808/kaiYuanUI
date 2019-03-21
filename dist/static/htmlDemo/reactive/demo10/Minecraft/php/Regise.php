<?php
	//解决乱码问题
	header("Content-type: text/html; charset=utf-8");
	//接收数据
	$email = $_POST['email'];
	$password = $_POST['password'];
	//建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//选择数据库
		mysql_select_db('minecraft',$con);
		//执行sql语句
		//先判断数据库中是否存在
		$sqlstr = "select * from user where email='$email'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows>0){
			mysql_close($con);
			echo "该用户已被注册过，请另起他名";
		}else{
			$sqlstr = "insert into user (email,userpass) values ('$email','$password')";
			$result = mysql_query($sqlstr,$con);
			mysql_close($con);
			//判断是否注册成功
			if($result){
				//注册成功跳转到注册成功页面
				// header("location:../regSuccess.html");
				echo "1";	//表示注册成功
			}else{
				echo "0";	//表示注册失败
			}
		}
	}
?>
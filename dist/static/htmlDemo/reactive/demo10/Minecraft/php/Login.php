<?php
	//解决乱码问题
	header("Content-type:text/html;charset=utf-8");
	//获取页面上文本框中输入的数据
	$email = $_GET['email'];
	$password = $_GET['password'];
	//建立连接
	$con = mysql_connect("localhost",'root','root');
	//选择数据库
	mysql_select_db('minecraft',$con);
	//执行sql语句
	$sqlstr = "select * from user where email = '$email' and userpass = '$password'";
	$result = mysql_query($sqlstr,$con);
	$rows = mysql_num_rows($result);
	if($rows!=0){
		// header('location:../index.html');
		echo "1";	//表示数据库中存在该用户并且输入正确，可以登录
	}else{
		echo "0";	//表示数据库中不存在该用户或者输入错误，不能登录
	}
?>
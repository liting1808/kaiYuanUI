const url=require('url');
const mongoose=require('mongoose');
const usersdb=require("./userdb");
const querystring=require("querystring");
module.exports=function(req,res){
    //接受前端传入的参数的值
   let postStr="";
   req.on("data",function(chunk){
       postStr+=chunk;
   });
   req.on("end",function(){
       let urlObj=querystring.parse(postStr);
       //2.进行数据库的连接的操作
       mongoose.connect("mongodb://localhost:27017/firstdb").then(
           function(){
               usersdb.userModel.find({"username":urlObj.username,"userphone":urlObj.userphone,"usermark":urlObj.userremark},(err,data)=>{
                   if(err){
                       mongoose.disconnect();
                       res.statusCode=500;
                       res.setHeader("Content-type","text/html;charset=utf-8");
                       res.write('亲，服务器出错了');
                       res.end();
                   }else{
                       res.statusCode=200;
                       res.setHeader("Content-type","text/html;charset=utf-8");
                       if(data.length>0){
                           mongoose.disconnect();
                           res.write('亲，用户名已经存在');
                           res.end();
                       }else{
                           //增(进行增的操作)
                           console.log(urlObj.userremark);
                       res.setHeader("Content-type","text/html;charset=utf-8");
                           let userEntity=new usersdb.userModel({
                               "username":urlObj.username,
                               "userphone":urlObj.userphone,
                               "userremark":urlObj.userremark
                           });
                           userEntity.save((err,data)=>{
                               mongoose.disconnect();
                               if(err){
                       res.setHeader("Content-type","text/html;charset=utf-8");
                                   res.write('亲，服务器不对');
                               }else{
                                   res.write("信息提交成功！");
                               }
                               res.end();
                           })
                       }
                   }
               })
           }
       )
   })
}
// 建立数据库的模板的操作
const mongoose=require('mongoose');
//1.建立数据库的模板
let userSchema = new mongoose.Schema({
    "username":String,
    "userphone":String,
    "userremark":String
});

//2.建立对象模型
let userModel=mongoose.model("customer",userSchema);
module.exports={
    userSchema:userSchema,
    userModel:userModel
}
// 首先先建立数据库的链接
const mongoose= require('mongoose');
//定义模板
let newslistsSchema=new mongoose.Schema({
    "yjzx":String,
    "newlist":Array,
    "type" : String,
    "tag" : String,
    "title" : String,
    "text" :String,
    "data" : String
})

//定义模型
let newlistModel=mongoose.model("newslists",newslistsSchema);
module.exports={
    //查
    getNewlists:function(condation,func){
        //2.处理(处理数据库)
        mongoose.connect("mongodb://localhost:27017/firstdb").then(
            function(){
                //先进行查找
                newlistModel.find(condation,(err,data)=>{
                    mongoose.disconnect();
                    if(err){
                        func([]);
                    }else{
                        
                        func(data);
                    }
                });
            }
        )
    }
}
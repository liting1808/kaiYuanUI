//服务器接受数据，处理数据的操作
const url=require("url");
const goodslistdb=require("./newslistsdb");

module.exports=function(req,res){
    console.log("开始进行数据的处理");
    //1.接受参数
    let urlObj=url.parse(req.url,true);
    // console.log(urlObj);
    // 2.处理数据
    goodslistdb.getNewlists({},function(data){
        //3.进行数据的响应
        res.statusCode =200;
        res.setHeader('Content-type','text/html;charset=utf-8');
        res.write(JSON.stringify(data));
        res.end();
    });
}
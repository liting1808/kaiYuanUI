const router=require('./router');
const http=require("http");
const url = require('url');
const path = require('path');
//服务器的设置
var serverObj=http.createServer((req,res)=>{
   if(req.url!='/favicon.ico'){
    let urlObj=url.parse(req.url);
    let urlStr=urlObj.pathname.substring(1);
    let extname=path.extname(urlStr).substring(1);
    try{
        // console.log(urlStr);
        router[extname](req,res,urlStr);
    }catch(e){
        router["error"](req,res);
    }
   }
})
serverObj.listen(706,"localhost",()=>{
    console.log('等待中...');
})


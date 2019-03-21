
const routerinfo=require("./routerinfo");
const path=require("path");
const fs=require("fs");


module.exports={
    "nd":function(req,res,filename){
        // console.log(filename+"n1");
        routerinfo[path.basename(filename,'.nd')](req,res)
    },
    "html":function(req,res,filename){
        // console.log(filename+"n11");
        res.statusCode=200;
        res.setHeader=("Content-type","text/html,charset=utf-8");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else{
                res.write(data);
                res.end();
            }
        })
    },

    "css":function(req,res,filename){
        // console.log(filename+"n111");

        res.statusCode=200;
        res.setHeader=("Content-type","text/html,charset=utf-8");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else{
                res.write(data);
                res.end();
            }
        })
    },
    "js":function(req,res,filename){
        // console.log(filename+"n1111");

        res.statusCode=200;
        res.setHeader=("Content-type","application/x-javascript;charset=utf-8");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end;
            }else{
                res.write(data);
                res.end();
            }
        })
    },
    "jpg":function(req,res,filename){
        // console.log(filename+"n11111");

        res.statusCode=200;
		res.setHeader("Content-type","application/x-javascript;charset=utf-8");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else{
                res.write(data);
                res.end();
            }
        })
    },
    "png":function(req,res,filename){
        res.statusCode=200;
		res.setHeader("Content-type","binary","image/png");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else
            res.write(data);
            res.end();
        })        
    },
    "mp4":function(req,res,filename){
        res.statusCode=200;
		res.setHeader("Content-type","binary","video/mpeg4");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else
            res.write(data);
            res.end();
        })        
    },
    "gif":function(req,res,filename){
        res.statusCode=200;
		res.setHeader("Content-type","binary","image/gif");
        fs.readFile(filename,(err,data)=>{
            if(err){
                res.write(err);
                res.end();
            }else
            res.write(data);
            res.end();
        })        
    },
    "error":function(req,res,filename){
        res.statusCode=404;
        res.setHeader("Content-type","text/html,charset=utf-8");
        res.write('出错了');
        res.end();
    }
}



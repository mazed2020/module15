const http=require('http');
const fs=require("fs");
const port=5000;
//server set question no1
const server=http.createServer((req,res)=>{
    //question no 2
    if(req.url=='/'){
        res.end("This is the Home Page");
    }
     if(req.url=='/about'){
        res.end("This is the About Page");
    }
     if(req.url=='/contact'){
        res.end("This is the Contact Page");
    }
     if(req.url=='/file-write'){
        fs.writeFile("demo.txt","Hello World",(error)=>{
            if(error){
                res.end("fail write fail");
            }else{
                res.end("file write successfull");
            }
        })
    }
})
server.listen(port,()=>{
    console.log(`the server should listen port ${port}`);
})
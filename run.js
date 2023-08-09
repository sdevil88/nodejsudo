const http = require("http");

//link file 

const date = require("./index");

//function define 

const func=(req,res)=>{
    const time = Date();
    res.end(`time is ${time}`);
};
http.createServer(func).listen(8080);
console.log("running server");


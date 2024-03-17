const http = require('http');

const reqFun = (req,res) => {
    console.log(req.url, req.method, req.host)
    res.end('Hello, World!\n');
} 

const server = http.createServer(reqFun);


server.listen(8080)


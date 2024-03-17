const fs = require('fs')
const http = require('http')

const text = 'First App: slavo.io'

fs.writeFileSync("./first_app/hello.txt",text);



// event driven architecture 
// HTTP , HTTPS

// http -> lunch server 
// https ->
function reqListener(req, res) {
    console.log(req)
}
const server = http.createServer(reqListener);


fs.writeFileSync("./first_app/hello.txt",text);

server.listen(8080)
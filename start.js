const fs = require('fs');
const http = require('http')

let data = fs.readFileSync('./def.config.json').toString()

const PORT = JSON.parse(data).port

http.createServer((req,res)=>{
    //needs router
}).listen(PORT)
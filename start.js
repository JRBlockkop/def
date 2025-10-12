const fs = require('fs');
const http = require('http')
const router = require('./router')

let data = fs.readFileSync('./def.config.json').toString()

const PORT = JSON.parse(data).port

http.createServer((req,res)=>{
    router(req.url.split('?')[0],req,res)
}).listen(PORT)
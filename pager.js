const fs = require('fs')

const page = {
    content:"",
    req: "",
    write:(c)=>{
        page.content+=c
    }
}

page.req = JSON.parse(fs.readFileSync('./core/req.json').toString())


eval(fs.readFileSync(`./routes/${process.argv[2]}`).toString())


console.log(page.content)

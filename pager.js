const fs = require('fs')

const page = {
    content:"",
    write:(c)=>{
        page.content+=c
    }
}

eval(fs.readFileSync(`./routes/${process.argv[2]}`).toString())

console.log(page.content)
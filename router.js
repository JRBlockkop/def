const fs = require('fs')
const { spawn } = require('child_process');

const routesfile = fs.readFileSync('./routes.yaml').toString()

const routes = new Map()

routesfile.split('\n').forEach(v=>{
    routes.set(
        str.split(':')[0],
        str.split(':')[1].trim()
    )
})

function router(pathname,req,res){
    fs.writeFileSync('./core/req.json',JSON.stringify(req))
    const pager = spawn(
        "node",
        [
            "core/pager",
            "error.js" //todo make dynamic
        ]
    )

    pager.stdout.on('data',(data)=>{
        res.end(data.toString())
    })
}


module.exports = router


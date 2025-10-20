const fs = require('fs')
const { spawn } = require('child_process');

const routesfile = fs.readFileSync('./routes.yaml').toString()

function router(pathname,req,res){
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
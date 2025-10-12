const fs = require('fs')

const routesfile = fs.readFileSync('./routes.yaml').toString()

function router(pathname,req,res){
    let page;

    page='<h1>Hello World</h1>' //example needs implementation

    res.end(page)
}

module.exports = router
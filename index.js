const fs = require('fs');

fs.writeFileSync('./routes.yaml','/: page.js\n*: error.js')
fs.mkdirSync('./routes')
fs.mkdirSync('./core')
fs.writeFileSync('./README.md','```js\nnpm run dev\n```')
fs.writeFileSync('./core/start.js',fs.readFileSync('./start.js'))
fs.writeFileSync('./core/router.js',fs.readFileSync('./router.js'))
fs.writeFileSync('./core/pager.js',fs.readFileSync('./pager.js'))

fs.writeFileSync('./routes/page.js','page.write("<h1>Hello User</h1>")')
fs.writeFileSync('./routes/error.js','page.write("<h1>404 Page Not found</h1><hr>")')

fs.writeFileSync(
    './package.json',
    '{\n\t"scripts":{\n\t\t"dev":"node core/start.js"\n\t}\n}'
)

fs.writeFileSync(
    './def.config.json',
    '{\n\t"port":3001\n}'
)

fs.rmSync('./index.js')
fs.rmSync('./start.js')
fs.rmSync('./router.js')
fs.rmSync('./pager.js')
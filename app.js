// GLOBALS - NO WINDOW !!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed
//=======================================================

// npm - global command, comes with node
// node --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const http = require('http')

// const server = http.createServer((req, res) => {
//      res.end('Welcome')
// })

// Use Even Emitter API
const server = http.createServer()
// emits request event
// subscribe to tit / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcome');
});

server.listen(5000)
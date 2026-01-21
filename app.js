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

// const {writeFileSync} = require('fs')
// for (let i = 0; i < 1000; i++) {
//     writeFileSync('./content/big.txt', `hello world ${i} \n`, {flag : 'a'});
// }

const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark : 10000
});

// default 16kb
// highWaterMark = control size
// const stream = createReadStream('./content/big.txt', {highWaterMark : 10000});
// const stream = createReadStream('./content/big.txt', {encoding : 'utf8'});

stream.on('data', (result) => {
    console.log(result);
})

stream.on('error' , (error) => {
    console.log(error);
})
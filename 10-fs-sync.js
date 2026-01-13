const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

//Every time this code runs, it will create a file result-sync.txt if non-existent. If exists, it will overwrite the file.
// writeFileSync('./content/result-sync.txt',`Here is the result : \nFirst: ${first} \nSecond: ${second}`);

// the Flag: 'a' will append the existing file.
writeFileSync('./content/result-sync.txt',`Here is the result : \nFirst: ${first} \nSecond: ${second}`, { flag: 'a'});
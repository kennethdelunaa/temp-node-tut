let http = require('http')
let fs = require('fs')

http.
    createServer(function (req, res) {
        // content-length
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)

        // Transfer-Encoding = chunked 
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
        fileStream.on('open', () => {
            fileStream.pipe(res)
        })
        fileStream.on('error', (err)=> {
            res.end(err)
        })
    })
    .listen(5000)
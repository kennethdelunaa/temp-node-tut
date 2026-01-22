const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url
    // home page
    if(url === '/'){
        res.writeHead(200, {
            'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }
    // about page
    if(url === '/about'){
        res.writeHead(200, { 
            'content-type' : 'text/html'})
        res.write('<h2>About Page</h2>')
        res.end()
    }

    // 404
    res.writeHead(404, { 
        'content-type' : 'txt/html'})
    res.write('<h2>404 Page not found.</h2>')
    res.end()

})
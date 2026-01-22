const express = require ('express')
const app = express()
// get all files

// set up static and middleware
app.use(express.static('./public'))
// multiple options
app.all('*', (req, res) => {
    res.status(404).semd('<h1>Page Not Found.</h1>')
})

app.listen(5000, () => {
    console.log('server listening on port 5000...');
})
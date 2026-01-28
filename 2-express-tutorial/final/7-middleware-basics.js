const express = require('express')
const app = express()
const { products } = require('././data.js')

// home page
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

// display all products
app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProduct)
})

// display specific product
app.get('/api/products/:productId', (req, res) => {
    // console.log(req);
    // console.log(req.params);
    const {productId} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productId))

    if(!singleProduct){
        return res.status(404).send('<h1>Product does not exist.</1>')
    }

    res.json(singleProduct)
})

// params
app.get('/api/products/:productId/reviews/:reviewId', (req, res)=> {
    console.log(req.params);
    res.send('hello world')
})

// query 
app.get('/api/v1/query',(req, res) => {
    console.log(req.query);
    const {search,limit} = req.query
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.splice(0,Number(limit))
    }

    if(sortedProducts < 1){
        // res.status(200).send('no product matched your search')
        return res.status(200).json({success:true, data: []})
    }
    res.status(200).json(sortedProducts)
    res.send('hello world')
}) 

// page not found
app.use((req, res) => {
    res.status(404).send('Page not found.')
})

// listener
app.listen(5000, ()=> {
    console.log('Server is listening on port 5000...');
})
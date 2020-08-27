const express = require('express');
const data = require('./data');
const app = express();
const port = 5000;

app.get("/api/products/:id", (req,res) => {
    const productId = req.params.id
    const selectedProduct = data.products.find( product => product.id === productId)
    if (selectedProduct)
        res.send(selectedProduct)
    else
    res.status(404).send({msg: "Product not found!!!!!!!!!"})
})
app.get("/api/products", (req,res) => {
    res.send(data.products)
})

app.listen( port, () =>{
    console.log("Server started at http://localhost:"+port)
})
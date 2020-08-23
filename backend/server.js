const express = require('express');
const data = require('./data');
const app = express();
const port = 5000;

app.get("/api/products", (req,res) => {
    res.send(data.products)
})

app.listen( port, () =>{
    console.log("Server started at http://localhost:"+port)
})
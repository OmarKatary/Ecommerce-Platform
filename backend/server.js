const express = require('express');
const data = require('./data');
const app = express();
const dotenv = require('dotenv')
const config = require('./config')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const bodyParser = require('body-parser')
const port = 5000;

dotenv.config()
const mongodbUrl = config.MONGODB_URL

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.error(error.reason))

app.use(bodyParser.json())
app.use('/api/users', userRoute)
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

app.listen( process.env.PORT || port, () =>{
    console.log("Server started at http://localhost:"+port)
})
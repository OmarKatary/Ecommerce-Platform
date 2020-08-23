import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data';
import axios from 'axios'


function HomePage(props){
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const fetchData = async () =>{
            const {data} = await axios.get("/api/products");
            setProducts(data)
        }
        fetchData()
        return () =>{
        }
    }, [])
    return(
        <ul className="products">
            {products.map( product => 
                <li key={product.id}>
                <div className="product">
                    <Link to={"/product/"+product.id}>
                        <img className="product-image" src={product.image} alt="product"/>
                    </Link>
                    <Link to={"/product/"+product.id} className="product-name">{product.name}</Link>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating}({product.numberOfReviews})</div>
                </div>
            </li>    
            )}           
        </ul>
    )
    
}
export default HomePage;
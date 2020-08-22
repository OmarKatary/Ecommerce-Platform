import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';


function HomePage(props){
    return(
        <ul className="products">
            {data.products.map( product => 
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
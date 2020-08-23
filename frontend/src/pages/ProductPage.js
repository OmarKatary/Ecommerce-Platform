import React from 'react';
import data from '../data'

function HomePage(props){
    console.log(props.match.params.id)
    const product = data.products.find( item => item.id === props.match.params.id)
    return(
        <div>
            <h1>
                {product.name}
            </h1>
            <div className="details">  
                <div className="details-image">
                    <img src={product.image} alt="product"/>
                </div>     
                <div className="details-info">
                    <ul>
                        <li >Name: {product.name}</li>
                        <li>Rating: {product.rating}({product.numberOfReviews})</li>
                        <li>Price: ${product.price}</li>
                        <li>Descrition: {product.description}</li>
                    </ul>
                    
                    
                </div>               
                <div className="details-buy">
                    <ul>
                        <li>Price: ${product.price}</li>
                        <li>Status: ${product.status}</li>
                        <li>Qty: 
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </li>
                        <li><button>Add to Cart</button></li>
                    </ul>
                </div>
            </div>
        </div>
    )
    
}
export default HomePage;
import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../actions/productsActions';

function ProductPage(props){
    const productDetails = useSelector( state => state.productDetails)
    const {selectedProduct, loading, error} = productDetails
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    useEffect(()=>{
        dispatch(getProductDetails(props.match.params.id))
        return () => {}
    },[])

    const handlerAddToCart = () =>{
        // console.log("props.history", props.history) 
        props.history.push("/cart/" + props.match.params.id + "?qty=" + quantity)
    }
    return(
        loading? <div>Loading...</div>:
            error? <div>{error}</div>:
                <div>
                    <h1>
                        {selectedProduct.name}
                    </h1>
                    <div className="details">  
                        <div className="details-image">
                            <img src={selectedProduct.image} alt="product"/>
                        </div>     
                        <div className="details-info">
                            <ul>
                                <li >Name: {selectedProduct.name}</li>
                                <li>Rating: {selectedProduct.rating}({selectedProduct.numberOfReviews})</li>
                                <li>Price: ${selectedProduct.price}</li>
                                <li>Descrition: {selectedProduct.description}</li>
                            </ul>
                            
                            
                        </div>               
                        <div className="details-buy">
                            <ul>
                                <li>Price: ${selectedProduct.price}</li>
                                <li>Status: {selectedProduct.status}</li>
                                <li>Qty: 
                                    <select value={quantity} onChange={ (event) => setQuantity(event.target.value)}>
                                        {[...Array(selectedProduct.inStockQuantity).keys()].map( element =>
                                                <option key={element+1} value={element+1}>{element+1}</option>
                                        )}
                                        
                                    </select>
                                </li>
                                <li><button onClick={handlerAddToCart} >Add to Cart</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
    )
    
}
export default ProductPage;
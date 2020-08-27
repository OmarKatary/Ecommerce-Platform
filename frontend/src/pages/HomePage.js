import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productsActions';


function HomePage(props){
    // const [products, setProducts] = useState(() => []);
    //get state from reducer in combineReducer named productsList
    const productsList = useSelector(state => state.productsList)
    const { products, loading, error } = productsList;
    const dispatch = useDispatch();

    //Runs call back whenever data in second parameter is changed
    // [] means on Mount
    useEffect(() =>{
        dispatch(listProducts())
        //whatever is in the return runs as clean up before running the effect's call back
        //when the component unmounts
        return () =>{
        }
    }, [])

    // useEffect(() =>{
    //     const fetchData = async () =>{
    //         const {data} = await axios.get("/api/products");
    //         setProducts(data)
    //     }
    //     fetchData()
    //     return () =>{
    //     }
    // }, [])
    return(
        loading? <div>loading...</div>:
            error? <div>{error}</div>:
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
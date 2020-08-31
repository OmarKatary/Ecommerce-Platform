import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart, removeFromCart} from '../actions/cartActions'
import {Link} from 'react-router-dom'
function CartScreen(props){
    const productId = props.match.params.id;
    const quantity = props.location.search ? Number(props.location.search.split("=")[1]) : 1
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const cartItems = cart.cartItems
    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, quantity))
        }
        },[])
    return (
        <div className="cart">
            <div className="cart-list">
                <ul className="cart-list-container">
                    <li>
                        <h3>Shopping Cart</h3>
                        <div>Price</div>
                    </li>
                    {cartItems.length === 0 ? <div> Cart is empty</div>
                    :
                    cartItems.map(item => 
                        <li key={item.id}>
                            <div className="cart-image">
                                <img src={item.image} alt="product"/>
                            </div>
                            <div className="cart-name">
                                <Link to={"/product/"+item.id}>
                                    {item.name}
                                </Link>
                                <div>
                                    Qty:
                                    <select value={item.quantity} onChange={event => dispatch(addToCart(item.id ,event.target.value))}>
                                        {[...Array(item.inStockQuantity).keys()].map( element =>
                                                <option key={element+1} value={element+1}>{element+1}</option>
                                        )}
                                    </select>
                                </div>
                                <button type="button" className="button" onClick={()=> removeFromCartHandler(item.id)}>
                                    Remove
                            </button>
                            </div>
                            <div className="cart-price">${item.price}</div>

                        </li>
                    )}
                </ul>

            </div> 
            <div className="cart-action">
                <h3>
                    Subtotal ({cartItems.reduce((accumulator, current) => accumulator + current.quantity, 0)})
                    : $ {cartItems.reduce((accumulator, current)=> accumulator + current.quantity * current.price, 0)}
                </h3>
            </div> 
        </div>)
}
export default CartScreen
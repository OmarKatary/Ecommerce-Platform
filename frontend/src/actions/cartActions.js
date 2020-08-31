import axios from 'axios'
import Cookie from 'js-cookie'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'


const addToCart = ( productId, quantity) => {
    return(
        async (dispatch, getState)=>{
            try{
                const {data} = await axios.get("/api/products/" + productId)
                dispatch({type: CART_ADD_ITEM, payload: {...data, quantity: quantity }})
                const {cart:{cartItems}} = getState()
                Cookie.set("cartItems", JSON.stringify(cartItems))
            }catch(error){

            }
        }
    )
    
}
const removeFromCart = ( productId) => {
    return(
        async (dispatch, getState)=>{
            try{
                dispatch({type: CART_REMOVE_ITEM, payload: productId})
                const {cart:{cartItems}} = getState()
                Cookie.set("cartItems", JSON.stringify(cartItems))
            }catch(error){

            }
        }
    )
    
}

export {addToCart, removeFromCart}
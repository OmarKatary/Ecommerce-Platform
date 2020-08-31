import {CART_ADD_ITEM, CART_REMOVE_ITEM} from '../constants/cartConstants'
function cartReducer (state={ cartItems : []}, action){
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const product = state.cartItems.find( x => x.id === item.id)
            if (product){
                return {...state, cartItems: state.cartItems.map( x => x.id === product.id? item: x)}
            }
            return { ...state, cartItems: [...state.cartItems, action.payload]}
        case CART_REMOVE_ITEM:
            let newCartItems =  [...state.cartItems].filter(item => item.id !== action.payload)
            return {...state, cartItems: newCartItems}
        default:
            return state
    }
}

export {cartReducer}
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import {productsListReducer, productDetailsReducer} from './reducers/productsReducers'
import {cartReducer} from './reducers/cartReducers'

const cartItems = Cookie.getJSON("cartItems") || []
const initialState = {cart:{cartItems}}

const reducer = combineReducers({
    productsList : productsListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer
})
//Thunk allows us to run async actions in redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;
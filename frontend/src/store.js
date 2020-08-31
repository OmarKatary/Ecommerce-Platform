import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import {productsListReducer, productDetailsReducer} from './reducers/productsReducers'
import {cartReducer} from './reducers/cartReducers'
import { userSigninReducer, userSignupReducer } from './reducers/usersReducers'

const cartItems = Cookie.getJSON("cartItems") || []
const userInfo = Cookie.getJSON("userInfo") || []
const initialState = {cart:{cartItems}, userSignin: {userInfo:null} }

const reducer = combineReducers({
    productsList : productsListReducer,
    productDetails : productDetailsReducer, 
    cart: cartReducer,
    userSignin: userSigninReducer,
    userSignup: userSignupReducer
})
//Thunk allows us to run async actions in redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;
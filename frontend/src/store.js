import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {productsListReducer, productDetailsReducer} from './reducers/productsReducers'

const initialState = {}

const reducer = combineReducers({
    productsList : productsListReducer,
    productDetails : productDetailsReducer
})
//Thunk allows us to run async actions in redux
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store;
import { PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAIL, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQUEST } from "../constants/productsConstants"

function productsListReducer (state = { products:[] }, action){
    switch(action.type){
        case PRODUCTS_LIST_REQUEST:
            return {...state, loading: true}
        case PRODUCTS_LIST_SUCCESS:
            return {...state, loading : false, products: action.payload}
        case PRODUCTS_LIST_FAIL:
            return { ...state, loading : false, error: action.payload}
        default:
            return state
    }
}

function productDetailsReducer (state = { selectedProduct: {}}, action){
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {...state, loading: true}
        case PRODUCT_DETAILS_SUCCESS:
            return {...state, loading : false, selectedProduct: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading : false, error: action.payload}
        default:
            return state
    }
}

export { productsListReducer, productDetailsReducer} 
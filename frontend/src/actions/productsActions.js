import {PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL} from '../constants/productsConstants'
import axios from 'axios'

const listProducts = () => {
    return(
        async (dispatch)=>{ 
            try{
                dispatch({type: PRODUCTS_LIST_REQUEST})
                const {data} = await axios.get("/api/products")
                dispatch({ type: PRODUCTS_LIST_SUCCESS, payload: data})
            }
            catch(error){
                dispatch({ type: PRODUCTS_LIST_FAIL, payload: error.message})
            }
        } 
    )
}

const getProductDetails = (id) =>{
    return(
        async (dispatch) =>{
            try{
                dispatch({type: PRODUCT_DETAILS_REQUEST, payload: id})
                const {data} = await axios.get("/api/products/"+id)
                dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data})
            }
            catch(error){
                dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message})
            }
        }
    )
}

export { listProducts, getProductDetails }
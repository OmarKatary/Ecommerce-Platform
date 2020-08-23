import {PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAIL} from '../constants/productsConstants'
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

export { listProducts }
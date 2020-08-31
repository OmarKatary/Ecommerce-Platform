import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';


function SigninPage(props){
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userSignin = useSelector(state => state.userSignin)
    const {loading, userInfo, error} = userSignin
    const dispatch = useDispatch()

    useEffect(()=>{
        if(userInfo){
            props.history.push("/")
        }
        return () => {}
    },[userInfo])

    const submitHandler = (event) =>{
        //Dont refresh
        event.preventDefault()
        dispatch( signin(email,password) )
    }

    return(
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Sign In</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(event)=> setEmail(event.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label htmlFor  ="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" onChange={(event)=> setPassword(event.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit">Signin</button>
                    </li>
                    <li>
                        New to Ecommerce?
                    </li>
                    <li>
                        <Link to="/signup">Create new account</Link>
                    </li>

                </ul>

            </form>
        </div>
        
    )
    
}
export default SigninPage;
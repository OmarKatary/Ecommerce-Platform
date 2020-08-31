import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../actions/userActions';


function SignupPage(props){
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const userSignup = useSelector(state => state.userSignup)
    const {loading, userInfo, error} = userSignup
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
        dispatch( signup(name, email,password) )
    }

    return(
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" name="name" id="name" onChange={(event)=> setName(event.target.value)}>
                        </input>
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
                        <label htmlFor  ="confirmpassword">
                            Confirm Password
                        </label>
                        <input type="password" name="confirmpassword" id="confirmpassword" onChange={(event)=> setConfirmPassword(event.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit">Signin</button>
                    </li>
                    <li>
                        Already have an account?
                    </li>
                    <li>
                        <Link to="/signin">Sign in</Link>
                    </li>

                </ul>

            </form>
        </div>
        
    )
    
}
export default SignupPage;
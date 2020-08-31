import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import SigninPage from './pages/SigninPage';
import { useSelector } from 'react-redux';
import SignupPage from './pages/SignupPage';
function App() {
    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin
  return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <Link to="/" >Eccomerce-Brand</Link>
                    </div>
                    <div className="header-buttons">
                        <Link to="/cart">Cart</Link>
                        {userInfo ? <Link to='/profile'>{userInfo.name}</Link>:
                        <Link to="/signin">Signin</Link>}
                    </div> 
                </header>
                <main className="main">
                    <div className="container">
                        <Route path="/signup" component={SignupPage} />
                        <Route path="/signin" component={SigninPage} />
                        <Route path="/product/:id" component={ProductPage} />
                        <Route path="/cart/:id?" component={CartPage} />
                        <Route path="/" exact={true} component={HomePage} />

                    </div>
                </main>
                <footer className="footer">
                    Footer
                </footer>
            </div>
        </BrowserRouter>
  );
}

export default App;

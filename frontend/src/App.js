import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
function App() {
    
  return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <Link to="/" >Eccomerce-Brand</Link>
                    </div>
                    <div className="header-buttons">
                        <a href="cart.html">Cart</a>
                        <a href="signin.html">Sign in</a>
                    </div> 
                </header>
                <main className="main">
                    <div className="container">
                        <Route path="/product/:id" component={ProductPage} />
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

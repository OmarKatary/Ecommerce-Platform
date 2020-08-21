import React from 'react';
import './App.css';
import data from './data'
function App() {
    
  return (
    <div className="grid-container">
          <header className="header">
              <div className="brand">
                  <a href="index.html">Eccomerce-Brand</a>
              </div>
              <div className="header-buttons">
                  <a href="cart.html">Cart</a>
                  <a href="signin.html">Sign in</a>
              </div> 
          </header>
          <main className="main">
              <div className="container">
                  <ul className="products">
                      {data.products.map( product => 
                        <li>
                          <div className="product">
                              <img className="product-image" src={product.image} alt="product"/>
                              <div className="product-name">{product.name}</div>
                              <div className="product-brand">{product.brand}</div>
                              <div className="product-price">${product.price}</div>
                              <div className="product-rating">{product.rating}({product.numberOfReviews})</div>
                          </div>
                      </li>    
                      )}           
                  </ul>
              </div>
          </main>
          <footer className="footer">
              Footer
          </footer>
    </div>
  );
}

export default App;

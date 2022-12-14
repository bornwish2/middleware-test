import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getAllProducts, getAllProductsAsync } from './features/product-slice';
import { AppDispatch, RootState } from './store';

function App() {

  
  const products = useSelector((state: RootState) => state.products)
  const dispatch:AppDispatch = useDispatch()

  const asyncProducts = async () => {
    dispatch(getAllProductsAsync())
    .unwrap()
    .then((originalPromiseResult) => {
      localStorage.setItem('products', JSON.stringify(originalPromiseResult));
      console.log(originalPromiseResult);
      
    })
    .then(()=>{
      dispatch(getAllProducts(JSON.parse(localStorage.getItem('products')||"")))
      console.log(JSON.parse(localStorage.getItem('products')||""));
      
      console.log(products);
      
    })
    .catch((rejectedValueOrSerializedError) => {
      console.log(rejectedValueOrSerializedError);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
       <div>
       {products.map((product)=>{
          return(
            // eslint-disable-next-line react/jsx-key
            <div className="card border-primary">
            <img className="card-img-top" src={product.image} alt={product.category}/>
            <div className="card-body">
              <h4 className="card-title">{product.title}</h4>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
          );
        })}
       </div>
       <button onClick={asyncProducts}>reload</button>
      </header>
    </div>
  );
}

export default App;

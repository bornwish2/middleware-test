import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getAllProducts, getAllProductsAsync } from './features/product-slice';
import { fetchProductRequest } from './features/productActionSaga';
import { getErrorSelector, getPendingSelector, getProductsSelector } from './features/selector';
import Products from './modules/localStorage/Product.storage';
import { AppDispatch, RootState } from './store';

function App() {

  console.log("app");

  const productsFromStorage = Products.getInstance();

  const products = useSelector((state: RootState) => state.products)

  const pending = useSelector(getPendingSelector);
  const productsSaga = useSelector(getProductsSelector);
  const error = useSelector(getErrorSelector);

  let moodChanged = false;

  const dispatch: AppDispatch = useDispatch()

  const asyncProducts = async () => {
    dispatch(getAllProductsAsync())
      .unwrap()
      .then((originalPromiseResult) => {
        // console.log(originalPromiseResult);
        // localStorage.setItem('products', JSON.stringify(originalPromiseResult));
        productsFromStorage.setProducts(originalPromiseResult);

      })
      .then(() => {

          dispatch(getAllProducts(productsFromStorage.getProducts()))

        console.log(productsFromStorage.getProducts() )
        moodChanged = false;
        console.log(products);

      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
      })
  }

  // useEffect(() => {
  //   dispatch(fetchProductRequest());
  // }, []);

  const sagaProducts = () => {
    dispatch(fetchProductRequest())
    moodChanged = true;
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {moodChanged ? (
            pending ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error</div>
            ) : (
              productsSaga.map((product) => (
                // eslint-disable-next-line react/jsx-key
                <div className="card border-primary">
                  <img className="card-img-top" src={product.image} alt={product.category} />
                  <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              )))
          )
            : (
              products.map((product) => (
                // eslint-disable-next-line react/jsx-key
                <div className="card border-primary">
                  <img className="card-img-top" src={product.image} alt={product.category} />
                  <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.description}</p>
                  </div>
                </div>
              )))
          }
        </div>
        <button className='btn' onClick={asyncProducts}>reloadAsyncReducer</button>
        <button className='btn' onClick={sagaProducts}>reloadsaga</button>
      </header>
    </div>
  );
}

export default App;

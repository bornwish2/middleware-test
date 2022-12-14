import { IProduct } from './../models/product.type';
import axios from "axios";
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductFailure, fetchProductSuccess } from './productActionSaga';
import { FETCH_PRODUCT_REQUEST } from '../models/action.types';


const getProducts = () =>
  axios.get<IProduct[]>("https://fakestoreapi.com/products");

/*
  Worker Saga: Fired on FETCH_PRODUCT_REQUEST action
*/
function* fetchProductSaga():any {
  try {
    const response = yield call(getProducts)
    yield put(
      fetchProductSuccess({
        products: response.data,
      })
    );
  } catch (e:any) {
    yield put(
      fetchProductFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_PRODUCT_REQUEST` action.
  Allows concurrent increments.
*/
function* productSaga() {
  yield all([takeLatest(FETCH_PRODUCT_REQUEST, fetchProductSaga)]);
}

export default productSaga;
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, ProductActions, ProductState } from "../models/action.types";

  
  const initialState: ProductState = {
    pending: false,
    products: [],
    error: null,
  };
  
  export default (state = initialState, action: ProductActions) => {
    switch (action.type) {
      case FETCH_PRODUCT_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_PRODUCT_SUCCESS:
        return {
          ...state,
          pending: false,
          products: action.payload.products,
          error: null,
        };
      case FETCH_PRODUCT_FAILURE:
        return {
          ...state,
          pending: false,
          products: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
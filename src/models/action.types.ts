import { IProduct } from './product.type';

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";


export interface ProductState {
  pending: boolean;
  products: IProduct[];
  error: string | null;
}


export interface FetchProductSuccessPayload {
    products: IProduct[];
  }

export interface FetchProductFailurePayload {
    error: string;
  }
  
  export interface FetchProductRequest {
    type: typeof FETCH_PRODUCT_REQUEST;
  }
  
  export type FetchProductSuccess = {
    type: typeof FETCH_PRODUCT_SUCCESS;
    payload: FetchProductSuccessPayload;
  };
  
  export type FetchProductFailure = {
    type: typeof FETCH_PRODUCT_FAILURE;
    payload: FetchProductFailurePayload;
  };

export type ProductActions =
  | FetchProductRequest
  | FetchProductSuccess
  | FetchProductFailure;
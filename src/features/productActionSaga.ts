import * as actionTypes from "../models/action.types";


export const fetchProductRequest = (): actionTypes.FetchProductRequest => ({
    type: actionTypes.FETCH_PRODUCT_REQUEST,
});

export const fetchProductSuccess = (
    payload: actionTypes.FetchProductSuccessPayload
): actionTypes.FetchProductSuccess => ({
    type: actionTypes.FETCH_PRODUCT_SUCCESS,
    payload,
});

export const fetchProductFailure = (
    payload: actionTypes.FetchProductFailurePayload
): actionTypes.FetchProductFailure => ({
    type: actionTypes.FETCH_PRODUCT_FAILURE,
    payload,
});
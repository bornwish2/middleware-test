
import { createSelector } from "reselect";
import { RootState } from "../store";

const getPending = (state: RootState) => state.productsSaga.pending;

const getProducts = (state: RootState) => state.productsSaga.products;

const getError = (state: RootState) => state.productsSaga.error;

export const getProductsSelector = createSelector(getProducts, (products) => products);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
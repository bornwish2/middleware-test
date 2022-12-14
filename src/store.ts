import { LCMidleware } from './middlewares/localStorageMiddleware';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product-slice";
import logger from 'redux-logger';

import productReducerSaga from './features/productReducerSaga';



export const store = configureStore({
    reducer: {
        products: productReducer,   
        productsSaga: productReducerSaga
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LCMidleware,logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


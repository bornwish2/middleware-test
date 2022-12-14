import { LCMidleware } from './middlewares/localStorageMiddleware';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product-slice";

export const store=configureStore({
    reducer:{
        products: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(LCMidleware),
});

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch
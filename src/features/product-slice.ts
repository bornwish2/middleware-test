import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../models/product.type";

const initialState: IProduct[] = [
    {
        id: 0,
        title: "nothing",
        description: "nothing",
        category: "something",
        image: "nothing",
        price: 0.0,
        rating: {
            rate: 0.0,
            count: 0,
        }
    },
]

export const getAllProductsAsync = createAsyncThunk(
    'products/getAllAsync',
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        return response.data
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getAllProducts: (state, action: PayloadAction<IProduct[]>) => {
            console.log(action.type);
            state.pop();
            action.payload.forEach(element => {
                state.push(element)
            });
            // state.concat(action.payload);
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProductsAsync.fulfilled, (state, action) => {
            // Add user to the state array
            while(state.length){
                state.pop();
              }  
            state.concat(action.payload)
            
        })
    },
});

export const {
    getAllProducts,

} = productSlice.actions

export default productSlice.reducer
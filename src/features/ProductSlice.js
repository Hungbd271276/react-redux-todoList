import { createSlice } from '@reduxjs/toolkit'
import { getProducts, deleteProduct } from '../API/ProductAPI';
const initialState = {
    products: [],
    status: null,
}

export const ProductSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.status = "loading"
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = "cussess";
            state.products = action.payload;
        },
        [getProducts.rejected]: (state) => {
            state.status = "failed";
        },
        [deleteProduct.pending]: (state) => {
            state.status = "loading"
        },

        [deleteProduct.fulfilled]: (state, action) => {
            state.status = "cusscess";
            state.products = state.products.filter(
                (item) => item.id !== action.payload.id
            );
        },
        [deleteProduct.rejected]: (state) => {
            state.status = "failed";
        },


    }
})

// Action creators are generated for each case reducer function

export default ProductSlice.reducer
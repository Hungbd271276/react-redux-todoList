import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../features/ProductSlice';

const store = configureStore({
    reducer: {
        products: ProductSlice
    }
})
export default store;
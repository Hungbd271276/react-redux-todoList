import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    "product/getProducts",
    async () => {
        const { data } = await axios.get(
            "https://60f05516f587af00179d3eb4.mockapi.io/product"
        );
        return data;
    }
)

export const addProduct = createAsyncThunk(
    "product/getProducts",
    async (product) => {
        const { data } = await axios.post(
            "https://60f05516f587af00179d3eb4.mockapi.io/product",
            product
        )
        console.log(data)
    }
)

export const getIDproduct = createAsyncThunk(
    "product/getProducts",
    async (id) => {
        const { data } = await axios.get(
            `https://60f05516f587af00179d3eb4.mockapi.io/product/${id}`
        )
        return data
    }
)

export const updateProduct = createAsyncThunk(
    "product/getProducts",
    async (id, product) => {
        const { data } = await axios.put(
            `https://60f05516f587af00179d3eb4.mockapi.io/product/${id}`,
            product
        )
        return data;
    }
)

export const deleteProduct = createAsyncThunk(
    "product/getproducts",
    async (id) => {
        const { data } = await axios.delete(
            `https://60f05516f587af00179d3eb4.mockapi.io/product/${id}`,
        );
        console.log(data);
        return data;
    }
);

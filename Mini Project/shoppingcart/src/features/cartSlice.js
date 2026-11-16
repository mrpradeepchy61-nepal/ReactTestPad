import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: []
    },

    reducers: {
        addToCart: (state, action) => {
            const product = state.items.find(
                item => item.id === action.payload.id
            );

            if (product) {
                product.quantity++;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

        increase: (state, action) => {
            const item = state.items.find(
                item => item.id === action.payload
            );
            if (item) item.quantity++;
        },

        decrease: (state, action) => {
            const item = state.items.find(
                item => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {
    addToCart,
    increase,
    decrease,
    removeFromCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
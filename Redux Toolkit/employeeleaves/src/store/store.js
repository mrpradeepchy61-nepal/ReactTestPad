import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/ReduxSlice";

const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
})

export default store;
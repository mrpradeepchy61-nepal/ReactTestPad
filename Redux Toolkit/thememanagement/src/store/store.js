import { configureStore } from "@reduxjs/toolkit";
import themeRuducer from "../features/ThemeSlice";

const store = configureStore({
    reducer: {
        theme: themeRuducer
    }
})

export default store;
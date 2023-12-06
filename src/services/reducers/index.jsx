import { configureStore } from "@reduxjs/toolkit";

import languageSlice from "../actions/languageSlice";
import themeSlice from "../actions/themeSlice";
import authSlice from '../actions/authSlice';
import cartSlice from "../actions/cartSlice";

const store = configureStore({
    reducer: {
        languageSlice,
        themeSlice,
        authSlice,
        cartSlice,
    },
});

export default store;
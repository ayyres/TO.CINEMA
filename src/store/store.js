import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducer/themeReducer";
import movieReducer from "./reducer/movieReduser";

const store = configureStore({
    reducer :{
        theme : themeReducer,
        movieReducer : movieReducer
    },
});

export default store;
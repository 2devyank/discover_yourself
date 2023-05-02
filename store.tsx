import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./features/Register";



export const store =configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware)

})
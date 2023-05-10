import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./features/Register";
import { expApi } from "./features/Experience";
import { projectApi } from "./features/Project";



export const store =configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [expApi.reducerPath]:expApi.reducer,
        [projectApi.reducerPath]:projectApi.reducer

    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware).concat(expApi.middleware).concat(projectApi.middleware)

})
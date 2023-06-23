import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authApi } from "./features/Register";
import { expApi } from "./features/Experience";
import { projectApi } from "./features/Project";
import { messageApi } from "./features/Message";
import { converseApi } from "./features/Converse";
import { feedApi } from "./features/Feed";
import inputreducer from "./features/Input";


export const store =configureStore({
    reducer:{
        [authApi.reducerPath]:authApi.reducer,
        [expApi.reducerPath]:expApi.reducer,
        [projectApi.reducerPath]:projectApi.reducer,
        [messageApi.reducerPath]:messageApi.reducer,
        [converseApi.reducerPath]:converseApi.reducer,
        [feedApi.reducerPath]:feedApi.reducer,
        input:inputreducer,


    },
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(authApi.middleware).concat(expApi.middleware).concat(projectApi.middleware).concat(messageApi.middleware).concat(converseApi.middleware).concat(feedApi.middleware)

})
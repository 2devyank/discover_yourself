import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const expApi=createApi({
    reducerPath:"expApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
       exps: builder.query({
        query:()=>({
            url:"/exp",
            headers:{"Authorization":`Bearer ${token}`}
        })
       }),
       postexps:builder.query({
        query:(exp)=>({
            url:"/exp",
            method:"POST",
            body:{exp}
        })
       }),
       putexp:builder.query({
        query:({id,...exp})=>({
            url:`/exp/${id}`,
            method:"PUT",
            body:{exp}
        })
       }),
       deleteexp:builder.query({
        query:(id)=>({
            url:`/exp/${id}`,
            method:"DELETE"
        })
       })
    })
})
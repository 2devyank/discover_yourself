import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


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
       postexps:builder.mutation({
        query:(exp)=>({
            url:"/exp",
            method:"POST",
            body:{exp}
        })
       }),
       putexp:builder.mutation({
        query:({id,...exp})=>({
            url:`/exp/${id}`,
            method:"PUT",
            body:{exp}
        })
       }),
       deleteexp:builder.mutation({
        query:(id)=>({
            url:`/exp/${id}`,
            method:"DELETE"
        })
       })
    })
})

export const {useExpsQuery,usePostexpsMutation,useDeleteexpMutation,usePutexpMutation}=expApi;
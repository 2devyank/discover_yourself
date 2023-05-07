import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";


const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const projectApi=createApi({
    reducerPath:"projectApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
       eproject: builder.query({
        query:()=>({
            url:"/project",
            headers:{"Authorization":`Bearer ${token}`}
        })
       }),
       posteproject:builder.query({
        query:(exp)=>({
            url:"/project",
            method:"POST",
            body:{exp}
        })
       }),
       putproject:builder.query({
        query:({id,...exp})=>({
            url:`/project/${id}`,
            method:"PUT",
            body:{exp}
        })
       }),
       deleteproject:builder.query({
        query:(id)=>({
            url:`/project/${id}`,
            method:"DELETE"
        })
       })
    })
})
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const projectApi=createApi({
    reducerPath:"projectApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
       project: builder.query({
        query:()=>({
            url:"/project",
            headers:{"Authorization":`Bearer ${token}`}
        })
       }),
       posteproject:builder.mutation({
        query:(exp)=>({
            url:"/project",
            method:"POST",
            headers:{"Authorization":`Bearer ${token}`},
            body:exp
        })
       }),
       putproject:builder.mutation({
        query:({id,...exp})=>({
            url:`/project/${id}`,
            method:"PUT",
            body:exp
        })
       }),
       deleteproject:builder.mutation({
        query:(id)=>({
            url:`/project/${id}`,
            method:"DELETE"
        })
       })
    })
})

 export const {usePutprojectMutation,useDeleteprojectMutation,usePosteprojectMutation,useProjectQuery}=projectApi;
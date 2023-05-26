import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface output{
    userid:number,
    title:string,
    description:string,
    source:string,
    tags:string[],
    deploy:string,
   projectid:number
  }
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const projectApi=createApi({
    reducerPath:"projectApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
       project: builder.query<output[],void>({
        query:()=>({
            url:"/project",
            headers:{"Authorization":`Bearer ${token}`}
        })
       }),
       projectbyid: builder.query<output,void>({
        query:(id)=>({
            url:`/project/${id}`,
           
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

 export const {usePutprojectMutation,useDeleteprojectMutation,usePosteprojectMutation,useProjectQuery,useProjectbyidQuery}=projectApi;
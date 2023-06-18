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
    tagTypes:['Project'],
    endpoints:(builder)=>({
       project: builder.query<output[],void>({
        query:()=>({
            url:"/project",
            headers:{"Authorization":`Bearer ${token}`}
        }),
        providesTags:['Project']
       }),
       projectbyid: builder.query<output,void>({
        query:(id)=>({
            url:`/project/${id}`,
        }),
        providesTags:['Project']
       }),
       posteproject:builder.mutation({
        query:(exp)=>({
            url:"/project",
            method:"POST",
            headers:{"Authorization":`Bearer ${token}`},
            body:exp
        }),
        invalidatesTags:['Project']
       }),
       putproject:builder.mutation({
        query:({id,...exp})=>({
            url:`/project/${id}`,
            method:"PUT",
            headers:{"Authorization":`Bearer ${token}`},
            body:exp
        }),
        invalidatesTags:['Project']
       }),
       deleteproject:builder.mutation({
        query:(id)=>({
            url:`/project/${id}`,
            method:"DELETE"
        }),
        invalidatesTags:['Project']
       })
    })
})

 export const {usePutprojectMutation,useDeleteprojectMutation,usePosteprojectMutation,useProjectQuery,useProjectbyidQuery}=projectApi;
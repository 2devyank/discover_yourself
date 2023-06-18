import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface output{
    userid:number,
    position:string,
    organization:string,
    role:string,
    start:string[],
    last:string,
   expid:number
  }
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const expApi=createApi({
    reducerPath:"expApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    tagTypes:['Exp'],
    endpoints:(builder)=>({
       exps: builder.query<output[],void>({
        query:()=>({
            url:"/exp",
            headers:{"Authorization":`Bearer ${token}`}
        }),
        providesTags:['Exp']
       }),
       expsbyid: builder.query<output,void>({
        query:(id)=>({
            url:`/exp/${id}`,
          
        }),
        providesTags:['Exp']
       }),
       postexps:builder.mutation({
        query:(exp)=>({
            url:"/exp",
            method:"POST",
            headers:{"Authorization":`Bearer ${token}`},
            body:exp
        }),
        invalidatesTags:['Exp']
       }),
       putexp:builder.mutation({
        query:({id,...exp})=>({
            url:`/exp/${id}`,
            method:"PUT",
            headers:{"Authorization":`Bearer ${token}`},
            body:exp
        }),
        invalidatesTags:['Exp'],
       }),
       deleteexp:builder.mutation({
        query:(id)=>({
            url:`/exp/${id}`,
            method:"DELETE"
        }),
        invalidatesTags:['Exp']
       })
    })
})

export const {useExpsQuery,usePostexpsMutation,useDeleteexpMutation,usePutexpMutation,useExpsbyidQuery}=expApi;
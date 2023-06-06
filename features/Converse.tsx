import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface output{
members:number[],
con_id:number
}

export const converseApi=createApi({
    reducerPath:"converseApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
        converse: builder.query<output[],void>({
            query:(id)=>({
                url:`/converse/${id}`,
            })
           }),
           postconverse:builder.mutation({
            query:(con)=>({
                url:"/converse",
                method:"POST",
                body:con
            })
           }),
    })

})

export const {useConverseQuery,usePostconverseMutation}=converseApi;
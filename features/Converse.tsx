import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface output{
members:string[],
con_id:number
}

export const converseApi=createApi({
    reducerPath:"converseApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    tagTypes:['Con'],
    endpoints:(builder)=>({
        converse: builder.query<output[],void>({
            query:(id)=>({
                url:`/converse/${id}`,
            }),
            providesTags:['Con']
            
           }),
           postconverse:builder.mutation({
            query:(con)=>({
                url:"/converse",
                method:"POST",
                body:con
            }),
            invalidatesTags:['Con']
            
           }),
    })

})

export const {useConverseQuery,usePostconverseMutation}=converseApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface output{
    con_id:number|undefined,
    text:string|undefined,
    sender:string|null
}

export const messageApi=createApi({
    reducerPath:"messageApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    tagTypes:['Mes'],
    endpoints:(builder)=>({
        message: builder.query<output[],void>({
            query:(id)=>({
                url:`/message/${id}`,
               
            }),
            providesTags:['Mes'],
           }),
           postmessage:builder.mutation({
            query:(mes)=>({
                url:"/message",
                method:"POST",
                body:mes
            }),
            invalidatesTags:['Mes']
           })
    })

})

export const {useMessageQuery,usePostmessageMutation}=messageApi;
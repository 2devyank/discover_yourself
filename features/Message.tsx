import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


interface output{
    con_id:number,
    text:string,
    sender:number
}

export const messageApi=createApi({
    reducerPath:"messageApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    endpoints:(builder)=>({
        message: builder.query<output[],void>({
            query:(id)=>({
                url:`/message/${id}`,
               
            })
           }),
           postmessage:builder.mutation({
            query:(mes)=>({
                url:"/message",
                method:"POST",
                body:mes
            })
           })
    })

})

export const {useMessageQuery,usePostmessageMutation}=messageApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface output{
    text:string,
    url:string
}
const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

export const feedApi=createApi({
    reducerPath:"feedApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:8080/"
    }),
    tagTypes:['Feed'],
    endpoints:(builder)=>({
        feed: builder.query<output[],void>({
            query:()=>({
                url:"/feed",
                
            }),
            providesTags:['Feed']
           }),
           postfeed:builder.mutation({
            query:(feed)=>({
                url:`/feed`,
                method:"POST",
                body:feed,
                
                headers:{"Authorization":`Bearer ${token}`}
            }),
            invalidatesTags:['Feed']
           }),
           deletefeed:builder.mutation({
            query:(id)=>({
                url:`/feed/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:['Feed']
        }),
        updatefeed:builder.mutation({
            query:({id,...feed})=>({
                url:`feed/${id}`,
                method:"PUT",
                body:feed,

            }),
invalidatesTags:['Feed']
        }),

    })

})

export const {useFeedQuery,usePostfeedMutation,useDeletefeedMutation,useUpdatefeedMutation}=feedApi;
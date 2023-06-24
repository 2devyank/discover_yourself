import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface output{
    text:string,
    url:string,
    img:string,
    name:string,
    expertise:string,
    love:number,
    comments:string[],
    id:number,
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
            query:(page)=>({
                url:`/feeder/${page}`,
                
            }),
            providesTags:['Feed']
           }),
           getfeedbyid: builder.query<output,void>({
            query:(id)=>({
                url:`/feed/${id}`,
                
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

export const {useLazyFeedQuery,useGetfeedbyidQuery,useFeedQuery,usePostfeedMutation,useDeletefeedMutation,useUpdatefeedMutation}=feedApi;
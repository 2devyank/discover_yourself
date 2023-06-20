'use client'
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
console.log(token);
interface output{
  id:number,
  name:string,
  email:string,
  portfoilo:string,
  skills:string[],
  expertise:string,
  about:string,
  password:string,
  img:string,
  available:string[]
}

interface Root {
  data: Data
}

 interface Data {
  accesToken: string
}
type taks={
  email:string,
  password:string
}
export const authApi=createApi({
reducerPath:"authsApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:8080/"
}),
tagTypes:['User'],
endpoints:(builder)=>({
  users:builder.query<output,void>({
    query:()=>({
      url:"/user",
      headers:{"Authorization":`Bearer ${token}`}
    }),
    providesTags:['User'],
  }) ,
  userbyid:builder.query<output,void>({
    query:(id)=>({
      url:`/user/${id}`,
      headers:{"Authorization":`Bearer ${token}`}
    }),
    providesTags:['User']
  }) ,
  allusers:builder.query({
    query:(args)=>{
      const {skills,available,page,limit}=args;
      return {
        url:`/alluser?skills=${skills}&available=${available}&page=${page}&limit=${limit}`
      }
    },

  }),
  addauth:builder.mutation({
    query:(task)=>({
      url:"/register",
      method:"POST",
      body:task
    }),
    invalidatesTags:['User'],
  }),
  loginTask:builder.mutation({
    query:(task)=>({
      url:"/login",
      method:"POST",
      body:task
    }),
    invalidatesTags:['User']
  }) ,
  UpdateTask:builder.mutation({
    query:({id,...task})=>({
      url:`/updateuser/${id}`,
      headers:{"Authorization":`Bearer ${token}`},
      method:"PUT",
      body:task
    }),
    invalidatesTags:['User']

  })
  
})
})

export const {useUserbyidQuery,useUsersQuery,useLazyAllusersQuery,useLoginTaskMutation,useAddauthMutation,useUpdateTaskMutation} =authApi;
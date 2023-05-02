'use client'
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
console.log(token);
interface output{
  id:number,
  name:string,
  email:string,
  portfolio:string,
  skills:string[],
  expertise:string,
  about:string,
  password:string,
  img:string
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
endpoints:(builder)=>({
  users:builder.query<output,void>({
    query:()=>({
      url:"/user",
      headers:{"Authorization":`Bearer ${token}`}
    })
  }) ,
  addauth:builder.mutation({
    query:(task)=>({
      url:"/register",
      method:"POST",
      body:task
    })
  }),
  loginTask:builder.mutation({
    query:(task)=>({
      url:"/login",
      method:"POST",
      body:task
    })
  }) 
})
})

export const {useUsersQuery,useLoginTaskMutation,useAddauthMutation} =authApi;
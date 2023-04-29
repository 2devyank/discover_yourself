import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


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
export const taskApi=createApi({
reducerPath:"tasksApi",
baseQuery:fetchBaseQuery({
    baseUrl:"http://localhost:8080/"
}),
endpoints:(builder)=>({
  tasks:builder.query<output[],void>({
    query:(body)=>"/user"
  }) ,
  addTask:builder.mutation({
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

export const {useTasksQuery,useAddTaskMutation,useLoginTaskMutation} =taskApi;
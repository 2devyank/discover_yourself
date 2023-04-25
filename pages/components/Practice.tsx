import { taskApi, useTasksQuery } from '@/features/Register'
import { taskCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'

export function Practice() {
    const {data,error,isLoading,isSuccess}=useTasksQuery();
    console.log(data);
  return (
    <div>
       {data?.map((d,i)=>{
      return  <div key={i}>
{d.email}
        </div>
       })}
</div>
     
  
  )
}



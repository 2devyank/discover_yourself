import {  useUsersQuery } from '@/features/Register'
import { taskCancelled } from '@reduxjs/toolkit/dist/listenerMiddleware/exceptions'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'

export function Practice() {
    const {data,error,isLoading,isSuccess}=useUsersQuery();
    console.log(data);
  return (
    <div>
      
</div>
     
  
  )
}



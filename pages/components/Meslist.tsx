import { useUserbyidQuery } from '@/features/Register';
import React, { useEffect, useState } from 'react'




interface output{
    members:string[],
    con_id:number
    }
export default function Meslist({data,currentuser}:{data:output,currentuser:string|null}) {
   
   
const fid=data.members.find((id)=>id!==currentuser);
const {data:udata,isSuccess}=useUserbyidQuery(fid as unknown as void);
console.log(udata);
   
  return (
    <div>
        {
            isSuccess &&
<h1>{udata.name}</h1>
        }
    </div>
  )
}

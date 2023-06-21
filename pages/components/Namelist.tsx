import { useUsernameQuery } from '@/features/Register';
import React, { useEffect, useState } from 'react'

export default function Namelist({name}:{name:string}) {
    const [filterterm,setfilterterm]=useState<string>("");
    const {data:ndata,isLoading:nload}=useUsernameQuery(filterterm as unknown as void);
console.log(ndata);

useEffect(()=>{
if(name.length===0||name.length>4){
    setfilterterm(name);
}
},[name])

  return (
    <div>{
    ndata?.map((d)=>(
<span>{d.name}</span>
    ))
    }</div>
  )
}

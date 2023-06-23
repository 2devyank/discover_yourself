import { replaceinput } from '@/features/Input';
import { useUsernameQuery } from '@/features/Register';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Namelist({name}:{name:string}) {
    const [filterterm,setfilterterm]=useState<string>("");
    const {data:ndata,isLoading:nload}=useUsernameQuery(filterterm as unknown as void);
console.log(ndata);
console.log(filterterm);
useEffect(()=>{
if(name.length===0||name.length>4){
    setfilterterm(name);
}
},[name])
const dispatch=useDispatch();
  return (
    <div>{
    ndata?.map((d,i)=>(
<span key={i} onClick={()=>dispatch(replaceinput(d.name))} >{d.name}</span>
    ))
    }</div>
  )
}

import React, { useEffect, useState } from 'react'

export default function UseDebounce(value:string,delay:number) {
  const [debvalue,setdebvalue]=useState<string>(value);

  useEffect(()=>{
const handler=setTimeout(()=>{
setdebvalue(value)
},delay)
return ()=>clearTimeout(handler)
  },[value,delay])

  return debvalue;
}

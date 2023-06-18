import Image from 'next/image'
import React from 'react'

export default function Feedcard({text,url,img}:{img:string,text:string,url:string}) {
  return (
    <div>
<p>{text}</p>
{
 url && <img src={url} alt="" width={300} height={300} />
}
{
  img && <img alt="" src={`https://uhkmsfzpbtmaewocyogf.supabase.co/storage/v1/object/public/images/${img}`}  width={300} height={300}/>
}
  </div>
  )
}

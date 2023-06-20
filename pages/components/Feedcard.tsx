import Image from 'next/image'
import React from 'react'
import love from "../../public/love.png"
import comm from "../../public/comment.png"
import share from "../../public/share.png"
export default function Feedcard({text,url,img,name,exp}:{name:string,exp:string,img:string,text:string,url:string}) {
  return (
    <div>
      <div>{name}</div>
      <div>{exp}</div>
<p>{text}</p>
{
 url && <img src={url} alt="" width={300} height={300} />
}
{
  img && <img alt="" src={`https://uhkmsfzpbtmaewocyogf.supabase.co/storage/v1/object/public/images/${img}`}  width={300} height={300}/>
}
<div>
  <div>

  <Image 
  src={love}
  alt="af"
  width={20}
  height={20}
  />
  </div>
  <div>

  <Image 
  src={comm}
  alt="af"
  width={20}
  height={20}
  />
  </div>
  
  <Image 
  src={share}
  alt="af"
  width={20}
  height={20}
  />
  
</div>
  </div>
  )
}

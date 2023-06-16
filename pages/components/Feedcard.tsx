import React from 'react'

export default function Feedcard({text,url}:{text:string,url:string}) {
  return (
    <div>
<p>{text}</p>
<img src={url} alt="" width={300} height={300} />
    </div>
  )
}

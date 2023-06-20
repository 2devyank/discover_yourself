import Image from 'next/image'
import React from 'react'
import lovei from "../../public/love.png"
import comm from "../../public/comment.png"
import share from "../../public/share.png"
import back from "../../public/portfolio.png"
import styles from "../../styles/feedcard.module.css"
import { useRouter } from 'next/router'



export default function Feedcard({id,text,url,img,name,exp,love,comments}:{id:number,love:number,comments:string[],name:string,exp:string,img:string,text:string,url:string}) {
  
  const router=useRouter();
  const handlegotopage=()=>{
  router.push(`/feedpage?id=${id}`)
  }
  return (
    <div className={styles.feedcard} onClick={handlegotopage}>
      <div className={styles.head}>{name}</div>
      <div className={styles.lowerh}>
        
        <Image
        src={back}
        alt="back"
        width={10} height={10}
        />
        {exp}</div>
<p>{text}</p>
{
 url && <img src={url} alt="" width={300} height={300} />
}
{
  img && <img alt="" src={`https://uhkmsfzpbtmaewocyogf.supabase.co/storage/v1/object/public/images/${img}`}  width={300} height={300}/>
}
<div className={styles.cardicon}>
  <div className={styles.lovediv}>

  <Image 
  src={lovei}
  alt="af"
  width={20}
  height={20}
  />
  {love}
  </div>
  <div className={styles.lovediv}>

  <Image 
  src={comm}
  alt="af"
  width={20}
  height={20}
  />
  {comments && comments.length !==0? <span>{comments.length}</span>:<span>0</span>
  }
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

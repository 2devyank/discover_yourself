import React, { useState } from 'react'
import styles from "../styles/dev.module.css"
import Feedcard from './components/Feedcard'
import { useGetfeedbyidQuery, useUpdatefeedMutation } from '@/features/Feed'
import { useRouter } from 'next/router'
import SendSharpIcon from '@mui/icons-material/SendSharp';

import Image from 'next/image'
export default function feedpage() {
  const [comment,setcomment]=useState<string>("");
  const router=useRouter();
  const id=router.query.id;
  console.log(id);
  const {data,isLoading,error}=useGetfeedbyidQuery(id as unknown as void );
 
  const [addcomment,results]=useUpdatefeedMutation();
    const handlefeedsend=async(e: { preventDefault: () => void; })=>{
  e.preventDefault();
  const feed={
    id,
    comments:comment
  }
  await addcomment(feed);
  setcomment("");
    }
console.log(data);
if(isLoading){
  return <div>Loading ...</div>
}
  return (
    <div className={styles.alldev}>
        <div className={styles.allboard}>

        <div className={styles.leftboard}>
        <div className={styles.inleftover}>
              <div className={styles.inleft}>
                <span>All Feed</span>
                <span>Polls</span>
                
              </div>
            </div>
        </div>
        <div className={styles.board}>
          
          {
            data &&
        <Feedcard  id={data?.id} text={data?.text} love={data?.love} comments={data?.comments}  url={data?.url} img={data?.img} name={data?.name} exp={data?.expertise}/>
          }
          <div>
            {
              data?.comments && data?.comments.map((da,i)=>(
                <div key={i} className={styles.comments}>
                  <span>{da}</span>
                </div>
              ))
            }
          </div>
          <div>
            <div className={styles.inputcover}>
            Add Comment

<div className={styles.inputbox}>
  <input type="text" className={styles.search} value={comment} onChange={(e)=>setcomment(e.target.value)}/>
  <div className={styles.icons}>
    <div className={styles.lefticon}>

 
  {/* <AlternateEmailIcon onClick={handleattherate}/> */}
    </div>
    {/* <button>SEND</button> */}
    <div className={styles.post} onClick={handlefeedsend}>
    <span>POST</span>
    <SendSharpIcon />
    </div>
  </div>



</div>

  </div>
          </div>
        </div>
        </div>
        
    </div>
  )
}

import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/message.module.css"
import { useConverseQuery } from '@/features/Converse'
import Meslist from './components/Meslist'
import { useMessageQuery,usePostmessageMutation } from '@/features/Message'
import Messenger from './components/Messenger'



export default function messages() {
  const [currentchat,setcurrentchat]=useState<number>();
  // const [newmessage,setnewmessage]=useState<string>("");
  const newmessage=useRef<HTMLTextAreaElement>(null);
  const viewref=useRef<HTMLDivElement>(null);
 
  const id = typeof window !== 'undefined' ? localStorage.getItem('userid') : null
  const {data,isLoading,isSuccess,error}=useConverseQuery(id as unknown as void);

const {data:mdata,isSuccess:misSuccess}=useMessageQuery(currentchat as unknown as void);
    console.log(mdata);

const [Addmes,result]=usePostmessageMutation();

const submitmessage=async(e: { preventDefault: () => void; })=>{
e.preventDefault();

const mes={
con_id:currentchat,
text:newmessage.current?.value,
sender:id
}
await Addmes(mes);

}
useEffect(()=>{
viewref.current?.scrollIntoView({behavior:"smooth"})
},[mdata])

  return (
    <div className={styles.allmes}>
      {
        isSuccess &&
        <div className={styles.leftmes}>
          {
            data?.map((data,i)=>(
              <div onClick={()=>setcurrentchat(data.con_id)}>
              <Meslist data={data} currentuser={id as unknown as number}/>
              </div>
              ))
          }
        </div>
            }
            {
              misSuccess &&
              <div className={styles.coverright}>

        <div className={styles.rightmes}>

          {
            mdata.map((mdata)=>(
              <div ref={viewref} className={styles.innerright}>
              <Messenger mesdata={mdata} own={mdata.sender.toString()===id }/>
          </div>
              ))
            }
        </div>
        <div className={styles.sendmes}>
<textarea 
name="" id="" 
cols={25} 
rows={5} 
ref={newmessage}
></textarea>
<button onClick={submitmessage}>Send</button>
        </div>
            </div>
        }
        
    </div>
  )
}

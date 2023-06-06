import React, { useEffect, useState } from 'react'
import styles from "../styles/message.module.css"
import { useConverseQuery } from '@/features/Converse'
import Meslist from './components/Meslist'
import { useMessageQuery } from '@/features/Message'
import Messenger from './components/Messenger'



export default function messages() {
  const [currentchat,setcurrentchat]=useState<number>();
 
  const id = typeof window !== 'undefined' ? localStorage.getItem('userid') : null
  const {data,isLoading,isSuccess,error}=useConverseQuery(id as unknown as void);

const {data:mdata,isSuccess:misSuccess}=useMessageQuery(currentchat as unknown as void);
    console.log(mdata);

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
        <div className={styles.rightmes}>
          {
            mdata.map((mdata)=>(
              <Messenger mesdata={mdata} own={mdata.sender.toString()===id }/>
            ))
          }
        </div>
        }
        
    </div>
  )
}

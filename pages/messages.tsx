import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/message.module.css"
import { useConverseQuery } from '@/features/Converse'
import Meslist from './components/Meslist'
import { useMessageQuery,usePostmessageMutation } from '@/features/Message'
import Messenger from './components/Messenger'
import { io } from 'socket.io-client'


interface output{
  members:number[],
  con_id:number
  }
  interface mesout{
    con_id:number|undefined,
    text:string|undefined,
    sender:string|null
}
interface out{
  text:string|null,
  sender:number,
  con_id:number
}
export default function messages() {
  const [currentchat,setcurrentchat]=useState<output>();
  const [message,setmessages]=useState<mesout[]>([]);
  const [fmessage,setfmessages]=useState<mesout[]>();
  const [arrivalmessage,setarrivalmessages]=useState<mesout>();
  // const [newmessage,setnewmessage]=useState<string>("");
  const newmessage=useRef<HTMLTextAreaElement>(null);
  const viewref=useRef<HTMLDivElement>(null);
  const socket = io('http://localhost:8080');
  const id = typeof window !== 'undefined' ? localStorage.getItem('userid') : null
  const {data,isLoading,isSuccess,error}=useConverseQuery(id as unknown as void);

const {data:mdata,isSuccess:misSuccess}=useMessageQuery(currentchat?.con_id as unknown as void);
   console.log(currentchat)
useEffect(()=>{
    setfmessages(mdata)
  
    },[mdata])

console.log(fmessage);
const [Addmes,result]=usePostmessageMutation();
const rid=currentchat?.members.find((user)=>user.toString()!==id)
const submitmessage=async(e: { preventDefault: () => void; })=>{
e.preventDefault();

const mes:mesout={
con_id:currentchat?.con_id,
text:newmessage.current?.value,
sender:id
}
setmessages([...message,mes])
socket.emit("sendMessage",{
  sender:id,
  receiverId:rid,
  con_id:currentchat?.con_id,
  text:newmessage.current?.value
})
await Addmes(mes);

}
useEffect(()=>{
viewref.current?.scrollIntoView({behavior:"smooth"})
},[message])

useEffect(()=>{
socket.emit("addUser",id)
socket.on("getUsers",users=>{
  console.log(users);
})
},[id]);

useEffect(()=>{
socket.on("getMessage",(data:mesout)=>{
  console.log(data)
  setarrivalmessages({
    text:data.text,
    sender:data.sender,
con_id:data.con_id,
  })
  setmessages(prev=>[...prev,data]);
})
},[])
useEffect(()=>{
  arrivalmessage && currentchat?.members.includes(Number(arrivalmessage?.sender))&&
  setmessages(prev=>[...prev,arrivalmessage]);
},[arrivalmessage,currentchat])
console.log(message);
  return (
    <div className={styles.allmes}>
      {
        isSuccess &&
        <div className={styles.leftmes}>
          {
            data?.map((data,i)=>(
              <div onClick={()=>setcurrentchat(data)}>
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
            message?.map((mdata)=>(
              <div ref={viewref} className={styles.innerright}>
              <Messenger mesdata={mdata} own={mdata?.sender===id }/>
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

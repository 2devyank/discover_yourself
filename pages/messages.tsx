import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/message.module.css"
import { useConverseQuery } from '@/features/Converse'
import Meslist from './components/Meslist'
import { useMessageQuery,usePostmessageMutation } from '@/features/Message'
import Messenger from './components/Messenger'
import { Socket, io } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'


interface output{
  members:string[],
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
  const [newmessage,setnewmessage]=useState<string>("");
  const viewref=useRef<HTMLDivElement>(null);
  const id = typeof window !== 'undefined' ? localStorage.getItem('userid') : null
  const {data,isLoading,isSuccess,error}=useConverseQuery(id as unknown as void);
  interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  const {data:mdata,isSuccess:misSuccess}=useMessageQuery(currentchat?.con_id as unknown as void);
  
  // console.log(mdata)
  // const socket: Socket<ServerToClientEvents, ClientToServerEvents>=useRef();
  // socket.current=io('http://localhost:8080')
  let socket=useRef <Socket<DefaultEventsMap, DefaultEventsMap>>();
  // const socket = io('http://localhost:8080');
  useEffect(()=>{
    socket.current=io("http://localhost:8080")
    
    socket.current?.on("getMessage",(data:mesout)=>{
      console.log(data)
      setarrivalmessages({
        text:data.text,
        sender:data.sender,
    con_id:data.con_id,
      })
      // setmessages(prev=>[...prev,data]);
      
    })
    },[])


    const handlepersonClick=(data:output)=>{
    
      setcurrentchat(data)
//       let room=currentchat?.members[0].concat(currentchat?.members[1]).split("").sort().join("");
//       console.log("room"+room);
// socket.current?.emit("private_room",room);

      setarrivalmessages({
        text:'',
        sender:'',
    con_id:-1,
      })
     
    }

console.log(socket.current?.id);
console.log(fmessage);
const [Addmes,result]=usePostmessageMutation();
const submitmessage=async(e: { preventDefault: () => void; })=>{
  e.preventDefault();
  
  const mes:mesout={
    con_id:currentchat?.con_id,
    text:newmessage,
    sender:id
  }
  
  const rid=currentchat?.members.find((user)=>user.toString()!==id)
setmessages([...message,mes]);
// currentchat?.members.some((val)=>val===id) && setmessages([...message,mes])
// let room=currentchat?.members[0].concat(currentchat?.members[1]).split("").sort().join("");
 socket.current?.emit("sendMessage",{
  
  sender:id,
  receiverId:rid,
  con_id:currentchat?.con_id,
  text:newmessage
})
await Addmes(mes);
setnewmessage("")
}

useEffect(()=>{
viewref.current?.scrollIntoView({behavior:"smooth"})
},[mdata,message])

useEffect(()=>{
socket.current?.emit("addUser",id)
socket.current?.on("getUsers",users=>{
  console.log(users);
})
},[]);

// useEffect(()=>{
// socket.current?.on("getMessage",(data:mesout)=>{
//   console.log(data)
//   setarrivalmessages({
//     text:data.text,
//     sender:data.sender,
// con_id:data.con_id,
//   })
//   // setmessages(prev=>[...prev,data]);
  
// })
// },[])
console.log(currentchat?.members[0].concat(currentchat?.members[1]).split("").sort().join(""));
console.log(Number(arrivalmessage?.sender));
let num=arrivalmessage?.sender;
console.log(Number(num));
console.log(arrivalmessage?.sender);
console.log(currentchat?.members.some((val)=>val==num));
console.log(currentchat?.members.includes(arrivalmessage?.sender as string))
// console.log(currentchat?.members.indexOf(arrivalmessage?.sender!==-1));

useEffect(()=>{
  arrivalmessage && currentchat?.members.some((val)=>val===num) &&
  setmessages(prev=>[...prev,arrivalmessage]);
//   setarrivalmessages({
//     text:'',
//     sender:'',
// con_id:-1,
//   })
  return ()=>setmessages([{
    text:'',
        sender:'',
    con_id:-1,
  }]);
},[arrivalmessage,currentchat])
console.log(message);
  return (
    <div className={styles.allmes}>
     {
        isSuccess &&
        <div className={styles.leftmes}>
          {
            data?.map((data,i)=>(
              <div onClick={()=>handlepersonClick(data)}>
              <Meslist data={data} currentuser={id}/>
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
            mdata?.map((mdata)=>(
              <div ref={viewref} className={styles.innerright}>
              <Messenger mesdata={mdata} own={mdata?.sender==id }/>
          </div>
              ))
            }
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
value={newmessage}
onChange={(e)=>setnewmessage(e.target.value)}
></textarea>
<button onClick={submitmessage}>Send</button>
        </div>
            </div>
        }
        
    </div>
  )
}

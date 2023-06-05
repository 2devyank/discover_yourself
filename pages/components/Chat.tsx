import React, { SetStateAction, useEffect, useState } from 'react'
import { io } from 'socket.io-client';

interface messdata{
  room:string|undefined,
  message:string,
  author:string|undefined,
  time:string
}
const socket = io('http://localhost:8080');
export default function Chat({user,room}:{user:string|undefined,room:string|undefined}) {

    const [currentMessage,setCurrentMessage]=useState<string>("");
    const [messageList,setMessageList]=useState<messdata[]>([]);
  
  const handlesendmessage= async()=>{
    if(currentMessage!==""){
        const messagedata:messdata={
            room:room,
            message:currentMessage,
            author:user,
            time:new Date(new Date()).getHours()+":"+new Date(new Date()).getMinutes()
        }
        await socket.emit('send_message',messagedata);
        // setMessageList((list)=> [...list,messagedata]);
    }
  }

  useEffect(()=>{
    
    socket.on("receive_message",(data:messdata)=>{
      console.log("receive_message"+data);
setMessageList((list)=> [...list,data]);
    })
    
  },[socket]);
  // console.log(messageList);
    return (
    <div>
        <div className='chatheader'></div>
        <div className='chatbody'>
      {messageList.map((msg)=>(
<h1>{msg.message}</h1>
      ))}
        </div>
        <div className='chatfooter'>
            <input type="text" onChange={(e)=>setCurrentMessage(e.target.value)}/>
            <button onClick={handlesendmessage}>&#9658;</button>
        </div>
    </div>
  )
}

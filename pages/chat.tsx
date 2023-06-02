import React, { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client';
import { socket } from './chatform';
export default function chat() {

  interface user{
    message:string,
    username:string,
    __createdtime__:string
  }
  
  const [messagesRecieved,setMessagesRecieved]=useState<user[]>([]);
  // const socket = io('http://localhost:8080');

  useEffect(():any=>{
    console.log('hello')
socket.on('receive_message',(data)=>{
  console.log("data"+data);
  setMessagesRecieved((state) => [
    ...state,
    {
      message: data.message,
      username: data.username,
      __createdtime__: data.__createdtime__,
    },
  ]);
});

return ()=>socket.off('receive_message');
  },[socket]);
 function formatDateFromTimeStamp(timestamp:string){
  const date=new Date(timestamp);
  return date.toLocaleDateString();
 }
  return (
    <div>
      Hello
      {
        messagesRecieved.map((msg,i)=>(
          <div key={i}>
            {msg.username}
            <br />
            {formatDateFromTimeStamp(msg.__createdtime__)}
            <br />
          {msg.message} 
          </div>
        ))
      }

    </div>
  )
}

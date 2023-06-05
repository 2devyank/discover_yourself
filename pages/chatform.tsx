import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import { io, Socket } from "socket.io-client";
import Chat from './components/Chat';
import { useUserContext } from '@/context/User';



 const socket = io('http://localhost:8080');

export default function chatform() {
const router=useRouter();
const [user,setUser]=useState<string>("");
const [room,setRoom]=useState<string>("");
const about=useUserContext();
    
    const joinroom=()=>{
     if(about?.user!== ''&& about?.room !==''){
        socket.emit('join_room',about?.room)
     }   
   router.push("/chat");
    }

  // const joinroom=()=>{
  //   if(user!== ''&& room !==''){
  //      socket.emit('join_room',room)
  //   }   
  //  }

  return (
    <div>
    <h1>DevRoom</h1>
     <input type="text" placeholder='user' onChange={(e)=>about?.setUser(e.target.value)} />
     <input type="text" placeholder='roomId' onChange={(e)=>about?.setRoom(e.target.value)} />
      <button onClick={joinroom}>Join Room</button>
      {/* <Chat socket={socket} room={room} user={user}/> */}
    </div>
  )
}

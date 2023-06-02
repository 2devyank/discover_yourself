import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'
import { io, Socket } from "socket.io-client";
import Chat from './components/Chat';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}
interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}
export  const socket = io('http://localhost:8080');

export default function chatform() {
const router=useRouter();
const [user,setUser]=useState<string>("");
const [room,setRoom]=useState<string>("");
    
    const joinroom=()=>{
     if(user!== ''&& room !==''){
        socket.emit('join_room',room)
     }   
   
    }
  return (
    <div>
        <h1>DevRoom</h1>
     <input type="text" placeholder='user' onChange={(e)=>setUser(e.target.value)} />
     <input type="text" placeholder='roomId' onChange={(e)=>setRoom(e.target.value)} />
        <button onClick={joinroom}>Join Room</button>
        <Chat socket={socket} user={user} room={room}/>
    </div>
  )
}

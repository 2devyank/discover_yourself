import { Autocomplete, TextField } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react'


import { io, Socket } from "socket.io-client";
interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
// please note that the types are reversed
export  const socket = io('http://localhost:8080');

export default function chatform() {
const router=useRouter();
    // const userref=useRef<HTMLInputElement>()
const [userref,setuserref]=useState<string>();
    const [available,setavailable]=useState<string[]>([]);
    const availablelist=[
        'javascript',
        'React',
        'node',
        'express'
    ]
    const joinroom=()=>{
     if(userref!== ''&& available[0] !==''){
        socket.emit('join_room',{userref,available})
     }   
     router.push('/chat')
    }
  return (
    <div>
        <h1>DevRoom</h1>
        <TextField 
      
        onChange={(e)=>setuserref(e.target.value)}
        id="outlined-basic"
         label="email"
          variant="outlined" />
              <Autocomplete
        multiple
        id="tags-outlined"
      
        options={availablelist}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        onChange={(e,v)=>{
          setavailable(v)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Availability"
            placeholder="Availability"
          />
        )}
      />
        <button onClick={joinroom}>Join Room</button>
    </div>
  )
}

import React, { useState } from 'react'

export default function Chat({socket,user,room}:{socket:any,user:string,room:string}) {

    const [currentMessage,setCurrentMessage]=useState<string>("");
  
  const handlesendmessage= async()=>{
    if(currentMessage!==""){
        const messagedata={
            room:room,
            message:currentMessage,
            author:user,
            time:new Date(new Date()).getHours()+":"+new Date(new Date()).getMinutes()
        }
        await socket.emit('send_message',messagedata);
    }
  }
    return (
    <div>
        <div className='chatheader'></div>
        <div className='chatbody'></div>
        <div className='chatfooter'>
            <input type="text" onChange={(e)=>setCurrentMessage(e.target.value)}/>
            <button onClick={handlesendmessage}>&#9658;</button>
        </div>
    </div>
  )
}

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
import { io } from "socket.io-client";

interface about{
    socket:any,
    user:string,
    room:string,
    setUser:Dispatch<SetStateAction<string>>,
    setRoom:Dispatch<SetStateAction<string>>
}

const UserContext=createContext<about|null>(null);

export function User({children}:{children:any}){
    const [user,setUser]=useState<string>("");
    const [room,setRoom]=useState<string>("");
        
    const socket:any = io('http://localhost:8080');
    // const user="dev"
    // const socket="dev"
    // const room="dev"
    return (
        <UserContext.Provider value={{socket,room,user,setUser,setRoom}} >
            {children}
            </UserContext.Provider>
    )
}

export function useUserContext(){
    return useContext(UserContext);
}
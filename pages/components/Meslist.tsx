import { useUserbyidQuery } from '@/features/Register';
import { Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import styles from "../../styles/message.module.css"




interface output{
    members:string[],
    con_id:number
    }
export default function Meslist({data,currentuser}:{data:output,currentuser:string|null}) {
   
   
const fid=data.members.find((id)=>id!==currentuser);
const {data:udata,isSuccess}=useUserbyidQuery(fid as unknown as void);
console.log(udata);
   
  return (
    <div className={styles.parentelement}>
        {
            isSuccess &&
            <>
<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  {/* <PersonIcon /> */}
                </Avatar>
<span>{udata.name}</span>
            </>
        }
    </div>
  )
}

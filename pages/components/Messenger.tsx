import React from 'react'
import styles from "../../styles/Messenger.module.css"
interface output{
  con_id:number|undefined,
  text:string|undefined,
  sender:string|null
}

export default function Messenger({mesdata,own}:{mesdata:output,own:boolean}) {
    console.log(own);
  return (
<div className={own?styles.own:styles.notown}>
{mesdata.text}
    
    </div>
    
   
  )
}

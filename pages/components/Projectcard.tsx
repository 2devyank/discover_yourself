import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import styles from "../../styles/pcard.module.css"
import porject from "../../public/profile.png"


export default function Projectcard() {
    const skilarr=["java","js","xhtml"];
    return (
    <div>
        <div>
            
        <span>Project Name</span>
<MoreVertIcon/>
        </div>
<Image
src={porject}
height={300}
width={300}
alt="asdf"
/>
<div className={styles.skillcontext}>
{
  skilarr.map((val,index)=>(
      <span key={index} className={styles.skillb}>{val}</span>
      ))
}
      </div>

    </div>
  )
}

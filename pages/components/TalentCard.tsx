import React from 'react'
import styles from "../../styles/talentcard.module.css"
import Image from 'next/image'
import github from "../../public/github.png"
import link from "../../public/linkedin.png"
import skills from "../../public/creative-thinking.png"
import hacker from "../../public/hacker.png"
import { Button } from '@mui/material'
import { usePostconverseMutation } from '@/features/Converse'
import { useRouter } from 'next/router'


interface output{
  id:number,
  name:string,
  email:string,
  portfoilo:string,
  skills:string[],
  expertise:string,
  about:string,
  password:string,
  img:string,
  available:string[]
}

export default function TalentCard({data}:{data:output}) {
  const router=useRouter();
 const[addconverse]= usePostconverseMutation()
 const id = typeof window !== 'undefined' ? localStorage.getItem('userid') : null
  const skilarr=["java","js","xhtml"];
  const handlesendmessage=async(e: { preventDefault: () => void; })=>{
e.preventDefault();
const con={
  members:[data?.id.toString(),id]
}
await addconverse(con);
router.push('/messages');


  }
  const gotoprofilepage=(e: { preventDefault: () => void; })=>{
e.preventDefault();
router.push(`tpage?id=${data?.id}`)
  } 
  
  return (
    <div className={styles.borcard}>
        <div className={styles.cardhead}>
          <div className={styles.leftcardhead}>

            {/* <div className={styles.imgcolor}></div> */}
            <Image
            src={hacker}
            alt="pro"
            width={100}
            height={100}
            />

            <div className={styles.cardcred}>
            <span className={styles.talentname}>{data.name}</span>
            <span className={styles.talentname}>{data.expertise}</span>

            </div>
          </div>

            <div className={styles.back}>
            <Image src={github}
              className={styles.git}
              width={25}
              height={25}
              alt="github"
            />
            <Image src={link}
              className={styles.link}
              width={25}
              height={25}
              alt="linkedin"
            />
        </div>
        </div>
        <div>

<Image
  src={skills}
  width={15}
  height={15}
  alt="skills"
/> <span>Skills</span>
</div>
<div className={styles.skillcon}>
{
  data.skills && data.skills.map((val,index)=>(
      <span key={index} className={styles.skillbox}>{val}</span>
      ))
}
      </div>
     
      <div className={styles.cardfoot}>
      <Button  variant="contained" onClick={gotoprofilepage}>View Profile</Button>
      <div className={styles.space}>

      <Button  variant="contained">Share</Button>
      <Button  variant="contained" onClick={handlesendmessage} >Send Message</Button>
      </div>
      </div>


    </div>
  )
}

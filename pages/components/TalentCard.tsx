import React from 'react'
import styles from "../../styles/talentcard.module.css"
import Image from 'next/image'
import github from "../../public/github.png"
import link from "../../public/linkedin.png"
import skills from "../../public/creative-thinking.png"
import { Button } from '@mui/material'

export default function TalentCard() {
  
  
  const skilarr=["java","js","xhtml"];
  
  
  return (
    <div className={styles.borcard}>
        <div className={styles.cardhead}>
          <div className={styles.leftcardhead}>

            <div className={styles.imgcolor}></div>

            <div className={styles.cardcred}>
            <span className={styles.talentname}>Devyank Nagpal</span>
            <span className={styles.talentname}>Developer</span>

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
  skilarr.map((val,index)=>(
      <span key={index} className={styles.skillbox}>{val}</span>
      ))
}
      </div>
     
      <div className={styles.cardfoot}>
      <Button  variant="contained">View Profile</Button>
      <Button  variant="contained">Share</Button>
      </div>


    </div>
  )
}

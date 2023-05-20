import React from 'react'
import styles from "../../styles/talentcard.module.css"
import Image from 'next/image'
import github from "../../public/github.png"
import link from "../../public/linkedin.png"
import skills from "../../public/skills.png"

export default function TalentCard() {
  return (
    <div>
        <div>
            <div></div>
            <span className={styles.talentname}>Devyank Nagpal</span>
            <span className={styles.talentname}>Developer</span>
            <div className={styles.back}>
            <Image src={github}
              className={styles.git}
              width={30}
              height={30}
              alt="github"
            />
            <Image src={link}
              className={styles.link}
              width={30}
              height={30}
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

    </div>
  )
}

import React from 'react'
import styles from "../styles/hire.module.css"
import Image from 'next/image'
import select from "../public/select.png"
import quote from "../public/quote.png"
import TalentCard from './components/TalentCard'

export default function Hire() {
  return (
    <div className={styles.all}>
        {/* Front view element in above div */}
        <div className={styles.frontview}>
            <div className={styles.leftcontent}>
               <span className={styles.one}>
                 Find the one
                </span>
             
                <span className={styles.youare}>
                You are looking For
                </span>
              
            <div className={styles.quotes}>
              <Image 
              src={quote}
            className={styles.quo}
              width={50}
              height={50}
              alt="asdf"
              />  
               <span className={styles.fool}>Any fool can know. The point is to understand.</span>
              </div> 
               <br />
                <span className={styles.albert}>~ Albert Einstein</span>
            </div>
            <div className={styles.rightimage}>
              <div className={styles.imgcontainer}>
                <Image
                src={select}           
                alt="asdf"     
                className={styles.img}
               fill
                />
                </div>
            </div>
        </div>



        {/* list and filter table in below div */}
        <div>
            <div><TalentCard/></div>
            <div></div>
        </div>

    </div>
  )
}

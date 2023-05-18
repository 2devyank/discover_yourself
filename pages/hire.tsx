import React from 'react'
import styles from "../styles/hire.module.css"
import Image from 'next/image'
import select from "../public/select.png"
import quote from "../public/quote.png"

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
                <Image
                src={select}           
                alt="asdf"     
                width={500}
                height={500}
                />
            </div>
        </div>



        {/* list and filter table in below div */}
        <div>
            <div></div>
            <div></div>
        </div>

    </div>
  )
}

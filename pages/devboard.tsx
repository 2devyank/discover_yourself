import React from 'react'
import styles from "../styles/dev.module.css"
import { useFeedQuery } from '@/features/Feed'

export default function devboard() {

  const {data,isFetching,isSuccess,error}=useFeedQuery();
  console.log(data);
  return (
    <div>
        <div className={styles.allboard}>
            <div className={styles.leftboard}>
            <div className={styles.inleftover}>
              <div className={styles.inleft}>
                <span>All Feed</span>
                <span>Polls</span>
                
              </div>
            </div>
            </div>
            <div className={styles.board}>
              <div className={styles.inputcover}>

            <div className={styles.inputbox}>
              <input type="text" className={styles.search}/>

            </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

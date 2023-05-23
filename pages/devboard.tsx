import React from 'react'
import styles from "../styles/dev.module.css"

export default function devboard() {
  return (
    <div>
        <div>
            <div className={styles.leftboard}></div>
            <div className={styles.board}>

            </div>
            <div className={styles.rightboard}></div>
        </div>
    </div>
  )
}

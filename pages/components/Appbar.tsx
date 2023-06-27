import React, { useState } from 'react'
import styles from "../../styles/Header.module.css"
import Link from 'next/link'
// import try  from "../../public/try.png"
import image from "../../public/try.png"
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Appbar() {
  const router=useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const gotohome=()=>{
router.push("/")
  }
  
  return (
    <div className={styles.header}>
      <div className={styles.logonav}>

        <div className={styles.ooption} onClick={gotohome}>
         Discover
        </div>
        <ul className={click ? `${styles.navoptions} ${styles.active}` :styles.navoptions}>
         

          <li className={styles.option} onClick={closeMobileMenu}>
            <Link href="/hire" className={styles.rem}>Hire Talent</Link>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <Link href="/devboard" className={styles.rem} >Dev Board</Link>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <Link href="/messages" className={styles.rem}>Message</Link>
          </li>
          <li className={styles.option} onClick={closeMobileMenu}>
            <Link href="/profile/edit/projects" className={styles.probox}>
              <Image src={image} alt='flask' width={20} height={20}  className={styles.object}/>
              <span>
              build a Project
              </span>
              </Link>
          </li>
         
        </ul>
        
       
      </div>
      <ul className={styles.pop}>
        <li  onClick={closeMobileMenu}>
          <Link href="/profile/profile" className={styles.rem}>Profile</Link>
        </li>
       
      </ul>
     
      <div className={styles.mobilemenu} onClick={handleClick}>
        {click ? (
          // <CloseMenu className="menu-icon" />
<span className={styles.menuicon}>
  cross
</span>
        ) : (
          // <MenuIcon className="menu-icon" />
          <span>
<span className={styles.menuicon}>
menu
</span>
</span>
        )}
      </div>
    </div>
  )
}
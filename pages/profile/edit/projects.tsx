import React from 'react'
import styles from "../../../styles/Edit.module.css"
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 }
]
export default function projects() {
  return (
    <div>
    <div className={styles.down}>
    <div className={styles.leftbar}>
        <div className={styles.inleft}>
    
         <Link className={styles.leftnav} href="/profile/edit/profile">
     <Image
          src={prof}
          width={20}
          height={20}
          alt="skills"
        />
        <span className={styles.single}>
            Profile
          </span>
          </Link>
       
      
        <Link  className={styles.leftnav} href="/profile/edit/experience">
        <Image
          src={port}
          width={20}
          height={20}
          alt="skills"
        />
        <span className={styles.single}>

          Experience
        </span>
          </Link>
        
        
        <Link className={styles.leftnav} href="/profile/edit/projects">
        <Image
          src={lay}
          width={20}
          height={20}
          alt="skills"
        />
        <span className={styles.single}>

          Project
        </span>
          </Link>
        
      
        </div>
    </div>
    <div className={styles.rightbar}>
      <div className={styles.inrightbar}>
        <span className={styles.head}>Project</span>
        <span>Manage your work experience here</span>
        <Box
  component="form"
  className={styles.box}
  noValidate
  autoComplete="off"
>
  <div className={styles.inbox}>
    <TextField
    className={styles.field}
      required
      id="outlined-required"
      label="Title"
      defaultValue=" "
      placeholder='Enter Title'
    />
     <TextField
    className={styles.field}
      required
      id="outlined-required"
      label="Source Link"
      defaultValue=" "
      placeholder='Enter Source Link'
    />
    </div>
    <div className={styles.inbox}>
    <TextField
    className={styles.field}
      required
      id="outlined-required"
      label="Deploy Link"
      defaultValue=" "
      placeholder='Enter Deploy Link'
    />
    
    </div>
    <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[0]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Add Tags"
            placeholder="Tags"
          />
        )}
      />
    <TextField
    className={styles.field}
      id="outlined-multiline-static"
      label="About Project"
      multiline
      rows={4}
      defaultValue=" "
    />
  
    </Box>
      </div>
    </div>
</div>
</div>
  )
}

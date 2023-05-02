import React, { useState } from 'react'
import styles from "../../../styles/Edit.module.css"
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"
import { useDropzone } from 'react-dropzone'
import piexif from "piexif-ts"

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 }
]
export default function profile() {
  
  
  
  const [file,setfile]=useState<File>();
  const [filert,setfilert]=useState<string>('');

  const convertToBase64=(file:File)=>{

    return new Promise((resolve,reject)=>{
      const fileReader=new FileReader();
      fileReader.readAsDataURL(file);
     
      fileReader.onload=()=>{
        resolve(fileReader.result);
      }
      fileReader.onerror=(error)=>{
        reject(error);
      }
    })
  }
  
  
 
  

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
            <span className={styles.head}>Profile</span>
            <span>Details you share will be displayed on your profile</span>
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
          label="Name"
          defaultValue=" "
          placeholder='Enter Name'
        />
         <TextField
        className={styles.field}
          required
          id="outlined-required"
          label="Email"
          defaultValue=" "
          placeholder='Enter Email'
        />
        </div>
        <div className={styles.inbox}>
        <TextField
        className={styles.field}
          required
          id="outlined-required"
          label="Portfolio"
          defaultValue=" "
          placeholder='Enter Portfolio URL'
        />
         <TextField
        className={styles.field}
          required
          id="outlined-required"
          label="Expertise"
          defaultValue=" "
          placeholder='Enter expertise'
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
            label="Add skills"
            placeholder="Skills"
          />
        )}
      />
        <TextField
        className={styles.field}
          id="outlined-multiline-static"
          label="About YourSelf"
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

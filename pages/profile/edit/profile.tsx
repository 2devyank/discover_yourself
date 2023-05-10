import React, { useRef, useState } from 'react'
import styles from "../../../styles/Edit.module.css"
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"
import imgback from "../../../public/imgback.jpg"
import { useDropzone } from 'react-dropzone'


const top100Films = [
     '.NET CORE' ,
     'Alpine.JS',
     'Android' ,
     'React' ,
     'Apache Hadoop' ,
     'Apex' ,
     'ASP.NET' ,
     'AWS' ,
     'BackBone.J' ,
     'Bootstrap' ,
     'Bulma' ,
     'C' ,
     'C++' ,
     'C#' ,
     'CakePHP' ,
     'Cassandra' ,
     'Computer Vision' ,
     'CSS' ,
     'CouchBase' ,
     'Cycle.js' ,
     'Django' ,
     'Docker' ,
     'DynamoDB' ,
     'Elastic Search' ,
     'Electron' ,
     'Elixir' ,
     'Ember.js' ,
     'FastAPI' ,
     'Firebase' ,
     'Firestore' ,
     'Flask' ,
     'Gatsby.js' ,
     'Git' ,
     'GITHUB' ,
     'Golang' ,
     'GraphQL' ,
     'HTML' ,
     'Hibernate' ,
     'Java' ,
     'JavaScript' ,
     'Jenkins' ,
     'jQuery' ,
     'Kotlin' ,
     'kubernetes' ,
     'laravel' ,
     'Machine Learning' ,
     'MariaDB' ,
     'MongoDB' ,
     'Mysql' ,
     'Nest.js' ,
     'Next.js' ,
     'NumPy' ,
     'Nuxt' ,
     'Nodejs' ,
     'Oracle DB' ,
     'Perl' ,
    'PHP' ,
     'PostgreSQL' ,
     'Preact' ,
     'Python' ,
     'React Native' ,
     'Redis' ,
     'Redux' ,
     'Ruby' ,
     'Rust' ,
    'Scala' ,
     'SQLite' ,
     'Swift' ,
     'Typescript' ,
     'Tailwind CSS' ,
     'Vue' 
   
]
export default function profile() {  

const nameRef=useRef<HTMLInputElement>(null);
const emailRef=useRef<HTMLInputElement>(null);
const portRef=useRef<HTMLInputElement>(null);
const expRef=useRef<HTMLInputElement>(null);
const aboutRef=useRef<HTMLInputElement>(null);
const sRef=useRef<HTMLInputElement>(null);
const [skillRef,setskillRef]=useState<string[]>([]);
const [value,setvalue]=useState<string[]>([top100Films[0]]);

const handleprofile=(e:React.FormEvent)=>{
e.preventDefault();
const pro={
  name:nameRef.current?.value,
  email:emailRef.current?.value,
  portfoilo:portRef.current?.value,
  experience:expRef.current?.value,
  about:aboutRef.current?.value,
  skills:skillRef

}
console.log(pro)
}

  return (
    <div className={styles.alledit}>
      <div>
        <div className={styles.backimg} >

        <Image src={imgback}
       height='300'
       width='1250'
        alt='alt'/>
       <h2 className={styles.edithead}>
         EDIT PROFILE
        </h2>
        </div>
      </div>
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
      onSubmit={handleprofile}
      className={styles.box}
      noValidate
      autoComplete="off"
    >
    
    

      <div className={styles.inbox}>
        <TextField
        className={styles.field}
        inputRef={nameRef}
          required
          id="outlined-required"
          label="Name"
          defaultValue=" "
          placeholder='Enter Name'
        />
         <TextField
        className={styles.field}
          required
          inputRef={emailRef}
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
          inputRef={portRef}
          id="outlined-required"
          label="Portfolio"
          defaultValue=" "
          placeholder='Enter Portfolio URL'
        />
         <TextField
        className={styles.field}
          required
           
          inputRef={expRef}
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
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        onChange={(e,v)=>{
          setskillRef(v);
        }}
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
        inputRef={aboutRef}
          id="outlined-multiline-static"
          label="About YourSelf"
          multiline
          rows={4}
          defaultValue=" "
        />
        <Button type="submit">Submit</Button>
        </Box>
          </div>
        </div>
    </div>
    </div>
  )
}

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
import { useUpdateTaskMutation, useUsersQuery } from '@/features/Register'
import { useRouter } from 'next/router'


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
const availablelist=[
'Full Time',
'Part Time',
'Internship',
'Code Colab'
]
export default function profile() { 
  const {data,error,isLoading,isSuccess}=useUsersQuery(); 
  console.log(data);
  // console.log(data?.portfolio)
const router=useRouter();
const nameRef=useRef<HTMLInputElement>(null);
const emailRef=useRef<HTMLInputElement>(null);
const portRef=useRef<HTMLInputElement>(null);
const expRef=useRef<HTMLInputElement>(null);
const aboutRef=useRef<HTMLInputElement>(null);
const sRef=useRef<HTMLInputElement>(null);
const [skillRef,setskillRef]=useState<string[]>([]);
const [availableRef,setavailableRef]=useState<string[]>([]);
const [updateTask]=useUpdateTaskMutation();

const id = typeof window !== 'undefined' ? localStorage.getItem('userid') : null
console.log(id)
const handleprofile=async(e:React.FormEvent)=>{
e.preventDefault();
const task={
  name:nameRef.current?.value,
  email:emailRef.current?.value,
  portfoilo:portRef.current?.value,
  experience:expRef.current?.value,
  about:aboutRef.current?.value,
  skills:skillRef,
  available:availableRef,
  id:id
}
console.log(task)
updateTask(task);
router.push("/profile/profile");

// await  
}

  return (
    <>
    
    <div>
    {error && <p>An error occured</p>}
  {isLoading && <p>Loading...</p>}
    </div>
    {isSuccess && (

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
          defaultValue={data?.name}
          placeholder='Enter Name'
        />
         <TextField
        className={styles.field}
          required
          inputRef={emailRef}
          id="outlined-required"
          label="Email"
          defaultValue={data?.email}
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
          defaultValue={data?.portfoilo}
          placeholder='Enter Portfolio URL'
        />
         <TextField
        className={styles.field}
          required
           
          inputRef={expRef}
          id="outlined-required"
          label="Expertise"
          defaultValue={data?.expertise}
          placeholder='Enter expertise'
        />
       
        </div>
        {
          data.skills ?(
            <Autocomplete
            multiple
            id="tags-outlined"
          
            options={top100Films}
            getOptionLabel={(option) => option}
            defaultValue={data?.skills}
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
          ):(
            <Autocomplete
            multiple
            id="tags-outlined"
          
            options={top100Films}
            getOptionLabel={(option) => option}
            // defaultValue={data?.skills}
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
          )
        }
      
      {
        data?.available ?(
          <Autocomplete
          multiple
          id="tags-outlined"
        
          options={availablelist}
          getOptionLabel={(option) => option}
          defaultValue={data?.available}
          filterSelectedOptions
          onChange={(e,v)=>{
            setavailableRef(v)
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Availability"
              placeholder="Availability"
            />
          )}
        />
        ):(
          <Autocomplete
          multiple
          id="tags-outlined"
        
          options={availablelist}
          getOptionLabel={(option) => option}
          // defaultValue=
          filterSelectedOptions
          onChange={(e,v)=>{
            setavailableRef(v)
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Availability"
              placeholder="Availability"
            />
          )}
        />
        )
      }
       
        <TextField
        className={styles.field}
        inputRef={aboutRef}
          id="outlined-multiline-static"
          label="About YourSelf"
          multiline
          rows={4}
          defaultValue={data.about}
        />
        <Button type="submit">Submit</Button>
        </Box>
          </div>
        </div>
    </div>
    </div>
    )}
    </>
  )
}

import React, { useRef, useState } from 'react'
import styles from "../../../styles/Edit.module.css"
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"
import imgback from "../../../public/imgback.jpg"
import { usePosteprojectMutation, useProjectbyidQuery, usePutprojectMutation } from '@/features/Project'
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
export default function projects() {
  const router=useRouter();
  console.log(router.query.id);
  const id=router.query.id;

  const titleRef=useRef<HTMLInputElement>(null);
const deployRef=useRef<HTMLInputElement>(null);
const sourceRef=useRef<HTMLInputElement>(null);
const desRef=useRef<HTMLInputElement>(null);
const [tagRef,settagRef]=useState<string[]>([]);

const [Addproject,result]=usePosteprojectMutation();

const handleproject=async(e:React.FormEvent)=>{
  e.preventDefault();
  const pro={
    title:titleRef.current?.value,
    source:sourceRef.current?.value,
    deploy:deployRef.current?.value,
    description:desRef.current?.value,
    tags:tagRef
  
  }
  console.log(pro)
  await Addproject(pro);
  router.push("/profile/profile")
  }
  // const router=useRouter();
  const {data:pdata,error:perror,isLoading:pisLoading,isSuccess:pisSuccess}=useProjectbyidQuery(id as unknown as void);
  const [updateproject]=usePutprojectMutation();
  const handleprojectupdate=async(e:React.FormEvent)=>{
    e.preventDefault();
    
      const pro={
        title:titleRef.current?.value,
        source:sourceRef.current?.value,
        deploy:deployRef.current?.value,
        description:desRef.current?.value,
        tags:tagRef,
        id
      
      }
    
    console.log(pro)
    updateproject(pro);
    router.push("/profile/profile");
    
    // await  
    }
  if(id){
 return(
  <>
    
  <div>
  {perror && <p>An error occured</p>}
{pisLoading  && <p>Loading...</p>}
  </div>
  {pisSuccess && (
  <div className={styles.alledit}>
     <div>
      <div className={styles.backimg} >

      <Image src={imgback}
     height='300'
     width='1250'
      alt='alt'/>
     <h2 className={styles.edithead}>
       EDIT PROJECTS
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
      <span className={styles.head}>Project</span>
      <span>Manage your work experience here</span>
      <Box
component="form"
className={styles.box}
onSubmit={handleprojectupdate}
noValidate
autoComplete="off"
>
<div className={styles.inbox}>
  <TextField
  className={styles.field}
    required
    id="outlined-required"
    inputRef={titleRef}
    label="Title"
    defaultValue={pdata?.title}
    // defaultValue="title"
    placeholder='Enter Title'
  />
   <TextField
  className={styles.field}
    required
    id="outlined-required"
    label="Source Link"
    inputRef={sourceRef}
    defaultValue={pdata.source}
    placeholder='Enter Source Link'
  />
  </div>
  <div className={styles.inbox}>
  <TextField
  className={styles.field}
    required
    id="outlined-required"
    label="Deploy Link"
    inputRef={deployRef}
    defaultValue={pdata.deploy}
    placeholder='Enter Deploy Link'
  />
  
  </div>
  {
    pdata.tags &&
  <Autocomplete
  multiple
  id="tags-outlined"
  options={top100Films}
  getOptionLabel={(option) => option}
  onChange={(e,v)=>{
    settagRef(v);
  }}
  filterSelectedOptions
  defaultValue={pdata.tags}
  renderInput={(params) => (
    <TextField
    {...params}
    label="Add Tags"
    placeholder="Tags"
    />
    )}
    />
  }
  <TextField
  className={styles.field}
    id="outlined-multiline-static"
    label="About Project"
    inputRef={desRef}
    multiline
    rows={4}
    defaultValue={pdata.description}
  />
  
    
<Button type='submit' className={styles.conren}>Submit</Button>
<Button type='submit'>Edit</Button>
    
 

  </Box>
    </div>
  </div>
</div>
</div>
  )}
  </>
 )
 
 
 
 
 
 
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
         EDIT PROJECTS
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
        <span className={styles.head}>Project</span>
        <span>Manage your work experience here</span>
        <Box
  component="form"
  className={styles.box}
  onSubmit={handleproject}
  noValidate
  autoComplete="off"
>
  <div className={styles.inbox}>
    <TextField
    className={styles.field}
      required
      id="outlined-required"
      inputRef={titleRef}
      label="Title"
      // defaultValue={pdata?.title}
      // defaultValue="title"
      placeholder='Enter Title'
    />
     <TextField
    className={styles.field}
      required
      id="outlined-required"
      label="Source Link"
      inputRef={sourceRef}
      // defaultValue={pdata.source}
      placeholder='Enter Source Link'
    />
    </div>
    <div className={styles.inbox}>
    <TextField
    className={styles.field}
      required
      id="outlined-required"
      label="Deploy Link"
      inputRef={deployRef}
      // defaultValue={pdata.deploy}
      placeholder='Enter Deploy Link'
    />
    
    </div>
  
     
    <Autocomplete
    multiple
    id="tags-outlined"
    options={top100Films}
    getOptionLabel={(option) => option}
    onChange={(e,v)=>{
      settagRef(v);
    }}
    filterSelectedOptions
    // defaultValue={pdata.tags}
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
      inputRef={desRef}
      multiline
      rows={4}
      // defaultValue={pdata.description}
    />
    
 <Button type='submit' >Submit</Button>
 <Button type='submit' className={styles.conren}>Edit</Button>
      
    
      
     
      
  
   
  
    </Box>
      </div>
    </div>
</div>
</div>
  
  )
}

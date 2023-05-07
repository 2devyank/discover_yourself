import React from 'react'
import styles from "../../../styles/Edit.module.css"
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"
import imgback from "../../../public/imgback.jpg"

const top100Films = [
  { title: '.NET CORE' },
  { title: 'Alpine.JS' },
  { title: 'Android' },
  { title: 'React' },
  { title: 'Apache Hadoop' },
  { title: 'Apex' },
  { title: 'ASP.NET' },
  { title: 'AWS' },
  { title: 'BackBone.JS' },
  { title: 'Bootstrap' },
  { title: 'Bulma' },
  { title: 'C' },
  { title: 'C++' },
  { title: 'C#' },
  { title: 'CakePHP' },
  { title: 'Cassandra' },
  { title: 'Computer Vision' },
  { title: 'CSS' },
  { title: 'CouchBase' },
  { title: 'Cycle.js' },
  { title: 'Django' },
  { title: 'Docker' },
  { title: 'DynamoDB' },
  { title: 'Elastic Search' },
  { title: 'Electron' },
  { title: 'Elixir' },
  { title: 'Ember.js' },
  { title: 'FastAPI' },
  { title: 'Firebase' },
  { title: 'Firestore' },
  { title: 'Flask' },
  { title: 'Gatsby.js' },
  { title: 'Git' },
  { title: 'GITHUB' },
  { title: 'Golang' },
  { title: 'GraphQL' },
  { title: 'HTML' },
  { title: 'Hibernate' },
  { title: 'Java' },
  { title: 'JavaScript' },
  { title: 'Jenkins' },
  { title: 'jQuery' },
  { title: 'Kotlin' },
  { title: 'kubernetes' },
  { title: 'laravel' },
  { title: 'Machine Learning' },
  { title: 'MariaDB' },
  { title: 'MongoDB' },
  { title: 'Mysql' },
  { title: 'Nest.js' },
  { title: 'Next.js' },
  { title: 'NumPy' },
  { title: 'Nuxt' },
  { title: 'Nodejs' },
  { title: 'Oracle DB' },
  { title: 'Perl' },
  { title: 'PHP' },
  { title: 'PostgreSQL' },
  { title: 'Preact' },
  { title: 'Python' },
  { title: 'React Native' },
  { title: 'Redis' },
  { title: 'Redux' },
  { title: 'Ruby' },
  { title: 'Rust' },
  { title: 'Rust' },
  { title: 'Scala' },
  { title: 'SQLite' },
  { title: 'Swift' },
  { title: 'Typescript' },
  { title: 'Tailwind CSS' },
  { title: 'Vue' }
 
]
export default function projects() {
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

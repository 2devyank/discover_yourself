import React, { useState } from 'react'
import styles from "../styles/hire.module.css"
import Image from 'next/image'
import select from "../public/select.png"
import quote from "../public/quote.png"
import TalentCard from './components/TalentCard'
import { Autocomplete, Button, TextField } from '@mui/material'




const names = [
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
];

export default function Hire() {
  
  const [tech,settech]=useState<string[]>([]);
  
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
            className={styles.quo}
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
              <div className={styles.imgcontainer}>
                <Image
                src={select}           
                alt="asdf"     
                className={styles.img}
               fill
                />
                </div>
            </div>
        </div>



        {/* list and filter table in below div */}
        <div className={styles.listandfilt}>
            <div className={styles.talentlist}><TalentCard/></div>
            <div className={styles.filter}>
              <div>
            <span>Technology</span>
            <Autocomplete
        multiple
        id="tags-outlined"
        
        options={names}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        onChange={(e,v)=>{
          settech(v)
        }}
        renderInput={(params) => (
          <TextField
          {...params}
          label="Technology"
          placeholder="Technolgy"
          />
          )}
          />
          </div>
          <div>
            <span>Availability</span>
      <Autocomplete
        multiple
        id="tags-outlined"
      
        options={names}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        onChange={(e,v)=>{
          settech(v)
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Availability"
            placeholder="Availability"
          />
        )}
      />
            </div>
            <Button variant='contained'>Search</Button>
            </div>
        </div>

    </div>
  )
}

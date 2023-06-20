import React, { useEffect, useState } from 'react'
import styles from "../styles/hire.module.css"
import Image from 'next/image'
import select from "../public/select.png"
import quote from "../public/quote.png"
import TalentCard from './components/TalentCard'
import { Autocomplete, Button, TextField } from '@mui/material'
import { useAddauthMutation, useLazyAllusersQuery } from '@/features/Register'




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
const availablelist=[
  'Full Time',
  'Part Time',
  'Internship',
  'Code Colab'
  ]
interface output{
  id:number,
  name:string,
  email:string,
  portfoilo:string,
  skills:string[],
  expertise:string,
  about:string,
  password:string,
  img:string,
  available:string[]
}

export default function Hire() {
const [page,setpage]=useState(0);
const [tech,settech]=useState<string[]>([]);
const [available,setavailable]=useState<string[]>([]);
const [taldata,settaldata]=useState<output[]>([]);
// const handlefiltercard=(e)=>
// e.preventDefault();


// }


// const {data,isLoading,isFetching}=useAllusersQuery({skills:tech,available:available,page:page,limit:10});

const [getUsers,results]=useLazyAllusersQuery();
useEffect(()=>{
  if(results && results.data){
    settaldata(results.data)

  }
},[results])
useEffect(()=>{
  getUsers({skills:tech,available:available,page:page,limit:10});
},[])
console.log(results.data);

  if(results.isLoading){
    return <div>Loading ...</div>
  }
  const handlesearch=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    getUsers({skills:tech,available:available,page:page,limit:10})
  }
  const nextpage=(e: { preventDefault: () => void; })=>{
e.preventDefault();
getUsers({skills:tech,available:available,page:page+1,limit:10})
setpage(page+1);
  }
  const prevpage=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    
    getUsers({skills:tech,available:available,page:page-1,limit:10})
      }
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
            <div className={styles.talentlist}>
             
              {/* <TalentCard/> */}
              {
                results && taldata.map((data:output,i: React.Key | null | undefined)=>(
                  <div key={i}>
                     <TalentCard data={data}/>
                  </div>
                ))
              }
              <Button onClick={prevpage} >Previous</Button>
              <Button onClick={nextpage} >Next</Button>

              </div>
            <form  className={styles.filter}>
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
      
        options={availablelist}
        getOptionLabel={(option) => option}
        // defaultValue={[top100Films[0]]}
        filterSelectedOptions
        onChange={(e,v)=>{
          setavailable(v)
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
            <Button variant='contained' type='submit' onClick={handlesearch} >Search</Button>
            </form>
        </div>

    </div>
  )
}

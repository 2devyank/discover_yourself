'use client'
import React from 'react'
import styles from "../styles/prof.module.css";
import github from "../public/github.png"
import link from "../public/linkedin.png"
import Image from 'next/image';
import skills from "../public/creative-thinking.png"
import port from "../public/portfolio.png"
import office from "../public/office-building.png"
import cal from "../public/calendar.png"

import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import TodayIcon from '@mui/icons-material/Today';
import { useUserbyidQuery, useUsersQuery } from '@/features/Register';
import { useRouter } from 'next/router';
import Projectcard from './components/Projectcard';
import { useProjectQuery, useProjectbyprofileidQuery } from '@/features/Project';
import { useExpsQuery } from '@/features/Experience';
// import { useProjectQuery } from '@/features/Project';

export default function tpage() {
  const router=useRouter();
  const id=router.query.id;
//   const handleupdateprofile=()=>{
// router.push("/profile/edit/profile")
//   }

//   const handleaddexp=()=>{
//     router.push("/profile/edit/experience")
//       }
//       const handleaddproject=()=>{
//         router.push("/profile/edit/projects")
//           }



  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));


  
 

const {data,error,isLoading,isSuccess}=useUserbyidQuery(id as unknown as void);
// const pa=useProjectQuery().data;

const {data:pdata,error:perror,isLoading:pisLoading,isSuccess:pisSuccess}=useProjectbyprofileidQuery(id as unknown as void)
// const {data:edata,error:eerror,isLoading:eisLoading,isSuccess:eisSuccess}=useExpsQuery()
// const {data:pdata}=useProjectQuery();
console.log(pdata);
// console.log(asdf);
console.log(data);
const s=data?.id;
typeof window !== 'undefined' ? localStorage.setItem("userid",s as unknown as string) : null

console.log(data?.email);
  return (
    <>
    
    <div>
    {error && perror&& <p>An error occured</p>}
  {isLoading && pisLoading  && <p>Loading...</p>}
    </div>
    {isSuccess && pisSuccess && (

   
    <div className={styles.prof}>
      <div className={styles.leftprofile}>
        <div className={styles.inleft}>
          <div className={styles.back}>
            <Image src={github}
              className={styles.git}
              width={30}
              height={30}
              alt="github"
            />
            <Image src={link}
              className={styles.link}
              width={30}
              height={30}
              alt="linkedin"
            />
          </div>
          <span>{data.name}</span>
          <span>{data.expertise}</span>
          <div>

            <Image
              src={skills}
              width={15}
              height={15}
              alt="skills"
            /> <span>My skills are</span>
          </div>
          <div className={styles.skills}>

            <Paper
              sx={{
                display: 'flex',

                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {data.skills && data.skills.map((data,i) => {
                let icon;
                return (
                  <ListItem key={i}>
                    <Chip
                      icon={icon}
                      label={data}
                      // label={data.label}

                    />
                  </ListItem>
                );
              })}
            </Paper>
          </div>
          <div>

            <Image
              src={port}
              width={15}
              height={15}
              alt="skills"
            /> <span>I am available for</span>
          </div>
          <div className={styles.worktype}>
            <Paper
              sx={{
                display: 'flex',

                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,
              }}
              component="ul"
            >
              {data.available && data.available.map((data,i) => {
                let icon;
                return (
                  <ListItem key={i}>
                    <Chip
                      icon={icon}
                      label={data}

                    />
                  </ListItem>
                );
              })}
            </Paper>
          </div>

        </div>
      </div>
     
      <div className={styles.rightprof}>
        <div className={styles.inright}>
<div className={styles.about}>
  <div className={styles.aparthead}>

  <span>About me</span>
  {/* <ModeEditIcon className={styles.pen}  onClick={handleupdateprofile}/> */}
  </div>
  <span>
 {data.about}
  </span>
  </div>

  {/* <div className={styles.experience}>
  <div className={styles.aparthead}>
  <span>Experience</span>
<div className={styles.icon}>

</div>
  </div>

{
edata.map((data,i)=>(

<>

  <div className={styles.apart}>
 <div>

 </div>

  
  <div className={styles.expdata}>
    <div>  <Image
              src={office}
              width={100}
              height={100}
              alt="skills"
              /></div>
    <div className={styles.content}>
      <span className={styles.position}>{data.position}</span>
    <div className={styles.time}>
      
        <Image
              src={port}
              width={15}
              height={15}
              alt="skills"
              /><span>{data.organization}</span>
      </div>
     <div className={styles.time}>
     <Image
              src={cal}
              width={15}
              height={15}
              alt="skills"
              /><span>{data.start} - {data.last}</span>
      </div>
      <span>{data.role}</span>
       </div>
  </div>
  </div>
</>
))
}
</div> */}
{
pdata &&
<div className={styles.exp}>
  <div className={styles.projhead}>

  <span>Projects</span>
  {/* <AddIcon onClick={handleaddproject} className={styles.pen}/> */}
  </div>
  <br />
  <div className={styles.pwrap}>
    {
      pdata.map((data,i)=>(
        <Projectcard key={i}  data={data}/>
        ))
    }
  
  </div>
</div>
      }
        </div>
      </div>
     
    </div>
     )}
    </>
  )
}

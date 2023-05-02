import React from 'react'
import styles from "../../styles/prof.module.css";
import github from "../../public/github.png"
import link from "../../public/linkedin.png"
import Image from 'next/image';
import skills from "../../public/creative-thinking.png"
import port from "../../public/portfolio.png"
import office from "../../public/office-building.png"
import cal from "../../public/calendar.png"

import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import TodayIcon from '@mui/icons-material/Today';
import { useUsersQuery } from '@/features/Register';

export default function profile() {
  interface ChipData {
    key: number;
    label: string;
  }

  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));


  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 4, label: 'Vue.js' },
  ]);

const {data,error,isSuccess}=useUsersQuery();
// console.log(error);
console.log(data);
console.log(data?.email);
  return (
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
          <span>Name</span>
          <span>Designation</span>
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
              {chipData.map((data,i) => {
                let icon;
                return (
                  <ListItem key={i}>
                    <Chip
                      icon={icon}
                      label={data.label}

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
              {chipData.map((data,i) => {
                let icon;
                return (
                  <ListItem key={i}>
                    <Chip
                      icon={icon}
                      label={data.label}

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
  <div className={styles.apart}>

  <span>About me</span>
  <ModeEditIcon/>
  </div>
  <span>
  body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
  </span>
  </div>
<div className={styles.experience}>
  <div className={styles.apart}>
  <span>Experience</span>
<div className={styles.icon}>
<AddIcon/>
<ModeEditIcon/>
</div>
  </div>
  <div className={styles.expdata}>
    <div>  <Image
              src={office}
              width={100}
              height={100}
              alt="skills"
            /></div>
    <div className={styles.content}>
      <span className={styles.position}>profile</span>
    <div className={styles.time}>
      
        <Image
              src={port}
              width={15}
              height={15}
              alt="skills"
            /><span>Organization</span>
      </div>
     <div className={styles.time}>
     <Image
              src={cal}
              width={15}
              height={15}
              alt="skills"
            /><span>Time period</span>
      </div>
      <span>Role</span>
       </div>
  </div>
</div>
<div className={styles.exp}>
  
</div>
        </div>
      </div>
     
    </div>
  )
}

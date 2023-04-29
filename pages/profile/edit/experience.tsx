import React from 'react'
import styles from "../../../styles/Edit.module.css"
import { Box, Button, TextField } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"
import { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export default function experience() {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return (
    <div>
        <div className={styles.down}>
        <div className={styles.leftbar}>
            <div className={styles.inleft}>
        
             <Link className={styles.leftnav} href="/profile/edit/Profile">
         <Image
              src={prof}
              width={20}
              height={20}
              alt="skills"
            />
            <span className={styles.single}>
                Primary
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
            
            
            <Link className={styles.leftnav} href="/profile/edit/Profile">
            <Image
              src={lay}
              width={20}
              height={20}
              alt="skills"
            />
            <span className={styles.single}>

              Projects
            </span>
              </Link>
            
          
            </div>
        </div>
        <div className={styles.rightbar}>
          <div className={styles.inrightbar}>
            <span className={styles.head}>Work Experience</span>
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
          label="Job Title"
          defaultValue=" "
          placeholder='Enter Job Title'
        />
         <TextField
        className={styles.field}
          required
          id="outlined-required"
          label="Company name"
          defaultValue=" "
          placeholder='Enter Company name'
        />
        </div>
        <div className={styles.inbox}>
        {/* <TextField
        className={styles.field}
          required
          id="outlined-required"
          label="Start Date"
          defaultValue=" "
          placeholder='Select Start Date'
        />
         <TextField
        className={styles.field}
          required
          id="outlined-required"
          label="End Date"
          defaultValue=" "
          placeholder='Select End Date'
        /> */}
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider> */}
        </div>
        <TextField
        className={styles.field}
          id="outlined-multiline-static"
          label="About Your Role"
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

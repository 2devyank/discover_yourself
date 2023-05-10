import React, { useRef } from 'react'
import styles from "../../../styles/Edit.module.css"
import { Box, Button, TextField, TextFieldProps } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import prof from "../../../public/profile.png"
import port from "../../../public/portfolio.png"
import lay from "../../../public/layers.png"
import { Dayjs } from 'dayjs';
import imgback from "../../../public/imgback.jpg"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { usePostexpsMutation } from '@/features/Experience'

export default function experience() {
const [Addexp,result]=usePostexpsMutation();

  const [valuestart, setvaluestart] = React.useState<Dayjs | null>(null);
  const [valueend, setvalueend] = React.useState<Dayjs | null>(null);

const postionref=useRef<HTMLInputElement>();
const roleref=useRef<HTMLInputElement>();
const organizationref=useRef<HTMLInputElement>();

const handleexp=async(e:React.FormEvent)=>{
e.preventDefault();
const pro={
  position:postionref.current?.value,
  organization:organizationref.current?.value,
  role:roleref.current?.value,
  start:valuestart?.toString().slice(4,16),
  end:valueend?.toString().slice(4,16),

}
console.log(pro);
await Addexp(pro);

}


  console.log(valuestart?.toString().slice(0,16));
  console.log(valuestart);
  return (
    <div className={styles.alledit}>
        <div>
        <div className={styles.backimg} >

        <Image src={imgback}
       height='300'
       width='1250'
        alt='alt'/>
       <h2 className={styles.edithead}>
         EDIT EXPERIENCE
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
      onSubmit={handleexp}
      className={styles.box}
      noValidate
      autoComplete="off"
    >
      <div className={styles.inbox}>
        <TextField
        className={styles.field}
        inputRef={postionref}
          required
          id="outlined-required"
          label="Job Title"
          defaultValue=" "
          placeholder='Enter Job Title'
        />
         <TextField
        className={styles.field}
          required
          inputRef={organizationref}
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="start date"
        
        value={valuestart}
        onChange={(newValue) => {
          setvaluestart(newValue);
        }}
        // renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="end date"
        value={valueend}
        onChange={(newValue) => {
          setvalueend(newValue);
        }}
        // renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </div>
       
        <TextField
        className={styles.field}
          id="outlined-multiline-static"
          label="About Your Role"
          inputRef={roleref}
          multiline
          rows={4}
          defaultValue=" "
        />
        <Button type='submit'>Submit</Button>
        </Box>
          </div>
        </div>
    </div>
    </div>
  )
}

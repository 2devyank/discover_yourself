import { Box, Button, TextField } from '@mui/material'
import React, { MouseEventHandler, useRef, useState } from 'react'
import styles from "../styles/Register.module.css";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { taskApi, useAddTaskMutation } from '@/features/Register';
import { Practice } from './components/Practice';
import Link from 'next/link';


export default function register() {
  const [addTask,result]=useAddTaskMutation();
  
  const emailref=useRef<HTMLInputElement>(null);
  const passwordref=useRef<HTMLInputElement>(null);
 

  const handleAddTask=async(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    const task={
    email:emailref.current?.value,
      password:passwordref.current?.value

    };
    console.log(task);
    await addTask(task);
   
  }
  
  return (
    <section className={styles.sec}>
     <Box
      component="form"
      onSubmit={handleAddTask}
      className={styles.box}
          noValidate
          autoComplete="off"
          >
    <h2>Sign Up</h2>
    <span>Discover your skills , projects and get hired ! It's that simple</span>
 
    <div className={styles.butin}>
      <Link href="/register">
    <Button variant="outlined" >
  Sign Up
</Button>
      </Link>
  <Link href="/login">
<Button variant="outlined" >
  Log In
</Button>
  </Link>
    </div>
    <div className={styles.texti}>

        <TextField 
      
        inputRef={emailref}
        id="outlined-basic"
         label="email"
          variant="outlined" />
        <TextField
        
        inputRef={passwordref}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          />
         
         
          </div>
          <Button  type="submit" variant="outlined">Sign Up</Button>
    </Box>
    <Practice/>
          </section>
  )
}


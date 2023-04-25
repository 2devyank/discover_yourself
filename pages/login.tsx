import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import styles from "../styles/Register.module.css"
import Link from 'next/link'

export default function login() {
  return (
    <section className={styles.sec}>


    <Box
          component="form"
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
    
            <TextField id="outlined-basic" label="email" variant="outlined" />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              />
             
              </div>
        </Box>
        
              </section>
  )
}

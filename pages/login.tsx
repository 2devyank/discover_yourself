import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import styles from "../styles/Register.module.css"

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
        <Button variant="outlined" href="#outlined-buttons">
      Sign Up
    </Button>
    <Button variant="outlined" href="#outlined-buttons">
      Log In
    </Button>
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

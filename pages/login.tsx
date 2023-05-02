import { Box, Button, TextField } from '@mui/material'
import React, { useRef } from 'react'
import styles from "../styles/Register.module.css"
import Link from 'next/link'
import { useLoginTaskMutation } from '@/features/Register'
import { cookies } from 'next/dist/client/components/headers'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'

export default function login() {
  const router=useRouter();

  const cookies = new Cookies();
  const [addTask, { isSuccess }] = useLoginTaskMutation();
  // const {status,error,data}=useLoginTaskMutation();
  const emailref = useRef<HTMLInputElement>(null);
  const passwordref = useRef<HTMLInputElement>(null);

  interface Root {
    data: Data
  }

  interface Data {
    accesToken: string
  }

  const handleAddTask = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const task = {
      email: emailref.current?.value,
      password: passwordref.current?.value
    };
    console.log(task);
    const result = await addTask(task).unwrap();
    // cookies.remove('token');
    localStorage.setItem("token",result.accessToken);
    console.log(result.accessToken);
    console.log(isSuccess);
router.push("/profile/profile");
    //  console.log(result.status);
    // console.log(data.data.accesToken);

  } 
  return (
    <section className={styles.sec}>


      <Box
        component="form"
        className={styles.box}
        onSubmit={handleAddTask}
        noValidate
        autoComplete="off"
      >

        <h2>Log In</h2>
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

          <TextField id="outlined-basic"
            inputRef={emailref}
            label="email" variant="outlined" />
          <TextField
            inputRef={passwordref}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />

        </div>
        <Button type="submit" variant="outlined">Log In</Button>
      </Box>

    </section>
  )
}

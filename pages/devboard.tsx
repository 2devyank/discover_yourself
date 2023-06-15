import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/dev.module.css"
import { useFeedQuery } from '@/features/Feed'
import ImageIcon from '@mui/icons-material/Image';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import GifIcon from '@mui/icons-material/Gif';
import Image from 'next/image';
import { Box, Button, Modal, Typography } from '@mui/material';
interface gif{
  url:string,
  id:string
}

export default function devboard() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const [gifdata,setgifdata]=useState<any[]>([]);
const [url,seturl]=useState<string>("");
  const {data,isFetching,isSuccess,error}=useFeedQuery();
  console.log(data);

const gf=new GiphyFetch('7nhkFNFEATmyeEHpJ2AYMVy6rLSUxE6k')
// const searchTerm=useRef<HTMLInputElement>(null);
const [searchTerm,setsearchterm]=useState<string>("")
const [inputurl,setinputurl]=useState<string>("")

useEffect(()=>{

  const handleapi=async ()=>{
    const fetchgifs=await gf.search(searchTerm,{limit:10})
    // console.log(fetchgifs.data);
    setgifdata(fetchgifs.data);
    // const { data:d } = await gf.gif('fpXxIjftmkk9y')
    // console.log(d)
  }
  handleapi();
},[searchTerm])

// seturl(gifdata[0].images.original.webp)
console.log(gifdata);
// console.log(gifdata[0].images.original.webp)
  return (
    <div className={styles.alldev}>
        <div className={styles.allboard}>
            <div className={styles.leftboard}>
            <div className={styles.inleftover}>
              <div className={styles.inleft}>
                <span>All Feed</span>
                <span>Polls</span>
                
              </div>
            </div>
            </div>
            <div className={styles.board}>
              <div className={styles.inputcover}>

            <div className={styles.inputbox}>
              <input type="text" className={styles.search}/>
              <div className={styles.icons}>

              <ImageIcon/>
              <GifIcon onClick={handleOpen} />
              </div>
              {

          inputurl && <img src={inputurl} alt="" />
              }
              
            {/* {
              gifdata.map((data)=>(

              <img 
              src={data.images.original.webp}
              alt="adf"
              width={200}
              height={200}
                  />
               ) )
            } */}
          
            </div>
            
              </div>
              {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.cont}>
        
          <input type="text" value={searchTerm} onChange={(e)=>setsearchterm(e.target.value)} />
           <div className={styles.gifbox}>

           {
             gifdata.map((data)=>(
               
               <img 
               onClick={()=>{setinputurl(data.images.original.webp)
                setOpen(false);
               }
              }
               src={data.images.original.webp}
               alt="adf"
               width={390}
               height={600}
               />
               ) )
              } 
              </div>

        </div>
      </Modal>
            </div>
            
        </div>
    </div>
  )
}


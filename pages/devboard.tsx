import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/dev.module.css"
import { useFeedQuery, usePostfeedMutation } from '@/features/Feed'
import ImageIcon from '@mui/icons-material/Image';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';
import GifIcon from '@mui/icons-material/Gif';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Image from 'next/image';
import { Box, Button, Modal, Typography } from '@mui/material';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import Feedcard from './components/Feedcard';
interface gif{
  url:string,
  id:string
}

export default function devboard() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  

const [Addfeed]=usePostfeedMutation();


const [gifdata,setgifdata]=useState<any[]>([]);
// const [url,seturl]=useState<string>("");
  const {data,isFetching,isSuccess,error}=useFeedQuery();
  console.log(data);

const gf=new GiphyFetch('7nhkFNFEATmyeEHpJ2AYMVy6rLSUxE6k')
// const searchTerm=useRef<HTMLInputElement>(null);
const [searchTerm,setsearchterm]=useState<string>("")
const [inputurl,setinputurl]=useState<string>("")
const [inputfeed,setinputfeed]=useState<string>("");

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
const handlefeedsend=async(e: { preventDefault: () => void; })=>{
e.preventDefault();
const feed={
  text:inputfeed,
  url:inputurl
}
await Addfeed(feed);

}

const handleattherate=(e: { preventDefault: () => void; })=>{
e.preventDefault();
setinputfeed(inputfeed+"@");
}
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
              <input type="text" className={styles.search} value={inputfeed} onChange={(e)=>setinputfeed(e.target.value)}/>
              <div className={styles.icons}>
                <div className={styles.lefticon}>

              <ImageIcon/>
              <GifIcon onClick={handleOpen} />
              <AlternateEmailIcon onClick={handleattherate}/>
                </div>
                {/* <button>SEND</button> */}
                <SendSharpIcon onClick={handlefeedsend}/>
              </div>
              {

          inputurl &&
          <div className={styles.crossdiv}>
            <img src={inputurl} alt="" width={390} height={600} />
            <CancelSharpIcon onClick={()=>setinputurl("")} className={styles.cross}/>
          </div>
              }
          
          
            </div>
            
              </div>
              <div>
{
  data?.map((feeddata)=>(
<Feedcard text={feeddata.text} url={feeddata.url}/>
  ))
}
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


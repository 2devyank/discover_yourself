import React, { useEffect, useRef, useState } from 'react'
import styles from "../styles/dev.module.css"
import { v4 as uuidv4 } from "uuid";
import { useFeedQuery, useLazyFeedQuery, usePostfeedMutation } from '@/features/Feed'
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
import { supabase } from '@/supabase';
import gif from "../public/gif.png"
import atrate from "../public/arroba.png"
import image from "../public/image.png"
import { Blob } from 'buffer';
import { useUsernameQuery } from '@/features/Register';
import Namelist from './components/Namelist';
import UseDebounce from './components/UseDebounce';
import { useDispatch, useSelector } from 'react-redux';
import { addinput, setinput } from '@/features/Input';
interface output{
  text:string,
  url:string,
  img:string,
  name:string,
  expertise:string,
  love:number,
  comments:string[],
  id:number,
}
export default function devboard() {
const {input}=useSelector((state:any)=>state.input)
console.log(input)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page,setpage]=useState<number>(0);
  const [udata,setudata]=useState<output[]>([]);
  
  const [prev,setprev]=useState<any>();

const [Addfeed]=usePostfeedMutation();


const [gifdata,setgifdata]=useState<any[]>([]);
// const [url,seturl]=useState<string>("");
  // const {data,isFetching,isSuccess,error}=useFeedQuery(page as unknown as void);
  const [getfeed,results]=useLazyFeedQuery();
  // console.log(data);
  useEffect(()=>{
    getfeed(page as unknown as void)
    setpage(page+1);
  },[])
  const fetchedfeed=async()=>{
    const feeds=await getfeed(page as unknown as void).unwrap();
    console.log(feeds);
    setudata(feeds);
  }
  useEffect(()=>{

    fetchedfeed();
  },[])
// console.log(page)
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
const [file,setfile]=useState<any>();

const handlefeedsend=async(e: { preventDefault: () => void; })=>{
e.preventDefault();
let filepath;
if(file){

  const filename=`${uuidv4()}-${file?.name}`;
  const {data,error}=await supabase.storage
  .from("images")
  .upload(filename,file,{
    cacheControl:"3600",
    upsert:false,
  })
  console.log(error);
   filepath=data?.path;
}

const feed={
  text:input,
  url:inputurl,
  img:filepath,
  love:0
}
await Addfeed(feed);
setinputfeed("");
}

const [fetchname,setfetchname]=useState(false);
const dispatch=useDispatch();
const handleattherate=(e: { preventDefault: () => void; })=>{
e.preventDefault();
dispatch(addinput("@"));
setfetchname(true);
}
console.log(file);

useEffect(()=>{
let fileReader: FileReader,isCancel=false;
if(file){
  fileReader=new FileReader();
  fileReader.onload=(e)=>{
    const result =e.target?.result;
    if(result && !isCancel){
      setprev(result);
    }
  }
  fileReader.readAsDataURL(file);
}
return ()=>{
  isCancel=true;
  if(fileReader && fileReader.readyState===1){
    fileReader.abort();
  }
}
},[file]) 

  const debouncevalue=UseDebounce(input.substring(input.indexOf('@')+1),500)

const handlescroll=async()=>{

  const data=await getfeed(page as unknown as void).unwrap()
  setpage(page+1);
  setudata(prev=>[...prev,...data])
// udata.concat(data)
}
console.log(udata);


// useEffect(()=>{
//   console.log('entering')
// window.addEventListener('scroll',handlescroll)
// return window.removeEventListener('scroll',handlescroll)
// },[results.isLoading])
// useEffect(()=>{

  typeof window !== 'undefined' ?window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      handlescroll();
    }
  }:null
  
// },[])
// console.log(results.data);
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
              <input type="text" className={styles.search} value={input} 
             onChange={(e)=>dispatch(setinput(e.target.value))}
            //  onChange={(e)=>setinputfeed(e.target.value)}
              />
              <div className={styles.icons}>
                <div className={styles.lefticon}>
<div className={styles.imgupload}>
  <label htmlFor='file-input'>
  <Image
              src={image}
              alt="gif"
              width={20}
              height={20}
              className={styles.point}
/>
  </label>

              <input id="file-input" type="file" onChange={(e)=>{setfile(e.target.files?.[0])}}/>
</div>
              <Image
              src={gif}
              alt="gif"
              width={20}
              height={20}
              onClick={handleOpen}
              className={styles.point}
/>
              {/* <GifIcon onClick={handleOpen} /> */}
              <Image
              src={atrate}
              alt="gif"
              width={20}
              height={20}
              className={styles.point}
              onClick={handleattherate}
/>
              {/* <AlternateEmailIcon onClick={handleattherate}/> */}
                </div>
                {/* <button>SEND</button> */}
                <div className={styles.post} onClick={handlefeedsend}>
                <span>POST</span>
                <SendSharpIcon />
                </div>
              </div>
            {

            fetchname && <Namelist  name={debouncevalue}  />
            }  
              {

          inputurl &&
          <div className={styles.crossdiv}>
            <img src={inputurl} alt="" width={390} height={600} />
            <CancelSharpIcon onClick={()=>setinputurl("")} className={styles.cross}/>
          </div>
              }

              {
                file && 
                <div className={styles.crossdiv}>
                  <Image src={prev} alt="prev" width={390} height={600} />
                  <CancelSharpIcon onClick={()=>setfile("")} className={styles.cross}/>

                </div>
              }
          
          
            </div>
            
              </div>
              <div>
{
udata?.map((feeddata,i)=>(
<Feedcard id={feeddata.id} text={feeddata.text} love={feeddata.love} comments={feeddata.comments} key={i} url={feeddata.url} img={feeddata.img} name={feeddata.name} exp={feeddata.expertise}/>
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
        
          <input placeholder='Search GIF !' type="text" className={styles.gifinput} value={searchTerm} onChange={(e)=>setsearchterm(e.target.value)} />
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


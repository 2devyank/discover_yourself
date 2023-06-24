import { replaceinput } from '@/features/Input';
import { useUsernameQuery } from '@/features/Register';
import { Avatar, Dialog, DialogTitle, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { blue } from '@mui/material/colors';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Namelist({name}:{name:string}) {
  interface out{
    name:string,
    id:number
  }
  const [open,setopen]=useState(false);
    const [filterterm,setfilterterm]=useState<string>("");
  
    const {data:ndata,isLoading:nload,isSuccess}=useUsernameQuery(filterterm as unknown as void);
console.log(ndata);

console.log(filterterm);
useEffect(()=>{
if(name.length===0||name.length>4){
    setfilterterm(name);
}
},[name])
const closedialog=()=>{
setopen(false);
}
const dispatch=useDispatch();
useEffect(()=>{
if(ndata && ndata.length>0){
setopen(true);
console.log("open hogya")
}

},[ndata])
  return (
    <div>
      {/* {
    ndata?.map((d,i)=>(
<span key={i} onClick={()=>dispatch(replaceinput(d.name))} >{d.name}</span>
    ))
    } */}
     <Dialog  open={open} onClose={closedialog}>
      <DialogTitle>Tag User In Your Post</DialogTitle>
      <List sx={{ pt: 0 }}>
        {ndata?.map((d) => (
          <ListItem disableGutters>
            <ListItemButton onClick={()=>{
              dispatch(replaceinput(d.name))
              setopen(false)
            }} key={d.name}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  {/* <PersonIcon /> */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={d.name} />
            </ListItemButton>
          </ListItem>
        ))}
       
      </List>
    </Dialog>
    </div>
  )
}






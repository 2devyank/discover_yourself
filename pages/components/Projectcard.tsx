import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import styles from "../../styles/pcard.module.css"
import porject from "../../public/project.jpg"
import { Button, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';


interface output{
  userid:number,
  title:string,
  description:string,
  source:string,
  tags:string[],
  deploy:string,
 projectid:number
}
export default function Projectcard({data}:{data:output}) {
const router=useRouter();
 
console.log(data);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  router.push(`/profile/edit/projects?id=${data.projectid}`)
  setAnchorEl(null);
};
    const skilarr=["java","js","xhtml"];
    return (
    <div className={styles.pcard}>
        <div className={styles.phead}>
            
        <span>{data.title}</span>
        <span
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={styles.dots}
      >
<MoreVertIcon />
      </span>
        </div>
        <div className={styles.pimgcon}>

<Image
src={porject}
className={styles.pimg}
// height={300}÷
// width={300}÷
alt="asdf"
/>
</div>
<div className={styles.skillcontext}>
{data.tags &&
  data.tags.map((val,index)=>(
      <span key={index} className={styles.skillb}>{val}</span>
      ))
}
      </div>

      
        
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Edit Project</MenuItem>
       
      </Menu>

    </div>
  )
}

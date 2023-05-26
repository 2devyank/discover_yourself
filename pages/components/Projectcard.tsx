import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import styles from "../../styles/pcard.module.css"
import porject from "../../public/project.jpg"
import { Button, Menu, MenuItem } from '@mui/material';


export default function Projectcard() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
    const skilarr=["java","js","xhtml"];
    return (
    <div className={styles.pcard}>
        <div className={styles.phead}>
            
        <span>Project Name</span>
        <span
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={styles.dots}
      >
<MoreVertIcon/>
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
{
  skilarr.map((val,index)=>(
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

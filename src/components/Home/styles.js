import { makeStyles } from "@mui/styles";
import { border, borderRadius, display, margin } from "@mui/system";
import { useTheme } from "@mui/material/styles";

export default makeStyles((theme)=>({
  
  [useTheme().breakpoints.down('xs'&&'sm'&&'md')]:{
    mainContainer:{
      display:'flex',
      flexDirection:"column-reverse !important"
    },
 
  },

  mainContainer:{
    paddingTop:'140px'
  },
  pagination:{
    paddingTop:'20px',
    paddingBottom:"20px",
    paddingLeft:"10px",
    paddingRight:"10px",
    color:'white !important',
    marginTop:'20px !important'
  },
  rightContainer:{
    display:'flex',
    flexDirection:'column !important',
  
   paddingTop:'20px !important',
   paddingBottom:'20px !important',
  },
  appBarSearch:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'spaceAround !important',
    marginTop:'20px !important',
   marginBottom:'20px !important',
    

  }
 

    
  


}))
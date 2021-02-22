import React, { useEffect, useState } from 'react'
import {Grid,inputAdornment,Avatar,Button, TextField, InputAdornment, IconButton} from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function Input({half,name,label,type,handleChange,showHide,autofocus,setShowHide,isSignUp,userName,value,isMatch,errors}) {
  const adornmenntIcon=type;
  if(errors?.length>0&&isSignUp===true){

  }

  const handleShowPassword=()=>{
    if(showHide==='password')
     setShowHide('text')
     else
     setShowHide('password')
   }
  return (
    <>
    <Grid item xs={12}  marginBottom={2} sm={half?6:12}>
       <TextField 
          name={name} 
          label={label} 
          onChange={handleChange}
           autoFocus={autofocus}
            xs={6}
          required
          value={value}
          variant='outlined'
          fullWidth
          type={type}
          error= {(name==='confirmPassword'||name==='password')&&(isMatch===false||errors?.length!==0)?true:false}
          helperText= {(isSignUp===false)? errors : ((name==="confirmPassword")&&((isMatch===false||errors?.length)?errors: (isSignUp ? "*Password must contain uppercase,lowercase, numbers , symbols. ":'')))}
          
          
          InputProps={{
            startAdornment:
               <InputAdornment position="start">
                {type==="email" && <AlternateEmailIcon/>}
               {(type==="password"||name==="password" ||name==="confirmPassword")&&<PasswordIcon/>}
               {(type==="text"&&name!=="password"&&userName)&&<PersonIcon/>}
               </InputAdornment>,
            endAdornment:(name==="confirmPassword"||isSignUp===false)&&
              <InputAdornment position="end">
                <IconButton onClick={handleShowPassword}>
                 {type==="password"?<VisibilityIcon/>:<VisibilityOffIcon/>}
                </IconButton>
              </InputAdornment>
            
          }}
         />

        
    </Grid>

  </>
  )
}

export default Input
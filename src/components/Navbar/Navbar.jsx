import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';
import React,{useState,useEffect} from 'react'
import useStyles from "./styles";
import memories from "../../images/place.png"
import {Link, Navigate, useLocation, useNavigate} from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { GoogleLogout } from 'react-google-login';
import {useDispatch} from 'react-redux'
import { actionTypes } from '../../actionTypes/actiontypes';
import decode from "jwt-decode";





function Navbar() {
  const classes=useStyles();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const [users,setUsers]=useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    const getToken=()=>{
    const token=users?.token;
    if(token){
      const decodedToken=decode(token)
      if(decodedToken.exp *1000>new Date().getTime()){
        logout();
      }
    }
    setUsers(JSON.parse(localStorage.getItem('profile')))
    }
      getToken()
   
  }, [location]);
  const logout=()=>{
   dispatch({type:actionTypes.LOGOUT})
   navigate('/',{replace:true})
   setUsers(null)
  }
  
  return (
    <AppBar className={classes.appBar}   color="inherit" >
    <div className={classes.brandContainer} >
    <Typography component={Link} style={{textDecoration:"none"}} to={'/'} className={classes.heading} variant="h3" align="center">
      RECALL
    </Typography>
    <Link to={'/'} style={{textDecoration:"none"}}>
    <img className={classes.image} src={memories} alt="memories" height={60} width={60}></img>

    </Link>
    </div>
    <Toolbar className={classes.toolbar}>
    {users?
        <div className={classes.userSection}>
            <div  className={classes.profile}>
             <Avatar referrerPolicy="no-referrer" className={classes.purple}   src={users?.result?.imageUrl}  alt={users?.result?.name.charAt(0)}>
             {users.result.name.charAt(0)}
             </Avatar>
            <Typography className={`${classes.userName} ${classes.purple}`} color='primary' variant='p'>{users?.result?.name?.split(' ')[0]}</Typography>
       
            </div>
           <div className={classes.logout}>
              <Button  variant='outlined'
               className={classes.logout} 
               color={'error'}
               onClick={logout}>
               <LogoutIcon></LogoutIcon>
                </Button>  
           </div>
         </div>
        : 
          <Button component={Link} to={'/auth'} className={classes.loginButton} variant='outlined'  color={'primary'}>  
            <PersonIcon/>
            <Typography variant='p'>Login</Typography>
          </Button>
    }
        
    </Toolbar>

    </AppBar>
  )
}

export default Navbar
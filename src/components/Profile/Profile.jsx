import React, { useEffect, useState } from 'react'
import { useNavigate,Navigate } from 'react-router-dom';
import { Button,Container, Grid, Grow, Paper ,Typography, Avatar, ButtonGroup } from '@mui/material';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../actionTypes/actiontypes';




function Profile() {
  const dispatch=useDispatch();
    const navigate=useNavigate();
  const [users,setUsers]=useState(JSON.parse(localStorage.getItem('profile')))
  useEffect(() => {
   setUsers(JSON.parse(localStorage.getItem('profile')))
  }, []);
  const logout=()=>{
    dispatch({type:actionTypes.LOGOUT})
    navigate('/',{replace:true})
    setUsers(null)
   }  
    if(users){
        return (
          <Grow in>
         
          <Container variant='container' align={"center"} maxWidth='md' style={{marginTop:'100px'}}>
          <Paper style={{padding:'20px',backgroundColor:'whitesmoke',height:'500px'}}>
          <Avatar  sx={{ width: 100, height: 100 }} 
          src={users?.result?.imageUrl} alt={users?.result?.name.charAt(0)} >
            {users?.result?.name.charAt(0)}
          </Avatar>
              <Typography variant={'h4'} style={{marginTop:'20px'}}>{users?.result?.name}</Typography>
          <Grid>
            <Grid  display={'flex'} flexDirection="column">
              <Typography variant={'h6'} style={{alignSelf:'center',marginTop:'20px'}}>Email: {users?.result?.email}</Typography>
              <Typography>
              Ut quis ad Lorem quis nisi. Tempor veniam laborum ea
               aute qui occaecat excepteur. Aute nulla est elit ut 
               culpa exercitation. Ea elit excepteur veniam Lorem 
               consectetur enim enim fugiat id tempor qui officia 
               eiusmod est. Et tempor sit qui pariatur duis Lorem 
               ullamco nostrud eiusmod exercitation reprehenderit.
              </Typography>
            </Grid>
            <Grid>
              <ButtonGroup style={{marginTop:'40px'}}>
                <Button variant={'contained'} color='primary' onClick={()=>navigate('/')}>
                  Home
                </Button>
                <Button color='error' onClick={logout}>
                  Logout
                </Button>
              </ButtonGroup>
            </Grid>

          </Grid>
            
          </Paper>

            </Container>
          </Grow>         
          )
    }else{
        return <Navigate to={'/auth'}/>
    }
   
}

export default Profile
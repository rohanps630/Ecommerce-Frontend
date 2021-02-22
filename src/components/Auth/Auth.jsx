import React, { useEffect, useState } from 'react'
import {Container,Paper,Typography,Grid,Avatar,Button, TextField} from "@mui/material"
import useStyles from './styles'
import LockIcon from '@mui/icons-material/Lock';
import Input from './Input';
import GoogleLogin from 'react-google-login';
import GoogleIcon from "../../images/google.png";
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../actionTypes/actiontypes';
import { useNavigate } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';




function Auth() {
  const navigate=useNavigate();
  const classes=useStyles();
  const dispatch=useDispatch();
  const [isSignUp,setIsSignUp]=useState(false);
  const [isMatch,setIsMatch]=useState(true);
  const [errors,setErrors]=useState("");
  var re =new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );;

  const [formData,setFormData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:'',

  })
  const client_id=process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;
  const handleSubmit=(e)=>{
   e.preventDefault();
   
   if(isSignUp){
    if(errors!==''||isMatch===false){
          setErrors('Password is weak!') 
       }else{
         dispatch(signup(formData,navigate))
       }
   }else{
    dispatch(signin(formData,navigate,setErrors))

   }
 
 
}
 
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value
    setFormData({...formData,[name]:value})

  }
  useEffect(()=>{
    if(isSignUp){
      if((formData.password!==formData.confirmPassword)&&isSignUp){
        setIsMatch(false);
        setErrors('Password doesn\'t match ');
  
      }else if(re.test(formData.password)!==true && formData.password.length>3){
        setIsMatch(true)
        setErrors("Password should be the combination of uppercase,lowercase,symbols,numbers ");
  
      }else if(formData.password.length>0&&formData.password.length<8 ||formData.password.length>35){
        setIsMatch(true)
        setErrors(' Passwordshould atleast contain minimum 8 characters and not more than 32 characters')
      }
      else{

        setErrors('')
        setIsMatch(true)
  
      }
    }
    else {
      setErrors('');
    }
    

  },[formData.password,formData.confirmPassword])
  const googleSuccess=async (response)=>{
    const result=response.profileObj;
    const token=response.tokenId;
    try {
      dispatch({
        type:actionTypes.AUTH,
        data:{result,token}
      });
       navigate('/',{replace:true})

    } catch (error) {
      alert(error)
    }
  }
  const googleFailure=(error)=>{
    alert(error)
  }
  useEffect(()=>{
    const resetForm=()=>{
      setErrors(''); 
      setFormData({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    
      })
    }
    resetForm();
   

  },[isSignUp])
  const [showHide,setShowHide]=useState('password');
 
  return (
    <Container className={classes.container}  component='main' maxWidth="sm">
     <Paper  className={classes.paper} elevation={3}>
      <Avatar  className={classes.avatar}>
      {<LockIcon />}
      </Avatar>
      <Typography variant='h5'>
        {isSignUp?"Sign Up":"Sign In"}
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid  container className={!isSignUp?classes.container:""} spacing={2}>
          {
            isSignUp&& (<>
              <Grid item className={classes.names} xs={12} sm={12}  marginLeft={5} marginRight={5} lg={12} md={12}>
             <Input name={"firstName"} userName={false} value={formData.firstName} handleChange={handleChange}  half={true} label={'First Name'} type={"text"} >
             </Input>
             <Input name={"lastName"} userName={false} value={formData.lastName} handleChange={handleChange} half={true} label={'Last Name'} type={"text"} >
             </Input>
             </Grid>
             
           
              </> )    
                     
          }
          <Grid className={classes.footerButton} item xs={12} sm={12} md={12}  lg={12} marginLeft={5} marginRight={5}>
          <>
             <Input autofocus={true} name={"email"} half={false} value={formData.email} handleChange={handleChange} userName={true} label={'Email'} type={"email"} >
             </Input> 
             <Input name={"password"} setErrors={setErrors} errors={errors} half={false}  value={formData.password} handleChange={handleChange} isSignUp={isSignUp} label={'Password'} type={showHide} showHide={showHide} setShowHide={setShowHide}  >
             </Input>
             {isSignUp &&  <Input errors={errors} isMatch={isMatch} name={"confirmPassword"} half={false} value={formData.confirmPassword}  handleChange={handleChange} label={'Confirm Password'} type={showHide} showHide={showHide} setShowHide={setShowHide}  >
             </Input>
}
              </>
               <Button onClick={handleSubmit} style={{marginBottom:'10px'}} variant='contained' type={"submit"}>
                  <LockIcon />&nbsp;
                 {isSignUp?"Sign Up":"Login"}
               </Button>
               <GoogleLogin 
               clientId={client_id}
               render={(renderProps)=>(
                 <Button className={classes.googleButton}
                 onClick={renderProps.onClick}
                 disabled={renderProps.disabled}
                 startIcon={<img className={classes.icon} src={GoogleIcon}></img>}
                 >
                   Sign in with google
                 </Button>
               )}
               cookiePolicy={'single_host_origin'}
               onSuccess={googleSuccess}
               onFailure={googleFailure}
                />
               <Typography component={'button'}  onClick={(e)=>{e.preventDefault(); setIsSignUp((prev)=>!prev)}} style={{backgroundColor:"white",border:'none',color:"blue"}} marginTop alignSelf={'end'}>{isSignUp?"Already have an account ? Sign in ":"Don't have an account ? Sign Up"}</Typography>    
             </Grid>
        </Grid>
      </form>
     </Paper>
    </Container>
  )
}

export default Auth
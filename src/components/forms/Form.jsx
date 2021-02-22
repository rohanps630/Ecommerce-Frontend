import React, { useEffect, useState } from 'react'
import useStyles from "./styles";
import {TextField,Button,Typography,Paper, InputBase} from "@mui/material"
import Filebase from 'react-file-base64'
import { useDispatch, useSelector } from "react-redux";
import { createPost,updatePost } from '../../actions/posts';


function Form({currentId,setCurrentId}) {
    const classes=useStyles();
    const dispatch=useDispatch();
    const post=useSelector(state=>currentId?state.posts.find((post)=>post._id===currentId):null)
    const [postData,setPostData]=useState({
      title:'',
      message:'',
      tags:[],
      selectedFile:''
  })
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    const getToken=()=>{
    const token=user?.token;
    setUser(JSON.parse(localStorage.getItem('profile')))
    }
   
      getToken()
   
  }, [user]);
  


    useEffect(() => {   
        if(post) setPostData(post)   
    }, [post]);

    const clear=()=>{
      setPostData({
          title:'',
          message:'',
          tags:[],
          selectedFile:''
      })
      setCurrentId(0);
  }

    const handleSubmit=async (e)=>{
      e.preventDefault();
      if(currentId===0){
        dispatch(createPost({...postData,name:user?.localData?.result?.name}))
        clear();
      
      }else{
        dispatch(updatePost(currentId,{...postData,name:user?.localData?.result?.name}))
       clear();
        
      }
     
    setCurrentId(0);


    }


 
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        return (setPostData({
            ...postData,
            [name]:value
        }))
    }

if(!user){
  return <Paper className={classes.paper} elevation={5}>
    <Typography variant='h6' align='center'>
      Please signIn for create your own memories,or like the posts
    </Typography>
  </Paper>
}

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit} autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}>
         <Typography variant='h6'>
          {post?"Update a memory":"Creating a memory"}
         </Typography>
      

          <TextField 
         onChange={handleChange} 
         value={postData.title}
         name='title' 
         fullWidth 
         variant='outlined'
         label='Title'/>

         <TextField 
         onChange={handleChange} 
         value={postData.message}
         name='message' 
         fullWidth 
         variant='outlined'
         label='Message'/>
         
         <TextField 
         onChange={(e)=>{setPostData({...postData,tags:e.target.value.split(',')})} }
         value={postData.tags}
         name='tags' 
         fullWidth 
         variant='outlined'
         color='primary'
         label='Tags'/>
         <div className={classes.fileInput}>
         <Filebase 
         type={"file"}
         multiple={false}
         onDone={({base64})=>setPostData({
             ...postData,
             selectedFile:base64
         })}
         />
         </div>
         <Button
          variant='contained' 
          size='large' 
          style={{marginBottom:10}}
          type='submit'
          fullWidth>Create</Button>
         <Button 
         variant='contained' 
         fullWidth 
         color='error' 
         size='small' 
         onClick={clear}>Clear</Button>
         
      </form>
    </Paper>
  )
}

export default Form
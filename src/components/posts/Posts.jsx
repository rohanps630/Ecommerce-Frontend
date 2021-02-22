import React from 'react'
import Post from './post/Post'
import useStyles from "./styles";
import { useSelector } from 'react-redux';
import {Grid,CircularProgress} from "@mui/material"
import Skeleton from '@mui/material/Skeleton';



function Posts({currentId,setCurrentId}) {

  const posts=useSelector((state)=> state.posts);
  

  const classes=useStyles();
  return (
  !posts.length? <Skeleton variant="rectangular" width={600} height={118} />:
  <Grid className={classes.mainContainer} alignItems={'stretch'} container spacing={3}>
  {
    posts.map((post)=>(
      <Grid item key={post?._id} xs={12} sm={6} lg={3}>
        <Post post={post} currentId={currentId} setCurrentId={setCurrentId} />
      </Grid>
    ))
  }

  </Grid>
  )
}

export default Posts
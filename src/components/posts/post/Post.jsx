import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React,{useEffect,useState} from 'react'
import useStyles from "./styles";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';
import Like from './Like';

 function Post({post,currentId,setCurrentId}) {
  const classes=useStyles();
  const dispatch=useDispatch();
  const user=JSON.parse(localStorage.getItem('profile'));
  const userId = String(user?.result.googleId || user?.result?._id);
  const [likes, setLikes] = useState(post.likes);
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };


  return (
<Card border={6} className={classes.card} elevation={5} >
  <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title}/>
  <div className={classes.overlay}>
   <Typography variant="h6" >
   {post.name}
   </Typography>
   <Typography variant="body2" >
   {Moment(post.createdAt).fromNow()}
   </Typography>
  </div>
  { (user?.result?._id===post.creator ||user?.result?.googleId===post.creator)&&(
    <div  className={classes.overlay2}>
    <Button style={{ color: 'white' }} size="small" onClick={()=>{setCurrentId(post._id)}}>
      <EditIcon fontSize='medium' ></EditIcon>
    </Button>
  </div>

  )}

  <div className={classes.details}>
    <Typography variant="body2"  color="primary" component="h2">
      {post.tags.map((tag)=>`#${tag}`)}
    </Typography>
    
  </div>
  <Typography className={classes.title} gutterBottom variant="h5" component="h2">
      {post.title}
    </Typography>
  <CardContent>
  <Typography className={classes.message} variant="body2" color="textSecondary" component="p">
      {post.message}
    </Typography>
  </CardContent>
  <CardActions className={classes.cardActions}>
    <Button size="small" disabled={!user?.result}  onClick={handleLike} >
    <Like post={post} userId={userId}  isUserLiked={hasLikedPost} likes={likes} likeCount={likes.length}></Like>
    
    </Button>
    { (user?.result?._id===post.creator ||user?.result?.googleId===post.creator)&&(

      <Button size="small" color="error" onClick={()=>{dispatch(deletePost(post._id))}} >
    <DeleteIcon></DeleteIcon>
    Delete
    </Button>
    ) }
    
  </CardActions>

</Card>
    )
}

export default Post
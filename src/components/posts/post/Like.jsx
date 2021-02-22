import React,{useState,useEffect} from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Like({post,userId,likeCount,isUserLiked,likes}) {




    if (likes.length > 0) {
        return likes.find((like) => like === userId)
          ? (
            <><ThumbUpIcon fontSize="small" />&nbsp;{likeCount > 2 ? `You and ${likeCount - 1} others` : `${likeCount} like${likeCount > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpOutlinedIcon fontSize="small" />&nbsp;{likeCount} {likeCount === 1 ? 'Like' : 'Likes'}</>
          );
      }else{
          return <><ThumbUpOutlinedIcon fontSize="small" />&nbsp;Like</>;

      }
  

}

export default Like
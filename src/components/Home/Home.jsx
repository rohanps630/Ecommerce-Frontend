import { Container, Grid, Grow,Chip, Paper,AppBar,TextField,Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPosts } from '../../actions/posts';
import Form from '../forms/Form';
import Paginate from '../pagination/Pagination';
import Posts from '../posts/Posts';
import useStyles from './styles';
import Autocomplete from '@mui/material/Autocomplete';


function Home() {
    const classes=useStyles();
    const [currentId, setCurrentId] = useState(0);
    const dispatch=useDispatch();
    function useQuery(){
     return new URLSearchParams(useLocation().search);

    }
//getting the post
    useEffect(() => {
      const dispatchPost=()=>{
        dispatch(getPosts())
      }
      return () => {
        dispatchPost();
      };
    }, [dispatch,currentId]);
//for handling the tags
    const [tags,setTags]=useState([''])
    const handleTags=(e)=>{
      const name=e.target.value;
      setTags((prev)=>[...prev,name])
    }


    const tag=[''];
    const query=useQuery();
    const navigate=useNavigate();
    const page=query.get('page')||1;
    const searchQuery=query.get('searchQuery');
    console.log('searchQuery>>>>>>>>>>>>>>>>>>>>',searchQuery)
  return (
    <Grow in>
    <Container maxWidth="xl">
      <Grid className={classes.mainContainer} container justify="space-between" alignItems={"stretch"} spacing={3}>
     
     
      <Grid item xs={12} md={8} sm={12} lg={8}>
       <Posts currentId={currentId} setCurrentId={setCurrentId} />
       <div className={classes.pagination} >
         <Paginate></Paginate>
       </div>
    
      </Grid>
      <Grid className={classes.rightContainer} item xs={12} md={4} sm={12} lg={4}>
      <Paper className={classes.appBarSearch}  color={'inherit'}>
        <TextField
        fullWidth
          label="Search By Keyword"
        />
        <Autocomplete
        
        multiple
        id="tags-filled"
        defaultValue={[]}
        freeSolo
        fullWidth
        options={tags}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            onClick={()=>setTags([])}
            onChange={handleTags}
            value={tags}
            variant="filled"
            label="Search By Tag"
            placeholder="Type.."
          />
        )}
        />
      </Paper>
     
       <Form currentId={currentId} setCurrentId={setCurrentId} />
       
      </Grid>
    
      </Grid>
    </Container>
    
    </Grow>
  )
}

export default Home
import { Container, Grow, Paper, Typography } from '@mui/material'
import useStyles from "./styles";

import React from 'react'

function About() {
  const classes=useStyles();

  return (
      <Grow in>
        <Container maxWidth={'md'} style={{marginTop:'100px'}}>
         <Paper elevation={4} className={classes.paper} >
          <Typography variant='h4' alignSelf={'center'}>About Us</Typography>
          <Typography variant='p' >
          Ut quis ad Lorem quis nisi. Tempor veniam laborum ea
               aute qui occaecat excepteur. Aute nulla est elit ut 
               culpa exercitation. Ea elit excepteur veniam Lorem 
               consectetur enim enim fugiat id tempor qui officia 
               eiusmod est. Et tempor sit qui pariatur duis Lorem 
               ullamco nostrud eiusmod exercitation reprehenderit.
               Ut quis ad Lorem quis nisi. Tempor veniam laborum ea
               aute qui occaecat excepteur. Aute nulla est elit ut 
               culpa exercitation. Ea elit excepteur veniam Lorem 
               consectetur enim enim fugiat id tempor qui officia 
               eiusmod est. Et tempor sit qui pariatur duis Lorem 
               ullamco nostrud eiusmod exercitation reprehenderit.
               Ut quis ad Lorem quis nisi. Tempor veniam laborum ea
               aute qui occaecat excepteur. Aute nulla est elit ut 
               culpa exercitation. Ea elit excepteur veniam Lorem 
               consectetur enim enim fugiat id tempor qui officia 
               eiusmod est. Et tempor sit qui pariatur duis Lorem 
               ullamco nostrud eiusmod exercitation reprehenderit.
               Ut quis ad Lorem quis nisi. Tempor veniam laborum ea
               aute qui occaecat excepteur. Aute nulla est elit ut 
               culpa exercitation. Ea elit excepteur veniam Lorem 
               consectetur enim enim fugiat id tempor qui officia 
               eiusmod est. Et tempor sit qui pariatur duis Lorem 
               ullamco nostrud eiusmod exercitation reprehenderit.

          </Typography>
         </Paper>
        </Container>
      </Grow>

   
  )
}

export default About
import React from 'react'
import { Pagination,PaginationItem } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

function Paginate() {
    const classes=useStyles()
  return (
    <Pagination 
        classes={{ul:classes.ul}}
        count={5}
        page={1}
        variant={"outlined"}
        color={'error'}
        boundaryCount={1}
        renderItem={(item)=>(
          <PaginationItem
          variant='span'
              {...item}
              component={Link}
              to={`/posts?page=${1}`}
          />
        )}
    />

  )
}

export default Paginate
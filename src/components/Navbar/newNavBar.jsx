import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Button, Toolbar, Typography,Box,IconButton,Menu,Container,Tooltip,MenuItem } from '@mui/material';
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



const pages = ['Home', 'About'];
    const settings = ['Profile', 'Logout'];
function NewNavBar() {
    
    const navigate=useNavigate();
  
        const [anchorElNav, setAnchorElNav] = React.useState(null);
        const [anchorElUser, setAnchorElUser] = React.useState(null);
      
        const handleOpenNavMenu = (event) => {
          const name=event.target.innerHTML;
          if(name==='About'){
            navigate('/about')
          setAnchorElUser(null);
          handleCloseNavMenu();

          }
           if(name==='Home'){
            navigate('/')
          setAnchorElUser(null);
          handleCloseNavMenu();

          }          setAnchorElNav(event.currentTarget);

        };
        const handleOpenUserMenu = (event) => {
          setAnchorElUser(event.currentTarget);
        };
        const openUserChoice=(event)=>{
          const name=event.target.innerHTML;
          if(name==='Logout'){
            logout();
          setAnchorElUser(null);

          }

          if(name==='Profile'){
            navigate('/profile')
          setAnchorElUser(null);

          }

        
        }
      
        const handleCloseNavMenu = () => {
          setAnchorElNav(null);
        };
      
        const handleCloseUserMenu = () => {
          setAnchorElUser(null);
        };


        /***********************************************/
        const classes=useStyles();
  const dispatch=useDispatch();
  const location=useLocation();
  const [users,setUsers]=useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    const getToken=()=>{
    const token=users?.token;
    if(token){
      const decodedToken=decode(token)
      if(decodedToken.exp *1000<new Date().getTime()){
        logout();
      }
    }
    
    setUsers(JSON.parse(localStorage.getItem('profile')))
    }
      getToken()
   
  }, [location,users]);
  const logout=()=>{
   dispatch({type:actionTypes.LOGOUT})
   navigate('/',{replace:true})
   setUsers(null)
  }  
        


        return (
            <AppBar className={classes.appBar} elevation={5}  >
              <Container maxWidth="xl">
                <Toolbar disableGutters>
                 
                  <Typography 
                  component={Link}
                   style={{textDecoration:"none"}}
                   to={'/'} 
                   variant="h4"
                   className={classes.heading}
                    noWrap
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  align="center">
                 RECALL
             </Typography>
        
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleOpenNavMenu}>
                          <Typography onClick={handleOpenNavMenu} textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  <Typography
                    variant="h4"
                   className={classes.heading}
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  >
                    RECALL
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={handleOpenNavMenu}
                        sx={{ my: 2, color: 'primary', display: 'block' }}
                      >
                        {page}
                      </Button>
                    ))}
                  </Box>
                  {users?
                    <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <div referrerPolicy="no-referrer">
                      <Avatar referrerPolicy="no-referrer" className={classes.purple}   src={users?.result?.imageUrl} 
                         alt={users?.result?.name.charAt(0)} >
                           {users.result.name.charAt(0)}
                         </Avatar>
                      </div>

                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} name={setting} onClick={openUserChoice}>
                          <Typography onClick={openUserChoice} textAlign="center">{setting}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                  :
                  <Button component={Link} to={'/auth'} className={classes.loginButton} variant='outlined'  color={'primary'}>  
                      <PersonIcon/>
                        <Typography variant='p'>Login</Typography>
                      </Button>
                  }
        

                </Toolbar>
              </Container>
            </AppBar>
          );
};
export default NewNavBar;


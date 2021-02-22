import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";


export default makeStyles(() => ({
  paper: {
    marginTop: useTheme().spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: useTheme().spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: useTheme().spacing(1),
    },
  },
  avatar: {
    margin: useTheme().spacing(1),
    backgroundColor: useTheme().palette.error.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: useTheme().spacing(3),
    alignItems:'center'
  },
  [useTheme().breakpoints.down('lg'||'md'||'sm')]:{
    container:{
      alignItems:"center !important",
    }
  },
  submit: {
    margin: useTheme().spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: useTheme().spacing(2),
  },
  names:{
    display:"flex",
    flexDirection:"row"
  },
  footerButton:{
    display:"flex",
    flexDirection:"column !important"
  },
  icon:{
    height:"15px",
    width:"15px",
  },
}));
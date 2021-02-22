import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import { useTheme } from "@mui/material/styles";



export default makeStyles((theme)=>({
    appBar:{
      borderTopRightRadius:0,
      borderTopLeftRadius:0,
      borderBottomLeftRadius:15,
      borderBottomRightRadius:15,
      position:'sticky',
      top:'10px',
      margin:"0 0 !important",
      justifyContent:"space-between ",
      height:"80px",
      paddingLeft:"15px",
      paddingRight:"15px",
      alignItems:"center",
      display:"flex !important",
      flexDirection:"row !important",
      color:'black',
      backgroundColor: "white !important",
    
    },
    heading:{
      fontFamily: 'cursive !important',
        color:"black",
        
       },
       image:{
         position:"absolute",
         left:"1px",  
         down:"15px",
         marginLeft:"15px",

         marginBottom:'45px'
       },
    brandContainer:{
        bottom:"30px",
        position:"relative",
        width:"420px !important",
        display:"flex",
        flexDirection:"row-reverse",
        justifyContent:"space-between !important",

    },
    toolbar:{
     
    },
    userSection:{
        display:'flex',
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-around",
        width:"200px",
        
    },
    profile:{
        display:'flex',
        flexDirection:"column !important",
        marginTop:"8px !important",
        paddingLeft:"35px",

    },
    purple:{
     height:"10px",
    },
    logout:{
        borderRadius:"50%",
        marginLeft :"5px !important"

    },
    login:{

    },
    loginButton:{
        display:'flex',
        flexDirection:"column"
    },
    [useTheme().breakpoints.down('sm'||'xs')]:{
        heading:{
            top:"13px",
            left:'55px'
            
           },
           image:{
             right:"90px !important",  
             top:"8px",
             width:'35px',
             height:'35px',
           }, 
           profile:{
             marginLeft:"70px !important",
             marginBottom:"8px"
           }
    }

}))
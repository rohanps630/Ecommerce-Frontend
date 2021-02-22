import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";


export default makeStyles((theme) => ({
    mainContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection:'row'
    },
    smMargin: {
      margin: useTheme().spacing(0.5),
    },
    actionDiv: {
      textAlign: 'center',
    },
  }));
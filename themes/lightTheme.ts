import { createTheme } from "@mui/material";
import { blue, purple, red } from "@mui/material/colors";


export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: blue[300]
      },
      secondary: {
        main: purple[400]
      },
      error: {
        main: red[400]
      }
    },
    components: {
      MuiAppBar:{
          defaultProps: {
            elevation: 0
          }
      }
    }

})
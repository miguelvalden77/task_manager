import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";


export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
          main: grey[300]
        },
        secondary: {
          main: blue[500]
        }
      },
      components: {
        MuiAppBar:{
          styleOverrides: {
            root: {
              backgroundColor: "darkblue"
            },
          },
          defaultProps: {
            elevation: 0
          }
        }
      }
  })
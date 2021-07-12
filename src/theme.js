import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette:{
    background: {
      default: "#222222",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#000000"
    },
  },

});

export { theme };

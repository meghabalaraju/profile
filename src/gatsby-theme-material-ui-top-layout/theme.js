import { createMuiTheme } from "@material-ui/core"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

theme.overrides = {
  MuiButton: {
    root: {
      fontFamily: '"Quicksand", sans-serif',
      letterSpacing: 2.5,
      textTransform: "none",
    },
  },
}

export default theme

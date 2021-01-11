import { createMuiTheme, colors } from "@material-ui/core"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    common: {
      black: `#000`,
      white: `#fff`,
    },
    type: "dark",
    primary: {
      main: `#06A96B`,
      contrastText: `DBDBDB`,
    },
    secondary: {
      main: `#FDB370`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      dark: `#343434`,
      light: `#ffffff`,
    },
    text: {
      primary: `rgba(255, 255, 255, 0.9)`,
      secondary: `rgba(219, 219, 219, 1)`,
    },
  },
})

export default theme

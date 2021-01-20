import React from "react"
import Sitelogo from "../svg/sitelogo.svg"
import { styled } from "@material-ui/core/styles"
import { Container, Box, makeStyles } from "@material-ui/core"
import TextButton from "./uicomponents/uiButtons/textButton"
import theme from "../gatsby-theme-material-ui-top-layout/theme"

const HeaderLayout = styled(Container)(({ theme, maxWidth }) => ({
  maxWidth: maxWidth,
  padding: "0px 120px",
  marginBottom: "150px",

  [theme.breakpoints.down("lg")]: {
    padding: "20px 50px",
    marginBottom: "80px",
  },

  [theme.breakpoints.down("md")]: {
    marginBottom: "40px",
    padding: "10px, 30px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "20px 40px",
    marginBottom: "0px",
  },

  [theme.breakpoints.down("xs")]: {
    padding: "0px",
    marginBottom: "20px",
  },
}))

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 10,

  // media query using Mui
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}))

const useStyles = makeStyles(theme => ({
  uMarignBottom: {
    marginTop: 20,
  },
  textBgTransition: {
    marginRight: "20px",
    borderBottom: "2px solid #06A96B",
  },
  siteLogo: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "10px",
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <HeaderLayout maxWidth="xl">
      <FlexBox className={classes.uMarignBottom}>
        <Sitelogo className={classes.siteLogo} />
        <div>
          <TextButton>About Me</TextButton>
          <TextButton>Projects</TextButton>
        </div>
      </FlexBox>
    </HeaderLayout>
  )
}

export default Header

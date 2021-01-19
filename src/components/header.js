import React from "react"
import Sitelogo from "../svg/sitelogo.svg"
import { styled } from "@material-ui/core/styles"
import { Container, Box, makeStyles } from "@material-ui/core"
import TextButton from "./uicomponents/uiButtons/textButton"

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

const useStyles = makeStyles({
  uMarignBottom: {
    marginTop: 20,
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <Container
      maxWidth="xl"
      style={{ margin: `0px auto 170px auto`, padding: `0px 200px` }}
    >
      <FlexBox className={classes.uMarignBottom}>
        <Sitelogo />
        <div>
          <TextButton>About Me</TextButton>
          <TextButton>Projects</TextButton>
        </div>
      </FlexBox>
    </Container>
  )
}

export default Header

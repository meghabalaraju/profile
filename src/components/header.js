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
    marginBottom: 20,
    marginTop: 20,
  },
})

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <Container maxWidth="lg">
        <FlexBox className={classes.uMarignBottom}>
          <Sitelogo />
          <div>
            <TextButton>About Me</TextButton>
            <TextButton>Projects</TextButton>
          </div>
        </FlexBox>
      </Container>
    </>
  )
}

export default Header

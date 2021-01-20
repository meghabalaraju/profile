import React from "react"
import Header from "../header"
import "./layout.css"
import TopLayout from "../../gatsby-theme-material-ui-top-layout/components/top-layout"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Container, styled } from "@material-ui/core"

const ContainerLayout = styled(Container)(({ theme }) => ({
  maxWidth: "lg",

  [theme.breakpoints.down("lg")]: {
    padding: "0px 200px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0px 100px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "60px 100px",
  },

  [theme.breakpoints.down("xs")]: {
    padding: "50px",
  },
}))

const Layout = ({ children }) => {
  return (
    <TopLayout theme={theme}>
      <Header />
      {/* Content is limited to width lg="1280px" in Material UI */}
      <ContainerLayout>
        <main>{children}</main>
      </ContainerLayout>
    </TopLayout>
  )
}

export default Layout

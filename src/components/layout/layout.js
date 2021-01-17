import React from "react"
import Header from "../header"
import "./layout.css"
import TopLayout from "../../gatsby-theme-material-ui-top-layout/components/top-layout"
import theme from "../../gatsby-theme-material-ui-top-layout/theme"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <TopLayout theme={theme}>
      <Header />
      {/* Content is limited to width lg="1280px" in Material UI */}
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
    </TopLayout>
  )
}

export default Layout

import React from "react"
import Layout from "../components/layout/layout"
import Image from "../components/uicomponents/image"
import SEO from "../components/seo"

import { styled } from "@material-ui/core/styles"
import { Box, Typography } from "@material-ui/core"
import TopLayout from "../gatsby-theme-material-ui-top-layout/components/top-layout"

const SectionTitle = styled(Box)({
  fontSize: "2.5rem",
  textAlign: "center",
  color: "#22A39F",
  paddingTop: "2rem",
})

const AboutPage = () => (
  <TopLayout>
    <Layout>
      <SEO title="About Me" />
      <SectionTitle component="h2">Megha</SectionTitle>
      <Typography>
        <h1>About Me</h1>
        <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
      </Typography>
    </Layout>
  </TopLayout>
)

export default AboutPage

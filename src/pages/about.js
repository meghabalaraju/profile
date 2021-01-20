import React from "react"
import Layout from "../components/layout/layout"
import Image from "../components/uicomponents/image"
import SEO from "../components/seo"

const AboutPage = ({ location }) => {
  console.log("frheh", location)
  return (
    <Layout>
      <SEO title="About Me" />
      <h1>About Me</h1>
      <div style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default AboutPage

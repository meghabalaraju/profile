import React from "react"
import Layout from "../components/layout/layout"
import Image from "../components/uicomponents/image"
import SEO from "../components/seo"
import { styled } from "@material-ui/core/styles"
import { Box, makeStyles } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import OutlinedButton from "../components/uicomponents/uiButtons/outlinedButton"

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  margin: "0px",
  justifyContent: "space-between",
  alignItems: "center",

  // media query using Mui

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "unset",
  },

  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}))

const useStyles = makeStyles(theme => ({
  header: {
    fontFamily: '"QuickSand", sans-serif',
    marginTop: `-40px`,
    [theme.breakpoints.down("md")]: {
      margin: "40px 0px 0px 40px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageMe: {
    flex: "0 1 20%",
    [theme.breakpoints.down("sm")]: {
      width: "30%",
      margin: "0px auto",
      padding: "0px 0px 30px 0px",
    },

    [theme.breakpoints.down("xs")]: {
      width: "40%",
    },
  },

  descriptionMe: {
    flex: "1 1 55%",
    padding: "20px 150px 20px 170px",

    // lg - 1280px , xl - 1920px

    [theme.breakpoints.down("lg")]: {
      padding: "20px 40px 20px 100px",
    },

    [theme.breakpoints.down("md")]: {
      padding: "20px 90px 20px 100px",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "20px 30px 20px 30px",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },

    "& > p": {
      [theme.breakpoints.down("sm")]: {
        fontSize: 14,
      },
    },
  },
  toProjects: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "unset",
      justifyContent: "center",
    },
  },
  hr: {
    border: 0,
    height: "1px",
    background: "#fff",
    backgroundImage: "linear-gradient(to right, #808080, #ccc, #808080)",
    width: "60%",
    paddingRight: "20px",

    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}))

const AboutPage = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      contentfulPortfolio {
        about {
          about
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Me" />
      <h1 className={classes.header}>About Me</h1>
      <FlexBox>
        <div className={classes.imageMe}>
          <Image />
        </div>
        <div className={classes.descriptionMe}>
          <p>{data.contentfulPortfolio.about.about}</p>
          <div className={classes.toProjects}>
            <div className={classes.hr}></div>
            <OutlinedButton to="/projects">Go to projects</OutlinedButton>
          </div>
        </div>
      </FlexBox>
    </Layout>
  )
}

export default AboutPage

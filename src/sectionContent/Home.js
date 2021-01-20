import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Responsive from "../svg/responsive.svg"
import PortIconButton from "../components/uicomponents/uiButtons/iconButton"
import { IoLogoGithub, IoDocumentTextOutline } from "react-icons/io5"
import { GrLinkedinOption } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  padding: 10,

  // media query using Mui
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },

  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}))

const useStyles = makeStyles(theme => ({
  description: {
    flex: "0 1 35%",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  },
  homeLogo: {
    flex: "0 1 40%",
  },
  desHeader: {
    letterSpacing: "0.11rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  },
  desPara: {
    letterSpacing: "0.11rem",
    marginBottom: "50px",
  },
  uMarginRight: {
    marginRight: "10px",
  },
  uMarginBottom: {
    marginBottom: "10px",
  },
}))

const Home = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      contentfulAsset {
        localFile {
          url
        }
      }
      contentfulPortfolio {
        firstname
        profession
        personalityDescription {
          personalityDescription
        }
        contact {
          github
          linkedin
          mail
        }
        about {
          about
        }
      }
    }
  `)
  return (
    <FlexBox>
      <div className={classes.description}>
        <h1 className={classes.desHeader}>
          Hi, I'm {data.contentfulPortfolio.firstname}!
        </h1>
        <p className={classes.desPara}>
          {
            data.contentfulPortfolio.personalityDescription
              .personalityDescription
          }
        </p>
        <PortIconButton className={classes.uMarginRight}>
          <IoLogoGithub />
        </PortIconButton>
        <PortIconButton className={classes.uMarginRight}>
          <GrLinkedinOption />
        </PortIconButton>
        <PortIconButton className={classes.uMarginRight}>
          <HiOutlineMail />
        </PortIconButton>
        <PortIconButton>
          <IoDocumentTextOutline />
        </PortIconButton>
      </div>
      <Responsive className={classes.homeLogo} />
    </FlexBox>
  )
}

export default Home

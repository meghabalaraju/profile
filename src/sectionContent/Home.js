import React from "react"
import { Box } from "@material-ui/core"
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
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}))

const Home = () => {
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
      <div style={{ flex: `0 1 35%` }}>
        <h1>Hi, I'm {data.contentfulPortfolio.firstname}!</h1>
        <p>
          {
            data.contentfulPortfolio.personalityDescription
              .personalityDescription
          }
        </p>
        <PortIconButton>
          <IoLogoGithub />
        </PortIconButton>
        <PortIconButton>
          <GrLinkedinOption />
        </PortIconButton>
        <PortIconButton>
          <HiOutlineMail />
        </PortIconButton>
        <PortIconButton>
          <IoDocumentTextOutline />
        </PortIconButton>
      </div>
      <Responsive style={{ flex: `0 1 40%` }} />
    </FlexBox>
  )
}

export default Home

import React from "react"
import { Container, Box } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Responsive from "../svg/responsive.svg"

const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 10,
  width: "100%",

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
    <Container maxWidth="lg">
      <FlexBox>
        <div>
          <h1>Hi, I'm {data.contentfulPortfolio.firstname}!</h1>
          <p>
            {
              data.contentfulPortfolio.personalityDescription
                .personalityDescription
            }
          </p>
          <h3>{data.contentfulPortfolio.contact.github}</h3>
          <h3>{data.contentfulPortfolio.contact.linkedin}</h3>
          <h3>{data.contentfulPortfolio.contact.mail}</h3>
        </div>

        <div>
          <Responsive />
        </div>
      </FlexBox>
    </Container>
  )
}

export default Home

let env = process.env.NODE_ENV || "development"

require("dotenv").config({ path: `./.env.${env}` })

module.exports = {
  siteMetadata: {
    title: `Megha Balaraju`,
    description: `Personal site for Megha. Developer.`,
    author: `@meghabalaraju`,
    siteUrl: `https://www.kbmegha.com`,
    url: `https://www.kbmegha.com`,
    keywords: [
      "Megha Karabylu Balaraju",
      "Megha Balaraju",
      "meghabalaraju",
      "JavaScript",
      "React",
      "Web Development",
      "Angular",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-theme-material-ui`,
    {
      resolve: "gatsby-plugin-react-svg", // brings svg icons as component
      options: {
        rule: {
          include: /svg/,
        },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `${process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN}`,
        downloadLocal: true,
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
  ],
}

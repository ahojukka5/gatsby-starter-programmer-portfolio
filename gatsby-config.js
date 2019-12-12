module.exports = {
  siteMetadata: {
    title: `Portfolio | Jukka Aho | @ahojukka5`,
    description: `This is a portfolio web page done by myself for myself.`,
    author: `@ahojukka5`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

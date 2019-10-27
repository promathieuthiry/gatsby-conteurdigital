module.exports = {
 siteMetadata: {
   title: 'Conteur Digital',
   author: 'Mathieu T'
 },
 plugins: [
   'gatsby-plugin-sass',
   `gatsby-plugin-react-helmet`,
   {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'material icons',
        'roboto:300,400,500,700',
        'oswald:300,400,500,700',
      ],
    },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `Oswald`,
          subsets: [`latin`],
        },
        {
          family: `Open Sans`,
          variants: [`400`, `700`]
        },
      ],
    },
  },
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`
    }
  },
  'gatsby-plugin-sharp',
 ]
}

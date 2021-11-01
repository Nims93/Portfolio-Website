module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: "Kieran's Portfolio Website",
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs-as-components/,
        },
      },
    },
  ],
};

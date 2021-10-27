module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: "Kieran's Portfolio Website",
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};

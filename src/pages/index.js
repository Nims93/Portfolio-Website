import * as React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import NavBar from './../components/Navbar';

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --navbar-color: #18181b;
  }

  body {
    /* font-size: 10px; */
    color: white;
    font-size: 10px;
    
    padding: 0;
    font-family: 'Prompt', sans-serif;
  }
`;

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyle />
      <NavBar />
    </>
  );
};

export default IndexPage;

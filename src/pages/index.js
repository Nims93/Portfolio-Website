import * as React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import NavBar from './../components/Navbar';
import Intro from './../components/Intro';
import Projects from './../components/Projects';
import WavesSection1 from './../components/WavesSection1';
import Skills from './../components/Skills';
import WavesSection2 from '../components/WavesSection2';
import ContactMe from '../components/ContactMe';

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --navbar-color: #18181b;
    --intro-color: #dd3f31;
    --projects-color: #6d1868;
    --skills-color: #ff0066;
    --contact-color: #202731;

    --section-heading-font-size-mb: 4em;
    --section-heading-font-size-md: 11em;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
    overflow-x: hidden;
    color: white;
    background-color: #202731;
    font-size: 10px;
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
      <Intro />
      <Projects />
      <WavesSection1 />
      <Skills />
      <WavesSection2 />
      <ContactMe />
    </>
  );
};

export default IndexPage;

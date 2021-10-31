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
import Footer from '../components/Footer';

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --navbar-color: #18181b;
    --intro-color: #83a8ee;
    --projets-color-from: #18256d;
    --projects-color-to: #6d1868;
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

  //styling textarea globally because styled components and formik use the same "as" prop 
  //which was stopping formik from capturing the text input 
  textarea {
    appearance: none;
    resize: none;
    width: 100%;
    height: 20em;
    border: 2px solid white;
    border-radius: 10px;
    font-family: 'Prompt', sans-serif;
    font-weight: 400;
    font-size: 1.7em;
    text-align: center;
    background-color: transparent;
    color: white;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: #3c31dd;
      transform: scale(1.01);
    }

    @media (min-width: 767px) {
      font-size: 2em;
    }
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
      <Footer />
    </>
  );
};

export default IndexPage;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      delay: 0.4,
      duration: 1,
    },
  },
};

export default function Intro() {
  return (
    <IntroSection id="intro">
      <ContentWrapper
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Heading>I'm Kieran Cyprien</Heading>
        <Text>An aspiring web developer / programmer in London</Text>
        <Text>
          A self taught front end developer with a strong desire to become as
          proficient and skilled a programmer as possible. I have aspirations to
          learn more languages, frameworks and libraries with the ultimate goal
          of becoming a full stack developer and mobile dev. I'm currently
          skilled with React, Javascript, SASS and Styled Components. I'm a
          quick and eager learner, able to adapt to the challenges of software
          development.
        </Text>
        <Text>
          I am ready and willing to take my skillset to a professional setting
          with your company. Look below to view my projects.
        </Text>
      </ContentWrapper>
    </IntroSection>
  );
}

const Text = styled.p`
  font-size: 1.7em;
  margin: 1em;

  @media (min-width: 767px) {
    font-size: 2.5em;
  }
`;

const Heading = styled.h1`
  font-size: var(--section-heading-font-size-mb);
  margin-top: 1em;

  @media (min-width: 767px) {
    font-size: var(--section-heading-font-size-md);
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 1200px;
  width: 90%;
`;

const IntroSection = styled.section`
  margin-top: 3em;
  padding-top: 8em;
  padding-bottom: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--intro-color);
  overflow-x: hidden;

  @media (min-width: 767px) {
    padding-top: 10em;
  }
`;

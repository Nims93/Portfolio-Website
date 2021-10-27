import React from 'react';
import styled from 'styled-components';

export default function Intro() {
  return (
    <IntroSection id="intro">
      <ContentWrapper>
        <Heading>Hi, I'm Kieran Cyprien</Heading>
        <Text>I'm an aspiring web developer / programmer in London</Text>
        <Text>
          I'm currently mostly into front end development with a strong desire
          to become as proficient and skilled a programmer as possible. I have
          aspirations to learn more languages and frameworks / libraries with
          the ultimate goal to become a full stack developer and mobile dev. I'm
          currently working and skilled with React, Js and SASS.
        </Text>
        <Text>
          With my current skillset I would like to take my skillset to a
          professional setting with your company, with which I beleive I would
          be an exccellent candidate.
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

  @media (min-width: 767px) {
    padding-top: 10em;
  }
`;

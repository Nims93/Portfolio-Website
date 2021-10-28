import React from 'react';
import styled from 'styled-components';
import ContactForm from './ContactForm';

export default function ContactMe() {
  return (
    <ContactSection id="contact-me">
      <ContactWrapper>
        <Title>Contact Me!</Title>
        <Text>
          If you're impressed with my work and would like to contact me, feel
          free to fill out the form below!
        </Text>
        <ContactForm />
      </ContactWrapper>
    </ContactSection>
  );
}

const Text = styled.p`
  font-size: 1.5em;

  @media (min-width: 767px) {
    font-size: 2.5em;
  }
`;

const Title = styled.h2`
  font-size: var(--section-heading-font-size-mb);

  @media (min-width: 767px) {
    font-size: var(--section-heading-font-size-md);
  }
`;

const ContactWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  text-align: center;
  position: relative;
`;

const ContactSection = styled.section`
  background-color: #202731;
  background: no-repeat top url('./../assets/blob-scatter-haikei-mob.svg');
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 767px) {
    background-image: url('./../assets/blob-scatter-haikei.svg');
  }
`;

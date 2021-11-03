import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import ContactForm from './ContactForm';
import BlobsSvgMb from '../images/blob-scatter-haikei-mob.svg';
import BlobsSvg from '../images/blob-scatter-haikei.svg';

const titleVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 1,
    transition: {
      when: 'beforeChildren',
      delay: 1,
    },
  },
};

const wrapperVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export default function ContactMe() {
  const wrapperRef = useRef();
  const wrapperInViewPort = useIntersection(wrapperRef, 0.2);
  const animationControlWrapper = useAnimation();

  useEffect(() => {
    wrapperInViewPort && animationControlWrapper.start(wrapperVariants.animate);
  }, [wrapperInViewPort, animationControlWrapper]);

  return (
    <ContactSection id="contact-me">
      <ContactWrapper
        ref={wrapperRef}
        as={motion.div}
        variants={wrapperVariants}
        initial="initial"
        animate={animationControlWrapper}
      >
        <Title as={motion.h2} variants={titleVariants} animate="animate">
          Contact Me!
        </Title>
        <Text>
          If you're impressed with my work and would like to contact me, feel
          free to fill out the form below! Form state management by Formik and
          input validation by Yup.
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
  margin-top: 1em;

  @media (min-width: 767px) {
    font-size: var(--section-heading-font-size-md);
    margin-top: 0.3em;
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
  background: no-repeat top url(${BlobsSvgMb});
  background-size: cover;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 767px) {
    background-image: url(${BlobsSvg});
  }
`;

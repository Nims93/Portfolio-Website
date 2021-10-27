import React from 'react';
import styled from 'styled-components';
import WaveSvg from './../images/singlewave2.svg';

export default function Projects() {
  return (
    <ProjectsSection>
      <SVGContainer>
        <WaveSvg />
      </SVGContainer>
      <ProjectsWrapper>
        <Title>Projects</Title>
      </ProjectsWrapper>
    </ProjectsSection>
  );
}

const Title = styled.h2`
  font-size: var(--section-heading-font-size-mb);
  margin: 0;
  margin-top: 2em;
  text-align: center;
`;

const SVGContainer = styled.div`
  position: absolute;
  top: -2px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;

    @media (min-width: 767px) {
      height: 230px;
    }

    .shape-fill {
      fill: #dd3f31;
    }
  }
`;

const ProjectsWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1200px;
  text-align: center;
`;

const ProjectsSection = styled.section`
  background-color: var(--projects-color);
  padding: 5em 0 2em 0;
  position: relative;
`;

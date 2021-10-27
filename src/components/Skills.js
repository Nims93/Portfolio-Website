import React from 'react';
import styled from 'styled-components';
import KUTE from 'kute.js';
import CssSVG from './../images/icons8-css3.svg';
import FirebaseSVG from './../images/icons8-firebase.svg';
import GitSVG from './../images/icons8-git.svg';
import GithubSVG from './../images/icons8-github.svg';
import JsSVG from './../images/icons8-javascript.svg';
import PythonSVG from './../images/icons8-python.svg';
import SassSVG from './../images/icons8-sass.svg';
import HtmlSVG from './../images/svgrepo-html5.svg';
import ReactSVG from './../images/svgrepo-react.svg';
import BlobSVG from './../images/dual-haikei-blobs.svg';

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <SectionContainer>
        <Title>Skills</Title>
        <SkillsContainer>
          <SkillsGroupSubContainer>
            <Skill id="html">
              <HtmlSVG />
              <p>HTML5</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill id="github">
              <GithubSVG />
              <p>GitHub</p>
            </Skill>
            <Skill id="git">
              <GitSVG />
              <p>Git</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill id="javascript">
              <JsSVG />
              <p>Javascript</p>
            </Skill>
            <Skill id="react">
              <ReactSVG />
              <p>React</p>
            </Skill>
            <Skill id="python">
              <PythonSVG />
              <p>Python</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill id="css">
              <CssSVG />
              <p>Css</p>
            </Skill>
            <Skill id="sass">
              <SassSVG />
              <p>Sass</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill id="firebase">
              <FirebaseSVG />
              <p>Firestore RTDB</p>
            </Skill>
          </SkillsGroupSubContainer>
        </SkillsContainer>
      </SectionContainer>
    </SkillsSection>
  );
}

const Skill = styled.div`
  padding: 0.3em 0;
  border-radius: 10px;
  box-shadow: 0px 0px 100px 6px rgba(0, 0, 0, 0.3);
  background-color: #ece5e5;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  & + & {
    margin-top: 1.5em;
  }

  svg {
    height: 70%;
    width: auto;
  }

  p {
    font-weight: 400;
  }

  @media (min-width: 1050px) {
    border-radius: 20px;
    height: 110px !important;
    width: 170px !important;

    p {
      font-size: 1.7em !important;
    }
  }
`;

const SkillsGroupSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-top: 1.5em;

    @media (min-width: 1050px) {
      /* margin-left: 4em; */
    }
  }

  &:first-child {
    #html {
      width: 210px;
      height: 70px;

      @media (min-width: 767px) {
        width: 300px;
        height: 100px;
      }

      p {
        font-size: 1.1em;
        @media (min-width: 767px) {
          font-size: 1.3em;
        }
      }
    }
  }

  &:nth-child(2) {
    #github {
      width: 240px;
      height: 80px;

      @media (min-width: 767px) {
        width: 330px;
        height: 110px;
      }

      p {
        font-size: 1.2em;
        @media (min-width: 767px) {
          font-size: 1.5em;
        }
      }
    }

    #git {
      width: 270px;
      height: 90px;
      @media (min-width: 767px) {
        width: 360px;
        height: 120px;
      }

      p {
        font-size: 1.3em;
        @media (min-width: 767px) {
          font-size: 1.6em;
        }
      }
    }
  }

  &:nth-child(3) {
    #javascript {
      width: 300px;
      height: 100px;

      @media (min-width: 767px) {
        width: 390px;
        height: 130px;
      }

      p {
        font-size: 1.4em;

        @media (min-width: 767px) {
          font-size: 1.7em;
        }
      }
    }

    #react {
      width: 330px;
      height: 110px;

      @media (min-width: 767px) {
        width: 420px;
        height: 140px;
      }

      p {
        font-size: 1.5em;

        @media (min-width: 767px) {
          font-size: 1.8em;
        }
      }
    }

    #python {
      width: 300px;
      height: 100px;

      @media (min-width: 767px) {
        width: 390px;
        height: 130px;
      }

      p {
        font-size: 1.4em;

        @media (min-width: 767px) {
          font-size: 1.7em;
        }
      }
    }
  }

  &:nth-child(4) {
    #css {
      width: 270px;
      height: 90px;

      @media (min-width: 767px) {
        width: 360px;
        height: 120px;
      }

      p {
        font-size: 1.3em;

        @media (min-width: 767px) {
          font-size: 1.6em;
        }
      }
    }

    #sass {
      width: 240px;
      height: 80px;

      @media (min-width: 767px) {
        width: 330px;
        height: 110px;
      }

      p {
        font-size: 1.2em;

        @media (min-width: 767px) {
          font-size: 1.5em;
        }
      }
    }
  }

  &:last-child {
    #firebase {
      width: 210px;
      height: 70px;

      @media (min-width: 767px) {
        width: 300px;
        height: 100px;
      }

      p {
        font-size: 1.1em;

        @media (min-width: 767px) {
          font-size: 1.4em;
        }
      }
    }
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;

  @media (min-width: 1050px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Title = styled.h2`
  position: relative;
  font-size: var(--section-heading-font-size-mb);
  margin: 0;

  @media (min-width: 767px) {
    font-size: var(--section-heading-font-size-md);
  }
`;

const SectionContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  text-align: center;
  position: relative;
`;

const SkillsSection = styled.section`
  background-color: var(--skills-color);
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`;

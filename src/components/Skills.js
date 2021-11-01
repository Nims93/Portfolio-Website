import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useIntersection } from '../hooks/useIntersection';
import CssSVG from './../svgs-as-components/icons8-css3.svg';
import FirebaseSVG from './../svgs-as-components/icons8-firebase.svg';
import GitSVG from './../svgs-as-components/icons8-git.svg';
import GithubSVG from './../svgs-as-components/icons8-github.svg';
import JsSVG from './../svgs-as-components/icons8-javascript.svg';
import PythonSVG from './../svgs-as-components/icons8-python.svg';
import SassSVG from './../svgs-as-components/icons8-sass.svg';
import HtmlSVG from './../svgs-as-components/svgrepo-html5.svg';
import ReactSVG from './../svgs-as-components/svgrepo-react.svg';
import BlobSVG from './../svgs-as-components/dual-haikei-blobs.svg';

const titleVariants = {
  init: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      delay: 0.4,
      duration: 0.5,
    },
  },
};

const skillVariants = {
  leftInit: {
    opacity: 0,
    x: -50,
  },
  rightInit: {
    opacity: 0,
    x: 50,
  },
  topInit: {
    opacity: 0,
    y: -50,
  },
  bottomInit: {
    opacity: 0,
    y: 50,
  },
  centerInit: {
    opacity: 0,
    scale: 0,
  },
  animateHtml: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0,
    },
  },
  animateGithub: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
  animateGit: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
    },
  },
  animateJs: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
    },
  },
  animateReact: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1.2,
    },
  },
  animatePython: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
    },
  },
  animateCss: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.6,
    },
  },
  animateSass: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
    },
  },
  animateFirebase: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0,
    },
  },
};

export default function Skills() {
  const [windowWidth, setWindowWidth] = useState(null);
  const kuteRef = useRef(null);
  const isAnimationOnScreenRef = useRef(false);
  const titleRef = useRef();
  const skillsContainerRef = useRef();
  const titleInViewPort = useIntersection(titleRef, '200px');
  const skillsInViewPort = useIntersection(skillsContainerRef, '600px');
  const animationControl = useAnimation();
  const animationControlHtml = useAnimation();
  const animationControlGithub = useAnimation();
  const animationControlGit = useAnimation();
  const animationControlJs = useAnimation();
  const animationControlReact = useAnimation();
  const animationControlPython = useAnimation();
  const animationControlCss = useAnimation();
  const animationControlSass = useAnimation();
  const animationControlFirebase = useAnimation();

  useEffect(() => {
    titleInViewPort && animationControl.start(titleVariants.animate);
  }, [titleInViewPort]);

  useEffect(() => {
    if (skillsInViewPort) {
      animationControlHtml.start(skillVariants.animateHtml);
      animationControlGithub.start(skillVariants.animateGithub);
      animationControlGit.start(skillVariants.animateGit);
      animationControlJs.start(skillVariants.animateJs);
      animationControlReact.start(skillVariants.animateReact);
      animationControlPython.start(skillVariants.animatePython);
      animationControlCss.start(skillVariants.animateCss);
      animationControlSass.start(skillVariants.animateSass);
      animationControlFirebase.start(skillVariants.animateFirebase);
    }
  }, [skillsInViewPort]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(async () => {
    //KUTE.js depends on window object which doesn't exist at build time. Must be imported after component is mounted
    //destructures imported object and changes its property default to KUTE
    const { default: KUTE } = await import('kute.js');

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);

    if (windowWidth >= 1050 && !isAnimationOnScreenRef.current) {
      //if window width is greather than 1050px and animation hasn't already been created
      isAnimationOnScreenRef.current = true;
      kuteRef.current = KUTE.fromTo(
        '#blob1',
        { path: '#blob1' },
        { path: '#blob2' },
        { repeat: 999, duration: 3000, yoyo: true }
      ).start();
    } else if (windowWidth < 1050 && isAnimationOnScreenRef.current) {
      //if window width is less than 1050px and animation has been created
      isAnimationOnScreenRef.current = false;
      kuteRef.current.stop();
    }

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [windowWidth]);

  return (
    <SkillsSection id="skills">
      <SectionContainer>
        <Title
          ref={titleRef}
          as={motion.h2}
          variants={titleVariants}
          initial="init"
          animate={animationControl}
        >
          Skills
        </Title>
        <SkillsContainer ref={skillsContainerRef}>
          {windowWidth >= 1050 ? <BlobSVG /> : null}
          <SkillsGroupSubContainer>
            <Skill
              id="html"
              as={motion.div}
              variants={skillVariants}
              initial="leftInit"
              animate={animationControlHtml}
            >
              <HtmlSVG />
              <p>HTML5</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill
              id="github"
              as={motion.div}
              variants={skillVariants}
              initial="leftInit"
              animate={animationControlGithub}
            >
              <GithubSVG />
              <p>GitHub</p>
            </Skill>
            <Skill
              id="git"
              as={motion.div}
              variants={skillVariants}
              initial="leftInit"
              animate={animationControlGit}
            >
              <GitSVG />
              <p>Git</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill
              id="javascript"
              as={motion.div}
              variants={skillVariants}
              initial="topInit"
              animate={animationControlJs}
            >
              <JsSVG />
              <p>Javascript</p>
            </Skill>
            <Skill
              id="react"
              as={motion.div}
              variants={skillVariants}
              initial="centerInit"
              animate={animationControlReact}
            >
              <ReactSVG />
              <p>React</p>
            </Skill>
            <Skill
              id="python"
              as={motion.div}
              variants={skillVariants}
              initial="bottomInit"
              animate={animationControlPython}
            >
              <PythonSVG />
              <p>Python</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill
              id="css"
              as={motion.div}
              variants={skillVariants}
              initial="rightInit"
              animate={animationControlCss}
            >
              <CssSVG />
              <p>Css</p>
            </Skill>
            <Skill
              id="sass"
              as={motion.div}
              variants={skillVariants}
              initial="rightInit"
              animate={animationControlSass}
            >
              <SassSVG />
              <p>Sass</p>
            </Skill>
          </SkillsGroupSubContainer>
          <SkillsGroupSubContainer>
            <Skill
              id="firebase"
              as={motion.div}
              variants={skillVariants}
              initial="rightInit"
              animate={animationControlFirebase}
            >
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

    @media (min-width: 1050px) {
      margin-top: 6em;
    }
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
      margin-left: 4em;
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

  #blobs {
    position: absolute;
    height: 120%;
    width: 120%;
    top: 3%;

    path {
      fill: #8a0037;
    }
  }

  //styling that overrides the stepped mobile view
  @media (min-width: 1050px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10em;
  }
`;

const Title = styled.h2`
  position: relative;
  font-size: var(--section-heading-font-size-mb);
  margin: 0;

  @media (min-width: 767px) {
    font-size: var(--section-heading-font-size-md);
    top: -0.5em;
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
`;

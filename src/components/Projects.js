import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import WaveSvg from './../svgs-as-components/singlewave2.svg';
import GitHubSvg from '../svgs-as-components/icons8-github.svg';
import GatsbyIcon from '../images/gatsby.svg';

import StyledComponentsIcon from '../images/styled-components.png';
import ReactMusicAppWebmDemo from './../videos/React-Music-Player.webm';
import ReactRealtimeChatAppWebmDemo from './../videos/React-Chat-App.webm';
import PathfindingVisualiserWebmDemo from './../videos/Pathfinding-Visualiser-Demo.webm';

const PROJECTS_INFO = [
  {
    title: 'Pathinding Visualiser',
    videoSrc: PathfindingVisualiserWebmDemo,
    altText: 'Pathfinding viualiser demo webm',
    desc: 'An app that visualises pathfinding and maze generation algorithms. Create a maze of walls with mouse clicks, click draging your cursor across cells or selecting one of the maze generation algorithms. Then use a pathfinding algorithm to find a path (if one exists) from the start node to the end node. My first real project and the one that solidified my basic knowledge on data structures, thinking in terms of algorithms and basic Js knowledge before jumping into any frameworks. Coded in standard Javascript, HTML and CSS originally then ported to SASS.',
    srcCodeLink: 'https://github.com/Nims93/Pathfinding-Visualiser',
    liveLink: 'https://nims93.github.io/Pathfinding-Visualiser/',
  },
  {
    title: 'React Realtime Chat App',
    videoSrc: ReactRealtimeChatAppWebmDemo,
    altText: 'React Realtime Chat App webm',
    desc: "A Realtime chat app made possible by Google Firebase Real-Time Database to store and read dynamically created user messages. Also features user authentication using Google's authentication API for creating secure messages. This project helped me fully grasp the concept of asyc Js for sending and fetching data accross a network and enhanced my understanding of collection based NoSQL Databases. I also dabbled in Node Js with the use of Firebase cloud functions to filter bad words from each message. Coded with React, SASS and Firebase Real-Time Database.",
    srcCodeLink: 'https://github.com/Nims93/React-Realtime-Chat-App',
    liveLink: 'https://realtime-react-chat-app.firebaseapp.com/',
  },
  {
    title: 'React Music Player',
    videoSrc: ReactMusicAppWebmDemo,
    altText: 'Music player app demo webm',
    desc: 'A music player app that plays a selection of songs using the javascript Web Audio API. Features include repeat, next song, previous song, play/pause buttons and seekbar scrubbing to seek to a different part of the song. Able to handle variable playback speeds due to low download speed or use of the seekbar without the UI losing sync with the audio. Also features a nice elegant and responsive sliding UI design. Coded with React and SASS.',
    srcCodeLink: 'https://github.com/Nims93/React-Music-Player',
    liveLink: 'https://reactproj-music-player.netlify.app/',
  },
];

export default function Projects() {
  return (
    <ProjectsSection id="projects">
      <SVGContainer>
        <WaveSvg />
      </SVGContainer>
      <Title>Projects</Title>
      <ProjectsWrapper>
        {PROJECTS_INFO.map((info, idx) => {
          return (
            <Project
              title={info.title}
              videoSrc={info.videoSrc}
              altText={info.altText}
              desc={info.desc}
              srcCodeLink={info.srcCodeLink}
              liveLink={info.liveLink}
              key={idx}
            />
          );
        })}
      </ProjectsWrapper>
      <PortfolioInfoPara>
        Finally, this portfolio website was coded using the Static Site
        Generator Gatsby{' '}
        <img
          src={GatsbyIcon}
          style={{
            borderRadius: '50%',
          }}
          alt="Gatsby icon"
        ></img>{' '}
        and styled using styled components{' '}
        <img src={StyledComponentsIcon} alt="styled components icon"></img>. You
        can view the source code here on
        <Link href="https://github.com/Nims93/Portfolio-Website">
          GitHub. <GitHubSvg />
        </Link>
        I originally coded this website with React and SCSS but decided the
        scrap it. If you would like to see Portfolio v1
        <Link href="https://github.com/Nims93/Old-Portfolio-Site">
          click here. <GitHubSvg />
        </Link>
      </PortfolioInfoPara>
    </ProjectsSection>
  );
}

const Link = styled.a`
  color: white;
  border-radius: 5px;
  padding: 0 0.3em;

  &:hover {
    color: black;
    background-color: white;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    transition: color 0.4s ease-in-out;
  }
  svg {
    height: 15px;
    width: auto;
  }
`;

const PortfolioInfoPara = styled.p`
  font-size: 1.5em;
  max-width: 90%;
  margin: auto;

  img {
    height: 20px;
    width: auto;
    background-color: white;
    vertical-align: middle;
    /* border-radius: 50%; */
  }

  @media (min-width: 767px) {
    max-width: 600px;
  }

  @media (min-width: 1050px) {
    max-width: 1000px;
  }
`;

const Title = styled.h2`
  font-size: var(--section-heading-font-size-mb);
  margin: 0;
  margin-top: 2em;
  text-align: center;

  @media (min-width: 767px) {
    margin-top: 2em;
    margin-bottom: 1em;
    font-size: 12em;
  }
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
      fill: var(--intro-color);
    }
  }
`;

const ProjectsWrapper = styled.div`
  width: 90%;
  margin: auto;
  max-width: 1200px;
  text-align: center;

  @media (min-width: 767px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    gap: 8em;
  }
`;

const ProjectsSection = styled.section`
  background-color: var(--projects-color);
  padding: 5em 0 2em 0;
  position: relative;
  overflow-x: hidden;
`;

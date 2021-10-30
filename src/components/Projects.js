import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import WaveSvg from './../svgs-as-components/singlewave2.svg';
import ReactMusicAppWebmDemo from './../videos/React-Music-Player.webm';
import ReactRealtimeChatAppWebmDemo from './../videos/React-Chat-App.webm';
import PathfindingVisualiserWebmDemo from './../videos/Pathfinding-Visualiser-Demo.webm';

const PROJECTS_INFO = [
  {
    title: 'React Music Player',
    videoSrc: ReactMusicAppWebmDemo,
    altText: 'Music player app demo webm',
    desc: 'A music player app that plays a selection of songs using the javascript Audio contructor. Able to handle variable playback speeds without the app losing sync with the Audio APIs playback rate whether due to an increase playback rate from user seekbar scrubbing or a decrease from low download speeds. Also features a nice elegant and responsive sliding UI design. Coded with React and SASS.',
    srcCodeLink: 'https://github.com/Nims93/react-music-player',
    liveLink:
      'https://615504cc4d11864b80b8bc91--gallant-ride-7ea3b5.netlify.app/',
  },
  {
    title: 'React Realtime Chat App',
    videoSrc: ReactRealtimeChatAppWebmDemo,
    altText: 'React Realtime Chat App webm',
    desc: "A Realtime chat app made possible by Google Firebase Real-Time Database to store and serve dynamically created user messages. Also features user authentication using Google's authentication API for creating secure messages. The project that helped me fully grasp asyc Js for data fetching , writing and understanding collection based NoSQL Databases. Coded with React, SASS and Firebase Real-Time Database.",
    srcCodeLink: 'https://github.com/Nims93/react-realtime-chat-app',
    liveLink: 'https://realtime-react-chat-app.firebaseapp.com/',
  },
  {
    title: 'Pathinding Visualiser',
    videoSrc: PathfindingVisualiserWebmDemo,
    altText: 'Pathfinding viualiser demo webm',
    desc: 'An app that visualises pathfinding and maze generation algorithms. Create a maze of walls with mouse clicks, click draging your cursor across cells or using one of the maze generation algorithms. Then use a pathfinding algorithm to find a path (if one exists) from the start node to the end node. My first project that helped my sure up my basic Js knowledge before jumping into any frameworks. Coded in standard Javascript, HTML and SASS.',
    srcCodeLink: 'https://github.com/Nims93/Pathfinding-Visualiser',
    liveLink: 'https://nims93.github.io/Pathfinding-Visualiser/',
  },
];

export default function Projects() {
  return (
    <ProjectsSection id={'projects'}>
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
    </ProjectsSection>
  );
}

// const

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

import React from 'react';
import styled from 'styled-components';
import WaveSvg from './../images/singlewave2.svg';
import ReactMusicAppWebmDemo from './../videos/React-Music-Player.webm';
import ReactRealtimeChatAppWebmDemo from './../videos/React-Chat-App.webm';
import PathfindingVisualiserWebmDemo from './../videos/Pathfinding-Visualiser-Demo.webm';

const ProjectsInfo = [
  {
    title: 'React Music Player',
    imgSrc: ReactMusicAppWebmDemo,
    altText: 'Music player app demo webm',
    desc: 'A music player app that plays a selection of songs using the javascript Audio contructor. Responsive and able to handle low user download speeds with a nice sliding UI design.',
    srcCodeLink: 'https://github.com/Nims93/react-music-player',
    liveLink:
      'https://615504cc4d11864b80b8bc91--gallant-ride-7ea3b5.netlify.app/',
  },
  {
    title: 'React Realtime Chat App',
    imgSrc: ReactRealtimeChatAppWebmDemo,
    altText: 'React Realtime Chat App webm',
    desc: 'A Realtime chat app made with react and firebase to handle the messages database on the backend.',
    srcCodeLink: 'https://github.com/Nims93/react-realtime-chat-app',
    liveLink: 'https://realtime-react-chat-app.firebaseapp.com/',
  },
  {
    title: 'Pathinding Visualiser',
    imgSrc: PathfindingVisualiserWebmDemo,
    altText: 'Pathfinding viualiser demo webm',
    desc: 'An app that visualises pathfinding and maze generation algorithms. Create a maze of walls with your mouse clicks / drag across cells or using one of the maze generation algorithms. Then use a pathfinding algorithm to find a path (if one exists) from the start node to the end node.',
    srcCodeLink: 'https://github.com/Nims93/Pathfinding-Visualiser',
    liveLink: 'https://nims93.github.io/Pathfinding-Visualiser/',
  },
];

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
      fill: var(--intro-color);
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

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Project(props) {
  const { title, videoSrc, altText, desc, srcCodeLink, liveLink } = props;

  const videoRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && videoRef.current.play();
    });

    observer.observe(videoRef.current);
  });

  return (
    <ProjectComponent>
      <ProjectTitle href={liveLink} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </ProjectTitle>
      <Video ref={videoRef} preload="" loop={true}>
        <source src={videoSrc} type="video/webm" />
        <p>
          {altText}. <a href={videoSrc}>Link to video</a>
        </p>
      </Video>
      <Link left href={liveLink} target="_blank" rel="noopener noreferrer">
        Live
      </Link>
      <Link right href={srcCodeLink} target="_blank" rel="noopener noreferrer">
        Github
      </Link>
      <Description>{desc}</Description>
    </ProjectComponent>
  );
}

const Description = styled.p`
  font-size: 1.5em;
`;

const Link = styled.a`
  position: relative;
  display: inline-block;
  font-size: 1.7em;
  color: white;
  padding: 0.2em;
  width: 6em;
  border: 2px solid white;
  margin: 0.7em;
  border-radius: 3px;
  z-index: 1;
  transition: color 0.4s ease-in;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: ${(props) => (props.left ? 0 : '')};
    right: ${(props) => (props.right ? 0 : '')};
    height: 100%;
    width: 0%;
    background-color: white;
    transition: width 0.2s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: black;
    :before {
      width: 100%;
      background-color: white;
      z-index: -1;
    }
  }
`;

const Video = styled.video`
  width: 100%;
`;

const ProjectTitle = styled.a`
  text-decoration: none;

  h3 {
    font-size: 2.3em;
    color: white;

    @media (min-width: 767px) {
      font-size: 3.5em;
    }
  }
`;

const ProjectComponent = styled.div`
  &:first-of-type {
    margin-top: 6em;

    @media (min-width: 767px) {
      margin-top: 0;
    }
  }

  &:last-of-type {
    margin-bottom: 6em;
  }

  margin: 8em 0;

  @media (min-width: 767px) {
    width: 500px;
    height: auto;
    margin: 0;
  }
`;

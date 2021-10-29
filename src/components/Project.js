import React from 'react';
import styled from 'styled-components';

export default function Project({
  title,
  videoSrc,
  altText,
  desc,
  srcCodeLink,
  liveLink,
}) {
  return (
    <ProjectComponent>
      <ProjectTitle href={liveLink} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
      </ProjectTitle>
      <Video
        preload="true"
        autoPlay="true"
        loop="true"
        style={{ width: '100%' }}
      >
        <source src={videoSrc} type="video/webm" />
        <p>
          {altText}. <a href={videoSrc}>Link to video</a>
        </p>
      </Video>
      <Link href={liveLink} target="_blank" rel="noopener noreferrer">
        See Live Project Here!
      </Link>
      <Link href={srcCodeLink} target="_blank" rel="noopener noreferrer">
        Source Code on Github!
      </Link>
      <Description>{desc}</Description>
    </ProjectComponent>
  );
}

const Description = styled.p`
  font-size: 1.5em;
`;

const Link = styled.a`
  display: block;
  font-size: 1.7em;
  color: white;

  @media (min-width: 767px) {
    font-size: 1.5em;
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

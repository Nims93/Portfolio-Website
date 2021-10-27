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
    <Project>
      <ProjectTitle>{title}</ProjectTitle>
      <Video>
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
    </Project>
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

  h2 {
    font-size: 2.3em;
    color: white;

    @media (min-width: 767px) {
      font-size: 3.5em;
    }
  }
`;

const Project = styled.div`
  &:first-of-type {
    margin-top: 6em;
  }

  &:last-of-type {
    margin-bottom: 6em;
  }

  margin: 8em 0;
`;

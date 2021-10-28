import styled, { keyframes } from 'styled-components';
import React, { useState, useRef } from 'react';
import MobileDropDownMenu from './MobileDropDownMenu';
import WaveSvg from './../images/singlewave1.svg';
import { RiClipboardFill as ClipboardSvg } from 'react-icons/ri';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const timeoutRef = useRef(null);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('kieranakc2@gmail.com');
      setDisplayPopup(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setDisplayPopup(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NavBar>
      <NavContentWrapper>
        <Email tabIndex="0" onClick={handleEmailClick}>
          kieranakc2@gmail.com
          <ClipboardSvgWrapper>
            <ClipboardSvg />
          </ClipboardSvgWrapper>
          {displayPopup ? <PopupMessage>Copied!</PopupMessage> : null}
        </Email>
        <LinksContainer>
          <Link>
            <a href="#intro">Intro</a>
          </Link>
          <Link>
            <a href="#projects">Projects</a>
          </Link>
          <Link>
            <a href="#skills">Skills</a>
          </Link>
          <Link>
            <a href="#contact-me">Contact</a>
          </Link>
        </LinksContainer>
        <MobileDropDownMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </NavContentWrapper>
      <WaveContainer>
        <WaveSvg />
      </WaveContainer>
    </NavBar>
  );
}
const popup = keyframes`
from {
    transform: scale(1);
    opacity: 0;
  }


  100% {
    transform: scale(1);

  }
`;

const PopupMessage = styled.span`
  position: absolute;
  top: 125%;
  left: 50%;
  /* transform: translateX(-50%); */
  padding: 0.3em;
  border-radius: 10px;
  background-color: #808080;
  cursor: initial;
  box-shadow: 1px 1px 50px 5px #808080;
  animation: ${popup} 0.5s linear 1;

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 10px solid #808080;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
  }
`;

const ClipboardSvgWrapper = styled.span`
  position: relative;
  display: inline-block;
  top: 3px;
  right: -7px;
  height: 1.3em;
  // width: 80%;

  svg {
    height: 100%;
    width: 100%;
  }
`;

const Email = styled.p`
  position: relative;
  font-size: 1.3em;
  cursor: pointer;
  margin-left: 1em;
  margin-top: 1em;
  padding: 0.5em;
  padding-right: 1em;
  flex-shrink: 100;

  @media (min-width: 767px) {
    margin-top: 1.5em;
    margin-left: 2em;
    font-size: 1.6em;
    border-radius: 10px;
    background-color: grey;
    z-index: 6;
  }
`;

const Link = styled.li`
  a {
    padding: 1em;
    color: white;
    font-size: 1.6em;
    text-decoration: none;
  }
`;

const LinksContainer = styled.ul`
  display: none;

  @media (min-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
    margin-right: 1em;
    list-style: none;
  }
`;

const WaveContainer = styled.div`
  position: absolute;
  top: 99%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  pointer-events: none;

  & svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 30px;
    transform: rotateY(180deg);
  }

  & .shape-fill {
    fill: var(--navbar-color);
  }

  @media (min-width: 767px) {
    & svg {
      height: 69px;
    }
  }
`;

const NavContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 5;

  background-color: var(--navbar-color);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4em;
`;

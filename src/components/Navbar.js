import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import WaveSvg from './../images/singlewave1.svg';

export default function Navbar() {
  return (
    <NavBar>
      <Email>kieranakc2@gamil.com</Email>
      <MobileMenuBtn>
        <MenuBtnIcon />
      </MobileMenuBtn>
      <WavesContainer>
        <WaveSvg />
      </WavesContainer>
    </NavBar>
  );
}
const Email = styled.p`
  font-size: 1.3em;
  cursor: pointer;
  margin-left: 1em;
  margin-top: 1em;
`;

const MenuBtnIcon = styled(GiHamburgerMenu)`
  width: 100%;
  height: 100%;
  fill: white;
`;

const MobileMenuBtn = styled.div`
  display: inline-block;
  height: 80%;
  margin-right: 1em;
  margin-top: 0.5em;
  cursor: pointer;
`;

const WavesContainer = styled.div`
  position: absolute;
  top: 99%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 3;

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
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 3;

  background-color: var(--navbar-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3em;
`;

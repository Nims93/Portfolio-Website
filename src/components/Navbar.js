import styled from 'styled-components';
import React, { useState } from 'react';
import MobileDropDownMenu from './MobileDropDownMenu';
import WaveSvg from './../images/singlewave1.svg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NavBar>
      <Email>kieranakc2@gamil.com</Email>
      <MobileDropDownMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
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
  height: 4em;
`;

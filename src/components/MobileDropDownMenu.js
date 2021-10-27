import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MobileDropDownMenu({
  mobileMenuOpen: open,
  setMobileMenuOpen: setOpen,
}) {
  return (
    <MobileMenuBtn onClick={() => setOpen((o) => !o)}>
      <MenuBtnIcon />
      <MobileListContainer open={open}>
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
      </MobileListContainer>
    </MobileMenuBtn>
  );
}

const Link = styled.li`
  a {
    color: white;
    font-size: 1.8em;
    text-decoration: none;
    padding: 1em;
  }
`;

const MobileListContainer = styled.ul`
  position: absolute;
  top: 120%;
  right: 0;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  flex-direction: column;
  list-style: none;
  background-color: var(--navbar-color);
  border-radius: 10px;
  border: 1px solid white;
  padding: 1em 0;
  z-index: 5;
`;

const MenuBtnIcon = styled(GiHamburgerMenu)`
  width: 100%;
  height: 100%;
  fill: white;
  padding: 0.5em;
`;

const MobileMenuBtn = styled.div`
  position: relative;
  display: inline-block;
  height: 80%;
  margin-right: 1em;
  margin-top: 0.5em;
  cursor: pointer;

  @media (min-width: 767px) {
    display: none;
  }
`;

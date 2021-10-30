import React from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiExternalLink } from 'react-icons/fi';

export default function MobileDropDownMenu({
  mobileMenuOpen: open,
  setMobileMenuOpen: setOpen,
}) {
  return (
    <MobileMenuBtn
      aria-label="Options"
      role="menu"
      aria-expanded={open ? true : false}
      tabIndex="0"
      onClick={() => setOpen((o) => !o)}
      onKeyPress={(e) => e.key === 'Enter' && setOpen(!open)}
    >
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
        <Link>
          <a href="https://github.com/Nims93/Portfolio-Website">Source</a>
          <FiExternalLink />
        </Link>
      </MobileListContainer>
    </MobileMenuBtn>
  );
}

const Link = styled.li`
  position: relative;

  a {
    width: 100%;
    display: inline-block;
    color: white;
    font-size: 1.8em;
    text-decoration: none;
    padding: 0 1em;

    &:focus {
      border: 1px solid white;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    width: 15px;
    height: auto;
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
  z-index: 6;
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
  height: 4em;
  margin-right: 1em;
  margin-top: 0.5em;
  cursor: pointer;
  flex-shrink: 0;

  @media (min-width: 767px) {
    display: none;
  }
`;

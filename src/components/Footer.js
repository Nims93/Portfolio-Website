import React from 'react';
import styled from 'styled-components';
import ReactIcon from '../images/react.svg';
import GatsbyIcon from '../images/gatsby.svg';
import StyledCompIcon from '../images/styled-components.png';

export default function Footer() {
  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          Coded using React<Img src={ReactIcon} alt="React" paddingEqual></Img>
          Gatsby
          <Img src={GatsbyIcon} alt="Gatsby" paddingEqual></Img> and
          styled-components
          <Img src={StyledCompIcon} alt="Styled Components"></Img>
        </Content>
        <Content>Kieran Cyprien © 2021</Content>
      </ContentWrapper>
    </Wrapper>
  );
}

const Img = styled.img`
  height: 1rem;
  object-fit: scale-down;
  padding-left: 0.5em;
  padding-right: ${(props) => (props.paddingEqual ? '0.5em' : '')};
`;

const Content = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
`;

const Wrapper = styled.div`
  min-height: 30px;
  max-height: 60px;
  overflow: hidden;
  background-color: #3c31dd;
  box-shadow: 0px 0px 6px 0px rgb(32 39 49) inset;
`;

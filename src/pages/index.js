import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100;400;900&display=swap');

  *, :after, :before {
    box-sizing: border-box;
  }

  body {
    font-size: 10px;
    
    margin: 0;
    padding: 0;
    font-family: 'Prompt', sans-serif;
  }
`;

const HeyThere = styled.div`
  color: red;
`;

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <HeyThere>Hello world!</HeyThere>
    </>
  );
};

export default IndexPage;

import React from 'react';
import styled from 'styled-components';
import LayeredWaves from './../images/layered-waves1.svg';

export default function WavesSection1() {
  return (
    <WaveWrapper>
      <LayeredWaves />
    </WaveWrapper>
  );
}

const WaveWrapper = styled.div`
  display: flex;

  svg {
    width: 100%;
    height: auto;
  }
`;

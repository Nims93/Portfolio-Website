import React from 'react';
import styled from 'styled-components';
import LayeredWaves from '../svgs-as-components/layered-waves2.svg';

export default function WavesSection2() {
  return (
    <WaveContainer>
      <LayeredWaves />
    </WaveContainer>
  );
}

const WaveContainer = styled.div`
  display: flex;

  svg {
    width: 100%;
    height: auto;
  }
`;

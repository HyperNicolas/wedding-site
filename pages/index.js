import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Wrapper } from '../components/utils/styledComponents';

const Title = styled.div`
  font-weight: 700;
  font-size: 5rem;
  line-height: 5rem;
  padding-bottom: 1rem;
`;

const Index = () => (
  <Wrapper>
    <Title className="cp-c-column cp-c-align-center-center">
      <div>Madeleine</div>
      <div>&</div>
      <div>Nicolas</div>
    </Title>
    <Image
      src="/outside.jpeg"
      width={2560}
      height={1707}
      layout="responsive"
      priority
    />
  </Wrapper>
);

export default Index;

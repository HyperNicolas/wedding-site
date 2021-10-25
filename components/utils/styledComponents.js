import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const theme = {
  textColor: '#565656',
  textColorLight: '#8c8a8a',
  mainColor: '#1955a4',
  secondaryColor: '#9CAAA7',
  antdColor: '#1890ff',
  invalidColor: '#ff9b20',
  skeletonColor: '#e8e8e8',
  thinBorder: '1px solid #dcdcdc',
  redColor: '#ff9500',
  borderRadius: '4px',
};

export const sizes = {
  sm: 568,
  md: 768,
  lg: 1024,
  wrapper: 1120,
  xl: 1280,
  xxl: 1600,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = `@media screen and (min-width: ${sizes[label] / 16}em)`;
  return acc;
}, {});

export const Wrapper = styled('div')`
  padding: ${(props) => props.padding && '0.5rem'};
  box-sizing: border-box;
  max-width: 1120px;
  margin: 0 auto;
`;

export const useWindowSize = () => {
  const [width, setWindowSize] = useState(undefined);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return width;
};

export const Button = styled.button`
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: #fff;
  background: ${(props) => props.theme.secondaryColor};
  border: none;
  color: #fff;
  padding: 0 3rem;
  height: 3rem;
  width: 10rem;
  line-height: 2.4rem;
  text-align: center;
  font-size: 0.9rem;
  border-radius: 4px;

  &:hover {
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
    opacity: 0.8;
  }
  &:active {
    border-color: ${(props) =>
      props.inverse ? props.theme.mainColor : '#fdaa36'};
    color: ${(props) => props.inverse && props.theme.mainColor};
  }
`;

export const Title = styled.div`
  text-align: center;
  padding: 2rem 0;
  font-size: 3rem;
  line-height: 3rem;
  font-family: Parisienne;
`;
export const SmallTitle = styled(Title)`
  font-size: 2.5rem;
  padding: 2rem 1rem;

  ${media.lg} {
    padding: 2rem 0;
  }
`;

export const Text = styled.div`
  font-size: 1rem;
  line-height: 1.4rem;
  padding: 0 1rem;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 800px;
  margin: auto;
  text-align: justify;

  ${media.sm} {
    text-align: center;
  }
  ${media.lg} {
    padding: 0;
    padding-bottom: 1rem;
  }
`;

export const Divider = styled.div`
  border-top: ${(props) => props.theme.thinBorder};
  margin: 2rem 0;
`;

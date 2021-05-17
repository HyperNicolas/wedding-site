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
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  background: ${(props) =>
    props.inverse ? '#fff' : props.disabled ? '#ffc97e' : props.theme.redColor};
  border: ${(props) =>
    props.inverse
      ? '1px solid #ccc'
      : props.disabled
      ? '1px solid #ffc97e'
      : `1px solid ${props.theme.redColor}`};
  color: ${(props) => (props.inverse ? 'rgba(0,0,0,.65)' : '#fff')};
  padding: 0 3rem;
  height: 2.5rem;
  line-height: 2.4rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: ${(props) => !props.inverse && '600'};
  border-radius: 4px;

  &:hover {
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  }
  &:active {
    background: ${(props) => !props.inverse && '#fdaa36'};
    border-color: ${(props) =>
      props.inverse ? props.theme.mainColor : '#fdaa36'};
    color: ${(props) => props.inverse && props.theme.mainColor};
  }
`;

import styled, { keyframes } from 'styled-components';

const Mask = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${(props) => (!props.visible ? '0' : '1')};
  background-color: rgba(0, 0, 0, 0.45);

  #__next {
    overflow: ${(props) => props.visible && 'hidden'};
  }
`;
const slideInAnimationRight = keyframes` 
from {
    transform: translateX(100%)
}

to {
    transform: translateX(0)
}
`;

const CardContainer = styled.div`
  text-align: start;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 2000;
  height: 100vh;
  width: ${(props) => props.width && props.width};
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${(props) => props.visible && slideInAnimationRight} 0.3s
    ease-in-out;
`;

const Drawer = ({ visible, onCancel, content, width }) => (
  <>
    <Mask onClick={() => onCancel()} visible={visible} />
    <CardContainer width={width} visible={visible}>
      {content}
    </CardContainer>
  </>
);
export default Drawer;

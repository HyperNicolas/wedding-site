import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';
import { media, useWindowSize } from '../utils/styledComponents';
import logo from '../../public/logo.png';

const DesktopNavigation = dynamic(import('./DesktopNavigation'));
const MobileNavigation = dynamic(import('./MobileNavigation'));

const Container = styled('div')`
  top: 0;
  background: #fff;
  padding: 0.5rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  justify-content: space-between;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.1);

  ${media.md} {
    position: absolute;
    display: flex;
  }
  ${media.xl} {
    background-size: contain;
  }
`;

const LinkContainer = styled.div`
  margin-top: 0.5rem;
  width: 100px;
  height: 100px;
  ${media.lg} {
    margin-left: 2rem;
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledMenu = styled(AiOutlineMenu)`
  font-size: 1.5rem;
  padding: 1.4rem;
  display: block !important;
  margin-top: 0.3rem;

  ${media.lg} {
    margin-top: 0;
  }
`;
export const TitleDrawer = styled.div`
  margin-bottom: 0.5rem;
  color: #fff;
  font-size: 1.2rem;
  background: ${(props) => props.theme.secondaryColor};
  background-repeat-x: repeat;
  background-size: cover;
  padding: ${(props) => (props.padding ? props.padding : '1rem 1.5rem')};
  ${media.md} {
    border-radius: 4px 4px 0 0;
  }
`;

const links = [
  { route: '/', title: 'Home', icon: 'home', routePath: '/' },
  {
    route: '/schedule',
    title: 'Schedule',
    icon: 'cal',
    routePath: '/schedule',
  },
  {
    route: '/accomodations',
    title: 'Accomodations',
    icon: 'acom',
    routePath: '/accomodations',
  },
  {
    route: '/faq',
    title: 'FAQ',
    icon: 'faq',
    routePath: '/faq',
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const width = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      <Container
        id="header"
        className="cp-c-row cp-c-align-spacebetween-center"
      >
        <Link href="/">
          <a href="/" aria-label="home">
            <LinkContainer>
              <Image src={logo} layout="responsive" quality={100} priority />
            </LinkContainer>
          </a>
        </Link>

        <div className="cp-c-row">
          {!isMobile && width ? (
            <DesktopNavigation links={links} />
          ) : (
            <StyledMenu onClick={() => setVisible(true)} />
          )}
        </div>
      </Container>
      {visible && (
        <MobileNavigation
          visible={visible}
          toggle={() => setVisible(false)}
          links={links}
        />
      )}
    </>
  );
};

export default Header;

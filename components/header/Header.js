import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {
  AiOutlineMenu,
  AiOutlineSafety,
  AiOutlineTeam,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineFolderOpen,
  AiOutlineStock,
  AiOutlineCluster,
  AiOutlineVideoCamera,
  AiOutlineStar,
} from 'react-icons/ai';
import { media, useWindowSize } from '../utils/styledComponents';

const DesktopNavigation = dynamic(import('./DesktopNavigation'));
const MobileNavigation = dynamic(import('./MobileNavigation'));

const Container = styled('div')`
  top: 0;
  background: ${(props) => props.theme.secondaryColor};
  height: 72px;
  padding: 0.5rem;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  justify-content: space-between;

  ${media.md} {
    display: flex;
  }
  ${media.xl} {
    background-size: contain;
  }
`;
const CompanyNameContainer = styled.div`
  border-left: 1px solid #fff;
  margin-left: 1rem;
  padding-left: 1rem;
  display: none;

  ${media.wrapper} {
    display: block;
  }
`;
const LinkContainer = styled.div`
  ${media.lg} {
    margin-left: 1rem;
    :hover {
      cursor: pointer;
    }
  }
`;
const StyledMenu = styled(AiOutlineMenu)`
  font-size: 1.2rem;
  padding: 1.4rem;
  display: block !important;
  color: #fff !important;
  margin-top: 0.3rem;

  ${media.lg} {
    margin-top: 0;
  }
`;
export const TitleCompany = styled.span`
  font-weight: 600;
  color: #fff;
  font-size: 1.5rem;
  font-family: Work Sans;
`;
export const TitleKoi = styled.span`
  font-weight: 300;
  color: #fff;
  font-size: 1.5rem;
  font-family: Work Sans;
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
  { route: '/', title: 'Home', icon: <AiOutlineHome />, routePath: '/' },
  {
    route: '/japanse-koi?&order=recent',
    title: 'Japanse koi',
    routePath: '/japanse-koi',
  },
  {
    route: '/dream-koi-collection?&order=recent',
    title: 'Dream Koi Collection',
    mobile: true,
    icon: <AiOutlineStar />,
    routePath: '/dream-koi-collection',
  },

  {
    route: '/opgroei',
    title: 'Opgroei',
    icon: <AiOutlineStock />,
    routePath: '/opgroei',
  },
  {
    route: '/koi-ontwikkeling',
    title: 'Koi ontwikkeling',
    icon: <AiOutlineVideoCamera />,
    mobile: true,
    routePath: '/koi-ontwikkeling',
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
            <LinkContainer className="cp-c-row cp-c-align-start-center">
              <Image src="/logo.png" width={50} height={50} priority />
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

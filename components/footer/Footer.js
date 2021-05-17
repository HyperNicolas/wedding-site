import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Wrapper, media, useWindowSize } from '../utils/styledComponents';

const MobileFooter = dynamic(import('./MobileFooter'));
const DesktopFooter = dynamic(import('./DesktopFooter'));

const Container = styled.section`
  text-align: center;
  font-size: 1rem;
  color: #fff;
  position: relative;
  background: ${(props) => props.theme.secondaryColor};

  ${media.md} {
    text-align: start;
    padding-top: 3rem;
  }
`;
const StyledWrapper = styled(Wrapper)`
  position: relative;
`;

const links = [
  { route: '/', title: 'Home' },
  { route: '/japanse-koi?&order=recent', title: 'Japanse koi' },
  {
    route: '/dream-koi-collection?&order=recent',
    title: 'Dream Koi Collection',
  },
  { route: '/verkochte-japanse-koi?&order=recent', title: 'Verkochte koi' },
];

const Footer = ({ variety }) => {
  const width = useWindowSize();
  const isMobile = width < 768;
  const router = useRouter();

  return (
    <Container id="footer">
      <StyledWrapper>
        {width && (
          <div className="cp-c-column cp-i-flex cp-c-padding-2">
            {isMobile ? (
              <MobileFooter links={links} router={router} />
            ) : (
              variety && <DesktopFooter usefulLinks={links} variety={variety} />
            )}
          </div>
        )}
      </StyledWrapper>
    </Container>
  );
};

export default Footer;

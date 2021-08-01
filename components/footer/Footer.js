import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Wrapper, media, useWindowSize } from '../utils/styledComponents';

const MobileFooter = dynamic(import('./MobileFooter'));
const DesktopFooter = dynamic(import('./DesktopFooter'));

const Container = styled.section`
  margin-top: 2rem;
  text-align: center;
  font-size: 1rem;
  color: #fff;
  position: relative;
  background: ${(props) => props.theme.secondaryColor};

  ${media.md} {
    text-align: start;
  }
`;
const StyledWrapper = styled(Wrapper)`
  position: relative;
`;

const links = [
  { route: '/', title: 'Home' },
  {
    route: '/venue',
    title: 'Venue',
  },
  { route: '/schedule', title: 'Schedule' },
  {
    route: '/accomodations',
    title: 'Accomodations',
  },
  { route: '/faq', title: 'FAQ' },
];

const Footer = () => {
  const width = useWindowSize();
  const isMobile = width < 768;
  const router = useRouter();

  return isMobile ? (
    <Container id="footer">
      <StyledWrapper>
        {width && (
          <div className="cp-c-column cp-i-flex cp-c-padding-2">
            {isMobile ? (
              <MobileFooter links={links} router={router} />
            ) : (
              <div style={{ paddingBottom: '3rem' }} />
            )}
          </div>
        )}
      </StyledWrapper>
    </Container>
  ) : (
    <div style={{ paddingBottom: '3rem' }} />
  );
};

export default Footer;

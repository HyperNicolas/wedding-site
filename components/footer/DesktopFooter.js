import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  margin: 0.1rem;
  color: #fff;
  justify-content: left !important;
  padding-bottom: 0.2rem;
  font-weight: 300;

  :hover {
    text-decoration: underline;
    color: #fff;
  }
`;
const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  padding-bottom: 1rem;
  color: ${(props) => props.theme.redColor};
`;
const SectionContainer = styled.div``;

const DesktopFooter = ({ variety, usefulLinks }) => (
  <div className="cp-c-row cp-c-spacebetween-start">
    <div>Image goes here</div>
    <SectionContainer className="cp-i-flex">
      <Title>Japanse Koi</Title>
      <div className="cp-c-column">
        {variety.sort().map((variety) => (
          <Link
            key={variety}
            href={{
              pathname: '/koi-soorten/[varietyId]',
              query: { varietyId: variety },
            }}
            as={`/koi-soorten/${variety.toLowerCase()}`}
          >
            <StyledLink
              href={`/koi-soorten/${variety.toLowerCase()}`}
              aria-label={variety}
            >
              {variety}
            </StyledLink>
          </Link>
        ))}
      </div>
    </SectionContainer>
    <SectionContainer className="cp-i-flex">
      <Title>Handige Links</Title>
      <div className="cp-c-column">
        {usefulLinks.map(({ route, title }) => (
          <Link key={title} href={route}>
            <StyledLink href={route} aria-label={title}>
              {title}
            </StyledLink>
          </Link>
        ))}
      </div>
    </SectionContainer>
  </div>
);

export default DesktopFooter;

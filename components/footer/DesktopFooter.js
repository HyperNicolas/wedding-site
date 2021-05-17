import React from 'react';
import { MdLocationOn, MdPhone, MdMail } from 'react-icons/md';
import Link from 'next/link';
import { iconCss, media } from '../utils/styledComponents';
import styled from 'styled-components';

const StyledIcon = styled(MdLocationOn)`
  ${iconCss}
  margin-right: 1rem;
  margin-top: 0.1rem;
`;
const SmallIcon = styled(MdPhone)`
  ${iconCss}
  margin-right: 1rem;
  font-size: 0.9rem;
`;
const MailIcon = styled(MdMail)`
  ${iconCss}
  margin-right: 1rem;
  font-size: 0.9rem;
`;
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
const Divider = styled.div`
  padding-bottom: 1.5rem;
`;

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
    <div className="cp-c-column cp-i-33 cp-i-lg-25">
      <Title>Contact</Title>
      <StyledLink
        className="cp-c-row cp-c-align-start-start"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/place/The+Koi+Company/@50.9600923,3.0686449,15z/data=!4m2!3m1!1s0x0:0xb5cc886a78d8515b?sa=X&ved=2ahUKEwjBz9a6-7nlAhUQJlAKHS3rDV0Q_BIwCnoECAkQCA"
      >
        <StyledIcon />
        <div>
          <div>Diksmuidesteenweg 27B</div>
          <div>8830, Hooglede-Gits</div>
        </div>
      </StyledLink>
      <Divider />
      <StyledLink
        className="cp-c-row cp-c-align-start-center"
        href="tel:+32499560437"
      >
        <SmallIcon /> <div>+32 499 56 04 37</div>
      </StyledLink>
      <Divider />
      <StyledLink
        className="cp-c-row cp-c-align-start-center"
        href="mailto:info@thekoicompany.com"
      >
        <MailIcon /> <div>info@theKoiCompany.com</div>
      </StyledLink>
    </div>
  </div>
);

export default DesktopFooter;

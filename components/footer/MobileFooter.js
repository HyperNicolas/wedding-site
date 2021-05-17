import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

const MobileLinkContainer = styled.div`
  padding: 1rem;
  display: block;
  font-size: 0.8rem;
`;
const StyledMobileLink = styled('a')`
  color: #fff;
  border-bottom: 1px solid #fff;
  font-size: 1rem;
  padding: 0.8rem 0.5rem;
  margin: 0.2rem 0;
  font-weight: 600;
  opacity: ${(props) => (props.active ? '1' : '0.75')};

  :hover {
    color: #fff;
    opacity: 1;
  }
`;

const MobileFooter = ({ links, router }) => (
  <MobileLinkContainer className="cp-c-column">
    {links.map(({ route, title }) => (
      <Link key={title} href={route}>
        <StyledMobileLink
          active={
            route == '/'
              ? router.pathname == '/'
              : router.asPath.includes(route)
          }
          className="cp-c-row cp-c-align-spacebetween-center"
        >
          {title}
          <AiOutlineRight />
        </StyledMobileLink>
      </Link>
    ))}
  </MobileLinkContainer>
);

export default MobileFooter;

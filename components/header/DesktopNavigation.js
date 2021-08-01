import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { media } from '../utils/styledComponents';

const NavigationContainer = styled.div`
  padding: 0.5rem 1rem;
  ${media.lg} {
    display: flex !important;
  }
`;
const LinkContainer = styled.span`
  position: relative;
`;
const StyledLink = styled.span`
  font-size: 1.1rem;
  color: ${(props) => props.theme.textColor};
  padding: 0.5rem;
  font-weight: 600;
  margin-right: 0.5rem;
  border-bottom: ${(props) => props.active && props.theme.thinBorder};
  border-color: ${(props) => props.theme.textColorLight};
  padding-bottom: 0.3rem;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const DesktopNavigation = ({ links }) => {
  const router = useRouter();
  return (
    <NavigationContainer className="cp-c-row">
      {links.map(
        ({ route, title, mobile, routePath }) =>
          !mobile && (
            <Link key={title} href={route}>
              <a href={route} aria-label={title}>
                <LinkContainer>
                  <StyledLink
                    active={
                      routePath == '/'
                        ? router.pathname == '/'
                        : router.pathname.includes(routePath)
                    }
                  >
                    {title}
                  </StyledLink>
                </LinkContainer>
              </a>
            </Link>
          )
      )}
    </NavigationContainer>
  );
};

export default DesktopNavigation;

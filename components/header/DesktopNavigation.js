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
  color: #fff;
  padding: 1rem;
  opacity: ${(props) => (props.active ? '1' : '0.9')};
  font-weight: 600;
  margin-right: 0.5rem;

  :hover {
    cursor: pointer;
    color: #fff;
    opacity: 1;
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

import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Drawer from '../utils//Drawer';
import { Button } from '../utils/styledComponents';
import { TitleCompany, TitleKoi, TitleDrawer } from './Header';

const MobileLinkContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
`;
const IconContainer = styled.div`
  margin-right: 1rem;
  font-size: 1.2rem;
  margin-top: 0.1rem;
`;
const ButtonContainer = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
`;
const StyledButton = styled(Button)`
  width: 100%;
  height: 3rem;
  line-height: 3rem;
`;
const StyledMobileLink = styled('a')`
  color: ${(props) =>
    props.active == 'true' ? props.theme.mainColor : props.theme.textColor};
  opacity: ${(props) => (props.active == 'true' ? '1' : '0.75')};
  background: ${(props) => props.active == 'true' && '#e6f7ff'};
  font-size: 1rem;
  padding: 0.8rem 0.5rem;
  margin: 0.2rem 0;
  border-radius: 6px;

  :hover {
    cursor: pointer;
  }
`;

const MobileNavigation = ({ links, toggle, visible }) => {
  const router = useRouter();
  return (
    <Drawer
      placement="right"
      closable={false}
      onClose={toggle}
      visible={visible}
      width="100%"
      content={
        <>
          <TitleDrawer>
            <TitleKoi>the</TitleKoi>
            <TitleCompany>KOI</TitleCompany>
            <TitleKoi>COMPANY</TitleKoi>
          </TitleDrawer>
          <MobileLinkContainer className="cp-c-column" onClick={toggle}>
            {links.map(
              ({ route, title, desktop, icon, routePath }) =>
                !desktop && (
                  <Link key={title} href={route}>
                    <StyledMobileLink
                      aria-label={title}
                      href={route}
                      active={(route == '/'
                        ? router.asPath == '/'
                        : router.asPath.includes(routePath)
                      ).toString()}
                      className="cp-c-row cp-c-align-start-center"
                    >
                      <>
                        <IconContainer>{icon}</IconContainer>
                        {title}
                      </>
                    </StyledMobileLink>
                  </Link>
                )
            )}
            <ButtonContainer>
              <StyledButton inverse>Sluiten</StyledButton>
            </ButtonContainer>
          </MobileLinkContainer>
        </>
      }
    ></Drawer>
  );
};

export default MobileNavigation;

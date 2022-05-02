import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Drawer from "../modal/Drawer";
import { Button } from "../utils/styledComponents";
import logo from "../../public/logo.png";
import home from "../../public/home.svg";
import cal from "../../public/cal.svg";
import acom from "../../public/bed2.svg";
import faq from "../../public/faq.svg";
import church from "../../public/church.svg";
import rsvp from "../../public/rsvp.svg";

const HeaderContainer = styled.div`
  background: #fff;
  padding: 0.5rem;
  width: 100px;
  height: 100px;
  margin: auto;
`;

const MobileLinkContainer = styled.div`
  padding: 1rem;
  padding-top: 0;
`;
const IconContainer = styled.div`
  width: ${(props) => (props.icon ? "10px" : "35px")};
  margin-left: ${(props) => props.icon && "0.6rem"};
  margin-right: ${(props) => (props.icon ? "2rem" : "1rem")};
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
const StyledMobileLink = styled("a")`
  color: ${(props) =>
    props.active == "true" ? "#186958" : props.theme.textColor};
  background: ${(props) => props.active == "true" && "#0080642e"};
  font-size: 1rem;
  padding: 0.8rem 0.5rem;
  border-radius: 6px;

  :first-child {
    margin-top: 0.4rem;
  }
  :hover {
    cursor: pointer;
  }
`;

const StyledKoiIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  stroke-width: 120px;
  stroke: ${(props) =>
    props.active == "true" ? props.theme.mainColor : " #565555"};
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
          <HeaderContainer>
            <Image src={logo} layout="responsive" quality={100} />
          </HeaderContainer>

          <MobileLinkContainer className="cp-c-column" onClick={toggle}>
            {links.map(
              ({ route, title, desktop, icon, routePath }) =>
                !desktop && (
                  <Link key={title} href={route}>
                    <StyledMobileLink
                      aria-label={title}
                      href={route}
                      active={(route == "/"
                        ? router.asPath == "/"
                        : router.asPath.includes(routePath)
                      ).toString()}
                      className="cp-c-row cp-c-align-start-center"
                    >
                      <>
                        <IconContainer icon={icon == "faq"}>
                          <Image
                            src={
                              icon == "home"
                                ? home
                                : icon == "cal"
                                ? cal
                                : icon == "acom"
                                ? acom
                                : icon == "faq"
                                ? faq
                                : icon == "church"
                                ? church
                                : rsvp
                            }
                            layout="responsive"
                          />
                        </IconContainer>
                        {title}
                      </>
                    </StyledMobileLink>
                  </Link>
                )
            )}
            <ButtonContainer>
              <StyledButton inverse>Close</StyledButton>
            </ButtonContainer>
          </MobileLinkContainer>
        </>
      }
    ></Drawer>
  );
};

export default MobileNavigation;

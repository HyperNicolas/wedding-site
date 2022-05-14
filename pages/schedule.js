import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  Wrapper,
  Title,
  Text,
  Divider,
  Button,
  media,
} from "../components/utils/styledComponents";
import cocktail from "../public/cocktail.svg";
import wedding from "../public/wedding.svg";
import brunch from "../public/brunch.svg";
import us from "../public/mimi.png";

const ImageBannerContainer = styled.div`
  position: relative;
  height: 25rem;
  margin-bottom: 2rem;

  ${media.sm} {
    height: 30rem;
  }
  ${media.md} {
    height: 35rem;
  }
  ${media.lg} {
    height: 40rem;
  }
`;
const Optional = styled.span`
  font-size: 2rem;
`;
const RightContainer = styled.div`
  padding: 2rem 1rem;
  border-left: ${(props) => props.theme.thinBorder};

  ${media.md} {
    padding: 2rem 3rem;
  }
`;
const ImageContainer = styled.div`
  width: 75px;
  margin: auto;
  margin-bottom: 2rem;
`;
const Date = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem 0;
  letter-spacing: 3px;
`;
const StyledText = styled(Text)`
  font-size: 1.1rem;
  line-height: 1.5rem;
`;
const ButtonContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  text-align: center;
`;
const Schedule = () => (
  <>
    <ImageBannerContainer>
      <Image
        src={us}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        placeholder="blur"
      />
    </ImageBannerContainer>

    <Wrapper>
      <div className="cp-c-row cp-c-align-start-center cp-c-wrap">
        <div className="cp-i-100 cp-i-md-50">
          <Title>
            <div>Welcome Cocktail</div>
            <Optional>(optional)</Optional>
          </Title>
          <Date>Friday, 9th September 2022</Date>
          <Date>6 PM - 9 PM</Date>
        </div>
        <RightContainer className="cp-i-100 cp-i-md-50">
          <ImageContainer>
            <Image
              src={cocktail}
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
          </ImageContainer>
          <StyledText>
            <div>Quinta da Bella Vista</div>
            <div>R. Barbosa du Bocage 60</div>
            <div>2710-517 Sintra</div>
          </StyledText>
          <StyledText>
            For those that have arrived and would like to meet one another, a
            casual cocktail hour - completely optional (feel free to explore
            Portugal or rest up for the big day if needed)!
          </StyledText>
          <ButtonContainer>
            <Button>Map</Button>
          </ButtonContainer>
        </RightContainer>
      </div>

      <Divider />

      <div className="cp-c-row cp-c-align-start-center cp-c-wrap">
        <div className="cp-i-100 cp-i-md-50">
          <Title>Wedding Day</Title>
          <Date>Saturday, 10th September 2022</Date>
          <Date>2 PM - Late</Date>
        </div>
        <RightContainer className="cp-i-100 cp-i-md-50">
          <ImageContainer>
            <Image
              src={wedding}
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
          </ImageContainer>
          <StyledText>
            <div>Quinta da Penalva Calçada Penalva 24</div>
            <div>2710-494 Sintra</div>
          </StyledText>
          <StyledText>
            Cocktail Attire (“garden party chic”): wear anything from gowns to
            cocktail dresses, and suits to jackets and slacks. Have fun with it
            – we will be!
          </StyledText>

          <StyledText>
            TBD PM Welcome + Ceremony with dinner and dancing to follow
          </StyledText>
          <ButtonContainer>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Quinta+da+Penalva/@38.7923833,-9.3829646,18z/data=!3m1!4b1!4m5!3m4!1s0xd1933905f79441d:0x7490b695f1e9e2f8!8m2!3d38.7923812!4d-9.3818703"
            >
              <Button>Map</Button>
            </a>
          </ButtonContainer>
        </RightContainer>
      </div>

      <Divider />

      <div className="cp-c-row cp-c-align-start-center cp-c-wrap">
        <div className="cp-i-100 cp-i-md-50">
          <Title>
            <div>Beach Brunch</div>
            <Optional>(optional)</Optional>
          </Title>
          <Date>Sunday, 11th September 2022</Date>
          <Date>1 PM - 3 PM</Date>
        </div>
        <RightContainer className="cp-i-100 cp-i-md-50">
          <ImageContainer>
            <Image
              src={brunch}
              layout="responsive"
              objectFit="cover"
              quality={100}
            />
          </ImageContainer>
          <StyledText>
            <b>
              <div>To be announced</div>
            </b>
          </StyledText>
          <StyledText>
            To nurse some sore heads, we will head to the beach to relax and
            enjoy our first day as a married couple. We would love for you to
            join us if you fancy dropping by to hang by Lisbons coast. (No host)
          </StyledText>
          <ButtonContainer>
            <Button>Map</Button>
          </ButtonContainer>
        </RightContainer>
      </div>
    </Wrapper>
  </>
);

export default Schedule;

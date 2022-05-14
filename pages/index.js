import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {
  Wrapper,
  media,
  Title,
  Text,
  Divider,
} from "../components/utils/styledComponents";
import flowers from "../public/flowers1.png";
import us from "../public/maddy.jpg";

const Container = styled.div`
  position: relative;
  padding-bottom: 10rem;

  ${media.sm} {
    padding-bottom: 4rem;
  }
  ${media.lg} {
    padding-bottom: 0;
  }
`;
const DividerTwo = styled.div`
  padding: 1rem;
`;
const TextContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;

  ${media.sm} {
    top: 50%;
  }

  ${media.md} {
    text-align: start;
    top: 65%;
    left: 65%;
    width: 60%;
    transform: translate(-50%, -50%);
  }
  ${media.lg} {
    top: 70%;
    left: 65%;
  }
  ${media.xl} {
    top: 68%;
    left: 65%;
    width: 45%;
  }
`;
const Names = styled.div`
  padding-top: 2rem;
  font-size: 2rem;
  line-height: 3rem;
  font-family: Parisienne;

  ${media.md} {
    font-size: 3rem;
    line-height: 4rem;
  }
  ${media.xl} {
    padding-top: 2rem;
    padding-top: 3rem;
    font-size: 4rem;
  }
`;
const Date = styled.div`
  padding-top: 1rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  letter-spacing: 5px;

  ${media.md} {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }
  ${media.xl} {
    padding-top: 2rem;
    font-size: 5rem;
    line-height: 4.5rem;
  }
`;
const Location = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
  line-height: 3.5rem;
  font-family: Parisienne;

  ${media.md} {
    font-size: 2rem;
    line-height: 4rem;
  }
  ${media.xl} {
    padding-top: 2rem;
    font-size: 3rem;
    line-height: 5rem;
  }
`;

const Index = () => (
  <>
    <Container>
      <TextContainer>
        <Names>Madeleine & Nicolas</Names>
        <Date>10 September 2022</Date>
        <Location>Sintra, Portugal</Location>
      </TextContainer>
      <Image
        src={flowers}
        layout="responsive"
        objectFit="cover"
        quality={100}
        priority
        placeholder="blur"
      />
    </Container>
    <Wrapper>
      <Divider />
      <Title>Welcome</Title>
      <Text>
        Welcome to our wedding website, we can’t wait to celebrate our special
        day with you.
      </Text>
      <Text>
        We’ve created this website as a convenient and interactive way to share
        all of the important details with you in the lead up to our wedding.
      </Text>
      <Text>So have fun, take a look around and don’t forget to RSVP!</Text>
      <Text>
        Finally – thank you for your ongoing love and support. We are so excited
        to share this day with you and look forward to dancing the night away
        with all of our favorite people!
      </Text>
      <DividerTwo />
      <Image src={us} layout="responsive" objectFit="cover" quality={100} />
    </Wrapper>
  </>
);

export default Index;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  Wrapper,
  SmallTitle,
  Text,
  Divider,
} from '../components/utils/styledComponents';
import venue from '../public/venue.jpeg';
import us from '../public/test4.png';

const StyledTitle = styled(SmallTitle)`
  text-align: left;
`;
const StyledText = styled(Text)`
  text-align: left;
  margin: 0;
  max-width: 100%;
`;

const Venue = () => (
  <Wrapper>
    <div className="cp-c-row cp-c-align-end-center cp-c-wrap">
      <div className="cp-i-100 cp-i-md-40">
        <StyledTitle>The venue</StyledTitle>
        <StyledText>
          The venue Quinta da Penalva is full of greenery and has an undeniable
          charm.
        </StyledText>
        <StyledText>
          Quinta da Penalva is a guest house, located just outside the village
          of Sintra. Unlike many other Quinta or villas, Penalva is a private
          estate with lavish greenery in Sintra’s spirit, with several different
          natural areas throughout the estate. The villa itself had this
          beautiful green wall, two huge indoor and outdoor pools and a small
          bar house.
        </StyledText>
        <StyledText>
          Nestled in the heart of Sintra, Quinta de Penalva is a private villa
          surrounded by a four hectares green oasis and once belonged to the
          Portuguese family Mello and Castro. In 1977, the Quinta passed into
          the hands of the current owners, the Brazilian family Almeida Braga,
          who continue to spend seasons sometimes in Sintra, and sometimes in
          Brazil.
        </StyledText>
      </div>
      <div className="cp-i-100 cp-i-md-60">
        <Image
          src={venue}
          layout="responsive"
          quality={100}
          priority
          placeholder="blur"
        />
      </div>
    </div>
    <StyledText>
      The story goes that the tennis court was built for Queen Dona Amelia for
      practicing her favorite sport, when she spent the summer months with her
      husband, King D. Carlos I, in the Pena Palace. It was at the beginning of
      the 20th century that the renowned architect Raul Lino (1879-1974) was
      called upon to intervene, making the loft, gazebo and tea house next to
      the tennis court.
    </StyledText>
    <StyledText>
      In the house itself, there is a very personal decoration filled with
      objects that are part of the family history, in a typical old Portuguese
      style, once belonging to the champions of Formula 1, Ayrton Senna and
      Emerson Fittipaldi and Tri-Champion Rolando Garros, Gustavo Kuerten.
    </StyledText>
    <StyledText>
      We look forward to welcoming you in this magical place filled with nature.
      Given the wedding will be held in the gardens, we do recommend a change of
      shoes to ensure comfortability through the day. Going into the night,
      Sintra does have a micro climate and the weather can turn chilly, so think
      about a cover up (or tequila!)
    </StyledText>
    <Image src={us} layout="responsive" objectFit="cover" placeholder="blur" />
  </Wrapper>
);

export default Venue;

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {
  Wrapper,
  Title,
  SmallTitle,
  Text,
  Divider,
  media,
} from '../components/utils/styledComponents';
import hotel from '../public/hotel.jpeg';

const ImageBannerContainer = styled.div`
  position: relative;
  height: 15rem;
  margin-bottom: 2rem;

  ${media.sm} {
    height: 20rem;
  }
  ${media.md} {
    height: 30rem;
  }
  ${media.lg} {
    height: 40rem;
  }
`;
const StyledTitle = styled(Title)`
  padding-top: 3rem;
`;
const StyledSmallTitle = styled(SmallTitle)`
  padding-bottom: 0.7rem;
`;
const Information = styled(Text)`
  ${media.md} {
    height: 8rem;
  }
  ${media.lg} {
    height: 7rem;
  }
`;
const Hotel = styled.div`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 5px;
  padding-bottom: 1rem;
`;
const Address = styled.div`
  text-align: center;
  font-size: 1.1rem;
`;

const HotelContainer = styled.section`
  margin-bottom: 2rem;
  padding-top: 2rem;

  ${media.md} {
    padding: 0 2rem;
  }
  // &:nth-child(odd) {
  //   border-right: ${(props) => props.theme.thinBorder};
  // }
`;

const Hotels = [
  {
    title: 'Quinta das Murtas',
    address: 'R. Eduardo Van-Zeller 4, 2710-593 Sintra, Portugal',
    information:
      'An 18th century palace amid green surroundings with views of the Pena and the Monserrate Palaces. This is about 10 minutes walking to the wedding venue',
  },
  {
    title: 'Tivoli Palácio de Seteais',
    address: 'R. Barbosa du Bocage 8, 2710-517 Sintra, Portugal',
    information:
      'Much more than a luxury hotel in Sintra, Tivoli Palacio de Seteais is a romantic palace with period architecture that will take you back to the elegance and atmosphere of the XVIII century',
  },
  {
    title: 'Tivoli Sintra Hotel',
    address: 'R. Pendoa 27, 2710-616 Sintra, Portugal',
    information:
      'This modest hotel in a straightforward building at the edge of the downtown area is a 2-minute walk from the National Palace of Sintra, a 12-minute walk from Sintra train station and 3.2 km from Castelo dos Mouros. Its also 8 minutes driving from the venue, or just 12 minutes walk to where we will be staying',
  },
  {
    title: 'AirBnB',
    address: 'Sintra Area',
    information:
      "Although we have not yet seen any of these Airbnb's in person, they look adorable so we started a list for you! Be sure to check distance from the wedding venue and arrange transportation if needed.",
  },
];
const Accommodations = () => (
  <>
    <ImageBannerContainer>
      <Image
        src={hotel}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        placeholder="blur"
      />
    </ImageBannerContainer>

    <Wrapper>
      <StyledTitle>Accommodations</StyledTitle>
      <Text>
        We will be staying at The Penha Longa resort for the at least three days
        around the wedding. Transport will be organised from this hotel and we
        would be delighted if you would join us there.
      </Text>
      <Text>
        There are also a lot of villas in Sintra and Cascais to rent, as well as
        a selection of hotels in Sintra which can be found below. If you prefer
        the city, Lisbon is at a reasonable distance where many accommodation
        options can be found.
      </Text>
      <Text>
        <b>Address: Estrada da Lagoa Azul Linhó, 2714-511 Lisboa, Portugal</b>
      </Text>
      <Divider />
      <div className="cp-c-row cp-c-wrap">
        {Hotels.map(({ title, address, information }) => (
          <HotelContainer className="cp-i-100 cp-i-md-50" key={title}>
            <StyledSmallTitle>{title}</StyledSmallTitle>
            <Hotel>{title == 'AirBnB' ? 'Appartment' : 'Hotel'}</Hotel>
            <Information>{information}</Information>
            <Address>
              <b>{address}</b>
            </Address>
          </HotelContainer>
        ))}
      </div>
    </Wrapper>
  </>
);

export default Accommodations;

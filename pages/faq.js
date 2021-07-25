import React from 'react';
import styled from 'styled-components';
import {
  Wrapper,
  SmallTitle,
  Text,
  Divider,
} from '../components/utils/styledComponents';

const Section = styled.section`
  padding: 2rem 0;
`;
const faq = [
  {
    title: 'When should we fly in / fly out?',
    text: 'Of course, that is up to you! However, if it helps to know our plan – we will be arriving in the Sintra/Lisbon area Tuesday morning (in order to finish up a few wedding-related things and also relax). Otherwise, we are hanging around Sintra/Lisbon until the Monday morning following the wedding (so 6/09 – 12/09). We know many people are planning to explore more of Portugal and other parts of Europe, too! Just let us know if you have questions!',
  },
  {
    title: 'What is the lodging situation?',
    text: 'There are so many amazing options!  We have a few specifically listed on the website (see the Accommodation page); however, if you prefer to stay in Lisbon or closer to the beach please do so!  Just note that you will need to make your own arrangements for transportation from wherever you choose.',
  },
  {
    title: 'Are kids invited?',
    text: 'We love your kids—we really do. But we want our wedding to be your night off!  For immediate family only, you will notice that the kids are invited specifically on your invitation if "and family" is noted.',
  },
  {
    title: 'Can I bring a date?',
    text: 'If your invitation says “and Guest,” then yes, of course!',
  },
  {
    title: 'What’s the dress code?',
    text: 'The only real rule?  Be comfortable! Remembering it will be hot, the theme is “Garden Party Elegance” - anything from gowns to cocktail dresses, and suits to jackets and slacks. The wedding colours will be dusty blues and pastels if you wish to dress accordingly.',
  },
  {
    title: 'What is the best way to get to Sintra?',
    text: 'Luckily, it is pretty easy and there are a few ways!  The easiest way, once you land, is to take an Uber from the Lisbon airport.  You should expect ~30 minute ride for ~€20 each way. Of course, you can always rent a car as well if you will be discovering the area. Generally we are used to take the train. There is a direct link from Rossio station in downtown Lisbon which takes around 40 minutes and costs approx. €4 return with trains departing roughly every 20 minutes.',
  },
  {
    title: 'What if I have more questions?',
    text: "As we will most likely will be occupied with final preparations (or catching some rays), if you have any operational questions on the day or after your arrival to Portugal please don't hesitate contact our lovely wedding planner Doris.",
  },
  {
    title: 'What else should I know?',
    text: 'We have 5 words for you : Pasteis de Nata, Vinho Verde',
  },
  {
    title: 'What about transportation on the wedding day?',
    text: "As we will most likely will be occupied with final preparations (or catching some rays), if you have any operational questions on the day or after your arrival to Portugal please don't hesitate contact our lovely wedding planner Doris.",
  },
  {
    title: 'Can I bring my fancy camera ?',
    text: 'We would love nothing more than to share souvenirs and beautiful memories. We have a great photography team on hand so do encourage you to sit back and relax!',
  },
];

const Faq = () => (
  <Section>
    <Wrapper>
      {faq.map(({ title, text }, key) => (
        <div key={title}>
          <SmallTitle>{title}</SmallTitle>
          <Text>{text}</Text>
          {key !== faq.length - 1 && <Divider />}
        </div>
      ))}
    </Wrapper>
  </Section>
);

export default Faq;

import React from 'react';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
import {
  AdditionsContainer,
  AdditionsH1,
  AdditionsWrapper,
  AdditionsCard,
  AdditionsIcon,
  AdditionsH2,
  AdditionsP,
} from './AdditionsElements';

const Additions = () => {
  return (
    <AdditionsContainer id='additions'>
      <AdditionsH1>Discover</AdditionsH1>
      <AdditionsWrapper>
        <AdditionsCard
          href='https://www.pexels.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AdditionsIcon src={Icon1} />
          <AdditionsH2>Video from Pexels</AdditionsH2>
          <AdditionsP>
            The best free stock photos & videos shared by talented creators.
          </AdditionsP>
        </AdditionsCard>
        <AdditionsCard
          href='https://undraw.co/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AdditionsIcon src={Icon2} />
          <AdditionsH2>Images from unDraw</AdditionsH2>
          <AdditionsP>
            A constantly updated design project with beautiful SVG images that
            you can use completely free and without attribution.
          </AdditionsP>
        </AdditionsCard>
        <AdditionsCard
          href='https://styled-components.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AdditionsIcon src={Icon3} />
          <AdditionsH2>React Styled Components</AdditionsH2>
          <AdditionsP>
            Use the best bits of ES6 and CSS to style your apps without stress
          </AdditionsP>
        </AdditionsCard>
      </AdditionsWrapper>
    </AdditionsContainer>
  );
};

export default Additions;

import React from 'react';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  //   ArrowForward,
  //   ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  //   const [hover, setHover] = useState(false);

  //   const onHover = () => {
  //     setHover(!hover);
  //   };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} autoPlay loop muted playsInline type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>This is a React Web App</HeroH1>
        <HeroP>
          A very simple project to learn some of the fundamentals of React,
          while building something pretty cool!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            // onMouseEnter={onHover}
            // onMouseLeave={onHover}
            // primary='true'
            // dark='true'
          >
            Click to Scroll
            {/* Get started {hover ? <ArrowForward /> : <ArrowRight />} */}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

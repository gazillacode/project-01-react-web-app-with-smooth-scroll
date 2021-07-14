import React from 'react';
// import { Button } from '../ButtonElement';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  LinkBtn,
  ImgWrap,
  Img,
} from './InfoElements';

const InfoSection = ({ data }) => {
  return (
    <>
      <InfoContainer lightBg={data.lightBg} id={data.id}>
        <InfoWrapper>
          <InfoRow imgStart={data.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{data.topLine}</TopLine>
                <Heading lightText={data.lightText}>{data.headline}</Heading>
                <SubTitle darkText={data.darkText}>{data.description}</SubTitle>
                <LinkBtn
                  linked={data.linked}
                  href={data.hrefLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {data.buttonLabel}
                </LinkBtn>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={data.img} alt={data.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

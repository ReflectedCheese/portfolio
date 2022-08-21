import React from "react";
import { HeroBtnWrapper } from "../HeroSection/HeroElements";

import { Button } from "../ButtonElement";
import { ArrowDown } from "../HeroSection/HeroElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  Icons,
} from "./infoElements";
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt,
  primary,
  dark,
  dark2,
  showIcons,
  showButton,
  buttonLink,
}) => {
  let button;
  if (showButton) {
    button = (
      <Button
        to={buttonLink}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary={primary ? 1 : 0}
        dark={dark ? 1 : 0}
        dark2={dark2 ? 1 : 0}
      >
        {" "}
        <ArrowDown />
      </Button>
    );
  }
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <HeroBtnWrapper>{button}</HeroBtnWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

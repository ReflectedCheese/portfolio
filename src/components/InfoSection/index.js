import React from "react";
import { HeroBtnWrapper } from "../HeroSection/HeroElements";

import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
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
  primary,
  dark,
  dark2,
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
      </Button>
    );
  }
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
          </InfoRow>
          <HeroBtnWrapper>{button}</HeroBtnWrapper>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;

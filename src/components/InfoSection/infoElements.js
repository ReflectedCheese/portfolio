import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#070621")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #9900ff;
  font-size: 16px;
  line-height: 16px;
  font-weight: lighter;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: lighter;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const Icons = styled.div``;

export const BtnWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 80px;
  align-items: center;
  transform: translateY(20%);
  transition: all 1s ease-in-out;

  :hover {
    transform: translateY(-20%);
    transition: all 1s ease-in-out;
  }
`;

export const Html5 = styled(DiHtml5)`
  color: #fff;
  font-size: 26px;
`;

export const Javascript = styled(DiJsBadge)`
  color: #fff;
  font-size: 26px;
`;

export const CSS3 = styled(DiCss3)`
  color: #fff;
  font-size: 26px;
`;

export const ReactIcon = styled(DiReact)`
  color: #fff;
  font-size: 26px;
`;

export const Photoshop = styled(DiPhotoshop)`
  color: #fff;
  font-size: 26px;
`;

export const Illustrator = styled(DiIllustrator)`
  color: #fff;
  font-size: 26px;
`;

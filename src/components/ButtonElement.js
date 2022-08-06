import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  /* border-radius: 50px;
  background: ${({ primary }) => (primary ? "#9900FF" : "#010606")}; */
  white-space: nowrap;
  /* padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")}; */
  color: ${({ dark }) => (dark ? "#fff" : "#ffff")};
  /* font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}; */
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    /* background: ${({ primary }) => (primary ? "#fff" : "#9900FF")}; */
    /* color: ${({ dark }) => (dark ? "#9900FF" : "#fff")}; */
  }
`;

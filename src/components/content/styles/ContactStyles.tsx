import styled, {keyframes} from "styled-components";
import { noselect, button } from "./GlobalStyles";
import Button from "../../utils/Button";

export const ContactButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 5vh;
  ${noselect}
`;

export const LinkedInButton = styled(Button)`
  ${button}
  border: 5px solid rgb(0, 119, 181);
  &:hover {
    border: 8px solid rgb(0, 119, 181);
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(0, 64, 98);
    padding: 12px;
  }
`;

export const GithubButton = styled(Button)`
  ${button}
  border: 5px solid rgb(114, 114, 133);
  &:hover {
    border: 8px solid rgb(114, 114, 133);
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(60, 60, 70);
    padding: 12px;
  }
`;

export const ResumeButton = styled(Button)`
  ${button}
  border: 5px solid rgb(142, 104, 142);
  &:hover {
    border: 8px solid rgb(142, 104, 142);
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: 8px solid rgb(69, 50, 69);
    padding: 12px;
  }
`;

const rainbowAnimation = keyframes`
  0% {background-position: 0% 50%;}
  100% {background-position: -400% 50%;}
`;

export const ContactMeButton = styled(Button)`
  ${button}
  border: double 5px transparent;
  border-radius: 15px;
  background-size: 400% 100%;
  background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), 
  linear-gradient(to right, 
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  animation: ${rainbowAnimation} 10s infinite linear;
  &:hover {
    border: double 8px transparent;
    border-radius: 15px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), 
    linear-gradient(to right, 
      rgba(255, 0, 0, 1) 0%,
      rgba(255, 154, 0, 1) 10%,
      rgba(208, 222, 33, 1) 20%,
      rgba(79, 220, 74, 1) 30%,
      rgba(63, 218, 216, 1) 40%,
      rgba(47, 201, 226, 1) 50%,
      rgba(28, 127, 238, 1) 60%,
      rgba(95, 21, 242, 1) 70%,
      rgba(186, 12, 248, 1) 80%,
      rgba(251, 7, 217, 1) 90%,
      rgba(255, 0, 0, 1) 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    padding: 12px;
    font-weight: bold;
    font-style: italic;
  }
  &:active {
    border: double 8px transparent;
    border-radius: 15px;
    background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)), 
    linear-gradient(to right, 
      rgb(130, 1, 1) 0%,
      rgb(148, 89, 2) 10%,
      rgb(125, 133, 20) 20%,
      rgb(41, 119, 38) 30%,
      rgb(33, 116, 115) 40%,
      rgb(27, 117, 131) 50%,
      rgb(14, 58, 109) 60%,
      rgb(50, 13, 123) 70%,
      rgb(96, 9, 128) 80%,
      rgb(120, 4, 105) 90%,
      rgb(130, 1, 1) 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    padding: 12px;
  }
`; 

export const BackButton = styled(Button)`
  margin: 10px;
  background: black;
  padding: 15px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  width: 50px;
  align-items: center;
  border: 5px solid rgb(164, 32, 32);
  &:hover {
    border: 8px solid rgb(164, 32, 32);
    padding: 12px;
    font-style: italic;  
  }
  &:active {
    border: 8px solid rgb(101, 19, 19);
    padding: 12px;
  }
`;
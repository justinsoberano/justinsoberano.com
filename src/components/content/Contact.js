import React from "react";
import { BackButton,  
         ContactMeButton, 
         GithubButton, 
         LinkedInButton, 
         ResumeButton 
} from "./styles/ContactStyles";
import { ButtonContainer } from "./styles/GlobalStyles";
import { useColorContext } from "../../context/ColorContext";

const linkedIn = "https://www.linkedin.com/in/justinsoberano/";
const github = "https://github.com/justinsoberano";
const resume = "https://data.justinsoberano.com/files/resume.pdf";
const email = "mailto:me@justinsoberano.com";

export const Contact = ({s: toggle, changeShow, changeTimer, changeShowContact}) => {
  const { setActiveColor } = useColorContext();
  
  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };
  
  const handleBack = () => {
    changeShow(true);
    changeTimer(100);
    changeShowContact(false);
    setActiveColor(null);
  };
  
  return (
    <ButtonContainer>
      <LinkedInButton toggle={toggle} delay={0} onClick={() => openInNewTab(linkedIn)} text="linkedin" />
      <GithubButton toggle={toggle} delay={50} onClick={() => openInNewTab(github)} text="github"/>
      <ResumeButton toggle={toggle} delay={100} onClick={() => openInNewTab(resume)} text="resume" />
      <ContactMeButton toggle={toggle} delay={150} onClick={() => openInNewTab(email)} text="email me!"/>
      <BackButton toggle={toggle} delay={175} onClick={handleBack} text="back"/>
    </ButtonContainer>
  );
};
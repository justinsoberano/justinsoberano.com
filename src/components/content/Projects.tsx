import React from "react";
import Spring from "../utils/Spring";
import { ProjectContainer, 
         ProjectBackButton, 
         ProjectCard, 
         ProjectDesc, 
         ProjectImg, 
         ProjectTech, 
         ProjectTitle
} from "./styles/ProjectStyles";

interface ProjectData {
  id: number;
  projectImage: string;
  techStackImage: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
}

type ProjectsProps = {
  s: boolean;
  changeShow: (show: boolean) => void;
  changeTimer: (timer: number) => void;
  changeShowProjects: (show: boolean) => void;
  data: ProjectData[];
};

export const Projects: React.FC<ProjectsProps> = ({ s, changeShow, changeTimer, changeShowProjects, data }) => {
  const fromTransform = s ? "translateY(200px)" : "translateY(0px)";
  const toTransform = s ? "translateY(0px)" : "translateY(300px)";

  const cards = data.map((project) => (
    <ProjectCard key={project.id}>
      <ProjectImg src={project.projectImage}/>
      <ProjectTech src={project.techStackImage}/>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDesc>
        {project.description}
        {project.link && (
          <a href={project.link} target="_blank" style={{ color: "lightblue", fontWeight: "800" }} rel="noreferrer">
            {project.linkText}
          </a>
        )}
      </ProjectDesc>
    </ProjectCard>
  ));

  return (
    <Spring fromTransform={fromTransform} toTransform={toTransform}>
      <ProjectContainer>{cards}
        <ProjectBackButton 
          onClick={() => {
            changeShow(true);
            changeTimer(100);
            changeShowProjects(false);
          }}>back</ProjectBackButton>
      </ProjectContainer>
    </Spring>
  );
};
import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { Button } from "../ButtonElement";
import { HeroBtnWrapper } from "../HeroSection/HeroElements";
import Video from "../../video/video-2.mp4";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
  HeroBg,
  VideoBg
} from "./PortfolioElements";

const PortFolio = () => {
  const apiUrl = "https://estuera.com/portfolio_api/projects";

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          setProjects(result);
        },
        (error) => {
          setLoading(true);
          console.log(error);
        }
      );
  }, []);

  if (loading) {
    return (
      <PortfolioContainer id="projects">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <PortfolioH1>Projects</PortfolioH1>
        <BarLoader
          color={"#9900FF"}
          loading={true}
          cssOverride={true}
          size={100}
        />
      </PortfolioContainer>
    );
  } else {
    return (
      <PortfolioContainer id="projects">
        <PortfolioH1>Projects</PortfolioH1>
        <PortfolioWrapper>
          {projects.map((project) => (
            <PortfolioCard>
              <PortfolioIcon src={project.image_url} />
              <PortfolioH2>{project.title}</PortfolioH2>
              <PortfolioP>{project.description}</PortfolioP>
            </PortfolioCard>
          ))}
        </PortfolioWrapper>
        <HeroBtnWrapper>
          <Button
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
          
          </Button>
        </HeroBtnWrapper>
      </PortfolioContainer>
    );
  }
};

export default PortFolio;

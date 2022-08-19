import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { ArrowDown } from "../HeroSection/HeroElements";
import { Button } from "../ButtonElement";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

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
      <ServicesContainer id="work">
        <ServicesH1>Some of my Work</ServicesH1>
        <BarLoader
          color={"#9900FF"}
          loading={true}
          cssOverride={true}
          size={100}
        />
      </ServicesContainer>
    );
  } else {
    return (
      <ServicesContainer id="work">
        <ServicesH1>Some of my Work</ServicesH1>
        <ServicesWrapper>
          {projects.map((project) => (
            <ServicesCard>
              <ServicesIcon src={project.image_url} />
              <ServicesH2>{project.title}</ServicesH2>
              <ServicesP>{project.description}</ServicesP>
            </ServicesCard>
          ))}

          <Button
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <ArrowDown />
          </Button>
        </ServicesWrapper>
      </ServicesContainer>
    );
  }
};

export default PortFolio;

import React from "react";
import { motion } from "framer-motion";

// components
import Subheading from "../Subheading";
import {
  Section,
  Card,
  CardCategory,
  CardDetails,
  Grid,
} from "../../styles/sectionStyles";
import { Container, Image } from "../../styles/globalStyles";

import sampleImg from "../../assets/sample.jfif";
// import projects from "../../data/projects";

// provider
import { useGlobalStateContext } from "../../context/globalContext";

function Projects({ handleCursor }) {
  const { projects } = useGlobalStateContext();
  return (
    <Section data-scroll-section>
      <Subheading alignLeft>
        <h2>
          Pr<span className="o-special">o</span>j<em>e</em>cts
        </h2>
        <p>See my works</p>
      </Subheading>
      <Container>
        <Grid>
          {projects &&
            projects.map((project, index) => {
              if (index % 2 === 0)
                return (
                  <ProjectCard handleCursor={handleCursor} project={project} />
                );
              else
                return (
                  <ProjectCard
                    narrowHeight
                    handleCursor={handleCursor}
                    project={project}
                  />
                );
            })}
        </Grid>
      </Container>
    </Section>
  );
}

function ProjectCard(props) {
  const { project, handleCursor } = props;

  const findProps = () => {
    let cardProps = {},
      imgProps = {};
    if ("narrowHeight" in props) {
      cardProps = { dropBottom: true };
      imgProps = {
        stretch: true,
        narrowWidth: true,
        narrowHeight: true,
      };
    } else {
      imgProps = { stretch: true, narrowWidth: true, wideHeight: true };
    }
    return [cardProps, imgProps];
  };

  const [cardProps, imgProps] = findProps();

  return (
    <Card
      {...cardProps}
      onHoverStart={() => handleCursor("hovered")}
      onHoverEnd={handleCursor}
    >
      <CardCategory>{project.category}</CardCategory>
      <Image
        data-scroll
        data-scroll-speed="0.5"
        data-scroll-position="center"
        {...imgProps}
      >
        <img
          data-scroll
          data-scroll-speed="-0.5"
          src={project.thumbnail}
          alt="Sample image"
          data-scroll-position="center"
        />
      </Image>
      <CardDetails>
        <strong className="card-title">{project.name}</strong>
        <p className="card-description">{project.type}</p>
      </CardDetails>
    </Card>
  );
}

export default Projects;

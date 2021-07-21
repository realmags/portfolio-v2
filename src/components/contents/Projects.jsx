import React from "react";

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
import projects from "../../data/projects";

function Projects() {
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
          {projects.map((project, index) => {
            if (index % 2 === 0)
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                />
              );
            else
              return (
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  narrowHeight
                />
              );
          })}
        </Grid>
      </Container>
    </Section>
  );
}

function ProjectCard(props) {
  const { title, description, category } = props;

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
    <Card {...cardProps}>
      <CardCategory>{category}</CardCategory>
      <Image {...imgProps}>
        <img src={sampleImg} alt="Sample image" />
      </Image>
      <CardDetails>
        <strong className="card-title">{title}</strong>
        <p className="card-description">{description}</p>
      </CardDetails>
    </Card>
  );
}

export default Projects;

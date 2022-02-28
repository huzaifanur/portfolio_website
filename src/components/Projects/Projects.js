import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Section,
  Img,
  Stack
} from "./ProjectsStyles";
import {
  SectionTitle,
  ProjectDivider,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>

            </TitleContent>
            <Img src={p.image} />
            <CardInfo>{p.description}</CardInfo>
            <div>
              <Stack>Stack</Stack>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>View Demo</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList>
            <ProjectDivider />
          </BlogCard>
        );
      })}
    </GridContainer>

  </Section>
);

export default Projects;

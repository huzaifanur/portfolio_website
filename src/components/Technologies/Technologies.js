import React from 'react';
import { DiFirebase, DiReact, DiZend, } from 'react-icons/di';
import { AiOutlineCloudServer } from 'react-icons/ai';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From full stack development to deployment.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
             React JS <br/> 
             NEXT JS <br/>
             Material UI <br/>
             Styled Componennts <br/>
             HTML | CSS | SASS <br/> 
             Tailwindcss <br/> 

            
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
           
            Node & Express JS <br/>
            Mongo DB <br/>
            Postgres SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineCloudServer size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Dev Ops</ListTitle>
          <ListParagraph>
            CI /CD Jenkins <br/>
            Pipeline <br/>
            Docker & Kubernetes <br/>
            AWS <br/>
            Digital Ocean <br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

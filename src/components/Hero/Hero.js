import React from 'react';
import { SectionText } from '../../styles/GlobalComponents';
import { HeroSection, RightSection, CenterSection, ImgContainer, Img, HeroSectionTitle, } from './HeroStyles';

const Hero = () => (
  <>
    <HeroSection>

      <RightSection>
        <ImgContainer>
          <Img src="https://i.ibb.co/dbj4M0K/IMG-4558.jpg" alt="IMG-4558" />
        </ImgContainer>
      </RightSection>
      <CenterSection>
        <HeroSectionTitle main center>
          Hi, I'm Huzaifa Nur <br />
          MERN Stack Next.js Developer
        </HeroSectionTitle>
        <SectionText>
          Full stack software engineer with over 3 year of experience in commercial application development.
          I love solving problems and writing clean code.
          I built innovative and cutting edge business solutions for enterprises and startups.
          Everyday I push myself to improve my character & skills and be a better human being.
        </SectionText>
      </CenterSection>
    </HeroSection>
  </>
);

export default Hero;


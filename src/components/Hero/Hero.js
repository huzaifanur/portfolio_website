import React from 'react';
import Link from 'next/link';
import Button from '../../styles/GlobalComponents/Button';
import { HeroSection,RightSection, CenterSection,  ImgContainer,Img,HeroSectionTitle } from './HeroStyles';

const Hero = () => (
  <>
    <HeroSection>
    
    <RightSection>
      <ImgContainer>
        <Img src="https://i.ibb.co/dbj4M0K/IMG-4558.jpg" alt="IMG-4558"/>
      </ImgContainer>
    </RightSection>

    <CenterSection> 
      <HeroSectionTitle  main center>
        Hi, I'm Huzaifa Nur <br />
        Full Stack Web Developer
      </HeroSectionTitle>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </CenterSection>
    </HeroSection>
  </>
);

export default Hero;


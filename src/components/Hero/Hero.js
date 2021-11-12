import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Huzaifa Nur <br />
          Full Stack Web Developer
        </SectionTitle>
          <Link href="#about">
            <Button>Learn More</Button>
          </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
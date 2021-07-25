import { getDomainLocale } from 'next/dist/next-server/lib/router/router';
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Portfolio
      </SectionTitle>
      <SectionText>
        I am an aspiring web developer looking to get a start in the tech field 
      </SectionText>
      <Button onClick={() => window.location = 'https://linkedin.com'}> Contact Me </Button>
    </LeftSection>
  </Section>
);

export default Hero;
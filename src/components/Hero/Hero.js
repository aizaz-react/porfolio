import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I am Ayzaz Waheed Full stack/Mern stack developer having more than
        two years of professional experience in Reactjs, Nextjs, Nodejs,
        Expressjs, Mongodb, firebase, and moralis.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/aizaz-react")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

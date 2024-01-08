import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Kelvin Boateng" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me 🤔" />
        <InterestsSection sectionId="details" heading="Tech Stack 🛠" />
        <ProjectsSection sectionId="features" heading="Projects 👨🏾‍💻" />
        <ArticlesSection
          sectionId="articles"
          heading="Articles worth reading 🫡"
          sources={["Medium"]}
        />
        <ContactSection sectionId="github" heading="contact 📲" />
      </Page>
    </>
  );
}

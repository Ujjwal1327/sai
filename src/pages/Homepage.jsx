import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import HeroSection from "../components/heroSection/HeroSection";
import OurTeam from "../components/Our Team/OurTeam";
import ServiceProvide from "../components/ServiceProvide/ServiceProvide";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <ServiceProvide />
      <AboutUs />
      <OurTeam />
    </>
  );
}

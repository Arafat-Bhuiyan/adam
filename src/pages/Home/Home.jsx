import React from "react";
import { Hero } from "./Hero";
import { TrustSection } from "./TrustSection";
import { WhyChoose } from "./WhyChoose";
import { OurServices } from "./OurServices";

export const Home = () => {
  return (
    <div>
      <Hero />
      <TrustSection />
      <WhyChoose />
      <OurServices />
    </div>
  );
};

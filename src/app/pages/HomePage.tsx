import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { CTA } from "../components/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}

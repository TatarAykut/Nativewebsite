import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Values } from "../components/Values";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { CTA } from "../components/CTA";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <>
      <SEO
        title="NativeWay — Travel Easier. Experience More."
        path="/"
        description="NativeWay connects you with authentic local experiences, hidden gems, and real recommendations from locals. No tourist traps — just real travel."
      />
      <Hero />
      <About />
      <Values />
      <Features />
      <HowItWorks />
      <CTA />
    </>
  );
}

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
        title="NativeWay — Plan Your Whole Trip in One Click"
        path="/"
        description="Plan your whole trip in one click: iconic landmarks worth the queue, plus the local spots tourists never find. Group planning built in. Launching across 277+ cities."
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

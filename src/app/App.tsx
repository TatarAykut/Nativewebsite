import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Values } from "./components/Values";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1829] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}

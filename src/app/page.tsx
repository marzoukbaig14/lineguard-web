import { Hero } from "@/components/sections/Hero";
import { Argument } from "@/components/sections/Argument";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TheCorner } from "@/components/sections/TheCorner";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { Credibility } from "@/components/sections/Credibility";
import { Contact } from "@/components/sections/Contact";

/**
 * LineGuard marketing page. Section order tells the story: the call → the
 * argument it settles → how it works → why the corner angle wins → features →
 * see it → proof → ask. Copy is DRAFT (accurate to §1); media is PLACEHOLDER.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Argument />
      <HowItWorks />
      <TheCorner />
      <Features />
      <Showcase />
      <Credibility />
      <Contact />
    </>
  );
}

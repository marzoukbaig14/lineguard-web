import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Showcase } from "@/components/sections/Showcase";
import { Credibility } from "@/components/sections/Credibility";
import { Contact } from "@/components/sections/Contact";

/**
 * LineGuard marketing page. Section order follows DESIGN_BRIEF §4. All copy and
 * media are clearly-marked PLACEHOLDER pending real content from the team.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Showcase />
      <Credibility />
      <Contact />
    </>
  );
}

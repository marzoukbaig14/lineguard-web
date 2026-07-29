import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SectionFlow } from "@/components/motion/SectionFlow";
import { ContactForm } from "./ContactForm";

/**
 * CTA + contact. Players are the emotional hook, but clubs and court owners
 * are the buyer — the ask speaks to them (with a nudge for players to pass
 * it along).
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <SectionFlow>
        <div className="page-shell grid gap-14 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Get LineGuard"
              title="Put it on your courts."
              lede="LineGuard is built for clubs and court owners. Tell us about your courts and we'll take it from there. Play somewhere that needs it? Tell your club."
            />
          </ScrollReveal>

          <div className="lg:pt-2">
            <ContactForm />
          </div>
        </div>
      </SectionFlow>
    </section>
  );
}

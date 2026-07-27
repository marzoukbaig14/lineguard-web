import { SectionHeader } from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ContactForm } from "./ContactForm";

/** CTA + contact. The ask on the left, the Formspree form on the right. */
export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-hairline py-[var(--section-y)]"
    >
      <div className="page-shell grid gap-14 lg:grid-cols-2 lg:gap-24">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Get in touch · PLACEHOLDER"
            title="Put a line under guard."
            lede="PLACEHOLDER — a short prompt telling the visitor exactly what happens when they reach out (a demo, a call, early access)."
          />
        </ScrollReveal>

        <div className="lg:pt-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

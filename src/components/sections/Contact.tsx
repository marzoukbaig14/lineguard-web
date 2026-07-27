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
            eyebrow="Get LineGuard"
            title="Put LineGuard on your court."
            lede="DRAFT — tell us about your court or club and we'll get you set up with the hardware. Questions welcome too."
          />
        </ScrollReveal>

        <div className="lg:pt-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useForm, ValidationError } from "@formspree/react";

/**
 * Contact form. The Formspree project ID is read from
 * `NEXT_PUBLIC_FORMSPREE_ID` (client-safe, but kept out of source). If it is
 * unset we render a clearly-marked placeholder instead of a dead form.
 */
export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  // env vars are inlined at build time, so this branch is constant per build —
  // hook order below stays stable.
  if (!formId) {
    return <ContactPlaceholder />;
  }

  return <ContactFormLive formId={formId} />;
}

function ContactFormLive({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div
        role="status"
        className="rounded-xl border border-hairline bg-bg-elev p-8"
      >
        <p className="font-mono text-step--1 uppercase tracking-[0.2em] text-accent">
          Message sent
        </p>
        <p className="mt-3 text-step-0 text-fg-muted">
          {/* PLACEHOLDER confirmation copy */}
          Thanks — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Honeypot: bots fill this hidden field; Formspree drops those submissions. */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      {/* Subject line for the inbound email. */}
      <input type="hidden" name="_subject" value="New LineGuard enquiry" />

      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
        />
      </Field>

      <Field label="Email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </Field>

      {state.errors && (
        <p role="alert" className="text-step--1 text-accent">
          Something went wrong. Check the fields above and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="inline-flex w-fit items-center justify-center rounded-full bg-accent px-6 py-3 font-mono text-step--1 uppercase tracking-[0.18em] text-accent-ink transition-opacity hover:bg-accent/90 disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function ContactPlaceholder() {
  return (
    <div className="rounded-xl border border-dashed border-hairline-strong bg-bg-elev p-8">
      <p className="font-mono text-step--1 uppercase tracking-[0.2em] text-fg-muted">
        Contact form · not configured
      </p>
      <p className="mt-3 text-step-0 text-fg-muted">
        Set <code className="text-fg">NEXT_PUBLIC_FORMSPREE_ID</code> to enable the
        live form. Until then this is a PLACEHOLDER.
      </p>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-hairline bg-bg px-4 py-3 text-step-0 text-fg placeholder:text-fg-faint focus:border-accent focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

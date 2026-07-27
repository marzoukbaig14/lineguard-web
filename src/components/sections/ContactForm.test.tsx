import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  const original = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  beforeEach(() => {
    delete process.env.NEXT_PUBLIC_FORMSPREE_ID;
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_FORMSPREE_ID = original;
  });

  it("renders the placeholder when no Formspree ID is configured", () => {
    render(<ContactForm />);

    expect(screen.getByText(/not configured/i)).toBeInTheDocument();
    expect(screen.getByText(/NEXT_PUBLIC_FORMSPREE_ID/)).toBeInTheDocument();
  });
});

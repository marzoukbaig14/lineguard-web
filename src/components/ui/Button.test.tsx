import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its label as a link to the given href", () => {
    render(<Button href="#contact">Request a demo</Button>);

    const link = screen.getByRole("link", { name: "Request a demo" });
    expect(link).toHaveAttribute("href", "#contact");
  });
});

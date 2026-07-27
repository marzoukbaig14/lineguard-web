import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Eyebrow } from "./Eyebrow";

describe("Eyebrow", () => {
  it("renders its label text", () => {
    render(<Eyebrow>Machine vision</Eyebrow>);
    expect(screen.getByText("Machine vision")).toBeInTheDocument();
  });
});

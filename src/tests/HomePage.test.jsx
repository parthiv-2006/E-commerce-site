import { describe, it, expect } from "vitest";
import HomePage from "../components/HomePage.jsx";
import { render, screen } from "@testing-library/react";

describe("The HomePage Component", () => {
  it("renders the main component", () => {
    render(<HomePage />);

    const headingElement = screen.getByRole("heading", {
      name: /Welcome to our Shop/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});

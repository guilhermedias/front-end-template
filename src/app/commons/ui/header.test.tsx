import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  it("shows the provided content", () => {
    render(<Header content="Header Content" />);

    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });
});

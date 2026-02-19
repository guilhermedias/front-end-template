import Header from "@/app/commons/ui/header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("shows the provided content", () => {
    render(<Header content="Header Content" />);

    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });
});

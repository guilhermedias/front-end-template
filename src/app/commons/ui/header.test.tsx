import Header from "@/app/commons/ui/header";
import { FlagsContext } from "@/app/flags";
import { render, screen } from "@testing-library/react";
import { ReactElement } from "react";

let fancyHeaderEnabled: boolean;

describe("Header", () => {
  describe("when fancy header is on", () => {
    beforeEach(() => {
      fancyHeaderEnabled = true;
    });

    it("shows the provided content in a fancy manner", () => {
      renderWithFlags(<Header content="Header Content" />);

      expect(
        screen.getByText("Header Content but Fancier"),
      ).toBeInTheDocument();
    });
  });

  describe("when fancy header is off", () => {
    beforeEach(() => {
      fancyHeaderEnabled = false;
    });

    it("shows the provided content", () => {
      renderWithFlags(<Header content="Header Content" />);

      expect(screen.getByText("Header Content")).toBeInTheDocument();
    });
  });
});

function renderWithFlags(children: ReactElement) {
  render(
    <FlagsContext value={[{ name: "FANCY_HEADER", value: fancyHeaderEnabled }]}>
      {children}
    </FlagsContext>,
  );
}

import Header from "@/app/commons/ui/header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("when fancy header is on", () => {
    beforeEach(() => {
      global.mockFetchFlags.mockResolvedValue([
        { name: "FANCY_HEADER", value: true },
      ]);
    });

    it("shows the provided content in a fancy manner", async () => {
      render(<Header content="Header Content" />);

      expect(
        await screen.findByText("Header Content but Fancier"),
      ).toBeInTheDocument();
    });
  });

  describe("when fancy header is off", () => {
    beforeEach(() => {
      mockFetchFlags.mockResolvedValue([
        { name: "FANCY_HEADER", value: false },
      ]);
    });

    it("shows the provided content", async () => {
      render(<Header content="Header Content" />);

      expect(await screen.findByText("Header Content")).toBeInTheDocument();
    });
  });
});

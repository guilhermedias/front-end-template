import { fetchFlags } from "@/app/flags";
import "@testing-library/jest-dom";

jest.mock("@/app/flags", () => {
  const originalModule = jest.requireActual("@/app/flags");

  return {
    __esModule: true,
    ...originalModule,
    fetchFlags: jest.fn(),
  };
});

global.mockFetchFlags = fetchFlags as jest.MockedFunction<typeof fetchFlags>;

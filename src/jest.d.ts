declare global {
  var mockFetchFlags: jest.MockedFunction<() => Promise<Flag[]>>;
}

export {};

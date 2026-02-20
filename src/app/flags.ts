export interface Flag {
  name: string;
  value: boolean;
}

export function isEnabled(flagName: string, flags: Flag[]) {
  return flags.find((flag) => {
    return flag.name === flagName;
  })?.value;
}

export async function fetchFlags(): Promise<Flag[]> {
  return [{ name: "FANCY_HEADER", value: false }];
}

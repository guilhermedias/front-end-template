"use client";

import Header from "@/app/commons/ui/header";
import { fetchFlags, Flag, FlagsContext } from "@/app/flags";
import { useEffect, useState } from "react";

export default function Home() {
  const [flags, setFlags] = useState<Flag[]>([]);

  useEffect(() => {
    (async () => {
      setFlags(await fetchFlags());
    })();
  });

  return (
    <FlagsContext value={flags}>
      <Header content="Guilherme" />
    </FlagsContext>
  );
}

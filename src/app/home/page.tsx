"use client";

import { fetchFlags, Flag, FlagsContext } from "@/app/flags";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
      <Typography variant="h2">Hello!</Typography>

      <Box sx={{ maxWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography>This is a card!</Typography>
          </CardContent>
        </Card>
      </Box>
    </FlagsContext>
  );
}

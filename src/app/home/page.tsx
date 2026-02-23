"use client";

import Header from "@/app/commons/ui/header";
import { fetchFlags, Flag, FlagsContext } from "@/app/flags";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  }, []);

  return (
    <FlagsContext value={flags}>
      <Header content="Hello, Guilherme" />

      <Box sx={{ maxWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography>This is a card!</Typography>
            <Button
              variant="contained"
              onClick={() => {
                alert("Clicked!");
              }}
            >
              Click me!
            </Button>
          </CardContent>
        </Card>
      </Box>
    </FlagsContext>
  );
}

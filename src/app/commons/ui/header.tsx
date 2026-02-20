import { fetchFlags, isEnabled } from "@/app/flags";
import { useEffect, useState } from "react";

interface HeaderProps {
  content: string;
}

export default function Header({ content }: HeaderProps) {
  const [displayContent, setDisplayContent] = useState(content);

  useEffect(() => {
    (async () => {
      const flags = await fetchFlags();

      const displayContent = isEnabled("FANCY_HEADER", flags)
        ? `${content} but Fancier`
        : content;

      setDisplayContent(displayContent);
    })();
  }, [content]);

  return <h2>{displayContent}</h2>;
}

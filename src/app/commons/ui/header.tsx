import { FlagsContext, isEnabled } from "@/app/flags";
import { useContext } from "react";

interface HeaderProps {
  content: string;
}

export default function Header({ content }: HeaderProps) {
  const flags = useContext(FlagsContext);

  const displayContent = isEnabled("FANCY_HEADER", flags)
    ? `${content} but Fancier`
    : content;

  return <h2>{displayContent}</h2>;
}

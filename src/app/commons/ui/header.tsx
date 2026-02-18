interface HeaderProps {
  content: string;
}

export default function Header({ content }: HeaderProps) {
  return <h2>{content}</h2>;
}

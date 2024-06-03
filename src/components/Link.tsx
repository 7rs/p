interface Props {
  text: string;
  href: string;
  title?: string;
  openInNewTab?: boolean;
}

export function Link({ text, href, title, openInNewTab }: Props) {
  return (
    <a
      href={href}
      title={title}
      referrerPolicy="no-referrer"
      rel="noopener noreferrer"
      target={openInNewTab ? "_blank" : undefined}
    >
      {text}
    </a>
  );
}

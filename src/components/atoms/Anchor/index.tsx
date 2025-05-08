import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};

/**
This is so basic that it could very well be a class, but from my experience, the link components
 usually get some extra treatment, like tooltips, analytics, custom handlers etc.
 */
export default function Anchor({ href, children }: Props) {
  return (
    <a href={href} className="text-accent-100">
      {children}
    </a>
  );
}

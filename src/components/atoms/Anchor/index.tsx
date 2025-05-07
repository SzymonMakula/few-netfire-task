import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};
export default function Anchor({ href, children }: Props) {
  return (
    <a href={href} className="text-accent-100">
      {children}
    </a>
  );
}

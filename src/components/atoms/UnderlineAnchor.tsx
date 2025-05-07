import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href: string;
};
export default function UnderlineAnchor({ children, href }: Props) {
  return (
    <a
      href={href}
      className="text-primary-md leading-3.5 font-inter font-semibold text-secondary-300 underline"
    >
      {children}
    </a>
  );
}

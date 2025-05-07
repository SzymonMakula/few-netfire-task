import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "children" | "onClick" | "title"
>;

export default function IconButton({ onClick, title, children }: Props) {
  return (
    <button
      onClick={onClick}
      title={title}
      type="button"
      className="rounded-full bg-primary-300 border border-primary-400 p-3 flex justify-center items-center"
    >
      {children}
    </button>
  );
}

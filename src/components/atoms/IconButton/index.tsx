import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "children" | "onClick" | "title"
>;

/**
 * Depending on how many of these "buttons" exist, I'd consider creating each of them as their own component, all using
 * this template as a sort of wrapper. A component library could also include a ready solution for that, too.
 * I'd definitely avoid doing a component with API like `<IconButton icon={"person"}>`, because that usually boils down to
 * a big monolithic component that imports just about any SVG. Without care, this could also blow in size, too.
 */
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

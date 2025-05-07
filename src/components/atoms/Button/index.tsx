import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant = "primary" | "secondary" | "transparent";

type Props = {
  variant: Variant;
} & Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "children" | "onClick" | "title" | "type"
>;

function mapVariantToClassname(variant: Variant): string {
  switch (variant) {
    case "primary":
      return "bg-primary-200 border-primary-400 text-secondary-500";
    case "secondary":
      return "bg-primary-300 border-primary-400 text-secondary-400 ";
    case "transparent":
      return "bg-primary-300 border-secondary-200 text-white";
  }
}

export default function Button({ variant, ...rest }: Props) {
  const variantStyles = mapVariantToClassname(variant);
  return (
    <button
      className={`flex px-8 py-2 border rounded-md text-primary-md justify-center items-center ${variantStyles}`}
      {...rest}
    ></button>
  );
}

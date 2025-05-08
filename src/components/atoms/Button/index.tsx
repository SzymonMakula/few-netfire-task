import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Variant = "primary" | "secondary" | "transparent";
type Sizing = "md" | "xmd" | "lg";

type Props = {
  variant: Variant;
  sizing: Sizing;
} & Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "children" | "onClick" | "title" | "type"
>;

const VARIANT_MAP: Record<Variant, string> = {
  primary: "nf-button-variant-primary",
  secondary: "nf-button-variant-secondary",
  transparent: "nf-button-variant-transparent",
};

const SIZE_MAP: Record<Sizing, string> = {
  md: "nf-button-size-md",
  xmd: "nf-button-size-xmd",
  lg: "nf-button-size-lg",
};
export default function Button({ variant, sizing, ...rest }: Props) {
  const variantStyles = VARIANT_MAP[variant];
  const sizeStyles = SIZE_MAP[sizing];
  return (
    <button
      className={`nf-button nf-button-size-md ${sizeStyles} ${variantStyles}`}
      {...rest}
    ></button>
  );
}

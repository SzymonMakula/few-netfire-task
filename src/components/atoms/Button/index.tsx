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

/**
 * Similar to Anchor.tsx - one could very well use CSS class-names to construct buttons.
 * This however makes it possible to construct arbitrary buttons - extra margins, unsupported colors etc. Component
 * has control over the className API. Regardless, similar to anchors, buttons usually have some extra domain-specific UX attached to them.
 * Having one atomic Button helps keep all button variants in one place, reducing a chance for "rogue" components.
 * Due to project scope, I've decided to implement that myself. In real world-scenario, I'd use a component library instead. Here, I saw it as too much overhead.
 * A more complex Figma designs would include various button states & other widgets - yet another reason for a component library.
 */
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

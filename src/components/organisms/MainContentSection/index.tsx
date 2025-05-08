import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * Wrap children in a component that controls their maximum width.
 * The Figma designs showcases a page where some content is "full-width", while the other
 * follows some strict borders. One could either:
 * - Make all page components respect the boundaries and make exceptions for SOME components
 * - Make all components opt-in to this boundary-check.
 *  I chose the latter, because it was easier to implement, and in general I think a pattern of "opt-in"
 *  is easier to maintain/manage than to give exceptions.
 */
export default function MaxPageSizeWrapper({ children }: Props) {
  return (
    <div className="w-full flex justify-center items-center max-w-max-content-width">
      {children}
    </div>
  );
}

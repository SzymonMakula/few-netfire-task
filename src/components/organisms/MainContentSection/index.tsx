import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function MainContentSection({ children }: Props) {
  return (
    <section className="w-full flex justify-center items-center max-w-max-content-width">
      {children}
    </section>
  );
}

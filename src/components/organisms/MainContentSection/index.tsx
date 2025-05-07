import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function MaxPageSizeWrapper({ children }: Props) {
  return (
    <div className="w-full flex justify-center items-center max-w-max-content-width">
      {children}
    </div>
  );
}

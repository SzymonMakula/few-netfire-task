import Anchor from "@/components/atoms/Anchor";
import GradientSeparator from "@/components/organisms/GradientSeparator";

export type Discount = {
  url: URL;
  code: string;
  value: number;
};

/**
 * The Discount API feels ify, but that component definitely feels reusable. I'd probably ask what kind of discounts
 * are we to support and model the API based on that.
 */

type Props = {
  discount: Discount;
};

export default function DiscountBanner({
  discount: { url, value, code },
}: Props) {
  return (
    <aside className="flex flex-col w-full">
      <div className="flex justify-center p-5.5 items-center w-full bg-primary-300">
        <h2 className="uppercase font-medium text-black font-inter text-primary-md">
          New customers get {value}% off! Use code{" "}
          <Anchor href={url.href}>{code}</Anchor>
        </h2>
      </div>
      <GradientSeparator />
    </aside>
  );
}

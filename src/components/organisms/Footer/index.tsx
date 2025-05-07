import GradientSeparator from "@/components/organisms/GradientSeparator";
import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import LegalCopy from "@/components/organisms/Footer/LegalCopy";
import BrandHeading from "@/components/organisms/Footer/BrandHeading";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full items-center">
      <GradientSeparator />
      <MaxPageSizeWrapper>
        <div className="flex py-6 gap-16 justify-center">
          <BrandHeading />
          <LegalCopy />
        </div>
      </MaxPageSizeWrapper>
    </footer>
  );
}

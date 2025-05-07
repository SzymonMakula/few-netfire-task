import BrandLogo from "@/assets/logo.svg";

export default function BrandHeading() {
  return (
    <div className="flex gap-4 items-center">
      <BrandLogo className="min-w-16 min-h-16" />
      <h3 className="text-secondary-200 text-nowrap text-primary-xmd font-semibold">
        Brand Name
      </h3>
    </div>
  );
}

import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import Button from "@/components/atoms/Button";
import Heading from "@/app/ExampleSection/Heading";
import UnderlineAnchor from "@/components/atoms/UnderlineAnchor";

// I'd use context-related name for the Section component
export default function ExampleSection() {
  return (
    <MaxPageSizeWrapper>
      <div className="flex flex-col items-center pt-15 pb-17 gap-10">
        <header className="gap-8 flex flex-col items-center">
          <div>
            <Button sizing={"lg"} variant={"secondary"}>
              EXAMPLE SECTION
            </Button>
          </div>
          <Heading />
        </header>
        <UnderlineAnchor href={"http://localhost:8000"}>
          SEE MORE
        </UnderlineAnchor>
      </div>
    </MaxPageSizeWrapper>
  );
}

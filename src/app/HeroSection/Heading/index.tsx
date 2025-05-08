import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import Button from "@/components/atoms/Button";

export default function Heading() {
  return (
    <div className="justify-center flex w-full">
      <MaxPageSizeWrapper>
        <div className="flex flex-col gap-9 w-full">
          <div>
            <Button variant={"transparent"} sizing={"xmd"}>
              LOREM IPSUM
            </Button>
          </div>
          <header className="w-full max-w-[720px]">
            <h1 className="text-primary-300 text-primary-xlg text-start">
              <span className="gradient-text">
                {`Lorem Ipsum Dolor Sit amet `}
              </span>
              Donec cursus ligula diam, nec congue augue ultrices nec.
            </h1>
          </header>
        </div>
      </MaxPageSizeWrapper>
    </div>
  );
}

import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import Button from "@/components/atoms/Button";

/**
 * This falls apart on mobile viewports. The task mentioned only the Desktop + the need for a very, 1:1 design compliance.
 * In real world-scenario I'd contact the UX team for a fluid UI. Something based on relative positions and viewports.
 */
export default function Heading() {
  return (
    <div className="justify-center flex w-full">
      <MaxPageSizeWrapper>
        <div className="flex flex-col gap-9 w-full">
          {
            // I could add property like "isFull" to the Button interface, similar to how Bootstrap does it,
            // but I personally believe it's neater for the Button to just use width: auto and let the parent do width-adjustments. The extra DOM node won't do much damage.
          }
          <div>
            <Button variant={"transparent"} sizing={"xmd"}>
              LOREM IPSUM
            </Button>
          </div>
          <header className="w-full max-w-[720px]">
            <h1 className="text-primary-300 font-semibold text-primary-xlg text-start">
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

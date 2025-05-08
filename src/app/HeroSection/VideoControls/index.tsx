import Timer from "@/app/HeroSection/VideoControls/Timer";
import { UseVideoControls } from "@/app/HeroSection/VideoControls/useVideoControls";
import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import PlayButton from "@/app/HeroSection/VideoControls/PlayButton";
import ProgressBar from "@/app/HeroSection/VideoControls/ProgressBar";

type Props = {
  areControlsVisible: boolean;
} & Pick<UseVideoControls, "playbackState" | "togglePlayback" | "seekVideo">;
export default function VideoControls({
  areControlsVisible,
  seekVideo,
  togglePlayback,
  playbackState,
}: Props) {
  return (
    <MaxPageSizeWrapper>
      <div
        className={`bg-black/30 flex pt-5 pb-6 px-8 gap-4 items-center rounded-[10px] transition-opacity duration-150 w-full pointer-events-auto ${areControlsVisible ? "opacity-100" : "opacity-0"}`}
      >
        <PlayButton
          playbackState={playbackState}
          togglePlayback={togglePlayback}
        />
        <ProgressBar seekVideo={seekVideo} playbackState={playbackState} />
        <Timer playbackState={playbackState} />
      </div>
    </MaxPageSizeWrapper>
  );
}

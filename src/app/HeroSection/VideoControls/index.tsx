import PlayButton from "@/app/HeroSection/PlayButton";
import ProgressBar from "@/app/HeroSection/ProgressBar";
import Timer from "@/app/HeroSection/Timer";
import { UseVideoControls } from "@/app/HeroSection/VideoControls/useVideoControls";

type Props = {
  areControlsVisible: boolean;
} & Pick<UseVideoControls, "playbackState" | "togglePlayback" | "onSeekTrack">;
export default function VideoControls({
  areControlsVisible,
  onSeekTrack,
  togglePlayback,
  playbackState,
}: Props) {
  return (
    <div
      className={`bg-black/30 flex pt-5 pb-6 px-8 gap-4 items-center rounded-[10px] transition-opacity duration-150 w-full pointer-events-auto ${areControlsVisible ? "opacity-100" : "opacity-0"}`}
    >
      <PlayButton
        playbackState={playbackState}
        togglePlayback={togglePlayback}
      />
      <ProgressBar onVideoSeek={onSeekTrack} playbackState={playbackState} />
      <Timer playbackState={playbackState} />
    </div>
  );
}

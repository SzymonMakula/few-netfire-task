import PlayIcon from "@/app/Hero/VideoPlayer/PlayButton/play.svg";
import PauseIcon from "./pause.svg";
import { PlaybackState } from "@/app/Hero/VideoPlayer/useVideoControls";

type Props = {
  togglePlayback: VoidFunction;
  playbackState: PlaybackState;
};
export default function PlayButton({ togglePlayback, playbackState }: Props) {
  const isPlaying = playbackState.state === "playing";
  const buttonTitle = isPlaying ? "Pause video" : "Resume video";

  return (
    <button
      onClick={togglePlayback}
      type="button"
      title={buttonTitle}
      className="min-w-12 rounded-full flex justify-center items-center bg-black min-h-12 fill-tertiary-100"
    >
      {isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  );
}

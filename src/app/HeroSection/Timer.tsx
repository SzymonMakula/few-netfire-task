import { PlaybackState } from "@/app/HeroSection/VideoControls/useVideoControls";

function formatTime(state: PlaybackState): string {
  const minutes = Math.floor(state.currentTime / 60);
  const seconds = Math.trunc(state.currentTime - minutes * 60);
  const padNumber = (val: number): string => val.toString().padStart(2, "0");

  return `${padNumber(minutes)}:${padNumber(seconds)}`;
}

type Props = {
  playbackState: PlaybackState;
};
export default function Timer({ playbackState }: Props) {
  return (
    <span className="text-primary-500 text-[16px] leading-4">
      {formatTime(playbackState)}
    </span>
  );
}

import { PlaybackState } from "@/app/HeroSection/VideoControls/useVideoControls";

/**
 * I'd normally use a library for that, but from what I've looked,
 * nothing quite matched my requirements. In a production project I'd expect the minutes/seconds transforms to be
 * handled by a third-party library, instead. Again, the given the context, this was the fastest approach. I don't
 * like tying project to a third-party dependency unless it's really beneficial. Here, the operations are trivial.
 */
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

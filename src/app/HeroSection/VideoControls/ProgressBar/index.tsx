import { MouseEventHandler } from "react";
import { PlaybackState } from "@/app/HeroSection/VideoControls/useVideoControls";

// I define progress styles in CSS-modules, because the syntax is much clearer than it's Tailwind-API equivalent.
import styles from "./styles.module.css";
function calculateProgress(state: PlaybackState): number {
  return state.currentTime / state.duration;
}

type Props = {
  playbackState: PlaybackState;
  seekVideo: (time: number) => void;
};
export default function ProgressBar({ playbackState, seekVideo }: Props) {
  /** Move video track based on progress position click. This could easily be tweaked to work with "dragging" actions,
   * one would need different handler for that, but the seekVideo API already in place.
   */
  const onProgressClick: MouseEventHandler<HTMLProgressElement> = (event) => {
    const progressBar = event.currentTarget as HTMLProgressElement;
    const parentOffset = progressBar.offsetParent as HTMLElement;
    const pos =
      (event.pageX - progressBar.offsetLeft - parentOffset.offsetLeft) /
      progressBar.offsetWidth;
    seekVideo(pos * playbackState.duration);
  };

  return (
    <progress
      onClick={onProgressClick}
      value={calculateProgress(playbackState)}
      className={styles.progress}
    />
  );
}

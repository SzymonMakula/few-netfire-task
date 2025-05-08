import { MouseEventHandler } from "react";
import { PlaybackState } from "@/app/HeroSection/VideoControls/useVideoControls";
import styles from "./styles.module.css";
function calculateProgress(state: PlaybackState): number {
  return state.currentTime / state.duration;
}

type Props = {
  playbackState: PlaybackState;
  seekVideo: (time: number) => void;
};
export default function ProgressBar({ playbackState, seekVideo }: Props) {
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
    ></progress>
  );
}

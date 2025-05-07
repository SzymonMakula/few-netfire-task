import { MouseEventHandler } from "react";
import { PlaybackState } from "@/app/HeroSection/useVideoControls";
import styles from "./styles.module.css";
function calculateProgress(state: PlaybackState): number {
  return state.currentTime / state.duration;
}

type Props = {
  playbackState: PlaybackState;
  onVideoSeek: MouseEventHandler<HTMLProgressElement>;
};
export default function ProgressBar({ playbackState, onVideoSeek }: Props) {
  return (
    <progress
      onClick={onVideoSeek}
      value={calculateProgress(playbackState)}
      className={styles.progress}
    ></progress>
  );
}

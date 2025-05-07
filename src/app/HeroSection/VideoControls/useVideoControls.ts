import {
  MouseEventHandler,
  ReactEventHandler,
  RefObject,
  useState,
} from "react";

export type PlaybackState = {
  state: "playing" | "paused" | "ended";
  currentTime: number;
  duration: number;
};
export interface UseVideoControls {
  playbackState: PlaybackState;
  onSeekTrack: MouseEventHandler<HTMLProgressElement>;
  togglePlayback: VoidFunction;
  onTrackTimeUpdate: ReactEventHandler<HTMLVideoElement>;
  setPlayState: VoidFunction;
  setPauseState: VoidFunction;
  setEndState: VoidFunction;
}
export function useVideoControls(
  videoRef: RefObject<HTMLVideoElement | null>,
): UseVideoControls {
  const [playbackState, setPlaybackState] = useState<PlaybackState>({
    currentTime: 0,
    duration: 1,
    state: "playing",
  });
  const onSeekTrack: MouseEventHandler<HTMLProgressElement> = (event) => {
    if (videoRef.current === null)
      throw new Error(
        "Illegal seek call before HTMLVideoElement initialization",
      );

    const progressBar = event.currentTarget as HTMLProgressElement;

    const parentOffset = progressBar.offsetParent as HTMLElement;
    const pos =
      (event.pageX - progressBar.offsetLeft - parentOffset.offsetLeft) /
      progressBar.offsetWidth;
    videoRef.current.currentTime = pos * playbackState.duration;
  };

  const togglePlayback = () => {
    const videoElement = videoRef.current;
    if (videoElement === null)
      throw new Error(
        "Illegal seek call before HTMLVideoElement initialization",
      );

    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  const onTrackTimeUpdate: ReactEventHandler<HTMLVideoElement> = (event) => {
    const { currentTime, duration } = event.currentTarget;
    setPlaybackState((prevState) => ({
      duration,
      currentTime,
      state: prevState.state,
    }));
  };

  const setPlayState = () => {
    setPlaybackState((prevState) => ({ ...prevState, state: "playing" }));
  };
  const setPauseState = () => {
    setPlaybackState((prevState) => ({ ...prevState, state: "paused" }));
  };
  const setEndState = () => {
    setPlaybackState((prevState) => ({ ...prevState, state: "ended" }));
  };

  return {
    onSeekTrack,
    onTrackTimeUpdate,
    playbackState,
    setPauseState,
    setPlayState,
    togglePlayback,
    setEndState,
  };
}

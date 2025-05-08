import { ReactEventHandler, RefObject, useState } from "react";

export type PlaybackState = {
  state: "playing" | "paused" | "ended";
  currentTime: number;
  duration: number;
};
export interface UseVideoControls {
  playbackState: PlaybackState;
  seekVideo: (time: number) => void;
  togglePlayback: VoidFunction;
  updateTrackTime: (time: number, duration: number) => void;
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
  const seekVideo = (time: number) => {
    if (videoRef.current === null)
      throw new Error(
        "Illegal seek call before HTMLVideoElement initialization",
      );

    videoRef.current.currentTime = time;
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

  const updateTrackTime = (time: number, duration: number) => {
    setPlaybackState((prevState) => ({
      duration,
      currentTime: time,
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
    seekVideo,
    updateTrackTime,
    playbackState,
    setPauseState,
    setPlayState,
    togglePlayback,
    setEndState,
  };
}

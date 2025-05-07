import ProgressBar from "@/app/Hero/VideoPlayer/ProgressBar";
import MainContentSection from "@/components/organisms/MainContentSection";
import { useRef } from "react";
import PlayButton from "@/app/Hero/VideoPlayer/PlayButton";
import Timer from "@/app/Hero/VideoPlayer/Timer";
import { useVideoControls } from "@/app/Hero/VideoPlayer/useVideoControls";
import Overlay from "@/app/Hero/VideoPlayer/Overlay";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/9206132/9206132-uhd_2560_1440_25fps.mp4";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    onSeekTrack,
    onTrackTimeUpdate,
    playbackState,
    togglePlayback,
    setPauseState,
    setPlayState,
    setEndState,
  } = useVideoControls(videoRef);

  return (
    <figure className="relative">
      <Overlay playbackState={playbackState} />
      <video
        onPlay={setPlayState}
        onPause={setPauseState}
        onEnded={setEndState}
        onClick={togglePlayback}
        ref={videoRef}
        onTimeUpdate={onTrackTimeUpdate}
        controls={false}
        muted={true}
        autoPlay={true}
        className="w-full"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="w-full absolute bottom-0 pb-20 flex justify-center">
        <MainContentSection>
          <div className="bg-black/30 flex pt-5 pb-6 px-8 gap-4 items-center rounded-[10px] w-full">
            <PlayButton
              playbackState={playbackState}
              togglePlayback={togglePlayback}
            />
            <ProgressBar
              onVideoSeek={onSeekTrack}
              playbackState={playbackState}
            />
            <Timer playbackState={playbackState} />
          </div>
        </MainContentSection>
      </div>
    </figure>
  );
}

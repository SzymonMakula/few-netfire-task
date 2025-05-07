import ProgressBar from "@/app/HeroSection/ProgressBar";
import MainContentSection from "@/components/organisms/MainContentSection";
import { useRef, useState } from "react";
import PlayButton from "@/app/HeroSection/PlayButton";
import Timer from "@/app/HeroSection/Timer";
import { useVideoControls } from "@/app/HeroSection/useVideoControls";
import Overlay from "@/app/HeroSection/Overlay";
import Heading from "@/app/HeroSection/Heading";

const VIDEO_SRC =
  "https://videos.pexels.com/video-files/9206132/9206132-uhd_2560_1440_25fps.mp4";

export default function HeroSection() {
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

  const [showControls, setShowControls] = useState(false);

  return (
    <figure
      className="relative"
      onPointerEnter={() => setShowControls(true)}
      onPointerLeave={() => setShowControls(false)}
    >
      <Overlay playbackState={playbackState} />
      <video
        onClick={togglePlayback}
        onPlay={setPlayState}
        onPause={setPauseState}
        onEnded={setEndState}
        ref={videoRef}
        onTimeUpdate={onTrackTimeUpdate}
        controls={false}
        muted={true}
        autoPlay={true}
        className="w-full"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="w-full flex-col items-center absolute bottom-0 pb-44 flex gap-16 pointer-events-none">
        <Heading />
        <MainContentSection>
          <div
            className={`bg-black/30 flex pt-5 pb-6 px-8 gap-4 items-center rounded-[10px] transition-opacity duration-150 w-full pointer-events-auto ${showControls ? "opacity-100" : "opacity-0"}`}
          >
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

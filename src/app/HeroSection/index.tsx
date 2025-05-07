import MaxPageSizeWrapper from "@/components/organisms/MainContentSection";
import { useRef, useState } from "react";
import { useVideoControls } from "@/app/HeroSection/VideoControls/useVideoControls";
import Overlay from "@/app/HeroSection/Overlay";
import Heading from "@/app/HeroSection/Heading";
import VideoControls from "@/app/HeroSection/VideoControls";

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
        <MaxPageSizeWrapper>
          <VideoControls
            areControlsVisible={showControls}
            togglePlayback={togglePlayback}
            playbackState={playbackState}
            onSeekTrack={onSeekTrack}
          />
        </MaxPageSizeWrapper>
      </div>
    </figure>
  );
}

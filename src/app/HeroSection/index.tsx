import { ReactEventHandler, useRef, useState } from "react";
import { useVideoControls } from "@/app/HeroSection/VideoControls/useVideoControls";
import Overlay from "@/app/HeroSection/Overlay";
import Heading from "@/app/HeroSection/Heading";
import VideoControls from "@/app/HeroSection/VideoControls";

/**
 * If it's the only place where any video SRC is mentioned, I'd prefer keep it here.
 */
const VIDEO_SRC =
  "https://videos.pexels.com/video-files/9206132/9206132-uhd_2560_1440_25fps.mp4";

/**
 * I opted to implement video-controls without third party libraries for the following reasons:
 * - I don't have a solid experience with a concrete video player framework. From my experience,
 *  heavy customization of a complete component-library usually resulted in prying-open it's guts (resulting in
 *  messy code, esoteric checks etc.).
 *  - Conscient of the time limit, I didn't want to spend too much time testing out different video playback libraries.
 *  I don't fancy any in particular, and I was worried I'd inevitably end up scrapping my work once a given library proved to be too opinionated.
 *  - Implementing the playback controls was just an interesting task to be had.
 *  I based my implementation on the MDN docs https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Video_player_styling_basics.
 *  If the actual project involved multiple video players, I'd strongly reconsider adjusting to a library. Here, it's just simpler and faster to do basic JS. It's very customizable, too -
 *  might work for complex Figma projects.
 *
 */

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    seekVideo,
    updateTrackTime,
    playbackState,
    togglePlayback,
    setPauseState,
    setPlayState,
    setEndState,
  } = useVideoControls(videoRef);
  const [showControls, setShowControls] = useState(false);

  const onTrackTimeUpdate: ReactEventHandler<HTMLVideoElement> = (event) => {
    const { currentTime, duration } = event.currentTarget;
    updateTrackTime(currentTime, duration);
  };

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
        <VideoControls
          areControlsVisible={showControls}
          togglePlayback={togglePlayback}
          playbackState={playbackState}
          seekVideo={seekVideo}
        />
      </div>
    </figure>
  );
}

import { PlaybackState } from "@/app/HeroSection/VideoControls/useVideoControls";

/**
 * Overlay displayed over video/hero section. Can be customized based on PlaybackState, i.e.
 * different opacity/effects for paused/stopped video. Dependency on PlaybackState gives a window for expansion.
 */

type Props = {
  playbackState: PlaybackState;
};
export default function Overlay({ playbackState }: Props) {
  switch (playbackState.state) {
    case "playing":
      return (
        <div className="w-full absolute h-full bg-black/30 pointer-events-none"></div>
      );
    case "paused":
      return (
        <div className="w-full absolute h-full bg-black/50 pointer-events-none"></div>
      );
    case "ended":
      return (
        <div className="w-full absolute h-full bg-black/50 pointer-events-none"></div>
      );
  }
}

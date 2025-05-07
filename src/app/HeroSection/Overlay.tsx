import { PlaybackState } from "@/app/HeroSection/useVideoControls";

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

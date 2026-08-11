import type { RepeatMode } from "../types/music";
import "./PlayerControls.css";

interface PlayerControlsProps {
  isPlaying: boolean;
  isReady: boolean;

  volume: number;
  isMuted: boolean;

  shuffle: boolean;
  repeatMode: RepeatMode;

  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;

  onVolumeChange: (volume: number) => void;
  onMuteToggle: () => void;

  onShuffleToggle: () => void;
  onRepeatToggle: () => void;
}

function PlayerControls({
  isPlaying,
  isReady,

  volume,
  isMuted,

  shuffle,
  repeatMode,

  onPlayPause,
  onPrevious,
  onNext,

  onVolumeChange,
  onMuteToggle,

  onShuffleToggle,
  onRepeatToggle,
}: PlayerControlsProps) {
  return (
    <div className="player-controls">

      <div className="player-main-controls">
        <button
          type="button"
          onClick={onPrevious}
          disabled={!isReady}
          aria-label="Previous song"
          title="Previous"
        >
          ◀
        </button>

        <button
          type="button"
          onClick={onPlayPause}
          disabled={!isReady}
          aria-label={
            isPlaying
              ? "Pause song"
              : "Play song"
          }
          title={
            isPlaying
              ? "Pause"
              : "Play"
          }
        >
          {isPlaying ? "Ⅱ" : "▶"}
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!isReady}
          aria-label="Next song"
          title="Next"
        >
          ▶
        </button>
      </div>

      <div className="player-secondary-controls">
        <button
          type="button"
          onClick={onShuffleToggle}
          disabled={!isReady}
          aria-label="Toggle shuffle"
          title="Shuffle"
          className={
            shuffle
              ? "control-active"
              : ""
          }
        >
          ⇄
        </button>

        <button
          type="button"
          onClick={onRepeatToggle}
          disabled={!isReady}
          aria-label="Change repeat mode"
          title={`Repeat: ${repeatMode}`}
          className={
            repeatMode !== "off"
              ? "control-active"
              : ""
          }
        >
          ↻
        </button>
      </div>

      <div className="player-volume">
        <button
          type="button"
          onClick={onMuteToggle}
          disabled={!isReady}
          aria-label={
            isMuted
              ? "Unmute"
              : "Mute"
          }
          title={
            isMuted
              ? "Unmute"
              : "Mute"
          }
        >
          {isMuted ? "×" : "♪"}
        </button>

        <input
          type="range"
          min="0"
          max="100"
          value={
            isMuted
              ? 0
              : volume
          }
          onChange={(event) =>
            onVolumeChange(
              Number(event.target.value)
            )
          }
          disabled={!isReady}
          aria-label="Volume"
        />
      </div>
    </div>
  );
}

export default PlayerControls;
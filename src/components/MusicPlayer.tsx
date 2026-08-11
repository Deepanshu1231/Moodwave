import { useEffect } from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import type { Song } from "../types/music";
import PlayerControls from "./PlayerControls";

interface MusicPlayerProps {
  songs: Song[];
  onTrackChange?: (index: number) => void;
  titleLabel?: string;
}

function MusicPlayer({
  songs,
  onTrackChange,
  titleLabel = "NOW PLAYING",
}: MusicPlayerProps) {
  const {
    currentIndex,
    currentSong,

    isPlaying,
    isReady,

    currentTime,
    duration,

    volume,
    isMuted,

    shuffle,
    repeatMode,

    togglePlay,
    next,
    previous,

    seek,

    setVolume,
    toggleMute,

    toggleShuffle,
    cycleRepeatMode,
  } = useMusicPlayer(songs);

  useEffect(() => {
    onTrackChange?.(currentIndex);
  }, [currentIndex, onTrackChange]);

  if (songs.length === 0) {
    return (
      <div className="music-player-empty">
        <p>
          No songs in this playlist yet.
        </p>
      </div>
    );
  }

  const formatTime = (
    seconds: number
  ): string => {
    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const minutes =
      Math.floor(seconds / 60);

    const remainingSeconds =
      Math.floor(seconds % 60);

    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="music-player">

      <div
        id="yt-player"
        style={{
          position: "fixed",
          left: "-9999px",
          top: "0",
          width: "200px",
          height: "200px",
          opacity: 0,
          pointerEvents: "none",
        }}
      />

      <section className="now-playing">
        <p className="now-playing-label">
          {titleLabel}
        </p>

        <h2 className="song-title">
          {currentSong.title}
        </h2>

        <p className="song-artist">
          {currentSong.artist}
        </p>
      </section>

      <section className="player-progress">
        <div className="progress-times">
          <span>
            {formatTime(currentTime)}
          </span>

          <span>
            {formatTime(duration)}
          </span>
        </div>

        <input
          className="progress-slider"
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          step="0.1"
          onChange={(event) =>
            seek(
              Number(
                event.target.value
              )
            )
          }
          disabled={!isReady}
          aria-label="Song progress"
        />
      </section>

      <PlayerControls
        isPlaying={isPlaying}
        isReady={isReady}
        volume={volume}
        isMuted={isMuted}
        shuffle={shuffle}
        repeatMode={repeatMode}
        onPlayPause={togglePlay}
        onPrevious={previous}
        onNext={next}
        onVolumeChange={setVolume}
        onMuteToggle={toggleMute}
        onShuffleToggle={
          toggleShuffle
        }
        onRepeatToggle={
          cycleRepeatMode
        }
      />
    </div>
  );
}

export default MusicPlayer;

import { useCallback, useEffect, useRef, useState } from "react";
import type { RepeatMode, Song } from "../types/music";
import { loadYouTubeAPI } from "../services/youtubeApi";

interface UseMusicPlayerReturn {
  currentIndex: number;
  currentSong: Song;

  isPlaying: boolean;
  isReady: boolean;

  currentTime: number;
  duration: number;

  volume: number;
  isMuted: boolean;

  shuffle: boolean;
  repeatMode: RepeatMode;

  play: () => void;
  pause: () => void;
  togglePlay: () => void;

  next: () => void;
  previous: () => void;

  seek: (seconds: number) => void;

  setVolume: (volume: number) => void;
  toggleMute: () => void;

  toggleShuffle: () => void;
  cycleRepeatMode: () => void;
}

function useMusicPlayer(
  songs: Song[]
): UseMusicPlayerReturn {
  const playerRef = useRef<any>(null);

  /*
   * Refs are used for values that need to be
   * accessed by asynchronous YouTube callbacks.
   *
   * This avoids stale React state inside callbacks.
   */
  const songsRef = useRef<Song[]>(songs);

  const currentIndexRef = useRef(0);

  const shuffleRef = useRef(false);

  const repeatModeRef =
    useRef<RepeatMode>("off");

  const volumeRef = useRef(100);

  const progressIntervalRef =
    useRef<number | null>(null);

  const unavailableTrackIdsRef =
    useRef<Set<string>>(new Set());

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [isReady, setIsReady] =
    useState(false);

  const [currentTime, setCurrentTime] =
    useState(0);

  const [duration, setDuration] =
    useState(0);

  const [volume, setVolumeState] =
    useState(100);

  const [isMuted, setIsMuted] =
    useState(false);

  const [shuffle, setShuffle] =
    useState(false);

  const [repeatMode, setRepeatMode] =
    useState<RepeatMode>("off");

  /*
   * Keep refs synchronized with React state.
   */
  useEffect(() => {
    songsRef.current = songs;
  }, [songs]);

  useEffect(() => {
    currentIndexRef.current =
      currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    shuffleRef.current = shuffle;
  }, [shuffle]);

  useEffect(() => {
    repeatModeRef.current =
      repeatMode;
  }, [repeatMode]);

  useEffect(() => {
    volumeRef.current = volume;
  }, [volume]);

  /*
   * Start tracking playback progress.
   */
  const startProgressTracking =
    useCallback(() => {
      if (
        progressIntervalRef.current !==
        null
      ) {
        window.clearInterval(
          progressIntervalRef.current
        );
      }

      progressIntervalRef.current =
        window.setInterval(() => {
          if (!playerRef.current) {
            return;
          }

          try {
            const current =
              playerRef.current.getCurrentTime();

            const total =
              playerRef.current.getDuration();

            setCurrentTime(
              current || 0
            );

            setDuration(
              total || 0
            );
          } catch {
            /*
             * YouTube player may not be
             * ready during initialization.
             */
          }
        }, 500);
    }, []);

  /*
   * Stop progress tracking.
   */
  const stopProgressTracking =
    useCallback(() => {
      if (
        progressIntervalRef.current !==
        null
      ) {
        window.clearInterval(
          progressIntervalRef.current
        );

        progressIntervalRef.current =
          null;
      }
    }, []);

  /*
   * Calculate next song.
   *
   * This function reads shuffle/repeat
   * from refs so it always gets the
   * latest values.
   */
  const calculateNextIndex =
    useCallback(
      (ignoreRepeatOne = false) => {
        const currentSongs =
          songsRef.current;

        if (currentSongs.length === 0) {
          return 0;
        }

        const current =
          currentIndexRef.current;

        const isShuffle =
          shuffleRef.current;

        const currentRepeatMode =
          repeatModeRef.current;

        const unavailableIds =
          unavailableTrackIdsRef.current;

        const canPlayIndex =
          (index: number) =>
            !unavailableIds.has(
              currentSongs[index].youtubeId
            );

        if (
          currentRepeatMode === "one" &&
          !ignoreRepeatOne
        ) {
          if (canPlayIndex(current)) {
            return current;
          }
        }

        /*
         * Shuffle mode.
         */
        if (
          isShuffle &&
          currentSongs.length > 1
        ) {
          let attempts = 0;
          let nextIndex = current;

          while (
            nextIndex === current &&
            attempts < 10
          ) {
            nextIndex = Math.floor(
              Math.random() *
                currentSongs.length
            );
            attempts += 1;
          }

          if (!canPlayIndex(nextIndex)) {
            const availableIndex =
              currentSongs.findIndex(
                (_, index) =>
                  canPlayIndex(index)
              );

            return availableIndex === -1
              ? current
              : availableIndex;
          }

          return nextIndex;
        }

        /*
         * End of playlist.
         */
        let nextIndex = current + 1;

        if (
          current ===
          currentSongs.length - 1
        ) {
          if (
            currentRepeatMode ===
            "all"
          ) {
            nextIndex = 0;
          } else {
            if (!canPlayIndex(current)) {
              const availableIndex =
                currentSongs.findIndex(
                  (_, index) =>
                    canPlayIndex(index)
                );

              return availableIndex === -1
                ? current
                : availableIndex;
            }

            return current;
          }
        }

        while (
          nextIndex !== current &&
          !canPlayIndex(nextIndex)
        ) {
          nextIndex += 1;

          if (
            nextIndex >=
            currentSongs.length
          ) {
            if (
              currentRepeatMode ===
              "all"
            ) {
              nextIndex = 0;
            } else {
              return current;
            }
          }
        }

        return nextIndex;
      },
      []
    );

  /*
   * Play next song.
   */
  const next = useCallback(() => {
    const currentSongs =
      songsRef.current;

    if (
      currentSongs.length === 0 ||
      !playerRef.current
    ) {
      return;
    }

    const currentRepeatMode =
      repeatModeRef.current;

    const isShuffle =
      shuffleRef.current;

    /*
     * Repeat current song.
     */
    if (
      currentRepeatMode === "one"
    ) {
      playerRef.current.seekTo(
        0,
        true
      );

      playerRef.current.playVideo();

      setCurrentTime(0);
      setIsPlaying(true);

      return;
    }

    /*
     * Playlist finished and repeat
     * is disabled.
     */
    if (
      currentIndexRef.current ===
        currentSongs.length - 1 &&
      !isShuffle &&
      currentRepeatMode === "off"
    ) {
      playerRef.current.seekTo(
        0,
        true
      );

      playerRef.current.pauseVideo();

      setCurrentTime(0);
      setIsPlaying(false);

      return;
    }

    const nextIndex =
      calculateNextIndex();

    const isSameIndex =
      nextIndex === currentIndexRef.current;
    const availableIndex =
      currentSongs.findIndex(
        (_, index) =>
          !unavailableTrackIdsRef.current.has(
            currentSongs[index].youtubeId
          )
      );

    if (
      availableIndex === -1
    ) {
      playerRef.current.seekTo(
        0,
        true
      );

      playerRef.current.pauseVideo();

      setCurrentTime(0);
      setIsPlaying(false);

      return;
    }

    if (
      isSameIndex &&
      availableIndex !== -1
    ) {
      currentIndexRef.current =
        availableIndex;

      setCurrentIndex(
        availableIndex
      );
    } else {
      currentIndexRef.current =
        nextIndex;

      setCurrentIndex(nextIndex);
    }

    setCurrentTime(0);

    playerRef.current.loadVideoById(
      currentSongs[
        currentIndexRef.current
      ].youtubeId
    );

    setIsPlaying(true);
  }, [calculateNextIndex]);

  /*
   * Play previous song.
   */
  const previous = useCallback(() => {
    const currentSongs =
      songsRef.current;

    if (
      currentSongs.length === 0 ||
      !playerRef.current
    ) {
      return;
    }

    /*
     * Standard music player behaviour:
     * if current song is already playing
     * for more than 3 seconds,
     * previous means restart current song.
     */
    if (currentTime > 3) {
      playerRef.current.seekTo(
        0,
        true
      );

      setCurrentTime(0);

      return;
    }

    const current =
      currentIndexRef.current;

    const previousIndex =
      current === 0
        ? currentSongs.length - 1
        : current - 1;

    currentIndexRef.current =
      previousIndex;

    setCurrentIndex(
      previousIndex
    );

    setCurrentTime(0);

    playerRef.current.loadVideoById(
      currentSongs[
        previousIndex
      ].youtubeId
    );

    setIsPlaying(true);
  }, [currentTime]);

  /*
   * Play current song.
   */
  const play = useCallback(() => {
    if (
      !playerRef.current ||
      !isReady
    ) {
      return;
    }

    playerRef.current.playVideo();
  }, [isReady]);

  /*
   * Pause current song.
   */
  const pause = useCallback(() => {
    if (
      !playerRef.current ||
      !isReady
    ) {
      return;
    }

    playerRef.current.pauseVideo();
  }, [isReady]);

  /*
   * Toggle play/pause.
   */
  const togglePlay = useCallback(() => {
    if (
      !playerRef.current ||
      !isReady
    ) {
      return;
    }

    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [
    isPlaying,
    isReady,
    pause,
    play,
  ]);

  /*
   * Seek.
   */
  const seek = useCallback(
    (seconds: number) => {
      if (
        !playerRef.current ||
        !isReady
      ) {
        return;
      }

      playerRef.current.seekTo(
        seconds,
        true
      );

      setCurrentTime(seconds);
    },
    [isReady]
  );

  /*
   * Set volume.
   */
  const setVolume = useCallback(
    (newVolume: number) => {
      if (!playerRef.current) {
        return;
      }

      const safeVolume =
        Math.min(
          100,
          Math.max(0, newVolume)
        );

      playerRef.current.setVolume(
        safeVolume
      );

      volumeRef.current =
        safeVolume;

      setVolumeState(
        safeVolume
      );

      if (
        safeVolume > 0 &&
        isMuted
      ) {
        playerRef.current.unMute();

        setIsMuted(false);
      }
    },
    [isMuted]
  );

  /*
   * Toggle mute.
   */
  const toggleMute =
    useCallback(() => {
      if (!playerRef.current) {
        return;
      }

      if (isMuted) {
        playerRef.current.unMute();

        playerRef.current.setVolume(
          volumeRef.current
        );

        setIsMuted(false);
      } else {
        playerRef.current.mute();

        setIsMuted(true);
      }
    }, [isMuted]);

  /*
   * Toggle shuffle.
   */
  const toggleShuffle =
    useCallback(() => {
      setShuffle(
        (current) => !current
      );
    }, []);

  /*
   * Cycle repeat:
   *
   * OFF → ALL → ONE → OFF
   */
  const cycleRepeatMode =
    useCallback(() => {
      setRepeatMode(
        (current) => {
          if (current === "off") {
            return "all";
          }

          if (current === "all") {
            return "one";
          }

          return "off";
        }
      );
    }, []);

  /*
   * =========================================================
   * YouTube PLAYER LIFECYCLE
   * =========================================================
   *
   * IMPORTANT:
   *
   * The player is recreated ONLY when the playlist changes.
   *
   * Changing volume, shuffle, repeat, etc.
   * does NOT recreate the YouTube player.
   */
  useEffect(() => {
    if (songs.length === 0) {
      return;
    }

    let cancelled = false;

    const createPlayer =
      async () => {
        try {
          const YT =
            await loadYouTubeAPI();

          if (cancelled) {
            return;
          }

          if (playerRef.current) {
            return;
          }

          playerRef.current =
            new YT.Player(
              "yt-player",
              {
                height: "200",
                width: "200",

                videoId:
                  songsRef.current[0]
                    .youtubeId,

                playerVars: {
                  autoplay: 0,
                  controls: 0,
                  disablekb: 1,
                  fs: 0,
                  playsinline: 1,
                  rel: 0,
                  origin:
                    window.location
                      .origin,
                },

                events: {
                  /*
                   * Player ready.
                   */
                  onReady: (
                    event: any
                  ) => {
                    if (cancelled) {
                      return;
                    }

                    event.target.setVolume(
                      volumeRef.current
                    );

                    setIsReady(true);

                    setDuration(
                      event.target
                        .getDuration() ||
                        0
                    );
                  },

                  /*
                   * Player state changed.
                   */
                  onStateChange: (
                    event: any
                  ) => {
                    if (cancelled) {
                      return;
                    }

                    const state =
                      event.data;

                    /*
                     * PLAYING
                     */
                    if (
                      state ===
                      YT.PlayerState
                        .PLAYING
                    ) {
                      setIsPlaying(
                        true
                      );

                      startProgressTracking();
                    }

                    /*
                     * PAUSED
                     */
                    if (
                      state ===
                      YT.PlayerState
                        .PAUSED
                    ) {
                      setIsPlaying(
                        false
                      );

                      stopProgressTracking();
                    }

                    /*
                     * ENDED
                     */
                    if (
                      state ===
                      YT.PlayerState
                        .ENDED
                    ) {
                      stopProgressTracking();

                      if (
                        repeatModeRef.current ===
                        "one"
                      ) {
                        event.target.seekTo(
                          0,
                          true
                        );

                        event.target.playVideo();

                        setCurrentTime(
                          0
                        );

                        setIsPlaying(
                          true
                        );

                        return;
                      }

                      next();
                    }
                  },

                  /*
                   * YouTube playback error.
                   */
                  onError: (
                    event: any
                  ) => {
                    if (cancelled) {
                      return;
                    }

                    const errorCode = event.data;

                    if (
                      errorCode === 100 ||
                      errorCode === 101 ||
                      errorCode === 150
                    ) {
                      const currentSongs =
                        songsRef.current;

                      const currentSong =
                        currentSongs[
                          currentIndexRef.current
                        ];

                      if (currentSong) {
                        unavailableTrackIdsRef.current.add(
                          currentSong.youtubeId
                        );
                      }

                      next();

                      return;
                    }

                    console.error(
                      "YouTube player error:",
                      errorCode
                    );
                  },
                },
              }
            );
        } catch (error) {
          console.error(
            "Unable to initialize YouTube player:",
            error
          );
        }
      };

    createPlayer();

    return () => {
      cancelled = true;

      stopProgressTracking();

      if (
        playerRef.current?.destroy
      ) {
        playerRef.current.destroy();
      }

      playerRef.current = null;

      setIsReady(false);
      setIsPlaying(false);
    };
  }, [
    songs,
    next,
    startProgressTracking,
    stopProgressTracking,
  ]);

  /*
   * Reset playback state when
   * the playlist changes.
   */
  useEffect(() => {
    unavailableTrackIdsRef.current.clear();
    currentIndexRef.current = 0;

    setCurrentIndex(0);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [songs]);

  const currentSong =
    songs[currentIndex] ?? {
      id: "",
      title: "No song",
      artist: "",
      youtubeId: "",
    };

  return {
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

    play,
    pause,
    togglePlay,

    next,
    previous,

    seek,

    setVolume,
    toggleMute,

    toggleShuffle,
    cycleRepeatMode,
  };
}

export default useMusicPlayer;
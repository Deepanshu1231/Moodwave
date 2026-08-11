import "../App.css";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  categoryLabels,
  playlistsByCategory,
} from "../data/playlists";

import type {
  Category,
} from "../types/music";

import MusicPlayer from "./MusicPlayer";
import SceneBackground from "./SceneBackground";

import useScene from "../hooks/useScene";


const isCategory = (
  value: string | undefined
): value is Category => {
  return (
    value === "hindi" ||
    value === "punjabi" ||
    value === "english"
  );
};


function PlayerPage() {
  const sceneIndexRef = useRef(0);

  const {
    category,
    id,
  } = useParams<{
    category: string;
    id: string;
  }>();

  const navigate = useNavigate();

  const validCategory =
    isCategory(category);

  const playlists =
    validCategory
      ? playlistsByCategory[category]
      : [];

  const playlist =
    playlists.find(
      (item) => item.id === id
    );

  /*
   * Hooks must always run in the same order.
   * Therefore useScene is called even when
   * the playlist is not found.
   */
  const scenes =
    playlist?.scenes ?? [];

  const [backgroundOn, setBackgroundOn] = useState(true);

  const {
    currentScene,
    currentIndex: sceneIndex,
    setScene,
  } = useScene(scenes);

  useEffect(() => {
    sceneIndexRef.current =
      sceneIndex;
  }, [sceneIndex]);


  const handleTrackChange =
    useCallback(
      (trackIndex: number) => {
        if (!playlist) {
          return;
        }

        const sceneCount =
          playlist.scenes.length;

        const songCount =
          playlist.songs.length;

        if (
          sceneCount === 0 ||
          songCount === 0
        ) {
          return;
        }

        const nextSceneIndex =
          Math.min(
            sceneCount - 1,
            Math.floor(
              (trackIndex * sceneCount) /
                songCount
            )
          );

        if (
          nextSceneIndex !==
          sceneIndexRef.current
        ) {
          sceneIndexRef.current =
            nextSceneIndex;

          setScene(nextSceneIndex);
        }
      },
      [
        playlist,
        setScene,
      ]
    );


  const handleManualSceneChange =
    useCallback(() => {
      if (!playlist) {
        return;
      }

      const sceneCount =
        playlist.scenes.length;

      if (sceneCount === 0) {
        return;
      }

      const nextSceneIndex =
        (sceneIndexRef.current + 1) %
        sceneCount;

      sceneIndexRef.current =
        nextSceneIndex;

      setScene(nextSceneIndex);
    }, [
      playlist,
      setScene,
    ]);


  /*
   * Only after all hooks have been called
   * do we handle the invalid playlist case.
   */
  if (!playlist) {
    return (
      <main className="not-found-page">
        <div className="not-found-content">

          <span className="eyebrow">
            MOODWAVE
          </span>

          <h1>
            Vibe not found.
          </h1>

          <p>
            This particular mood seems
            to have disappeared into the night.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
          >
            ← Back to Vibes
          </button>

        </div>
      </main>
    );
  }


  const categoryLabel =
    validCategory
      ? categoryLabels[category]
      : "";


  const toggleBackground =
    useCallback(() => {
      setBackgroundOn(
        (current) => !current
      );
    }, []);

  return (
    <main className="player-page">

      {backgroundOn && currentScene?.image && (
        <SceneBackground
          scene={currentScene}
        />
      )}

      <div className="top-controls">
        <button
          type="button"
          className="back-button"
          onClick={() => navigate("/")}
        >
          <span>←</span>
          <span>Vibes</span>
        </button>

        <button
          type="button"
          className={`bg-toggle-button ${
            backgroundOn ? "active" : "off"
          }`}
          onClick={toggleBackground}
          aria-pressed={backgroundOn}
          aria-label={
            backgroundOn
              ? "Background on"
              : "Background off"
          }
        >
          BG
        </button>
      </div>

      <div className="player-station-mark">

        <span>
          {playlist.stationCode}
        </span>

        <span>
          MOODWAVE FM
        </span>

      </div>


      <div className="player-page-content">

        <section className="playlist-intro">

          <p
            className="playlist-category"
            style={{
              color: playlist.accent,
            }}
          >
            {categoryLabel}
          </p>


          <h1>
            {playlist.name}
          </h1>


          <p className="playlist-subtitle">
            {playlist.subtitle}
          </p>


          <p className="playlist-description">
            {playlist.description}
          </p>


          <p className="playlist-liner">
            {playlist.linerNote}
          </p>


          <p className="playlist-count">
            {playlist.songs.length} TRACKS
          </p>

        </section>


        <section className="player-shell">

          <MusicPlayer
            songs={playlist.songs}
            onTrackChange={
              handleTrackChange
            }
          />

        </section>


        <div className="scene-controls">

          <button
            type="button"
            className="scene-button"
            onClick={
              handleManualSceneChange
            }
            style={{
              borderColor:
                playlist.accent,
            }}
          >
            SCENE ↻
          </button>


          <span className="scene-indicator">

            {String(
              sceneIndex + 1
            ).padStart(2, "0")}

            {" / "}

            {String(
              playlist.scenes.length
            ).padStart(2, "0")}

          </span>

        </div>


        <p className="player-hint">
          PRESS PLAY · DISAPPEAR
        </p>

      </div>

    </main>
  );
}


export default PlayerPage;
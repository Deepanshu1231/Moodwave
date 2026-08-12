import "../App.css";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  categoryLabels,
  playlistsByCategory,
} from "../data/playlists";
import {
  sartaajWowMoments,
} from "../data/sartaajWowMoments";

import {
  independenceDayBroadcast,
} from "../data/specialBroadcasts";

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


function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedText(text: string) {
  const highlights = ["Saaz-e-Sartaaj", "Dha", "Tirkat"];
  const pattern = new RegExp(
    `(${highlights.map(escapeRegExp).join("|")})`,
    "g"
  );

  return text.split(pattern).map((part, index) => {
    if (highlights.includes(part)) {
      return (
        <span
          key={index}
          className="wow-moment-highlight"
        >
          {part}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

function PlayerPage() {
  const sceneIndexRef = useRef(0);

  const {
  category,
  id,
  broadcastId,
  } = useParams<{
    category?: string;
    id?: string;
    broadcastId?: string;
  }>();

  const navigate = useNavigate();

  const validCategory = isCategory(category);

const playlists =
  validCategory
    ? playlistsByCategory[category]
    : [];

const regularPlaylist =
  playlists.find(
    (item) => item.id === id
  );

const broadcast =
  broadcastId === independenceDayBroadcast.id
    ? independenceDayBroadcast
    : undefined;

const playlist =
  broadcast?.playlist ?? regularPlaylist;

  /*
   * Hooks must always run in the same order.
   * Therefore useScene is called even when
   * the playlist is not found.
   */
  const scenes =
    playlist?.scenes ?? [];

  const [backgroundOn, setBackgroundOn] = useState(true);
  const [mehfilMode, setMehfilMode] = useState(false);
  const [archiveIndex, setArchiveIndex] = useState(0);
  const [wowRevealIndex, setWowRevealIndex] = useState(1);

  const isSartaaj = playlist?.id === "sartaaj";

  const mehfilPortrait = "/images/archivalportrait.jpg";
  const mehfilBackground = "/images/Mehfilbackground.jpg";
  const mehfilTransition = "/images/poeticcountryside.jpg";

  const archiveItems = playlist?.archiveItems ?? [];
  const currentArchiveItem = archiveItems[archiveIndex];
  const wowMoment = sartaajWowMoments[0];
  const visibleWowSections = wowMoment.sections.slice(0, wowRevealIndex);
  const hasMoreWowSections = wowRevealIndex < wowMoment.sections.length;

  useEffect(() => {
    if (!isSartaaj) {
      setMehfilMode(false);
    }
  }, [isSartaaj]);

  useEffect(() => {
    if (!mehfilMode) {
      setArchiveIndex(0);
      setWowRevealIndex(1);
    }
  }, [mehfilMode]);

  useEffect(() => {
    setArchiveIndex(0);
    setWowRevealIndex(1);
  }, [playlist?.id]);

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
  broadcast
    ? "SPECIAL BROADCAST"
    : validCategory
      ? categoryLabels[category]
      : "";


  const toggleBackground =
    useCallback(() => {
      setBackgroundOn(
        (current) => !current
      );
    }, []);

  const toggleMehfilMode =
    useCallback(() => {
      if (!isSartaaj) {
        return;
      }

      setMehfilMode(
        (current) => !current
      );
    }, [isSartaaj]);

  const showPreviousArchive =
    useCallback(() => {
      if (archiveItems.length === 0) {
        return;
      }

      setArchiveIndex((current) =>
        current === 0
          ? archiveItems.length - 1
          : current - 1
      );
    }, [archiveItems.length]);

  const showNextArchive =
    useCallback(() => {
      if (archiveItems.length === 0) {
        return;
      }

      setArchiveIndex((current) =>
        (current + 1) % archiveItems.length
      );
    }, [archiveItems.length]);

  const showNextWowSection =
    useCallback(() => {
      setWowRevealIndex((current) =>
        Math.min(current + 1, wowMoment.sections.length)
      );
    }, [wowMoment.sections.length]);

  return (
    <main className={`player-page ${playlist.specialClass ? `player-page-${playlist.specialClass}` : ""} ${mehfilMode ? "mehfil-mode" : ""}`}>

      {currentScene?.image && (
        <SceneBackground
          scene={currentScene}
          visible={backgroundOn}
          mode={
            isSartaaj && mehfilMode
              ? "mehfil"
              : "normal"
          }
          backgroundImage={
            isSartaaj && mehfilMode
              ? mehfilBackground
              : undefined
          }
          secondaryImage={
            isSartaaj && mehfilMode
              ? mehfilTransition
              : undefined
          }
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

        {isSartaaj && (
          <button
            type="button"
            className={`mehfil-toggle-button ${
              mehfilMode ? "active" : ""
            }`}
            onClick={toggleMehfilMode}
            aria-pressed={mehfilMode}
          >
            {mehfilMode ? "EXIT THE MEHFIL" : "MEHFIL MEIN"}
          </button>
        )}
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

          {(playlist.portraitImage || (isSartaaj && mehfilMode)) && (
            <img
              className="playlist-portrait"
              src={
                isSartaaj && mehfilMode
                  ? mehfilPortrait
                  : playlist.portraitImage
              }
              alt={playlist.name}
            />
          )}

          <p
            className="playlist-category"
            style={{
              color: playlist.accent,
            }}
          >
            {categoryLabel}
          </p>

          {playlist.customLabel && (
            <p className="playlist-special-label">
              {playlist.customLabel}
            </p>
          )}

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
            {playlist.customLinerText ?? playlist.linerNote}
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
            titleLabel={
              isSartaaj && mehfilMode
                ? "MEHFIL MEIN"
                : undefined
            }
          />

        </section>

        {isSartaaj && mehfilMode && (
          <section className="mehfil-panel">
            <AnimatePresence mode="wait">
              {currentArchiveItem ? (
                <motion.section
                  key="archive"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mehfil-archive"
                >
                  <div className="archive-header">
                    <span>SARTAaj ARCHIVE</span>
                    <span className="archive-counter">
                      {String(archiveIndex + 1).padStart(2, "0")} /
                      {String(archiveItems.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="archive-content">
                    <p className="archive-category">
                      {currentArchiveItem.category}
                    </p>
                    <h2 className="archive-title">
                      {currentArchiveItem.title}
                    </h2>
                    <p className="archive-description">
                      {currentArchiveItem.shortDescription}
                    </p>
                    {(currentArchiveItem.year || currentArchiveItem.source) && (
                      <p className="archive-source">
                        {currentArchiveItem.year ? currentArchiveItem.year : ""}
                        {currentArchiveItem.year && currentArchiveItem.source ? " · " : ""}
                        {currentArchiveItem.source ?? ""}
                      </p>
                    )}
                  </div>

                  <div className="archive-actions">
                    <button
                      type="button"
                      className="archive-nav-button"
                      onClick={showPreviousArchive}
                      aria-label="Previous archive item"
                    >
                      PREV
                    </button>
                    <button
                      type="button"
                      className="archive-nav-button"
                      onClick={showNextArchive}
                      aria-label="Next archive item"
                    >
                      NEXT
                    </button>
                  </div>
                </motion.section>
              ) : null}
            </AnimatePresence>
          </section>
        )}

        {isSartaaj && mehfilMode && (
          <section className="wow-moment-card">
            <div className="wow-moment-header">
              <span className="wow-moment-label">
                {wowMoment.label}
              </span>
              <h2 className="wow-moment-title">
                {wowMoment.title}
              </h2>
              <p className="wow-moment-subtitle">
                {wowMoment.subtitle}
              </p>
            </div>

            <div className="wow-moment-body">
              <img
                className="wow-moment-image"
                src={wowMoment.image}
                alt="Sartaaj"
              />

              <div className="wow-moment-story">
                {visibleWowSections.map((section) => (
                  <div
                    key={section.id}
                    className="wow-moment-section"
                  >
                    {section.heading ? (
                      <h3 className="wow-moment-section-heading">
                        {section.heading}
                      </h3>
                    ) : null}
                    <p className="wow-moment-section-text">
                      {renderHighlightedText(section.text)}
                    </p>
                  </div>
                ))}

                {visibleWowSections.length === wowMoment.sections.length ? (
                  <p className="wow-moment-closing">
                    {wowMoment.closingLine}
                  </p>
                ) : null}

                <div className="wow-moment-actions">
                  {hasMoreWowSections ? (
                    <button
                      type="button"
                      className="wow-moment-continue"
                      onClick={showNextWowSection}
                    >
                      CONTINUE
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        )}

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
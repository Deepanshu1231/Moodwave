import {
  independenceDayBroadcast,
} from "../data/specialBroadcasts";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import MusicPlayer from "./MusicPlayer";

import {
  categoryIds,
  categoryLabels,
  playlistsByCategory,
} from "../data/playlists";

import type {
  Category,
} from "../types/music";

import "./PlaylistSelector.css";

const seasonalBroadcast = {
  active: true,
  ...independenceDayBroadcast,
};

function PlaylistSelector() {
  const navigate = useNavigate();

  const [category, setCategory] =
    useState<Category>("hindi");

  const playlists =
    playlistsByCategory[category];

  const currentIndex =
    categoryIds.indexOf(category);

  const switchCategory = () => {
    const nextIndex =
      (currentIndex + 1) % categoryIds.length;

    setCategory(
      categoryIds[nextIndex]
    );
  };

  const [isBroadcastActive, setIsBroadcastActive] =
    useState(false);

  const [quoteIndex, setQuoteIndex] =
    useState(0);

  const quoteTimerRef =
    useRef<number | null>(null);

  useEffect(() => {
    if (isBroadcastActive) {
      // start rotating quotes every 8s
      quoteTimerRef.current = window.setInterval(() => {
        setQuoteIndex((i) => (i + 1) % (seasonalBroadcast.quotes?.length || 1));
      }, 8000);
    } else {
      if (quoteTimerRef.current !== null) {
        window.clearInterval(quoteTimerRef.current);
        quoteTimerRef.current = null;
      }
      setQuoteIndex(0);
    }

    return () => {
      if (quoteTimerRef.current !== null) {
        window.clearInterval(quoteTimerRef.current);
        quoteTimerRef.current = null;
      }
    };
  }, [isBroadcastActive]);

  return (
    <main className="playlist-container">

      {/* STATION HEADER */}
      <header className="station-header">
        <div className="station-brand">
          <span className="station-name">
            MOODWAVE FM
          </span>

          <span className="station-tagline">
            RADIO FOR EVERY MOOD
          </span>
        </div>

        <div className="station-code">
          <span>MW / 001</span>
          <span>EST. 1978</span>
        </div>
      </header>


      {/* HERO */}
      <section className="playlist-hero">

        <motion.p
          className="hero-eyebrow"
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          WELCOME TO THE FREQUENCY
        </motion.p>

        <motion.h1
          className="playlist-heading"
          initial={{
            opacity: 0,
            y: -25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          Choose Your Vibe
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          PRESS PLAY. LEAVE THE WORLD BEHIND.
        </motion.p>

      </section>


      {/* CATEGORY SELECTOR */}
      <div className="toggle-wrapper">

        <div
          className="toggle-track"
          onClick={switchCategory}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              switchCategory();
            }
          }}
          aria-label="Switch music category"
        >

          <motion.div
            className="toggle-thumb"
            animate={{
              left: `calc(4px + ((100% - 8px) / 3) * ${currentIndex})`,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 28,
            }}
          />

          {categoryIds.map(
            (categoryId) => (
              <span
                key={categoryId}
                className={
                  category === categoryId
                    ? "toggle-label active"
                    : "toggle-label"
                }
              >
                {categoryLabels[categoryId]}
              </span>
            )
          )}

        </div>

      </div>


      {/* ON AIR */}
      <div className="on-air-row">
        <span className="on-air-dot" />
        <span>ON AIR</span>
        <span className="on-air-line" />
        <span className="on-air-category">
          {categoryLabels[category]}
        </span>
      </div>


      {/* SEASONAL BROADCAST */}
      {seasonalBroadcast.active && (
        <motion.section
          className={`seasonal-broadcast ${isBroadcastActive ? "active" : ""}`}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(10, 12, 14, 0.88),
                rgba(10, 12, 14, 0.52),
                rgba(10, 12, 14, 0.78)
              ),
              url("${seasonalBroadcast.bannerImage}")
            `,
          }}
        >
          <div className="seasonal-broadcast-content">

            <span className="seasonal-broadcast-eyebrow">
              15 AUGUST · SPECIAL BROADCAST
            </span>

            <h2>
              {seasonalBroadcast.title}
            </h2>

            <p>
              {seasonalBroadcast.subtitle}
              {" · "}
              {seasonalBroadcast.description}
            </p>

            <button
              type="button"
              className="seasonal-broadcast-button"
              onClick={() => setIsBroadcastActive((s) => !s)}
              aria-pressed={isBroadcastActive}
            >
              {isBroadcastActive
                ? "■ ON AIR · AZAADI KI DHUN"
                : "▶ LISTEN TO THE BROADCAST"}
            </button>

            {/* Broadcast extra info when active */}
            {isBroadcastActive && (
              <div className="broadcast-extras">
                <div className="broadcast-onair">
                  <span className="broadcast-dot" />
                  <div className="broadcast-meta">
                    <div className="broadcast-station">ON AIR</div>
                    <div className="broadcast-title">{(seasonalBroadcast.title || "Azaadi Ki Dhun").toUpperCase()}</div>
                  </div>
                </div>

                <div className="broadcast-nowplaying">
                  <MusicPlayer
                    songs={seasonalBroadcast.playlist.songs}
                    shouldPlay={isBroadcastActive}
                    titleLabel="NOW PLAYING"
                  />
                </div>

                <div className="broadcast-quote-wrap">
                  <AnimatePresence mode="wait">
                    <motion.blockquote
                      key={quoteIndex}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.6 }}
                      className="broadcast-quote"
                    >
                      <p>
                        {seasonalBroadcast.quotes?.[quoteIndex]?.text}
                      </p>

                      <footer>
                        — {seasonalBroadcast.quotes?.[quoteIndex]?.author}
                      </footer>
                    </motion.blockquote>
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </motion.section>
      )}


      {/* PLAYLISTS */}
      <AnimatePresence mode="wait">

        <motion.div
          key={category}
          className="playlist-grid"

          initial={{
            opacity: 0,
            y: 15,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
            y: -15,
          }}

          transition={{
            duration: 0.35,
          }}
        >

          {playlists.map(
            (playlist, index) => (

              <motion.article
                key={playlist.id}
                className="playlist-card"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}

                whileHover={{
                  scale: 1.018,
                }}

                whileTap={{
                  scale: 0.965,
                  y: 2,
                }}

                onClick={() =>
                  navigate(
                    `/player/${category}/${playlist.id}`
                  )
                }
              >
                

                <div
                  className="playlist-card-image"
                  style={{
                    backgroundImage:
                      playlist.scenes[0]?.image
                        ? `url(${playlist.scenes[0].image})`
                        : undefined,
                  }}
                />

                <div className="playlist-card-content">

                  <span className="playlist-card-text">
                    {playlist.name}
                  </span>

                  <span className="playlist-card-subtitle">
                    {playlist.name
                      .replace(
                        " Playlist",
                        ""
                      )
                      .toUpperCase()}
                  </span>

                  <span className="playlist-card-count">
                    {String(
                      playlist.songs.length
                    ).padStart(2, "0")} TRACKS
                  </span>

                </div>

              </motion.article>

            )
          )}

        </motion.div>

      </AnimatePresence>


      {/* FOOTER */}
      <footer className="station-footer">

        <span>
          MOODWAVE FM
        </span>

        <span className="footer-divider">
          ·
        </span>

        <span>
          MW / 001
        </span>

        <span className="footer-divider">
          ·
        </span>

        <span>
          BROADCASTING FROM SOMEWHERE BETWEEN THEN & NOW
        </span>

      </footer>

      {/* CREDIT */}
      <div className="creator-credit">
        @Prafful Jain
      </div>

    </main>
  );
}

export default PlaylistSelector;
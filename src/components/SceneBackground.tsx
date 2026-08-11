import { motion } from "framer-motion";
import type { Scene } from "../types/music";
import "./SceneBackground.css";

interface SceneBackgroundProps {
  scene: Scene;
  visible?: boolean;
  mode?: "normal" | "mehfil";
  backgroundImage?: string;
  secondaryImage?: string;
}

function SceneBackground({
  scene,
  visible = true,
  mode = "normal",
  backgroundImage,
  secondaryImage,
}: SceneBackgroundProps) {
  const isMehfil = mode === "mehfil";
  const primaryImage =
    isMehfil && backgroundImage
      ? backgroundImage
      : scene.image;
  const opacityDuration = isMehfil ? 0.55 : 0.4;
  const scaleDuration = isMehfil ? 11 : 8;

  return (
    <div
      className={`scene-background ${
        isMehfil ? "scene-mode-mehfil" : ""
      }`}
    >
      {secondaryImage && (
        <motion.div
          key={`secondary-${scene.id}`}
          className="scene-secondary"
          style={{
            backgroundImage: `url(${secondaryImage})`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 0.16 : 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        />
      )}

      <motion.div
        key={`primary-${scene.id}-${isMehfil}`}
        className="scene-image"
        style={{
          backgroundImage: `url(${primaryImage})`,
        }}
        initial={{
          opacity: visible ? 0 : 0,
          scale: 1.04,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: opacityDuration,
            ease: "easeInOut",
          },
          scale: {
            duration: scaleDuration,
            ease: "easeOut",
          },
        }}
      />

      <div className="scene-overlay" />

      <div className="scene-vignette" />

      <div className="scene-grain" />
    </div>
  );
}

export default SceneBackground;
import { AnimatePresence, motion } from "framer-motion";
import type { Scene } from "../types/music";
import "./SceneBackground.css";

interface SceneBackgroundProps {
  scene: Scene;
}

function SceneBackground({
  scene,
}: SceneBackgroundProps) {
  return (
    <div className="scene-background">
      <AnimatePresence mode="sync">
        <motion.div
          key={scene.id}
          className="scene-image"
          style={{
            backgroundImage: `url(${scene.image})`,
          }}
          initial={{
            opacity: 0,
            scale: 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            opacity: {
              duration: 0.4,
              ease: "easeInOut",
            },
            scale: {
              duration: 8,
              ease: "easeOut",
            },
          }}
        />
      </AnimatePresence>

      <div className="scene-overlay" />

      <div className="scene-vignette" />

      <div className="scene-grain" />
    </div>
  );
}

export default SceneBackground;
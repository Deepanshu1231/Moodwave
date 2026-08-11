import { useCallback, useState } from "react";
import type { Scene } from "../types/music";

interface UseSceneResult {
  currentScene: Scene | undefined;
  currentIndex: number;
  nextScene: () => void;
  setScene: (index: number) => void;
}

function useScene(scenes: Scene[]): UseSceneResult {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScene = useCallback(() => {
    if (scenes.length === 0) {
      return;
    }

    setCurrentIndex(
      (current) => (current + 1) % scenes.length
    );
  }, [scenes]);

  const setScene = useCallback(
    (index: number) => {
      if (
        index < 0 ||
        index >= scenes.length
      ) {
        return;
      }

      setCurrentIndex(index);
    },
    [scenes]
  );

  const currentScene =
    scenes[currentIndex] ?? scenes[0];

  return {
    currentScene,
    currentIndex,
    nextScene,
    setScene,
  };
}

export default useScene;
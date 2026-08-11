let youtubeApiPromise: Promise<any> | null = null;

export function loadYouTubeAPI(): Promise<any> {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise((resolve, reject) => {
    const existingScript = document.querySelector(
      'script[src="https://www.youtube.com/iframe_api"]'
    );

    const previousCallback = window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve(window.YT);
    };

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");

    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;

    script.onerror = () => {
      youtubeApiPromise = null;
      reject(new Error("Failed to load YouTube IFrame API"));
    };

    document.body.appendChild(script);
  });

  return youtubeApiPromise;
}
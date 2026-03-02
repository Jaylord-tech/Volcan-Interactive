import { useEffect } from "react";

const CRITICAL_IMAGE_URLS = [
  "/Volcan-Interactive/assests/logo.webp",
  "/Volcan-Interactive/assests/heroImg1.webp",
  "/Volcan-Interactive/assests/button.webp",
  "/Volcan-Interactive/assests/contactButton.webp",
];

const WARMUP_IMAGE_URLS = [
  "/Volcan-Interactive/assests/heroImg2.webp",
  "/Volcan-Interactive/assests/heroImg3.webp",
  "/Volcan-Interactive/assests/heroImg4.webp",
  "/Volcan-Interactive/assests/heroImg5.webp",
  "/Volcan-Interactive/assests/serviceBackground.webp",
  "/Volcan-Interactive/assests/serviceDesign.webp",
  "/Volcan-Interactive/assests/aboutBackground1.webp",
  "/Volcan-Interactive/assests/newsBackground.webp",
  "/Volcan-Interactive/assests/background.webp",
  "/Volcan-Interactive/assests/background2.webp",
  "/Volcan-Interactive/assests/getInTouch.webp",
  "/Volcan-Interactive/assests/deliver.webp",
  "/Volcan-Interactive/assests/outLine.webp",
  "/Volcan-Interactive/assests/weOffer11.webp",
  "/Volcan-Interactive/assests/weOffer22.webp",
  "/Volcan-Interactive/assests/weOffer33.webp",
  "/Volcan-Interactive/assests/weOffer44.webp",
  "/Volcan-Interactive/assests/chess.webp",
  "/Volcan-Interactive/assests/halloween.webp",
  "/Volcan-Interactive/assests/critters.webp",
  "/Volcan-Interactive/assests/unitedState.webp",
  "/Volcan-Interactive/assests/blogBackground.webp",
  "/Volcan-Interactive/assests/chessBackground.webp",
  "/Volcan-Interactive/assests/crittersBackground.webp",
  "/Volcan-Interactive/assests/unitedBackround.webp",
];

const preloadImage = (url) => {
  const img = new Image();
  img.decoding = "async";
  img.src = url;
};

const warmupInBatches = (urls, batchSize = 3, intervalMs = 120) => {
  let index = 0;

  const tick = () => {
    for (let i = 0; i < batchSize && index < urls.length; i += 1) {
      preloadImage(urls[index]);
      index += 1;
    }
    if (index < urls.length) {
      window.setTimeout(tick, intervalMs);
    }
  };

  tick();
};

function ImageWarmup() {
  useEffect(() => {
    if (window.__volcanImageWarmupDone) return;
    window.__volcanImageWarmupDone = true;

    CRITICAL_IMAGE_URLS.forEach(preloadImage);

    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const shouldSkipWarmup = Boolean(connection && connection.saveData);
    if (shouldSkipWarmup) return;

    const runWarmup = () => {
      const urls = WARMUP_IMAGE_URLS.filter(
        (url) => !CRITICAL_IMAGE_URLS.includes(url)
      );
      warmupInBatches(urls);
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(runWarmup, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(runWarmup, 700);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

export default ImageWarmup;

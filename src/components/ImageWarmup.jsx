import { useEffect } from "react";

const CRITICAL_IMAGE_URLS = [
  "/assests/logo.webp",
  "/assests/heroImg1.webp",
  "/assests/button.webp",
  "/assests/contactButton.webp",
];

const WARMUP_IMAGE_URLS = [
  "/assests/heroImg2.webp",
  "/assests/heroImg3.webp",
  "/assests/heroImg4.webp",
  "/assests/heroImg5.webp",
  "/assests/serviceBackground.webp",
  "/assests/serviceDesign.webp",
  "/assests/aboutBackground1.webp",
  "/assests/newsBackground.webp",
  "/assests/background.webp",
  "/assests/background2.webp",
  "/assests/getInTouch.webp",
  "/assests/deliver.webp",
  "/assests/outLine.webp",
  "/assests/weOffer11.webp",
  "/assests/weOffer22.webp",
  "/assests/weOffer33.webp",
  "/assests/weOffer44.webp",
  "/assests/chessGame.webp",
  "/assests/halloween.webp",
  "/assests/critters.webp",
  "/assests/unitedState.webp",
  "/assests/blogBackground.webp",
  "/assests/chessBackground.webp",
  "/assests/crittersBackground.webp",
  "/assests/unitedBackround.webp",
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
